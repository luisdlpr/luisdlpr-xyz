import './style.scss';
import bgMp4 from './assets/bg.mp4';

const motionPref = window.matchMedia('(prefers-reduced-motion: reduce)');

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
const bgVideo = document.querySelector('.bg-video');
bgVideo.src = bgMp4;

function applyBgStatic(paused) {
  if (paused) {
    bgVideo.pause();
  } else {
    bgVideo.play().catch(() => { });
  }
  bgToggle.classList.toggle('static', paused);
  bgToggle.setAttribute('aria-pressed', String(paused));
  try {
    localStorage.setItem('bg-static', String(paused));
  } catch { }
}

function syncMotion() {
  if (motionPref.matches) {
    applyBgStatic(true);
    bgToggle.disabled = true;
    bgToggle.removeAttribute('title');
    bgToggle.dataset.tip = 'Reduced motion is on — animation disabled';
  } else {
    bgToggle.disabled = false;
    bgToggle.title = 'Toggle background animation';
    delete bgToggle.dataset.tip;
    applyBgStatic(localStorage.getItem('bg-static') === 'true');
  }
}

bgToggle.addEventListener('click', () => {
  if (bgToggle.disabled) return;
  applyBgStatic(!bgToggle.classList.contains('static'));
});

syncMotion();
motionPref.addEventListener('change', syncMotion);

document.getElementById('name').addEventListener('click', (e) => {
  e.currentTarget.classList.toggle('collapsed');
});

