/* Blocs communs aux pages de DNL Avocats : la table ronde (méthode et appel final), l'appel final, le statut d'horaires. */
import { html } from '../../outils/gabarit.mjs';

/* Table ronde vue de dessus : plateau en chêne, quatre places (chaises bleu marine) et leurs libellés,
   anneau de progression terre cuite. places : quatre libellés, dans l'ordre haut, droite, bas, gauche. */
export function tableRonde(c, { libelle, places, effet, classe = '', vide = -1 }) {
  const angles = [-90, 0, 90, 180];
  const pos = (a, r) => [200 + r * Math.cos((a * Math.PI) / 180), 200 + r * Math.sin((a * Math.PI) / 180)];
  return html`<svg class="table ${classe}" viewBox="0 0 400 400" data-effet="${effet}" data-visuel role="img" aria-label="${libelle}">
  <circle class="table-anneau-piste" cx="200" cy="200" r="132"/>
  <circle class="table-anneau" cx="200" cy="200" r="132" pathLength="1" transform="rotate(-90 200 200)"/>
  ${angles.map((a, i) => {
    const [x, y] = pos(a, 160);
    return html`<g class="place${i === vide ? ' place--vide' : ''}" data-place="${i}" transform="translate(${x.toFixed(1)} ${y.toFixed(1)}) rotate(${a + 90})"><rect class="place-assise" x="-26" y="-20" width="52" height="40" rx="10"/><path class="place-dossier" d="M-28 24 Q0 40 28 24"/></g>`;
  })}
  <circle class="table-plateau" cx="200" cy="200" r="112"/>
  <circle class="table-veine" cx="200" cy="200" r="86"/>
  <circle class="table-veine" cx="200" cy="200" r="58"/>
  <circle class="table-centre" cx="200" cy="200" r="10"/>
  ${angles.map((a, i) => {
    const [x, y] = pos(a, 66);
    return html`<text class="place-libelle" data-libelle-place="${i}" x="${x.toFixed(1)}" y="${(y + 6).toFixed(1)}" text-anchor="middle">${places[i]}</text>`;
  })}
</svg>`;
}

/* Statut d'horaires : rempli par assets/js/site.js à l'heure de Paris, formulé en positif ; sans JavaScript, les horaires. */
export const statut = (c) => html`<p class="statut" data-statut><span class="statut-point" aria-hidden="true"></span><span data-statut-texte>${c.t('commun.horairesTexte')}</span></p>`;

/* Appel final : sur l'accueil, la photo ronde de la table ; ailleurs, la table dessinée où la quatrième place s'allume. */
export function appelFinal(c, { photo = false } = {}) {
  const visuel = photo
    ? c.media({ nom: 'grok/accueil-appel', alt: c.donnees.images['grok/accueil-appel'].alt, cadrage: '50% 52%', classe: 'appel-photo', sizes: '(max-width: 760px) 80vw, 40vw', attrs: 'data-effet="appel-cercle"' })
    : tableRonde(c, { libelle: c.s('commun.appelPlaceTexte'), places: ['Me Di Nicola', 'Me Lucot', 'Me Schiltz', 'Vous'], effet: 'quatrieme-place', classe: 'table--appel', vide: 3 });
  return html`<section class="appel" id="appel" aria-labelledby="appel-titre">
  <div class="conteneur appel-grille">
    <div class="appel-texte">
      <p class="surtitre">${c.t('commun.appelPlace')}</p>
      <h2 id="appel-titre" data-anime="lignes">${c.t('commun.appelTitre')}</h2>
      <p data-anime>${c.t('commun.appelTexte')}</p>
      <p class="appel-actions" data-anime>
        ${c.lien('contact', { classe: 'bouton bouton--clair', texte: c.t('commun.actionEntete'), attrs: 'data-survol="magnetique"' })}
        <a class="bouton bouton--contour" href="tel:${c.site.contact.telephoneLien}">${c.t('commun.appeler')} ${c.site.contact.telephone}</a>
      </p>
    </div>
    <div class="appel-visuel">${visuel}</div>
  </div>
</section>`;
}
