window.IG = window.IG || {};

IG.state = (() => {
  const state = {
    screen: 'splash',
    user: { name: 'Alex' },
    onboarding: { persona: null },
    quiz: { step: 0, answers: [null, null, null, null] },
    mixer: { category: 'weather', base: 'Earth', atmosphere: 'Drizzle' },
    audio: { playing: false },
  };

  function get() {
    return state;
  }

  function set(path, value) {
    const parts = path.split('.');
    let target = state;
    for (let i = 0; i < parts.length - 1; i++) target = target[parts[i]];
    target[parts[parts.length - 1]] = value;
  }

  function resetQuiz() {
    state.quiz = { step: 0, answers: [null, null, null, null] };
  }

  return { get, set, resetQuiz };
})();
