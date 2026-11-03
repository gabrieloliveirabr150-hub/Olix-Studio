import '../styles/tokens.css';
import '../styles/base.css';
import '../styles/scene.css';
import '../styles/sections.css';
import { fr } from '../i18n/fr.js';
import { initConfigurateur } from './configurateur.js';
import { initFormulaire } from './formulaire.js';
import { renderProjets } from './projets.js';

renderProjets(fr);
initConfigurateur(fr);
initFormulaire();
