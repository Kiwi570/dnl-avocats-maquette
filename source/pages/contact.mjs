/* Contact : le formulaire de rendez-vous en quatre étapes dès l'ouverture (module formulaire-par-etapes, envoi simulé,
   prérempli par ?sujet= et ?lieu=), coordonnées, statut d'horaires et médaillons des trois avocates ; puis les deux bureaux. */
import { html, brut } from '../../outils/gabarit.mjs';
import { statut } from '../gabarits/blocs.mjs';

export const page = { cle: 'contact', fichier: 'contact', imagePartage: 'equipe-1280.webp' };

const ICONES = {
  famille: '<path d="M10 14a4 4 0 1 0 0-.1M22 15a3 3 0 1 0 0-.1M4 27c0-5 3-8 6-8s6 3 6 8M17 27c0-4 2-6 5-6s5 2 5 6"/>',
  successions: '<circle cx="11" cy="16" r="5"/><path d="M16 16h12M24 16v4M28 16v3"/>',
  urbanisme: '<path d="M4 27h24M7 27V15l7-5 7 5v12M12 27v-6h4v6M24 27V9"/><path d="M24 9l4 2"/>',
  'fonction-publique': '<path d="M4 12l12-6 12 6M6 12v13M11 12v13M16 12v13M21 12v13M26 12v13M3 27h26"/>',
  autre: '<circle cx="16" cy="16" r="11"/><path d="M13 13a3 3 0 1 1 4 3c-1 .5-1 1-1 2.5M16 22v.5"/>',
  lyon: '<path d="M16 28s-9-8-9-15a9 9 0 0 1 18 0c0 7-9 15-9 15z"/><circle cx="16" cy="13" r="3"/>',
  avignon: '<path d="M16 28s-9-8-9-15a9 9 0 0 1 18 0c0 7-9 15-9 15z"/><circle cx="16" cy="13" r="3"/>',
  visio: '<rect x="4" y="9" width="17" height="14" rx="2"/><path d="M21 14l7-4v12l-7-4"/>',
};

export default (c) => {
  const T = (k) => c.t(`contact.${k}`);
  const icone = (k) => html`<svg class="fpe__icone" viewBox="0 0 32 32" aria-hidden="true" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round">${brut(ICONES[k])}</svg>`;
  const carte = (nom, valeur, titre, texte, requis) => html`<label class="fpe__carte"><input type="radio" name="${nom}" value="${valeur}"${requis ? brut(' required') : ''}>${icone(valeur)}<span class="fpe__carte-titre">${titre}</span><span class="fpe__carte-texte">${texte}</span></label>`;
  const D = c.donnees.domaines;
  return html`
<section class="rdv" id="debut">
  <div class="conteneur rdv-grille">
    <div class="rdv-cote">
      <p class="surtitre o-suite">${T('surtitre')}</p>
      <h1><span class="ligne-masque"><span class="page-ligne">${T('titre')}</span></span></h1>
      <p class="rdv-intro o-suite masque-petit">${T('texte')}</p>
      <p class="rdv-tel o-suite"><a href="tel:${c.site.contact.telephoneLien}" data-action-principale>${c.site.contact.telephone}</a><span data-info-cle>${T('infoTexte')}</span></p>
      <p class="o-suite"><a class="rdv-mail" href="mailto:${c.site.contact.email}">${c.site.contact.email}</a></p>
      <div class="o-suite">${statut(c)}</div>
      <div class="trio o-suite" data-effet="trio" data-iris-centre>
        ${c.donnees.equipe.map((a) => c.media({ nom: a.image, alt: '', cadrage: '50% 24%', classe: 'trio-medaillon', sizes: '96px' }))}
        <p class="trio-noms">${T('equipe')}</p>
      </div>
    </div>
    <div class="rdv-formulaire" id="rendez-vous">
      <div class="fpe" data-module="formulaire-par-etapes">
        <div class="fpe__carton" data-visuel>
          <form class="fpe__form" action="#" method="post" novalidate>
            <div class="fpe__progression">
              <ol class="fpe__reperes" aria-label="Progression"></ol>
              <div class="fpe__barre" aria-hidden="true"><span></span></div>
              <p class="fpe__etat" aria-live="polite"></p>
            </div>
            <fieldset class="fpe__etape" data-etape="${c.s('contact.etape1')}">
              <legend class="fpe__legende"><h2 class="fpe__titre">${T('q1')}</h2></legend>
              <div class="fpe__groupe fpe__cartes" data-libelle="${c.s('contact.etape1')}">
                ${D.map((d, i) => carte('sujet', d.sujet, d.titre, d.groupes.map((g) => g.titre).join(', '), i === 0))}
                ${carte('sujet', 'autre', T('autre'), T('autreTexte'), false)}
              </div>
            </fieldset>
            <fieldset class="fpe__etape" data-etape="${c.s('contact.etape2')}">
              <legend class="fpe__legende"><h2 class="fpe__titre">${T('q2')}</h2></legend>
              <div class="fpe__groupe fpe__cartes" data-libelle="${c.s('contact.etape2')}">
                ${carte('lieu', 'lyon', 'Lyon', T('lyonTexte'), true)}
                ${carte('lieu', 'avignon', 'Avignon', T('avignonTexte'), false)}
                ${carte('lieu', 'visio', T('visio'), T('visioTexte'), false)}
              </div>
            </fieldset>
            <fieldset class="fpe__etape" data-etape="${c.s('contact.etape3')}">
              <legend class="fpe__legende"><h2 class="fpe__titre">${T('q3')}</h2></legend>
              <div class="fpe__grille">
                <div class="fpe__champ"><label for="f-prenom">${T('prenom')} <i aria-hidden="true">*</i></label><input id="f-prenom" name="prenom" autocomplete="given-name" required></div>
                <div class="fpe__champ"><label for="f-nom">${T('nom')} <i aria-hidden="true">*</i></label><input id="f-nom" name="nom" autocomplete="family-name" required></div>
                <div class="fpe__champ"><label for="f-email">${T('email')} <i aria-hidden="true">*</i></label><input id="f-email" name="email" type="email" autocomplete="email" required></div>
                <div class="fpe__champ"><label for="f-tel">${T('tel')}</label><input id="f-tel" name="tel" type="tel" inputmode="tel" autocomplete="tel" pattern="[0-9 +().\\-]{8,20}"></div>
              </div>
              <div class="fpe__champ"><label for="f-message">${T('message')} <i aria-hidden="true">*</i></label><textarea id="f-message" name="message" rows="4" minlength="10" required aria-describedby="f-message-aide"></textarea><p class="fpe__aide" id="f-message-aide">${T('messageAide')}</p></div>
              <label class="fpe__case"><input type="checkbox" name="accord" value="oui" required data-libelle="Accord" data-hors-recap><span class="fpe__choix-texte">${T('accord')} <i aria-hidden="true">*</i></span></label>
              <p class="fpe__aide">${T('obligatoires')}</p>
              <p class="mention-donnees">${T('donnees')}</p>
            </fieldset>
            <fieldset class="fpe__etape" data-etape="${c.s('contact.etape4')}" data-recap>
              <legend class="fpe__legende"><h2 class="fpe__titre">${T('q4')}</h2></legend>
              <div class="fpe__recap"><p>${T('recapVide')}</p></div>
            </fieldset>
            <div class="fpe__nav">
              <button class="fpe__bouton fpe__bouton--ligne" type="button" data-precedent>${T('retour')}</button>
              <button class="fpe__bouton" type="button" data-suivant data-retour="${c.s('contact.revenir')}">${T('continuer')}</button>
              <button class="fpe__bouton" type="submit">${T('envoyer')}</button>
            </div>
          </form>
          <div class="fpe__fin" hidden data-grille="retour">
            <svg class="fpe__coche" viewBox="0 0 64 64" aria-hidden="true"><circle cx="32" cy="32" r="28"/><path d="M20 33l8 8 16-17"/></svg>
            <h2>${T('merci')}</h2>
            <p data-resume></p>
            <p>${T('finTexte')}</p>
            <div class="fpe__fin-actions"><button class="fpe__bouton fpe__bouton--ligne" type="button" data-recommencer>${T('recommencer')}</button></div>
          </div>
        </div>
        <p class="rdv-simule">${T('simule')}</p>
      </div>
    </div>
  </div>
</section>

<section class="adresses" id="bureaux" aria-labelledby="adresses-titre">
  <div class="conteneur">
    <p class="surtitre" data-anime>${T('bureauxSurtitre')}</p>
    <h2 id="adresses-titre" data-anime="lignes">${T('bureauxTitre')}</h2>
    <p class="adresses-intro" data-anime>${T('bureauxTexte')}</p>
    <div class="adresses-grille">
      ${c.donnees.cabinet.bureaux.map((b) => html`<article class="adresse">
        ${c.media({ nom: b.image, alt: c.donnees.images[b.image].alt, cadrage: c.donnees.images[b.image].cadrage, classe: 'adresse-media', sizes: '(max-width: 760px) 100vw, 50vw', attrs: 'data-fx="parallaxe" data-fx-force="8"' })}
        <div class="adresse-texte" data-anime><h3>${b.ville}</h3><p class="bureau-role">${b.role}</p><p>${b.adresse}<br>${b.cp}</p><p><a class="lien-tel" href="tel:${c.site.contact.telephoneLien}">${c.site.contact.telephone}</a></p></div>
      </article>`)}
    </div>
  </div>
</section>
`;
};
