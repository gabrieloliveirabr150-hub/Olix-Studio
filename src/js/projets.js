import { projets } from '../data/projets.js';
import { iconesPetits } from '../data/icones.js';

const FOND_SOMBRE = '#14110f';

function carte(p, texto) {
  const visuel = p.image
    ? `<img src="${p.image}" alt="" loading="lazy">`
    : `<svg viewBox="0 0 24 24">${iconesPetits[p.icone] || ''}</svg>`;
  return `
    <a class="proj" href="${p.url}" target="_blank" rel="noopener">
      <div class="vis" style="background:radial-gradient(90% 80% at 30% 20%,${p.fond},${FOND_SOMBRE} 70%);color:${p.accent}">
        <span>${texto.projets.etiquette}</span>${visuel}
      </div>
      <div class="meta"><b>${p.nom}</b><small>${p.type[texto.htmlLang]}</small></div>
    </a>`;
}

export function renderProjets(texto) {
  const rail = document.querySelector('.rail');
  if (!rail) return;
  rail.innerHTML = projets.map(p => carte(p, texto)).join('');
}
