(function () {
  'use strict';

  var BOOK = 'https://www.queenshairstyles.com/book-online-montreal-afro-hair-salon';
  var BOOK_MICRO = 'https://queenshairstyle.as.me/?appointmentType=46115480';
  var PROFILES = {
    instagram: 'https://www.instagram.com/queens.hairstyle/',
    tiktok: 'https://www.tiktok.com/@queens.hairstyle',
    youtube: 'https://www.youtube.com/@queenshairstyle'
  };
  var reduceMotion = window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  function store(key, val) {
    try {
      if (val === undefined) return JSON.parse(localStorage.getItem(key) || 'null');
      localStorage.setItem(key, JSON.stringify(val));
    } catch (e) { return null; }
  }

  /* ================= French ================= */
  var FR = {
    ribbon: 'Démonstration de design par Dalal Technologies · ce n’est pas le site en ligne du salon',
    'ribbon.notes': 'Notes de présentation pour la propriétaire',
    'nav.founder': 'Son histoire', 'nav.work': 'Ses créations', 'nav.live': 'Queens Live', 'nav.menu': 'Coiffures',
    'cta.book': 'Réserver',
    'hero.caption': 'Fondatrice de Queens Hairstyle',
    'hero.eyebrow': 'Montréal · tresses, twists, locs',
    'hero.title': '<span class="line"><span>Derrière chaque couronne,</span></span> <span class="line"><span><em>il y a une histoire.</em></span></span>',
    'hero.lead': 'Découvrez l’art, la vision et la femme derrière Queens Hairstyle.',
    'hero.cta1': 'Découvrir son histoire', 'hero.cta2': 'Réserver une coiffure',
    'imp.1': 'La femme', 'imp.2': 'L’artiste', 'imp.3': 'L’influence',
    'ch1.num': 'Chapitre I · La femme',
    'ch1.statement': 'Tresseuse. Formatrice. <em>Docteure en philosophie.</em> Et fondatrice de Queens Hairstyle.',
    'ch1.intro': 'Dre Amélie a fondé Queens Hairstyle à Montréal, un studio où toutes les textures de cheveux sont les bienvenues.',
    'r1.t': 'La tresseuse', 'r1.b': 'Tresses sans nœud et box braids, cornrows, twists et locs, sur rendez-vous.',
    'r2.t': 'La formatrice', 'r2.b': 'Elle enseigne le métier qu’elle pratique.',
    'r3.t': 'L’universitaire', 'r3.b': 'Le titre devant son nom est un doctorat en philosophie.',
    'brand.line': '« Chaque coiffure est pensée pour révéler la reine en vous. »',
    'brand.src': 'La promesse Queens Hairstyle',
    'ch1.cta': 'Lire son portrait complet',
    'ch2.num': 'Chapitre II · La pensée et la main',
    'ch2.title': 'Chaque raie est une ligne de pensée.',
    'ch2.intro': 'La philosophie exerce l’œil aux distinctions précises. Dans son fauteuil, cette précision devient visible : dans la raie, dans le motif, dans la finition.',
    'd1.t': 'La raie', 'd1.b': 'Des raies carrées et nettes, tracées avant la première twist.',
    'd2.t': 'Le motif', 'd2.b': 'Des courbes tracées à main levée, des lignes simples aux dessins complexes.',
    'd3.t': 'La finition', 'd3.b': 'Un fil doré, une perle, un contour net : le dernier détail est une signature.',
    'ch3.num': 'Chapitre III · Ses créations', 'ch3.title': 'Sa signature, coiffure après coiffure',
    'stage.book': 'Réserver cette coiffure',
    'ch4.num': 'Chapitre IV · L’influence',
    'live.intro': 'Ses publications les plus récentes sur Instagram, TikTok et YouTube, de la plus récente à la plus ancienne. Chacune renvoie à l’original et à la coiffure présentée, prête à réserver.',
    'live.status': 'Contenu d’exemple · comptes pas encore connectés',
    'owner.title': 'Contrôles de la propriétaire (aperçu)',
    'owner.intro': 'Dans le site final, Dre Amélie gère cette section depuis un tableau de bord privé, sans code. Ici, les contrôles fonctionnent seulement dans votre navigateur, sur des publications d’exemple.',
    'menu.eyebrow': 'Le menu', 'menu.title': 'Choisissez votre couronne',
    'menu.intro': 'Toutes les coiffures du menu Queens Hairstyle. Les durées sont les estimations du salon ; la durée et le prix exacts sont confirmés à la réservation.',
    'price.from': 'À partir de 60 $', 'price.note': 'Le prix dépend de la taille, de la longueur et des rajouts, et s’affiche avant la confirmation.',
    'fd.eyebrow': 'Trouvez votre style', 'fd.title': 'Trois questions, une couronne',
    q1: 'Combien de temps doit-elle durer ?', q2: 'Quel look recherchez-vous ?', q3: 'Temps dans le fauteuil ?',
    'fd.rec': 'Notre suggestion', 'fd.book': 'Réserver cette coiffure',
    'w.eyebrow': 'L’expérience Queens', 'w.title': 'Avec les mots de ses clientes',
    'w.src': 'Avis tels que publiés, dans leur langue d’origine (anglais), sur queenshairstyles.com.',
    'bk.eyebrow': 'Réserver', 'bk.title': 'Prenez place',
    'bk.intro': 'La réservation passe par l’agenda du salon et prend environ deux minutes.',
    's1.t': 'Choisissez votre coiffure', 's1.b': 'Le prix s’affiche avant la confirmation.',
    's2.t': 'Choisissez une date et une heure', 's2.b': 'Les coiffures longues demandent une demi-journée.',
    's3.t': 'Confirmez', 's3.b': 'Les nouvelles clientes locs commencent par une consultation, aussi réservable en ligne.',
    'bk.cta': 'Prendre rendez-vous', 'bk.cta2': 'Réserver des micro-locs',
    'v.title': 'Le studio', 'v.addr': 'Adresse', 'v.hours': 'Heures', 'v.hours.v': 'Du mardi au samedi, à partir de 8 h, sur rendez-vous',
    'v.phone': 'Téléphone et texto', 'v.email': 'Courriel', copy: 'Copier',
    'v.shop': 'La boutique Queens', 'v.shop.v': 'Bonnets en satin et accessoires pour protéger les cheveux la nuit.', 'v.shop.cta': 'Visiter la boutique',
    'ft.demo': 'Démonstration conçue par Dalal Technologies',
    /* founder page */
    'p.eyebrow': 'Portrait',
    'p.dek': 'Tresseuse, formatrice, docteure en philosophie. La femme qui a fondé Queens Hairstyle.',
    'p.f1.num': 'I', 'p.f1.t': 'La tresseuse',
    'p.f1.b1': 'Tresses sans nœud et box braids, cornrows et stitch braids, twists sénégalaises et passion twists, micro-locs et locs : son menu couvre tout le vocabulaire de la coiffure africaine.',
    'p.f1.b2': 'Ses photos en montrent la signature : des raies nettes et géométriques, des motifs en cœur et en vague, des finitions dorées.',
    'p.f2.num': 'II', 'p.f2.t': 'La formatrice',
    'p.f2.b1': 'Sur Instagram, elle se présente comme tresseuse et formatrice à Montréal. Elle enseigne le métier qu’elle pratique chaque jour au studio.',
    'p.f3.num': 'III', 'p.f3.t': 'L’universitaire',
    'p.f3.b1': 'Le titre devant son nom est mérité : elle détient un doctorat en philosophie.',
    'p.f3.b2': 'Une figure rare dans son domaine : une universitaire qui travaille de ses mains.',
    'p.follow.t': 'Suivez son travail', 'p.ig': 'Ses créations et ses coulisses, au quotidien.', 'p.tt': 'Ses vidéos courtes.', 'p.yt': 'Ses vidéos longues et ses Shorts.',
    'p.cta.t': 'Prenez place dans son fauteuil', 'p.cta.b': 'Voir les coiffures', 'p.back': 'Accueil'
  };

  var lang = 'en';
  var nodes = Array.prototype.slice.call(document.querySelectorAll('[data-i18n],[data-i18n-html]'));
  nodes.forEach(function (n) { n.dataset.en = n.hasAttribute('data-i18n-html') ? n.innerHTML : n.textContent; });
  function t(en, fr) { return lang === 'fr' ? fr : en; }

  function applyLang(next) {
    lang = next === 'fr' ? 'fr' : 'en';
    document.documentElement.lang = lang;
    nodes.forEach(function (n) {
      var key = n.getAttribute('data-i18n-html') || n.getAttribute('data-i18n');
      var val = lang === 'fr' && FR[key] ? FR[key] : n.dataset.en;
      if (n.hasAttribute('data-i18n-html')) n.innerHTML = val; else n.textContent = val;
    });
    document.querySelectorAll('.lang button').forEach(function (b) { b.setAttribute('aria-pressed', String(b.dataset.lang === lang)); });
    renderAll();
    store('qh-lang', lang);
  }
  document.querySelectorAll('.lang button').forEach(function (b) {
    b.addEventListener('click', function () { applyLang(b.dataset.lang); });
  });

  /* ================= Content ================= */
  function img(k, w) { return 'img/' + k + '-' + (w || 960) + '.webp'; }

  var STYLES = {
    knotless: { cat: 'braids', img: 'knotless-long', en: 'Knotless braids', fr: 'Tresses sans nœud',
      d: ['Started in your own hair at the root, with extensions added gradually through the length.', 'Commencées dans vos propres cheveux à la racine, avec des rajouts ajoutés peu à peu sur la longueur.'],
      v: ['Jumbo to extra small', 'Du jumbo au très fin'] },
    box: { cat: 'braids', img: 'heart-knotless', en: 'Box braids', fr: 'Box braids',
      d: ['Classic protective braids, from jumbo to small and up to waist length.', 'Tresses protectrices classiques, du jumbo au fin et jusqu’à la taille.'],
      v: ['Classic, goddess, triangle, square, bob', 'Classiques, goddess, triangle, carrées, bob'], time: ['3 to 6 h', '3 à 6 h'] },
    boho: { cat: 'braids', img: 'boho-burgundy', en: 'Boho braids', fr: 'Tresses bohèmes',
      d: ['Braids finished with loose curls for softness and movement.', 'Des tresses finies de boucles libres, pour la douceur et le mouvement.'],
      v: ['Colour on request', 'Couleur sur demande'] },
    stitch: { cat: 'cornrows', img: 'stitch-ponytail', en: 'Stitch & feed-in braids', fr: 'Stitch et feed-in',
      d: ['Straight-back or swept into a ponytail, with crisp, even lines.', 'Vers l’arrière ou remontées en queue, avec des lignes nettes et régulières.'],
      v: ['Straight-back, ponytail, two braids', 'Vers l’arrière, queue, deux tresses'] },
    lemonade: { cat: 'cornrows', img: 'lemonade-gold', en: 'Lemonade & Fulani braids', fr: 'Lemonade et Fulani',
      d: ['Side-swept rows and Fulani patterns, with cord or beads if you like.', 'Rangs sur le côté et motifs Fulani, avec fil ou perles au choix.'],
      v: ['Lemonade, Fulani', 'Lemonade, Fulani'] },
    freestyle: { cat: 'cornrows', img: 'freestyle-ponytail', en: 'Freestyle cornrows', fr: 'Cornrows freestyle',
      d: ['Custom patterns, from simple lines to intricate curves.', 'Des motifs sur mesure, des lignes simples aux courbes complexes.'],
      v: ['Custom design', 'Motif personnalisé'] },
    senegalese: { cat: 'twists', img: 'twists', en: 'Senegalese twists', fr: 'Twists sénégalaises',
      d: ['Smooth rope twists with a polished finish.', 'Des twists lisses en corde, à la finition soignée.'],
      v: ['Mini to large', 'De mini à grosses'] },
    textured: { cat: 'twists', img: 'kinky-buns', en: 'Passion, spring & Marley twists', fr: 'Passion, spring et Marley',
      d: ['Textured twists that celebrate natural volume, worn down or up.', 'Des twists texturées qui célèbrent le volume naturel, portées libres ou relevées.'],
      v: ['Passion, spring, Marley, natural', 'Passion, spring, Marley, naturelles'] },
    kids: { cat: 'kids', img: 'kids-cornrows', en: 'Kids’ braids & cornrows', fr: 'Tresses et cornrows pour enfants',
      d: ['Cornrows, braids and twists for young clients, finished with beads if they like.', 'Cornrows, tresses et twists pour les jeunes clientes, avec perles si elles le souhaitent.'],
      v: ['Cornrows, braids, twists', 'Cornrows, tresses, twists'] },
    micro: { cat: 'locs', mono: ['Micro', 'locs'], en: 'Micro-locs', fr: 'Micro-locs',
      d: ['Small, neat, long-lasting locs by interlocking or crochet. Starts with a consultation.', 'Des locs fines, nettes et durables, par interlocking ou crochet. Commence par une consultation.'],
      v: ['Installation and retwist', 'Installation et retwist'], time: ['4 to 6 h', '4 à 6 h'], book: BOOK_MICRO },
    starter: { cat: 'locs', mono: ['Starter', 'locs'], en: 'Starter & medium locs', fr: 'Locs de départ et moyennes',
      d: ['Your locs journey, guided from the very first install.', 'Votre parcours locs, accompagné dès la première installation.'],
      v: ['Starter, medium, dread locs', 'Départ, moyennes, dread locs'], time: ['2 to 4 h', '2 à 4 h'] },
    soft: { cat: 'locs', mono: ['Soft', 'locs'], en: 'Soft & butterfly locs', fr: 'Soft et butterfly locs',
      d: ['A crochet-wrapped style with a natural look, in several lengths and colours.', 'Un style enroulé au crochet, au rendu naturel, en plusieurs longueurs et couleurs.'],
      v: ['Soft, butterfly', 'Soft, butterfly'], time: ['3 to 4 h', '3 à 4 h'] },
    retie: { cat: 'locs', mono: ['Retie', ''], en: 'Locs retie & maintenance', fr: 'Entretien des locs',
      d: ['Keeps locs neat. Locs installed elsewhere are welcome.', 'Garde les locs nettes. Les locs faites ailleurs sont bienvenues.'],
      v: ['Every 4 to 8 weeks', 'Toutes les 4 à 8 semaines'] }
  };
  var ORDER = ['knotless', 'box', 'boho', 'stitch', 'lemonade', 'freestyle', 'senegalese', 'textured', 'kids', 'micro', 'starter', 'soft', 'retie'];
  var CATS = [['all', 'All', 'Tout'], ['braids', 'Braids', 'Tresses'], ['cornrows', 'Cornrows', 'Cornrows'], ['twists', 'Twists', 'Twists'], ['kids', 'Kids', 'Enfants'], ['locs', 'Locs', 'Locs']];

  var GALLERY = [
    { img: 'lemonade-gold', style: 'lemonade', en: 'Lemonade braids, gold cord', fr: 'Tresses lemonade, fil doré',
      d: ['Side-swept rows that wrap the head, threaded with a gold cord that follows every curve.', 'Des rangs sur le côté qui enveloppent la tête, tissés d’un fil doré qui suit chaque courbe.'] },
    { img: 'heart-knotless', style: 'box', en: 'Heart parting', fr: 'Raies en cœur',
      d: ['Jumbo braids with heart-shaped parts at the crown, a detail that turns a classic into a statement.', 'Grosses tresses aux raies en cœur sur le dessus, un détail qui transforme un classique.'] },
    { img: 'freestyle-ponytail', style: 'freestyle', en: 'Freestyle cornrows', fr: 'Cornrows freestyle',
      d: ['Curved rows drawn freehand, flowing into long braids gathered at the back.', 'Des rangs courbes tracés à main levée, prolongés en longues tresses rassemblées à l’arrière.'] },
    { img: 'twists', style: 'senegalese', en: 'Senegalese twists', fr: 'Twists sénégalaises',
      d: ['Long rope twists over clean square parts, finished to the ends.', 'De longues twists en corde sur des raies carrées nettes, finies jusqu’aux pointes.'] },
    { img: 'boho-burgundy', style: 'boho', en: 'Boho braids in burgundy', fr: 'Tresses bohèmes bordeaux',
      d: ['Fine braids in a deep burgundy, released into loose curls at the ends.', 'Des tresses fines d’un bordeaux profond, libérées en boucles aux pointes.'] },
    { img: 'stitch-ponytail', style: 'stitch', en: 'Stitch braids, high ponytail', fr: 'Stitch braids, queue haute',
      d: ['Sharp stitched lines swept upward into a high, braided ponytail.', 'Des lignes piquées nettes, remontées en une queue haute tressée.'] },
    { img: 'feed-in-two', style: 'stitch', en: 'Two feed-in braids', fr: 'Deux tresses feed-in',
      d: ['A sleek centre part and two long feed-in braids: simple, exact, lasting.', 'Une raie au milieu lisse et deux longues tresses feed-in : simple, exact, durable.'] },
    { img: 'kinky-buns', style: 'textured', en: 'Textured twists, two buns', fr: 'Twists texturées, deux chignons',
      d: ['Brick-laid parts and textured twists, gathered into two buns with the length left free.', 'Des raies en quinconce et des twists texturées, relevées en deux chignons, la longueur laissée libre.'] },
    { img: 'kids-cornrows', style: 'kids', en: 'Sisters in cornrows', fr: 'Sœurs en cornrows',
      d: ['Matching curved cornrows for two young clients, side by side in the chair.', 'Des cornrows courbes assorties pour deux jeunes clientes, côte à côte dans le fauteuil.'] },
    { img: 'kids-beads', style: 'kids', en: 'Cornrows with beads', fr: 'Cornrows et perles',
      d: ['Curved cornrows into honey-toned braids, finished with clear beads.', 'Des cornrows courbes prolongées en tresses couleur miel, finies de perles translucides.'] },
    { img: 'kids-twists', style: 'kids', en: 'Jumbo twists, gold cuffs', fr: 'Grosses twists, bagues dorées',
      d: ['Large twists over clean square parts, accented with gold hair cuffs.', 'De grosses twists sur des raies carrées nettes, rehaussées de bagues dorées.'] }
  ];

  var TOPICS = [['all', 'All', 'Tout'], ['braids', 'Braids', 'Tresses'], ['locs', 'Locs', 'Locs'], ['twists', 'Twists', 'Twists'], ['transform', 'Transformations', 'Transformations'], ['bts', 'Behind the scenes', 'Coulisses'], ['collab', 'Collaborations', 'Collaborations'], ['reflect', 'Reflections', 'Réflexions']];
  var PLATFORMS = [['all', 'All platforms', 'Toutes'], ['instagram', 'Instagram', 'Instagram'], ['tiktok', 'TikTok', 'TikTok'], ['youtube', 'YouTube', 'YouTube']];
  var TYPES = {
    photo: ['Photo', 'Photo'], carousel: ['Carousel', 'Carrousel'], reel: ['Reel', 'Reel'],
    tiktok: ['Video', 'Vidéo'], short: ['Short', 'Short'], video: ['Video', 'Vidéo']
  };

  var POSTS = [
    { id: 'p1', platform: 'instagram', type: 'carousel', imgs: ['lemonade-gold', 'freestyle-ponytail', 'stitch-ponytail'], topic: 'braids', days: 1, style: 'lemonade' },
    { id: 'p2', platform: 'tiktok', type: 'tiktok', imgs: ['boho-burgundy'], topic: 'transform', days: 2, style: 'boho' },
    { id: 'p3', platform: 'instagram', type: 'reel', imgs: ['heart-knotless'], topic: 'braids', days: 3, style: 'box' },
    { id: 'p4', platform: 'youtube', type: 'short', imgs: ['twists'], topic: 'twists', days: 5, style: 'senegalese' },
    { id: 'p5', platform: 'instagram', type: 'photo', imgs: ['kinky-buns'], topic: 'twists', days: 6, style: 'textured' },
    { id: 'p6', platform: 'youtube', type: 'video', imgs: ['knotless-long'], topic: 'bts', days: 9, style: 'knotless' },
    { id: 'p7', platform: 'tiktok', type: 'tiktok', imgs: ['feed-in-two'], topic: 'braids', days: 11, style: 'stitch' },
    { id: 'p8', platform: 'instagram', type: 'carousel', imgs: ['kids-cornrows', 'kids-beads'], topic: 'braids', days: 13, style: 'kids' },
    { id: 'p9', platform: 'instagram', type: 'photo', imgs: ['founder'], topic: 'reflect', days: 14, style: '' }
  ];

  var live = store('qh-live') || {};
  var featured = live.featured || 'p1';
  var hidden = live.hidden || {};
  var links = live.links || {};
  POSTS.forEach(function (p) { if (links[p.id] !== undefined) p.style = links[p.id]; });
  function saveLive() { store('qh-live', { featured: featured, hidden: hidden, links: links }); }

  var state = { platform: 'all', topic: 'all', menu: 'all', stage: 0 };

  /* ================= Helpers ================= */
  function chips(el, list, current, onPick, counts) {
    if (!el) return;
    el.innerHTML = '';
    list.forEach(function (c) {
      var b = document.createElement('button');
      b.type = 'button'; b.className = 'chip';
      b.innerHTML = t(c[1], c[2]) + (counts && counts[c[0]] !== undefined ? ' <small>' + counts[c[0]] + '</small>' : '');
      b.setAttribute('aria-pressed', String(c[0] === current));
      b.addEventListener('click', function () { onPick(c[0]); });
      el.appendChild(b);
    });
  }
  function exampleDate(days) {
    var d = new Date(); d.setDate(d.getDate() - days);
    try { return d.toLocaleDateString(lang === 'fr' ? 'fr-CA' : 'en-CA', { month: 'short', day: 'numeric' }); } catch (e) { return d.toDateString(); }
  }
  function esc(s) { return String(s).replace(/[&<>"]/g, function (c) { return { '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;' }[c]; }); }

  /* ================= Gallery stage ================= */
  var stageA, stageB, front;
  function showStage(i, instant) {
    var n = GALLERY.length;
    state.stage = (i + n) % n;
    var g = GALLERY[state.stage], s = STYLES[g.style];
    var title = document.getElementById('stage-title');
    if (!title) return;
    var next = front === stageA ? stageB : stageA;
    var alt = t(g.en, g.fr) + ' — Queens Hairstyle';
    if (instant || reduceMotion || !front) {
      stageA.src = img(g.img); stageA.alt = alt; stageA.classList.remove('out'); stageB.classList.add('out'); front = stageA;
    } else {
      next.src = img(g.img); next.alt = alt;
      var swap = function () { next.classList.remove('out'); front.classList.add('out'); front.alt = ''; front = next; };
      if (next.complete) swap(); else next.onload = swap;
    }
    document.getElementById('stage-kicker').textContent = t(s.en, s.fr);
    title.textContent = t(g.en, g.fr);
    document.getElementById('stage-desc').textContent = t(g.d[0], g.d[1]);
    document.getElementById('stage-meta').innerHTML = '<span>' + esc(t(s.v[0], s.v[1])) + '</span>' + (s.time ? '<span>' + esc(t(s.time[0], s.time[1])) + '</span>' : '');
    document.getElementById('stage-book').href = s.book || BOOK;
    document.getElementById('stage-count').textContent = (state.stage + 1) + ' / ' + n;
    var th = document.querySelectorAll('#thumbs .thumb');
    th.forEach(function (b, j) { b.setAttribute('aria-current', String(j === state.stage)); });
    var cur = th[state.stage];
    if (cur && !instant) { var box = cur.parentNode; box.scrollTo({ left: cur.offsetLeft - box.clientWidth / 2 + cur.clientWidth / 2, behavior: reduceMotion ? 'auto' : 'smooth' }); }
  }
  function renderStage() {
    var th = document.getElementById('thumbs');
    if (!th) return;
    th.innerHTML = GALLERY.map(function (g, i) {
      return '<button type="button" class="thumb" aria-label="' + esc(t(g.en, g.fr)) + '" data-i="' + i + '"><img src="' + img(g.img, 480) + '" alt="" loading="lazy" width="56" height="72"></button>';
    }).join('');
    showStage(state.stage, true);
  }

  /* ================= Queens Live ================= */
  function svgIcon(type) {
    if (type === 'photo') return '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><rect x="3" y="4" width="18" height="16" rx="3"/><circle cx="12" cy="12" r="3.5"/></svg>';
    if (type === 'carousel') return '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><rect x="6" y="3" width="14" height="14" rx="2"/><path d="M4 7v12a2 2 0 0 0 2 2h12"/></svg>';
    return '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><rect x="3" y="5" width="18" height="14" rx="3"/><path d="M10 9.5v5l4.5-2.5z" fill="currentColor"/></svg>';
  }
  function postCard(p, isFeatured) {
    var s = p.style && STYLES[p.style];
    var topic = TOPICS.filter(function (c) { return c[0] === p.topic; })[0];
    var plat = PLATFORMS.filter(function (c) { return c[0] === p.platform; })[0];
    var isVideo = ['reel', 'tiktok', 'short', 'video'].indexOf(p.type) > -1;
    var media = p.imgs.length > 1
      ? '<div class="slides" tabindex="0" aria-label="' + esc(t('Carousel, swipe for more photos', 'Carrousel, faites glisser pour plus de photos')) + '">' + p.imgs.map(function (k, i) { return '<img src="' + img(k, isFeatured ? 960 : 480) + '" alt="' + esc(t('Example post photo ', 'Photo de publication d’exemple ') + (i + 1)) + '" loading="lazy" width="480" height="600">'; }).join('') + '</div><div class="dots" aria-hidden="true">' + p.imgs.map(function (k, i) { return '<i' + (i === 0 ? ' class="on"' : '') + '></i>'; }).join('') + '</div>'
      : '<img src="' + img(p.imgs[0], isFeatured ? 960 : 480) + '" alt="' + esc(t('Example post: ', 'Publication d’exemple : ') + t(topic[1], topic[2])) + '" loading="lazy" width="480" height="600" style="width:100%;height:100%;object-fit:cover' + (p.imgs[0] === 'founder' ? ';object-position:50% 15%' : '') + '">';
    var play = isVideo ? '<div class="play" aria-hidden="true"><span><svg viewBox="0 0 24 24" fill="currentColor"><path d="M8 5v14l11-7z"/></svg></span></div>' : '';
    var tags = '<div class="tag-row"><span style="display:flex;gap:6px;flex-wrap:wrap">' + (isFeatured ? '<span class="tag gold">' + t('Featured', 'En vedette') + '</span>' : '') + '<span class="tag">' + t(TYPES[p.type][0], TYPES[p.type][1]) + '</span></span><span class="tag example">' + t('Example', 'Exemple') + '</span></div>';
    var openLabel = t('Open on ', 'Ouvrir sur ') + plat[1];
    return '<figure class="post' + (isFeatured ? ' featured' : '') + (hidden[p.id] ? ' is-hidden' : '') + '">' +
      '<div class="post-media">' + media + play + tags + '</div>' +
      '<figcaption class="post-body">' +
        '<div class="post-src">' + svgIcon(p.type) + '<span>' + plat[1] + ' · ' + t(topic[1], topic[2]) + '</span><time>' + t('Example date · ', 'Date d’exemple · ') + exampleDate(p.days) + '</time></div>' +
        '<p class="post-cap"><em>' + t('Example caption. Her original caption appears here in full once the account is connected.', 'Légende d’exemple. Sa légende originale s’affiche ici en entier une fois le compte connecté.') + '</em></p>' +
        '<div class="post-actions"><a href="' + PROFILES[p.platform] + '" target="_blank" rel="noopener">' + openLabel + ' ↗</a>' +
        (s ? '<a href="' + (s.book || BOOK) + '" target="_blank" rel="noopener">' + t('Book ', 'Réserver ') + esc(t(s.en, s.fr)) + '</a>' : '') + '</div>' +
      '</figcaption></figure>';
  }
  function renderLive() {
    var layout = document.getElementById('live-layout');
    if (!layout) return;
    var visible = POSTS.filter(function (p) { return !hidden[p.id]; });
    var counts = { all: visible.length };
    PLATFORMS.forEach(function (c) { if (c[0] !== 'all') counts[c[0]] = visible.filter(function (p) { return p.platform === c[0]; }).length; });
    chips(document.getElementById('platform-filter'), PLATFORMS, state.platform, function (v) { state.platform = v; renderLive(); }, counts);
    chips(document.getElementById('topic-filter'), TOPICS, state.topic, function (v) { state.topic = v; renderLive(); });
    var list = visible.filter(function (p) {
      return (state.platform === 'all' || p.platform === state.platform) && (state.topic === 'all' || p.topic === state.topic);
    }).sort(function (a, b) { return a.days - b.days; });
    if (!list.length) {
      layout.innerHTML = '<p class="live-empty">' + t('Nothing here yet. New posts in this category appear automatically once her accounts are connected.', 'Rien ici pour l’instant. Les nouvelles publications de cette catégorie apparaîtront automatiquement une fois ses comptes connectés.') + '</p>';
    } else {
      var feat = list.filter(function (p) { return p.id === featured; })[0] || list[0];
      var rest = list.filter(function (p) { return p !== feat; });
      layout.innerHTML = postCard(feat, feat.id === featured) +
        '<div style="min-width:0"><div class="feed-label"><span>' + t('Newest first', 'Les plus récentes') + '</span><span>' + rest.length + ' ' + t('more', 'de plus') + '</span></div>' +
        '<div class="feed">' + rest.map(function (p) { return postCard(p, false); }).join('') + '</div></div>';
    }
    layout.querySelectorAll('.slides').forEach(function (sl) {
      sl.addEventListener('scroll', function () {
        var i = Math.round(sl.scrollLeft / sl.clientWidth);
        sl.parentNode.querySelectorAll('.dots i').forEach(function (d, j) { d.classList.toggle('on', j === i); });
      }, { passive: true });
    });
    renderOwner();
  }
  function renderOwner() {
    var c = document.getElementById('connections');
    if (!c) return;
    c.innerHTML = PLATFORMS.slice(1).map(function (p) {
      return '<div class="conn"><b>' + p[1] + '</b><span>' + t('Not connected · example content shown', 'Non connecté · contenu d’exemple affiché') + '</span></div>';
    }).join('');
    var opts = '<option value="">' + t('No linked style', 'Aucune coiffure liée') + '</option>' + ORDER.map(function (k) { return '<option value="' + k + '">' + esc(t(STYLES[k].en, STYLES[k].fr)) + '</option>'; }).join('');
    document.getElementById('owner-table').innerHTML = POSTS.slice().sort(function (a, b) { return a.days - b.days; }).map(function (p) {
      var plat = PLATFORMS.filter(function (c) { return c[0] === p.platform; })[0];
      return '<div class="orow"><img src="' + img(p.imgs[0], 480) + '" alt="" width="52" height="64" loading="lazy"' + (p.imgs[0] === 'founder' ? ' style="object-position:50% 15%"' : '') + '>' +
        '<div class="oinfo"><b>' + plat[1] + ' · ' + t(TYPES[p.type][0], TYPES[p.type][1]) + ' · ' + exampleDate(p.days) + '</b>' +
        '<div class="ocontrols">' +
          '<label><input type="radio" name="feat" value="' + p.id + '"' + (featured === p.id ? ' checked' : '') + ' data-act="feature"> ' + t('Feature', 'Vedette') + '</label>' +
          '<label><input type="checkbox" value="' + p.id + '"' + (!hidden[p.id] ? ' checked' : '') + ' data-act="show"> ' + t('Show on site', 'Visible') + '</label>' +
          '<label class="sr-only" for="link-' + p.id + '">' + t('Linked style', 'Coiffure liée') + '</label>' +
          '<select id="link-' + p.id + '" data-act="link" data-id="' + p.id + '">' + opts.replace('value="' + p.style + '"', 'value="' + p.style + '" selected') + '</select>' +
        '</div></div></div>';
    }).join('');
  }
  var ownerTable = document.getElementById('owner-table');
  if (ownerTable) ownerTable.addEventListener('change', function (e) {
    var el = e.target, act = el.dataset.act;
    if (act === 'feature') featured = el.value;
    if (act === 'show') { if (el.checked) delete hidden[el.value]; else hidden[el.value] = true; }
    if (act === 'link') { links[el.dataset.id] = el.value; POSTS.forEach(function (p) { if (p.id === el.dataset.id) p.style = el.value; }); }
    saveLive();
    var keep = el.id || null;
    renderLive();
    if (keep) { var f = document.getElementById(keep); if (f) f.focus(); }
  });

  /* ================= Menu ================= */
  function renderMenu() {
    var list = document.getElementById('menu-list');
    if (!list) return;
    chips(document.getElementById('menu-filter'), CATS, state.menu, function (v) { state.menu = v; renderMenu(); });
    list.innerHTML = ORDER.filter(function (k) { return state.menu === 'all' || STYLES[k].cat === state.menu; }).map(function (k) {
      var s = STYLES[k];
      var thumb = s.img ? '<img src="' + img(s.img, 480) + '" alt="" loading="lazy" width="76" height="98">' : '<span>' + s.mono[0] + (s.mono[1] ? '<br>' + s.mono[1] : '') + '</span>';
      return '<article class="mrow"><div class="mthumb" aria-hidden="true">' + thumb + '</div><div class="mbody"><h3>' + esc(t(s.en, s.fr)) + '</h3>' +
        '<div class="mmeta"><span>' + esc(t(s.v[0], s.v[1])) + '</span>' + (s.time ? '<span class="time">' + esc(t(s.time[0], s.time[1])) + '</span>' : '') + '</div>' +
        '<p>' + esc(t(s.d[0], s.d[1])) + '</p>' +
        '<a class="link-arrow" target="_blank" rel="noopener" href="' + (s.book || BOOK) + '">' + t('Book', 'Réserver') + '<span class="sr-only"> ' + esc(t(s.en, s.fr)) + '</span></a></div></article>';
    }).join('');
  }

  /* ================= Finder ================= */
  var Q = {
    q1: [['short', '2 to 4 weeks', '2 à 4 semaines'], ['mid', '1 to 2 months', '1 à 2 mois'], ['long', 'Long-term', 'À long terme']],
    q2: [['pattern', 'Sleek patterns', 'Motifs nets'], ['move', 'Length & movement', 'Longueur et mouvement'], ['texture', 'Natural texture', 'Texture naturelle']],
    q3: [['quick', 'Under 3 hours', 'Moins de 3 h'], ['half', 'Half a day', 'Une demi-journée'], ['any', 'Whatever it takes', 'Le temps qu’il faut']]
  };
  var answers = { q1: 'mid', q2: 'move', q3: 'half' };
  var WHY = {
    pattern: ['You like clean lines and a design that shows.', 'Vous aimez les lignes nettes et un motif qui se voit.'],
    move: ['You want length that moves.', 'Vous voulez de la longueur et du mouvement.'],
    texture: ['You want your natural texture to lead.', 'Vous voulez que votre texture naturelle s’exprime.']
  };
  function recommend() {
    var a = answers, pick;
    if (a.q1 === 'long') pick = a.q2 === 'move' ? 'soft' : (a.q2 === 'texture' || a.q3 === 'any') ? 'micro' : 'starter';
    else if (a.q2 === 'pattern') pick = a.q3 === 'quick' ? 'stitch' : (a.q1 === 'short' ? 'freestyle' : 'lemonade');
    else if (a.q2 === 'move') pick = a.q3 === 'quick' ? 'box' : (a.q1 === 'short' ? 'boho' : 'knotless');
    else pick = a.q3 === 'quick' ? 'textured' : 'senegalese';
    return STYLES[pick];
  }
  function renderQuiz() {
    ['q1', 'q2', 'q3'].forEach(function (q) {
      var el = document.getElementById(q);
      if (!el) return;
      el.innerHTML = Q[q].map(function (o) {
        var id = q + '-' + o[0];
        return '<label class="opt" for="' + id + '"><input type="radio" id="' + id + '" name="' + q + '" value="' + o[0] + '"' + (answers[q] === o[0] ? ' checked' : '') + '><span>' + t(o[1], o[2]) + '</span></label>';
      }).join('');
    });
    var s = recommend(), n = document.getElementById('r-name');
    if (!n) return;
    n.textContent = t(s.en, s.fr);
    var why = answers.q1 === 'long' ? t('You want a style that grows with you.', 'Vous voulez un style qui grandit avec vous.') : t(WHY[answers.q2][0], WHY[answers.q2][1]);
    document.getElementById('r-why').textContent = why + ' ' + t(s.d[0], s.d[1]);
    document.getElementById('r-meta').textContent = t(s.v[0], s.v[1]) + (s.time ? ' · ' + t(s.time[0], s.time[1]) : '');
    document.getElementById('r-book').href = s.book || BOOK;
  }
  var quiz = document.getElementById('quiz');
  if (quiz) {
    quiz.addEventListener('change', function (e) {
      if (!e.target.name) return;
      answers[e.target.name] = e.target.value;
      var id = e.target.id;
      renderQuiz();
      var f = document.getElementById(id); if (f) f.focus();
    });
    quiz.addEventListener('submit', function (e) { e.preventDefault(); });
  }

  function renderAll() { renderStage(); renderLive(); renderMenu(); renderQuiz(); }

  /* ================= Interactions ================= */
  stageA = document.getElementById('stage-a');
  stageB = document.getElementById('stage-b');
  if (stageA) {
    document.getElementById('stage-prev').addEventListener('click', function () { showStage(state.stage - 1); });
    document.getElementById('stage-next').addEventListener('click', function () { showStage(state.stage + 1); });
    document.getElementById('thumbs').addEventListener('click', function (e) { var b = e.target.closest('.thumb'); if (b) showStage(+b.dataset.i); });
    var media = document.getElementById('stage-media'), x0 = null;
    media.addEventListener('pointerdown', function (e) { x0 = e.clientX; });
    media.addEventListener('pointerup', function (e) { if (x0 === null) return; var dx = e.clientX - x0; x0 = null; if (Math.abs(dx) > 40) showStage(state.stage + (dx < 0 ? 1 : -1)); });
    media.addEventListener('pointercancel', function () { x0 = null; });
    document.getElementById('stage').addEventListener('keydown', function (e) {
      if (e.key === 'ArrowRight') showStage(state.stage + 1);
      if (e.key === 'ArrowLeft') showStage(state.stage - 1);
    });
  }

  var thought = document.getElementById('thought');
  if (thought && 'IntersectionObserver' in window) {
    var io = new IntersectionObserver(function (es) { es.forEach(function (en) { if (en.isIntersecting) { thought.classList.add('in'); io.disconnect(); } }); }, { threshold: 0.3 });
    io.observe(thought);
  }

  document.querySelectorAll('[data-copy]').forEach(function (b) {
    b.addEventListener('click', function () {
      var src = document.getElementById(b.dataset.copy), text = src.textContent.trim();
      var done = function () { b.textContent = t('Copied', 'Copié'); setTimeout(function () { b.textContent = t('Copy', 'Copier'); }, 1800); };
      var fallback = function () { var r = document.createRange(); r.selectNodeContents(src); var s = window.getSelection(); s.removeAllRanges(); s.addRange(r); b.textContent = t('Selected', 'Sélectionné'); };
      try { navigator.clipboard.writeText(text).then(done, fallback); } catch (e) { fallback(); }
    });
  });

  var saved = store('qh-lang');
  applyLang(saved || 'fr');
})();
