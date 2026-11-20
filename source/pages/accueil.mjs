/* Accueil · DNL Avocats · direction « À vos côtés ».
   Ouverture (arche photo + pastille), écran partagé famille / administration, méthode autour de la table (scène collante),
   honoraires annoncés (compteur + horloge), trois avocates, l'amiable d'abord (cercles qui se rejoignent),
   Lyon et Avignon, appel final. Chaque section a au moins un effet au défilement, visible aussi sur téléphone. */
import { html, brut } from '../../outils/gabarit.mjs';
import { tableRonde, appelFinal, statut } from '../gabarits/blocs.mjs';

export const page = { cle: 'accueil', fichier: 'index', imagePartage: 'equipe-1280.webp' };

export default (c) => {
  const T = (k) => c.t(`accueil.${k}`);
  const tarif = (id) => c.donnees.tarifs.find((t) => t.id === id);
  const liste = (k) => c.s(`accueil.situation.${k}`).split('|');
  const equipe = c.donnees.equipe;
  return html`
<section class="hero" id="debut">
  <div class="hero-texte">
    <p class="surtitre hero-surtitre masque-ecran-tres-bas o-suite">${T('hero.surtitre')}</p>
    <h1 class="hero-titre"><span class="ligne-masque"><span class="hero-ligne">${T('hero.titre1')}</span></span><span class="ligne-masque"><span class="hero-ligne">${T('hero.titre2')}</span></span><span class="ligne-masque"><span class="hero-ligne">${T('hero.titre3')} <em>${T('hero.titreMot')}</em></span></span></h1>
    <p class="hero-intro masque-ecran-bas masque-petit o-suite">${T('hero.texte')}</p>
    <div class="hero-actions o-suite">
      ${c.lien('contact', { classe: 'bouton', texte: T('hero.action'), attrs: 'data-action-principale data-survol="magnetique"' })}
      ${c.lien('domaines', { classe: 'bouton bouton--contour masque-ecran-tres-bas', texte: T('hero.action2') })}
    </div>
    <p class="hero-info o-suite" data-info-cle><strong>${T('hero.info')}</strong><span>${T('hero.infoDetail')}</span></p>
  </div>
  <div class="hero-visuel">
    ${c.media({ nom: 'equipe', alt: c.donnees.images.equipe.alt, cadrage: '54% 46%', priorite: true, classe: 'hero-arche', sizes: '(max-width: 760px) 100vw, 56vw', attrs: 'data-iris-centre data-fx="parallaxe" data-fx-force="6"' })}
    <svg class="pastille o-suite" viewBox="0 0 200 200" data-effet="pastille" data-superpose data-audit-ignorer aria-hidden="true">
      <defs><path id="pastille-cercle" d="M100,100 m-78,0 a78,78 0 1,1 156,0 a78,78 0 1,1 -156,0"/></defs>
      <circle cx="100" cy="100" r="98" class="pastille-fond"/>
      <g class="pastille-tour"><g class="pastille-texte"><text><textPath href="#pastille-cercle" textLength="490" lengthAdjust="spacing">${c.s('accueil.hero.pastille')}</textPath></text></g></g>
      <text x="100" y="108" text-anchor="middle" class="pastille-prix">180 €</text><text x="100" y="130" text-anchor="middle" class="pastille-ttc">TTC</text>
    </svg>
  </div>
</section>

<section class="situation" id="situation" aria-labelledby="situation-titre">
  <div class="conteneur situation-tete">
    <p class="surtitre" data-anime>${T('situation.surtitre')}</p>
    <h2 id="situation-titre" data-anime="lignes">${T('situation.titre')}</h2>
  </div>
  <div class="partage">
    ${[['famille', 'grok/accueil-famille', 'domaines', 'famille'], ['public', 'grok/accueil-public', 'domaines', 'urbanisme']].map(([k, img, p, ancre], i) => html`
    <article class="partage-moitie partage-moitie--${k}" data-cote="${i ? 'd' : 'g'}" data-effet="partage">
      ${c.media({ nom: img, alt: c.donnees.images[img].alt, cadrage: c.donnees.images[img].cadrage, classe: 'partage-media', sizes: '(max-width: 760px) 100vw, 50vw', attrs: 'data-fx="parallaxe" data-fx-force="8"' })}
      <div class="partage-carte">
        <h3>${T(`situation.${k}Titre`)}</h3>
        <p>${T(`situation.${k}Texte`)}</p>
        <ul class="partage-liste">${liste(`${k}Liste`).map((x) => html`<li>${x}</li>`)}</ul>
        ${c.lien(p, { ancre, classe: 'lien-fleche', texte: html`${T(`situation.${k}Lien`)} <span aria-hidden="true">→</span>` })}
      </div>
    </article>`)}
  </div>
</section>

<section class="methode" id="methode" data-scene data-entete-cache aria-labelledby="methode-titre">
  <div class="methode-cadre" data-collant>
    <div class="conteneur methode-grille">
      <div class="methode-visuel">
        ${tableRonde(c, { libelle: c.s('accueil.methode.table'), places: ['e1', 'e2', 'e3', 'e4'].map((k) => c.s(`accueil.methode.${k}`)), effet: 'table-ronde' })}
      </div>
      <div class="methode-texte">
        <p class="surtitre">${T('methode.surtitre')}</p>
        <h2 id="methode-titre" data-anime="lignes">${T('methode.titre')}</h2>
        <p class="methode-intro masque-ecran-bas">${T('methode.texte')}</p>
        <ol class="methode-etapes" data-etapes>
          ${['e1', 'e2', 'e3', 'e4'].map((k, i) => html`<li class="methode-etape${i === 0 ? ' est-active' : ''}" data-etape="${i}"><span class="methode-num" aria-hidden="true">${i + 1}</span><div><h3>${T(`methode.${k}`)}</h3><p>${T(`methode.${k}t`)}</p></div></li>`)}
        </ol>
      </div>
    </div>
  </div>
</section>

<section class="annonce conteneur" id="honoraires" aria-labelledby="annonce-titre">
  <div class="annonce-visuel" data-visuel>
    <svg class="horloge" viewBox="0 0 240 240" data-effet="horloge" role="img" aria-label="${c.s('accueil.honoraires.horloge')}">
      <circle class="horloge-piste" cx="120" cy="120" r="108"/>
      <circle class="horloge-heure" cx="120" cy="120" r="108" pathLength="1" transform="rotate(-90 120 120)"/>
      <circle class="horloge-piste horloge-piste--int" cx="120" cy="120" r="94"/>
      <circle class="horloge-demi" cx="120" cy="120" r="94" pathLength="1" transform="rotate(-90 120 120)"/>
      ${Array.from({ length: 12 }, (_, i) => html`<line class="horloge-cran" x1="120" y1="6" x2="120" y2="${i % 3 ? 14 : 20}" transform="rotate(${i * 30} 120 120)"/>`)}
    </svg>
    <p class="annonce-prix" aria-hidden="true"><span class="annonce-nombre" data-compteur="180">180</span><span class="annonce-unite">${T('honoraires.unite')}</span></p>
    <p class="annonce-duree"><strong>${T('honoraires.duree')}</strong> ${T('honoraires.dureeTexte')}</p>
  </div>
  <div class="annonce-texte">
    <p class="surtitre" data-anime>${T('honoraires.surtitre')}</p>
    <h2 id="annonce-titre" data-anime="lignes">${T('honoraires.titre')}</h2>
    <p class="visuellement-cache">180 € TTC, ${T('honoraires.duree')} ${T('honoraires.dureeTexte')}.</p>
    <p data-anime>${T('honoraires.texte')}</p>
    <p class="annonce-exemples-titre" data-anime>${T('honoraires.exemples')}</p>
    <ul class="tarifs-mini" data-anime="cascade">
      ${['divorce-consentement', 'mise-en-demeure', 'recours-annulation'].map((id) => html`<li><span>${tarif(id).libelle}</span><strong data-prix>${tarif(id).montant}</strong></li>`)}
    </ul>
    ${c.lien('honoraires', { ancre: 'grille', classe: 'lien-fleche', texte: html`${c.t('commun.voirGrille')} <span aria-hidden="true">→</span>` })}
  </div>
</section>

<section class="avocates" id="avocates" aria-labelledby="avocates-titre">
  <div class="conteneur">
    <div class="avocates-tete">
      <p class="surtitre" data-anime>${T('avocates.surtitre')}</p>
      <h2 id="avocates-titre" data-anime="lignes">${T('avocates.titre')}</h2>
      <p data-anime>${T('avocates.texte')}</p>
    </div>
    <ul class="avocates-grille" data-anime="cascade">
      ${equipe.map((a) => html`<li class="avocate">
        ${c.lien('cabinet', { ancre: a.id, classe: 'avocate-lien', texte: html`${c.media({ nom: a.image, alt: c.donnees.images[a.image].alt, cadrage: c.donnees.images[a.image].cadrage, classe: 'avocate-media', sizes: '(max-width: 760px) 100vw, 33vw', attrs: 'data-fx="parallaxe" data-fx-force="7"' })}<span class="avocate-nom">${a.nom}</span>` })}
        <p class="avocate-depuis">${a.depuis}</p>
        <p class="avocate-domaine">${a.domaine}</p>
        <p class="avocate-mention">${a.mention}</p>
      </li>`)}
    </ul>
    <figure class="citation">
      <blockquote><p data-anime="mots">${T('avocates.citation')}</p></blockquote>
      <figcaption>${T('avocates.citationSource')}</figcaption>
    </figure>
    <p class="centre">${c.lien('cabinet', { classe: 'bouton bouton--contour', texte: c.t('commun.decouvrirCabinet') })}</p>
  </div>
</section>

<section class="amiable" id="amiable" aria-labelledby="amiable-titre">
  <div class="conteneur amiable-grille">
    <div class="amiable-texte">
      <p class="surtitre" data-anime>${T('amiable.surtitre')}</p>
      <h2 id="amiable-titre" data-anime="lignes">${T('amiable.titre')}</h2>
      <p data-anime>${T('amiable.texte')}</p>
      <ul class="amiable-liste" data-anime="cascade">
        ${['n1', 'n2', 'n3'].map((k) => html`<li><h3>${T(`amiable.${k}`)}</h3><p>${T(`amiable.${k}t`)}</p></li>`)}
      </ul>
    </div>
    <svg class="accord" viewBox="0 0 520 360" data-effet="accord" data-visuel role="img" aria-label="${c.s('accueil.amiable.schema')}">
      <defs><clipPath id="accord-g"><circle class="accord-cg" cx="190" cy="180" r="130"/></clipPath></defs>
      <circle class="accord-cercle accord-cercle--g" cx="190" cy="180" r="130"/>
      <circle class="accord-cercle accord-cercle--d" cx="330" cy="180" r="130"/>
      <circle class="accord-zone" cx="330" cy="180" r="130" clip-path="url(#accord-g)"/>
      <text class="accord-t accord-t--g" x="120" y="186" text-anchor="middle">${c.s('accueil.amiable.vous')}</text>
      <text class="accord-t accord-t--d" x="400" y="186" text-anchor="middle">${c.s('accueil.amiable.autre')}</text>
      <text class="accord-t accord-t--m" x="260" y="186" text-anchor="middle">${c.s('accueil.amiable.accord')}</text>
    </svg>
  </div>
</section>

<section class="bureaux conteneur" id="bureaux" aria-labelledby="bureaux-titre">
  <div class="bureaux-tete">
    <p class="surtitre" data-anime>${T('bureaux.surtitre')}</p>
    <h2 id="bureaux-titre" data-anime="lignes">${T('bureaux.titre')}</h2>
    <p data-anime>${T('bureaux.texte')}</p>
    ${statut(c)}
  </div>
  <div class="bureaux-grille" data-anime="cascade">
    ${c.donnees.cabinet.bureaux.map((b) => html`<article class="bureau">
      ${c.media({ nom: b.image, alt: c.donnees.images[b.image].alt, cadrage: c.donnees.images[b.image].cadrage, classe: 'bureau-media', sizes: '(max-width: 760px) 100vw, 45vw', attrs: 'data-fx="zoom"' })}
      <div class="bureau-texte">
        <h3>${b.ville}</h3>
        <p class="bureau-role">${b.role}</p>
        <p>${b.adresse}<br>${b.cp}</p>
        ${c.lien('contact', { params: `lieu=${b.id}`, ancre: 'rendez-vous', classe: 'lien-fleche', texte: html`${c.t('accueil.bureaux.itineraire', { ville: b.ville })} <span aria-hidden="true">→</span>` })}
      </div>
    </article>`)}
  </div>
</section>

${appelFinal(c, { photo: true })}
`;
};
