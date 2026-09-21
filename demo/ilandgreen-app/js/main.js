window.IG = window.IG || {};

document.addEventListener('DOMContentLoaded', () => {
  const screenEl = document.getElementById('screen');
  const statusEl = document.querySelector('.status');
  const tabbarEl = document.getElementById('tabbar');
  IG.router.init(screenEl, statusEl, tabbarEl);
  IG.router.navigate('splash');
});
