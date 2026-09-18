window.IG = window.IG || {};

IG.router = (() => {
  const OVERLAY_SCREENS = new Set(['welcome', 'quicktest', 'mixer']);
  const TABBAR_SCREENS = new Set(['home', 'mixer']);
  let screenEl, statusEl, tabbarEl;

  function init(screenElement, statusElement, tabbarElement) {
    screenEl = screenElement;
    statusEl = statusElement;
    tabbarEl = tabbarElement;
    document.querySelector('.phone').addEventListener('click', onClick);
  }

  function navigate(name) {
    IG.state.set('screen', name);
    screenEl.innerHTML = IG.screens[name]();
    screenEl.scrollTop = 0;
    statusEl.classList.toggle('on-dark', OVERLAY_SCREENS.has(name));
    if (TABBAR_SCREENS.has(name)) {
      tabbarEl.innerHTML = IG.components.bottomTabBar(name);
      tabbarEl.hidden = false;
    } else {
      tabbarEl.hidden = true;
      tabbarEl.innerHTML = '';
    }
    if (name === 'splash') {
      setTimeout(() => { if (IG.state.get().screen === 'splash') navigate('welcome'); }, 1400);
    }
  }

  function onClick(e) {
    const el = e.target.closest('[data-action],[data-persona],[data-answer],[data-base],[data-atmo],[data-category]');
    if (!el) return;
    handle(el);
  }

  function handle(el) {
    if (el.dataset.action) handleAction(el, el.dataset.action);
    if (el.dataset.persona) handlePersona(el.dataset.persona);
    if (el.dataset.answer) handleAnswer(el.dataset.answer);
    if (el.dataset.base) handleMixerPick('base', el.dataset.base);
    if (el.dataset.atmo) handleMixerPick('atmosphere', el.dataset.atmo);
    if (el.dataset.category) handleCategory(el.dataset.category);
  }

  function handleAction(el, action) {
    switch (action) {
      case 'go-onboarding': navigate('onboarding'); break;
      case 'go-home': navigate('home'); break;
      case 'go-quicktest': navigate('quicktest'); break;
      case 'go-mixer': navigate('mixer'); break;
      case 'go-mixerresult': navigate('mixerresult'); break;
      case 'quiz-start': IG.state.resetQuiz(); navigate('quiz'); break;
      case 'quiz-back': quizBack(); break;
      case 'back': navigate('home'); break;
      case 'audition': IG.audio.toggle(el); break;
      case 'save': IG.components.toast('Saved to your Eco Journey Archive!'); break;
      case 'stub': IG.components.toast('Coming soon!'); break;
      default: break;
    }
  }

  function handlePersona(key) {
    IG.state.set('onboarding.persona', key);
    navigate('onboarding');
  }

  function handleAnswer(value) {
    const [questionKey, optKey] = value.split(':');
    const s = IG.state.get();
    const step = s.quiz.step;
    s.quiz.answers[step] = optKey;
    if (step < IG.data.quiz.length - 1) {
      s.quiz.step = step + 1;
      navigate('quiz');
    } else {
      navigate('quizresult');
    }
  }

  function quizBack() {
    const s = IG.state.get();
    if (s.quiz.step > 0) {
      s.quiz.step -= 1;
      navigate('quiz');
    } else {
      navigate('quicktest');
    }
  }

  function handleMixerPick(field, value) {
    IG.state.set(`mixer.${field}`, value);
    navigate('mixer');
  }

  function handleCategory(key) {
    IG.state.set('mixer.category', key);
    IG.state.set('mixer.atmosphere', IG.data.mixerCategories[key].atmosphere[0]);
    navigate('mixer');
  }

  return { init, navigate, handle };
})();
