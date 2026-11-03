import '../styles/tokens.css';
import '../styles/base.css';
import '../styles/scene.css';
import '../styles/sections.css';
import { en } from '../i18n/en.js';
import { initConfigurateur } from './configurateur.js';
import { initFormulaire } from './formulaire.js';
import { renderProjets } from './projets.js';

renderProjets(en);
initConfigurateur(en);
initFormulaire();
