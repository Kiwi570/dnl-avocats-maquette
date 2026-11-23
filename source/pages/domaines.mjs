/* Domaines d'intervention : grand titre centré puis bandeau panoramique qui s'ouvre (index des quatre domaines),
   puis quatre sections aux compositions différentes (image à gauche, arche à droite sur sapin, bandeau, image à droite). */
import { html } from '../../outils/gabarit.mjs';
import { appelFinal } from '../gabarits/blocs.mjs';

export const page = { cle: 'domaines', fichier: 'domaines', imagePartage: 'grok/domaines-ouverture-1280.webp' };

export default (c) => {
  const T = (k, v) => c.t(`domaines.${k}`, v);
  const D = c.donnees.domaines;
  const equipe = Object.fromEntries(c.donnees.equipe.map((a) => [a.id, a]));
  const tarifs = Object.fromEntries(c.donnees.tarifs.map((t) => [t.id, t]));
  const img = (nom, classe, attrs = '') => c.media({ nom: `grok/${nom}`, alt: c.donnees.images[`grok/${nom}`].alt, cadrage: c.donnees.images[`grok/${nom}`].cadrage, classe, sizes: '(max-width: 760px) 100vw, 45vw', attrs });
  const contenu = (d) => html`
      <p class="surtitre">${c.t(`domaines.pole.${d.pole}`)}</p>
      <h2 id="${d.id}-titre" data-anime="lignes">${d.titre}</h2>
      <p class="domaine-intro" data-anime>${d.intro}</p>
      <div class="domaine-groupes" data-anime="cascade">
        ${d.groupes.map((g) => html`<div class="domaine-groupe"><h3>${g.titre}</h3><ul>${g.liste.map((x) => html`<li>${x}</li>`)}</ul></div>`)}
      </div>
      <div class="domaine-pied">
        <div class="domaine-avocates">
          <p class="domaine-etiquette">${T('avocates')}</p>
          <ul>${d.avocates.map((id) => html`<li>${c.lien('cabinet', { ancre: id, classe: 'domaine-avocate', texte: html`${c.media({ nom: equipe[id].image, alt: '', cadrage: '50% 22%', classe: 'domaine-avatar', sizes: '56px' })}<span>${equipe[id].nom}</span>` })}</li>`)}</ul>
        </div>
        <div class="domaine-tarifs">
          <p class="domaine-etiquette">${T('tarifs')}</p>
          ${d.tarifs.length ? html`<ul>${d.tarifs.map((id) => html`<li><span>${tarifs[id].libelle}</span><strong data-prix>${tarifs[id].montant}</strong></li>`)}</ul>` : html`<p>${T('surDevis')}</p>`}
        </div>
      </div>
      <p class="domaine-action">${c.lien('contact', { params: `sujet=${d.sujet}`, ancre: 'rendez-vous', classe: 'bouton', texte: T('rendezVous', { domaine: d.court }), attrs: 'data-survol="magnetique"' })}</p>`;
  const [fam, suc, urb, fp] = D;
  return html`
<section class="dom-tete" id="debut">
  <div class="conteneur dom-tete-texte">
    <p class="surtitre o-suite">${T('surtitre')}</p>
    <h1><span class="ligne-masque"><span class="page-ligne">${T('titre1')}</span></span><span class="ligne-masque"><span class="page-ligne">${T('titre2')} <em>${T('titreMot')}</em></span></span></h1>
    <p class="dom-tete-intro o-suite masque-ecran-bas masque-petit">${T('texte')}</p>
    <nav class="dom-index o-suite masque-petit" aria-label="${c.s('domaines.index')}">
      <ul>${D.map((d, i) => html`<li><a href="#${d.id}" class="dom-puce"><span class="dom-puce-num" aria-hidden="true">${i + 1}</span>${d.titre}</a></li>`)}</ul>
    </nav>
    <p class="dom-tete-actions o-suite">${c.lien('contact', { classe: 'bouton', texte: c.t('commun.actionEntete'), attrs: 'data-action-principale data-survol="magnetique"' })}<span class="dom-tete-info" data-info-cle>${T('info')}</span></p>
  </div>
  <div class="dom-bandeau" data-effet="bandeau">
    ${c.media({ nom: 'grok/domaines-ouverture', alt: c.donnees.images['grok/domaines-ouverture'].alt, cadrage: '60% 55%', priorite: true, classe: 'dom-bandeau-media', sizes: '100vw', attrs: 'data-iris-centre data-fx="parallaxe" data-fx-force="8"' })}
  </div>
</section>

<div class="domaines-suite">
<nav class="dom-nav" aria-label="${c.s('domaines.navLabel')}" data-dom-nav>
  <div class="conteneur dom-nav-rangee">
    <ul class="dom-nav-liens">${D.map((d, i) => html`<li><a href="#${d.id}" data-dom-lien="${d.id}"><span class="dom-nav-num" aria-hidden="true">${i + 1}</span>${d.court}</a></li>`)}</ul>
    <p class="dom-nav-courant" aria-hidden="true"><span class="dom-nav-num" data-dom-num>1</span><span data-dom-titre>${D[0].court}</span><span class="dom-nav-total">/ ${D.length}</span></p>
    <a class="dom-nav-suivant" href="#${D[1].id}" data-dom-suivant aria-label="${c.s('domaines.navSuivant')}">→</a>
  </div>
  <span class="dom-nav-barre" aria-hidden="true" data-dom-barre></span>
</nav>
<section class="domaine domaine--a" id="${fam.id}" aria-labelledby="${fam.id}-titre">
  <div class="conteneur domaine-grille">
    <div class="domaine-visuel">${img(fam.image, 'domaine-media', 'data-fx="parallaxe" data-fx-force="8"')}</div>
    <div class="domaine-texte">${contenu(fam)}</div>
  </div>
</section>

<section class="domaine domaine--b" id="${suc.id}" aria-labelledby="${suc.id}-titre">
  <div class="conteneur domaine-grille">
    <div class="domaine-texte">${contenu(suc)}</div>
    <div class="domaine-visuel">${img(suc.image, 'domaine-media domaine-media--arche', 'data-anime="rideau"')}</div>
  </div>
</section>

<section class="domaine domaine--c" id="${urb.id}" aria-labelledby="${urb.id}-titre">
  ${img(urb.image, 'domaine-bande', 'data-fx="parallaxe" data-fx-force="12"')}
  <div class="conteneur domaine-texte domaine-texte--large">${contenu(urb)}</div>
</section>

<section class="domaine domaine--d" id="${fp.id}" aria-labelledby="${fp.id}-titre">
  <div class="conteneur domaine-grille domaine-grille--d">
    <div class="domaine-texte">${contenu(fp)}</div>
    <div class="domaine-visuel">${img(fp.image, 'domaine-media', 'data-fx="zoom"')}</div>
  </div>
</section>
</div>

${appelFinal(c)}
`;
};
