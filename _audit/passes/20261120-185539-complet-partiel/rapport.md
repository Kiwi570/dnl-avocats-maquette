# Rapport d’audit

Projet : `dnl-avocats-maquette` · 20/11/2026 20:01:34 · 6 min · 6 page(s) · audit complet (étapes : mesures, ecran)

## Résumé

- Statut : **4 échec(s)**
- Passe : `20261120-185539-complet-partiel` · version ?v=1
- Échecs : **4**
- À regarder : **5**
- Non lancé : **0**
- Contrôles passés : mesures (234), balayage (5)

## Passes de cette version (?v=1)

Chaque passe garde son rapport dans `_audit/passes/` : une relance ciblée ne fait pas disparaître la preuve d’une passe plus large.

| Passe | Niveau | Pages | Étapes | Échecs | À regarder | Non lancé | Statut |
|---|---|---|---|---:|---:|---:|---|
| 20261120-181112-standard | standard | toutes | toutes | 41 | 30 | 1 | échecs |
| 20261120-183447-standard | standard | toutes | toutes | 3 | 15 | 1 | échecs |
| 20261120-185448-standard-cible-partiel | standard | /cabinet,/honoraires | fichiers, mesures | 0 | 4 | 0 | complet |
| **20261120-185539-complet-partiel** (celle-ci) | complet | toutes | mesures, ecran | 4 | 5 | 0 | échecs |

## Échecs

### textes qui se chevauchent (1)

- **textes qui se chevauchent** — `/` — div.partage:nth-of-type(2) > article.partage-moitie.partage-moitie--public:nth-of-type(2) > figure.media.partage-media > figcaption.mention-ia « Illustration générée » — avec div.partage:nth-of-type(2) > article.partage-moitie.partage-moitie--public:nth-of-type(2) > div.partage-carte > h3 « Face à l'administration » _(1000×560 normal, 1000×560 sansWebgl)_

### premier écran : information clé hors de l’écran (2)

- **premier écran : information clé hors de l’écran** — `/` — section#debut > div.hero-texte:nth-of-type(1) > p.hero-info.o-suite:nth-of-type(3) « Premier rendez-vous : 180 € TTC 1 h à 1 h 30, au c » _(1000×560 sansJs)_
- **premier écran : information clé hors de l’écran** — `/honoraires` — div.conteneur.prix-grille > div.prix-texte:nth-of-type(1) > p.prix-actions.o-suite:nth-of-type(5) > span.prix-info « Taux horaire habituel : 250 € HT, soit 300 € TTC » _(844×390 sansJs, 1000×560 sansJs)_

### accessibilité (axe) : color-contrast (1)

- **accessibilité (axe) : color-contrast** — `/cabinet` — a[data-action-principale=""] — Elements must meet minimum color contrast ratio thresholds _(1366×768 normal)_

## À regarder

### section sans visuel (5)

- **section sans visuel** — `/cabinet` — section#reperes « Repères De 2009 à Avignon 2009 Anne Di Nicola prêt » — une belle photo ou un visuel animé quand le contenu s’y prête ; une section de texte peut rester typographique (v11) _(375×667 normal, 320×568 normal, 390×844 normal, 844×390 normal, 768×1024 normal, 1024×768 normal, +33)_
- **section sans visuel** — `/contact` — section#debut « Contact Prenons rendez-vous 04 78 38 89 50 Du lund » — une belle photo ou un visuel animé quand le contenu s’y prête ; une section de texte peut rester typographique (v11) _(320×568 normal, 375×667 normal, 844×390 normal, 320×568 sansJs, 375×667 sansJs, 320×568 sansWebgl, +3)_
- **section sans visuel** — `/contact` — section#debut « Contact Prenons rendez-vous Dites-nous en quelques » — une belle photo ou un visuel animé quand le contenu s’y prête ; une section de texte peut rester typographique (v11) _(390×844 normal, 390×844 sansJs, 390×844 sansWebgl)_
- **section sans visuel** — `/honoraires` — section#etapes « Comment ça se passe Trois étapes, sans surprise 1  » — une belle photo ou un visuel animé quand le contenu s’y prête ; une section de texte peut rester typographique (v11) _(320×568 normal, 375×667 normal, 390×844 normal, 844×390 normal, 768×1024 normal, 1024×768 normal, +33)_
- **section sans visuel** — `/honoraires` — section#faq « Questions fréquentes Ce qu'on nous demande souvent » — une belle photo ou un visuel animé quand le contenu s’y prête ; une section de texte peut rester typographique (v11) _(320×568 normal, 375×667 normal, 390×844 normal, 844×390 normal, 768×1024 normal, 1024×768 normal, +33)_

## Non lancé

Tout a été lancé.


## Repères

- Accessibilité : axe-core 4.12.1 en plus des contrôles intégrés.
- Tient dans l'écran / : aucune section épinglée ou plein écran.
- Tient dans l'écran /cabinet : aucune section épinglée ou plein écran.
- Tient dans l'écran /contact : aucune section épinglée ou plein écran.
- Tient dans l'écran /domaines : aucune section épinglée ou plein écran.
- Tient dans l'écran /honoraires : aucune section épinglée ou plein écran.

## Fichiers

- Captures : `captures/` (téléphone, tablette, ordinateur, écran par écran)
- Films : `films/` (planches contact de l’ouverture, des transitions, des retours, des ancres et des épinglages ; ⚠ = image signalée)
- Comparaisons : `comparaisons/`
- Détail complet : `rapport.json`


## Relancer seulement ce qui a échoué

Après correction, si elle ne touche que ces pages (sinon, relancer l’audit standard en entier) :

```
node _audit/audit.mjs --complet --pages=/,/cabinet,/honoraires --seulement=fichiers,mesures
```
