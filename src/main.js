import './style.scss';
import avatar from './assets/avatar.webp';
import banner from './assets/carbon.webp';

document.getElementById('avatar').src = avatar;
document.getElementById('banner').src = banner;

const toggle = document.getElementById('panel-toggle');
const panel = document.querySelector('main');

function applyOpaque(opaque) {
  panel.classList.toggle('opaque', opaque);
  toggle.classList.toggle('opaque', opaque);
  toggle.setAttribute('aria-pressed', String(opaque));
  try {
    localStorage.setItem('panel-opaque', String(opaque));
  } catch { }
}

applyOpaque(localStorage.getItem('panel-opaque') === 'true');

toggle.addEventListener('click', () => {
  applyOpaque(!panel.classList.contains('opaque'));
});

