export const fr = {
  htmlLang: 'fr',
  meta: {
    title: 'Olix Studio · Votre site en 30 secondes',
    description: 'Créez un aperçu animé de votre site en 30 secondes. Studio web basé à Genève, sites pour commerces livrés en 1 à 3 semaines.'
  },
  header: {
    brandAria: 'Olix Studio, haut de page',
    langSwitch: 'FR · EN',
    langHref: '/en/',
    langAria: 'Switch to English'
  },
  hero: {
    eyebrow: 'Studio web · Genève',
    titleStart: 'Votre commerce mérite un site qui ',
    titleEmphasis: 'vend.',
    lead: 'Créez un aperçu de votre site en 30 secondes, ici, sur votre téléphone.',
    ctaTry: 'Essayer maintenant',
    ctaPrices: 'Voir les prix'
  },
  cfg: {
    eyebrow: 'Essayez',
    titleStart: 'Votre site en ',
    titleEmphasis: '30 secondes',
    sceneAria: 'Aperçu animé de votre site',
    sceneTag: 'Aperçu',
    cityKicker: 'Genève',
    typeAria: 'Type de commerce',
    step1: 'Votre activité',
    chips: { barbier: 'Barbier', cafe: 'Café', restaurant: 'Restaurant', autre: 'Autre' },
    step2: 'Le nom de votre commerce',
    nameLabel: "Il s'affiche en direct sur le site",
    namePlaceholder: 'Ex. : Chez Marco',
    step3: "L'ambiance",
    moodsAria: 'Ambiance',
    moods: { elegant: 'Élégant', chaleureux: 'Chaleureux', moderne: 'Moderne' },
    demoNoms: ['Chez Marco', 'Le Petit Comptoir', 'Atelier Nova', 'Votre nom ici'],
    slugFallback: 'votrecommerce',
    nameFallback: 'Votre commerce'
  },
  // Textes de la scène animée et de la bande de prix, par activité.
  // Les prix et le libellé de ville ne se traduisent pas.
  scene: {
    barbier: {
      kick: 'Barbier', title: 'Précision à la lame.', btn: 'Réserver',
      items: [['Coupe', 'CHF 35'], ['Barbe', 'CHF 25'], ['Coupe + barbe', 'CHF 55']],
      why: 'Réservation en ligne, carte des prestations et fiche Google.'
    },
    cafe: {
      kick: 'Café', title: 'Votre pause, bien servie.', btn: 'Voir la carte',
      items: [['Espresso', 'CHF 3.80'], ['Cappuccino', 'CHF 5.20'], ['Croissant', 'CHF 3.50']],
      why: 'Carte avec prix, galerie photos et fiche Google.'
    },
    restaurant: {
      kick: 'Restaurant', title: 'Une cuisine de saison.', btn: 'Réserver une table',
      items: [['Menu du jour', 'CHF 28'], ['Risotto aux cèpes', 'CHF 32'], ['Tiramisu', 'CHF 12']],
      why: 'Vous modifiez la carte vous-même, réservation sur mesure.'
    },
    autre: {
      kick: 'Commerce', title: 'Trouvé en un clic.', btn: 'Nous contacter',
      items: [['Consultation', 'sur rendez-vous'], ['Prestation', 'dès CHF 60'], ['Forfait', 'sur devis']],
      why: 'Une page claire avec horaires, contact et WhatsApp.'
    }
  },
  result: {
    pickPrefix: 'Formule conseillée : ',
    pickMid: ' · dès ',
    want: "J'en veux un comme ça",
    demoLink: 'Voir la démo complète',
    indicative: 'Aperçu indicatif. Les démos sont des projets conceptuels.'
  },
  // Message prérempli dans le formulaire au clic sur « J'en veux un comme ça ».
  wantMessage: moodLabel => `Je voudrais un site comme l’aperçu : ambiance ${moodLabel}.`,
  wantMoods: { elegant: 'élégante', chaleureux: 'chaleureuse', moderne: 'moderne' },
  projets: {
    eyebrow: 'Projets conceptuels',
    titleStart: 'Quatre commerces, ',
    titleEmphasis: 'quatre styles',
    etiquette: 'Projet conceptuel'
  },
  formules: {
    eyebrow: 'Formules',
    titleStart: 'Des prix ',
    titleEmphasis: 'clairs',
    launch: 'Tarif de lancement · 5 premiers clients',
    maintenance: 'Maintenance à partir de CHF 50/mois.',
    badge: 'Recommandé',
    choose: 'Choisir',
    essentiel: { nom: 'Essentiel', barre: 'CHF 900', items: ['1 page complète', 'Horaires, carte, contact', 'Bouton WhatsApp', 'Livré en 1 semaine'] },
    pro: { nom: 'Pro', barre: "CHF 1'200", items: ["Jusqu'à 5 pages", 'Réservation en ligne', 'Fiche Google, FR + EN', 'Livré en 2 semaines'] },
    premium: { nom: 'Premium', barre: "CHF 2'000", items: ["Jusqu'à 8 pages", 'Vous modifiez la carte vous-même', "Jusqu'à 4 langues", 'Livré en 3 semaines'] }
  },
  contact: {
    eyebrow: 'Contact',
    titleStart: 'Parlons de ',
    titleEmphasis: 'votre',
    titleEnd: ' site',
    fName: 'Votre prénom',
    fNamePh: 'Marco',
    fShop: 'Commerce',
    fShopPh: 'Chez Marco',
    fType: 'Activité',
    fTypeOptions: ['Barbier', 'Café', 'Restaurant', 'Autre'],
    fPlan: 'Formule',
    fPlanOptions: ['Essentiel', 'Pro', 'Premium', 'Je ne sais pas encore'],
    fMsg: 'Message',
    fMsgPh: 'Votre question ou votre projet',
    submit: 'Envoyer',
    formErr: 'Indiquez au moins votre prénom et votre commerce.',
    sentTitle: 'Demande envoyée',
    sentBody: 'Merci ! Nous revenons vers vous très vite, par e-mail ou WhatsApp.',
    whatsappLabel: 'WhatsApp : ',
    emailLabel: 'E-mail : '
  },
  footer: {
    copyright: '© Olix Studio · Genève',
    privacy: 'Confidentialité',
    privacyHref: '/confidentialite.html'
  }
};
