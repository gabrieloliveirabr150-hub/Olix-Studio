// Traits SVG (sans la balise <svg>), à injecter via innerHTML.

// Petits pictos (viewBox 0 0 24 24) : chips d'activité et cartes de projets conceptuels.
export const iconesPetits = {
  barbier: '<rect x="9" y="2.5" width="6" height="19" rx="3"/><path d="M9 7l6 3M9 12l6 3M9 17l6 3"/>',
  cafe: '<path d="M4 9h12v5a5 5 0 0 1-5 5H9a5 5 0 0 1-5-5z"/><path d="M16 10h1.5a2.5 2.5 0 0 1 0 5H16"/><path d="M8 3c-.8 1 .8 2 0 3M12 3c-.8 1 .8 2 0 3"/>',
  restaurant: '<path d="M3 17h18"/><path d="M5 17a7 7 0 0 1 14 0"/><path d="M12 8V6M10.5 6h3"/>',
  autre: '<path d="M3 10l1.5-5h15L21 10"/><path d="M4 10v10h16V10"/><path d="M3 10a3 3 0 0 0 6 0 3 3 0 0 0 6 0 3 3 0 0 0 6 0"/>',
  epicerie: '<path d="M4 9V7a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v2"/><path d="M4 9l1.5 3M8.5 9L10 12M13 9l1.5 3M17.5 9L19 12"/><path d="M6 12h12v9H6z"/><path d="M9 21v-5h6v5"/>'
};

// Grands pictos (viewBox 0 0 48 48) : icône affichée par la cortine de couleur (wipe) au changement d'activité.
export const iconesGrands = {
  barbier: '<rect x="19" y="5" width="10" height="38" rx="5"/><path d="M19 13l10 5M19 22l10 5M19 31l10 5"/><path d="M17 5h14M17 43h14"/>',
  cafe: '<path d="M8 19h24v9a10 10 0 0 1-10 10h-4A10 10 0 0 1 8 28z"/><path d="M32 21h3a5 5 0 0 1 0 10h-3"/><path d="M15 6c-1.6 2 1.6 4 0 6M22 6c-1.6 2 1.6 4 0 6"/><path d="M6 42h32"/>',
  restaurant: '<path d="M6 34h36"/><path d="M9 34a15 15 0 0 1 30 0"/><path d="M24 19v-4M21 15h6"/><path d="M8 40h32"/>',
  autre: '<path d="M6 20l3-10h30l3 10"/><path d="M8 20v20h32V20"/><path d="M6 20a6 6 0 0 0 12 0 6 6 0 0 0 12 0 6 6 0 0 0 12 0"/><path d="M20 40V30h8v10"/>'
};
