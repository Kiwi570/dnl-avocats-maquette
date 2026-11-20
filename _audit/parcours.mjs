/* Parcours propres à DNL Avocats : grille des honoraires (filtres, recherche sans accents, adresse partageable),
   formulaire de rendez-vous prérempli par l'adresse (?sujet=, ?lieu=), statut d'horaires toujours formulé en positif. */
export default async function ({ contexte, attendrePret, attendre, BASE, R, T }) {
  const { ctx, page } = await contexte({ taille: T('390×844') });
  try {
    /* Grille : filtre Famille, puis recherche « reference » (sans accent) : le référé-liberté et le référé-suspension. */
    await page.goto(BASE + '/honoraires', { waitUntil: 'load' });
    await attendrePret(page);
    await page.locator('[data-filtre="famille"]').click();
    await attendre(200);
    const fam = await page.evaluate(() => [...document.querySelectorAll('[data-grille-tarifs] tbody tr')].filter((l) => !l.hidden).map((l) => l.dataset.pole));
    if (!fam.length || fam.some((p) => p !== 'famille')) R.echec('grille', `filtre Famille : ${fam.length} lignes, pôles ${[...new Set(fam)].join(', ')}`, { page: '/honoraires', taille: '390×844' });
    if (!/filtre=famille/.test(page.url())) R.echec('grille', 'le filtre n’est pas gardé dans l’adresse', { page: '/honoraires' });
    await page.locator('[data-filtre="tous"]').click();
    await page.locator('[data-grille-tarifs] input[type="search"]').fill('refere');
    await attendre(200);
    const n = await page.evaluate(() => [...document.querySelectorAll('[data-grille-tarifs] tbody tr')].filter((l) => !l.hidden).length);
    if (n !== 2) R.echec('grille', `recherche « refere » : ${n} lignes au lieu de 2 (accents ignorés)`, { page: '/honoraires' });
    await page.locator('[data-grille-tarifs] input[type="search"]').fill('zzz');
    await attendre(200);
    if (!(await page.locator('[data-aucun]').isVisible())) R.echec('grille', 'aucun message quand rien ne correspond', { page: '/honoraires' });

    /* Formulaire prérempli : ?sujet=urbanisme&lieu=avignon coche les deux cartes. */
    await page.goto(BASE + '/contact?sujet=urbanisme&lieu=avignon#rendez-vous', { waitUntil: 'load' });
    await attendrePret(page);
    await attendre(400);
    const coches = await page.evaluate(() => ({
      sujet: document.querySelector('input[name="sujet"]:checked')?.value,
      lieu: document.querySelector('input[name="lieu"]:checked')?.value,
    }));
    if (coches.sujet !== 'urbanisme' || coches.lieu !== 'avignon') R.echec('formulaire', `prérempli : sujet ${coches.sujet}, lieu ${coches.lieu}`, { page: '/contact' });

    /* Statut d'horaires : jamais « Fermé » seul. */
    const statut = await page.evaluate(() => document.querySelector('[data-statut-texte]')?.textContent || '');
    if (!/Joignable/.test(statut)) R.regarder('statut', `texte du statut : « ${statut} »`, { page: '/contact' });
  } finally { await ctx.close(); }
}
