// Données non traduisibles par activité : couleurs, police, plan conseillé, URL de démo.
// Les textes (titre, items, horaires, etc.) vivent dans src/i18n/fr.js et en.js.

export const activites = {
  barbier: { accent: '#c9a45c', ink: '#17130a', font: 'f-sans', plan: 'Pro', demo: 'https://fadedistrict1.netlify.app/' },
  cafe: { accent: '#d08a4a', ink: '#1a0f06', font: 'f-serif', plan: 'Pro', demo: 'https://maison-du-cafe.netlify.app/' },
  restaurant: { accent: '#c8553d', ink: '#ffffff', font: 'f-serif-up', plan: 'Premium', demo: 'https://maison-epure.netlify.app/' },
  autre: { accent: '#ff9f43', ink: '#1a1006', font: 'f-modern', plan: 'Essentiel', demo: '' }
};

export const prixFormules = { Essentiel: 'CHF 500', Pro: 'CHF 850', Premium: 'CHF 1’700' };

export const ambiances = {
  elegant: { bg: '#121115', surf: '#1d1b21', ink: '#f2eee6' },
  chaleureux: { bg: '#2a1d16', surf: '#3a281e', ink: '#f7ead9' },
  moderne: { bg: '#f6f4f1', surf: '#ffffff', ink: '#17161a' }
};
