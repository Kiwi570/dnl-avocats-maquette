# Rapport d’audit

Projet : `dnl-avocats-maquette` · 20/11/2026 19:52:45 · 18 min · 6 page(s) · audit standard

## Résumé

- Statut : **3 échec(s)**
- Passe : `20261120-183447-standard` · version ?v=1
- Échecs : **3**
- À regarder : **15**
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

## Passes de cette version (?v=1)

Chaque passe garde son rapport dans `_audit/passes/` : une relance ciblée ne fait pas disparaître la preuve d’une passe plus large.

| Passe | Niveau | Pages | Étapes | Échecs | À regarder | Non lancé | Statut |
|---|---|---|---|---:|---:|---:|---|
| 20261120-181112-standard | standard | toutes | toutes | 41 | 30 | 1 | échecs |
| **20261120-183447-standard** (celle-ci) | standard | toutes | toutes | 3 | 15 | 1 | échecs |

## Échecs

### premier écran : bouton principal hors de l’écran (1)

- **premier écran : bouton principal hors de l’écran** — `/cabinet` — section#debut > div.conteneur.plein-texte > p.plein-actions.o-suite:nth-of-type(3) > a.bouton « Prendre rendez-vous » _(1366×768 sansJs)_

### premier écran : information clé hors de l’écran (1)

- **premier écran : information clé hors de l’écran** — `/cabinet` — section#debut > div.conteneur.plein-texte > p.plein-actions.o-suite:nth-of-type(3) > span.plein-info « Une avocate référente, du début à la fin » _(1366×768 sansJs)_

### textes qui se chevauchent (1)

- **textes qui se chevauchent** — `/honoraires` — div.prix-texte:nth-of-type(1) > h1 > span.ligne-masque > span.page-ligne « Des honoraires annoncés avant de commencer » — avec div.conteneur.prix-grille > div.prix-texte:nth-of-type(1) > p.prix-geant.o-suite:nth-of-type(2) > span.prix-nombre:nth-of-type(1) « 180 » _(1920×1080 normal)_

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

### section sans visuel (5)

- **section sans visuel** — `/cabinet` — section#reperes « Repères De 2009 à Avignon 2009 Anne Di Nicola prêt » — une belle photo ou un visuel animé quand le contenu s’y prête ; une section de texte peut rester typographique (v11) _(768×1024 normal, 390×844 normal, 320×568 normal, 844×390 normal, 390×844 sansJs, 1920×1080 normal, +5)_
- **section sans visuel** — `/contact` — section#debut « Contact Prenons rendez-vous Dites-nous en quelques » — une belle photo ou un visuel animé quand le contenu s’y prête ; une section de texte peut rester typographique (v11) _(390×844 normal, 390×844 sansJs, 390×844 sansWebgl)_
- **section sans visuel** — `/contact` — section#debut « Contact Prenons rendez-vous 04 78 38 89 50 Du lund » — une belle photo ou un visuel animé quand le contenu s’y prête ; une section de texte peut rester typographique (v11) _(320×568 normal, 844×390 normal, 320×568 sansJs)_
- **section sans visuel** — `/honoraires` — section#etapes « Comment ça se passe Trois étapes, sans surprise 1  » — une belle photo ou un visuel animé quand le contenu s’y prête ; une section de texte peut rester typographique (v11) _(390×844 normal, 768×1024 normal, 320×568 normal, 844×390 normal, 390×844 sansJs, 1920×1080 normal, +5)_
- **section sans visuel** — `/honoraires` — section#faq « Questions fréquentes Ce qu'on nous demande souvent » — une belle photo ou un visuel animé quand le contenu s’y prête ; une section de texte peut rester typographique (v11) _(390×844 normal, 768×1024 normal, 320×568 normal, 844×390 normal, 390×844 sansJs, 1920×1080 normal, +5)_

### retour arrière : changement brusque (2)

- **retour arrière : changement brusque** — `/` — à 78 ms (différence 52 %) (films/retour-arrière-1366.png) _(1366×768 retour arrière)_
- **retour arrière : changement brusque** — `/` — à 86 ms (différence 45 %) (films/retour-arrière-390.png) _(390×844 retour arrière)_

### retour avant : changement brusque (2)

- **retour avant : changement brusque** — `/cabinet` — à 82 ms (différence 53 %) (films/retour-avant-1366.png) _(1366×768 retour avant)_
- **retour avant : changement brusque** — `/cabinet` — à 64 ms (différence 45 %) (films/retour-avant-390.png) _(390×844 retour avant)_

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
- Ouverture / (1366×768) : 2729 ms depuis le premier octet
- Ouverture /cabinet (1366×768) : 2668 ms depuis le premier octet
- Ouverture /contact (1366×768) : 2755 ms depuis le premier octet
- Ouverture /domaines (1366×768) : 2631 ms depuis le premier octet
- Ouverture /honoraires (1366×768) : 2591 ms depuis le premier octet
- Ouverture / (390×844) : 2715 ms depuis le premier octet
- Ouverture /cabinet (390×844) : 2639 ms depuis le premier octet
- Ouverture /contact (390×844) : 2732 ms depuis le premier octet
- Ouverture /domaines (390×844) : 2675 ms depuis le premier octet
- Ouverture /honoraires (390×844) : 2593 ms depuis le premier octet
- bords de l’écran / 1920×1080 : réussi à la tentative 2 (avant : cdpSession.send: Protocol error (Page.startScreencast): Not attached to an active page)
- Bords de l’écran : 453 images d’intro, 31 de voile et 132 de menu jugées (panneau immobile couvrant tout l’écran), barre de défilement classique de 15 px.
- Tient dans l'écran / : aucune section épinglée ou plein écran.
- Tient dans l'écran /cabinet : aucune section épinglée ou plein écran.
- Tient dans l'écran /contact : aucune section épinglée ou plein écran.
- Tient dans l'écran /domaines : aucune section épinglée ou plein écran.
- Tient dans l'écran /honoraires : aucune section épinglée ou plein écran.
- Fluidité / 1366×768 (molette) : 0 % d'images lentes sur 429, tâche la plus longue 0 ms
- Fluidité /cabinet 1366×768 (molette) : 0 % d'images lentes sur 291, tâche la plus longue 0 ms
- Fluidité /contact 1366×768 (molette) : 0 % d'images lentes sur 130, tâche la plus longue 0 ms
- Fluidité /domaines 1366×768 (molette) : 0 % d'images lentes sur 337, tâche la plus longue 0 ms
- Fluidité /honoraires 1366×768 (molette) : 0 % d'images lentes sur 226, tâche la plus longue 0 ms
- Fluidité / 390×844 (doigt) : 0 % d'images lentes sur 1349, tâche la plus longue 0 ms
- Fluidité /cabinet 390×844 (doigt) : 0 % d'images lentes sur 1339, tâche la plus longue 0 ms
- Fluidité /contact 390×844 (doigt) : 0 % d'images lentes sur 1343, tâche la plus longue 0 ms
- Fluidité /domaines 390×844 (doigt) : 0 % d'images lentes sur 1345, tâche la plus longue 0 ms
- Fluidité /honoraires 390×844 (doigt) : 0 % d'images lentes sur 1348, tâche la plus longue 0 ms
- Vitesse / : 0.42 s de calcul au chargement (téléphone ralenti).
- Vitesse /cabinet : 0.33 s de calcul au chargement (téléphone ralenti).
- Vitesse /contact : 0.29 s de calcul au chargement (téléphone ralenti).
- Vitesse /domaines : 0.33 s de calcul au chargement (téléphone ralenti).
- Vitesse /honoraires : 0.28 s de calcul au chargement (téléphone ralenti).

## Fichiers

- Captures : `captures/` (téléphone, tablette, ordinateur, écran par écran)
- Films : `films/` (planches contact de l’ouverture, des transitions, des retours, des ancres et des épinglages ; ⚠ = image signalée)
- Comparaisons : `comparaisons/`
- Détail complet : `rapport.json`


## Relancer seulement ce qui a échoué

Après correction, si elle ne touche que ces pages (sinon, relancer l’audit standard en entier) :

```
node _audit/audit.mjs --pages=/,/cabinet,/honoraires --seulement=fichiers,mesures
```
