# DNL Avocats · maquette

Maquette du site de DNL Avocats (Lyon et Avignon), direction « À vos côtés » : ivoire, vert sapin et terre cuite, DM Serif Display et Albert Sans, photos réelles du cabinet. L'idée qui relie les pages est la table ronde en chêne du cabinet (méthode, appel final, voile en cercle).

Adresse prévue : https://dnl-avocats-maquette.vercel.app

## Pages

- `/` Accueil : ouverture, « Votre situation concerne… » (famille / administration), méthode autour de la table, honoraires annoncés, trois avocates, l'amiable d'abord, Lyon et Avignon, appel final.
- `/cabinet` Le cabinet : les trois avocates, repères de 2009 à 2024, citation, engagements.
- `/domaines` Domaines d'intervention : famille et personnes, successions et patrimoine, urbanisme, fonction publique.
- `/honoraires` Honoraires : premier rendez-vous, trois étapes, grille indicative filtrable, questions fréquentes.
- `/contact` Prendre rendez-vous : formulaire en quatre étapes (simulé), coordonnées, deux bureaux.
- `404` : « Pièce introuvable ».

## Travailler sur la maquette

- Textes : `donnees/textes/fr.json` ; données : `donnees/*.json` (domaines, tarifs, équipe, questions, cabinet) ; réglages : `donnees/site.json`.
- Pages : `source/pages/*.mjs`, blocs communs : `source/gabarits/`. Style : `assets/css/site.css`. Effets : `assets/js/site.js`.
- Après toute modification : `node outils/generer.mjs` (ne jamais modifier les fichiers `.html` à la main).
- Audit : `node _audit/audit.mjs` (standard), `--complet` pour la version finale.

## À fournir par le client (à compléter)

- Mentions légales : à compléter. Éléments relevés sur le site actuel : DNL AVOCATS, SELARL au capital de 2 000 €, RCS Lyon 834 740 466, TVA FR 55 834740466, barreau de Lyon, directrice de la publication Agathe Lucot, 90 rue Paul Bert, 69003 Lyon. Manquent : SIRET, numéro de toque.
- Hébergeur du futur site : Vercel Inc. (adresse à vérifier sur vercel.com au moment de la mise en ligne).
- Politique de confidentialité et cookies : à compléter (le site actuel en a une, à reprendre et à adapter au nouveau formulaire).
- Assurance de responsabilité civile professionnelle : à compléter si le cabinet souhaite l'afficher.
- Crédits : photographies du cabinet (auteur à indiquer) ; photos de Lyon et d'Avignon (origine à vérifier, probablement des banques d'images) ; les images marquées « Illustration générée » ont été créées par intelligence artificielle : garder cette mention sur le site final.

### Retiré ou remplacé faute d'information

- Accueil, Le cabinet : la date de création du premier cabinet de Me Di Nicola n'est pas affichée (2010 dans l'historique du site actuel, 2012 dans sa biographie).
- Successions et patrimoine : aucun tarif dans la grille du site actuel ; remplacé par « Honoraires sur devis, après le premier rendez-vous ».
- Honoraires : aide juridictionnelle et modalités de paiement non mentionnées sur le site actuel ; non affichées. La grille reprend les montants à l'identique (TTC seulement là où le site le précise).
- Avignon : même numéro (04 78 38 89 50) et mêmes horaires que Lyon, comme sur le site actuel ; à confirmer.
- Phrase non reprise pour respecter l'article 10 du RIN (mentions comparatives) : « donner le meilleur conseil et offrir la meilleure défense ». Le menu dit « Domaines » plutôt qu'« Expertises ».

## Simulé dans la maquette

- Formulaire de rendez-vous (rien n'est envoyé ; la mention de démonstration est affichée).
- Statut « Joignable maintenant / Joignable dès… » calculé à l'heure de Paris d'après les horaires du site (lundi au vendredi, 9 h à 18 h, jours fériés compris).

## À la mise en ligne définitive

- Retirer : `noindex` (balise robots dans `source/gabarits/commun.mjs`, en-tête X-Robots-Tag dans `vercel.json`), la mention « Maquette de démonstration » du pied de page et du formulaire, le formulaire simulé (le brancher sur un vrai envoi), les mentions « à compléter » du pied de page (remplacées par de vraies pages).
- Garder : la mention « Illustration générée » sur les images créées par IA.
