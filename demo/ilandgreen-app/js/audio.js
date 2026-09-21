window.IG = window.IG || {};

IG.audio = (() => {
  let audioContext, noise, drone, gain;

  function ensureGraph() {
    if (audioContext) return;
    audioContext = new (window.AudioContext || window.webkitAudioContext)();
    gain = audioContext.createGain();
    gain.gain.value = 0.07;
    gain.connect(audioContext.destination);

    const buffer = audioContext.createBuffer(1, audioContext.sampleRate * 2, audioContext.sampleRate);
    const data = buffer.getChannelData(0);
    let last = 0;
    for (let i = 0; i < data.length; i++) {
      const white = Math.random() * 2 - 1;
      last = last * 0.985 + white * 0.015;
      data[i] = last * 3.2;
    }
    noise = audioContext.createBufferSource();
    noise.buffer = buffer;
    noise.loop = true;
    const lowpass = audioContext.createBiquadFilter();
    lowpass.type = 'lowpass';
    lowpass.frequency.value = 650;
    noise.connect(lowpass).connect(gain);
    noise.start();

    drone = audioContext.createOscillator();
    drone.type = 'sine';
    drone.frequency.value = 92;
    drone.connect(gain);
    drone.start();
  }

  function toggle(buttonEl) {
    ensureGraph();
    const playing = audioContext.state === 'running';
    if (playing) {
      audioContext.suspend();
      IG.state.set('audio.playing', false);
    } else {
      audioContext.resume();
      IG.state.set('audio.playing', true);
    }
    if (buttonEl) {
      const isPlaying = IG.state.get().audio.playing;
      buttonEl.classList.toggle('is-active', isPlaying);
      if (buttonEl.classList.contains('play-btn')) {
        buttonEl.innerHTML = IG.components.icon(isPlaying ? 'pause' : 'play', 18);
      } else {
        buttonEl.innerHTML = `${isPlaying ? 'Playing' : 'Audition'}${IG.components.icon(isPlaying ? 'pause' : 'play', 18)}`;
      }
      document.querySelector('.wave-bars')?.classList.toggle('is-playing', isPlaying);
    }
  }

  return { toggle };
})();
