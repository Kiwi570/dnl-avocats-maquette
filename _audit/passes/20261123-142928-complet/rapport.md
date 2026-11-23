# Rapport d’audit

Projet : `dnl-avocats-maquette` · 23/11/2026 15:51:40 · 22 min · 6 page(s) · audit complet

## Résumé

- Statut : **1 échec(s)**
- Passe : `20261123-142928-complet` · version ?v=2
- Échecs : **1**
- À regarder : **9**
- Non lancé : **1**
- Contrôles passés : vercel.json (1), .vercelignore (1), robots.txt (1), numéro de version (1), langues (1), grille wouahou (6), mesures (234), balayage (5), films d’ouverture (10), films de transition (10), bords de l’écran (6), intro accélérable et passable (7), menu (1), clavier (6), liens et boutons (6), liens profonds (16), liens vers la page en cours (5), changements de hauteur (5), parcours du projet (1), fluidité (10), défilement selon l’appareil (5), mouvement (10), effets du plan (16), souris immobile (4), vitesse (5), captures (1)

## Grille wouahou

| Point | État | Détail |
|---|---|---|
| 1. L’effet signature se manipule | ✓ présent | accueil |
| 2. L’intro devient la page | ✓ présent | objet d’ouverture sur 5 page(s), versObjet dans l’intro |
| 3. La transition reprend le motif | ✓ présent | voile en iris |
| 4. Quelque chose relie les sections et les pages | ✓ présent | sur les 5 page(s) |
| 5. Un titre fait l’événement sur chaque page | ✗ absent | sur aucune page |
| 6. La scène est un geste du métier | · sans objet | aucune scène épinglée marquée ni galerie générique |
| 7. L’action principale a un retour physique | ✓ présent | sur /contact |

Le script vérifie les marques (`data-grille`, `data-iris-centre`, forme du voile, `versObjet`) ; la force et la justesse de chaque point se jugent sur les captures et les films.

## Passes de cette version (?v=2)

Chaque passe garde son rapport dans `_audit/passes/` : une relance ciblée ne fait pas disparaître la preuve d’une passe plus large.

| Passe | Niveau | Pages | Étapes | Échecs | À regarder | Non lancé | Statut |
|---|---|---|---|---:|---:|---:|---|
| 20261123-140946-rapide-cible | rapide | /,/cabinet,/domaines,/honoraires,/contact | toutes | 0 | 17 | 2 | INCOMPLET |
| **20261123-142928-complet** (celle-ci) | complet | toutes | toutes | 1 | 9 | 1 | échecs |

## Échecs

### accessibilité (axe) : color-contrast (1)

- **accessibilité (axe) : color-contrast** — `/cabinet` — li:nth-child(1) > .frise-annee[data-effet="frise"] ; li:nth-child(2) > .frise-annee[data-effet="frise"] ; li:nth-child(3) > .frise-annee[data-effet="frise"] — Elements must meet minimum color contrast ratio thresholds _(390×844 normal)_

## À regarder

### « à compléter » visible (1)

- **« à compléter » visible** — `contact.html` — 1 fois hors du pied de page : remplacer par une phrase vraie qui oriente le visiteur (« Tarifs selon la saison, donnés à la réservation ») ou retirer l'élément, et le noter dans la fiche du README (sauf sens propre : « dossier à compléter »)

### journal du projet (1)

- **journal du projet** — aucune entrée pour la version 2 de donnees/site.json

### grille : aucun titre ne fait l’événement (point 5) (1)

- **grille : aucun titre ne fait l’événement (point 5)** — sur aucune page : titre fabriqué par le métier, axe de police animé ou titre joué avec l’image (modules axes-au-defilement, titre-cousu, texte-grave-en-direct), marqué data-grille="typo"

### retour arrière : changement brusque (2)

- **retour arrière : changement brusque** — `/` — à 78 ms (différence 52 %) (films/retour-arrière-1366.png) _(1366×768 retour arrière)_
- **retour arrière : changement brusque** — `/` — à 86 ms (différence 45 %) (films/retour-arrière-390.png) _(390×844 retour arrière)_

### retour avant : changement brusque (2)

- **retour avant : changement brusque** — `/cabinet` — à 74 ms (différence 53 %) (films/retour-avant-1366.png) _(1366×768 retour avant)_
- **retour avant : changement brusque** — `/cabinet` — à 76 ms (différence 45 %) (films/retour-avant-390.png) _(390×844 retour avant)_

### rechargement au milieu de la page (2)

- **rechargement au milieu de la page** — `/cabinet` — écran différent à la même position après rechargement (8.5 %), voir comparaisons/rechargement-cabinet-*.png _(1366×768)_
- **rechargement au milieu de la page** — `/domaines` — écran différent à la même position après rechargement (6.8 %), voir comparaisons/rechargement-domaines-*.png _(1366×768)_

## Non lancé

- **Safari (WebKit)** : WebKit ne peut pas s’installer ici : vérification à faire dans Safari sur le Mac (liste dans le rapport)

### À vérifier dans Safari sur le Mac (WebKit indisponible ici)

- Ouverture de chaque page : rien qui clignote, intro complète au premier chargement et au rechargement.
- Changement de page : le voile couvre l’écran, pas de page blanche ; retour arrière sans intro ni voile resté.
- Défilement : fluide (natif), en-tête qui se cache et revient sans clignoter, sections épinglées entières.
- Menu sur iPhone (mode Responsive de Safari) : ouverture, fermeture, page bloquée derrière.
- Polices, images, mention « Illustration générée », formulaires et barre fixe du bas.

## Repères

- Numéro de version des fichiers : ?v=2
- Accessibilité : axe-core 4.12.1 en plus des contrôles intégrés.
- Ouverture / (1366×768) : 2763 ms depuis le premier octet
- Ouverture /cabinet (1366×768) : 2685 ms depuis le premier octet
- Ouverture /contact (1366×768) : 2730 ms depuis le premier octet
- film de l'ouverture /contact 1366×768 : réussi à la tentative 2 (avant : cdpSession.send: Protocol error (Page.startScreencast): Not attached to an active page)
- Ouverture /domaines (1366×768) : 2643 ms depuis le premier octet
- film de l'ouverture /domaines 1366×768 : réussi à la tentative 2 (avant : cdpSession.send: Protocol error (Page.startScreencast): Not attached to an active page)
- Ouverture /honoraires (1366×768) : 2633 ms depuis le premier octet
- Ouverture / (390×844) : 2714 ms depuis le premier octet
- Ouverture /cabinet (390×844) : 2667 ms depuis le premier octet
- Ouverture /contact (390×844) : 2735 ms depuis le premier octet
- Ouverture /domaines (390×844) : 2640 ms depuis le premier octet
- Ouverture /honoraires (390×844) : 2655 ms depuis le premier octet
- Bords de l’écran : 446 images d’intro, 29 de voile et 126 de menu jugées (panneau immobile couvrant tout l’écran), barre de défilement classique de 15 px.
- Tient dans l'écran / : aucune section épinglée ou plein écran.
- Tient dans l'écran /cabinet : aucune section épinglée ou plein écran.
- Tient dans l'écran /contact : aucune section épinglée ou plein écran.
- Tient dans l'écran /domaines : aucune section épinglée ou plein écran.
- Tient dans l'écran /honoraires : aucune section épinglée ou plein écran.
- Fluidité / 1366×768 (molette) : 0 % d'images lentes sur 439, tâche la plus longue 0 ms
- Fluidité /cabinet 1366×768 (molette) : 0 % d'images lentes sur 335, tâche la plus longue 0 ms
- Fluidité /contact 1366×768 (molette) : 0 % d'images lentes sur 182, tâche la plus longue 0 ms
- Fluidité /domaines 1366×768 (molette) : 0 % d'images lentes sur 396, tâche la plus longue 0 ms
- Fluidité /honoraires 1366×768 (molette) : 0 % d'images lentes sur 294, tâche la plus longue 0 ms
- Fluidité / 390×844 (doigt) : 0 % d'images lentes sur 1361, tâche la plus longue 0 ms
- Fluidité /cabinet 390×844 (doigt) : 0 % d'images lentes sur 1342, tâche la plus longue 0 ms
- Fluidité /contact 390×844 (doigt) : 0 % d'images lentes sur 1340, tâche la plus longue 0 ms
- Fluidité /domaines 390×844 (doigt) : 0 % d'images lentes sur 1343, tâche la plus longue 0 ms
- Fluidité /honoraires 390×844 (doigt) : 0 % d'images lentes sur 1348, tâche la plus longue 0 ms
- Vitesse / : 0.55 s de calcul au chargement (téléphone ralenti).
- Vitesse /cabinet : 0.36 s de calcul au chargement (téléphone ralenti).
- Vitesse /contact : 0.30 s de calcul au chargement (téléphone ralenti).
- Vitesse /domaines : 0.36 s de calcul au chargement (téléphone ralenti).
- Vitesse /honoraires : 0.53 s de calcul au chargement (téléphone ralenti).

## Fichiers

- Captures : `captures/` (téléphone, tablette, ordinateur, écran par écran)
- Films : `films/` (planches contact de l’ouverture, des transitions, des retours, des ancres et des épinglages ; ⚠ = image signalée)
- Comparaisons : `comparaisons/`
- Détail complet : `rapport.json`


## Relancer seulement ce qui a échoué

Après correction, si elle ne touche que ces pages (sinon, relancer l’audit standard en entier) :

```
node _audit/audit.mjs --complet --pages=/,/cabinet --seulement=fichiers,mesures
```
