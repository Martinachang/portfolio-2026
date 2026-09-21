window.IG = window.IG || {};

IG.screens = (() => {
  const C = IG.components;
  const D = IG.data;

  function renderSplash() {
    return `<section class="view screen-splash">
      <div class="splash-mark" aria-hidden="true"><i></i><i></i><i></i><i></i></div>
      <div class="splash-word">ILANDGREEN</div>
    </section>`;
  }

  function renderWelcome() {
    return `<section class="view screen-welcome">
      <div class="welcome-hero"><img src="${D.photo('balloonsWelcome', 900)}" alt="Hot air balloons rising into a blue sky"></div>
      <div class="welcome-top">${C.topBar({ overlay: true })}</div>
      <div class="welcome-bottom">
        <h1>Welcome to<br>ILANDGREEN</h1>
        <p>Start a sustainable journey — plant a green seed in your heart.</p>
        ${C.pillButton({ label: 'Start Experience', action: 'go-onboarding', variant: 'primary', icon: 'arrow' })}
      </div>
    </section>`;
  }

  function renderOnboarding() {
    const persona = IG.state.get().onboarding.persona;
    return `<section class="view screen-onboarding">
      ${C.wave('top')}
      <div class="onboarding-head">
        <div class="kicker">Welcome to ILANDGREEN</div>
        <h1>Let's get to know your preferences first!</h1>
      </div>
      <div class="onboarding-list">
        ${D.personas.map(p => C.personaCard({ ...p, selected: persona === p.key })).join('')}
      </div>
      ${C.pillButton({ label: 'Start', action: 'go-home', variant: 'primary', disabled: !persona, id: 'onboarding-start' })}
      ${C.wave('bottom')}
    </section>`;
  }

  function renderHome() {
    const s = IG.state.get();
    return `<section class="view screen-home">
      <div class="home-top">
        <div class="home-greet">
          <div>
            <p class="home-eyebrow">Good afternoon</p>
            <h1>${s.user.name}</h1>
          </div>
          <span class="home-avatar">${C.icon('user', 18)}</span>
        </div>
      </div>
      <div class="home-hero-wrap">
        <div class="home-hero">
          <img src="${D.photo('homeHero', 900)}" alt="A lone hiker overlooking snowy mountains and an alpine lake">
          <div class="home-hero-copy">
            <p>&ldquo;Colorful isn't always wonderful &mdash; sometimes plain is safer.&rdquo;</p>
            ${C.pillButton({ label: 'Take the Quick Test', action: 'go-quicktest', variant: 'primary', icon: 'arrow' })}
          </div>
        </div>
      </div>
      <div class="home-sections">
        <section>
          <div class="section-head"><div><h2>More travel choices every day</h2><p>Experience a culture-immersive journey at a relaxed pace</p></div></div>
          <div class="scroll-row">
            ${C.photoCard({ src: D.photo('desertCanyon', 500), alt: 'Desert slot canyon', size: 'lg' })}
            ${C.photoCard({ src: D.photo('surfer', 500), alt: 'Surfer riding a wave', size: 'lg' })}
            ${C.photoCard({ src: D.photo('waterfallJungle', 500), alt: 'Waterfall in a lush jungle', size: 'lg' })}
          </div>
        </section>
        <section>
          <div class="section-head"><div><h2>The world's most beautiful scenery is people</h2><p>Blend into indigenous culture, where eras and traditions meet</p></div></div>
          <div class="scroll-row">
            ${C.photoCard({ src: D.photo('handsBracelet', 500), alt: 'Hands wearing a woven friendship bracelet', size: 'lg', chips: ['Heritage'] })}
            ${C.photoCard({ src: D.photo('feetRug', 500), alt: 'Feet standing on a patterned woven rug', size: 'lg', chips: ['Indigenous'] })}
            ${C.photoCard({ src: D.photo('rainforestCanopy', 500), alt: 'Rainforest canopy seen from below', size: 'lg' })}
          </div>
        </section>
      </div>
    </section>`;
  }

  function renderQuickTest() {
    return `<section class="view screen-quicktest">
      <div class="qt-hero"><img src="${D.photo('balloonsQuickTest', 900)}" alt="Hot air balloons scattered across a pastel sky"></div>
      <div class="qt-top">${C.topBar({ overlay: true, showBack: true, backAction: 'go-home' })}</div>
      <div class="qt-body">
        <h1>Choice paralysis?</h1>
        <p>Take a quick test to see where suits you best.</p>
        ${C.fabArrow('quiz-start')}
      </div>
    </section>`;
  }

  function renderQuiz() {
    const s = IG.state.get();
    const step = s.quiz.step;
    const q = D.quiz[step];
    const answer = s.quiz.answers[step];
    return `<section class="view screen-quiz">
      ${C.topBar({ showBack: true, backAction: 'quiz-back' })}
      <div class="quiz-progress">${C.progressBar(step, D.quiz.length)}</div>
      <h1 class="quiz-q">${q.headline}</h1>
      <div class="quiz-grid">
        ${q.options.map(o => C.quizOptionCard({ questionKey: q.key, optKey: o.key, label: o.label, photo: D.photo(o.photo, 400), selected: answer === o.key })).join('')}
      </div>
    </section>`;
  }

  function renderQuizResult() {
    const s = IG.state.get();
    const result = D.quizResult(s.quiz.answers);
    return `<section class="view screen-quizresult">
      ${C.topBar({ showBack: true, backAction: 'go-home' })}
      <div class="qr-head">
        <div class="kicker">Your Match</div>
        <h1>A place that fits you.</h1>
        <p>Based on your answers, here's where ILANDGREEN thinks you should go next.</p>
      </div>
      ${C.matchCard({ src: D.photo(result.photo, 700), alt: result.name, kicker: result.region, title: result.name, subtitle: result.tags.join(' · ') })}
      <div class="qr-copy">${result.copy}</div>
      <div class="qr-actions">
        ${C.pillButton({ label: 'Retake', action: 'go-quicktest', variant: 'outline' })}
        ${C.pillButton({ label: 'Back to Home', action: 'go-home', variant: 'dark' })}
      </div>
    </section>`;
  }

  const WHEEL_CX = 190;
  const WHEEL_CY = 150;
  const WHEEL_R = 108;

  // angles in standard math convention (0=right, 90=up), left arc spans the
  // left half of the circle, right arc spans the right half, mirrored around it
  function arcPositions(count, fromDeg, toDeg) {
    const step = count > 1 ? (toDeg - fromDeg) / (count - 1) : 0;
    return Array.from({ length: count }, (_, i) => {
      const rad = (fromDeg + step * i) * (Math.PI / 180);
      return {
        x: Math.round(WHEEL_CX + WHEEL_R * Math.cos(rad)),
        y: Math.round(WHEEL_CY - WHEEL_R * Math.sin(rad)),
      };
    });
  }

  function renderMixer() {
    const s = IG.state.get();
    const cat = D.mixerCategories[s.mixer.category];
    const [title, subtitle] = D.resonance(s.mixer.base, s.mixer.atmosphere);

    const basePos = arcPositions(D.mixerBase.length, 110, 250);
    const baseNodesHtml = D.mixerBase.map((b, i) => C.wheelNode({
      dataAttr: 'base', key: b.key, label: `${b.icon}<br>${b.key}`, active: s.mixer.base === b.key,
      x: basePos[i].x, y: basePos[i].y,
    })).join('');

    const atmoPos = arcPositions(cat.atmosphere.length, 70, -70);
    const atmoNodesHtml = cat.atmosphere.map((label, i) => C.wheelNode({
      dataAttr: 'atmo', key: label, label, active: s.mixer.atmosphere === label,
      x: atmoPos[i].x, y: atmoPos[i].y,
    })).join('');

    const tabs = Object.entries(D.mixerCategories).map(([key, c]) =>
      `<button class="theme-tab ${s.mixer.category === key ? 'is-active' : ''}" data-category="${key}">${c.label}</button>`
    ).join('');

    return `<section class="view screen-mixer">
      <div class="mixer-hero"><img src="${D.photo(cat.hero, 900)}" alt="${cat.label} theme background"></div>
      <div class="mixer-body">
        ${C.topBar({ overlay: true, showBack: true, backAction: 'go-home' })}
        <div class="mixer-tags"><span># Find your own white noise</span><span># Swipe to change elements</span></div>
        <div class="theme-tabs">${tabs}</div>
        <div class="mixer-title">
          <div class="kicker">Current Resonance</div>
          <h1>${title}</h1>
          <p>${subtitle}</p>
        </div>
        ${C.mixerWheel({ baseNodesHtml, atmoNodesHtml })}
        <div class="mixer-bottom">
          <div class="mixer-actions">
            ${C.pillButton({ label: 'Audition', action: 'audition', variant: 'outline', icon: 'play', id: 'audition-btn' })}
            ${C.pillButton({ label: 'Reveal Destination', action: 'go-mixerresult', variant: 'primary', icon: 'arrow' })}
          </div>
        </div>
      </div>
    </section>`;
  }

  function renderMixerResult() {
    const s = IG.state.get();
    const dest = D.mixerDestinations[s.mixer.category];
    const playing = s.audio.playing;
    return `<section class="view screen-mixerresult">
      <div class="mr-photo"><img src="${D.photo(dest.photo, 900)}" alt="${dest.name}"></div>
      <div class="mr-content">
        <div class="mr-top">
          <button class="back-btn" data-action="go-mixer" aria-label="Back">${C.icon('back')}</button>
          <button class="play-btn ${playing ? 'is-active' : ''}" data-action="audition" id="audition-btn-2" aria-label="Play or pause sound">${C.icon(playing ? 'pause' : 'play', 18)}</button>
        </div>
        <div class="mr-info">
          <h1>${dest.name}</h1>
          <div class="chip-row">${dest.tags.map(C.chip).join('')}</div>
          <p class="mr-quote">${dest.quote}</p>
        </div>
        <div class="mr-footer">
          ${C.waveBars(36, playing)}
          <div class="mr-footer-row">
            <span class="mr-caption">${dest.footnote}</span>
            <button class="mr-save" data-action="save" aria-label="Save to itinerary">${C.icon('bookmark', 18)}</button>
          </div>
        </div>
      </div>
    </section>`;
  }

  return {
    splash: renderSplash,
    welcome: renderWelcome,
    onboarding: renderOnboarding,
    home: renderHome,
    quicktest: renderQuickTest,
    quiz: renderQuiz,
    quizresult: renderQuizResult,
    mixer: renderMixer,
    mixerresult: renderMixerResult,
  };
})();
