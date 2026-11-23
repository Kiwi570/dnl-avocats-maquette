/* Honoraires : panneau sapin avec « 180 € » géant et photo ronde qui tourne, trois étapes, grille indicative filtrable
   avec recherche (filtres gardés dans l'adresse), questions fréquentes, appel final. */
import { html, brut } from '../../outils/gabarit.mjs';

/* Pictogrammes des trois étapes (premier rendez-vous, analyse et devis, convention signée), tracés à l'arrivée. */
const ICONES = {"e1": "<circle cx=\"32\" cy=\"32\" r=\"12\"/><rect x=\"26\" y=\"6\" width=\"12\" height=\"9\" rx=\"3\"/><rect x=\"26\" y=\"49\" width=\"12\" height=\"9\" rx=\"3\"/><rect x=\"6\" y=\"26\" width=\"9\" height=\"12\" rx=\"3\"/><rect x=\"49\" y=\"26\" width=\"9\" height=\"12\" rx=\"3\"/>", "e2": "<path d=\"M18 8h20l10 10v38H18z\"/><path d=\"M38 8v10h10\"/><path d=\"M24 30h16M24 38h16M24 46h10\"/>", "e3": "<path d=\"M14 8h28l8 8v40H14z\"/><path d=\"M20 22h22M20 30h22M20 38h12\"/><path d=\"M22 50c4-6 7 2 10-3s5 3 9-2\"/>"};
import { appelFinal } from '../gabarits/blocs.mjs';

export const page = { cle: 'honoraires', fichier: 'honoraires', imagePartage: 'grok/honoraires-table-800.webp' };

export default (c) => {
  const T = (k, v) => c.t(`honoraires.${k}`, v);
  return html`
<section class="prix-tete" id="debut">
  <div class="conteneur prix-grille">
    <div class="prix-texte">
      <p class="surtitre o-suite">${T('surtitre')}</p>
      <h1><span class="ligne-masque"><span class="page-ligne">${T('titre')}</span></span></h1>
      <p class="prix-geant o-suite" aria-hidden="true"><span class="prix-nombre" data-compteur="180">180</span><span class="prix-unite">${T('unite')}<br><small>${T('prixTexte')}</small></span></p>
      <p class="visuellement-cache">180 € TTC, ${T('prixTexte')}.</p>
      <p class="prix-intro o-suite masque-ecran-bas masque-petit">${T('texte')}</p>
      <p class="prix-actions o-suite">${c.lien('contact', { classe: 'bouton bouton--clair', texte: c.t('commun.actionEntete'), attrs: 'data-action-principale data-survol="magnetique"' })}<span class="prix-info" data-info-cle>${T('info')}</span></p>
    </div>
    <div class="prix-visuel" data-effet="prix-geant">
      ${c.media({ nom: 'grok/honoraires-table', alt: c.donnees.images['grok/honoraires-table'].alt, cadrage: '52% 50%', priorite: true, classe: 'prix-photo', sizes: '(max-width: 760px) 70vw, 36vw', attrs: 'data-iris-centre="disque"' })}
    </div>
  </div>
</section>

<section class="etapes conteneur" id="etapes" aria-labelledby="etapes-titre">
  <p class="surtitre" data-anime>${T('etapesSurtitre')}</p>
  <h2 id="etapes-titre" data-anime="lignes">${T('etapesTitre')}</h2>
  <div class="etapes-piste" data-etapes data-visuel>
    <svg class="etapes-trait" viewBox="0 0 1000 40" preserveAspectRatio="none" aria-hidden="true" data-fx="trace"><path d="M20 20 C 260 -6, 420 46, 500 20 S 760 -6, 980 20" fill="none" stroke="currentColor" stroke-width="3" stroke-linecap="round"/></svg>
    <ol class="etapes-liste" data-anime="cascade">
      ${['e1', 'e2', 'e3'].map((k, i) => html`<li><div class="etape-tete"><span class="etape-num" aria-hidden="true">${i + 1}</span><svg class="etape-icone" viewBox="0 0 64 64" aria-hidden="true">${brut(ICONES[k])}</svg></div><h3>${T(k)}</h3><p>${T(`${k}t`)}</p></li>`)}
    </ol>
  </div>
  <p class="etapes-note" data-anime>${T('protection')}</p>
</section>

<section class="grille-tarifs" id="grille" aria-labelledby="grille-titre">
  <div class="conteneur grille-cadre" data-grille-tarifs>
    <div class="grille-tete">
      <p class="surtitre" data-anime>${T('grilleSurtitre')}</p>
      <h2 id="grille-titre" data-anime="lignes">${T('grilleTitre')}</h2>
      <p data-anime>${T('grilleTexte')}</p>
    </div>
    <div class="grille-outils" data-anime>
      <div class="grille-filtres" role="group" aria-label="${c.s('honoraires.filtres')}">
        <button type="button" class="filtre" data-filtre="tous" aria-pressed="true">${T('tous')}</button>
        <button type="button" class="filtre" data-filtre="famille" aria-pressed="false">${T('famille')}</button>
        <button type="button" class="filtre" data-filtre="public" aria-pressed="false">${T('public')}</button>
      </div>
      <label class="grille-recherche"><span class="visuellement-cache">${T('recherche')}</span><input type="search" placeholder="${c.s('honoraires.recherchePlaceholder')}" autocomplete="off"></label>
    </div>
    <p class="grille-compte" data-compte aria-live="polite"></p>
    <table class="grille" data-visuel data-effet="barres">
      <caption class="visuellement-cache">${T('grilleTitre')}</caption>
      <thead><tr><th scope="col">${T('colDemarche')}</th><th scope="col">${T('colMontant')}</th></tr></thead>
      <tbody>
        ${c.donnees.tarifs.map((t) => html`<tr data-pole="${t.pole}"><td><span class="grille-pole">${c.t(`domaines.pole.${t.pole}`)}</span>${t.libelle}<span class="grille-barre" style="--v:${(t.valeur / 3000).toFixed(3)}" aria-hidden="true"></span></td><td data-prix>${t.montant}</td></tr>`)}
      </tbody>
    </table>
    <p class="grille-aucun" data-aucun hidden>${T('aucun')}</p>
  </div>
</section>

<section class="faq conteneur" id="faq" aria-labelledby="faq-titre">
  <div class="faq-tete">
    <p class="surtitre" data-anime>${T('faqSurtitre')}</p>
    <h2 id="faq-titre" data-anime="lignes">${T('faqTitre')}</h2>
    ${c.media({ nom: 'table', alt: c.donnees.images.table.alt, cadrage: '55% 45%', classe: 'faq-media', sizes: '(max-width: 760px) 100vw, 36vw', attrs: 'data-fx="zoom"' })}
  </div>
  <div class="faq-liste" data-anime="cascade">
    ${c.donnees.faq.map((f) => html`<details class="faq-item"><summary>${f.q}</summary><p>${f.r}</p></details>`)}
  </div>
</section>

${appelFinal(c)}
`;
};
