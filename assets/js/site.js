/* Effets propres à DNL Avocats. Le socle gère l'ouverture, le voile, l'en-tête, le menu, les boucles, les mesures
   et la bibliothèque d'effets (lignes, mots, cascade, rideau, parallaxe, zoom, magnétique…).
   Effets du plan (data-effet) : pastille, partage, table-ronde, horloge, accord, appel-cercle, quatrieme-place,
   cabinet-ouverture, bandeau, prix-geant, trio. */
import { demarrer, versObjet, quand } from './socle/index.js?v=1';

const gsap = window.gsap;
const ST = () => window.ScrollTrigger;
const $ = (s, r = document) => r.querySelector(s);
const $$ = (s, r = document) => [...r.querySelectorAll(s)];
const ordinateur = () => window.matchMedia('(min-width: 761px)').matches;

/* ---------- Statut d'horaires, à l'heure de Paris, jours fériés compris, toujours formulé en positif ---------- */
function paques(a) {
  const f = Math.floor, G = a % 19, C = f(a / 100), H = (C - f(C / 4) - f((8 * C + 13) / 25) + 19 * G + 15) % 30;
  const I = H - f(H / 28) * (1 - f(29 / (H + 1)) * f((21 - G) / 11)), J = (a + f(a / 4) + I + 2 - C + f(C / 4)) % 7;
  const L = I - J, m = 3 + f((L + 40) / 44), j = L + 28 - 31 * f(m / 4);
  return new Date(Date.UTC(a, m - 1, j));
}
function feries(a) {
  const p = paques(a), plus = (n) => new Date(p.getTime() + n * 864e5).toISOString().slice(0, 10);
  return new Set([`${a}-01-01`, plus(1), `${a}-05-01`, `${a}-05-08`, plus(39), plus(50), `${a}-07-14`, `${a}-08-15`, `${a}-11-01`, `${a}-11-11`, `${a}-12-25`]);
}
function heureParis(d = new Date()) {
  const p = Object.fromEntries(new Intl.DateTimeFormat('fr-FR', { timeZone: 'Europe/Paris', year: 'numeric', month: '2-digit', day: '2-digit', hour: '2-digit', minute: '2-digit', hour12: false, weekday: 'short' })
    .formatToParts(d).map((x) => [x.type, x.value]));
  const iso = `${p.year}-${p.month}-${p.day}`;
  const jour = new Date(`${iso}T12:00:00Z`).getUTCDay();
  return { iso, jour, h: +p.hour + +p.minute / 60, annee: +p.year };
}
const JOURS = ['dimanche', 'lundi', 'mardi', 'mercredi', 'jeudi', 'vendredi', 'samedi'];
function statut() {
  const els = $$('[data-statut]');
  if (!els.length) return;
  const maj = () => {
    const n = heureParis();
    const ouvrable = (iso, j) => j >= 1 && j <= 5 && !feries(+iso.slice(0, 4)).has(iso);
    const ouvert = ouvrable(n.iso, n.jour) && n.h >= 9 && n.h < 18;
    let texte;
    if (ouvert) texte = "Joignable maintenant, jusqu'à 18 h";
    else {
      let d = new Date(`${n.iso}T12:00:00Z`);
      if (ouvrable(n.iso, n.jour) && n.h < 9) texte = "Joignable aujourd'hui dès 9 h";
      else {
        for (let i = 0; i < 10; i++) {
          d = new Date(d.getTime() + 864e5);
          const iso = d.toISOString().slice(0, 10);
          if (ouvrable(iso, d.getUTCDay())) { texte = `Joignable ${i === 0 ? 'demain' : JOURS[d.getUTCDay()]} dès 9 h`; break; }
        }
      }
    }
    els.forEach((el) => { el.classList.toggle('est-ouvert', ouvert); const t = $('[data-statut-texte]', el); if (t && texte) t.textContent = texte; });
  };
  maj();
  setInterval(maj, 60000);
}

/* ---------- Pastille du premier rendez-vous : tourne avec le défilement ---------- */
function pastille() {
  const p = $('.pastille-texte');
  if (!p || !ST()) return;
  const g = $('.pastille-tour');
  gsap.fromTo(p, { rotation: 0 }, { rotation: 220, ease: 'none', svgOrigin: '100 100', scrollTrigger: { trigger: document.body, start: 0, end: () => innerHeight * 1.6, scrub: 0.6 } });
  /* Après l'ouverture, la pastille fait un tour lent puis se pose (moins de 5 s : pas de bouton pause nécessaire). */
  quand('pret', (d) => { if (g && d && d.mode !== 'retour' && d.mode !== 'secours') gsap.fromTo(g, { rotation: 0 }, { rotation: -360, svgOrigin: '100 100', duration: 4.6, ease: 'power2.inOut' }); });
}

/* ---------- Écran partagé : les deux moitiés se rejoignent ---------- */
function partage() {
  const moities = $$('.partage-moitie');
  if (!moities.length || !ST()) return;
  moities.forEach((m) => {
    const g = m.dataset.cote === 'g';
    const carte = $('.partage-carte', m);
    const media = $('.partage-media', m);
    /* Chaque image s'ouvre depuis la ligne de partage, la carte monte : les deux moitiés se rejoignent. */
    if (media) gsap.fromTo(media, { clipPath: g ? 'inset(0% 0% 0% 38%)' : 'inset(0% 38% 0% 0%)' }, { clipPath: 'inset(0% 0% 0% 0%)', ease: 'none', scrollTrigger: { trigger: m, start: 'top bottom', end: 'top 30%', scrub: 0.5 } });
    if (carte) gsap.fromTo(carte, { y: -40 }, { y: 0, ease: 'none', scrollTrigger: { trigger: m, start: 'top 95%', end: 'center 55%', scrub: 0.5 } });
  });
}

/* ---------- Table ronde : quatre places qui s'allument (méthode) ---------- */
function allumer(table, n, etapes) {
  $$('.place', table).forEach((p, i) => p.classList.toggle('est-active', i <= n));
  $$('.place-libelle', table).forEach((p, i) => p.classList.toggle('est-active', i <= n));
  if (etapes) etapes.forEach((e, i) => { e.classList.toggle('est-active', i === n); e.classList.toggle('est-faite', i < n); });
}
function methode() {
  const s = $('.methode');
  if (!s || !ST()) return;
  const table = $('.table', s), anneau = $('.table-anneau', s), etapes = $$('.methode-etape', s);
  let courant = -1;
  const mm = gsap.matchMedia();
  mm.add('(min-width: 761px)', () => {
    /* Zone morte de 3 % au début : rien ne bouge avant que la scène soit bien posée. */
    const st = ST().create({
      trigger: s, start: 'top top', end: 'bottom bottom', scrub: 0.4,
      onUpdate: (self) => {
        const p = Math.max(0, (self.progress - 0.03) / 0.97);
        gsap.set(anneau, { strokeDashoffset: 1 - p });
        const n = Math.min(3, Math.floor(p * 4.0001));
        if (n !== courant) { courant = n; allumer(table, n, etapes); }
      },
    });
    allumer(table, 0, etapes);
    return () => st.kill();
  });
  mm.add('(max-width: 760px)', () => {
    /* En une colonne : la scène se joue au temps, une fois, quand la table entre à l'écran. */
    allumer(table, -1, etapes);
    gsap.set(anneau, { strokeDashoffset: 1 });
    const tl = gsap.timeline({ paused: true });
    tl.to(anneau, { strokeDashoffset: 0, duration: 2.4, ease: 'power2.inOut' });
    [0, 1, 2, 3].forEach((i) => tl.call(() => allumer(table, i, etapes), null, 0.2 + i * 0.6));
    const st = ST().create({ trigger: table, start: 'top 80%', once: true, onEnter: () => tl.play() });
    return () => { st.kill(); tl.kill(); };
  });
}

/* ---------- Horloge des honoraires : une heure, puis la demi-heure ---------- */
function horloge() {
  const h = $('.horloge');
  if (!h || !ST()) return;
  const tl = gsap.timeline({ scrollTrigger: { trigger: h, start: 'top 85%', end: 'center 40%', scrub: 0.5 } });
  tl.fromTo($('.horloge-heure', h), { strokeDashoffset: 1 }, { strokeDashoffset: 0, ease: 'none', duration: 2 })
    .fromTo($('.horloge-demi', h), { strokeDashoffset: 1 }, { strokeDashoffset: 0.5, ease: 'none', duration: 1 });
}

/* ---------- L'amiable d'abord : deux cercles qui se rejoignent ---------- */
function accord() {
  const a = $('.accord');
  if (!a || !ST()) return;
  const tl = gsap.timeline({ scrollTrigger: { trigger: a, start: 'top 85%', end: 'center 45%', scrub: 0.5 } });
  tl.fromTo([$('.accord-cercle--g', a), $('.accord-cg', a), $('.accord-t--g', a)], { x: -70 }, { x: 0, ease: 'none' }, 0)
    .fromTo([$('.accord-cercle--d', a), $('.accord-zone', a), $('.accord-t--d', a)], { x: 70 }, { x: 0, ease: 'none' }, 0)
    .fromTo($('.accord-zone', a), { opacity: 0 }, { opacity: 1, ease: 'none' }, 0.3)
    .fromTo($('.accord-t--m', a), { opacity: 0 }, { opacity: 1, ease: 'none' }, 0.6);
}

/* ---------- Appel final de l'accueil : le cercle de la photo s'ouvre ---------- */
function appelCercle() {
  const f = $('[data-effet="appel-cercle"]');
  if (!f || !ST()) return;
  gsap.fromTo(f, { clipPath: 'circle(34% at 50% 50%)' }, { clipPath: 'circle(50% at 50% 50%)', ease: 'none', scrollTrigger: { trigger: f, start: 'top 95%', end: 'center 50%', scrub: 0.5 } });
  const img = $('img', f);
  if (img) gsap.fromTo(img, { scale: 1.18, rotation: -4 }, { scale: 1, rotation: 0, ease: 'none', scrollTrigger: { trigger: f, start: 'top bottom', end: 'bottom top', scrub: 0.5 } });
}

/* ---------- Appel des pages intérieures : la table se trace, la quatrième place (la vôtre) s'allume ---------- */
function quatriemePlace() {
  const t = $('[data-effet="quatrieme-place"]');
  if (!t || !ST()) return;
  const anneau = $('.table-anneau', t);
  allumer(t, 2);
  let fait = false;
  gsap.fromTo(anneau, { strokeDashoffset: 1 }, {
    strokeDashoffset: 0, ease: 'none',
    scrollTrigger: { trigger: t, start: 'top 90%', end: 'center 50%', scrub: 0.5,
      onUpdate: (self) => { const v = self.progress > 0.85; if (v !== fait) { fait = v; allumer(t, v ? 3 : 2); } } },
  });
}

/* ---------- Ouvertures des pages intérieures ---------- */
function ouverturesInterieures() {
  if (!ST()) return;
  /* Le cabinet : la photo plein cadre se resserre au défilement, le titre monte. */
  const cab = $('[data-effet="cabinet-ouverture"]');
  if (cab) {
    const img = $('img', cab);
    if (img) gsap.fromTo(img, { scale: 1.12 }, { scale: 1, ease: 'none', scrollTrigger: { trigger: cab, start: 'top top', end: 'bottom top', scrub: 0.4 } });
  }
  /* Domaines : le bandeau s'ouvre depuis une fente, puis s'élargit au défilement. */
  const b = $('[data-effet="bandeau"]');
  if (b) gsap.fromTo(b, { clipPath: 'inset(0% 6% 0% 6% round 18px)' }, { clipPath: 'inset(0% 0% 0% 0% round 0px)', ease: 'none', scrollTrigger: { trigger: b, start: 'top 80%', end: 'bottom 30%', scrub: 0.5 } });
  /* Honoraires : la photo ronde tourne doucement au défilement. */
  const pg = $('[data-effet="prix-geant"] img');
  if (pg) gsap.fromTo(pg, { rotation: 0 }, { rotation: 24, ease: 'none', scrollTrigger: { trigger: pg, start: 'top 90%', end: 'bottom top', scrub: 0.5 } });
}

/* ---------- Honoraires : grille filtrable avec recherche (accents, majuscules, pluriels ignorés) ---------- */
function grille() {
  const g = $('[data-grille-tarifs]');
  if (!g) return;
  const lignes = $$('tbody tr', g), boutons = $$('[data-filtre]', g), champ = $('input[type="search"]', g);
  const vide = $('[data-aucun]', g), compte = $('[data-compte]', g);
  const norme = (s) => s.normalize('NFD').replace(/[̀-ͯ]/g, '').toLowerCase().replace(/(s|x)\b/g, '');
  const params = new URLSearchParams(location.search);
  let filtre = params.get('filtre') || 'tous';
  if (champ && params.get('q')) champ.value = params.get('q');
  const appliquer = () => {
    const q = champ ? norme(champ.value.trim()) : '';
    let n = 0;
    lignes.forEach((l) => {
      const ok = (filtre === 'tous' || l.dataset.pole === filtre) && (!q || norme(l.textContent).includes(q));
      l.hidden = !ok; if (ok) n++;
    });
    boutons.forEach((b) => b.setAttribute('aria-pressed', String(b.dataset.filtre === filtre)));
    if (vide) vide.hidden = n > 0;
    if (compte) compte.textContent = `${n} démarche${n > 1 ? 's' : ''} affichée${n > 1 ? 's' : ''}`;
    const u = new URL(location.href);
    filtre === 'tous' ? u.searchParams.delete('filtre') : u.searchParams.set('filtre', filtre);
    q ? u.searchParams.set('q', champ.value.trim()) : u.searchParams.delete('q');
    history.replaceState(history.state, '', u);
    if (window.ScrollTrigger) window.ScrollTrigger.refresh();
  };
  boutons.forEach((b) => b.addEventListener('click', () => { filtre = b.dataset.filtre; appliquer(); }));
  if (champ) champ.addEventListener('input', appliquer);
  appliquer();
}

/* ---------- Contact : formulaire par étapes (module de la bibliothèque), prérempli par l'adresse ---------- */
async function formulaire() {
  const root = $('[data-module="formulaire-par-etapes"]');
  if (!root) return;
  const p = new URLSearchParams(location.search);
  for (const [nom, v] of [['sujet', p.get('sujet')], ['lieu', p.get('lieu')]]) {
    const r = v && root.querySelector(`input[name="${nom}"][value="${CSS.escape(v)}"]`);
    if (r) r.checked = true;
  }
  const { init } = await import('./modules/formulaire-par-etapes.js?v=1');
  await init(root, { messages: { etape: 'Étape {n} sur {total}' } });
  root.addEventListener('formulaire:envoye', () => {
    const fin = $('.fpe__fin', root);
    if (fin) setTimeout(() => fin.scrollIntoView({ block: 'center' }), 60);
  });
}

/* ---------- Trio des avocates (contact) : les médaillons s'assemblent ---------- */
function trio() {
  const t = $('[data-effet="trio"]');
  if (!t) return;
  const m = $$('.trio-medaillon', t);
  if (ST()) gsap.fromTo(m, { x: (i) => (i - 1) * 26 }, { x: 0, ease: 'none', scrollTrigger: { trigger: t, start: 'top 95%', end: 'top 40%', scrub: 0.5 } });
}

/* ---------- Ouverture : intro (lettres, anneau, puis la page s'ouvre en cercle) et arrivée sous le voile ---------- */
function partieOuverture(tl, t0) {
  const lignes = $$('.hero-ligne, .page-ligne'), suite = $$('.o-suite');
  if (lignes.length) tl.fromTo(lignes, { yPercent: 135 }, { yPercent: 0, y: 0, duration: 0.8, stagger: 0.1, ease: 'power3.out' }, t0);
  if (suite.length) tl.fromTo(suite, { y: 18, opacity: 0 }, { y: 0, opacity: 1, duration: 0.6, stagger: 0.07, ease: 'power3.out' }, t0 + 0.15);
  return tl;
}

demarrer({
  preparer() {
    statut();
    pastille();
    partage();
    methode();
    horloge();
    accord();
    appelCercle();
    quatriemePlace();
    ouverturesInterieures();
    grille();
    trio();
    formulaire();
  },
  /* Intro (≈ 2,3 s) : D, N, L montent, l'anneau se trace, le monogramme glisse vers l'objet d'ouverture de la page
     et le panneau s'ouvre en cercle depuis lui ; le titre monte pendant l'ouverture. */
  jouer() {
    if (!gsap) return null;
    const tl = gsap.timeline({ defaults: { ease: 'power3.out' } });
    tl.fromTo('.mono--intro .mono-l', { yPercent: 30, opacity: 0 }, { yPercent: 0, opacity: 1, duration: 0.45, stagger: 0.12 }, 0)
      .fromTo('.mono--intro .mono-anneau', { strokeDashoffset: 1 }, { strokeDashoffset: 0, duration: 0.7, ease: 'power2.inOut' }, 0.3)
      .fromTo('.ouverture-ligne', { opacity: 0, y: 8 }, { opacity: 1, y: 0, duration: 0.4 }, 0.35)
      .to('.ouverture-ligne', { opacity: 0, duration: 0.25 }, 0.95);
    versObjet(tl, { a: 1.0 });
    partieOuverture(tl, 1.5);
    return tl;
  },
  etatFinal() {
    if (!gsap) return;
    gsap.set('.hero-ligne, .page-ligne, .o-suite', { clearProps: 'transform,opacity' });
    $$('.hero-ligne, .page-ligne, .o-suite').forEach((e) => { e.style.transform = 'none'; e.style.opacity = '1'; });
  },
  arrivee() {
    if (!gsap) return;
    partieOuverture(gsap.timeline({ delay: 0.12 }), 0);
  },
});

