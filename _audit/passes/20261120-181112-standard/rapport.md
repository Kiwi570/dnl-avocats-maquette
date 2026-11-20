# Rapport d’audit

Projet : `dnl-avocats-maquette` · 20/11/2026 19:29:06 · 18 min · 6 page(s) · audit standard

## Résumé

- Statut : **41 échec(s)**
- Passe : `20261120-181112-standard` · version ?v=1
- Échecs : **41**
- À regarder : **30**
- Non lancé : **1**
- Contrôles passés : vercel.json (1), .vercelignore (1), robots.txt (1), numéro de version (1), langues (1), grille wouahou (3), mesures (66), balayage (5), films d’ouverture (10), films de transition (10), bords de l’écran (6), intro accélérable et passable (7), menu (1), clavier (6), liens et boutons (6), liens profonds (16), liens vers la page en cours (5), changements de hauteur (5), parcours du projet (1), fluidité (10), défilement selon l’appareil (5), mouvement (10), effets du plan (11), souris immobile (4), vitesse (5), captures (1)

## Grille wouahou

| Point | État | Détail |
|---|---|---|
| 1. L’effet signature se manipule | ✗ absent | aucun data-grille="manipuler" sur l’accueil |
| 2. L’intro devient la page | ✓ présent | objet d’ouverture sur 5 page(s), versObjet dans l’intro |
| 3. La transition reprend le motif | ✓ présent | voile en iris |
| 4. Quelque chose relie les sections et les pages | ✗ absent | sur aucune page |
| 5. Un titre fait l’événement sur chaque page | ✗ absent | sur aucune page |
| 6. La scène est un geste du métier | · sans objet | aucune scène épinglée marquée ni galerie générique |
| 7. L’action principale a un retour physique | ✗ absent | sur aucune page |

Le script vérifie les marques (`data-grille`, `data-iris-centre`, forme du voile, `versObjet`) ; la force et la justesse de chaque point se jugent sur les captures et les films.

## Échecs

### lien vers le site actuel (6)

- **lien vers le site actuel** — `404.html` — mailto:contact@dnlavocats.com
- **lien vers le site actuel** — `cabinet.html` — mailto:contact@dnlavocats.com
- **lien vers le site actuel** — `contact.html` — mailto:contact@dnlavocats.com
- **lien vers le site actuel** — `domaines.html` — mailto:contact@dnlavocats.com
- **lien vers le site actuel** — `honoraires.html` — mailto:contact@dnlavocats.com
- **lien vers le site actuel** — `index.html` — mailto:contact@dnlavocats.com

### premier écran : information clé hors de l’écran (5)

- **premier écran : information clé hors de l’écran** — `/` — section#debut > div.hero-texte:nth-of-type(1) > p.hero-info.o-suite:nth-of-type(3) « Premier rendez-vous : 180 € TTC 1 h à 1 h 30, au c » _(320×568 normal, 320×568 sansJs)_
- **premier écran : information clé hors de l’écran** — `/404` — section#debut > div.conteneur.introuvable-texte > p.o-suite:nth-of-type(4) « 04 78 38 89 50 » _(320×568 normal, 320×568 sansJs)_
- **premier écran : information clé hors de l’écran** — `/cabinet` — section#debut > div.conteneur.plein-texte > p.plein-actions.o-suite:nth-of-type(3) > span.plein-info « Une avocate référente, du début à la fin » _(320×568 normal, 390×844 normal, 390×844 sansJs, 390×844 sansWebgl, 1366×768 sansJs, 320×568 sansJs)_
- **premier écran : information clé hors de l’écran** — `/domaines` — section#debut > div.conteneur.dom-tete-texte:nth-of-type(1) > p.dom-tete-actions.o-suite:nth-of-type(3) > span.dom-tete-info « Premier rendez-vous 180 € TTC » _(320×568 normal, 320×568 sansJs)_
- **premier écran : information clé hors de l’écran** — `/honoraires` — div.conteneur.prix-grille > div.prix-texte:nth-of-type(1) > p.prix-actions.o-suite:nth-of-type(5) > span.prix-info « Taux horaire habituel : 250 € HT, soit 300 € TTC » _(320×568 normal, 320×568 sansJs)_

### texte coupé (10)

- **texte coupé** — `/` — div.partage:nth-of-type(2) > article.partage-moitie.partage-moitie--famille:nth-of-type(1) > div.partage-carte > a.lien-fleche « Famille et patrimoine → » — coupé par section#situation > div.partage:nth-of-type(2) « Illustration générée Votre famille Séparation, enf » _(768×1024 normal, 1920×1080 normal)_
- **texte coupé** — `/` — article.partage-moitie.partage-moitie--famille:nth-of-type(1) > div.partage-carte > a.lien-fleche > span « → » — coupé par section#situation > div.partage:nth-of-type(2) « Illustration générée Votre famille Séparation, enf » _(768×1024 normal)_
- **texte coupé** — `/` — div.partage:nth-of-type(2) > article.partage-moitie.partage-moitie--public:nth-of-type(2) > figure.media.partage-media > figcaption.mention-ia « Illustration générée » — coupé par section#situation > div.partage:nth-of-type(2) « Illustration générée Votre famille Séparation, enf » _(768×1024 normal, 390×844 normal, 844×390 normal, 320×568 normal, 1366×768 normal, 1920×1080 normal, +2)_
- **texte coupé** — `/` — div.partage:nth-of-type(2) > article.partage-moitie.partage-moitie--public:nth-of-type(2) > div.partage-carte > a.lien-fleche « Urbanisme et fonction publique → » — coupé par section#situation > div.partage:nth-of-type(2) « Illustration générée Votre famille Séparation, enf » _(768×1024 normal, 390×844 normal, 320×568 normal, 390×844 sansWebgl)_
- **texte coupé** — `/` — article.partage-moitie.partage-moitie--public:nth-of-type(2) > div.partage-carte > a.lien-fleche > span « → » — coupé par section#situation > div.partage:nth-of-type(2) « Illustration générée Votre famille Séparation, enf » _(768×1024 normal, 390×844 normal, 390×844 sansWebgl)_
- **texte coupé** — `/` — div.partage:nth-of-type(2) > article.partage-moitie.partage-moitie--famille:nth-of-type(1) > div.partage-carte > h3 « Votre famille » — coupé par section#situation > div.partage:nth-of-type(2) « Illustration générée Votre famille Séparation, enf » _(1920×1080 normal)_
- **texte coupé** — `/` — div.partage:nth-of-type(2) > article.partage-moitie.partage-moitie--famille:nth-of-type(1) > div.partage-carte > p « Séparation, enfants, filiation, succession : les m » — coupé par section#situation > div.partage:nth-of-type(2) « Illustration générée Votre famille Séparation, enf » _(1920×1080 normal)_
- **texte coupé** — `/contact` — div.fpe__progression:nth-of-type(1) > ol.fpe__reperes > li.fpe__repere.est-actif:nth-of-type(1) > span.fpe__nom:nth-of-type(2) « Votre situation » — le contenu dépasse de son cadre _(768×1024 normal, 844×390 normal)_
- **texte coupé** — `/contact` — div.fpe__progression:nth-of-type(1) > ol.fpe__reperes > li.fpe__repere:nth-of-type(3) > span.fpe__nom:nth-of-type(2) « Coordonnées » — le contenu dépasse de son cadre _(768×1024 normal, 844×390 normal)_
- **texte coupé** — `/contact` — div.fpe__progression:nth-of-type(1) > ol.fpe__reperes > li.fpe__repere:nth-of-type(4) > span.fpe__nom:nth-of-type(2) « Récapitulatif » — le contenu dépasse de son cadre _(768×1024 normal, 844×390 normal)_

### textes qui se chevauchent (4)

- **textes qui se chevauchent** — `/` — section#honoraires > div.annonce-visuel:nth-of-type(1) > p.annonce-prix:nth-of-type(1) > span.annonce-nombre:nth-of-type(1) « 180 » — avec section#honoraires > div.annonce-visuel:nth-of-type(1) > p.annonce-prix:nth-of-type(1) > span.annonce-unite:nth-of-type(2) « € TTC » _(768×1024 normal, 390×844 normal, 844×390 normal, 320×568 normal, 390×844 sansJs, 1366×768 normal, +5)_
- **textes qui se chevauchent** — `/honoraires` — div.prix-texte:nth-of-type(1) > h1 > span.ligne-masque > span.page-ligne « Des honoraires annoncés avant de commencer » — avec div.conteneur.prix-grille > div.prix-texte:nth-of-type(1) > p.prix-geant.o-suite:nth-of-type(2) > span.prix-nombre:nth-of-type(1) « 180 » _(390×844 normal, 320×568 normal, 768×1024 normal, 844×390 normal, 390×844 sansJs, 1366×768 normal, +5)_
- **textes qui se chevauchent** — `/honoraires` — div.conteneur.prix-grille > div.prix-texte:nth-of-type(1) > p.prix-geant.o-suite:nth-of-type(2) > span.prix-nombre:nth-of-type(1) « 180 » — avec section#debut > div.conteneur.prix-grille > div.prix-texte:nth-of-type(1) > p.prix-intro.o-suite:nth-of-type(4) « Une heure à une heure trente de consultation, au c » _(390×844 normal, 320×568 normal, 768×1024 normal, 390×844 sansJs, 1920×1080 normal, 390×844 sansWebgl, +1)_
- **textes qui se chevauchent** — `/honoraires` — div.conteneur.prix-grille > div.prix-texte:nth-of-type(1) > p.prix-geant.o-suite:nth-of-type(2) > span.prix-nombre:nth-of-type(1) « 180 » — avec div.conteneur.prix-grille > div.prix-texte:nth-of-type(1) > p.prix-actions.o-suite:nth-of-type(5) > a.bouton.bouton--clair « Prendre rendez-vous » _(1366×768 normal, 1366×768 sansJs, 1366×768 sansWebgl)_

### premier écran : bouton principal hors de l’écran (4)

- **premier écran : bouton principal hors de l’écran** — `/404` — section#debut > div.conteneur.introuvable-texte > p.introuvable-actions.o-suite:nth-of-type(3) > a.bouton:nth-of-type(1) « Revenir à l'accueil » _(320×568 normal, 320×568 sansJs)_
- **premier écran : bouton principal hors de l’écran** — `/cabinet` — section#debut > div.conteneur.plein-texte > p.plein-actions.o-suite:nth-of-type(3) > a.bouton « Prendre rendez-vous » _(320×568 normal, 390×844 normal, 390×844 sansJs, 390×844 sansWebgl, 1366×768 sansJs, 320×568 sansJs)_
- **premier écran : bouton principal hors de l’écran** — `/domaines` — section#debut > div.conteneur.dom-tete-texte:nth-of-type(1) > p.dom-tete-actions.o-suite:nth-of-type(3) > a.bouton « Prendre rendez-vous » _(320×568 normal, 320×568 sansJs)_
- **premier écran : bouton principal hors de l’écran** — `/honoraires` — div.conteneur.prix-grille > div.prix-texte:nth-of-type(1) > p.prix-actions.o-suite:nth-of-type(5) > a.bouton.bouton--clair « Prendre rendez-vous » _(320×568 normal, 320×568 sansJs)_

### contraste sur image (2)

- **contraste sur image** — `/404` — section#debut > div.conteneur.introuvable-texte > p.surtitre.o-suite:nth-of-type(1) « Erreur 404 » — 3.43:1 sur les 10 % de la photo les moins favorables (minimum 4.5:1) _(1366×768 normal)_
- **contraste sur image** — `/404` — section#debut > div.conteneur.introuvable-texte > p.o-suite:nth-of-type(4) « 04 78 38 89 50 » — 4.40:1 sur les 10 % de la photo les moins favorables (minimum 4.5:1) _(1366×768 normal)_

### premier écran : titre hors de l’écran (1)

- **premier écran : titre hors de l’écran** — `/cabinet` — section#debut > div.conteneur.plein-texte > h1 « Un contact privilégié et unique, au service de l'h » — haut 343 px, bas 555 px, zone 65–503 px _(320×568 normal, 320×568 sansJs)_

### contraste insuffisant (1)

- **contraste insuffisant** — `/cabinet` — section#reperes > div.conteneur > p.surtitre « Repères » — 2.14:1 (minimum 4.5:1) _(768×1024 normal, 390×844 normal, 320×568 normal, 844×390 normal, 390×844 sansJs, 1366×768 normal, +5)_

### accessibilité (axe) : color-contrast (1)

- **accessibilité (axe) : color-contrast** — `/cabinet` — .conteneur > .surtitre.vu[data-anime=""] — Elements must meet minimum color contrast ratio thresholds _(390×844 normal, 1366×768 normal)_

### zone tactile sous 44 px (3)

- **zone tactile sous 44 px** — `/contact` — div.conteneur.rdv-grille > div.rdv-cote:nth-of-type(1) > p.rdv-tel.o-suite:nth-of-type(3) > a « 04 78 38 89 50 » — 358 × 41 px _(390×844 normal, 320×568 normal, 390×844 sansJs, 390×844 sansWebgl, 320×568 sansJs)_
- **zone tactile sous 44 px** — `/contact` — article.adresse:nth-of-type(1) > div.adresse-texte > p:nth-of-type(3) > a « 04 78 38 89 50 » — 118 × 19 px _(390×844 normal, 320×568 normal, 768×1024 normal, 844×390 normal, 390×844 sansJs, 390×844 sansWebgl, +1)_
- **zone tactile sous 44 px** — `/contact` — article.adresse:nth-of-type(2) > div.adresse-texte > p:nth-of-type(3) > a « 04 78 38 89 50 » — 118 × 19 px _(390×844 normal, 320×568 normal, 768×1024 normal, 844×390 normal, 390×844 sansJs, 390×844 sansWebgl, +1)_

### élément recouvert (1)

- **élément recouvert** — `/honoraires` — section#debut > div.conteneur.prix-grille > div.prix-texte:nth-of-type(1) > h1 « Des honoraires annoncés avant de commencer » — par div.conteneur.prix-grille > div.prix-texte:nth-of-type(1) > p.prix-geant.o-suite:nth-of-type(2) > span.prix-nombre:nth-of-type(1) « 180 » _(768×1024 normal, 1366×768 normal, 1920×1080 normal)_

### débordement horizontal (2)

- **débordement horizontal** — `/` — page large de 687 px — largeurs : 680 à 1040 px (10 largeurs) _(balayage 320–1920 normal)_
- **débordement horizontal** — `/contact` — page large de 825 px — largeurs : 800, 840 px _(balayage 320–1920 normal)_

### section sans effet au défilement (1)

- **section sans effet au défilement** — `/contact` — section#debut.rdv — ses effets (trio) ne bougent pas, ou sont cachés à cette taille _(390×844 normal)_

## À regarder

### « à compléter » visible (1)

- **« à compléter » visible** — `contact.html` — 1 fois hors du pied de page : remplacer par une phrase vraie qui oriente le visiteur (« Tarifs selon la saison, donnés à la réservation ») ou retirer l'élément, et le noter dans la fiche du README (sauf sens propre : « dossier à compléter »)

### grille : effet signature qui ne se manipule pas (point 1) (1)

- **grille : effet signature qui ne se manipule pas (point 1)** — `/` — aucun élément data-grille="manipuler" sur l’accueil : objet à attraper, faire tourner ou glisser (module objet-a-faire-tourner, lumiere-au-pointeur…)

### grille : rien ne relie les sections (point 4) (1)

- **grille : rien ne relie les sections (point 4)** — sur aucune page : élément du métier qui relie les sections et les pages (fil dans la marge, objet unique qui change, lumière qui passe, carte, folio, frise), marqué data-grille="fil"

### grille : aucun titre ne fait l’événement (point 5) (1)

- **grille : aucun titre ne fait l’événement (point 5)** — sur aucune page : titre fabriqué par le métier, axe de police animé ou titre joué avec l’image (modules axes-au-defilement, titre-cousu, texte-grave-en-direct), marqué data-grille="typo"

### grille : action principale sans retour physique (point 7) (1)

- **grille : action principale sans retour physique (point 7)** — ajout au panier, réservation, envoi ou filtre : quelque chose de l’objet part, se pose ou se transforme (module envol-vers-le-panier, tampon « reçu »), marqué data-grille="retour"

### grille : objet d’ouverture hors du premier écran (1)

- **grille : objet d’ouverture hors du premier écran** — `/contact` — 0 × 0 px visibles : l’intro et le voile s’ouvrent depuis le centre de l’écran à cette taille _(390×844)_

### texte de contenu sous 13 px (ordinateur) (10)

- **texte de contenu sous 13 px (ordinateur)** — `/` — div.partage:nth-of-type(2) > article.partage-moitie.partage-moitie--famille:nth-of-type(1) > figure.media.partage-media > figcaption.mention-ia « Illustration générée » — 12.0 px : surtitres et légendes à 13 px au moins, textes de cartes à 15 px _(1366×768 normal, 1920×1080 normal, 1366×768 sansJs, 1366×768 sansWebgl)_
- **texte de contenu sous 13 px (ordinateur)** — `/` — div.partage:nth-of-type(2) > article.partage-moitie.partage-moitie--public:nth-of-type(2) > figure.media.partage-media > figcaption.mention-ia « Illustration générée » — 12.0 px : surtitres et légendes à 13 px au moins, textes de cartes à 15 px _(1366×768 normal, 1920×1080 normal, 1366×768 sansJs, 1366×768 sansWebgl)_
- **texte de contenu sous 13 px (ordinateur)** — `/` — div.conteneur.appel-grille > div.appel-visuel:nth-of-type(2) > figure.media.appel-photo > figcaption.mention-ia « Illustration générée » — 12.0 px : surtitres et légendes à 13 px au moins, textes de cartes à 15 px _(1366×768 normal, 1920×1080 normal, 1366×768 sansJs, 1366×768 sansWebgl)_
- **texte de contenu sous 13 px (ordinateur)** — `/404` — section#debut > figure.media.introuvable-media > figcaption.mention-ia « Illustration générée » — 12.0 px : surtitres et légendes à 13 px au moins, textes de cartes à 15 px _(1366×768 normal, 1920×1080 normal, 1366×768 sansJs, 1366×768 sansWebgl)_
- **texte de contenu sous 13 px (ordinateur)** — `/contact` — div.fpe__carton > form.fpe__form > div.fpe__progression:nth-of-type(1) > p.fpe__etat « ÉTAPE 1 SUR 4 · VOTRE SITUATION » — 12.5 px : surtitres et légendes à 13 px au moins, textes de cartes à 15 px _(1366×768 normal, 1920×1080 normal, 1366×768 sansWebgl)_
- **texte de contenu sous 13 px (ordinateur)** — `/domaines` — section#debut > div.dom-bandeau:nth-of-type(2) > figure.media.dom-bandeau-media > figcaption.mention-ia « Illustration générée » — 12.0 px : surtitres et légendes à 13 px au moins, textes de cartes à 15 px _(1366×768 normal, 1920×1080 normal, 1366×768 sansJs, 1366×768 sansWebgl)_
- **texte de contenu sous 13 px (ordinateur)** — `/domaines` — div.conteneur.domaine-grille > div.domaine-visuel:nth-of-type(1) > figure.media.domaine-media > figcaption.mention-ia « Illustration générée » — 12.0 px : surtitres et légendes à 13 px au moins, textes de cartes à 15 px _(1366×768 normal, 1920×1080 normal, 1366×768 sansJs, 1366×768 sansWebgl)_
- **texte de contenu sous 13 px (ordinateur)** — `/domaines` — div.conteneur.domaine-grille > div.domaine-visuel:nth-of-type(2) > figure.media.domaine-media > figcaption.mention-ia « Illustration générée » — 12.0 px : surtitres et légendes à 13 px au moins, textes de cartes à 15 px _(1366×768 normal, 1920×1080 normal, 1366×768 sansJs, 1366×768 sansWebgl)_
- **texte de contenu sous 13 px (ordinateur)** — `/domaines` — section#urbanisme > figure.media.domaine-bande > figcaption.mention-ia « Illustration générée » — 12.0 px : surtitres et légendes à 13 px au moins, textes de cartes à 15 px _(1366×768 normal, 1920×1080 normal, 1366×768 sansJs, 1366×768 sansWebgl)_
- **texte de contenu sous 13 px (ordinateur)** — `/honoraires` — div.conteneur.prix-grille > div.prix-visuel:nth-of-type(2) > figure.media.prix-photo > figcaption.mention-ia « Illustration générée » — 12.0 px : surtitres et légendes à 13 px au moins, textes de cartes à 15 px _(1366×768 normal, 1920×1080 normal, 1366×768 sansJs, 1366×768 sansWebgl)_

### typographie française (2)

- **typographie française** — `/` — div.conteneur > figure.citation > blockquote > p « « Ne vous résignez jamais. » » — espace insécable manquante avant ou après « « » » _(1366×768 normal)_
- **typographie française** — `/cabinet` — div.conteneur > figure.citation.citation--sombre > blockquote > p « « Ne vous résignez jamais. » » — espace insécable manquante avant ou après « « » » _(1366×768 normal)_

### section sans visuel (5)

- **section sans visuel** — `/cabinet` — section#reperes « Repères De 2009 à Avignon 2009 Anne Di Nicola prêt » — une belle photo ou un visuel animé quand le contenu s’y prête ; une section de texte peut rester typographique (v11) _(768×1024 normal, 390×844 normal, 320×568 normal, 844×390 normal, 390×844 sansJs, 1366×768 normal, +5)_
- **section sans visuel** — `/contact` — section#debut « Contact Prenons rendez-vous Dites-nous en quelques » — une belle photo ou un visuel animé quand le contenu s’y prête ; une section de texte peut rester typographique (v11) _(390×844 normal, 320×568 normal, 390×844 sansJs, 390×844 sansWebgl, 320×568 sansJs)_
- **section sans visuel** — `/contact` — section#debut « Contact Prenons rendez-vous 04 78 38 89 50 Du lund » — une belle photo ou un visuel animé quand le contenu s’y prête ; une section de texte peut rester typographique (v11) _(844×390 normal)_
- **section sans visuel** — `/honoraires` — section#etapes « Comment ça se passe Trois étapes, sans surprise 1  » — une belle photo ou un visuel animé quand le contenu s’y prête ; une section de texte peut rester typographique (v11) _(390×844 normal, 320×568 normal, 768×1024 normal, 844×390 normal, 390×844 sansJs, 1366×768 normal, +5)_
- **section sans visuel** — `/honoraires` — section#faq « Questions fréquentes Ce qu'on nous demande souvent » — une belle photo ou un visuel animé quand le contenu s’y prête ; une section de texte peut rester typographique (v11) _(390×844 normal, 320×568 normal, 768×1024 normal, 844×390 normal, 390×844 sansJs, 1366×768 normal, +5)_

### premier écran : aucun bouton principal marqué (data-action-principale) (1)

- **premier écran : aucun bouton principal marqué (data-action-principale)** — `/contact` _(320×568 normal, 390×844 normal, 844×390 normal, 768×1024 normal, 390×844 sansJs, 1366×768 normal, +5)_

### retour arrière : changement brusque (2)

- **retour arrière : changement brusque** — `/` — à 78 ms (différence 64 %) (films/retour-arrière-1366.png) _(1366×768 retour arrière)_
- **retour arrière : changement brusque** — `/` — à 74 ms (différence 54 %) (films/retour-arrière-390.png) _(390×844 retour arrière)_

### retour avant : changement brusque (3)

- **retour avant : changement brusque** — `/cabinet` — à 67 ms (différence 42 %) (films/retour-avant-1366.png) _(1366×768 retour avant)_
- **retour avant : changement brusque** — `/cabinet` — à 134 ms (différence 27 %) (films/retour-avant-1366.png) _(1366×768 retour avant)_
- **retour avant : changement brusque** — `/cabinet` — à 68 ms (différence 29 %) (films/retour-avant-390.png) _(390×844 retour avant)_

### rechargement au milieu de la page (1)

- **rechargement au milieu de la page** — `/cabinet` — écran différent à la même position après rechargement (11.0 %), voir comparaisons/rechargement-cabinet-*.png _(1366×768)_

## Non lancé

- **Safari (WebKit)** : WebKit ne peut pas s’installer ici : vérification à faire dans Safari sur le Mac (liste dans le rapport)

### À vérifier dans Safari sur le Mac (WebKit indisponible ici)

- Ouverture de chaque page : rien qui clignote, intro complète au premier chargement et au rechargement.
- Changement de page : le voile couvre l’écran, pas de page blanche ; retour arrière sans intro ni voile resté.
- Défilement : fluide (natif), en-tête qui se cache et revient sans clignoter, sections épinglées entières.
- Menu sur iPhone (mode Responsive de Safari) : ouverture, fermeture, page bloquée derrière.
- Polices, images, mention « Illustration générée », formulaires et barre fixe du bas.

## Repères

- Numéro de version des fichiers : ?v=1
- Journal v1 : 3 étape(s) notée(s), 22 min de travail pour 35 min de budget, 6 min d’attente de l’utilisateur.
- Audit standard : étapes lourdes sur /, /cabinet, /contact, /domaines, /honoraires.
- Accessibilité : axe-core 4.12.1 en plus des contrôles intégrés.
- Ouverture / (1366×768) : 2687 ms depuis le premier octet
- Ouverture /cabinet (1366×768) : 2688 ms depuis le premier octet
- Ouverture /contact (1366×768) : 2733 ms depuis le premier octet
- Ouverture /domaines (1366×768) : 2620 ms depuis le premier octet
- Ouverture /honoraires (1366×768) : 2642 ms depuis le premier octet
- Ouverture / (390×844) : 2706 ms depuis le premier octet
- Ouverture /cabinet (390×844) : 2657 ms depuis le premier octet
- Ouverture /contact (390×844) : 2730 ms depuis le premier octet
- Ouverture /domaines (390×844) : 2645 ms depuis le premier octet
- Ouverture /honoraires (390×844) : 2633 ms depuis le premier octet
- bords de l’écran /contact 1366×768 : réussi à la tentative 2 (avant : cdpSession.send: Protocol error (Page.startScreencast): Not attached to an active page)
- Bords de l’écran : 457 images d’intro, 31 de voile et 132 de menu jugées (panneau immobile couvrant tout l’écran), barre de défilement classique de 15 px.
- Tient dans l'écran / : aucune section épinglée ou plein écran.
- Tient dans l'écran /cabinet : aucune section épinglée ou plein écran.
- Tient dans l'écran /contact : aucune section épinglée ou plein écran.
- Tient dans l'écran /domaines : aucune section épinglée ou plein écran.
- Tient dans l'écran /honoraires : aucune section épinglée ou plein écran.
- Fluidité / 1366×768 (molette) : 0 % d'images lentes sur 432, tâche la plus longue 0 ms
- Fluidité /cabinet 1366×768 (molette) : 0 % d'images lentes sur 284, tâche la plus longue 0 ms
- Fluidité /contact 1366×768 (molette) : 0 % d'images lentes sur 132, tâche la plus longue 0 ms
- Fluidité /domaines 1366×768 (molette) : 0 % d'images lentes sur 337, tâche la plus longue 0 ms
- Fluidité /honoraires 1366×768 (molette) : 0 % d'images lentes sur 230, tâche la plus longue 0 ms
- Fluidité / 390×844 (doigt) : 0 % d'images lentes sur 1347, tâche la plus longue 0 ms
- Fluidité /cabinet 390×844 (doigt) : 0 % d'images lentes sur 1346, tâche la plus longue 0 ms
- Fluidité /contact 390×844 (doigt) : 0 % d'images lentes sur 1343, tâche la plus longue 0 ms
- Fluidité /domaines 390×844 (doigt) : 0 % d'images lentes sur 1347, tâche la plus longue 0 ms
- Fluidité /honoraires 390×844 (doigt) : 0 % d'images lentes sur 1346, tâche la plus longue 0 ms
- Vitesse / : 0.49 s de calcul au chargement (téléphone ralenti).
- Vitesse /cabinet : 0.28 s de calcul au chargement (téléphone ralenti).
- Vitesse /contact : 0.38 s de calcul au chargement (téléphone ralenti).
- Vitesse /domaines : 0.29 s de calcul au chargement (téléphone ralenti).
- Vitesse /honoraires : 0.34 s de calcul au chargement (téléphone ralenti).

## Fichiers

- Captures : `captures/` (téléphone, tablette, ordinateur, écran par écran)
- Films : `films/` (planches contact de l’ouverture, des transitions, des retours, des ancres et des épinglages ; ⚠ = image signalée)
- Comparaisons : `comparaisons/`
- Détail complet : `rapport.json`


## Relancer seulement ce qui a échoué

Après correction, si elle ne touche que ces pages (sinon, relancer l’audit standard en entier) :

```
node _audit/audit.mjs --seulement=fichiers,mesures,mouvement
```
