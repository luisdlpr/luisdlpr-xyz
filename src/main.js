import './style.scss';
import bgWebp from './assets/bg.webp';

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

const bgToggle = document.getElementById('bg-toggle');
const bgImg = document.querySelector('.bg-img');

function applyBgStatic(paused) {
  bgImg.style.backgroundImage = paused ? `url(${bgWebp})` : '';
  bgToggle.classList.toggle('static', paused);
  bgToggle.setAttribute('aria-pressed', String(paused));
  try {
    localStorage.setItem('bg-static', String(paused));
  } catch { }
}

applyBgStatic(localStorage.getItem('bg-static') === 'true');

bgToggle.addEventListener('click', () => {
  applyBgStatic(!bgToggle.classList.contains('static'));
});

