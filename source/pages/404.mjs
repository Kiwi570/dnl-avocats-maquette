/* Page introuvable : « Pièce introuvable », la chaise seule dans la pièce vide. */
import { html } from '../../outils/gabarit.mjs';

export const page = { cle: '404', fichier: '404', langues: ['fr'], partage: false };

export default (c) => html`
<section class="introuvable" id="debut">
  ${c.media({ nom: 'grok/page-404', alt: c.s('introuvable.alt'), cadrage: '62% 55%', cadrageMobile: '66% 60%', priorite: true, classe: 'introuvable-media', sizes: '100vw', attrs: 'data-iris-centre data-fx="zoom" data-fx-force="10"' })}
  <div class="conteneur introuvable-texte">
    <p class="surtitre o-suite">${c.t('introuvable.surtitre')}</p>
    <h1><span class="ligne-masque"><span class="page-ligne">${c.t('introuvable.titre')}</span></span></h1>
    <p class="o-suite masque-petit">${c.t('introuvable.texte')}</p>
    <p class="introuvable-actions o-suite">${c.lien('accueil', { classe: 'bouton', texte: c.t('introuvable.retour'), attrs: 'data-action-principale' })} ${c.lien('contact', { classe: 'bouton bouton--contour', texte: c.t('commun.actionEntete') })}</p>
    <p class="o-suite" data-info-cle>${c.site.contact.telephone}</p>
  </div>
</section>
`;
