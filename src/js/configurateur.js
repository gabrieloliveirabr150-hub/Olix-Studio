import { activites, prixFormules, ambiances } from '../data/activites.js';
import { iconesGrands } from '../data/icones.js';

const ORDRE_TYPES = ['barbier', 'cafe', 'restaurant', 'autre'];
const INDEX_PLAN = { Essentiel: 0, Pro: 1, Premium: 2 };

export function initConfigurateur(texto) {
  const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  const $ = id => document.getElementById(id);
  const state = { type: 'barbier', mood: 'elegant', name: '', typed: false };
  const scene = $('scene'), nameEl = $('sName'), wipe = $('wipe');

  if (!scene) return;

  function slug(n) {
    return (n.normalize('NFD').replace(/[̀-ͯ]/g, '').toLowerCase().replace(/[^a-z0-9]+/g, '') || texto.cfg.slugFallback) + '.ch';
  }
  function esc(c) {
    return c.replace(/[&<>"]/g, s => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;' }[s]));
  }

  let shown = '';
  function renderName(text, from) {
    const words = (text || ' ').split(' ');
    let k = 0;
    nameEl.innerHTML = words.map((w, wi) => {
      if (wi) k++;
      return '<span class="w">' + Array.from(w).map(c => {
        const i = k++;
        return '<span class="c' + (i >= from ? ' in' : '') + '" style="--k:' + Math.max(0, i - from) + '">' + esc(c) + '</span>';
      }).join('') + '</span>';
    }).join(' ');
    shown = text; fit();
  }
  function fit() {
    const avail = $('sMain').clientHeight - $('sTitle').offsetHeight - $('sRow').offsetHeight - 40;
    let size = Math.min(Math.max(avail, 40) * .95, 150), n = 0;
    nameEl.style.fontSize = size + 'px';
    while (n++ < 40 && size > 22 && (nameEl.scrollWidth > nameEl.clientWidth + 1 || nameEl.offsetHeight > avail)) {
      size *= .94; nameEl.style.fontSize = size + 'px';
    }
  }

  function paint() {
    const d = activites[state.type], t = texto.scene[state.type], m = ambiances[state.mood], s = scene.style;
    s.setProperty('--s-bg', m.bg); s.setProperty('--s-surf', m.surf); s.setProperty('--s-ink', m.ink);
    s.setProperty('--s-accent', d.accent); s.setProperty('--s-accent-ink', d.ink);
    scene.dataset.type = state.type;
    nameEl.className = 'sc-name ' + d.font;
    $('sKick').textContent = t.kick + ' · ' + texto.cfg.cityKicker;
    $('sTitle').textContent = t.title;
    $('sBtn').textContent = t.btn;
    const row = t.items.map(([a, b]) => '<span>' + a + ' <b>' + b + '</b></span><i>✦</i>').join('');
    $('sTicker').innerHTML = '<div class="tk-half">' + row + row + '</div><div class="tk-half">' + row + row + '</div>';
    const planLabel = texto.contact.fPlanOptions[INDEX_PLAN[d.plan]];
    $('pick').innerHTML = texto.result.pickPrefix + '<b>' + planLabel + '</b>' + texto.result.pickMid + prixFormules[d.plan];
    $('pickWhy').textContent = t.why;
    const dl = $('demoLink');
    if (d.demo) { dl.hidden = false; dl.href = d.demo; } else { dl.hidden = true; }
  }

  let swapT = null;
  function swap() {
    if (reduce) { paint(); renderName(shown, 999); return; }
    const d = activites[state.type];
    wipe.style.setProperty('--w', d.accent); wipe.style.color = d.ink;
    $('wipeIcon').innerHTML = iconesGrands[state.type];
    wipe.classList.remove('go'); void wipe.offsetWidth; wipe.classList.add('go');
    clearTimeout(swapT);
    swapT = setTimeout(() => { paint(); renderName(shown, 0); }, 360);
  }

  function setName() {
    const n = state.name.trim() || texto.cfg.nameFallback;
    let p = 0; while (p < n.length && p < shown.length && n[p] === shown[p]) p++;
    renderName(n, reduce ? 999 : p);
    $('sUrl').textContent = slug(state.name.trim());
  }

  window.addEventListener('resize', fit);
  if (document.fonts && document.fonts.ready) document.fonts.ready.then(fit);

  document.querySelectorAll('.chip').forEach(b => b.addEventListener('click', () => {
    if (state.type === b.dataset.type) return;
    state.type = b.dataset.type;
    document.querySelectorAll('.chip').forEach(x => x.setAttribute('aria-pressed', x === b));
    swap();
  }));
  document.querySelectorAll('.mood').forEach(b => b.addEventListener('click', () => {
    if (state.mood === b.dataset.mood) return;
    state.mood = b.dataset.mood;
    document.querySelectorAll('.mood').forEach(x => x.setAttribute('aria-pressed', x === b));
    swap();
  }));

  // Nom : démo tapée en direct jusqu'à ce que le visiteur tape lui-même.
  const demoNoms = texto.cfg.demoNoms;
  let di = 0, ci = 0, del = false, timer = null;
  function tick() {
    if (state.typed) return;
    const w = demoNoms[di];
    ci += del ? -1 : 1;
    const txt = w.slice(0, Math.max(ci, 0));
    renderName(txt, del ? 999 : txt.length - 1);
    let wait = del ? 40 : 95;
    if (!del && ci >= w.length) { del = true; wait = 1600; $('sUrl').textContent = slug(w); }
    else if (del && ci <= 0) { del = false; di = (di + 1) % demoNoms.length; wait = 300; }
    timer = setTimeout(tick, wait);
  }
  const nameIn = $('nameIn');
  nameIn.addEventListener('input', () => {
    state.typed = true; clearTimeout(timer);
    state.name = nameIn.value; setName();
  });

  // CTA : préremplit le formulaire de contact.
  $('want').addEventListener('click', () => {
    const d = activites[state.type];
    $('fShop').value = state.name.trim();
    $('fType').value = texto.contact.fTypeOptions[ORDRE_TYPES.indexOf(state.type)];
    $('fPlan').value = texto.contact.fPlanOptions[INDEX_PLAN[d.plan]];
    $('fMsg').value = texto.wantMessage(texto.wantMoods[state.mood]);
  });
  document.querySelectorAll('.choose').forEach(b => b.addEventListener('click', () => {
    $('fPlan').value = b.closest('.plan').dataset.plan;
  }));

  paint();
  if (reduce) { renderName(demoNoms[0], 999); } else { renderName('', 0); tick(); }
}
