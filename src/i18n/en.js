export const en = {
  htmlLang: 'en',
  meta: {
    title: 'Olix Studio · Your website in 30 seconds',
    description: 'Build an animated preview of your website in 30 seconds. Web studio based in Geneva, business sites delivered in 1 to 3 weeks.'
  },
  header: {
    brandAria: 'Olix Studio, back to top',
    langSwitch: 'FR · EN',
    langHref: '/',
    langAria: 'Passer au français'
  },
  hero: {
    eyebrow: 'Web studio · Geneva',
    titleStart: 'Your business deserves a website that ',
    titleEmphasis: 'sells.',
    lead: 'Build a preview of your website in 30 seconds, right here on your phone.',
    ctaTry: 'Try it now',
    ctaPrices: 'See pricing'
  },
  cfg: {
    eyebrow: 'Try it',
    titleStart: 'Your website in ',
    titleEmphasis: '30 seconds',
    sceneAria: 'Animated preview of your website',
    sceneTag: 'Preview',
    cityKicker: 'Geneva',
    typeAria: 'Business type',
    step1: 'Your business',
    chips: { barbier: 'Barber', cafe: 'Café', restaurant: 'Restaurant', autre: 'Other' },
    step2: 'Your business name',
    nameLabel: 'It appears live on the site',
    namePlaceholder: 'E.g. Chez Marco',
    step3: 'The mood',
    moodsAria: 'Mood',
    moods: { elegant: 'Elegant', chaleureux: 'Warm', moderne: 'Modern' },
    demoNoms: ['Chez Marco', 'Le Petit Comptoir', 'Atelier Nova', 'Your name here'],
    slugFallback: 'yourbusiness',
    nameFallback: 'Your business'
  },
  scene: {
    barbier: {
      kick: 'Barber', title: 'Precision with every blade.', btn: 'Book now',
      items: [['Haircut', 'CHF 35'], ['Beard trim', 'CHF 25'], ['Haircut + beard', 'CHF 55']],
      why: 'Online booking, service menu and Google listing.'
    },
    cafe: {
      kick: 'Café', title: 'Your break, well served.', btn: 'View the menu',
      items: [['Espresso', 'CHF 3.80'], ['Cappuccino', 'CHF 5.20'], ['Croissant', 'CHF 3.50']],
      why: 'Menu with prices, photo gallery and Google listing.'
    },
    restaurant: {
      kick: 'Restaurant', title: 'Seasonal cuisine.', btn: 'Book a table',
      items: [['Daily menu', 'CHF 28'], ['Porcini risotto', 'CHF 32'], ['Tiramisu', 'CHF 12']],
      why: 'You update the menu yourself, bookings made to measure.'
    },
    autre: {
      kick: 'Business', title: 'Found in one click.', btn: 'Contact us',
      items: [['Consultation', 'by appointment'], ['Service', 'from CHF 60'], ['Package', 'on request']],
      why: 'One clear page with hours, contact and WhatsApp.'
    }
  },
  result: {
    pickPrefix: 'Recommended plan: ',
    pickMid: ' · from ',
    want: 'I want one like this',
    demoLink: 'See the full demo',
    indicative: 'Indicative preview. The demos are concept projects.'
  },
  wantMessage: moodLabel => `I'd like a website like the preview: ${moodLabel} mood.`,
  wantMoods: { elegant: 'elegant', chaleureux: 'warm', moderne: 'modern' },
  projets: {
    eyebrow: 'Concept projects',
    titleStart: 'Three businesses, ',
    titleEmphasis: 'three styles',
    etiquette: 'Concept project'
  },
  formules: {
    eyebrow: 'Plans',
    titleStart: 'Clear ',
    titleEmphasis: 'pricing',
    launch: 'Launch pricing · first 5 clients',
    maintenance: 'Maintenance from CHF 50/month.',
    badge: 'Recommended',
    choose: 'Choose',
    essentiel: { nom: 'Essential', barre: 'CHF 900', items: ['1 complete page', 'Hours, menu, contact', 'WhatsApp button', 'Delivered in 1 week'] },
    pro: { nom: 'Pro', barre: "CHF 1'200", items: ['Up to 5 pages', 'Online booking', 'Google listing, FR + EN', 'Delivered in 2 weeks'] },
    premium: { nom: 'Premium', barre: "CHF 2'000", items: ['Up to 8 pages', 'You update the menu yourself', 'Up to 4 languages', 'Delivered in 3 weeks'] }
  },
  contact: {
    eyebrow: 'Contact',
    titleStart: "Let's talk about ",
    titleEmphasis: 'your',
    titleEnd: ' site',
    fName: 'Your first name',
    fNamePh: 'Marco',
    fShop: 'Business',
    fShopPh: 'Chez Marco',
    fType: 'Business type',
    fTypeOptions: ['Barber', 'Café', 'Restaurant', 'Other'],
    fPlan: 'Plan',
    fPlanOptions: ['Essential', 'Pro', 'Premium', 'Not sure yet'],
    fMsg: 'Message',
    fMsgPh: 'Your question or your project',
    submit: 'Send',
    formErr: 'Please provide at least your first name and business.',
    sentTitle: 'Request sent',
    sentBody: "Thank you! We'll get back to you very soon, by email or WhatsApp.",
    whatsappLabel: 'WhatsApp: ',
    emailLabel: 'Email: '
  },
  footer: {
    copyright: '© Olix Studio · Geneva',
    privacy: 'Privacy',
    privacyHref: '/en/confidentialite.html'
  }
};
