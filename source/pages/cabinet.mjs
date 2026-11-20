/* Le cabinet : ouverture plein cadre (la table du cabinet), les trois avocates (photo collante pendant la bio),
   repères et citation sur fond sapin, engagements à côté de la photo des trois, appel final. */
import { html } from '../../outils/gabarit.mjs';
import { appelFinal } from '../gabarits/blocs.mjs';

export const page = { cle: 'cabinet', fichier: 'cabinet', imagePartage: 'table-1280.webp' };

export default (c) => {
  const T = (k, v) => c.t(`cabinet.${k}`, v);
  const C = c.donnees.cabinet;
  return html`
<section class="plein" id="debut" data-effet="cabinet-ouverture">
  ${c.media({ nom: 'table', alt: c.donnees.images.table.alt, cadrage: '58% 42%', priorite: true, classe: 'plein-media', sizes: '100vw', attrs: 'data-iris-centre' })}
  <div class="conteneur plein-texte">
    <p class="surtitre o-suite">${T('surtitre')}</p>
    <h1><span class="ligne-masque"><span class="page-ligne">${T('titreL1')}</span></span><span class="ligne-masque"><span class="page-ligne">${T('titreL2')}</span></span><span class="ligne-masque"><span class="page-ligne">${T('titreL3')}<em>${T('titreMot')}</em></span></span></h1>
    <p class="plein-intro o-suite masque-ecran-bas masque-petit">${T('texte')}</p>
    <p class="plein-actions o-suite">${c.lien('contact', { classe: 'bouton', texte: c.t('commun.actionEntete'), attrs: 'data-action-principale data-survol="magnetique"' })}<span class="plein-info" data-info-cle>${T('info')}</span></p>
  </div>
</section>

<section class="equipe conteneur" id="equipe" aria-labelledby="equipe-titre">
  <div class="equipe-tete">
    <p class="surtitre" data-anime>${T('equipeSurtitre')}</p>
    <h2 id="equipe-titre" data-anime="lignes">${T('equipeTitre')}</h2>
  </div>
  ${c.donnees.equipe.map((a, i) => html`<article class="bio${i % 2 ? ' bio--inverse' : ''}" id="${a.id}" aria-labelledby="${a.id}-nom">
    <div class="bio-visuel">${c.media({ nom: a.image, alt: c.donnees.images[a.image].alt, cadrage: c.donnees.images[a.image].cadrage, classe: 'bio-media', sizes: '(max-width: 760px) 100vw, 40vw', attrs: 'data-anime="rideau"' })}</div>
    <div class="bio-texte">
      <h3 id="${a.id}-nom" class="bio-nom" data-anime="lignes">${a.nom}</h3>
      <p class="bio-depuis" data-anime>${a.depuis}</p>
      <p class="bio-domaine" data-anime>${a.domaine}</p>
      <p class="bio-mention" data-anime>${a.mention}</p>
      <p class="bio-parcours-titre">${T('parcours')}</p>
      <ol class="bio-parcours" data-anime="cascade">${a.parcours.map((p) => html`<li>${p}</li>`)}</ol>
      ${c.lien('contact', { ancre: 'rendez-vous', classe: 'lien-fleche', texte: html`${T('rendezVous', { nom: a.court })} <span aria-hidden="true">→</span>` })}
    </div>
  </article>`)}
</section>

<section class="reperes" id="reperes" aria-labelledby="reperes-titre">
  <div class="conteneur">
    <p class="surtitre" data-anime>${T('reperesSurtitre')}</p>
    <h2 id="reperes-titre" data-anime="lignes">${T('reperesTitre')}</h2>
    <div class="frise">
      <svg class="frise-trait" viewBox="0 0 1000 20" preserveAspectRatio="none" aria-hidden="true" data-fx="trace"><path d="M2 10 H998" fill="none" stroke="currentColor" stroke-width="3" stroke-linecap="round"/></svg>
      <ol class="frise-liste" data-anime="cascade">
        ${C.reperes.map((r) => html`<li><span class="frise-annee">${r.annee}</span><p>${r.texte}</p></li>`)}
      </ol>
    </div>
    <figure class="citation citation--sombre">
      <blockquote><p data-anime="mots">${T('citation')}</p></blockquote>
      <figcaption>${T('citationSource')}</figcaption>
    </figure>
  </div>
</section>

<section class="engagements conteneur" id="engagements" aria-labelledby="engagements-titre">
  <div class="engagements-visuel">${c.media({ nom: 'equipe', alt: c.donnees.images.equipe.alt, cadrage: '54% 46%', classe: 'engagements-media', sizes: '(max-width: 760px) 100vw, 45vw', attrs: 'data-fx="parallaxe" data-fx-force="8"' })}</div>
  <div class="engagements-texte">
    <p class="surtitre" data-anime>${T('engagementsSurtitre')}</p>
    <h2 id="engagements-titre" data-anime="lignes">${T('engagementsTitre')}</h2>
    <ol class="engagements-liste" data-anime="cascade">
      ${C.engagements.map((e, i) => html`<li><span class="engagement-num" aria-hidden="true">${i + 1}</span><div><h3>${e.titre}</h3><p>${e.texte}</p></div></li>`)}
    </ol>
  </div>
</section>

${appelFinal(c)}
`;
};
