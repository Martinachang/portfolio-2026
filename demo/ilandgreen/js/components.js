window.IG = window.IG || {};

IG.components = (() => {
  const ICON_PATHS = {
    home: '<path d="M3 11l9-8 9 8"/><path d="M5 10v10h5v-6h4v6h5V10"/>',
    search: '<circle cx="11" cy="11" r="7"/><path d="M21 21l-4.35-4.35"/>',
    grid: '<circle cx="6" cy="6" r="2"/><circle cx="18" cy="6" r="2"/><circle cx="6" cy="18" r="2"/><circle cx="18" cy="18" r="2"/>',
    bag: '<path d="M6 7h12l1 13H5L6 7z"/><path d="M9 7a3 3 0 0 1 6 0"/>',
    user: '<circle cx="12" cy="8" r="4"/><path d="M4 21c0-4 4-6 8-6s8 2 8 6"/>',
    back: '<path d="M15 5l-7 7 7 7"/>',
    arrow: '<path d="M5 12h14"/><path d="M13 6l6 6-6 6"/>',
    leaf: '<path d="M5 19c8 1 13-4 14-13-9 0-14 4-14 13z"/><path d="M5 19c0-5 3-8 8-10"/>',
    globe: '<circle cx="12" cy="12" r="9"/><path d="M3 12h18"/><path d="M12 3a14 14 0 0 1 0 18 14 14 0 0 1 0-18z"/>',
    compass: '<circle cx="12" cy="12" r="9"/><path d="M14.8 9.2l-2 5.6-5.6 2 2-5.6 5.6-2z"/>',
    play: '<path d="M8 5l12 7-12 7V5z" fill="currentColor" stroke="none"/>',
    pause: '<rect x="7" y="5" width="4" height="14" fill="currentColor" stroke="none"/><rect x="13" y="5" width="4" height="14" fill="currentColor" stroke="none"/>',
    chevronDown: '<path d="M6 9l6 6 6-6"/>',
    bookmark: '<path d="M6 4h12v16l-6-4-6 4V4z" fill="currentColor" stroke="none"/>',
  };

  function icon(name, size) {
    const s = size || 20;
    return `<svg class="icon" width="${s}" height="${s}" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">${ICON_PATHS[name] || ''}</svg>`;
  }

  function brandMark() {
    return '<span class="brand-mark" aria-hidden="true"><i></i><i></i><i></i><i></i></span>';
  }

  function topBar({ overlay = false, showBack = false, backAction = 'back', rightIcon = null } = {}) {
    const left = showBack
      ? `<button class="back-btn" data-action="${backAction}" aria-label="Back">${icon('back')}</button>`
      : `<span class="brand">${brandMark()}ILANDGREEN</span>`;
    const right = rightIcon
      ? `<button class="icon-btn" data-action="${rightIcon.action}" aria-label="${rightIcon.label}">${icon(rightIcon.name)}</button>`
      : '<span></span>';
    return `<div class="topbar ${overlay ? 'overlay' : ''}">${left}${right}</div>`;
  }

  function bottomTabBar(activeKey) {
    const item = (key, name, label) =>
      `<button class="tabbar-item ${activeKey === key ? 'is-active' : ''}" data-action="${key === 'home' ? 'go-home' : 'stub'}" aria-label="${label}">${icon(name, 18)}</button>`;
    return `<nav class="tabbar" aria-label="Primary">
      ${item('home', 'home', 'Home')}
      ${item('search', 'search', 'Search')}
      <button class="tabbar-fab ${activeKey === 'mixer' ? 'is-active' : ''}" data-action="go-mixer" aria-label="Sound Mixer">${icon('grid', 20)}</button>
      ${item('bag', 'bag', 'Trips')}
      ${item('profile', 'user', 'Profile')}
    </nav>`;
  }

  function pillButton({ label, action, variant = 'primary', icon: iconName = null, disabled = false, id = null }) {
    const iconHtml = iconName ? icon(iconName, 18) : '';
    return `<button class="pill-btn pill-btn--${variant}" data-action="${action}" ${disabled ? 'disabled' : ''} ${id ? `id="${id}"` : ''}>${label}${iconHtml}</button>`;
  }

  function fabArrow(action, onMint = false) {
    return `<button class="fab-arrow ${onMint ? 'on-mint' : ''}" data-action="${action}" aria-label="Continue">${icon('arrow', 22)}</button>`;
  }

  function chip(label) {
    return `<span class="chip">${label}</span>`;
  }

  function chipRow(labels) {
    return `<div class="chip-row">${labels.map(chip).join('')}</div>`;
  }

  function photoCard({ src, alt, caption, chips = [], size = 'sm' }) {
    return `<div class="photo-card photo-card--${size}">
      <div class="photo-card__frame">
        <img src="${src}" alt="${alt}" loading="lazy">
        ${chips.length ? `<div class="photo-card__chips">${chips.map(chip).join('')}</div>` : ''}
      </div>
      ${caption ? `<div class="photo-card__caption">${caption}</div>` : ''}
    </div>`;
  }

  function progressBar(step, total) {
    let segs = '';
    for (let i = 0; i < total; i++) segs += `<span class="progress-seg ${i === step ? 'is-filled' : ''}"></span>`;
    return `<div class="progress-bar">${segs}</div>`;
  }

  function personaCard({ key, label, tags, icon: iconName, selected }) {
    return `<button class="persona-card ${selected ? 'is-selected' : ''}" data-persona="${key}">
      <div class="persona-card__body">
        <h3>${label}</h3>
        ${chipRow(tags)}
      </div>
      <span class="persona-card__icon">${icon(iconName, 20)}</span>
    </button>`;
  }

  function quizOptionCard({ questionKey, optKey, label, photo, selected }) {
    return `<button class="quiz-option ${selected ? 'is-selected' : ''}" data-answer="${questionKey}:${optKey}">
      <div class="quiz-option__frame"><img src="${photo}" alt="${label}" loading="lazy"></div>
      <div class="quiz-option__label">${label}</div>
    </button>`;
  }

  function wheelNode({ dataAttr, key, label, active, x, y }) {
    return `<button class="wheel-node ${active ? 'is-active' : ''}" data-${dataAttr}="${key}" style="left:${x}px;top:${y}px">${label}</button>`;
  }

  function mixerWheel({ baseNodesHtml, atmoNodesHtml, size = 300 }) {
    return `<div class="mixer-wheel" style="height:${size}px">
      <span class="mixer-wheel__label mixer-wheel__label--left">Base</span>
      <span class="mixer-wheel__label mixer-wheel__label--right">Atmosphere</span>
      <div class="mixer-wheel__center">${icon('grid', 18)}</div>
      ${baseNodesHtml}${atmoNodesHtml}
    </div>`;
  }

  function waveBars(count, playing = false) {
    let bars = '';
    for (let i = 0; i < count; i++) bars += `<i style="--h:${10 + (i * 19) % 34}px"></i>`;
    return `<div class="wave-bars ${playing ? 'is-playing' : ''}" aria-label="Animated audio waveform">${bars}</div>`;
  }

  function toast(message) {
    document.querySelector('.toast')?.remove();
    const el = document.createElement('div');
    el.className = 'toast';
    el.textContent = message;
    document.querySelector('.phone').appendChild(el);
    setTimeout(() => el.remove(), 2600);
  }

  function wave(position, tint = '#C7F1E8') {
    const flip = position === 'bottom' ? ' style="transform:scaleY(-1)"' : '';
    return `<div class="deco-wave ${position}"${flip}>
      <svg viewBox="0 0 430 180" preserveAspectRatio="none">
        <path d="M0,0 H430 V70 C 320,140 180,10 0,90 Z" fill="${tint}" opacity="0.55"/>
        <path d="M0,0 H430 V40 C 300,110 140,-10 0,60 Z" fill="#E1F7F3"/>
      </svg>
    </div>`;
  }

  function matchCard({ src, alt, kicker, title, subtitle }) {
    return `<div class="match-card">
      <img src="${src}" alt="${alt}" loading="lazy">
      <div class="match-card__overlay">
        <div class="kicker">${kicker}</div>
        <h2>${title}</h2>
        <p>${subtitle}</p>
      </div>
    </div>`;
  }

  return {
    icon, brandMark, topBar, bottomTabBar, pillButton, fabArrow, chip, chipRow,
    photoCard, progressBar, personaCard, quizOptionCard, wheelNode, mixerWheel, waveBars,
    toast, wave, matchCard,
  };
})();
