/* ===================================================================
   VI FOOTBALL  |  football.js  |  v5 – Ultimate Madfut Edition
   Pure vanilla JavaScript — no dependencies
   Strict rule: NO text or CSS stats overlaid on top of cards.
   Cards are always rendered strictly as: <img class="..." src="...">
=================================================================== */
'use strict';

/* ═══════════════════════════════════════════════════════════════════
   1. PLAYERS DATABASE (All 36 Cards Preserved with Exact Paths)
═══════════════════════════════════════════════════════════════════ */
const PLAYERS_DB = [
  // --- ULTRA LEGEND (pers/Ultra legend/) ---
  {
    id: "komilzhonov_120", personId: "komilzhonov", name: "KOMILZHONOV",
    rating: 120, position: "RM", country: "UZB", rarity: "ultra_legend",
    image: "pers/Ultra legend/KOMILZHONOV.png",
    stats: { pac: 115, sho: 112, pas: 108, dri: 110, def: 94, phy: 120 }
  },
  {
    id: "matus_99", personId: "matus", name: "MATUS",
    rating: 99, position: "CB", country: "NIC", rarity: "ultra_legend",
    image: "pers/Ultra legend/MATUS.png",
    stats: { pac: 99, sho: 99, pas: 99, dri: 99, def: 99, phy: 99 }
  },
  {
    id: "davletov_95", personId: "davletov", name: "DAVLETOV",
    rating: 95, position: "RM", country: "UZB", rarity: "ultra_legend",
    image: "pers/Ultra legend/DAVLETOV.png",
    stats: { pac: 97, sho: 91, pas: 96, dri: 99, def: 65, phy: 85 }
  },

  // --- LEGEND (pers/Legend/) ---
  {
    id: "diego_flores_92", personId: "diego_flores", name: "DIEGO FLORES",
    rating: 92, position: "CAM", country: "SLV", rarity: "legend",
    image: "pers/Legend/DIEGO FLORES.png",
    stats: { pac: 89, sho: 92, pas: 94, dri: 93, def: 45, phy: 72 }
  },
  {
    id: "diego_flores_87", personId: "diego_flores", name: "DIEGO FLORES",
    rating: 87, position: "LM", country: "SLV", rarity: "legend",
    image: "pers/Legend/DIEGO FLORES 87.png",
    stats: { pac: 86, sho: 82, pas: 84, dri: 88, def: 47, phy: 73 }
  },
  {
    id: "khakimov_88", personId: "khakimov", name: "KHAKIMOV",
    rating: 88, position: "CDM", country: "UZB", rarity: "legend",
    image: "pers/Legend/KHAKIMOV.png",
    stats: { pac: 78, sho: 75, pas: 84, dri: 82, def: 86, phy: 87 }
  },
  {
    id: "khakimov_84", personId: "khakimov", name: "KHAKIMOV",
    rating: 84, position: "CAM", country: "UZB", rarity: "legend",
    image: "pers/Legend/KHAKIMOV 84.png",
    stats: { pac: 82, sho: 83, pas: 85, dri: 86, def: 49, phy: 66 }
  },
  {
    id: "asanov_84", personId: "asanov", name: "ASANOV",
    rating: 84, position: "RM", country: "UZB", rarity: "legend",
    image: "pers/Legend/ASANOV.png",
    stats: { pac: 85, sho: 78, pas: 81, dri: 83, def: 46, phy: 69 }
  },
  {
    id: "asanov_63", personId: "asanov", name: "ASANOV",
    rating: 63, position: "RM", country: "UZB", rarity: "legend",
    image: "pers/Legend/ASANOV 63.png",
    stats: { pac: 67, sho: 59, pas: 64, dri: 62, def: 45, phy: 55 }
  },
  {
    id: "alpyspayev_96", personId: "alpyspayev", name: "ALPYSPAYEV",
    rating: 96, position: "GK", country: "KAZ", rarity: "legend",
    image: "pers/Legend/ALPYSPAYEV.png",
    stats: { pac: 59, sho: 95, pas: 95, dri: 98, def: 98, phy: 94, ref: 98, div: 97 }
  },
  {
    id: "gemua_90", personId: "gemua", name: "GEMUA",
    rating: 90, position: "GK", country: "ABH", rarity: "legend",
    image: "pers/Legend/GEMUA.png",
    stats: { pac: 54, sho: 88, pas: 88, dri: 92, def: 92, phy: 90, ref: 92, div: 91 }
  },
  {
    id: "bakhtiyarov_90", personId: "bakhtiyarov", name: "BAKHTIYAROV",
    rating: 90, position: "LM", country: "UZB", rarity: "legend",
    image: "pers/Legend/BAKHTIYAROV.png",
    stats: { pac: 92, sho: 86, pas: 87, dri: 91, def: 53, phy: 75 }
  },
  {
    id: "fayzuloev_90", personId: "fayzuloev", name: "FAYZULOEV",
    rating: 90, position: "RM", country: "TJK", rarity: "legend",
    image: "pers/Legend/FAYZULOEV.png",
    stats: { pac: 92, sho: 86, pas: 88, dri: 91, def: 52, phy: 74 }
  },
  {
    id: "muminov_89", personId: "muminov", name: "MUMINOV",
    rating: 89, position: "ST", country: "UZB", rarity: "legend",
    image: "pers/Legend/MUMINOV.png",
    stats: { pac: 88, sho: 90, pas: 78, dri: 85, def: 40, phy: 84 }
  },
  {
    id: "khuzhayev_88", personId: "khuzhayev", name: "KHUZHAYEV",
    rating: 88, position: "GK", country: "UZB", rarity: "legend",
    image: "pers/Legend/KHUZHAYEV.png",
    stats: { pac: 50, sho: 84, pas: 84, dri: 91, def: 91, phy: 86, ref: 91, div: 89 }
  },
  {
    id: "serikbay_87", personId: "serikbay", name: "SERIKBAY",
    rating: 87, position: "CDM", country: "KAZ", rarity: "legend",
    image: "pers/Legend/SERIKBAY.png",
    stats: { pac: 86, sho: 82, pas: 88, dri: 90, def: 84, phy: 79 }
  },
  {
    id: "oganesyan_86", personId: "oganesyan", name: "OGANESYAN",
    rating: 86, position: "LB", country: "ABH", rarity: "legend",
    image: "pers/Legend/OGANESYAN.png",
    stats: { pac: 83, sho: 70, pas: 80, dri: 81, def: 84, phy: 82 }
  },
  {
    id: "salimov_85", personId: "salimov", name: "SALIMOV",
    rating: 85, position: "CB", country: "UZB", rarity: "legend",
    image: "pers/Legend/SALIMOV.png",
    stats: { pac: 74, sho: 50, pas: 68, dri: 69, def: 86, phy: 85 }
  },
  {
    id: "akaba_83", personId: "akaba", name: "AKABA",
    rating: 83, position: "CM", country: "ABH", rarity: "legend",
    image: "pers/Legend/AKABA.png",
    stats: { pac: 74, sho: 76, pas: 83, dri: 81, def: 72, phy: 78 }
  },
  {
    id: "akhmadzhonov_83", personId: "akhmadzhonov", name: "AKHMADZHONOV",
    rating: 83, position: "RW", country: "UZB", rarity: "legend",
    image: "pers/Legend/AKHMADZHONOV.png",
    stats: { pac: 87, sho: 81, pas: 76, dri: 84, def: 41, phy: 71 }
  },
  {
    id: "erkinov_83", personId: "erkinov", name: "ERKINOV",
    rating: 83, position: "CM", country: "UZB", rarity: "legend",
    image: "pers/Legend/ERKINOV.png",
    stats: { pac: 79, sho: 78, pas: 85, dri: 82, def: 68, phy: 74 }
  },
  {
    id: "zainiddinkhuzhaev_81", personId: "zainiddinkhuzhaev", name: "ZAINIDDINKHUZHAEV",
    rating: 81, position: "CB", country: "UZB", rarity: "legend",
    image: "pers/Legend/ZAINIDDINKHUZHAEV.png",
    stats: { pac: 68, sho: 45, pas: 63, dri: 65, def: 82, phy: 81 }
  },
  {
    id: "ubaydulaev_79", personId: "ubaydulaev", name: "UBAYDULAEV",
    rating: 79, position: "RB", country: "UZB", rarity: "legend",
    image: "pers/Legend/UBAYDULAEV.png",
    stats: { pac: 82, sho: 61, pas: 70, dri: 74, def: 76, phy: 75 }
  },
  {
    id: "fanat_ronaldo_77", personId: "fanat_ronaldo", name: "FANAT RONALDO",
    rating: 77, position: "RM", country: "ABH", rarity: "legend",
    image: "pers/Legend/FANAT RONALDO.png",
    stats: { pac: 84, sho: 71, pas: 76, dri: 81, def: 48, phy: 69 }
  },
  {
    id: "rustam_saidov_76", personId: "rustam_saidov", name: "RUSTAM SAIDOV",
    rating: 76, position: "CAM", country: "UZB", rarity: "legend",
    image: "pers/Legend/RUSTAM SAIDOV.png",
    stats: { pac: 78, sho: 72, pas: 75, dri: 79, def: 48, phy: 71 }
  },
  {
    id: "yerlan_kazakov_75", personId: "yerlan_kazakov", name: "YERLAN KAZAKOV",
    rating: 75, position: "ST", country: "KAZ", rarity: "legend",
    image: "pers/Legend/YERLAN KAZAKOV.png",
    stats: { pac: 77, sho: 76, pas: 68, dri: 73, def: 41, phy: 74 }
  },
  {
    id: "ivan_smirnov_75", personId: "ivan_smirnov", name: "IVAN SMIRNOV",
    rating: 75, position: "CF", country: "RUS", rarity: "legend",
    image: "pers/Legend/IVAN SMIRNOV.png",
    stats: { pac: 78, sho: 80, pas: 72, dri: 76, def: 42, phy: 71 }
  },
  {
    id: "kirill_novikov_73", personId: "kirill_novikov", name: "KIRILL NOVIKOV",
    rating: 73, position: "RW", country: "RUS", rarity: "legend",
    image: "pers/Legend/KIRILL NOVIKOV.png",
    stats: { pac: 80, sho: 69, pas: 71, dri: 76, def: 42, phy: 68 }
  },
  {
    id: "bakhtiyar_aliyev_71", personId: "bakhtiyar_aliyev", name: "BAKHTIYAR ALIYEV",
    rating: 71, position: "CDM", country: "UZB", rarity: "legend",
    image: "pers/Legend/BAKHTIYAR ALIYEV.png",
    stats: { pac: 68, sho: 58, pas: 72, dri: 70, def: 74, phy: 76 }
  },
  {
    id: "denis_orlov_68", personId: "denis_orlov", name: "DENIS ORLOV",
    rating: 68, position: "ST", country: "RUS", rarity: "legend",
    image: "pers/Legend/DENIS ORLOV.png",
    stats: { pac: 74, sho: 70, pas: 62, dri: 66, def: 38, phy: 67 }
  },
  {
    id: "artem_kim_67", personId: "artem_kim", name: "ARTEM KIM",
    rating: 67, position: "CAM", country: "KAZ", rarity: "legend",
    image: "pers/Legend/ARTEM KIM.png",
    stats: { pac: 71, sho: 64, pas: 68, dri: 70, def: 52, phy: 65 }
  },
  {
    id: "ismoilov_66", personId: "ismoilov", name: "ISMOILOV",
    rating: 66, position: "LB", country: "UZB", rarity: "legend",
    image: "pers/Legend/ISMOILOV.png",
    stats: { pac: 71, sho: 42, pas: 58, dri: 61, def: 62, phy: 63 }
  },
  {
    id: "sergei_volkov_66", personId: "sergei_volkov", name: "SERGEI VOLKOV",
    rating: 66, position: "LB", country: "RUS", rarity: "legend",
    image: "pers/Legend/SERGEI VOLKOV.png",
    stats: { pac: 73, sho: 42, pas: 64, dri: 67, def: 70, phy: 73 }
  },
  {
    id: "alexey_morozov_65", personId: "alexey_morozov", name: "ALEXEY MOROZOV",
    rating: 65, position: "CM", country: "RUS", rarity: "legend",
    image: "pers/Legend/ALEXEY MOROZOV.png",
    stats: { pac: 67, sho: 61, pas: 69, dri: 68, def: 58, phy: 64 }
  },
  {
    id: "dmitri_kuznetsov_64", personId: "dmitri_kuznetsov", name: "DMITRI KUZNETSOV",
    rating: 64, position: "RB", country: "RUS", rarity: "legend",
    image: "pers/Legend/DMITRI KUZNETSOV.png",
    stats: { pac: 70, sho: 48, pas: 61, dri: 63, def: 71, phy: 74 }
  },
  {
    id: "timur_rakhimov_64", personId: "timur_rakhimov", name: "TIMUR RAKHIMOV",
    rating: 64, position: "CB", country: "UZB", rarity: "legend",
    image: "pers/Legend/TIMUR RAKHIMOV.png",
    stats: { pac: 58, sho: 55, pas: 55, dri: 45, def: 52, phy: 70 }
  }

  /* ═══════════════════════════════════════════════════════════════════
     Шаблон для добавления новых карточек по папкам (1-4 курс):
     Закиньте файлы .png в соответствующую папку и добавьте объект карточки:
     
     // pers/1 kurs/
     // { id: "player_75", personId: "player", name: "NAME", rating: 75, position: "CM", country: "UZB", rarity: "rare_gold", image: "pers/1 kurs/NAME.png", stats: {...} },
     
     // pers/2 kurs/
     // { id: "player_82", personId: "player", name: "NAME", rating: 82, position: "ST", country: "UZB", rarity: "rare_gold", image: "pers/2 kurs/NAME.png", stats: {...} },

     // pers/3 kurs/
     // { id: "player_86", personId: "player", name: "NAME", rating: 86, position: "CAM", country: "UZB", rarity: "rare_gold", image: "pers/3 kurs/NAME.png", stats: {...} },

     // pers/4 kurs/
     // { id: "player_90", personId: "player", name: "NAME", rating: 90, position: "CB", country: "UZB", rarity: "rare_gold", image: "pers/4 kurs/NAME.png", stats: {...} },
  ═══════════════════════════════════════════════════════════════════ */
];

/* ─── Словарь отображения названий курсов ─── */
const COURSE_DISPLAY_NAMES = {
  '1 kurs': '1 Курс',
  '2 kurs': '2 Курс',
  '3 kurs': '3 Курс',
  '4 kurs': '4 Курс',
  'Legend': 'Legend',
  'Ultra legend': 'Ultra Legend'
};

function getCourseDisplayName(course) {
  return COURSE_DISPLAY_NAMES[course] || course || 'Legend';
}

/* ─── Определение курса строго по папке (player.image / player.course) ─── */
function getPlayerCourse(player) {
  if (!player) return 'Legend';
  const imgPath = (player.image || '').toLowerCase();

  if (imgPath.includes('1 kurs') || player.course === '1 kurs') return '1 kurs';
  if (imgPath.includes('2 kurs') || player.course === '2 kurs') return '2 kurs';
  if (imgPath.includes('3 kurs') || player.course === '3 kurs') return '3 kurs';
  if (imgPath.includes('4 kurs') || player.course === '4 kurs') return '4 kurs';
  if (imgPath.includes('ultra legend') || player.course === 'Ultra legend') return 'Ultra legend';
  if (imgPath.includes('legend') || player.course === 'Legend') return 'Legend';

  // Если карточка лежит в старой папке Taktik или путь не распознан — проверяем поле course
  return player.course || 'Legend';
}

// Привязка course и country ко всем картам в базе
PLAYERS_DB.forEach(p => {
  p.course = getPlayerCourse(p);
  if (!p.country) p.country = 'UZB';
});

/* ═══════════════════════════════════════════════════════════════════
   2. DRAFT FORMATIONS (Exact file paths from pers/Taktik/ on disk)
═══════════════════════════════════════════════════════════════════ */
const DRAFT_FORMATIONS = [
  {
    name: "4-2-3-1",
    image: "pers/Taktik/4-2-3-1.jpg",
    slots: [
      { pos: "GK",  line: "gk" },
      { pos: "RB",  line: "def" }, { pos: "CB", line: "def" }, { pos: "CB", line: "def" }, { pos: "LB", line: "def" },
      { pos: "CDM", line: "mid" }, { pos: "CDM", line: "mid" },
      { pos: "RM",  line: "att" }, { pos: "CAM", line: "att" }, { pos: "LM", line: "att" },
      { pos: "ST",  line: "st" }
    ]
  },
  {
    name: "5-3-2",
    image: "pers/Taktik/5-3-2.jpg",
    slots: [
      { pos: "GK",  line: "gk" },
      { pos: "RB",  line: "def" }, { pos: "CB", line: "def" }, { pos: "CB", line: "def" }, { pos: "CB", line: "def" }, { pos: "LB", line: "def" },
      { pos: "CM",  line: "mid" }, { pos: "CM", line: "mid" }, { pos: "CM", line: "mid" },
      { pos: "ST",  line: "st" },  { pos: "ST", line: "st" }
    ]
  },
  {
    name: "3-4-2-1",
    image: "pers/Taktik/3-4-2-1.jpg",
    slots: [
      { pos: "GK",  line: "gk" },
      { pos: "CB",  line: "def" }, { pos: "CB", line: "def" }, { pos: "CB", line: "def" },
      { pos: "RM",  line: "mid" }, { pos: "CM", line: "mid" }, { pos: "CM", line: "mid" }, { pos: "LM", line: "mid" },
      { pos: "CAM", line: "att" }, { pos: "CAM", line: "att" },
      { pos: "ST",  line: "st" }
    ]
  },
  {
    name: "3-1-4-2",
    image: "pers/Taktik/3-1-4-2.jpg",
    slots: [
      { pos: "GK",  line: "gk" },
      { pos: "CB",  line: "def" }, { pos: "CB", line: "def" }, { pos: "CB", line: "def" },
      { pos: "CDM", line: "mid" },
      { pos: "RM",  line: "mid" }, { pos: "CM", line: "mid" }, { pos: "CM", line: "mid" }, { pos: "LM", line: "mid" },
      { pos: "ST",  line: "st" },  { pos: "ST", line: "st" }
    ]
  },
  {
    name: "4-1-4-1",
    image: "pers/Taktik/4-1-4-1.jpg",
    slots: [
      { pos: "GK",  line: "gk" },
      { pos: "RB",  line: "def" }, { pos: "CB", line: "def" }, { pos: "CB", line: "def" }, { pos: "LB", line: "def" },
      { pos: "CDM", line: "mid" },
      { pos: "RM",  line: "att" }, { pos: "CM", line: "att" }, { pos: "CM", line: "att" }, { pos: "LM", line: "att" },
      { pos: "ST",  line: "st" }
    ]
  },
  {
    name: "4-3-2-1",
    image: "pers/Taktik/4-3-2-1.jpg",
    slots: [
      { pos: "GK",  line: "gk" },
      { pos: "RB",  line: "def" }, { pos: "CB", line: "def" }, { pos: "CB", line: "def" }, { pos: "LB", line: "def" },
      { pos: "CM",  line: "mid" }, { pos: "CM", line: "mid" }, { pos: "CM", line: "mid" },
      { pos: "CAM", line: "att" }, { pos: "CAM", line: "att" },
      { pos: "ST",  line: "st" }
    ]
  }
];

/* ═══════════════════════════════════════════════════════════════════
   3. LEVEL REWARDS CONFIGURATION (LVL 1 - 30)
═══════════════════════════════════════════════════════════════════ */
const LEVEL_REWARDS_CONFIG = [
  { level: 1,  type: 'coins', title: 'Старт тренера', desc: 'Добро пожаловать в VI Football!', icon: '⚽', value: 0 },
  { level: 2,  type: 'coins', title: '+1,500 VI Coins', desc: 'Бонус за 2-й уровень', icon: '💰', value: 1500 },
  { level: 3,  type: 'pack',  title: 'Бесплатный Silver Pack', desc: 'Серебряный пак (70–83 OVR)', icon: '📦', packType: 'silver' },
  { level: 4,  type: 'tp',    title: '+3 Очка тренировок (TP)', desc: 'Для прокачки игроков клуба', icon: '⚡', tp: 3 },
  { level: 5,  type: 'coins', title: '+3,000 VI Coins', desc: 'Бонус за 5-й уровень', icon: '💰', value: 3000 },
  { level: 6,  type: 'pack',  title: 'Бесплатный Gold Pack', desc: 'Золотой пак (80–88 OVR)', icon: '🎁', packType: 'gold' },
  { level: 7,  type: 'card_or_coins', title: 'GEMUA (90 GK)', desc: 'Эксклюзивный вратарь или 5 000 монет', icon: '🧤', cardId: 'gemua_90', fallbackCoins: 5000 },
  { level: 8,  type: 'tp',    title: '+5 Очков тренировок (TP)', desc: 'Пакет тренировочных очков', icon: '⚡', tp: 5 },
  { level: 9,  type: 'coins', title: '+6,000 VI Coins', desc: 'Бонус за 9-й уровень', icon: '💰', value: 6000 },
  { level: 10, type: 'guaranteed_card', title: '⭐ Гарантия 88+ OVR', desc: 'Элитная карта высшего класса', icon: '🌟', minRating: 88, milestone: true },
  { level: 11, type: 'coins', title: '+7,500 VI Coins', desc: 'Бонус за 11-й уровень', icon: '💰', value: 7500 },
  { level: 12, type: 'pack',  title: 'Бесплатный Gold Pack', desc: 'Золотой пак (80–88 OVR)', icon: '🎁', packType: 'gold' },
  { level: 13, type: 'tp',    title: '+5 Очков тренировок (TP)', desc: 'Усиление ключевых позиций', icon: '⚡', tp: 5 },
  { level: 14, type: 'coins', title: '+10,000 VI Coins', desc: 'Бонус за 14-й уровень', icon: '💰', value: 10000 },
  { level: 15, type: 'guaranteed_card', title: '💎 Гарантия 90+ OVR', desc: 'Топ-звезда мирового футбола', icon: '💎', minRating: 90, milestone: true },
  { level: 16, type: 'tp',    title: '+7 Очков тренировок (TP)', desc: 'Интенсивные командные сборы', icon: '⚡', tp: 7 },
  { level: 17, type: 'coins', title: '+12,000 VI Coins', desc: 'Бонус за 17-й уровень', icon: '💰', value: 12000 },
  { level: 18, type: 'pack',  title: 'Бесплатный Legend Pack', desc: 'Легендарный пак (86–96 OVR)', icon: '🔮', packType: 'legend' },
  { level: 19, type: 'coins', title: '+15,000 VI Coins', desc: 'Бонус топ-наставника', icon: '💰', value: 15000 },
  { level: 20, type: 'guaranteed_card', title: '👑 Секретная Легенда 92+', desc: 'Супер-легенда от 92 OVR', icon: '👑', minRating: 92, milestone: true },
  { level: 21, type: 'coins', title: '+18,000 VI Coins', desc: 'Бонус за 21-й уровень', icon: '💰', value: 18000 },
  { level: 22, type: 'tp',    title: '+10 Очков тренировок (TP)', desc: 'Большой тренировочный пакет', icon: '⚡', tp: 10 },
  { level: 23, type: 'coins', title: '+20,000 VI Coins', desc: 'Мастерский тренерский капитал', icon: '💰', value: 20000 },
  { level: 24, type: 'pack',  title: 'Бесплатный Matus Pack', desc: 'Ультра пак (90–99 OVR)', icon: '🔥', packType: 'matus' },
  { level: 25, type: 'final_card', title: '👑 ЭКСКЛЮЗИВ: KOMILZHONOV (120 OVR)', desc: 'Главный трофей игры: Величайший RM 120 OVR!', icon: '👑', cardId: 'komilzhonov_120', milestone: true },
  { level: 26, type: 'coins', title: '+22,000 VI Coins', desc: 'Бонус элитного клуба', icon: '💰', value: 22000 },
  { level: 27, type: 'tp',    title: '+10 Очков тренировок (TP)', desc: 'Мастерский уровень тренировок', icon: '⚡', tp: 10 },
  { level: 28, type: 'coins', title: '+25,000 VI Coins', desc: 'Бонус за 28-й уровень', icon: '💰', value: 25000 },
  { level: 29, type: 'pack',  title: 'Бесплатный Matus Pack', desc: 'Финальный разогрев перед триумфом', icon: '🔥', packType: 'matus' },
  { level: 30, type: 'champion_reward', title: '🏆 ТИТУЛ АБСОЛЮТНОГО ЧЕМПИОНА', desc: '+50,000 VI Coins + 15 TP', icon: '🏆', value: 50000, tp: 15, milestone: true }
];

/* ═══════════════════════════════════════════════════════════════════
   4. PERSISTENT SAVE SYSTEM (localStorage)
═══════════════════════════════════════════════════════════════════ */
const SAVE_KEY = 'vi_football_v5';

function defaultSave() {
  return {
    coins: 3000,
    xp: 0,
    level: 1,
    collection: {}, // playerId -> count
    claimedLevelRewards: [1],
    lastDailyGiftTime: 0,
    myClubFormation: '4-3-3',
    myClubSquad: [null, null, null, null, null, null, null, null, null, null, null],
    myClubBench: [null, null, null],
    myClubRoles: { captain: null, penalty: null, setPieces: null },
    myClubMatchesTogether: 0,
    myClubTrainingPoints: 5,
    playerUpgrades: {}, // cardId -> { pac: 0, sho: 0, pas: 0, def: 0, phy: 0 }
    playerTrainingData: {}, // playerId -> { points: 3, stats: { pac: 0, ... } }
    clubStats: {
      matches: 0,
      wins: 0,
      draws: 0,
      losses: 0,
      goalsFor: 0,
      goalsAgainst: 0,
      cleanSheets: 0,
      playerStats: {} // cardId -> { matches: 0, goals: 0, cleanSheets: 0 }
    },
    claimedClubQuests: [],
    tournaments: {
      pl: { stage: 0, won: false },
      laliga: { stage: 0, won: false },
      ucl: { stage: 0, won: false }
    },
    activeTournamentId: 'pl',
    trophies: [],
    trophyCounts: { pl: 0, laliga: 0, ucl: 0 }
  };
}

function loadSave() {
  try {
    const raw = localStorage.getItem(SAVE_KEY);
    if (!raw) return defaultSave();
    const data = JSON.parse(raw);
    const saveObj = Object.assign(defaultSave(), data);
    if (!Array.isArray(saveObj.claimedLevelRewards)) saveObj.claimedLevelRewards = [1];
    if (typeof saveObj.lastDailyGiftTime !== 'number') saveObj.lastDailyGiftTime = 0;
    if (!saveObj.myClubFormation) saveObj.myClubFormation = '4-3-3';
    if (!Array.isArray(saveObj.myClubSquad) || saveObj.myClubSquad.length !== 11) {
      saveObj.myClubSquad = [null, null, null, null, null, null, null, null, null, null, null];
    }
    if (!Array.isArray(saveObj.myClubBench) || saveObj.myClubBench.length !== 3) {
      saveObj.myClubBench = [null, null, null];
    }
    if (!saveObj.myClubRoles || typeof saveObj.myClubRoles !== 'object') {
      saveObj.myClubRoles = { captain: null, penalty: null, setPieces: null };
    }
    if (typeof saveObj.myClubMatchesTogether !== 'number') saveObj.myClubMatchesTogether = 0;
    if (typeof saveObj.myClubTrainingPoints !== 'number') {
      const rawTP = localStorage.getItem('myClubTrainingPoints');
      saveObj.myClubTrainingPoints = (rawTP !== null && !isNaN(Number(rawTP))) ? Number(rawTP) : 5;
    }
    if (!saveObj.playerUpgrades || typeof saveObj.playerUpgrades !== 'object') {
      saveObj.playerUpgrades = {};
    }
    if (!saveObj.playerTrainingData || typeof saveObj.playerTrainingData !== 'object') {
      saveObj.playerTrainingData = {};
    }
    if (!saveObj.clubStats || typeof saveObj.clubStats !== 'object') {
      saveObj.clubStats = {
        matches: 0, wins: 0, draws: 0, losses: 0, goalsFor: 0, goalsAgainst: 0, cleanSheets: 0, playerStats: {}
      };
    }
    if (!saveObj.clubStats.playerStats) saveObj.clubStats.playerStats = {};
    if (!Array.isArray(saveObj.claimedClubQuests)) saveObj.claimedClubQuests = [];
    if (!saveObj.tournaments || typeof saveObj.tournaments !== 'object') {
      saveObj.tournaments = {
        pl: { stage: 0, won: false },
        laliga: { stage: 0, won: false },
        ucl: { stage: 0, won: false }
      };
    }
    if (!Array.isArray(saveObj.trophies)) saveObj.trophies = [];
    if (!saveObj.trophyCounts || typeof saveObj.trophyCounts !== 'object') {
      saveObj.trophyCounts = { pl: 0, laliga: 0, ucl: 0 };
      saveObj.trophies.forEach(t => {
        if (saveObj.trophyCounts[t] !== undefined) saveObj.trophyCounts[t]++;
      });
    }
    if (!saveObj.activeTournamentId) saveObj.activeTournamentId = 'pl';
    return saveObj;
  } catch(e) {
    return defaultSave();
  }
}

let save = loadSave();

function writeSave() {
  try {
    localStorage.setItem(SAVE_KEY, JSON.stringify(save));
  } catch(e) {}
}

function calcLevel(xp) {
  // 100 XP per level, up to level 30
  return Math.min(30, Math.floor(xp / 100) + 1);
}

function getCurrentLvlXp(xp) {
  const lvl = calcLevel(xp);
  if (lvl >= 30) return 100;
  return xp % 100;
}

function updateTopBar() {
  const lvl = calcLevel(save.xp);
  save.level = lvl;
  const currentLvlXp = getCurrentLvlXp(save.xp);

  const tbLevel = document.getElementById('tbLevel');
  if (tbLevel) tbLevel.textContent = lvl;

  const tbXpFill = document.getElementById('tbXpFill');
  if (tbXpFill) tbXpFill.style.width = currentLvlXp + '%';

  const tbCoinVal = document.getElementById('tbCoinVal');
  if (tbCoinVal) tbCoinVal.textContent = save.coins.toLocaleString('ru-RU');

  const ownedCount = Object.keys(save.collection).filter(id => save.collection[id] > 0).length;
  const tbCardOwned = document.getElementById('tbCardOwned');
  if (tbCardOwned) tbCardOwned.textContent = ownedCount;

  const pct = Math.round((ownedCount / PLAYERS_DB.length) * 100);
  const menuCollPct = document.getElementById('menuCollPct');
  if (menuCollPct) menuCollPct.textContent = pct + '%';

  // My Club badge on main menu
  const menuMyClubBadge = document.getElementById('menuMyClubBadge');
  if (menuMyClubBadge) {
    menuMyClubBadge.textContent = `${ownedCount}/11`;
    if (ownedCount >= 11) {
      menuMyClubBadge.classList.add('ready');
    } else {
      menuMyClubBadge.classList.remove('ready');
    }
  }

  // Check for unclaimed level rewards
  const hasUnclaimed = LEVEL_REWARDS_CONFIG.some(r => r.level <= save.level && !save.claimedLevelRewards.includes(r.level));
  const rewardBadge = document.getElementById('tbRewardBadge');
  if (rewardBadge) {
    if (hasUnclaimed) rewardBadge.classList.remove('hidden');
    else rewardBadge.classList.add('hidden');
  }
}

/* ═══════════════════════════════════════════════════════════════════
   5. NAVIGATION & SCREEN MANAGEMENT
═══════════════════════════════════════════════════════════════════ */
const ALL_SCREENS = [
  'screenMenu',
  'screenStore',
  'screenReveal',
  'screenCollection',
  'screenFormation',
  'screenDraft',
  'screenMatch',
  'screenResult',
  'screenMyClub',
  'screenSimMatch'
];

function showScreen(screenId) {
  ALL_SCREENS.forEach(id => {
    const el = document.getElementById(id);
    if (el) {
      if (id === screenId) {
        el.classList.remove('hidden');
      } else {
        el.classList.add('hidden');
      }
    }
  });
  window.scrollTo(0, 0);

  if (screenId === 'screenStore') {
    updateDailyGiftUI();
  }
}

/* ═══════════════════════════════════════════════════════════════════
   6. VISUAL FX: PARTICLES & FLASH & TOAST
═══════════════════════════════════════════════════════════════════ */
const canvas = document.getElementById('particlesCanvas');
const ctx = canvas ? canvas.getContext('2d') : null;
let particles = [];
let animFrame = null;

function resizeCanvas() {
  if (!canvas) return;
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
}
window.addEventListener('resize', resizeCanvas);
resizeCanvas();

function spawnParticles(count) {
  if (!canvas) return;
  count = count || 100;
  const cx = window.innerWidth / 2, cy = window.innerHeight / 2;
  const colors = ['#f5c842','#ffaa00','#ffe680','#ffffff','#6c3fff','#00ff88','#5599ff'];
  for (let i = 0; i < count; i++) {
    const angle = Math.random() * Math.PI * 2;
    const speed = 4 + Math.random() * 8;
    particles.push({
      x: cx, y: cy,
      vx: Math.cos(angle) * speed,
      vy: Math.sin(angle) * speed - Math.random() * 4,
      r: 2.5 + Math.random() * 5,
      color: colors[Math.floor(Math.random() * colors.length)],
      alpha: 1,
      decay: 0.012 + Math.random() * 0.02
    });
  }
}

function animateParticles() {
  if (!ctx || !canvas) return;
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  particles = particles.filter(p => p.alpha > 0);
  if (!particles.length) {
    canvas.classList.remove('active');
    cancelAnimationFrame(animFrame);
    animFrame = null;
    return;
  }
  particles.forEach(p => {
    p.x += p.vx;
    p.y += p.vy;
    p.vy += 0.22;
    p.alpha -= p.decay;
    ctx.save();
    ctx.globalAlpha = Math.max(0, p.alpha);
    ctx.fillStyle = p.color;
    ctx.shadowColor = p.color;
    ctx.shadowBlur = 10;
    ctx.beginPath();
    ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
    ctx.fill();
    ctx.restore();
  });
  animFrame = requestAnimationFrame(animateParticles);
}

function burstParticles() {
  if (!canvas) return;
  canvas.classList.add('active');
  spawnParticles(110);
  if (!animFrame) animFrame = requestAnimationFrame(animateParticles);
}

const flashOverlay = document.getElementById('flashOverlay');
function triggerFlash() {
  if (!flashOverlay) return;
  flashOverlay.classList.remove('flash-active');
  void flashOverlay.offsetWidth;
  flashOverlay.classList.add('flash-active');
}

let toastTimer = null;
function showToast(msg) {
  const toast = document.getElementById('toast');
  if (!toast) return;
  toast.textContent = msg;
  toast.classList.add('show');
  clearTimeout(toastTimer);
  toastTimer = setTimeout(() => {
    toast.classList.remove('show');
  }, 2200);
}

/* ═══════════════════════════════════════════════════════════════════
   7. CARD RENDER HELPER (STRICT RULE: ONLY <img>, NO TEXT OVERLAY)
═══════════════════════════════════════════════════════════════════ */
function makeCardImg(player, extraClass) {
  const img = document.createElement('img');
  img.src = player.image;
  img.alt = player.name;
  img.className = extraClass || 'card-image';
  img.draggable = false;
  return img;
}

function getRandomItem(array) {
  if (!array || !array.length) return PLAYERS_DB[0];
  return array[Math.floor(Math.random() * array.length)];
}

/* ═══════════════════════════════════════════════════════════════════
   8. PACK AUDIO FX (WEB AUDIO SYNTHESIZER)
═══════════════════════════════════════════════════════════════════ */
let audioCtx = null;
function getAudioCtx() {
  if (!audioCtx) {
    try {
      const AC = window.AudioContext || window.webkitAudioContext;
      if (AC) audioCtx = new AC();
    } catch(e) {}
  }
  if (audioCtx && audioCtx.state === 'suspended') {
    audioCtx.resume();
  }
  return audioCtx;
}

function playTickSound() {
  try {
    const ctx = getAudioCtx();
    if (!ctx) return;
    const osc = ctx.createOscillator();
    const gain = ctx.createGain();
    osc.type = 'triangle';
    osc.frequency.setValueAtTime(560, ctx.currentTime);
    osc.frequency.exponentialRampToValueAtTime(220, ctx.currentTime + 0.035);
    gain.gain.setValueAtTime(0.08, ctx.currentTime);
    gain.gain.exponentialRampToValueAtTime(0.001, ctx.currentTime + 0.035);
    osc.connect(gain);
    gain.connect(ctx.destination);
    osc.start();
    osc.stop(ctx.currentTime + 0.04);
  } catch(e) {}
}

function playWalkoutSound(isTop) {
  try {
    const ctx = getAudioCtx();
    if (!ctx) return;
    const now = ctx.currentTime;
    const notes = isTop ? [392, 523.25, 659.25, 783.99, 1046.50] : [440, 554.37, 659.25];
    notes.forEach((freq, idx) => {
      const osc = ctx.createOscillator();
      const gain = ctx.createGain();
      osc.type = 'sine';
      osc.frequency.setValueAtTime(freq, now + idx * 0.08);
      gain.gain.setValueAtTime(0, now + idx * 0.08);
      gain.gain.linearRampToValueAtTime(0.12, now + idx * 0.08 + 0.02);
      gain.gain.exponentialRampToValueAtTime(0.001, now + idx * 0.08 + 0.38);
      osc.connect(gain);
      gain.connect(ctx.destination);
      osc.start(now + idx * 0.08);
      osc.stop(now + idx * 0.08 + 0.4);
    });
  } catch(e) {}
}

/* ═══════════════════════════════════════════════════════════════════
   8. FAIR RNG PACK PROBABILITIES & HARD FILTERS
   - Silver (500): 70–83 OVR (70–79: 85%, 80–83: 15%, 84+: 0%)
   - Gold (1500): 80–88 OVR (80–83: 65%, 84–86: 28%, 87–88: 7%, <80: 0%)
   - Legend (3000): 86–96 OVR (86–88: 60%, 89–92: 34%, 93–96: 6%, <86: 0%)
   - Matus (7000): 90–99 OVR (90–92: 55%, 93–96: 30%, 99 Matus: 15%, <90: 0%)
   - KOMILZHONOV 120 is strictly excluded from ALL packs (LVL 25 reward only)!
═══════════════════════════════════════════════════════════════════ */
function normalizePackType(packType) {
  if (!packType) return 'silver';
  const t = packType.toLowerCase();
  if (t === 'standard') return 'silver';
  if (t === 'pro') return 'gold';
  if (t === 'elite') return 'legend';
  return t;
}

function getPackImageSrc(packType) {
  const t = normalizePackType(packType);
  if (t === 'silver') return 'paki/silver_pack.png';
  if (t === 'gold') return 'paki/gold_pack.png';
  if (t === 'legend') return 'paki/legend_pack.png';
  if (t === 'matus') return 'paki/Matus_pack.png';
  return 'paki/silver_pack.png';
}

function getPackPool(packType) {
  const type = normalizePackType(packType);
  const validCards = PLAYERS_DB.filter(p => p.personId !== 'komilzhonov' && p.id !== 'komilzhonov_120');

  if (type === 'silver') {
    const pool = validCards.filter(p => p.rating >= 70 && p.rating <= 83);
    return pool.length ? pool : validCards.filter(p => p.rating <= 83);
  }
  if (type === 'gold') {
    const pool = validCards.filter(p => p.rating >= 80 && p.rating <= 88);
    return pool.length ? pool : validCards.filter(p => p.rating >= 80);
  }
  if (type === 'legend') {
    const pool = validCards.filter(p => p.rating >= 86 && p.rating <= 96 && p.personId !== 'matus');
    return pool.length ? pool : validCards.filter(p => p.rating >= 86);
  }
  if (type === 'matus') {
    const pool = validCards.filter(p => p.rating >= 90);
    return pool.length ? pool : validCards.filter(p => p.rating >= 88);
  }
  return validCards;
}

function rollPackCard(packType) {
  return rollPackPlayer(packType);
}

function rollPackPlayer(packType) {
  const type = normalizePackType(packType);
  // STRICTLY EXCLUDE KOMILZHONOV 120 FROM ALL PACKS!
  const validCards = PLAYERS_DB.filter(p => p.personId !== 'komilzhonov' && p.id !== 'komilzhonov_120');

  const rand = Math.random();

  if (type === 'silver') {
    // 1. Silver Pack: Pool 70–83 OVR. 84+ strictly chance = 0%.
    // 70–79 OVR: 85%, 80–83 OVR: 15%
    if (rand < 0.85) {
      const p70_79 = validCards.filter(p => p.rating >= 70 && p.rating <= 79);
      if (p70_79.length) return getRandomItem(p70_79);
    } else {
      const p80_83 = validCards.filter(p => p.rating >= 80 && p.rating <= 83);
      if (p80_83.length) return getRandomItem(p80_83);
    }
    const pool = validCards.filter(p => p.rating >= 70 && p.rating <= 83);
    if (pool.length) return getRandomItem(pool);
    return getRandomItem(validCards.filter(p => p.rating <= 83));
  }

  if (type === 'gold') {
    // 2. Gold Pack: Pool 80–88 OVR. <80 strictly excluded!
    // 80–83 OVR: 65%, 84–86 OVR: 28%, 87–88 OVR: 7%
    if (rand < 0.65) {
      const p80_83 = validCards.filter(p => p.rating >= 80 && p.rating <= 83);
      if (p80_83.length) return getRandomItem(p80_83);
    } else if (rand < 0.93) {
      const p84_86 = validCards.filter(p => p.rating >= 84 && p.rating <= 86);
      if (p84_86.length) return getRandomItem(p84_86);
    } else {
      const p87_88 = validCards.filter(p => p.rating >= 87 && p.rating <= 88);
      if (p87_88.length) return getRandomItem(p87_88);
    }
    const pool = validCards.filter(p => p.rating >= 80 && p.rating <= 88);
    if (pool.length) return getRandomItem(pool);
  }

  if (type === 'legend') {
    // 3. Legend Pack: Pool 86–96 OVR. <86 strictly excluded!
    // 86–88 OVR: 60%, 89–92 OVR: 34%, 93–96 OVR: 6% (excludes Matus 99 & Komilzhonov 120)
    if (rand < 0.60) {
      const p86_88 = validCards.filter(p => p.rating >= 86 && p.rating <= 88);
      if (p86_88.length) return getRandomItem(p86_88);
    } else if (rand < 0.94) {
      const p89_92 = validCards.filter(p => p.rating >= 89 && p.rating <= 92);
      if (p89_92.length) return getRandomItem(p89_92);
    } else {
      const p93_96 = validCards.filter(p => p.rating >= 93 && p.rating <= 96 && p.personId !== 'matus');
      if (p93_96.length) return getRandomItem(p93_96);
    }
    const pool = validCards.filter(p => p.rating >= 86 && p.rating <= 96 && p.personId !== 'matus');
    if (pool.length) return getRandomItem(pool);
  }

  if (type === 'matus') {
    // 4. Matus Pack: Pool 90–99 OVR. <90 strictly excluded (0%)!
    // 90–92 OVR: 55%, 93–96 OVR: 30%, 99 OVR (MATUS 99): 15%
    if (rand < 0.55) {
      const p90_92 = validCards.filter(p => p.rating >= 90 && p.rating <= 92);
      if (p90_92.length) return getRandomItem(p90_92);
    } else if (rand < 0.85) {
      const p93_96 = validCards.filter(p => p.rating >= 93 && p.rating <= 96 && p.rating !== 99);
      if (p93_96.length) return getRandomItem(p93_96);
    } else {
      const p99 = validCards.filter(p => p.rating === 99);
      if (p99.length) return getRandomItem(p99);
    }
    const pool = validCards.filter(p => p.rating >= 90);
    if (pool.length) return getRandomItem(pool);
  }

  // Safety fallback: nearest cards, strictly excluding Komilzhonov
  const fallback = validCards.filter(p => p.rating >= 70 && p.rating <= 83);
  return getRandomItem(fallback.length ? fallback : validCards);
}

let lastOpenedPackType = 'silver';
let lastOpenedPackCost = 500;
let packAnimTimers = [];
let isPackOpeningRunning = false;
let currentWonPlayer = null;

function clearAllPackTimers() {
  packAnimTimers.forEach(t => clearTimeout(t));
  packAnimTimers = [];
}

function addToCollection(player) {
  save.collection[player.id] = (save.collection[player.id] || 0) + 1;
  save.xp += (player.rarity === 'ultra_legend' ? 60 : player.rating >= 90 ? 40 : 25);
  writeSave();
  updateTopBar();
}

function openPack(packType, cost) {
  cost = cost || 0;
  const normType = normalizePackType(packType);
  if (cost > 0) {
    if (save.coins < cost) {
      showToast('Недостаточно VI Coins!');
      return;
    }
    save.coins -= cost;
    lastOpenedPackCost = cost;
  }
  lastOpenedPackType = normType;
  writeSave();
  updateTopBar();

  const wonPlayer = rollPackPlayer(normType);
  startPackOpeningSequence(normType, wonPlayer);
}

function openPackWithCard(player, sourceTitle) {
  startPackOpeningSequence('matus', player, sourceTitle);
}

function startPackOpeningSequence(packType, wonPlayer, customTitle) {
  clearAllPackTimers();
  isPackOpeningRunning = true;
  currentWonPlayer = wonPlayer;

  const btnSkip = document.getElementById('btnSkipPackAnimation');
  const phasePack = document.getElementById('packPhasePack');
  const phaseRoulette = document.getElementById('packPhaseRoulette');
  const phaseWalkout = document.getElementById('packPhaseWalkout');
  const revealActions = document.getElementById('revealActions');
  const revealLabel = document.getElementById('revealLabel');
  const packImg = document.getElementById('packAnimatedImg');
  const packShaker = document.getElementById('packShakerWrap');
  const aura = document.getElementById('packGlowAura');

  showScreen('screenReveal');

  if (revealLabel) revealLabel.textContent = customTitle || 'ОТКРЫТИЕ ПАКА';
  if (btnSkip) btnSkip.classList.remove('hidden');
  if (revealActions) revealActions.classList.add('hidden');

  // Set phase visibility
  if (phasePack) phasePack.classList.remove('hidden');
  if (phaseRoulette) phaseRoulette.classList.add('hidden');
  if (phaseWalkout) phaseWalkout.classList.add('hidden');

  // Phase 1: Set pack image & rarity aura
  const imgSrc = getPackImageSrc(packType);
  if (packImg) packImg.src = imgSrc;

  if (aura) {
    aura.className = 'pack-glow-aura';
    const norm = normalizePackType(packType);
    if (norm === 'silver') aura.classList.add('aura-silver');
    else if (norm === 'gold') aura.classList.add('aura-gold');
    else if (norm === 'legend') aura.classList.add('aura-legend');
    else if (norm === 'matus') aura.classList.add('aura-matus');
  }

  // Phase 1 shaking (0.6s)
  if (packShaker) {
    packShaker.classList.remove('shaking');
    void packShaker.offsetWidth;
    packShaker.classList.add('shaking');
  }

  // Audio start
  getAudioCtx();

  // Schedule Phase 2 after 0.6s
  const timerP1 = setTimeout(() => {
    triggerFlash();
    playTickSound();
    startRoulettePhase(packType, wonPlayer);
  }, 600);
  packAnimTimers.push(timerP1);
}

function startRoulettePhase(packType, wonPlayer) {
  const phasePack = document.getElementById('packPhasePack');
  const phaseRoulette = document.getElementById('packPhaseRoulette');
  const cardSlot = document.getElementById('rouletteCardSlot');
  const tickerLabel = document.getElementById('rouletteTickerLabel');

  if (phasePack) phasePack.classList.add('hidden');
  if (phaseRoulette) phaseRoulette.classList.remove('hidden');

  const pool = getPackPool(packType);
  // Delays with cubic-bezier-like deceleration:
  // Starts ultra fast at 60ms, then smoothly slows down to 120ms -> 220ms -> 400ms -> 550ms
  const delays = [
    60, 60, 60, 60, 60, 60, 60, 60, 60, 60, 60, 60,
    75, 90, 110, 135, 170, 210, 260, 320, 400, 520
  ];

  let step = 0;
  function nextTick() {
    if (!isPackOpeningRunning) return;

    if (step >= delays.length) {
      // Finished roulette! Land on wonPlayer in Phase 3
      finishPackOpening(wonPlayer);
      return;
    }

    const isLast = (step === delays.length - 1);
    const candidate = isLast ? wonPlayer : getRandomItem(pool);

    if (cardSlot) {
      cardSlot.innerHTML = '';
      const img = makeCardImg(candidate, 'roulette-card-img' + (step < 14 ? ' motion-blur' : ''));
      cardSlot.appendChild(img);
    }

    if (tickerLabel) {
      tickerLabel.textContent = isLast ? 'ФИНАЛЬНЫЙ ДРОП!' : 'УДАЧА ОПРЕДЕЛЯЕТСЯ...';
    }

    playTickSound();
    if (navigator.vibrate) {
      try { navigator.vibrate(10); } catch(e) {}
    }

    const currentDelay = delays[step];
    step++;

    const t = setTimeout(nextTick, currentDelay);
    packAnimTimers.push(t);
  }

  nextTick();
}

function skipPackAnimation() {
  if (!isPackOpeningRunning || !currentWonPlayer) return;
  clearAllPackTimers();
  finishPackOpening(currentWonPlayer);
}

function finishPackOpening(wonPlayer) {
  clearAllPackTimers();
  isPackOpeningRunning = false;

  const btnSkip = document.getElementById('btnSkipPackAnimation');
  const phasePack = document.getElementById('packPhasePack');
  const phaseRoulette = document.getElementById('packPhaseRoulette');
  const phaseWalkout = document.getElementById('packPhaseWalkout');
  const revealActions = document.getElementById('revealActions');
  const revealLabel = document.getElementById('revealLabel');

  if (btnSkip) btnSkip.classList.add('hidden');
  if (phasePack) phasePack.classList.add('hidden');
  if (phaseRoulette) phaseRoulette.classList.add('hidden');
  if (phaseWalkout) phaseWalkout.classList.remove('hidden');
  if (revealActions) revealActions.classList.remove('hidden');

  const cardWrap = document.getElementById('walkoutCardWrap');
  const playerName = document.getElementById('walkoutPlayerName');
  const playerMeta = document.getElementById('walkoutPlayerMeta');
  const statusBadge = document.getElementById('walkoutStatusBadge');

  const isDuplicate = Boolean(save.collection[wonPlayer.id] && save.collection[wonPlayer.id] > 0);
  const dupeCoins = wonPlayer.rating >= 95 ? 5000 : wonPlayer.rating >= 90 ? 2500 : wonPlayer.rating >= 81 ? 800 : wonPlayer.rating >= 71 ? 350 : 150;

  // Render card image (strict rule: clean <img>)
  if (cardWrap) {
    cardWrap.innerHTML = '';
    const img = makeCardImg(wonPlayer, 'walkout-card-img');
    cardWrap.appendChild(img);
  }

  // Titles and labels
  if (revealLabel) {
    if (wonPlayer.rarity === 'ultra_legend') revealLabel.textContent = '🏆 ULTRA ЛЕГЕНДА!';
    else if (wonPlayer.rating >= 90) revealLabel.textContent = '⭐ ТОП ЛЕГЕНДА!';
    else revealLabel.textContent = '🎉 ПОЗДРАВЛЯЕМ!';
  }

  if (playerName) playerName.textContent = wonPlayer.name;
  if (playerMeta) {
    playerMeta.textContent = `${wonPlayer.position} • ${wonPlayer.rating} OVR • ${wonPlayer.country}`;
  }

  if (statusBadge) {
    statusBadge.className = 'walkout-status-badge';
    if (!isDuplicate) {
      statusBadge.classList.add('status-new');
      statusBadge.textContent = '✨ НОВАЯ КАРТА В КОЛЛЕКЦИИ!';
    } else {
      statusBadge.classList.add('status-dupe');
      statusBadge.textContent = `💰 ДУБЛИКАТ (+${dupeCoins.toLocaleString('ru-RU')} МОНЕТ)`;
      save.coins += dupeCoins;
    }
  }

  // Add to player's collection
  addToCollection(wonPlayer);

  // FX: flash, sound, particles
  triggerFlash();
  burstParticles();
  playWalkoutSound(wonPlayer.rating >= 90);
}

// Store pack click delegation
const storeGrid = document.getElementById('storeGrid');
if (storeGrid) {
  storeGrid.addEventListener('click', (e) => {
    const btn = e.target.closest('.store-pack__btn') || e.target.closest('.store-pack');
    if (!btn) return;
    const packEl = btn.closest('.store-pack');
    if (!packEl) return;
    const packType = packEl.dataset.pack;
    const costMap = {
      silver: 500, standard: 500,
      gold: 1500, pro: 1500,
      legend: 3000, elite: 3000,
      matus: 7000
    };
    const cost = costMap[packType] || 500;
    openPack(packType, cost);
  });
}

// Skip pack opening button
const btnSkipPackAnimation = document.getElementById('btnSkipPackAnimation');
if (btnSkipPackAnimation) {
  btnSkipPackAnimation.addEventListener('click', skipPackAnimation);
}

// Claim pack card button
const btnClaimPackCard = document.getElementById('btnClaimPackCard');
if (btnClaimPackCard) {
  btnClaimPackCard.addEventListener('click', () => {
    burstParticles();
    showToast('Карта сохранена в коллекции!');
    showScreen('screenStore');
  });
}

// Reveal action buttons
const btnOpenAnother = document.getElementById('btnOpenAnother');
if (btnOpenAnother) {
  btnOpenAnother.addEventListener('click', () => {
    openPack(lastOpenedPackType, lastOpenedPackCost);
  });
}

const btnRevealToMenu = document.getElementById('btnRevealToMenu');
if (btnRevealToMenu) {
  btnRevealToMenu.addEventListener('click', () => {
    showScreen('screenMenu');
  });
}

const btnBackFromStore = document.getElementById('btnBackFromStore');
if (btnBackFromStore) {
  btnBackFromStore.addEventListener('click', () => {
    showScreen('screenMenu');
  });
}

/* ═══════════════════════════════════════════════════════════════════
   9. DAILY GIFT (ЕЖЕДНЕВНЫЙ ПОДАРОК)
═══════════════════════════════════════════════════════════════════ */
function updateDailyGiftUI() {
  const btn = document.getElementById('btnClaimDaily');
  const sub = document.getElementById('dailyGiftSub');
  if (!btn) return;

  const now = Date.now();
  const lastTime = save.lastDailyGiftTime || 0;
  const cooldown = 24 * 60 * 60 * 1000;
  const diff = now - lastTime;

  if (diff >= cooldown) {
    btn.disabled = false;
    btn.textContent = 'Забрать';
    if (sub) sub.textContent = 'Готов к получению! 500 монет или бесплатный пак';
  } else {
    btn.disabled = true;
    const remaining = cooldown - diff;
    const hours = Math.floor(remaining / (1000 * 60 * 60));
    const mins = Math.floor((remaining % (1000 * 60 * 60)) / (1000 * 60));
    btn.textContent = `Через ${hours}ч ${mins}м`;
    if (sub) sub.textContent = 'Следующий подарок доступен через 24 часа';
  }
}

const btnClaimDaily = document.getElementById('btnClaimDaily');
if (btnClaimDaily) {
  btnClaimDaily.addEventListener('click', () => {
    const now = Date.now();
    const lastTime = save.lastDailyGiftTime || 0;
    const cooldown = 24 * 60 * 60 * 1000;
    if (now - lastTime < cooldown) {
      showToast('Подарок ещё не готов!');
      return;
    }

    save.lastDailyGiftTime = now;
    const isCoins = Math.random() < 0.5;
    if (isCoins) {
      save.coins += 500;
      writeSave();
      updateTopBar();
      updateDailyGiftUI();
      burstParticles();
      showToast('🎁 Ежедневный подарок: +500 VI Coins!');
    } else {
      writeSave();
      updateTopBar();
      updateDailyGiftUI();
      openPack('standard', 0);
      showToast('🎁 Ежедневный подарок: Бесплатный Standard Pack!');
    }
  });
}

/* ═══════════════════════════════════════════════════════════════════
   10. LEVEL REWARDS MODAL (ДОРОГА НАГРАД)
═══════════════════════════════════════════════════════════════════ */
function renderLevelRewardsModal() {
  const track = document.getElementById('rewardsTrack');
  if (!track) return;
  track.innerHTML = '';

  const currentLevel = save.level;
  const claimedList = save.claimedLevelRewards || [1];

  LEVEL_REWARDS_CONFIG.forEach(tier => {
    const isClaimed = claimedList.includes(tier.level);
    const isReached = currentLevel >= tier.level;
    const isReady = isReached && !isClaimed;
    const isMilestone = [10, 15, 20, 25, 30].includes(tier.level);
    const isFinal = tier.level === 30 || tier.level === 25;

    const el = document.createElement('div');
    el.className = 'reward-tier' +
      (isReady ? ' active' : '') +
      (isClaimed ? ' claimed' : '') +
      (isMilestone ? ' milestone' : '') +
      (isFinal ? ' final' : '');
    el.dataset.lvl = tier.level;

    let btnHtml;
    if (isClaimed) {
      btnHtml = `<button class="reward-tier__btn claimed" disabled>Получено ✓</button>`;
    } else if (isReady) {
      btnHtml = `<button class="reward-tier__btn ready" data-lvl="${tier.level}">Забрать</button>`;
    } else {
      btnHtml = `<button class="reward-tier__btn locked" disabled>🔒 LVL ${tier.level}</button>`;
    }

    el.innerHTML = `
      <div class="reward-tier__lvl">LVL<br><b>${tier.level}</b></div>
      <div class="reward-tier__icon">${tier.icon}</div>
      <div class="reward-tier__info">
        <div class="reward-tier__title">${tier.title}</div>
        <div class="reward-tier__desc">${tier.desc}</div>
      </div>
      ${btnHtml}
    `;

    track.appendChild(el);
  });

  // Smooth vertical scroll to first unclaimed / ready tier or current level
  setTimeout(() => {
    const targetTier = track.querySelector('.reward-tier.active') ||
                       track.querySelector(`.reward-tier[data-lvl="${currentLevel}"]`) ||
                       track.querySelector('.reward-tier:not(.claimed)');
    if (targetTier) {
      targetTier.scrollIntoView({ behavior: 'smooth', block: 'center' });
    }
  }, 60);
}

function claimLevelReward(lvl) {
  const tier = LEVEL_REWARDS_CONFIG.find(r => r.level === lvl);
  if (!tier) return;
  if (save.level < lvl) {
    showToast('Уровень ещё не достигнут!');
    return;
  }
  if (!save.claimedLevelRewards) save.claimedLevelRewards = [1];
  if (save.claimedLevelRewards.includes(lvl)) {
    showToast('Награда уже получена!');
    return;
  }

  save.claimedLevelRewards.push(lvl);

  const modal = document.getElementById('modalLevelRewards');
  if (modal) modal.classList.add('hidden');

  if (tier.type === 'coins') {
    save.coins += tier.value;
    burstParticles();
    showToast(`Получено +${tier.value.toLocaleString('ru-RU')} VI Coins!`);
    writeSave();
    updateTopBar();
  } else if (tier.type === 'tp') {
    save.myClubTrainingPoints = (save.myClubTrainingPoints || 0) + tier.tp;
    const all = getAllPlayerTrainingData();
    const squad = (save.myClubSquad || []).filter(Boolean);
    squad.forEach(pid => {
      if (!all[pid]) all[pid] = { points: 0, stats: { pac: 0, sho: 0, pas: 0, def: 0, phy: 0 } };
      all[pid].points = (all[pid].points || 0) + tier.tp;
    });
    saveAllPlayerTrainingData(all);
    if (typeof updateTrainingHubBadge === 'function') updateTrainingHubBadge();
    burstParticles();
    showToast(`⚡ Получено +${tier.tp} TP (Очков тренировок)!`);
    writeSave();
    updateTopBar();
  } else if (tier.type === 'pack') {
    writeSave();
    updateTopBar();
    openPack(tier.packType, 0); // Free pack opening with 3D reveal roulette!
  } else if (tier.type === 'guaranteed_card') {
    const candidates = PLAYERS_DB.filter(p => p.rating >= tier.minRating && p.personId !== 'komilzhonov' && p.id !== 'komilzhonov_120');
    const card = getRandomItem(candidates.length ? candidates : PLAYERS_DB);
    writeSave();
    updateTopBar();
    openPackWithCard(card, tier.title);
  } else if (tier.type === 'card_or_coins') {
    if (!save.collection[tier.cardId]) {
      const card = PLAYERS_DB.find(p => p.id === tier.cardId) || PLAYERS_DB[0];
      writeSave();
      updateTopBar();
      openPackWithCard(card, 'ЭКСКЛЮЗИВ: GEMUA 90');
    } else {
      save.coins += tier.fallbackCoins;
      burstParticles();
      showToast(`+${tier.fallbackCoins.toLocaleString('ru-RU')} монет за дубликат Gemua!`);
      writeSave();
      updateTopBar();
    }
  } else if (tier.type === 'final_card') {
    const card = PLAYERS_DB.find(p => p.id === tier.cardId) || PLAYERS_DB[0];
    writeSave();
    updateTopBar();
    openPackWithCard(card, '👑 ГЛАВНЫЙ ТРОФЕЙ: KOMILZHONOV 120!');
  } else if (tier.type === 'champion_reward') {
    save.coins += tier.value;
    save.myClubTrainingPoints = (save.myClubTrainingPoints || 0) + tier.tp;
    const all = getAllPlayerTrainingData();
    const squad = (save.myClubSquad || []).filter(Boolean);
    squad.forEach(pid => {
      if (!all[pid]) all[pid] = { points: 0, stats: { pac: 0, sho: 0, pas: 0, def: 0, phy: 0 } };
      all[pid].points = (all[pid].points || 0) + tier.tp;
    });
    saveAllPlayerTrainingData(all);
    if (typeof updateTrainingHubBadge === 'function') updateTrainingHubBadge();
    burstParticles();
    triggerFlash();
    showToast('🏆 ВЫ АБСОЛЮТНЫЙ ЧЕМПИОН! +50,000 VI Coins и +15 TP начислены!');
    writeSave();
    updateTopBar();
  }
}

const btnOpenLevelRewards = document.getElementById('btnOpenLevelRewards');
if (btnOpenLevelRewards) {
  btnOpenLevelRewards.addEventListener('click', () => {
    renderLevelRewardsModal();
    const modal = document.getElementById('modalLevelRewards');
    if (modal) modal.classList.remove('hidden');
  });
}

const btnCloseLevelRewards = document.getElementById('btnCloseLevelRewards');
if (btnCloseLevelRewards) {
  btnCloseLevelRewards.addEventListener('click', () => {
    const modal = document.getElementById('modalLevelRewards');
    if (modal) modal.classList.add('hidden');
  });
}

const rewardsTrack = document.getElementById('rewardsTrack');
if (rewardsTrack) {
  rewardsTrack.addEventListener('click', (e) => {
    const btn = e.target.closest('.reward-tier__btn.ready');
    if (!btn) return;
    const lvl = parseInt(btn.dataset.lvl, 10);
    claimLevelReward(lvl);
  });
}

/* ═══════════════════════════════════════════════════════════════════
   11. MY CARDS (Club Collection, Selling Duplicates & Nations Progress)
═══════════════════════════════════════════════════════════════════ */
function rarityBadgeText(r) {
  return r === 'ultra_legend' ? 'Ultra' : 'Legend';
}

function getCountryFlag(code) {
  if (code === 'ABH') {
    return `<img src="pers/flags/abh.svg" alt="ABH" class="flag-icon country-flag" style="width: 20px; height: 14px; vertical-align: middle; border-radius: 2px; object-fit: cover; display: inline-block;">`;
  }
  const flagMap = {
    UZB: '🇺🇿',
    RUS: '🇷🇺',
    KAZ: '🇰🇿',
    SLV: '🇸🇻',
    NIC: '🇳🇮',
    TJK: '🇹🇯'
  };
  return flagMap[code] || '⚽';
}

function renderNationsProgress() {
  const container = document.getElementById('nationsProgress');
  if (!container) return;
  container.innerHTML = '';

  const NATION_NAMES = {
    UZB: { name: 'Узбекистан', flag: getCountryFlag('UZB') },
    RUS: { name: 'Россия', flag: getCountryFlag('RUS') },
    KAZ: { name: 'Казахстан', flag: getCountryFlag('KAZ') },
    ABH: { name: 'Абхазия', flag: getCountryFlag('ABH') },
    SLV: { name: 'Сальвадор', flag: getCountryFlag('SLV') },
    NIC: { name: 'Никарагуа', flag: getCountryFlag('NIC') },
    TJK: { name: 'Таджикистан', flag: getCountryFlag('TJK') }
  };

  const nationStats = {};
  PLAYERS_DB.forEach(p => {
    if (!nationStats[p.country]) {
      nationStats[p.country] = { total: 0, owned: 0 };
    }
    nationStats[p.country].total++;
    if (save.collection[p.id] > 0) {
      nationStats[p.country].owned++;
    }
  });

  Object.keys(nationStats).sort((a, b) => nationStats[b].total - nationStats[a].total).forEach(c => {
    const stat = nationStats[c];
    const info = NATION_NAMES[c] || { name: c, flag: '⚽' };
    const pct = Math.round((stat.owned / stat.total) * 100);

    const chip = document.createElement('div');
    chip.className = 'nation-chip';
    chip.innerHTML = `
      <div class="nation-chip__header">
        <span class="nation-chip__name">${info.flag} ${c}</span>
        <span class="nation-chip__count">${stat.owned}/${stat.total}</span>
      </div>
      <div class="nation-chip__bar">
        <div class="nation-chip__fill" style="width:${pct}%"></div>
      </div>
    `;
    container.appendChild(chip);
  });
}

let currentCollectionFilter = 'all';

function renderCollectionFilters() {
  const bar = document.getElementById('collectionFiltersBar');
  if (!bar) return;
  bar.innerHTML = '';

  const filterTabs = [
    { key: 'all', label: 'ВСЕ' },
    { key: '1 kurs', label: '1 КУРС' },
    { key: '2 kurs', label: '2 КУРС' },
    { key: '3 kurs', label: '3 КУРС' },
    { key: '4 kurs', label: '4 КУРС' },
    { key: 'Legend', label: 'LEGEND' },
    { key: 'Ultra legend', label: 'ULTRA LEGEND' }
  ];

  filterTabs.forEach(tab => {
    let owned = 0;
    let total = 0;

    if (tab.key === 'all') {
      total = PLAYERS_DB.length;
      owned = PLAYERS_DB.filter(p => (save.collection[p.id] || 0) > 0).length;
    } else {
      const cards = PLAYERS_DB.filter(p => getPlayerCourse(p) === tab.key);
      total = cards.length;
      owned = cards.filter(p => (save.collection[p.id] || 0) > 0).length;
    }

    const btn = document.createElement('button');
    btn.type = 'button';
    const isActive = currentCollectionFilter === tab.key;
    btn.className = 'coll-filter-btn' + (isActive ? ' active' : '') + (total === 0 ? ' empty-course' : '');
    btn.innerHTML = `<span>${tab.label}</span><span class="coll-filter-count">${owned}/${total}</span>`;

    btn.onclick = () => {
      currentCollectionFilter = tab.key;
      buildCollectionGrid();
    };

    bar.appendChild(btn);
  });
}

function buildCollectionGrid() {
  const grid = document.getElementById('collectionGrid');
  const countEl = document.getElementById('collectionCount');
  if (!grid) return;
  grid.innerHTML = '';

  renderNationsProgress();
  renderCollectionFilters();

  const totalOwned = PLAYERS_DB.filter(p => (save.collection[p.id] || 0) > 0).length;

  // Filter by selected course
  const filtered = PLAYERS_DB.filter(player => {
    if (currentCollectionFilter === 'all') return true;
    return getPlayerCourse(player) === currentCollectionFilter;
  });

  if (!filtered.length) {
    grid.innerHTML = `
      <div style="grid-column: 1/-1; text-align: center; color: var(--silver); padding: 36px 14px; font-family: var(--ui);">
        <div style="font-size: 2rem; margin-bottom: 8px;">📁</div>
        <div style="font-weight: 800; font-size: 1rem; color: #fff;">В категории «${getCourseDisplayName(currentCollectionFilter)}» пока 0 карточек</div>
        <div style="font-size: 0.76rem; color: var(--dim); margin-top: 6px;">
          Карточки этого курса появятся в игре, как только файлы будут добавлены в папку <b>pers/${currentCollectionFilter}/</b>!
        </div>
      </div>
    `;
    if (countEl) {
      countEl.textContent = `${totalOwned} / ${PLAYERS_DB.length} карт собрано (${Math.round((totalOwned / PLAYERS_DB.length) * 100)}%)`;
    }
    return;
  }

  // Sort: Ultra Legend first, then by rating desc
  const sorted = filtered.slice().sort((a, b) => {
    if (a.rarity === 'ultra_legend' && b.rarity !== 'ultra_legend') return -1;
    if (b.rarity === 'ultra_legend' && a.rarity !== 'ultra_legend') return 1;
    return b.rating - a.rating;
  });

  sorted.forEach(player => {
    const copies = save.collection[player.id] || 0;

    const card = document.createElement('div');
    card.className = 'coll-card' + (copies === 0 ? ' coll-card--locked' : '');

    // Rarity badge
    const badge = document.createElement('div');
    badge.className = 'coll-card__rarity rarity-' + player.rarity;
    badge.textContent = rarityBadgeText(player.rarity);
    card.appendChild(badge);

    // Image wrap
    const imgWrap = document.createElement('div');
    imgWrap.className = 'coll-card__img-wrap';

    const img = makeCardImg(player, 'coll-card__img');
    imgWrap.appendChild(img);

    // Course badge
    const crsBadge = document.createElement('div');
    crsBadge.className = 'coll-card__course-badge';
    crsBadge.textContent = getCourseDisplayName(getPlayerCourse(player));
    imgWrap.appendChild(crsBadge);

    if (copies === 0) {
      const lock = document.createElement('div');
      lock.className = 'coll-card__lock';
      lock.textContent = '🔒';
      imgWrap.appendChild(lock);
    }

    if (copies >= 2) {
      const dup = document.createElement('div');
      dup.className = 'coll-card__dup';
      dup.textContent = 'x' + copies;
      imgWrap.appendChild(dup);
    }

    card.appendChild(imgWrap);

    // Footer info
    const body = document.createElement('div');
    body.className = 'coll-card__body';

    const name = document.createElement('div');
    name.className = 'coll-card__name';
    name.textContent = player.name;

    const meta = document.createElement('div');
    meta.className = 'coll-card__meta';

    const rating = document.createElement('div');
    rating.className = 'coll-card__rating';
    rating.textContent = player.rating;

    const pos = document.createElement('div');
    pos.className = 'coll-card__pos';
    pos.textContent = player.position;

    const flag = document.createElement('span');
    flag.className = 'coll-card__flag';
    flag.innerHTML = getCountryFlag(player.country);

    meta.appendChild(rating);
    meta.appendChild(pos);
    meta.appendChild(flag);
    body.appendChild(name);
    body.appendChild(meta);
    card.appendChild(body);

    grid.appendChild(card);
  });

  if (countEl) {
    countEl.textContent = `${totalOwned} / ${PLAYERS_DB.length} карт собрано (${Math.round((totalOwned / PLAYERS_DB.length) * 100)}%)`;
  }
}

/**
 * Alias for buildCollectionGrid()
 */
function renderCollection() {
  buildCollectionGrid();
}

const btnBackFromCollection = document.getElementById('btnBackFromCollection');
if (btnBackFromCollection) {
  btnBackFromCollection.addEventListener('click', () => {
    showScreen('screenMenu');
  });
}

const btnSellDupes = document.getElementById('btnSellDupes');
if (btnSellDupes) {
  btnSellDupes.addEventListener('click', () => {
    let earned = 0;
    let soldCount = 0;

    PLAYERS_DB.forEach(player => {
      const copies = save.collection[player.id] || 0;
      if (copies > 1) {
        const dupes = copies - 1;
        const price = player.rating >= 95 ? 5000 : player.rating >= 90 ? 2500 : player.rating >= 81 ? 800 : player.rating >= 71 ? 350 : 150;
        earned += dupes * price;
        soldCount += dupes;
        save.collection[player.id] = 1;
      }
    });

    if (soldCount === 0) {
      showToast('Дубликатов нет');
      return;
    }

    save.coins += earned;
    writeSave();
    updateTopBar();
    buildCollectionGrid();
    burstParticles();
    showToast(`Продано дублей: ${soldCount} (+${earned.toLocaleString('ru-RU')} монет)!`);
  });
}

/* ═══════════════════════════════════════════════════════════════════
   12. FORMATION SELECTION
═══════════════════════════════════════════════════════════════════ */
let currentFormation = null;
let draftSlots = []; // array of { slotDef, player: null, chem: 0 }
let activeSlotIndex = -1;

function buildFormationPicker() {
  const grid = document.getElementById('formationGrid');
  if (!grid) return;
  grid.innerHTML = '';
  const list = typeof DRAFT_FORMATIONS !== 'undefined' ? DRAFT_FORMATIONS : [];
  list.forEach(f => {
    const card = document.createElement('div');
    card.className = 'formation-card';

    const img = document.createElement('img');
    img.src = f.image;
    img.alt = f.name;
    img.className = 'formation-card__img';
    img.draggable = false;

    const name = document.createElement('div');
    name.className = 'formation-card__name';
    name.textContent = f.name;

    card.appendChild(img);
    card.appendChild(name);

    card.addEventListener('click', () => {
      startDraft(f);
    });

    grid.appendChild(card);
  });
}

const btnBackFromFormation = document.getElementById('btnBackFromFormation');
if (btnBackFromFormation) {
  btnBackFromFormation.addEventListener('click', () => {
    showScreen('screenMenu');
  });
}

/* ═══════════════════════════════════════════════════════════════════
   13. DRAFT FIELD & CHEMISTRY CALCULATION
═══════════════════════════════════════════════════════════════════ */
function startDraft(formation) {
  currentFormation = formation;
  draftSlots = formation.slots.map(s => ({ slotDef: s, player: null, chem: 0 }));
  renderDraftField();
  showScreen('screenDraft');
}

function posToLine(pos) {
  if (pos === 'GK') return 'gk';
  if (['CB', 'RB', 'LB', 'RWB', 'LWB'].indexOf(pos) >= 0) return 'def';
  if (['CM', 'CDM', 'CAM', 'RM', 'LM', 'DM'].indexOf(pos) >= 0) return 'mid';
  if (['RW', 'LW', 'CF'].indexOf(pos) >= 0) return 'att';
  if (pos === 'ST') return 'st';
  return 'mid';
}

function recalcChemistry() {
  const filledPlayers = draftSlots.filter(s => s.player).map(s => s.player);
  const countryCounts = {};
  filledPlayers.forEach(p => {
    countryCounts[p.country] = (countryCounts[p.country] || 0) + 1;
  });

  draftSlots.forEach(ds => {
    if (!ds.player) {
      ds.chem = 0;
      return;
    }
    const p = ds.player;
    let chem = 0;

    // +1 position or matching line
    const slotPos = ds.slotDef.pos;
    const slotLine = ds.slotDef.line;
    const posMatch = (p.position === slotPos);
    const lineMatch = (posToLine(p.position) === slotLine);
    if (posMatch || lineMatch) chem++;

    // +1 country mate
    const cCount = countryCounts[p.country] || 0;
    if (cCount >= 2) chem++;

    // +1 rating >= 95 or multiple country mates
    if (p.rating >= 95 || cCount >= 3) {
      chem = Math.min(3, chem + 1);
    }

    ds.chem = Math.min(3, Math.max(0, chem));
  });
}

function updateDraftMeta() {
  const filled = draftSlots.filter(s => s.player);
  const ratingEl = document.getElementById('draftRating');
  const chemEl = document.getElementById('draftChemistry');

  if (!filled.length) {
    if (ratingEl) ratingEl.textContent = '—';
    if (chemEl) chemEl.textContent = '0/33';
    return;
  }

  const avgRating = Math.round(filled.reduce((sum, s) => sum + s.player.rating, 0) / filled.length);
  if (ratingEl) ratingEl.textContent = avgRating;

  recalcChemistry();
  const totalChem = draftSlots.reduce((sum, s) => sum + s.chem, 0);
  if (chemEl) chemEl.textContent = totalChem + '/33';
}

function groupSlotsByLine(slots) {
  const lines = [];
  const lineOrder = ['gk', 'def', 'mid', 'att', 'st'];
  const map = {};
  slots.forEach((slot, i) => {
    const line = slot.slotDef.line;
    if (!map[line]) map[line] = [];
    map[line].push({ slot, idx: i });
  });
  lineOrder.forEach(l => {
    if (map[l]) lines.push(map[l]);
  });
  return lines;
}

function renderDraftField() {
  const field = document.getElementById('draftField');
  if (!field) return;
  field.innerHTML = '';

  const lines = groupSlotsByLine(draftSlots);
  // St/Att at top, GK at bottom -> reverse lines
  const reversed = lines.slice().reverse();

  reversed.forEach(lineArr => {
    const row = document.createElement('div');
    row.className = 'draft-row';

    lineArr.forEach(item => {
      const slot = item.slot;
      const idx = item.idx;

      const el = document.createElement('div');
      el.className = 'draft-slot';
      el.dataset.idx = idx;

      const img = document.createElement('img');
      img.className = 'draft-slot__img';
      img.draggable = false;

      if (slot.player) {
        img.src = slot.player.image;
        img.alt = slot.player.name;
      } else {
        // Required exact path to empty slot image
        img.src = 'pers/Vibor/Выбор.png';
        img.alt = slot.slotDef.pos;
      }
      el.appendChild(img);

      if (!slot.player) {
        const posEl = document.createElement('div');
        posEl.className = 'draft-slot__pos';
        posEl.textContent = slot.slotDef.pos;
        el.appendChild(posEl);
      }

      const chemEl = document.createElement('div');
      chemEl.className = 'draft-slot__chem';
      for (let d = 0; d < 3; d++) {
        const diamond = document.createElement('div');
        diamond.className = 'chem-d' + (d < slot.chem ? ' on' : '');
        chemEl.appendChild(diamond);
      }
      el.appendChild(chemEl);

      el.addEventListener('click', () => {
        openDraftPicker(idx);
      });

      row.appendChild(el);
    });

    field.appendChild(row);
  });

  updateDraftMeta();

  const allFilled = draftSlots.every(s => s.player !== null);
  const btnDone = document.getElementById('btnDraftDone');
  if (btnDone) {
    if (allFilled) {
      btnDone.classList.remove('hidden');
    } else {
      btnDone.classList.add('hidden');
    }
  }
}

const btnBackFromDraft = document.getElementById('btnBackFromDraft');
if (btnBackFromDraft) {
  btnBackFromDraft.addEventListener('click', () => {
    showScreen('screenFormation');
  });
}

const btnDraftDone = document.getElementById('btnDraftDone');
if (btnDraftDone) {
  btnDraftDone.addEventListener('click', () => {
    save.xp += 20;
    writeSave();
    updateTopBar();
    showToast('+20 XP за сборку состава драфта!');
    startMatch();
  });
}

/* ═══════════════════════════════════════════════════════════════════
   14. DRAFT PICKER MODAL
═══════════════════════════════════════════════════════════════════ */
const modalPicker = document.getElementById('modalPicker');
const pickerGrid = document.getElementById('pickerGrid');
const btnPickerClose = document.getElementById('btnPickerClose');

if (btnPickerClose) {
  btnPickerClose.addEventListener('click', () => {
    if (modalPicker) modalPicker.classList.add('hidden');
  });
}

function openDraftPicker(slotIdx) {
  activeSlotIndex = slotIdx;
  const slotDef = draftSlots[slotIdx].slotDef;

  // Disallow duplicate personId in the squad
  const takenPersonIds = draftSlots
    .filter((ds, i) => i !== slotIdx && ds.player)
    .map(ds => ds.player.personId);

  const available = PLAYERS_DB.filter(p => takenPersonIds.indexOf(p.personId) === -1);

  // Pick 5 candidates prioritizing exact position, then line
  const exact = available.filter(p => p.position === slotDef.pos);
  const sameLine = available.filter(p => posToLine(p.position) === slotDef.line && p.position !== slotDef.pos);
  const others = available.filter(p => posToLine(p.position) !== slotDef.line);

  const candidates = [];
  const pickFrom = (arr) => {
    while (candidates.length < 5 && arr.length) {
      const ri = Math.floor(Math.random() * arr.length);
      candidates.push(arr.splice(ri, 1)[0]);
    }
  };

  pickFrom(exact);
  pickFrom(sameLine);
  pickFrom(others);
  if (candidates.length < 5) {
    pickFrom(available.filter(p => candidates.indexOf(p) === -1));
  }

  if (pickerGrid) {
    pickerGrid.innerHTML = '';
    pickerGrid.scrollTop = 0;
    let isSelecting = false;

    candidates.forEach(player => {
      const card = document.createElement('div');
      card.className = 'picker-card';
      const img = makeCardImg(player, '');
      card.appendChild(img);

      card.addEventListener('click', () => {
        if (isSelecting) return;
        isSelecting = true;
        card.classList.add('selected');

        setTimeout(() => {
          draftSlots[activeSlotIndex].player = player;
          recalcChemistry();
          if (modalPicker) modalPicker.classList.add('hidden');
          renderDraftField();
        }, 130);
      });

      pickerGrid.appendChild(card);
    });
  }

  if (modalPicker) {
    modalPicker.classList.remove('hidden');
    if (pickerGrid) pickerGrid.scrollTop = 0;
  }
}

/* ═══════════════════════════════════════════════════════════════════
   15. FATAL CARD DUEL ARENA (GOALKEEPER RULES & ANIMATIONS)
═══════════════════════════════════════════════════════════════════ */
let matchScoreA = 0;
let matchScoreB = 0;
let matchEpisode = 0;
const EPISODE_MINUTES = [18, 36, 52, 70, 86];

function getPlayerAtk(player) {
  // STRICT SEPARATION: DRAFT mode uses ONLY raw BASE stats printed on the card!
  // Any upgrades from playerTrainingData are 100% ignored in DRAFT duels.
  const s = (player && player.stats) || {};
  return Math.max(s.pac || 0, s.sho || 0, s.dri || 0, s.pas || 0);
}

function getPlayerDef(player) {
  // STRICT SEPARATION: DRAFT mode uses ONLY raw BASE stats printed on the card!
  // Any upgrades from playerTrainingData are 100% ignored in DRAFT duels.
  const s = (player && player.stats) || {};
  if (player && player.position === 'GK') {
    return Math.max(s.def || 0, s.phy || 0, s.ref || 0, s.div || 0, player.rating || 0);
  }
  return Math.max(s.def || 0, s.phy || 0);
}

function getPlayerChem(player) {
  const slot = draftSlots.find(ds => ds.player && ds.player.id === player.id);
  return slot ? slot.chem : 0;
}

let flashTimer = null;
let flashFadeTimer = null;

function showMatchOutcome(type, text) {
  const resultFlash = document.getElementById('matchResultFlash');
  const flashText = document.getElementById('matchResultText');
  if (!resultFlash || !flashText) return;

  clearTimeout(flashTimer);
  clearTimeout(flashFadeTimer);

  flashText.textContent = text;
  flashText.className = 'match-result-text ' + type;

  resultFlash.style.display = 'flex';
  resultFlash.classList.remove('hidden', 'fade-out');
  void resultFlash.offsetWidth; // Force reflow for scale animation
  resultFlash.classList.add('show');

  // Hold for exactly 1.3s with neon glow, then fade out smoothly
  flashTimer = setTimeout(() => {
    resultFlash.classList.remove('show');
    resultFlash.classList.add('fade-out');
    flashFadeTimer = setTimeout(() => {
      resultFlash.classList.remove('fade-out');
      resultFlash.classList.add('hidden');
      resultFlash.style.display = 'none';
    }, 300);
  }, 1300);
}

function startMatch() {
  matchScoreA = 0;
  matchScoreB = 0;
  matchEpisode = 0;

  clearTimeout(flashTimer);
  clearTimeout(flashFadeTimer);
  const resultFlash = document.getElementById('matchResultFlash');
  if (resultFlash) {
    resultFlash.classList.add('hidden');
    resultFlash.classList.remove('show', 'fade-out');
    resultFlash.style.display = 'none';
  }

  const scoreAEl = document.getElementById('matchScoreA');
  const scoreBEl = document.getElementById('matchScoreB');
  if (scoreAEl) scoreAEl.textContent = '0';
  if (scoreBEl) scoreBEl.textContent = '0';

  showScreen('screenMatch');
  runMatchEpisode();
}

function runMatchEpisode() {
  if (matchEpisode >= EPISODE_MINUTES.length) {
    finishMatch();
    return;
  }

  clearTimeout(flashTimer);
  clearTimeout(flashFadeTimer);
  const resultFlash = document.getElementById('matchResultFlash');
  if (resultFlash) {
    resultFlash.classList.add('hidden');
    resultFlash.classList.remove('show', 'fade-out');
    resultFlash.style.display = 'none';
  }

  const minute = EPISODE_MINUTES[matchEpisode];
  const timerEl = document.getElementById('matchTimer');
  if (timerEl) timerEl.textContent = minute + "'";

  // Alternating phases: Attack (0, 2, 4) / Defend (1, 3)
  const isAttack = (matchEpisode % 2 === 0);
  const phaseEl = document.getElementById('matchPhase');
  const phaseIcon = document.getElementById('matchPhaseIcon');
  const phaseText = document.getElementById('matchPhaseText');

  if (phaseEl && phaseIcon && phaseText) {
    if (isAttack) {
      phaseEl.className = 'match-phase attack';
      phaseIcon.textContent = '⚔️';
      phaseText.textContent = 'АТАКА (ATTACK)';
    } else {
      phaseEl.className = 'match-phase defend';
      phaseIcon.textContent = '🛡️';
      phaseText.textContent = 'ЗАЩИТА (DEFEND)';
    }
  }

  // Clear arena slots and stats comparison
  const arenaMyCard = document.getElementById('arenaMyCard');
  const arenaEnemyCard = document.getElementById('arenaEnemyCard');
  const arenaClash = document.getElementById('arenaClash');
  const statsCmp = document.getElementById('matchStatsCmp');

  if (arenaMyCard) {
    arenaMyCard.innerHTML = '';
    arenaMyCard.classList.remove('has-card');
  }
  if (arenaEnemyCard) {
    arenaEnemyCard.innerHTML = '';
    arenaEnemyCard.classList.remove('has-card', 'card-burned');
  }
  if (arenaClash) arenaClash.textContent = 'VS';
  if (statsCmp) statsCmp.classList.add('hidden');

  // AI enemy card selection:
  // In ATTACK phase: player attacks, bot defends -> bot can use GK or outfield
  // In DEFEND phase: bot attacks player defense -> bot CANNOT use GK (strictly outfield!)
  let botPool;
  if (isAttack) {
    botPool = PLAYERS_DB.filter(p => p.personId !== 'komilzhonov' && p.id !== 'komilzhonov_120');
  } else {
    botPool = PLAYERS_DB.filter(p => p.position !== 'GK' && p.personId !== 'komilzhonov' && p.id !== 'komilzhonov_120');
  }
  const enemyPlayer = getRandomItem(botPool);
  if (arenaEnemyCard) {
    arenaEnemyCard.appendChild(makeCardImg(enemyPlayer, ''));
    arenaEnemyCard.classList.add('has-card');
  }

  // Player hand: 3 random cards from drafted players
  // In ATTACK phase: STRICTLY outfield players (position !== 'GK')
  // In DEFEND phase: GKs are allowed and encouraged
  const draftedPlayers = draftSlots.filter(s => s.player).map(s => s.player);
  let handPool;
  if (isAttack) {
    const outfieldOnly = draftedPlayers.filter(p => p.position !== 'GK');
    handPool = outfieldOnly.length ? outfieldOnly.slice() : draftedPlayers.slice();
  } else {
    handPool = draftedPlayers.slice();
  }

  const hand = [];
  while (hand.length < 3 && handPool.length) {
    const ri = Math.floor(Math.random() * handPool.length);
    hand.push(handPool.splice(ri, 1)[0]);
  }

  const handEl = document.getElementById('matchHand');
  if (!handEl) return;
  handEl.innerHTML = '';

  hand.forEach(player => {
    const cardEl = document.createElement('div');
    cardEl.className = 'match-hand-card';
    cardEl.appendChild(makeCardImg(player, ''));

    cardEl.addEventListener('click', () => {
      // Disable all hand cards immediately
      handEl.querySelectorAll('.match-hand-card').forEach(c => {
        c.classList.add('disabled');
      });

      // Place player's chosen card in the duel arena
      if (arenaMyCard) {
        arenaMyCard.innerHTML = '';
        arenaMyCard.appendChild(makeCardImg(player, ''));
        arenaMyCard.classList.add('has-card');
      }

      // Calculate duel stats
      const chemBonus = getPlayerChem(player) * 2;
      const myAtk = getPlayerAtk(player) + chemBonus;
      const myDef = getPlayerDef(player) + chemBonus;
      const aiAtk = getPlayerAtk(enemyPlayer);
      const aiDef = getPlayerDef(enemyPlayer);

      // Show stats comparison banner
      const cmpMyVal = document.getElementById('cmpMyVal');
      const cmpLabel = document.getElementById('cmpLabel');
      const cmpAiVal = document.getElementById('cmpAiVal');

      if (statsCmp && cmpMyVal && cmpLabel && cmpAiVal) {
        statsCmp.classList.remove('hidden');
        if (isAttack) {
          cmpMyVal.textContent = myAtk;
          cmpLabel.textContent = 'ATK vs DEF';
          cmpAiVal.textContent = aiDef;
        } else {
          cmpMyVal.textContent = myDef;
          cmpLabel.textContent = 'DEF vs ATK';
          cmpAiVal.textContent = aiAtk;
        }
      }

      // Result resolution with floating overlay
      const appShell = document.querySelector('.app-shell') || document.body;

      setTimeout(() => {
        if (isAttack) {
          if (myAtk > aiDef) {
            // Player scores a goal!
            matchScoreA++;
            const scoreAEl = document.getElementById('matchScoreA');
            if (scoreAEl) scoreAEl.textContent = matchScoreA;

            showMatchOutcome('goal', 'GOOOAL! ⚽');
            burstParticles();

            appShell.classList.remove('screen-shake');
            void appShell.offsetWidth;
            appShell.classList.add('screen-shake');

            if (arenaEnemyCard) arenaEnemyCard.classList.add('card-burned');
          } else {
            // Saved by AI defense
            showMatchOutcome('save', 'ОТБОР / СЕЙВ! 🛡️');
          }
        } else {
          if (myDef >= aiAtk) {
            // Player successfully defended!
            showMatchOutcome('save', 'ОТБОР / СЕЙВ! 🛡️');
          } else {
            // AI scores
            matchScoreB++;
            const scoreBEl = document.getElementById('matchScoreB');
            if (scoreBEl) scoreBEl.textContent = matchScoreB;

            showMatchOutcome('concede', 'ПРОПУЩЕН ГОЛ! ❌');

            appShell.classList.remove('screen-shake');
            void appShell.offsetWidth;
            appShell.classList.add('screen-shake');
          }
        }

        // Proceed to next episode after dramatic reveal (1.2s banner + 0.3s fade + brief pause = 1.7s)
        matchEpisode++;
        setTimeout(() => {
          runMatchEpisode();
        }, 1700);
      }, 500);

    }, { once: true });

    handEl.appendChild(cardEl);
  });
}

function finishMatch() {
  clearTimeout(flashTimer);
  clearTimeout(flashFadeTimer);
  const resultFlash = document.getElementById('matchResultFlash');
  if (resultFlash) {
    resultFlash.classList.add('hidden');
    resultFlash.classList.remove('show', 'fade-out');
    resultFlash.style.display = 'none';
  }

  const won = (matchScoreA > matchScoreB);
  const draw = (matchScoreA === matchScoreB);

  // Rewards calculation per user specification:
  // Победа: +40 XP, гол: +15 XP, монеты: +100 за гол, +500 за победу
  const goalCoins = matchScoreA * 100;
  const winCoins = won ? 500 : (draw ? 150 : 0);
  const totalCoins = goalCoins + winCoins;
  const xpEarned = (matchScoreA * 15) + (won ? 40 : (draw ? 20 : 10));

  save.coins += totalCoins;
  save.xp += xpEarned;
  writeSave();
  updateTopBar();

  const titleEl = document.getElementById('resultTitle');
  const iconEl = document.getElementById('resultIcon');
  const scoreEl = document.getElementById('resultScore');
  const rewardsEl = document.getElementById('resultRewards');

  if (scoreEl) scoreEl.textContent = `${matchScoreA} : ${matchScoreB}`;

  if (won) {
    if (titleEl) {
      titleEl.textContent = 'ПОБЕДА!';
      titleEl.className = 'result-title';
    }
    if (iconEl) iconEl.textContent = '🏆';
    burstParticles();
  } else if (draw) {
    if (titleEl) {
      titleEl.textContent = 'НИЧЬЯ!';
      titleEl.className = 'result-title draw';
    }
    if (iconEl) iconEl.textContent = '🤝';
  } else {
    if (titleEl) {
      titleEl.textContent = 'ПОРАЖЕНИЕ!';
      titleEl.className = 'result-title defeat';
    }
    if (iconEl) iconEl.textContent = '💔';
  }

  if (rewardsEl) {
    rewardsEl.innerHTML = `
      <div>Награда за голы (${matchScoreA}x): <span class="reward-line">+${goalCoins} VI Coins</span></div>
      <div>Бонус за исход: <span class="reward-line">+${winCoins} VI Coins</span></div>
      <div>Опыт тренера: <span style="color:var(--purple2);font-weight:700;">+${xpEarned} XP</span></div>
      <div style="margin-top:6px;border-top:1px solid rgba(255,255,255,0.1);padding-top:6px;font-weight:800;color:var(--gold);">
        ИТОГО: +${totalCoins.toLocaleString('ru-RU')} VI Coins
      </div>
    `;
  }

  showScreen('screenResult');
}

const btnResultMenu = document.getElementById('btnResultMenu');
if (btnResultMenu) {
  btnResultMenu.addEventListener('click', () => {
    showScreen('screenMenu');
  });
}

/* ═══════════════════════════════════════════════════════════════════
   16. MAIN MENU NAVIGATION
═══════════════════════════════════════════════════════════════════ */
const logoHome = document.getElementById('logoHome');
if (logoHome) {
  logoHome.addEventListener('click', () => {
    showScreen('screenMenu');
  });
}

const tileDraft = document.getElementById('tileDraft');
if (tileDraft) {
  tileDraft.addEventListener('click', () => {
    buildFormationPicker();
    showScreen('screenFormation');
  });
}

const tileStore = document.getElementById('tileStore');
if (tileStore) {
  tileStore.addEventListener('click', () => {
    showScreen('screenStore');
  });
}

const tileCollection = document.getElementById('tileCollection') || document.getElementById('tileMyCards') || document.getElementById('btnMyCards');
if (tileCollection) {
  tileCollection.addEventListener('click', () => {
    showScreen('screenCollection');
    buildCollectionGrid();
  });
}

const tileMyClub = document.getElementById('tileMyClub');
if (tileMyClub) {
  tileMyClub.addEventListener('click', () => {
    openMyClubScreen();
  });
}

/* ═══════════════════════════════════════════════════════════════════
   17. МОЙ КЛУБ (MY CLUB) SQUAD LOGIC & PICKER
═══════════════════════════════════════════════════════════════════ */
const FORMATIONS = {
  '4-2-3-1': [1, 3, 2, 4, 1],
  '4-3-3':   [3, 3, 4, 1],
  '5-3-2':   [2, 3, 5, 1],
  '3-4-2-1': [1, 2, 4, 3, 1],
  '4-1-4-1': [1, 4, 1, 4, 1],
  '3-1-4-2': [2, 4, 1, 3, 1],
  '4-3-2-1': [1, 2, 3, 4, 1]
};

const MY_CLUB_FORMATIONS = {
  '4-3-3': {
    name: '4-3-3',
    desc: 'Классика с быстрыми флангами и центрфорвардом',
    slots: [
      { id: 0, pos: 'GK',  line: 'gk',  label: 'ВРТ' },
      { id: 1, pos: 'LB',  line: 'def', label: 'ЛЗ' },
      { id: 2, pos: 'CB',  line: 'def', label: 'ЦЗ' },
      { id: 3, pos: 'CB',  line: 'def', label: 'ЦЗ' },
      { id: 4, pos: 'RB',  line: 'def', label: 'ПЗ' },
      { id: 5, pos: 'CM',  line: 'mid', label: 'ЦП' },
      { id: 6, pos: 'CAM', line: 'mid', label: 'ЦАП' },
      { id: 7, pos: 'CM',  line: 'mid', label: 'ЦП' },
      { id: 8, pos: 'LW',  line: 'att', label: 'ЛВ' },
      { id: 9, pos: 'ST',  line: 'st',  label: 'ФРВ' },
      { id: 10, pos: 'RW', line: 'att', label: 'ПВ' }
    ],
    rows: [
      [8, 9, 10],   // LW, ST, RW
      [5, 6, 7],    // CM, CAM, CM
      [1, 2, 3, 4], // LB, CB, CB, RB
      [0]           // GK
    ],
    radarCoords: [
      { x: 30,  y: 115, role: 'GK' },
      { x: 80,  y: 42,  role: 'LB' },
      { x: 74,  y: 88,  role: 'CB' },
      { x: 74,  y: 142, role: 'CB' },
      { x: 80,  y: 188, role: 'RB' },
      { x: 140, y: 65,  role: 'CM' },
      { x: 175, y: 115, role: 'CAM' },
      { x: 140, y: 165, role: 'CM' },
      { x: 235, y: 45,  role: 'LW' },
      { x: 255, y: 115, role: 'ST' },
      { x: 235, y: 185, role: 'RW' }
    ]
  },
  '4-2-3-1': {
    name: '4-2-3-1',
    desc: 'Надежный опорный дуэт и три атакующих хавбека',
    slots: [
      { id: 0, pos: 'GK',  line: 'gk',  label: 'ВРТ' },
      { id: 1, pos: 'LB',  line: 'def', label: 'ЛЗ' },
      { id: 2, pos: 'CB',  line: 'def', label: 'ЦЗ' },
      { id: 3, pos: 'CB',  line: 'def', label: 'ЦЗ' },
      { id: 4, pos: 'RB',  line: 'def', label: 'ПЗ' },
      { id: 5, pos: 'CDM', line: 'mid', label: 'ЦОП' },
      { id: 6, pos: 'CDM', line: 'mid', label: 'ЦОП' },
      { id: 7, pos: 'LM',  line: 'mid', label: 'ЛП' },
      { id: 8, pos: 'CAM', line: 'mid', label: 'ЦАП' },
      { id: 9, pos: 'RM',  line: 'mid', label: 'ПП' },
      { id: 10, pos: 'ST', line: 'st',  label: 'ФРВ' }
    ],
    rows: [
      [10],         // ST
      [7, 8, 9],    // LM, CAM, RM
      [5, 6],       // CDM, CDM
      [1, 2, 3, 4], // LB, CB, CB, RB
      [0]           // GK
    ],
    radarCoords: [
      { x: 30,  y: 115, role: 'GK' },
      { x: 80,  y: 42,  role: 'LB' },
      { x: 74,  y: 88,  role: 'CB' },
      { x: 74,  y: 142, role: 'CB' },
      { x: 80,  y: 188, role: 'RB' },
      { x: 130, y: 80,  role: 'CDM' },
      { x: 130, y: 150, role: 'CDM' },
      { x: 195, y: 45,  role: 'LM' },
      { x: 195, y: 115, role: 'CAM' },
      { x: 195, y: 185, role: 'RM' },
      { x: 260, y: 115, role: 'ST' }
    ]
  },
  '5-3-2': {
    name: '5-3-2',
    desc: 'Непробиваемая стена из 5 защитников и пара форвардов',
    slots: [
      { id: 0, pos: 'GK',  line: 'gk',  label: 'ВРТ' },
      { id: 1, pos: 'LWB', line: 'def', label: 'ЛЗ' },
      { id: 2, pos: 'CB',  line: 'def', label: 'ЦЗ' },
      { id: 3, pos: 'CB',  line: 'def', label: 'ЦЗ' },
      { id: 4, pos: 'CB',  line: 'def', label: 'ЦЗ' },
      { id: 5, pos: 'RWB', line: 'def', label: 'ПЗ' },
      { id: 6, pos: 'CM',  line: 'mid', label: 'ЦП' },
      { id: 7, pos: 'CM',  line: 'mid', label: 'ЦП' },
      { id: 8, pos: 'CM',  line: 'mid', label: 'ЦП' },
      { id: 9, pos: 'ST',  line: 'st',  label: 'ФРВ' },
      { id: 10, pos: 'ST', line: 'st',  label: 'ФРВ' }
    ],
    rows: [
      [9, 10],            // ST, ST
      [6, 7, 8],          // CM, CM, CM
      [1, 2, 3, 4, 5],    // LWB, CB, CB, CB, RWB
      [0]                 // GK
    ],
    radarCoords: [
      { x: 30,  y: 115, role: 'GK' },
      { x: 85,  y: 35,  role: 'LB' },
      { x: 70,  y: 75,  role: 'CB' },
      { x: 68,  y: 115, role: 'CB' },
      { x: 70,  y: 155, role: 'CB' },
      { x: 85,  y: 195, role: 'RB' },
      { x: 150, y: 65,  role: 'CM' },
      { x: 150, y: 115, role: 'CM' },
      { x: 150, y: 165, role: 'CM' },
      { x: 250, y: 88,  role: 'ST' },
      { x: 250, y: 142, role: 'ST' }
    ]
  },
  '3-4-2-1': {
    name: '3-4-2-1',
    desc: '3 защитника, плотная полузащита и 2 поднападающих',
    slots: [
      { id: 0, pos: 'GK',  line: 'gk',  label: 'ВРТ' },
      { id: 1, pos: 'CB',  line: 'def', label: 'ЦЗ' },
      { id: 2, pos: 'CB',  line: 'def', label: 'ЦЗ' },
      { id: 3, pos: 'CB',  line: 'def', label: 'ЦЗ' },
      { id: 4, pos: 'LM',  line: 'mid', label: 'ЛП' },
      { id: 5, pos: 'CM',  line: 'mid', label: 'ЦП' },
      { id: 6, pos: 'CM',  line: 'mid', label: 'ЦП' },
      { id: 7, pos: 'RM',  line: 'mid', label: 'ПП' },
      { id: 8, pos: 'CAM', line: 'mid', label: 'ЦАП' },
      { id: 9, pos: 'CAM', line: 'mid', label: 'ЦАП' },
      { id: 10, pos: 'ST', line: 'st',  label: 'ФРВ' }
    ],
    rows: [
      [10],         // ST
      [8, 9],       // CAM, CAM
      [4, 5, 6, 7], // LM, CM, CM, RM
      [1, 2, 3],    // CB, CB, CB
      [0]           // GK
    ],
    radarCoords: [
      { x: 30,  y: 115, role: 'GK' },
      { x: 72,  y: 65,  role: 'CB' },
      { x: 68,  y: 115, role: 'CB' },
      { x: 72,  y: 165, role: 'CB' },
      { x: 135, y: 38,  role: 'LM' },
      { x: 135, y: 90,  role: 'CM' },
      { x: 135, y: 140, role: 'CM' },
      { x: 135, y: 192, role: 'RM' },
      { x: 200, y: 80,  role: 'CAM' },
      { x: 200, y: 150, role: 'CAM' },
      { x: 260, y: 115, role: 'ST' }
    ]
  },
  '4-1-4-1': {
    name: '4-1-4-1',
    desc: 'Опорный волнорез и широкая поддержка атаки',
    slots: [
      { id: 0, pos: 'GK',  line: 'gk',  label: 'ВРТ' },
      { id: 1, pos: 'LB',  line: 'def', label: 'ЛЗ' },
      { id: 2, pos: 'CB',  line: 'def', label: 'ЦЗ' },
      { id: 3, pos: 'CB',  line: 'def', label: 'ЦЗ' },
      { id: 4, pos: 'RB',  line: 'def', label: 'ПЗ' },
      { id: 5, pos: 'CDM', line: 'mid', label: 'ЦОП' },
      { id: 6, pos: 'LM',  line: 'mid', label: 'ЛП' },
      { id: 7, pos: 'CM',  line: 'mid', label: 'ЦП' },
      { id: 8, pos: 'CM',  line: 'mid', label: 'ЦП' },
      { id: 9, pos: 'RM',  line: 'mid', label: 'ПП' },
      { id: 10, pos: 'ST', line: 'st',  label: 'ФРВ' }
    ],
    rows: [
      [10],            // ST
      [6, 7, 8, 9],    // LM, CM, CM, RM
      [5],             // CDM
      [1, 2, 3, 4],    // LB, CB, CB, RB
      [0]              // GK
    ],
    radarCoords: [
      { x: 30,  y: 115, role: 'GK' },
      { x: 80,  y: 42,  role: 'LB' },
      { x: 74,  y: 88,  role: 'CB' },
      { x: 74,  y: 142, role: 'CB' },
      { x: 80,  y: 188, role: 'RB' },
      { x: 125, y: 115, role: 'CDM' },
      { x: 185, y: 42,  role: 'LM' },
      { x: 185, y: 90,  role: 'CM' },
      { x: 185, y: 140, role: 'CM' },
      { x: 185, y: 188, role: 'RM' },
      { x: 260, y: 115, role: 'ST' }
    ]
  },
  '3-1-4-2': {
    name: '3-1-4-2',
    desc: '3 защитника, опорник, мощный центр и пара форвардов',
    slots: [
      { id: 0, pos: 'GK',  line: 'gk',  label: 'ВРТ' },
      { id: 1, pos: 'CB',  line: 'def', label: 'ЦЗ' },
      { id: 2, pos: 'CB',  line: 'def', label: 'ЦЗ' },
      { id: 3, pos: 'CB',  line: 'def', label: 'ЦЗ' },
      { id: 4, pos: 'CDM', line: 'mid', label: 'ЦОП' },
      { id: 5, pos: 'LM',  line: 'mid', label: 'ЛП' },
      { id: 6, pos: 'CM',  line: 'mid', label: 'ЦП' },
      { id: 7, pos: 'CM',  line: 'mid', label: 'ЦП' },
      { id: 8, pos: 'RM',  line: 'mid', label: 'ПП' },
      { id: 9, pos: 'ST',  line: 'st',  label: 'ФРВ' },
      { id: 10, pos: 'ST', line: 'st',  label: 'ФРВ' }
    ],
    rows: [
      [9, 10],         // ST, ST
      [5, 6, 7, 8],    // LM, CM, CM, RM
      [4],             // CDM
      [1, 2, 3],       // CB, CB, CB
      [0]              // GK
    ],
    radarCoords: [
      { x: 30,  y: 115, role: 'GK' },
      { x: 72,  y: 65,  role: 'CB' },
      { x: 68,  y: 115, role: 'CB' },
      { x: 72,  y: 165, role: 'CB' },
      { x: 125, y: 115, role: 'CDM' },
      { x: 185, y: 38,  role: 'LM' },
      { x: 185, y: 90,  role: 'CM' },
      { x: 185, y: 140, role: 'CM' },
      { x: 185, y: 192, role: 'RM' },
      { x: 255, y: 85,  role: 'ST' },
      { x: 255, y: 145, role: 'ST' }
    ]
  },
  '4-3-2-1': {
    name: '4-3-2-1',
    desc: '«Ёлочка»: плотный центр, 2 инсайда и центрфорвард',
    slots: [
      { id: 0, pos: 'GK',  line: 'gk',  label: 'ВРТ' },
      { id: 1, pos: 'LB',  line: 'def', label: 'ЛЗ' },
      { id: 2, pos: 'CB',  line: 'def', label: 'ЦЗ' },
      { id: 3, pos: 'CB',  line: 'def', label: 'ЦЗ' },
      { id: 4, pos: 'RB',  line: 'def', label: 'ПЗ' },
      { id: 5, pos: 'CM',  line: 'mid', label: 'ЦП' },
      { id: 6, pos: 'CM',  line: 'mid', label: 'ЦП' },
      { id: 7, pos: 'CM',  line: 'mid', label: 'ЦП' },
      { id: 8, pos: 'CAM', line: 'mid', label: 'ЦАП' },
      { id: 9, pos: 'CAM', line: 'mid', label: 'ЦАП' },
      { id: 10, pos: 'ST', line: 'st',  label: 'ФРВ' }
    ],
    rows: [
      [10],            // ST
      [8, 9],          // CAM, CAM
      [5, 6, 7],       // CM, CM, CM
      [1, 2, 3, 4],    // LB, CB, CB, RB
      [0]              // GK
    ],
    radarCoords: [
      { x: 30,  y: 115, role: 'GK' },
      { x: 80,  y: 42,  role: 'LB' },
      { x: 74,  y: 88,  role: 'CB' },
      { x: 74,  y: 142, role: 'CB' },
      { x: 80,  y: 188, role: 'RB' },
      { x: 140, y: 65,  role: 'CM' },
      { x: 135, y: 115, role: 'CM' },
      { x: 140, y: 165, role: 'CM' },
      { x: 200, y: 80,  role: 'CAM' },
      { x: 200, y: 150, role: 'CAM' },
      { x: 260, y: 115, role: 'ST' }
    ]
  }
};

/* ═══════════════════════════════════════════════════════════════════
   CHEMISTRY SYSTEM: FORMATION LINKS, LINK STRENGTH & TEAM BUFFS
═══════════════════════════════════════════════════════════════════ */
const FORMATION_LINKS = {
  '4-3-3': [
    [0, 1], [1, 2],
    [0, 3], [1, 4], [2, 5],
    [3, 4], [4, 5],
    [3, 6], [3, 7], [4, 7], [4, 8], [5, 8], [5, 9],
    [6, 7], [7, 8], [8, 9],
    [7, 10], [8, 10]
  ],
  '4-2-3-1': [
    [0, 1], [0, 2], [0, 3],
    [1, 2], [2, 3],
    [1, 4], [2, 4], [2, 5], [3, 5],
    [4, 5],
    [4, 6], [4, 7], [5, 8], [5, 9],
    [6, 7], [7, 8], [8, 9],
    [7, 10], [8, 10]
  ],
  '5-3-2': [
    [0, 1],
    [0, 2], [0, 3], [1, 3], [1, 4],
    [2, 3], [3, 4],
    [2, 5], [2, 6], [3, 7], [4, 8], [4, 9],
    [5, 6], [6, 7], [7, 8], [8, 9],
    [6, 10], [7, 10], [8, 10]
  ],
  '3-4-2-1': [
    [0, 1], [0, 2],
    [1, 2],
    [1, 3], [1, 4], [2, 5], [2, 6],
    [3, 4], [4, 5], [5, 6],
    [3, 7], [4, 7], [4, 8], [5, 8], [5, 9], [6, 9],
    [7, 8], [8, 9],
    [7, 10], [8, 10], [9, 10]
  ],
  '4-1-4-1': [
    [0, 1], [0, 2], [0, 3], [0, 4],
    [1, 2], [2, 3], [3, 4],
    [2, 5], [3, 5],
    [5, 6], [5, 7], [5, 8], [5, 9],
    [6, 7], [7, 8], [8, 9],
    [7, 10], [8, 10]
  ],
  '3-1-4-2': [
    [0, 1],
    [0, 2], [0, 3], [1, 4], [1, 5],
    [2, 3], [3, 4], [4, 5],
    [3, 6], [4, 6],
    [6, 7], [6, 8], [6, 9],
    [7, 8], [8, 9],
    [7, 10], [8, 10], [9, 10]
  ],
  '4-3-2-1': [
    [0, 1], [0, 2],
    [1, 2],
    [1, 3], [1, 4], [2, 4], [2, 5],
    [3, 4], [4, 5],
    [3, 6], [3, 7], [4, 7], [4, 8], [5, 8], [5, 9],
    [6, 7], [7, 8], [8, 9],
    [7, 10], [8, 10]
  ]
};

/**
 * Calculates chemistry link strength between two cards:
 * 1. Идеальная связь (Ярко-зеленая 2⚡): совпали курс и страна, либо обе легенды и совпала страна
 * 2. Сильная легендарная связь (Зеленая 2⚡): обе карты Legend / Ultra legend
 * 3. Средняя связь (Желтая 1⚡): совпал только курс, совпала только страна, либо одна из карт Legend/Ultra legend
 * 4. Нет связи (Красная 0⚡)
 */
function getLinkChemistry(cardA, cardB) {
  if (!cardA || !cardB) return 0;
  const courseA = getPlayerCourse(cardA);
  const courseB = getPlayerCourse(cardB);
  const countryA = (cardA.country || '').trim().toUpperCase();
  const countryB = (cardB.country || '').trim().toUpperCase();
  const isLegendA = courseA === 'Legend' || courseA === 'Ultra legend';
  const isLegendB = courseB === 'Legend' || courseB === 'Ultra legend';
  const sameCourse = Boolean(courseA && courseB && courseA === courseB);
  const sameCountry = Boolean(countryA && countryB && countryA === countryB);

  // 1. Идеальная связь (Ярко-зеленая 2⚡):
  // - Либо совпали и курс, и страна
  // - Либо обе карточки из легенд и совпала страна
  if ((sameCourse && sameCountry) || (isLegendA && isLegendB && sameCountry)) {
    return 2;
  }
  // 2. Сильная легендарная связь (тоже зеленая, если обе легенды/ультра-легенды)
  if (isLegendA && isLegendB) {
    return 2;
  }
  // 3. Средняя связь (Желтая 1⚡):
  // - Совпал только курс
  // - Совпала только страна
  // - Одна из карт Legend / Ultra legend (дает базовую химию со всеми)
  if (sameCourse || sameCountry || isLegendA || isLegendB) {
    return 1;
  }
  // 4. Нет связи (Красная 0⚡)
  return 0;
}

/**
 * Calculates individual slot chemistry score (0⚡, 1⚡, 2⚡, 3⚡)
 */
function getPlayerChemistryScore(slotIdx, formationKey, squad) {
  if (!squad || !squad[slotIdx]) return 0;
  const player = squad[slotIdx];
  const course = getPlayerCourse(player);

  // Legends always get max individual chemistry (3⚡)
  const isLegend = course === 'Legend' || course === 'Ultra legend';
  if (isLegend) return 3;

  const links = FORMATION_LINKS[formationKey] || FORMATION_LINKS['4-3-3'] || [];
  let totalPts = 0;

  links.forEach(([a, b]) => {
    let neighborIdx = -1;
    if (a === slotIdx) neighborIdx = b;
    else if (b === slotIdx) neighborIdx = a;

    if (neighborIdx !== -1 && squad[neighborIdx]) {
      totalPts += getLinkChemistry(player, squad[neighborIdx]);
    }
  });

  if (totalPts >= 3) return 3;
  if (totalPts === 2) return 2;
  if (totalPts === 1) return 1;
  return 0;
}

/**
 * Updates Team Buffs Bar UI elements above pitch
 * - «Землячество» (Homeland): >= 5 players from same country (+10% tackle radius & shot power)
 * - «Молодая кровь» (Young Blood): >= 6 players from 1–2 курс (+10% sprint PAC & stamina)
 * - «На опыте» (Experienced): >= 6 players from 3–4 курс / Legend (+15% pass PAS & interceptions)
 */
function updateTeamBuffs(startingXI) {
  let countYoung = 0; // 1 и 2 курс
  let countExp = 0; // 3, 4 курс, Legend, Ultra legend
  const countryCounts = {}; // Для подсчета землячества

  const squadList = startingXI || (typeof getValidMyClubSquad === 'function' ? getValidMyClubSquad() : []);

  squadList.forEach(player => {
    if (!player) return;
    const course = getPlayerCourse(player);
    const country = (player.country || '').trim() || 'Неизвестно';

    // Считаем курсы
    if (course === '1 kurs' || course === '2 kurs') {
      countYoung++;
    } else if (course === '3 kurs' || course === '4 kurs' || course === 'Legend' || course === 'Ultra legend') {
      countExp++;
    }

    // Считаем страны для Землячества
    if (country && country !== 'Неизвестно') {
      countryCounts[country] = (countryCounts[country] || 0) + 1;
    }
  });

  // Проверяем максимальное число игроков из одной страны
  let maxCountryCount = 0;
  let dominantCountry = '';
  for (const [country, count] of Object.entries(countryCounts)) {
    if (count > maxCountryCount) {
      maxCountryCount = count;
      dominantCountry = country;
    }
  }

  // Обновляем элементы на экране баффов (поддерживаем оба варианта ID)
  const elYoungCount = document.getElementById('buffYoungCount');
  const elExpCount = document.getElementById('buffExpCount');
  const elExpCount2 = document.getElementById('buffExperiencedCount');
  const elCountryCount = document.getElementById('buffCountryCount');
  const elCountryCount2 = document.getElementById('buffHomelandCount');

  const expText = `${countExp}/6`;
  const youngText = `${countYoung}/6`;
  const countryText = `${maxCountryCount}/5` + (dominantCountry ? ` (${dominantCountry})` : '');

  if (elYoungCount) elYoungCount.textContent = youngText;
  if (elExpCount) elExpCount.textContent = expText;
  if (elExpCount2) elExpCount2.textContent = expText;
  if (elCountryCount) elCountryCount.textContent = countryText;
  if (elCountryCount2) elCountryCount2.textContent = countryText;

  const elYoung = document.getElementById('buffYoung');
  const elExp = document.getElementById('buffExp');
  const elExp2 = document.getElementById('buffExperienced');
  const elCountry = document.getElementById('buffCountry');
  const elCountry2 = document.getElementById('buffHomeland');

  if (elYoung) elYoung.classList.toggle('active', countYoung >= 6);
  if (elExp) elExp.classList.toggle('active', countExp >= 6);
  if (elExp2) elExp2.classList.toggle('active', countExp >= 6);
  if (elCountry) elCountry.classList.toggle('active', maxCountryCount >= 5);
  if (elCountry2) elCountry2.classList.toggle('active', maxCountryCount >= 5);
}

function updateTeamBuffsUI(squad) {
  updateTeamBuffs(squad);
}

/**
 * Calculates active team buffs from current squad for match simulation engine:
 */
function getActiveTeamBuffs(squad) {
  const currentSquad = (squad || (typeof getValidMyClubSquad === 'function' ? getValidMyClubSquad() : [])).filter(Boolean);
  let youngCount = 0;
  let expCount = 0;
  const countryCounts = {};

  currentSquad.forEach(p => {
    const crs = getPlayerCourse(p);
    if (crs === '1 kurs' || crs === '2 kurs') {
      youngCount++;
    } else if (crs === '3 kurs' || crs === '4 kurs' || crs === 'Legend' || crs === 'Ultra legend') {
      expCount++;
    }
    const c = (p.country || '').trim().toUpperCase();
    if (c) countryCounts[c] = (countryCounts[c] || 0) + 1;
  });

  let maxCountry = 0;
  let topCountry = '';
  Object.entries(countryCounts).forEach(([c, cnt]) => {
    if (cnt > maxCountry) {
      maxCountry = cnt;
      topCountry = c;
    }
  });

  return {
    homeland: { active: maxCountry >= 5, count: maxCountry, topCountry, req: 5 },
    young: { active: youngCount >= 6, count: youngCount, req: 6 },
    experienced: { active: expCount >= 6, count: expCount, req: 6 }
  };
}

/**
 * Draws visual SVG lines between linked starter slots on #myClubPitch
 */
function drawPitchChemistryLines() {
  const pitch = document.getElementById('myClubPitch');
  const svg = document.getElementById('myClubPitchSvg');
  if (!pitch || !svg) return;

  const currentFormation = localStorage.getItem('myClubFormation') || save.myClubFormation || '4-3-3';
  const links = FORMATION_LINKS[currentFormation] || FORMATION_LINKS['4-3-3'] || [];
  const squad = getValidMyClubSquad();

  const pitchRect = pitch.getBoundingClientRect();
  if (pitchRect.width === 0 || pitchRect.height === 0) return;

  svg.setAttribute('viewBox', `0 0 ${pitchRect.width} ${pitchRect.height}`);
  svg.setAttribute('width', `${pitchRect.width}`);
  svg.setAttribute('height', `${pitchRect.height}`);

  const slotEls = pitch.querySelectorAll('.pitch-card-slot[data-slot-idx]');
  if (!slotEls || slotEls.length < 11) {
    svg.innerHTML = '';
    return;
  }

  const slotCoords = {};
  slotEls.forEach(el => {
    const idx = parseInt(el.getAttribute('data-slot-idx'), 10);
    const r = el.getBoundingClientRect();
    slotCoords[idx] = {
      x: r.left - pitchRect.left + r.width / 2,
      y: r.top - pitchRect.top + r.height / 2
    };
  });

  let linesHtml = '';
  links.forEach(([a, b]) => {
    const coordA = slotCoords[a];
    const coordB = slotCoords[b];
    if (!coordA || !coordB) return;

    const cardA = squad[a];
    const cardB = squad[b];
    const chemVal = getLinkChemistry(cardA, cardB);

    let lineClass = 'line-red';
    if (chemVal === 2) lineClass = 'line-green';
    else if (chemVal === 1) lineClass = 'line-yellow';

    linesHtml += `<line class="pitch-chem-line ${lineClass}" x1="${coordA.x}" y1="${coordA.y}" x2="${coordB.x}" y2="${coordB.y}"/>`;
  });

  svg.innerHTML = linesHtml;
}

function getMyClubFormation() {
  const fId = save.myClubFormation || '4-3-3';
  return MY_CLUB_FORMATIONS[fId] || MY_CLUB_FORMATIONS['4-3-3'];
}
function getMyClubSlotsDef() {
  return getMyClubFormation().slots;
}
function getMyClubRows() {
  return getMyClubFormation().rows;
}

// Backwards-compatibility proxies for any direct references to MY_CLUB_SLOTS_DEF / MY_CLUB_ROWS
const MY_CLUB_SLOTS_DEF = new Proxy([], {
  get(target, prop) {
    const slots = getMyClubSlotsDef();
    if (prop === 'length') return slots.length;
    if (prop in slots) return slots[prop];
    return target[prop];
  }
});

const MY_CLUB_ROWS = new Proxy([], {
  get(target, prop) {
    const rows = getMyClubRows();
    if (prop === 'length') return rows.length;
    if (prop in rows) return rows[prop];
    return target[prop];
  }
});

let activeMyClubSlot = 0;

/* ═══════════════════════════════════════════════════════════════════
   17. МОЙ КЛУБ: СЫГРАННОСТЬ (CLUB MASTERY)
═══════════════════════════════════════════════════════════════════ */
function getClubMasteryData(matches) {
  matches = matches || 0;
  if (matches >= 15) {
    return {
      level: 2,
      bonus: 3,
      title: '⚡ Идеальная химия',
      sub: `${matches} совместных матчей • Максимальная сыгранность клуба`,
      bonusText: '+3 OVR'
    };
  } else if (matches >= 5) {
    return {
      level: 1,
      bonus: 1,
      title: '🔥 Сыгранная связка',
      sub: `${matches}/15 матчей • Сыграйте ещё ${15 - matches} для «Идеальной химии»`,
      bonusText: '+1 OVR'
    };
  } else {
    return {
      level: 0,
      bonus: 0,
      title: `Формирование состава (${matches}/5)`,
      sub: `Сыграйте ещё ${5 - matches} матчей для бонуса «Сыгранная связка» (+1 OVR)`,
      bonusText: '+0 OVR'
    };
  }
}

/* ═══════════════════════════════════════════════════════════════════
   17.1 ИНДИВИДУАЛЬНЫЙ ТРЕНИРОВОЧНЫЙ ЦЕНТР: PLAYER TRAINING DATA & TP
═══════════════════════════════════════════════════════════════════ */
function getAllPlayerTrainingData() {
  let data = {};
  try {
    const raw = localStorage.getItem('playerTrainingData');
    if (raw) {
      const parsed = JSON.parse(raw);
      if (parsed && typeof parsed === 'object') data = parsed;
    }
  } catch (e) {}
  if (!Object.keys(data).length && save.playerTrainingData && typeof save.playerTrainingData === 'object') {
    data = save.playerTrainingData;
  }
  return data;
}

function saveAllPlayerTrainingData(data) {
  try {
    localStorage.setItem('playerTrainingData', JSON.stringify(data));
  } catch (e) {}
  save.playerTrainingData = data;
  writeSave();
  updateTrainingHubBadge();
}

function getPlayerTrainingData(playerId, position) {
  if (!playerId) return { points: 0, stats: { pac: 0, sho: 0, pas: 0, def: 0, phy: 0 } };
  const all = getAllPlayerTrainingData();
  const pid = String(playerId);
  const isGK = position === 'GK' || (PLAYERS_DB.find(p => p.id === playerId)?.position === 'GK');
  const defaultStats = isGK
    ? { div: 0, han: 0, kic: 0, ref: 0, pos: 0 }
    : { pac: 0, sho: 0, pas: 0, def: 0, phy: 0 };

  if (!all[pid]) {
    // Check if there was legacy upgrade data
    let legacyStats = {};
    try {
      const rawLegacy = localStorage.getItem('playerUpgrades');
      if (rawLegacy) {
        const parsedL = JSON.parse(rawLegacy);
        if (parsedL && parsedL[pid]) legacyStats = parsedL[pid];
      }
    } catch (e) {}
    if (!Object.keys(legacyStats).length && save.playerUpgrades && save.playerUpgrades[pid]) {
      legacyStats = save.playerUpgrades[pid];
    }

    all[pid] = {
      points: 2, // starter bonus for player
      stats: { ...defaultStats, ...legacyStats }
    };
    saveAllPlayerTrainingData(all);
  } else {
    if (typeof all[pid].points !== 'number') all[pid].points = 0;
    if (!all[pid].stats || typeof all[pid].stats !== 'object') {
      all[pid].stats = { ...defaultStats };
    } else {
      for (const k of Object.keys(defaultStats)) {
        if (typeof all[pid].stats[k] !== 'number') all[pid].stats[k] = 0;
      }
    }
  }
  return all[pid];
}

function getPlayerUpgrade(playerId) {
  if (!playerId) return {};
  const pData = getPlayerTrainingData(playerId);
  return pData.stats || {};
}

function getPlayerInvestedPoints(playerData) {
  if (!playerData || !playerData.stats) return 0;
  const s = playerData.stats;
  // Guaranteed summation of all characteristics (numbers, via Number()):
  return (Number(s.pac) || 0) + 
         (Number(s.sho) || 0) + 
         (Number(s.pas) || 0) + 
         (Number(s.def) || 0) + 
         (Number(s.phy) || 0) +
         (Number(s.div) || 0) +
         (Number(s.han) || 0) +
         (Number(s.kic) || 0) +
         (Number(s.ref) || 0) +
         (Number(s.pos) || 0);
}

function getPlayerBonusOvr(playerId) {
  if (!playerId) return 0;
  const pData = getPlayerTrainingData(playerId);
  const total = getPlayerInvestedPoints(pData);
  return Math.floor(total / 5);
}

function getPlayerEffectiveRating(player) {
  if (!player) return 75;
  const bonus = getPlayerBonusOvr(player.id);
  return (player.rating || 75) + bonus;
}

function updateTrainingHubBadge() {
  const allData = getAllPlayerTrainingData();
  let totalPoints = 0;
  const ownedIds = Object.keys(save.collection).filter(id => save.collection[id] > 0);
  const squadIds = (save.myClubSquad || []).filter(Boolean);
  const allRelevant = Array.from(new Set([...ownedIds, ...squadIds]));
  allRelevant.forEach(pid => {
    if (allData[pid] && typeof allData[pid].points === 'number') {
      totalPoints += allData[pid].points;
    }
  });

  const elBtnVal = document.getElementById('thPointsVal');
  if (elBtnVal) elBtnVal.textContent = totalPoints;

  if (activeTrainingPlayerId) {
    const curPData = getPlayerTrainingData(activeTrainingPlayerId);
    const elHeroPts = document.getElementById('thHeroPoints');
    if (elHeroPts) elHeroPts.textContent = `${curPData.points} TP`;
  }
}

function getUnlockedCardsList() {
  const ownedIds = Object.keys(save.collection).filter(id => save.collection[id] > 0);
  return PLAYERS_DB.filter(p => ownedIds.includes(p.id));
}

function calcMyClubBaseRating() {
  const squad = (myClubSquad && myClubSquad.length === 11 && myClubSquad[0])
    ? myClubSquad
    : (save.myClubSquad || []).map(id => id ? PLAYERS_DB.find(p => p.id === id) : null).filter(Boolean);
  const players = squad.filter(Boolean);
  if (!players.length) return 75;
  const sum = players.reduce((acc, p) => acc + getPlayerEffectiveRating(p), 0);
  return Math.round(sum / 11);
}

function calcMyClubTotalRating() {
  const base = calcMyClubBaseRating();
  if (base === 0) return 75;
  const mastery = getClubMasteryData(save.myClubMatchesTogether || 0);
  const squad = (myClubSquad && myClubSquad.length === 11 && myClubSquad[0])
    ? myClubSquad.map(p => p ? p.id : null)
    : (save.myClubSquad || []);
  const hasCaptain = save.myClubRoles && save.myClubRoles.captain && squad.includes(save.myClubRoles.captain);
  const captainBonus = hasCaptain ? 3 : 0;
  return base + mastery.bonus + captainBonus;
}

let activeCardAction = null; // { slotIndex, type: 'starter'|'bench', playerId }
let activeTrainingPlayerId = null;
let userCards = [];
let myClubSquad = [];
let myClubSubs = [];

function syncUserCards() {
  userCards = Object.keys(save.collection || {}).filter(id => save.collection[id] > 0);
  if (userCards.length < 11) {
    const starterPool = PLAYERS_DB.filter(p => p.personId !== 'komilzhonov' && p.rating <= 80).slice(0, 14);
    starterPool.forEach(p => {
      if (!save.collection) save.collection = {};
      save.collection[p.id] = (save.collection[p.id] || 0) + 1;
    });
    writeSave();
    userCards = Object.keys(save.collection || {}).filter(id => save.collection[id] > 0);
  }
  return userCards;
}

function getValidMyClubSquad() {
  syncUserCards();
  const unlocked = PLAYERS_DB.filter(p => userCards.includes(p.id) || (save.collection && save.collection[p.id] > 0));
  let squad = [];
  try {
    const raw = localStorage.getItem('myClubSquad');
    if (raw) {
      const parsed = JSON.parse(raw);
      if (Array.isArray(parsed) && parsed.length === 11) {
        squad = parsed.map(item => {
          const id = typeof item === 'string' ? item : (item ? item.id : null);
          return PLAYERS_DB.find(p => p.id === id);
        }).filter(Boolean);
      }
    }
  } catch (e) {
    console.warn("Ошибка чтения squad:", e);
  }

  // Deduplicate and ensure exactly 11 unique players
  squad = squad.filter((p, idx, self) => self.findIndex(s => s.id === p.id) === idx);

  if (squad.length < 11) {
    const sorted = [...unlocked].sort((a, b) => b.rating - a.rating);
    const gk = sorted.find(p => p.position === 'GK');
    const outfield = sorted.filter(p => !gk || p.id !== gk.id);
    const chosen = outfield.slice(0, 10);
    if (gk) {
      chosen.push(gk);
    } else if (outfield[10]) {
      chosen.push(outfield[10]);
    }
    squad = chosen;
    for (const p of sorted) {
      if (squad.length >= 11) break;
      if (!squad.some(s => s.id === p.id)) squad.push(p);
    }
    localStorage.setItem('myClubSquad', JSON.stringify(squad.map(p => p.id)));
  }

  save.myClubSquad = squad.map(p => p ? p.id : null);
  writeSave();
  myClubSquad = squad;
  return squad;
}

function getValidSubstitutes() {
  syncUserCards();
  const squadIds = (myClubSquad || []).map(p => p && p.id ? p.id : p).filter(Boolean);
  const available = PLAYERS_DB.filter(p => (userCards.includes(p.id) || (save.collection && save.collection[p.id] > 0)) && !squadIds.includes(p.id));
  let subs = [];
  try {
    const raw = localStorage.getItem('myClubSubs');
    if (raw) {
      const parsed = JSON.parse(raw);
      if (Array.isArray(parsed)) {
        subs = parsed.map(id => PLAYERS_DB.find(p => p.id === (typeof id === 'string' ? id : (id ? id.id : null)))).filter(Boolean);
      }
    }
  } catch (e) {}

  subs = subs.filter((p, idx, self) => self.findIndex(s => s.id === p.id) === idx && !squadIds.includes(p.id));
  for (const p of available) {
    if (subs.length >= 3) break;
    if (!subs.some(s => s.id === p.id)) subs.push(p);
  }

  if (subs.length < 3) {
    const fallbackPool = PLAYERS_DB.filter(p => p.personId !== 'komilzhonov' && !squadIds.includes(p.id) && !subs.some(s => s.id === p.id));
    for (const p of fallbackPool) {
      if (subs.length >= 3) break;
      subs.push(p);
      if (!save.collection[p.id]) save.collection[p.id] = 1;
    }
    writeSave();
    syncUserCards();
  }

  localStorage.setItem('myClubSubs', JSON.stringify(subs.map(p => p.id)));
  save.myClubBench = subs.map(p => p.id);
  myClubSubs = subs;
  return subs;
}

function ensureValidSquad() {
  return getValidMyClubSquad();
}

function renderMyClubPitch() {
  const pitch = document.getElementById('myClubPitch');
  if (!pitch) return;
  myClubSquad = getValidMyClubSquad();
  pitch.innerHTML = '';

  // SVG Overlay for chemistry links
  const svg = document.createElementNS('http://www.w3.org/2000/svg', 'svg');
  svg.setAttribute('class', 'pitch-links-svg');
  svg.setAttribute('id', 'myClubPitchSvg');
  pitch.appendChild(svg);

  const currentFormation = localStorage.getItem('myClubFormation') || save.myClubFormation || '4-3-3';
  const structure = FORMATIONS[currentFormation] || [3, 3, 4, 1];

  let cardIndex = 0;
  structure.forEach(count => {
    const rowEl = document.createElement('div');
    rowEl.className = 'pitch-line-row';
    rowEl.style.cssText = 'display: flex; justify-content: space-around; align-items: center; width: 100%; margin: 2px 0;';

    for (let c = 0; c < count; c++) {
      const idx = cardIndex;
      cardIndex++;
      const player = myClubSquad[idx];

      const slot = document.createElement('div');
      slot.className = 'pitch-card-slot';
      slot.setAttribute('data-slot-idx', idx);
      slot.style.cssText = 'display: flex; flex-direction: column; align-items: center; cursor: pointer;';

      if (player && player.image) {
        const chem = getPlayerChemistryScore(idx, currentFormation, myClubSquad);
        slot.innerHTML = `
          <img class="pitch-card-img" src="${player.image}" alt="${player.name}" style="width: clamp(56px, 17vw, 76px); aspect-ratio: 2/3; object-fit: contain; filter: drop-shadow(0 4px 8px rgba(0,0,0,0.65)); pointer-events: auto;">
          <div class="slot-chem-badge chem-${chem}">${chem}⚡</div>
        `;
      } else {
        slot.innerHTML = `<img class="pitch-card-img" src="pers/Vibor/Выбор.png" style="width: clamp(56px, 17vw, 76px); aspect-ratio: 2/3; object-fit: contain; opacity: 0.5;">`;
      }

      slot.onclick = () => openSquadSwapModal(idx, 'pitch');

      rowEl.appendChild(slot);
    }

    pitch.appendChild(rowEl);
  });

  renderSubstitutes();
  updateClubOVR();
  updateTeamBuffsUI();
  requestAnimationFrame(() => {
    drawPitchChemistryLines();
  });
}

function renderSubstitutes() {
  const subsEl = document.getElementById('myClubBench') || document.getElementById('myClubSubs');
  if (!subsEl) return;
  subsEl.innerHTML = '';
  myClubSubs = getValidSubstitutes();

  myClubSubs.forEach((player, bIdx) => {
    const slot = document.createElement('div');
    slot.className = 'pitch-card-slot bench-slot' + (player ? ' filled' : '');
    slot.style.cssText = 'display: flex; flex-direction: column; align-items: center; cursor: pointer;';

    if (player && player.image) {
      slot.innerHTML = `<img class="pitch-card-img" src="${player.image}" alt="${player.name}" style="width: clamp(54px, 16vw, 72px); aspect-ratio: 2/3; object-fit: contain; filter: drop-shadow(0 4px 8px rgba(0,0,0,0.65)); pointer-events: auto;">`;
      slot.title = `Запасной: ${player.name} (${player.position})`;
    } else {
      slot.innerHTML = `<img class="pitch-card-img" src="pers/Vibor/Выбор.png" style="width: clamp(54px, 16vw, 72px); aspect-ratio: 2/3; object-fit: contain; opacity: 0.5;">`;
    }

    slot.onclick = () => openSquadSwapModal(bIdx, 'sub');

    subsEl.appendChild(slot);
  });
}

function updateClubOVR() {
  const capPlayer = save.myClubRoles && save.myClubRoles.captain ? PLAYERS_DB.find(p => p.id === save.myClubRoles.captain) : null;
  const penPlayer = save.myClubRoles && save.myClubRoles.penalty ? PLAYERS_DB.find(p => p.id === save.myClubRoles.penalty) : null;
  const setPlayer = save.myClubRoles && save.myClubRoles.setPieces ? PLAYERS_DB.find(p => p.id === save.myClubRoles.setPieces) : null;

  const elCap = document.getElementById('rolePlayerCaptain');
  const elPen = document.getElementById('rolePlayerPenalty');
  const elSet = document.getElementById('rolePlayerSetPieces');
  if (elCap) elCap.textContent = capPlayer ? capPlayer.name : 'Не назначен';
  if (elPen) elPen.textContent = penPlayer ? penPlayer.name : 'Не назначен';
  if (elSet) elSet.textContent = setPlayer ? setPlayer.name : 'Не назначен';

  const squadFilled = (myClubSquad || []).filter(Boolean).length;
  const baseOvr = calcMyClubBaseRating();
  const mastery = getClubMasteryData(save.myClubMatchesTogether || 0);
  const totalOvr = calcMyClubTotalRating();

  const myClubOvr = document.getElementById('myClubOvr');
  if (myClubOvr) {
    if (squadFilled === 11) {
      const bonusDiff = totalOvr - baseOvr;
      myClubOvr.textContent = bonusDiff > 0 ? `${totalOvr} (${baseOvr}+${bonusDiff})` : `${totalOvr}`;
    } else {
      myClubOvr.textContent = squadFilled > 0 ? `${baseOvr}` : '—';
    }
  }

  const myClubCount = document.getElementById('myClubCount');
  if (myClubCount) myClubCount.textContent = `${squadFilled}/11`;

  // Update Formation Label
  const fLabel = document.getElementById('myClubFormationLabel');
  if (fLabel) fLabel.textContent = localStorage.getItem('myClubFormation') || save.myClubFormation || '4-2-3-1';

  // Update Training Hub Badge & Mastery Card UI
  updateTrainingHubBadge();
  const mTitle = document.getElementById('myClubMasteryTitle');
  const mSub = document.getElementById('myClubMasterySub');
  const mBonus = document.getElementById('myClubMasteryBonus');
  if (mTitle) mTitle.textContent = mastery.title;
  if (mSub) mSub.textContent = mastery.sub;
  if (mBonus) mBonus.textContent = mastery.bonusText;
}

function updateClubStatsHeader() {
  updateClubOVR();
}

// Aliases for backwards compatibility
function renderMyClubField() {
  renderMyClubPitch();
}
function renderMyClubBench() {
  renderSubstitutes();
}
function updateMyClubUI() {
  updateClubOVR();
}

function openFormationPickerMC() {
  const modal = document.getElementById('modalFormationMC');
  const list = document.getElementById('formationMCList');
  if (!modal || !list) return;

  list.innerHTML = '';
  const currentKey = localStorage.getItem('myClubFormation') || save.myClubFormation || '4-2-3-1';

  Object.keys(FORMATIONS).forEach(key => {
    const f = MY_CLUB_FORMATIONS[key] || { name: key, desc: 'Тактическая схема' };
    const isCur = key === currentKey;
    const card = document.createElement('div');
    card.className = 'formation-mc-card' + (isCur ? ' active' : '');
    card.innerHTML = `
      <div class="fmc-left">
        <div class="fmc-name">${f.name || key}</div>
        <div class="fmc-desc">${f.desc || ''}</div>
      </div>
      <div class="fmc-badge">${isCur ? '✓ АКТИВНА' : 'ВЫБРАТЬ'}</div>
    `;

    card.addEventListener('click', () => {
      save.myClubFormation = key;
      localStorage.setItem('myClubFormation', key);
      writeSave();
      modal.classList.add('hidden');
      renderMyClubPitch();
      updateClubStatsHeader();
      showToast(`Схема изменена на ${f.name || key}!`);
    });

    list.appendChild(card);
  });

  modal.classList.remove('hidden');
}

function openMyClubScreen() {
  myClubSquad = getValidMyClubSquad();
  renderMyClubPitch();
  showScreen('screenMyClub');
}

function handleAutoSquadClick() {
  try {
    localStorage.removeItem('myClubSquad');
    localStorage.removeItem('myClubSubs');
  } catch(e) {}
  myClubSquad = getValidMyClubSquad();
  renderMyClubPitch();
  showToast(`⚡ Автосостав собран! OVR команды: ${calcMyClubTotalRating()}`);
}

function autoBuildMyClubSquad(notify = true) {
  handleAutoSquadClick();
}

function openSquadSwapModal(slotIndex, type) {
  const modal = document.getElementById('modalMyClubPicker');
  const title = document.getElementById('myClubPickerTitle');
  const grid = document.getElementById('myClubPickerGrid');
  if (!modal || !grid) return;

  syncUserCards();
  const unlocked = PLAYERS_DB.filter(p => userCards.includes(p.id) || (save.collection && save.collection[p.id] > 0));

  if (title) {
    title.textContent = (type === 'pitch')
      ? `ВЫБОР ИГРОКА (ПОЗИЦИЯ ${slotIndex + 1})`
      : `ВЫБОР ЗАПАСНОГО (SUB ${slotIndex + 1})`;
  }

  grid.innerHTML = '';
  grid.scrollTop = 0;

  if (!unlocked.length) {
    grid.innerHTML = '<div style="grid-column:1/-1;text-align:center;padding:24px;color:var(--silver);">Нет доступных карт</div>';
    modal.classList.remove('hidden');
    return;
  }

  const currentSlotPlayer = (type === 'pitch') ? (myClubSquad[slotIndex] || null) : (myClubSubs[slotIndex] || null);
  const currentSlotId = currentSlotPlayer ? currentSlotPlayer.id : null;

  const pitchIds = (myClubSquad || []).map(p => p ? (p.id || p) : null);
  const subIds = (myClubSubs || []).map(p => p ? (p.id || p) : null);

  const sorted = [...unlocked].sort((a, b) => b.rating - a.rating);

  let selecting = false;
  sorted.forEach(player => {
    const card = document.createElement('div');
    card.className = 'picker-card';
    const isThisSlot = (player.id === currentSlotId);
    const inPitch = pitchIds.includes(player.id);
    const inSubs = subIds.includes(player.id);

    if (isThisSlot) {
      card.style.borderColor = 'var(--gold)';
    } else if (inPitch) {
      card.style.borderColor = 'rgba(0,255,136,0.7)';
    } else if (inSubs) {
      card.style.borderColor = 'rgba(0,229,255,0.7)';
    }

    const img = makeCardImg(player, '');
    card.appendChild(img);

    card.addEventListener('click', () => {
      if (selecting) return;
      selecting = true;
      card.classList.add('selected');

      setTimeout(() => {
        if (!Array.isArray(myClubSquad) || myClubSquad.length !== 11) {
          myClubSquad = getValidMyClubSquad();
        }
        if (!Array.isArray(myClubSubs) || myClubSubs.length !== 3) {
          myClubSubs = getValidSubstitutes();
        }

        const oldPlayer = (type === 'pitch') ? myClubSquad[slotIndex] : myClubSubs[slotIndex];

        if (type === 'pitch') {
          const existingSquadIdx = myClubSquad.findIndex(p => p && p.id === player.id);
          const existingSubIdx = myClubSubs.findIndex(p => p && p.id === player.id);

          if (existingSquadIdx !== -1 && existingSquadIdx !== slotIndex) {
            myClubSquad[existingSquadIdx] = oldPlayer;
          }
          if (existingSubIdx !== -1) {
            myClubSubs[existingSubIdx] = oldPlayer;
          }
          myClubSquad[slotIndex] = player;
        } else {
          const existingSubIdx = myClubSubs.findIndex(p => p && p.id === player.id);
          const existingSquadIdx = myClubSquad.findIndex(p => p && p.id === player.id);

          if (existingSubIdx !== -1 && existingSubIdx !== slotIndex) {
            myClubSubs[existingSubIdx] = oldPlayer;
          }
          if (existingSquadIdx !== -1) {
            myClubSquad[existingSquadIdx] = oldPlayer;
          }
          myClubSubs[slotIndex] = player;
        }

        localStorage.setItem('myClubSquad', JSON.stringify(myClubSquad.map(p => p ? p.id : null)));
        localStorage.setItem('myClubSubs', JSON.stringify(myClubSubs.map(p => p ? p.id : null)));
        save.myClubSquad = myClubSquad.map(p => p ? p.id : null);
        save.myClubBench = myClubSubs.map(p => p ? p.id : null);
        writeSave();

        modal.classList.add('hidden');
        renderMyClubPitch();
        renderSubstitutes();
        updateClubOVR();
        showToast(`Игрок ${player.name} добавлен!`);
      }, 120);
    });

    grid.appendChild(card);
  });

  modal.classList.remove('hidden');
}

function openMyClubPicker(slotIndex) {
  openSquadSwapModal(slotIndex, 'pitch');
}

function openMyClubBenchPicker(benchIdx) {
  openSquadSwapModal(benchIdx, 'sub');
}

function openCardActionMenu(slotIndex, type, playerId) {
  activeCardAction = { slotIndex, type, playerId };
  const player = PLAYERS_DB.find(p => p.id === playerId);
  if (!player) return;

  const modal = document.getElementById('modalCardAction');
  const title = document.getElementById('cardActionTitle');
  const preview = document.getElementById('cardActionPreview');
  const btnRemove = document.getElementById('btnActionRemoveBench');
  if (!modal || !preview) return;

  if (title) title.textContent = player.name;
  preview.innerHTML = '';
  preview.appendChild(makeCardImg(player, ''));

  if (btnRemove) {
    btnRemove.style.display = type === 'bench' ? 'block' : 'none';
  }

  modal.classList.remove('hidden');
}

const OUTFIELD_SKILLS = [
  { key: 'pac', name: 'СКОРОСТЬ (PAC)', icon: '⚡', desc: 'Ускорение и рывки на 2D-радаре' },
  { key: 'sho', name: 'УДАР (SHO)', icon: '🎯', desc: 'Сила и точность ударов, реализация' },
  { key: 'pas', name: 'ПАС (PAS)', icon: '👟', desc: 'Культура паса, меньше перехватов' },
  { key: 'def', name: 'ЗАЩИТА (DEF)', icon: '🛡️', desc: 'Чистые отборы мяча и перехваты' },
  { key: 'phy', name: 'ФИЗИКА (PHY)', icon: '💪', desc: 'Единоборства и выносливость' }
];

const GK_SKILLS = [
  { key: 'div', name: 'НЫРКИ (DIV)', icon: '🧤', desc: 'Прыжки за сложными мячами в углы' },
  { key: 'han', name: 'ИГРА РУКАМИ (HAN)', icon: '✋', desc: 'Надежная фиксация без отскоков' },
  { key: 'kic', name: 'ВВОД В ИГРУ (KIC)', icon: '🦵', desc: 'Дальние точные передачи в атаку' },
  { key: 'ref', name: 'РЕАКЦИЯ (REF)', icon: '⚡', desc: 'Спасение ворот при ударах в упор' },
  { key: 'pos', name: 'ПОЗИЦИЯ (POS)', icon: '📍', desc: 'Выбор позиции и чтение игры' }
];

const MAX_SKILL_UPGRADE = 25;

const SKILL_PERKS = {
  pac: {
    10: { name: 'Взрывной рывок', desc: 'Молниеносный старт при ускорении' },
    20: { name: 'Сверхзвуковой отрыв', desc: 'Максимальная скорость спринта' }
  },
  sho: {
    10: { name: 'Пушечный выстрел', desc: 'Убойная сила удара из любых позиций' },
    20: { name: 'Лазерная точность', desc: 'Снайперское попадание в углы ворот' }
  },
  pas: {
    10: { name: 'Точный навес', desc: 'Выверенные подачи в свободные зоны' },
    20: { name: 'Разрезное видение', desc: 'Гениальные сквозные передачи' }
  },
  def: {
    10: { name: 'Железный подкат', desc: 'Безошибочный чистый отбор мяча' },
    20: { name: 'Непроходимая стена', desc: 'Блокировка любых попыток дриблинга' }
  },
  phy: {
    10: { name: 'Стальной корпус', desc: 'Победа в любых силовых единоборствах' },
    20: { name: 'Бесконечный прессинг', desc: 'Выносливость на все 90 минут матча' }
  },
  div: {
    10: { name: 'Кошачий прыжок', desc: 'Сейвы в нижних углах ворот' },
    20: { name: 'Воздушный сейв', desc: 'Снятие мяча из верхних девяток' }
  },
  han: {
    10: { name: 'Надежный замок', desc: 'Мертвая фиксация мяча в перчатках' },
    20: { name: 'Стальная хватка', desc: 'Полное отсутствие опасных отскоков' }
  },
  kic: {
    10: { name: 'Быстрый ввод', desc: 'Моментальный разгон контратак' },
    20: { name: 'Контратакующий пас', desc: 'Идеальные дальние выносы в ноги' }
  },
  ref: {
    10: { name: 'Молниеносный рефлекс', desc: 'Реакция на удары в упор' },
    20: { name: 'Инстинкт паука', desc: 'Невероятные чудеса на ленточке ворот' }
  },
  pos: {
    10: { name: 'Чтение игры', desc: 'Предугадывание направления удара' },
    20: { name: 'Хозяин штрафной', desc: 'Тотальный контроль вратарской зоны' }
  }
};

function getSkillPerkHtml(key, currentVal) {
  const perks = SKILL_PERKS[key];
  if (!perks) return '';
  const perk10 = perks[10];
  const perk20 = perks[20];
  const has10 = currentVal >= 10;
  const has20 = currentVal >= 20;

  return `
    <div class="th-sc-perks-row">
      <span class="th-sc-perk ${has10 ? 'active' : 'locked'}" title="${perk10.desc}">
        ${has10 ? '✨' : '🔒'} +10: ${perk10.name}
      </span>
      <span class="th-sc-perk ${has20 ? 'active' : 'locked'}" title="${perk20.desc}">
        ${has20 ? '⭐' : '🔒'} +20: ${perk20.name}
      </span>
    </div>
  `;
}

let thActiveTab = 'starters'; // 'starters' | 'reserve'

function openTrainingHubModal(targetPlayerId, preserveScroll = false) {
  const modal = document.getElementById('modalTrainingHub') || document.getElementById('modalTrainingCamp');
  if (!modal) return;

  const box = modal.querySelector('.modal-box--training-hub') || modal.querySelector('.modal-box') || modal;
  const isAlreadyOpen = !modal.classList.contains('hidden');
  const savedBoxScroll = (isAlreadyOpen && box) ? box.scrollTop : 0;
  const savedModalScroll = isAlreadyOpen ? modal.scrollTop : 0;
  const savedWinScroll = isAlreadyOpen ? (window.pageYOffset || (document.documentElement ? document.documentElement.scrollTop : 0) || 0) : null;

  const starters = getValidMyClubSquad();
  const unlocked = getUnlockedCardsList();
  const starterIds = starters.map(s => s ? s.id : null).filter(Boolean);
  const reserve = unlocked.filter(p => !starterIds.includes(p.id));

  // Determine active player
  if (!targetPlayerId) {
    if (activeTrainingPlayerId) {
      targetPlayerId = activeTrainingPlayerId;
    } else {
      targetPlayerId = starters[0] ? starters[0].id : (unlocked[0] ? unlocked[0].id : 'komilzhonov_120');
    }
  }
  activeTrainingPlayerId = targetPlayerId;

  const player = PLAYERS_DB.find(p => p.id === targetPlayerId) || starters[0] || unlocked[0] || PLAYERS_DB[0];
  if (!player) return;

  // If selected player is in reserve, set active tab to reserve; if in starters, set to starters
  if (starters.some(s => s && s.id === player.id)) {
    thActiveTab = 'starters';
  } else if (reserve.some(r => r && r.id === player.id)) {
    thActiveTab = 'reserve';
  }

  const pData = getPlayerTrainingData(player.id, player.position);

  // 1. Setup Tabs
  const tabStarters = document.getElementById('thTabStarters');
  const tabReserve = document.getElementById('thTabReserve');
  const reserveCountEl = document.getElementById('thReserveCount');
  if (reserveCountEl) reserveCountEl.textContent = reserve.length;

  if (tabStarters) {
    tabStarters.className = 'th-tab-btn' + (thActiveTab === 'starters' ? ' active' : '');
    tabStarters.onclick = () => {
      thActiveTab = 'starters';
      renderPlayerCarousel();
    };
  }
  if (tabReserve) {
    tabReserve.className = 'th-tab-btn' + (thActiveTab === 'reserve' ? ' active' : '');
    tabReserve.onclick = () => {
      thActiveTab = 'reserve';
      renderPlayerCarousel();
    };
  }

// Utility for short player surname
function getShortLastName(fullName) {
  if (!fullName) return '';
  const clean = fullName.trim();
  const parts = clean.split(/\s+/);
  if (parts.length === 1) return parts[0];
  const upper = clean.toUpperCase();
  if (upper.startsWith('ДЕ ') || upper.startsWith('ВАН ') || upper.startsWith('ФОН ') || upper.startsWith('ЛА ') || upper.startsWith('ЭЛЬ ')) {
    return clean;
  }
  return parts[parts.length - 1];
}

  // 2. Render Player Carousel Selector
  function renderPlayerCarousel() {
    if (tabStarters) tabStarters.className = 'th-tab-btn' + (thActiveTab === 'starters' ? ' active' : '');
    if (tabReserve) tabReserve.className = 'th-tab-btn' + (thActiveTab === 'reserve' ? ' active' : '');

    const scrollEl = document.getElementById('thStartersScroll');
    if (!scrollEl) return;
    scrollEl.innerHTML = '';

    const list = thActiveTab === 'starters' ? starters : reserve;
    if (!list.length) {
      scrollEl.innerHTML = '<div style="color:var(--silver);font-size:0.75rem;padding:12px;text-align:center;width:100%;">В этой категории пока нет игроков.</div>';
      return;
    }

    list.forEach(p => {
      if (!p) return;
      const isCur = p.id === activeTrainingPlayerId;
      const isStarter = starterIds.includes(p.id);
      const curData = getPlayerTrainingData(p.id, p.position);
      const bonusOvr = getPlayerBonusOvr(p.id);
      const totalOvr = (p.rating || 75) + bonusOvr;
      const shortLastName = getShortLastName(p.name);

      const chip = document.createElement('div');
      chip.className = 'th-player-chip' + (isStarter ? ' starter' : '') + (isCur ? ' active' : '');
      chip.innerHTML = `
        <div class="th-chip-header">
          <span class="th-chip-pos">${p.position}</span>
          ${isStarter ? '<span class="th-chip-star" title="Основной состав">⭐</span>' : ''}
        </div>
        <span class="th-chip-name" title="${p.name}">${shortLastName}</span>
        <span class="th-chip-tp">⚡ ${curData.points} TP</span>
      `;
      chip.addEventListener('click', () => {
        openTrainingHubModal(p.id);
      });
      scrollEl.appendChild(chip);

      if (isCur && scrollEl) {
        // Horizontally center active chip in carousel without triggering vertical window/modal scroll jumps
        const chipLeft = chip.offsetLeft;
        const chipWidth = chip.offsetWidth;
        const scrollWidth = scrollEl.clientWidth;
        if (scrollWidth > 0) {
          scrollEl.scrollLeft = chipLeft - (scrollWidth / 2) + (chipWidth / 2);
        }
      }
    });
  }

  renderPlayerCarousel();

  // 3. Render Hero section
  const heroImg = document.getElementById('thHeroImg');
  const heroName = document.getElementById('thHeroName');
  const heroMeta = document.getElementById('thHeroMeta');
  const heroPoints = document.getElementById('thHeroPoints');
  const heroBaseOvr = document.getElementById('thHeroBaseOvr');
  const heroBonusOvr = document.getElementById('thHeroBonusOvr');

  if (heroImg) {
    heroImg.src = player.image || 'pers/Vibor/Выбор.png';
    heroImg.alt = player.name;
  }
  if (heroName) heroName.textContent = player.name;
  if (heroMeta) {
    heroMeta.innerHTML = `${player.position} • Базовый ${player.rating} OVR • ${getCountryFlag(player.country)} ${player.country}`;
  }
  if (heroPoints) {
    heroPoints.textContent = `${pData.points} TP`;
  }
  const totalPoints = getPlayerInvestedPoints(pData);
  const curBonusOvr = Math.floor(totalPoints / 5);
  const totalOvr = (player.rating || 75) + curBonusOvr;

  const heroOvrWrap = document.getElementById('thHeroOvrWrap') || (heroBaseOvr ? heroBaseOvr.parentElement : null);
  if (heroOvrWrap) {
    heroOvrWrap.innerHTML = `РЕЙТИНГ: <b>${totalOvr}</b> <span class="ovr-green">(+${curBonusOvr} OVR)</span> <small style="opacity:0.7;margin-left:6px;">[Вложено: ${totalPoints} TP]</small>`;
  } else {
    if (heroBaseOvr) heroBaseOvr.textContent = player.rating;
    if (heroBonusOvr) {
      heroBonusOvr.textContent = curBonusOvr > 0 ? `+${curBonusOvr} OVR` : '+0 OVR';
      heroBonusOvr.style.color = curBonusOvr > 0 ? 'var(--gold)' : 'rgba(255,255,255,0.4)';
    }
  }

  // 4. Render 5 Skills
  const container = document.getElementById('thSkillsContainer');
  if (container) {
    container.innerHTML = '';
    const isGk = player.position === 'GK';
    const skillsList = isGk ? GK_SKILLS : OUTFIELD_SKILLS;

    skillsList.forEach(sk => {
      const val = Math.min(MAX_SKILL_UPGRADE, Math.max(0, parseInt(pData.stats[sk.key], 10) || 0));
      const card = document.createElement('div');
      card.className = 'th-skill-card';
      const isMax = val >= MAX_SKILL_UPGRADE;
      const canUpgrade = pData.points > 0 && !isMax;

      const perksHtml = getSkillPerkHtml(sk.key, val);

      card.innerHTML = `
        <div class="th-sc-left">
          <span class="th-sc-icon">${sk.icon}</span>
          <div class="th-sc-text">
            <span class="th-sc-name">${sk.name}</span>
            <span class="th-sc-desc">${sk.desc}</span>
            ${perksHtml}
          </div>
        </div>
        <div class="th-sc-center">
          <span class="th-sc-val">+${val} / ${MAX_SKILL_UPGRADE}</span>
          <div class="th-sc-bar-wrap">
            <div class="th-sc-bar-fill" style="width: ${(val / MAX_SKILL_UPGRADE) * 100}%;"></div>
          </div>
        </div>
        <button type="button" class="th-sc-btn-plus" title="Вложить 1 TP (+1)" ${canUpgrade ? '' : 'disabled'}>+</button>
      `;

      const btnPlus = card.querySelector('.th-sc-btn-plus');
      if (btnPlus) {
        btnPlus.addEventListener('click', (e) => {
          if (e) {
            e.preventDefault();
            e.stopPropagation();
          }
          const curEntry = getPlayerTrainingData(player.id, player.position);
          if (curEntry.points <= 0) {
            showToast(`Недостаточно очков (TP) у игрока ${player.name}! Сыграйте турнирный матч.`);
            return;
          }
          const currentVal = Math.min(MAX_SKILL_UPGRADE, Math.max(0, parseInt(curEntry.stats[sk.key], 10) || 0));
          if (currentVal >= MAX_SKILL_UPGRADE) {
            showToast(`Навык ${sk.name} уже прокачан до максимума (+${MAX_SKILL_UPGRADE})!`);
            return;
          }

          // Lock scroll position
          const currentBoxScroll = box ? box.scrollTop : 0;
          const currentModalScroll = modal ? modal.scrollTop : 0;
          const currentWinScroll = window.pageYOffset || (document.documentElement ? document.documentElement.scrollTop : 0) || 0;

          curEntry.points -= 1;
          const newVal = currentVal + 1;
          curEntry.stats[sk.key] = newVal;
          const all = getAllPlayerTrainingData();
          all[String(player.id)] = curEntry;
          saveAllPlayerTrainingData(all);

          let perkUnlockedMsg = '';
          if (newVal === 10 && SKILL_PERKS[sk.key] && SKILL_PERKS[sk.key][10]) {
            perkUnlockedMsg = ` ✨ Открыт перк: «${SKILL_PERKS[sk.key][10].name}»!`;
          } else if (newVal === 20 && SKILL_PERKS[sk.key] && SKILL_PERKS[sk.key][20]) {
            perkUnlockedMsg = ` ⭐ Открыт перк: «${SKILL_PERKS[sk.key][20].name}»!`;
          }

          showToast(`⚡ ${player.name}: +1 к ${sk.name}!${perkUnlockedMsg} Осталось ${curEntry.points} TP.`);

          // In-place UI update without rebuilding DOM tree:
          // 1. Hero points
          const heroPointsEl = document.getElementById('thHeroPoints');
          if (heroPointsEl) heroPointsEl.textContent = `${curEntry.points} TP`;

          // 2. Hero OVR calculation and display
          const totalPoints = getPlayerInvestedPoints(curEntry);
          const curBonusOvr = Math.floor(totalPoints / 5);
          const totalOvr = (player.rating || 75) + curBonusOvr;
          const heroOvrWrapEl = document.getElementById('thHeroOvrWrap') || (heroBaseOvr ? heroBaseOvr.parentElement : null);
          if (heroOvrWrapEl) {
            heroOvrWrapEl.innerHTML = `РЕЙТИНГ: <b>${totalOvr}</b> <span class="ovr-green">(+${curBonusOvr} OVR)</span> <small style="opacity:0.7;margin-left:6px;">[Вложено: ${totalPoints} TP]</small>`;
          }

          // 3. This skill card values
          const valEl = card.querySelector('.th-sc-val');
          if (valEl) valEl.textContent = `+${newVal} / ${MAX_SKILL_UPGRADE}`;

          const fillEl = card.querySelector('.th-sc-bar-fill');
          if (fillEl) fillEl.style.width = `${(newVal / MAX_SKILL_UPGRADE) * 100}%`;

          const existingPerks = card.querySelector('.th-sc-perks-row');
          if (existingPerks) {
            existingPerks.outerHTML = getSkillPerkHtml(sk.key, newVal);
          }

          // 4. Update all + buttons in the skills container based on remaining points and max values
          container.querySelectorAll('.th-skill-card').forEach(sc => {
            const btn = sc.querySelector('.th-sc-btn-plus');
            const valTxt = sc.querySelector('.th-sc-val');
            const scVal = valTxt ? (parseInt(valTxt.textContent.replace('+', ''), 10) || 0) : 0;
            if (btn) {
              btn.disabled = curEntry.points <= 0 || scVal >= MAX_SKILL_UPGRADE;
            }
          });

          // 5. Update active player's chip TP badge in carousel
          const scrollEl = document.getElementById('thStartersScroll');
          if (scrollEl) {
            const activeChip = scrollEl.querySelector('.th-player-chip.active');
            if (activeChip) {
              const tpEl = activeChip.querySelector('.th-chip-tp');
              if (tpEl) tpEl.textContent = `⚡ ${curEntry.points} TP`;
            }
          }

          // 6. Global sync
          updateClubOVR();
          updateTrainingHubBadge();

          // 7. Ensure scroll position is locked exactly where it was
          if (box && box.scrollTop !== currentBoxScroll) box.scrollTop = currentBoxScroll;
          if (modal && modal.scrollTop !== currentModalScroll) modal.scrollTop = currentModalScroll;
          if (window.pageYOffset !== currentWinScroll) window.scrollTo(0, currentWinScroll);
        });
      }

      container.appendChild(card);
    });
  }

  // 5. Individual Reset Button
  const btnReset = document.getElementById('btnThResetPlayer');
  if (btnReset) {
    btnReset.onclick = () => {
      const all = getAllPlayerTrainingData();
      const curEntry = getPlayerTrainingData(player.id, player.position);
      const totalSpent = getPlayerInvestedPoints(curEntry);
      if (totalSpent <= 0) {
        showToast('У этого игрока нет вложенных очков навыков для сброса.');
        return;
      }
      for (const k of Object.keys(curEntry.stats)) {
        curEntry.stats[k] = 0;
      }

      curEntry.points = (curEntry.points || 0) + totalSpent;
      all[String(player.id)] = curEntry;
      saveAllPlayerTrainingData(all);

      showToast(`↺ Навыки ${player.name} сброшены! Игроку возвращено ${totalSpent} TP.`);
      openTrainingHubModal(player.id, true);
      updateClubOVR();
    };
  }

  updateTrainingHubBadge();
  modal.classList.remove('hidden');

  if (isAlreadyOpen || preserveScroll) {
    if (box) box.scrollTop = savedBoxScroll;
    if (modal) modal.scrollTop = savedModalScroll;
    if (savedWinScroll !== null) window.scrollTo(0, savedWinScroll);

    requestAnimationFrame(() => {
      if (box) box.scrollTop = savedBoxScroll;
      if (modal) modal.scrollTop = savedModalScroll;
      if (savedWinScroll !== null) window.scrollTo(0, savedWinScroll);
    });
  }
}

function openTrainingCampModal(playerId, preserveScroll = false) {
  openTrainingHubModal(playerId, preserveScroll);
}

function openRolesPickerModal(roleKey) {
  const modal = document.getElementById('modalRolesPicker');
  const title = document.getElementById('rolesPickerTitle');
  const list = document.getElementById('rolesCandidatesList');
  if (!modal || !list) return;

  const roleTitles = {
    captain: 'НАЗНАЧЕНИЕ КАПИТАНА (+3 OVR)',
    penalty: 'НАЗНАЧЕНИЕ ПЕНАЛЬТИСТА (SHO)',
    setPieces: 'ИСПОЛНИТЕЛЬ СТАНДАРТОВ (PAS)'
  };
  const roleIcons = {
    captain: '👑',
    penalty: '🎯',
    setPieces: '👟'
  };
  if (title) title.textContent = roleTitles[roleKey] || 'НАЗНАЧЕНИЕ РОЛИ';
  const icon = document.getElementById('rolesPickerIcon');
  if (icon) icon.textContent = roleIcons[roleKey] || '👑';

  list.innerHTML = '';
  const squadIds = (save.myClubSquad || []).filter(Boolean);
  const players = squadIds.map(id => PLAYERS_DB.find(p => p.id === id)).filter(Boolean);

  if (!players.length) {
    list.innerHTML = '<div style="text-align:center;padding:20px;color:var(--silver);">Сначала соберите состав основы!</div>';
    modal.classList.remove('hidden');
    return;
  }

  // Sort candidates by the key stat
  const sorted = [...players].sort((a, b) => {
    if (roleKey === 'penalty') {
      const shoA = (a.stats && a.stats.sho) || 50;
      const shoB = (b.stats && b.stats.sho) || 50;
      return shoB - shoA;
    } else if (roleKey === 'setPieces') {
      const pasA = (a.stats && a.stats.pas) || 50;
      const pasB = (b.stats && b.stats.pas) || 50;
      return pasB - pasA;
    }
    return b.rating - a.rating;
  });

  sorted.forEach(p => {
    const item = document.createElement('div');
    const isCurrent = save.myClubRoles[roleKey] === p.id;
    item.className = 'role-candidate-item' + (isCurrent ? ' current' : '');

    let statText = `OVR ${p.rating}`;
    if (roleKey === 'penalty' && p.stats) statText = `SHO ${p.stats.sho}`;
    if (roleKey === 'setPieces' && p.stats) statText = `PAS ${p.stats.pas}`;

    item.innerHTML = `
      <div class="role-cand-left">
        <img src="${p.image}" class="role-cand-img" alt="${p.name}">
        <div>
          <div class="role-cand-name">${p.name}</div>
          <div class="role-cand-pos">${p.position} • ${getCountryFlag(p.country)} ${p.country}</div>
        </div>
      </div>
      <div class="role-cand-stat">${statText}</div>
    `;

    item.addEventListener('click', () => {
      save.myClubRoles[roleKey] = p.id;
      writeSave();
      modal.classList.add('hidden');
      renderMyClubField();
      showToast(`👑 ${p.name} назначен на роль!`);
    });

    list.appendChild(item);
  });

  modal.classList.remove('hidden');
}

function openClubStatsModal() {
  const modal = document.getElementById('modalClubStats');
  if (!modal) return;

  const st = save.clubStats || {
    matches: 0, wins: 0, draws: 0, losses: 0, goalsFor: 0, goalsAgainst: 0, cleanSheets: 0, playerStats: {}
  };

  const stMatches = document.getElementById('stMatches');
  const stWins = document.getElementById('stWins');
  const stDraws = document.getElementById('stDraws');
  const stLosses = document.getElementById('stLosses');
  const stGoals = document.getElementById('stGoals');
  const stCleanSheets = document.getElementById('stCleanSheets');

  if (stMatches) stMatches.textContent = st.matches || 0;
  if (stWins) stWins.textContent = st.wins || 0;
  if (stDraws) stDraws.textContent = st.draws || 0;
  if (stLosses) stLosses.textContent = st.losses || 0;
  if (stGoals) stGoals.textContent = `${st.goalsFor || 0}:${st.goalsAgainst || 0}`;
  if (stCleanSheets) stCleanSheets.textContent = st.cleanSheets || 0;

  // Hall of Fame calculation
  let topScorer = null;
  let topScorerGoals = 0;
  let topGk = null;
  let topGkSheets = 0;
  let topCaps = null;
  let topCapsCount = 0;

  const pStats = st.playerStats || {};
  Object.keys(pStats).forEach(id => {
    const ps = pStats[id];
    const p = PLAYERS_DB.find(pl => pl.id === id);
    if (!p) return;

    if (ps.goals > topScorerGoals) {
      topScorerGoals = ps.goals;
      topScorer = p;
    }
    if (ps.cleanSheets > topGkSheets) {
      topGkSheets = ps.cleanSheets;
      topGk = p;
    }
    if (ps.matches > topCapsCount) {
      topCapsCount = ps.matches;
      topCaps = p;
    }
  });

  const hofTopScorer = document.getElementById('hofTopScorer');
  const hofTopScorerStat = document.getElementById('hofTopScorerStat');
  const hofTopGk = document.getElementById('hofTopGk');
  const hofTopGkStat = document.getElementById('hofTopGkStat');
  const hofTopCaps = document.getElementById('hofTopCaps');
  const hofTopCapsStat = document.getElementById('hofTopCapsStat');

  if (hofTopScorer) hofTopScorer.textContent = topScorer ? topScorer.name : '—';
  if (hofTopScorerStat) hofTopScorerStat.textContent = `${topScorerGoals} голов`;

  if (hofTopGk) hofTopGk.textContent = topGk ? topGk.name : '—';
  if (hofTopGkStat) hofTopGkStat.textContent = `${topGkSheets} сухих матчей`;

  if (hofTopCaps) hofTopCaps.textContent = topCaps ? topCaps.name : '—';
  if (hofTopCapsStat) hofTopCapsStat.textContent = `${topCapsCount} матчей`;

  // Quests
  const questsList = document.getElementById('questsList');
  if (questsList) {
    questsList.innerHTML = '';
    const questsConfig = [
      {
        id: 'scorer_10',
        title: '🎯 Снайпер клуба',
        desc: 'Забейте 10 голов одним игроком за клуб',
        reward: 1000,
        progress: `${Math.min(10, topScorerGoals)}/10`,
        completed: topScorerGoals >= 10
      },
      {
        id: 'matches_25',
        title: '🎖️ Преданность клубу',
        desc: 'Сыграйте 25 матчей в режиме «Мой Клуб»',
        reward: 2500,
        progress: `${Math.min(25, st.matches || 0)}/25`,
        completed: (st.matches || 0) >= 25
      },
      {
        id: 'clean_5',
        title: '🧤 Сухой рубеж',
        desc: 'Оформите 5 сухих матчей в симуляции',
        reward: 1500,
        progress: `${Math.min(5, st.cleanSheets || 0)}/5`,
        completed: (st.cleanSheets || 0) >= 5
      }
    ];

    if (!Array.isArray(save.claimedClubQuests)) save.claimedClubQuests = [];

    questsConfig.forEach(q => {
      const isClaimed = save.claimedClubQuests.includes(q.id);
      const card = document.createElement('div');
      card.className = 'quest-card';

      let btnClass = 'quest-btn locked';
      let btnText = q.progress;
      if (isClaimed) {
        btnClass = 'quest-btn claimed';
        btnText = 'Выполнено ✓';
      } else if (q.completed) {
        btnClass = 'quest-btn claimable';
        btnText = `Забрать +${q.reward} ★`;
      }

      card.innerHTML = `
        <div class="quest-info">
          <div class="quest-title">${q.title}</div>
          <div class="quest-desc">${q.desc}</div>
          <div class="quest-reward">Награда: +${q.reward} VI Coins</div>
        </div>
        <button class="${btnClass}">${btnText}</button>
      `;

      const btn = card.querySelector('.quest-btn');
      if (btn && q.completed && !isClaimed) {
        btn.addEventListener('click', () => {
          save.claimedClubQuests.push(q.id);
          save.coins += q.reward;
          writeSave();
          updateTopBar();
          burstParticles();
          showToast(`💰 Награда +${q.reward} VI Coins получена!`);
          openClubStatsModal();
        });
      }

      questsList.appendChild(card);
    });
  }

  modal.classList.remove('hidden');
}

/* ═══════════════════════════════════════════════════════════════════
   18. ТОП-КЛУБЫ, РАСШИРЕННЫЕ ПУЛЫ И ДИНАМИЧЕСКАЯ ЖЕРЕБЬЕВКА
═══════════════════════════════════════════════════════════════════ */
const TOURNAMENT_POOLS = {
  pl: [
    { club: 'Манчестер Сити', ovr: 89, stars: ['Холанн', 'Де Брёйне', 'Родри', 'Фоден', 'Бернарду'], gk: 'Эдерсон' },
    { club: 'Ливерпуль', ovr: 88, stars: ['Салах', 'Ван Дейк', 'Трент', 'Макаллистер', 'Диас'], gk: 'Алиссон' },
    { club: 'Арсенал', ovr: 87, stars: ['Сака', 'Эдегор', 'Салиба', 'Райс', 'Мартинелли'], gk: 'Райя' },
    { club: 'Челси', ovr: 84, stars: ['Палмер', 'Энцо', 'Кайседо', 'Джексон', 'Нкунку'], gk: 'Санчес' },
    { club: 'Манчестер Юнайтед', ovr: 84, stars: ['Бруну Фернандеш', 'Рашфорд', 'Гарначо', 'Каземиро', 'Де Лигт'], gk: 'Онана' },
    { club: 'Тоттенхэм', ovr: 83, stars: ['Сон', 'Мэддисон', 'Ромеро', 'Кулусевски', 'Порро'], gk: 'Викарио' },
    { club: 'Ньюкасл', ovr: 83, stars: ['Исак', 'Гимарайнс', 'Гордон', 'Жоэлинтон', 'Шер'], gk: 'Поуп' },
    { club: 'Астон Вилла', ovr: 83, stars: ['Уоткинс', 'Тилеманс', 'Макгинн', 'Бэйли', 'Пау Торрес'], gk: 'Мартинес' }
  ],
  laliga: [
    { club: 'Реал Мадрид', ovr: 90, stars: ['Винисиус', 'Мбаппе', 'Беллингем', 'Вальверде', 'Родриго'], gk: 'Куртуа' },
    { club: 'Барселона', ovr: 88, stars: ['Левандовски', 'Ямаль', 'Педри', 'Рафинья', 'Гави'], gk: 'тер Стеген' },
    { club: 'Атлетико Мадрид', ovr: 86, stars: ['Гризманн', 'Альварес', 'Де Пауль', 'Коке', 'Хименес'], gk: 'Облак' },
    { club: 'Севилья', ovr: 82, stars: ['Окампос', 'Лукебакио', 'Гудель', 'Навас', 'Сауль'], gk: 'Нюланд' },
    { club: 'Реал Сосьедад', ovr: 83, stars: ['Субименди', 'Кубо', 'Оярсабаль', 'Браис Мендес', 'Ремиро'], gk: 'Ремиро' },
    { club: 'Вильярреал', ovr: 82, stars: ['Баэна', 'Жерар Морено', 'Айосе Перес', 'Парехо', 'Альбиоль'], gk: 'Конде' },
    { club: 'Бетис', ovr: 82, stars: ['Иско', 'Ло Чельсо', 'Форнальс', 'Бакамбу', 'Бельерин'], gk: 'Силва' },
    { club: 'Атлетик Бильбао', ovr: 83, stars: ['Нико Уильямс', 'Иньяки Уильямс', 'Сансет', 'Вивиан', 'Гурусета'], gk: 'Симон' }
  ],
  ucl: [
    { club: 'Бавария', ovr: 90, stars: ['Кейн', 'Мусиала', 'Сане', 'Киммих', 'Дэвис'], gk: 'Нойер' },
    { club: 'ПСЖ', ovr: 89, stars: ['Дембеле', 'Барколя', 'Витинья', 'Хакими', 'Маркиньос'], gk: 'Доннарумма' },
    { club: 'Интер', ovr: 88, stars: ['Лаутаро', 'Барелла', 'Тюрам', 'Чалханоглу', 'Бастони'], gk: 'Зоммер' },
    { club: 'Боруссия Д', ovr: 85, stars: ['Брандт', 'Гирасси', 'Мален', 'Забитцер', 'Шлоттербек'], gk: 'Кобель' },
    { club: 'Ювентус', ovr: 85, stars: ['Влахович', 'Йылдыз', 'Копмейнерс', 'Локателли', 'Бремер'], gk: 'Ди Грегорио' },
    { club: 'Байер Леверкузен', ovr: 87, stars: ['Вирц', 'Джака', 'Гримальдо', 'Фримпонг', 'Та'], gk: 'Градецки' },
    { club: 'Реал Мадрид', ovr: 92, stars: ['Винисиус', 'Мбаппе', 'Беллингем', 'Вальверде', 'Куртуа'], gk: 'Куртуа' },
    { club: 'Манчестер Сити', ovr: 91, stars: ['Холанн', 'Де Брёйне', 'Родри', 'Фоден', 'Диаш'], gk: 'Эдерсон' },
    { club: 'Барселона', ovr: 89, stars: ['Левандовски', 'Ямаль', 'Педри', 'Рафинья', 'Гави'], gk: 'тер Стеген' },
    { club: 'Ливерпуль', ovr: 89, stars: ['Салах', 'Ван Дейк', 'Трент', 'Макаллистер', 'Диас'], gk: 'Алиссон' },
    { club: 'Арсенал', ovr: 88, stars: ['Сака', 'Эдегор', 'Салиба', 'Райс', 'Мартинелли'], gk: 'Райя' }
  ]
};

const OPPONENT_ROSTERS = {
  'Атлетик Бильбао': [
    { role: 'GK', name: 'Симон' },
    { role: 'RB', name: 'Де Маркос' },
    { role: 'CB', name: 'Вивиан' },
    { role: 'CB', name: 'Йерай' },
    { role: 'LB', name: 'Берчиче' },
    { role: 'CM', name: 'Весга' },
    { role: 'CAM', name: 'Сансет' },
    { role: 'CM', name: 'Прадос' },
    { role: 'RW', name: 'Иньяки Уильямс' },
    { role: 'ST', name: 'Гурусета' },
    { role: 'LW', name: 'Нико Уильямс' }
  ],
  'Ливерпуль': [
    { role: 'GK', name: 'Алиссон' },
    { role: 'RB', name: 'Трент' },
    { role: 'CB', name: 'Конате' },
    { role: 'CB', name: 'Ван Дейк' },
    { role: 'LB', name: 'Робертсон' },
    { role: 'CM', name: 'Гравенберх' },
    { role: 'CAM', name: 'Собослаи' },
    { role: 'CM', name: 'Макаллистер' },
    { role: 'RW', name: 'Салах' },
    { role: 'ST', name: 'Нуньес' },
    { role: 'LW', name: 'Диас' }
  ],
  'Манчестер Сити': [
    { role: 'GK', name: 'Эдерсон' },
    { role: 'RB', name: 'Уокер' },
    { role: 'CB', name: 'Диаш' },
    { role: 'CB', name: 'Аканджи' },
    { role: 'LB', name: 'Гвардиол' },
    { role: 'CM', name: 'Родри' },
    { role: 'CAM', name: 'Де Брёйне' },
    { role: 'CM', name: 'Ковачич' },
    { role: 'RW', name: 'Бернарду' },
    { role: 'ST', name: 'Холанн' },
    { role: 'LW', name: 'Фоден' }
  ],
  'Арсенал': [
    { role: 'GK', name: 'Райя' },
    { role: 'RB', name: 'Уайт' },
    { role: 'CB', name: 'Салиба' },
    { role: 'CB', name: 'Габриэл' },
    { role: 'LB', name: 'Тимбер' },
    { role: 'CM', name: 'Парти' },
    { role: 'CAM', name: 'Эдегор' },
    { role: 'CM', name: 'Райс' },
    { role: 'RW', name: 'Сака' },
    { role: 'ST', name: 'Хавертц' },
    { role: 'LW', name: 'Мартинелли' }
  ],
  'Челси': [
    { role: 'GK', name: 'Санчес' },
    { role: 'RB', name: 'Гюсто' },
    { role: 'CB', name: 'Фофана' },
    { role: 'CB', name: 'Колвилл' },
    { role: 'LB', name: 'Кукурелья' },
    { role: 'CM', name: 'Кайседо' },
    { role: 'CAM', name: 'Палмер' },
    { role: 'CM', name: 'Энцо' },
    { role: 'RW', name: 'Мадуэке' },
    { role: 'ST', name: 'Джексон' },
    { role: 'LW', name: 'Нету' }
  ],
  'Манчестер Юнайтед': [
    { role: 'GK', name: 'Онана' },
    { role: 'RB', name: 'Мазрауи' },
    { role: 'CB', name: 'Де Лигт' },
    { role: 'CB', name: 'Мартинес' },
    { role: 'LB', name: 'Далот' },
    { role: 'CM', name: 'Каземиро' },
    { role: 'CAM', name: 'Бруну Фернандеш' },
    { role: 'CM', name: 'Майну' },
    { role: 'RW', name: 'Гарначо' },
    { role: 'ST', name: 'Хёйлунн' },
    { role: 'LW', name: 'Рашфорд' }
  ],
  'Тоттенхэм': [
    { role: 'GK', name: 'Викарио' },
    { role: 'RB', name: 'Порро' },
    { role: 'CB', name: 'Ромеро' },
    { role: 'CB', name: 'ван де Вен' },
    { role: 'LB', name: 'Удоджи' },
    { role: 'CM', name: 'Биссума' },
    { role: 'CAM', name: 'Мэддисон' },
    { role: 'CM', name: 'Сарр' },
    { role: 'RW', name: 'Кулусевски' },
    { role: 'ST', name: 'Соланке' },
    { role: 'LW', name: 'Сон' }
  ],
  'Ньюкасл': [
    { role: 'GK', name: 'Поуп' },
    { role: 'RB', name: 'Триппьер' },
    { role: 'CB', name: 'Шер' },
    { role: 'CB', name: 'Берн' },
    { role: 'LB', name: 'Холл' },
    { role: 'CM', name: 'Тонали' },
    { role: 'CAM', name: 'Жоэлинтон' },
    { role: 'CM', name: 'Гимарайнс' },
    { role: 'RW', name: 'Мёрфи' },
    { role: 'ST', name: 'Исак' },
    { role: 'LW', name: 'Гордон' }
  ],
  'Астон Вилла': [
    { role: 'GK', name: 'Мартинес' },
    { role: 'RB', name: 'Кэш' },
    { role: 'CB', name: 'Конса' },
    { role: 'CB', name: 'Пау Торрес' },
    { role: 'LB', name: 'Динь' },
    { role: 'CM', name: 'Онана' },
    { role: 'CAM', name: 'Макгинн' },
    { role: 'CM', name: 'Тилеманс' },
    { role: 'RW', name: 'Бэйли' },
    { role: 'ST', name: 'Уоткинс' },
    { role: 'LW', name: 'Роджерс' }
  ],
  'Реал Мадрид': [
    { role: 'GK', name: 'Куртуа' },
    { role: 'RB', name: 'Карвахаль' },
    { role: 'CB', name: 'Рюдигер' },
    { role: 'CB', name: 'Милитао' },
    { role: 'LB', name: 'Менди' },
    { role: 'CM', name: 'Вальверде' },
    { role: 'CAM', name: 'Беллингем' },
    { role: 'CM', name: 'Тчуамени' },
    { role: 'RW', name: 'Родриго' },
    { role: 'ST', name: 'Мбаппе' },
    { role: 'LW', name: 'Винисиус' }
  ],
  'Барселона': [
    { role: 'GK', name: 'тер Стеген' },
    { role: 'RB', name: 'Кунде' },
    { role: 'CB', name: 'Кубарси' },
    { role: 'CB', name: 'Иньиго Мартинес' },
    { role: 'LB', name: 'Бальде' },
    { role: 'CM', name: 'Касадо' },
    { role: 'CAM', name: 'Ольмо' },
    { role: 'CM', name: 'Педри' },
    { role: 'RW', name: 'Ямаль' },
    { role: 'ST', name: 'Левандовски' },
    { role: 'LW', name: 'Рафинья' }
  ],
  'Атлетико Мадрид': [
    { role: 'GK', name: 'Облак' },
    { role: 'RB', name: 'Молина' },
    { role: 'CB', name: 'Ле Норман' },
    { role: 'CB', name: 'Хименес' },
    { role: 'LB', name: 'Рейнилду' },
    { role: 'CM', name: 'Де Пауль' },
    { role: 'CAM', name: 'Гризманн' },
    { role: 'CM', name: 'Коке' },
    { role: 'RW', name: 'Льоренте' },
    { role: 'ST', name: 'Альварес' },
    { role: 'LW', name: 'Серлот' }
  ],
  'Севилья': [
    { role: 'GK', name: 'Нюланд' },
    { role: 'RB', name: 'Кармона' },
    { role: 'CB', name: 'Баде' },
    { role: 'CB', name: 'Гудель' },
    { role: 'LB', name: 'Педроса' },
    { role: 'CM', name: 'Локонга' },
    { role: 'CAM', name: 'Соу' },
    { role: 'CM', name: 'Сауль' },
    { role: 'RW', name: 'Лукебакио' },
    { role: 'ST', name: 'Исаак Ромеро' },
    { role: 'LW', name: 'Эджуке' }
  ],
  'Реал Сосьедад': [
    { role: 'GK', name: 'Ремиро' },
    { role: 'RB', name: 'Арамбуру' },
    { role: 'CB', name: 'Субельдия' },
    { role: 'CB', name: 'Агерд' },
    { role: 'LB', name: 'Хави Лопес' },
    { role: 'CM', name: 'Субименди' },
    { role: 'CAM', name: 'Браис Мендес' },
    { role: 'CM', name: 'Сучич' },
    { role: 'RW', name: 'Кубо' },
    { role: 'ST', name: 'Оскарссон' },
    { role: 'LW', name: 'Оярсабаль' }
  ],
  'Вильярреал': [
    { role: 'GK', name: 'Конде' },
    { role: 'RB', name: 'Фемения' },
    { role: 'CB', name: 'Альбиоль' },
    { role: 'CB', name: 'Байи' },
    { role: 'LB', name: 'Кардона' },
    { role: 'CM', name: 'Комесанья' },
    { role: 'CAM', name: 'Баэна' },
    { role: 'CM', name: 'Парехо' },
    { role: 'RW', name: 'Пино' },
    { role: 'ST', name: 'Жерар Морено' },
    { role: 'LW', name: 'Айосе Перес' }
  ],
  'Бетис': [
    { role: 'GK', name: 'Силва' },
    { role: 'RB', name: 'Бельерин' },
    { role: 'CB', name: 'Бартра' },
    { role: 'CB', name: 'Льоренте' },
    { role: 'LB', name: 'Перро' },
    { role: 'CM', name: 'Карвалью' },
    { role: 'CAM', name: 'Иско' },
    { role: 'CM', name: 'Ло Чельсо' },
    { role: 'RW', name: 'Форнальс' },
    { role: 'ST', name: 'Бакамбу' },
    { role: 'LW', name: 'Абде' }
  ],
  'Бавария': [
    { role: 'GK', name: 'Нойер' },
    { role: 'RB', name: 'Лаймер' },
    { role: 'CB', name: 'Упамекано' },
    { role: 'CB', name: 'Ким Мин Джэ' },
    { role: 'LB', name: 'Дэвис' },
    { role: 'CM', name: 'Киммих' },
    { role: 'CAM', name: 'Мусиала' },
    { role: 'CM', name: 'Павлович' },
    { role: 'RW', name: 'Олисе' },
    { role: 'ST', name: 'Кейн' },
    { role: 'LW', name: 'Гнабри' }
  ],
  'ПСЖ': [
    { role: 'GK', name: 'Доннарумма' },
    { role: 'RB', name: 'Хакими' },
    { role: 'CB', name: 'Маркиньос' },
    { role: 'CB', name: 'Пачо' },
    { role: 'LB', name: 'Мендеш' },
    { role: 'CM', name: 'Заир-Эмери' },
    { role: 'CAM', name: 'Невеш' },
    { role: 'CM', name: 'Витинья' },
    { role: 'RW', name: 'Дембеле' },
    { role: 'ST', name: 'Коло Муани' },
    { role: 'LW', name: 'Барколя' }
  ],
  'Интер': [
    { role: 'GK', name: 'Зоммер' },
    { role: 'RB', name: 'Думфрис' },
    { role: 'CB', name: 'Павар' },
    { role: 'CB', name: 'Ачерби' },
    { role: 'LB', name: 'Димарко' },
    { role: 'CM', name: 'Барелла' },
    { role: 'CAM', name: 'Мхитарян' },
    { role: 'CM', name: 'Чалханоглу' },
    { role: 'RW', name: 'Бастони' },
    { role: 'ST', name: 'Лаутаро' },
    { role: 'LW', name: 'Тюрам' }
  ],
  'Боруссия Д': [
    { role: 'GK', name: 'Кобель' },
    { role: 'RB', name: 'Рюэрсон' },
    { role: 'CB', name: 'Антон' },
    { role: 'CB', name: 'Шлоттербек' },
    { role: 'LB', name: 'Бенсебайни' },
    { role: 'CM', name: 'Джан' },
    { role: 'CAM', name: 'Брандт' },
    { role: 'CM', name: 'Забитцер' },
    { role: 'RW', name: 'Мален' },
    { role: 'ST', name: 'Гирасси' },
    { role: 'LW', name: 'Байно-Гиттенс' }
  ],
  'Ювентус': [
    { role: 'GK', name: 'Ди Грегорио' },
    { role: 'RB', name: 'Калулу' },
    { role: 'CB', name: 'Гатти' },
    { role: 'CB', name: 'Бремер' },
    { role: 'LB', name: 'Камбьязо' },
    { role: 'CM', name: 'Локателли' },
    { role: 'CAM', name: 'Копмейнерс' },
    { role: 'CM', name: 'Тюрам' },
    { role: 'RW', name: 'Консейсау' },
    { role: 'ST', name: 'Влахович' },
    { role: 'LW', name: 'Йылдыз' }
  ],
  'Байер Леверкузен': [
    { role: 'GK', name: 'Градецки' },
    { role: 'RB', name: 'Фримпонг' },
    { role: 'CB', name: 'Та' },
    { role: 'CB', name: 'Тапсоба' },
    { role: 'LB', name: 'Гримальдо' },
    { role: 'CM', name: 'Джака' },
    { role: 'CAM', name: 'Вирц' },
    { role: 'CM', name: 'Андрих' },
    { role: 'RW', name: 'Телла' },
    { role: 'ST', name: 'Бонифейс' },
    { role: 'LW', name: 'Адли' }
  ]
};

function getOpponentRoster(clubName) {
  if (clubName && OPPONENT_ROSTERS[clubName]) {
    return OPPONENT_ROSTERS[clubName];
  }
  // Try partial match
  if (clubName) {
    const foundKey = Object.keys(OPPONENT_ROSTERS).find(k => clubName.includes(k) || k.includes(clubName));
    if (foundKey) return OPPONENT_ROSTERS[foundKey];
  }
  // Fallback 11 unique players
  return [
    { role: 'GK',  name: 'Вратарь' },
    { role: 'RB',  name: 'Правый Защ.' },
    { role: 'CB',  name: 'Центр. Защ. 1' },
    { role: 'CB',  name: 'Центр. Защ. 2' },
    { role: 'LB',  name: 'Левый Защ.' },
    { role: 'CM',  name: 'Опорник' },
    { role: 'CAM', name: 'Плеймейкер' },
    { role: 'CM',  name: 'Центр. Хавбек' },
    { role: 'RW',  name: 'Правый Вингер' },
    { role: 'ST',  name: 'Форвард' },
    { role: 'LW',  name: 'Левый Вингер' }
  ];
}

const TOURNAMENTS_CONFIG = [
  {
    id: 'pl',
    name: 'Premier League Cup',
    country: 'Англия',
    icon: '🏴󠁧󠁢󠁥󠁮󠁧󠁿',
    diff: 'Сложность: Средняя',
    cardClass: 'tournament-card--pl',
    rewards: { coins: 2500, xp: 100, pack: 'pro' }
  },
  {
    id: 'laliga',
    name: 'La Liga Trophy',
    country: 'Испания',
    icon: '🇪🇸',
    diff: 'Сложность: Высокая',
    cardClass: 'tournament-card--laliga',
    rewards: { coins: 3500, xp: 150, pack: 'elite' }
  },
  {
    id: 'ucl',
    name: 'Champions League',
    country: 'Европа',
    icon: '🏆',
    diff: 'Сложность: Эксперт',
    cardClass: 'tournament-card--ucl',
    rewards: { coins: 5000, xp: 250, pack: 'matus' }
  }
];

function generateTournamentBracket(tournId) {
  const pool = TOURNAMENT_POOLS[tournId] || TOURNAMENT_POOLS.pl;
  const shuffled = [...pool].sort(() => Math.random() - 0.5);
  // Pick 7 distinct opponents for an 8-team knockout bracket (User + 7 clubs)
  const drawn = shuffled.slice(0, 7);

  const stages = [
    {
      name: '1/4 Финала',
      club: drawn[0].club,
      ovr: drawn[0].ovr,
      stars: drawn[0].stars,
      gk: drawn[0].gk
    },
    {
      name: '1/2 Финала',
      club: (drawn[1].ovr >= drawn[2].ovr ? drawn[1] : drawn[2]).club,
      ovr: Math.max(drawn[1].ovr, drawn[2].ovr),
      stars: (drawn[1].ovr >= drawn[2].ovr ? drawn[1] : drawn[2]).stars,
      gk: (drawn[1].ovr >= drawn[2].ovr ? drawn[1] : drawn[2]).gk
    },
    {
      name: 'Финал',
      club: (drawn[3].ovr >= drawn[4].ovr ? drawn[3] : drawn[4]).club,
      ovr: Math.max(drawn[3].ovr, drawn[4].ovr, drawn[5]?.ovr || 86),
      stars: (drawn[3].ovr >= drawn[4].ovr ? drawn[3] : drawn[4]).stars,
      gk: (drawn[3].ovr >= drawn[4].ovr ? drawn[3] : drawn[4]).gk
    }
  ];

  if (!save.tournaments) save.tournaments = {};
  if (!save.tournaments[tournId]) save.tournaments[tournId] = { stage: 0, won: false };
  save.tournaments[tournId].stages = stages;
  save.tournaments[tournId].drawnClubs = drawn.map(d => d.club);
  writeSave();
  return stages;
}

function getTournamentStages(tournId) {
  if (save.tournaments && save.tournaments[tournId] && Array.isArray(save.tournaments[tournId].stages) && save.tournaments[tournId].stages.length === 3) {
    return save.tournaments[tournId].stages;
  }
  return generateTournamentBracket(tournId);
}

function openTournamentsModal() {
  const modal = document.getElementById('modalTournaments');
  const list = document.getElementById('tournamentsList');
  if (!modal || !list) return;

  list.innerHTML = '';
  if (!save.tournaments) {
    save.tournaments = { pl: { stage: 0, won: false }, laliga: { stage: 0, won: false }, ucl: { stage: 0, won: false } };
  }
  if (!save.trophyCounts) save.trophyCounts = { pl: 0, laliga: 0, ucl: 0 };

  // Update Trophy Room counts in modal top
  const elPl = document.getElementById('trophyCountPL');
  const elLaliga = document.getElementById('trophyCountLaLiga');
  const elUcl = document.getElementById('trophyCountUCL');
  if (elPl) elPl.textContent = `🏆 ${save.trophyCounts.pl || 0}`;
  if (elLaliga) elLaliga.textContent = `🏆 ${save.trophyCounts.laliga || 0}`;
  if (elUcl) elUcl.textContent = `🏆 ${save.trophyCounts.ucl || 0}`;

  TOURNAMENTS_CONFIG.forEach(tourn => {
    const tState = save.tournaments[tourn.id] || { stage: 0, won: false };
    const stages = getTournamentStages(tourn.id);
    const curStageIdx = Math.min(2, tState.stage);
    const stageInfo = stages[curStageIdx] || stages[0];
    const isWon = tState.won;
    const trophiesWon = (save.trophyCounts && save.trophyCounts[tourn.id]) || 0;

    const card = document.createElement('div');
    card.className = `tournament-card ${tourn.cardClass}`;

    // Bracket stages
    const bracketHtml = stages.map((s, idx) => {
      let statusClass = '';
      if (isWon || idx < curStageIdx) statusClass = 'completed';
      else if (idx === curStageIdx) statusClass = 'active';

      const icon = isWon || idx < curStageIdx ? '✓' : (idx === curStageIdx ? '▶' : '○');
      return `<div class="bracket-step ${statusClass}" title="${s.club}">${icon} ${s.name} (${s.club})</div>`;
    }).join('<span class="bracket-arrow">➔</span>');

    card.innerHTML = `
      <div class="tourn-header">
        <div class="tourn-title-wrap">
          <span class="tourn-icon">${tourn.icon}</span>
          <div>
            <div class="tourn-title">${tourn.name}</div>
            <div class="tourn-diff">${tourn.diff}</div>
          </div>
        </div>
        <div style="display:flex;flex-direction:column;align-items:flex-end;gap:2px;">
          ${trophiesWon > 0 ? `<span style="font-family:var(--ui);font-weight:900;color:var(--gold);font-size:.78rem;">🏆 Кубков: ${trophiesWon}</span>` : ''}
          ${isWon ? '<span style="font-family:var(--ui);font-weight:900;color:#00e676;font-size:.72rem;">👑 ЧЕМПИОН</span>' : ''}
        </div>
      </div>

      <div class="tourn-bracket">
        ${bracketHtml}
      </div>

      <div class="tourn-matchup">
        <div class="tourn-opp-info">
          <div class="tourn-opp-name">${isWon ? 'Кубок завоёван! Жеребьевка доступна' : `Соперник: ${stageInfo.club} (${stageInfo.name})`}</div>
          <div class="tourn-opp-stars">${isWon ? 'Сыграйте новый розыгрыш кубка с новыми клубами' : `Звёзды: ${stageInfo.stars.slice(0, 3).join(', ')} • ВРТ: ${stageInfo.gk}`}</div>
        </div>
        <div class="tourn-opp-ovr">${isWon ? '👑' : `OVR ${stageInfo.ovr}`}</div>
      </div>

      <button class="btn-gold tourn-play-btn" data-tournid="${tourn.id}">
        ${isWon ? '🔄 Новый розыгрыш (Жеребьевка)' : `▶ Играть матч (${stageInfo.name})`}
      </button>
    `;

    const playBtn = card.querySelector('.tourn-play-btn');
    playBtn.addEventListener('click', () => {
      if (isWon) {
        // Dynamic draw for new campaign!
        generateTournamentBracket(tourn.id);
        save.tournaments[tourn.id].stage = 0;
        save.tournaments[tourn.id].won = false;
        writeSave();
      }
      save.activeTournamentId = tourn.id;
      writeSave();
      modal.classList.add('hidden');
      start2DSimulationMatch(tourn.id);
    });

    list.appendChild(card);
  });

  modal.classList.remove('hidden');
}

/* ═══════════════════════════════════════════════════════════════════
   19. 2D-СИМУЛЯЦИЯ: КИНЕМАТИКА, ТАКТИКА, ЗАМЕНЫ И РАДАР
═══════════════════════════════════════════════════════════════════ */
let simRunning = false;
let simIsPaused = false;
let simAnimId = null;
let simIntervalId = null;
let simMinute = 0;
let simAddedTime = 0;
let simIsHalftimePause = false;
let simHalftimeTimeout = null;

function stopSimLoops() {
  simRunning = false;
  if (tvBroadcastEngine && tvBroadcastEngine.active) {
    tvBroadcastEngine.stop();
  }
  if (simIntervalId) {
    clearInterval(simIntervalId);
    simIntervalId = null;
  }
  if (simAnimId) {
    cancelAnimationFrame(simAnimId);
    simAnimId = null;
  }
  if (simHalftimeTimeout) {
    clearTimeout(simHalftimeTimeout);
    simHalftimeTimeout = null;
  }
}
let simSpeedMode = 1; // 1: 1x (500ms), 2: 2x (250ms), 3: Skip to end
let simScoreUser = 0;
let simScoreAi = 0;
let simUserOvr = 75;
let simAiOvr = 85;
let simCurrentTournament = null;
let simCurrentStageInfo = null;
let simScheduledEvents = [];
let simUserSquadPlayers = [];
let simParticipatingPlayerIds = new Set();
let simUserScorers = [];
let simCarrier = { team: 'user', name: '', index: 9 };
let simCurrentTactic = 'balance'; // 'bus' | 'balance' | 'press'
let simSubsUsed = 0; // Max 3
let simUsedBenchIds = new Set();
let simUserInjuries = {}; // slotIndex -> boolean
let simSelectedSubId = null;
let simSelectedPitchSlot = null;
let simStats = null;
let simPenaltyResult = null;

// Engine & Renderer instances
let matchEngine2D = null;
let matchRenderer = null;

// Radar dots & ball state (legacy aliases preserved)
let simBluePlayers = [];
let simRedPlayers = [];
let simBall = { x: 50, y: 50, targetX: 50, targetY: 50 };
let simPlayPhase = 'IDLE'; // IDLE, BUILDUP, PROGRESSION, FINISHING, CELEBRATION
let goalOverlayTimeout = null;
let goalOverlayFadeTimeout = null;

function triggerSimGoalFlash(scorerName, team) {
  if (tvBroadcastEngine && tvBroadcastEngine.active) {
    tvBroadcastEngine.onGoal(scorerName || 'ИГРОК', team || 'user');
  }
  const overlay = document.getElementById('simGoalOverlay');
  if (!overlay) return;
  if (goalOverlayTimeout) clearTimeout(goalOverlayTimeout);
  if (goalOverlayFadeTimeout) clearTimeout(goalOverlayFadeTimeout);

  overlay.style.display = 'flex';
  overlay.classList.remove('hidden', 'fade-out');
  void overlay.offsetWidth;
  overlay.classList.add('active');

  goalOverlayTimeout = setTimeout(() => {
    overlay.classList.remove('active');
    overlay.classList.add('fade-out');
    goalOverlayFadeTimeout = setTimeout(() => {
      overlay.classList.remove('fade-out');
      overlay.classList.add('hidden');
      overlay.style.display = 'none';
    }, 300);
  }, 1200);
}

function getSimUserPlayer(slotIndex) {
  const p = simUserSquadPlayers[slotIndex];
  if (p) return p;
  const anyP = simUserSquadPlayers.find(Boolean);
  return anyP || { name: 'ИГРОК', position: 'ST' };
}

function getSimUserGK() {
  const gk = (simUserSquadPlayers || []).find(p => p && p.position === 'GK');
  if (gk) return gk;
  return getSimUserPlayer(10) || getSimUserPlayer(0);
}

function start2DSimulationMatch(tournId) {
  // Stop any currently running simulation before starting a new one
  stopSimLoops();
  if (simTacticCooldownTimer) { clearInterval(simTacticCooldownTimer); simTacticCooldownTimer = null; }
  simIsHalftimePause = false;
  simAddedTime = Math.floor(Math.random() * 3) + 1; // 1-3 added minutes

  // Close modals
  const modalTourn = document.getElementById('modalTournaments');
  if (modalTourn) modalTourn.classList.add('hidden');
  const modalResult = document.getElementById('modalSimResult');
  if (modalResult) modalResult.classList.add('hidden');
  const modalPenalty = document.getElementById('modalPenaltyShootout');
  if (modalPenalty) modalPenalty.classList.add('hidden');

  // Ensure squad has valid 11 players
  ensureValidSquad();

  tournId = tournId || save.activeTournamentId || 'pl';
  const tourn = TOURNAMENTS_CONFIG.find(t => t.id === tournId) || TOURNAMENTS_CONFIG[0];
  simCurrentTournament = tourn;

  const tState = (save.tournaments && save.tournaments[tourn.id]) || { stage: 0, won: false };
  const stages = getTournamentStages(tourn.id);
  const curStageIdx = Math.min(2, tState.stage);
  simCurrentStageInfo = stages[curStageIdx] || stages[0];

  // Reset match statistics
  simStats = {
    userPoss: 50,
    aiPoss: 50,
    userShots: 0,
    userShotsOnTarget: 0,
    aiShots: 0,
    aiShotsOnTarget: 0,
    userFouls: 0,
    aiFouls: 0,
    userSaves: 0,
    aiSaves: 0
  };
  simPenaltyResult = null;

  // Setup squad and mastery bonus
  const squad = (myClubSquad && myClubSquad.length === 11 && myClubSquad[0]) 
    ? myClubSquad 
    : getValidMyClubSquad();
  simUserSquadPlayers = squad.map(p => typeof p === 'string' ? PLAYERS_DB.find(pl => pl.id === p) : p);
  simParticipatingPlayerIds = new Set(simUserSquadPlayers.map(p => p ? p.id : null).filter(Boolean));
  simUserScorers = [];
  simSubsUsed = 0;
  simUsedBenchIds = new Set();
  simUserInjuries = {};
  simCurrentTactic = 'balance';
  simIsPaused = false;

  // Apply Captain Bonus (+3 OVR)
  const squadIds = simUserSquadPlayers.map(p => p ? p.id : null);
  const hasCaptain = save.myClubRoles && save.myClubRoles.captain && squadIds.includes(save.myClubRoles.captain);
  const captainBonus = hasCaptain ? 3 : 0;

  const baseOvr = calcMyClubBaseRating() || 75;
  const mastery = getClubMasteryData(save.myClubMatchesTogether || 0);
  simUserOvr = baseOvr + mastery.bonus + captainBonus;
  simAiOvr = simCurrentStageInfo.ovr;

  // Setup UI
  const simMyClubName = document.getElementById('simMyClubName');
  if (simMyClubName) simMyClubName.textContent = 'МОЙ КЛУБ';

  const simMyClubOvr = document.getElementById('simMyClubOvr');
  if (simMyClubOvr) {
    simMyClubOvr.textContent = captainBonus > 0 ? `OVR ${simUserOvr} (👑+3)` : `OVR ${simUserOvr}`;
  }

  const simAiClubNameEl = document.getElementById('simAiClubName');
  if (simAiClubNameEl) simAiClubNameEl.textContent = simCurrentStageInfo.club;

  const simAiClubOvr = document.getElementById('simAiClubOvr');
  if (simAiClubOvr) simAiClubOvr.textContent = `OVR ${simAiOvr}`;

  const simMatchSub = document.getElementById('simMatchSub');
  if (simMatchSub) simMatchSub.textContent = `${tourn.name} • ${simCurrentStageInfo.name}`;

  simScoreUser = 0;
  simScoreAi = 0;
  updateSimScoreboard();

  // Reset clock, overlay, tactic buttons, and subs button
  simMinute = 0;
  simSpeedMode = 1;
  const btnSimSpeed = document.getElementById('btnSimSpeed');
  if (btnSimSpeed) btnSimSpeed.textContent = '1x';

  const btnSimSubs = document.getElementById('btnSimSubs');
  if (btnSimSubs) btnSimSubs.textContent = '🔄 Замена (0/3)';

  updateTacticsUI('balance');

  const simPeriod = document.getElementById('simPeriod');
  if (simPeriod) simPeriod.textContent = '1-Й ТАЙМ';

  if (goalOverlayTimeout) clearTimeout(goalOverlayTimeout);
  if (goalOverlayFadeTimeout) clearTimeout(goalOverlayFadeTimeout);
  const goalOverlay = document.getElementById('simGoalOverlay');
  if (goalOverlay) {
    goalOverlay.classList.remove('active', 'fade-out');
    goalOverlay.classList.add('hidden');
    goalOverlay.style.display = 'none';
  }

  // Clear live feed and add kickoff announcement
  const feedList = document.getElementById('simFeedList');
  if (feedList) {
    feedList.innerHTML = '';
    addSimFeedItem(0, '🏁', `Стартовый свисток матча ${simCurrentStageInfo.name}! «Мой Клуб» (OVR ${simUserOvr}) против «${simCurrentStageInfo.club}» (OVR ${simAiOvr}).`);
    if (hasCaptain) {
      const cap = PLAYERS_DB.find(p => p.id === save.myClubRoles.captain);
      if (cap) addSimFeedItem(0, '👑', `Команду на поле выводит капитан ${cap.name} (+3 к морали и OVR команды)!`);
    }
    const activeBuffs = getActiveTeamBuffs(simUserSquadPlayers);
    if (activeBuffs.homeland.active) {
      addSimFeedItem(0, '🌍', `Бафф «Землячество» (${activeBuffs.homeland.topCountry}): +10% к силе удара и отбору!`);
    }
    if (activeBuffs.young.active) {
      addSimFeedItem(0, '⚡', 'Бафф «Молодая кровь»: +10% к скорости рывка и выносливости состава!');
    }
    if (activeBuffs.experienced.active) {
      addSimFeedItem(0, '🧠', 'Бафф «На опыте»: +15% к точности передач и перехватам!');
    }
  }

  // Pre-schedule realistic events across 90 minutes
  buildSimTimeline();

  // Initialize Match Engine 2D
  if (!matchEngine2D) {
    matchEngine2D = new MatchEngine2D();
  }
  const oppClub = (simCurrentStageInfo && simCurrentStageInfo.club) || 'Атлетик Бильбао';
  const currentFormation = localStorage.getItem('myClubFormation') || save.myClubFormation || '4-2-3-1';
  matchEngine2D.init(simUserSquadPlayers, oppClub, currentFormation, simCurrentTactic);

  simBluePlayers = matchEngine2D.userPlayers;
  simRedPlayers = matchEngine2D.oppPlayers;
  simBall = matchEngine2D.ball;

  // Switch screen
  showScreen('screenSimMatch');

  // Start simulation loops
  simRunning = true;
  startSimClock();
  startRadarLoop();
}

function updateSimScoreboard() {
  const scoreA = document.getElementById('simScoreA');
  const scoreB = document.getElementById('simScoreB');
  if (scoreA) scoreA.textContent = simScoreUser;
  if (scoreB) scoreB.textContent = simScoreAi;
}

function updateTacticsUI(tacticKey) {
  simCurrentTactic = tacticKey;
  const bar = document.getElementById('simTacticsBar');
  if (!bar) return;
  bar.querySelectorAll('.tactic-btn').forEach(btn => {
    btn.classList.toggle('active', btn.dataset.tactic === tacticKey);
  });
}

function buildSimTimeline() {
  simScheduledEvents = [];
  const eventMinutes = [7, 16, 24, 34, 42, 52, 60, 68, 77, 84, 88];

  const squadPlayers = simUserSquadPlayers || [];
  const buffs = getActiveTeamBuffs(squadPlayers);
  const homelandShoBonus = buffs.homeland.active ? 0.05 : 0;
  const expDefBonus = buffs.experienced.active ? 0.04 : 0;

  const striker = squadPlayers.find(p => p && (p.position === 'ST' || p.position === 'RW' || p.position === 'LW')) || squadPlayers[0];
  const stUp = striker ? getPlayerUpgrade(striker.id) : {};
  const shoBonus = (parseInt(stUp.sho, 10) || 0) * 0.008;

  const gk = squadPlayers.find(p => p && p.position === 'GK') || squadPlayers[10];
  const gkUp = gk ? getPlayerUpgrade(gk.id) : {};
  const gkSaveBonus = ((parseInt(gkUp.div, 10) || 0) + (parseInt(gkUp.ref, 10) || 0)) * 0.006;

  const defBonus = (squadPlayers.reduce((acc, p) => {
    if (!p || p.position === 'GK') return acc;
    const u = getPlayerUpgrade(p.id);
    return acc + (parseInt(u.def, 10) || 0) + (parseInt(u.phy, 10) || 0);
  }, 0)) * 0.001;

  eventMinutes.forEach(min => {
    const userWeight = Math.min(0.85, Math.max(0.15, simUserOvr / (simUserOvr + simAiOvr)));
    const rand = Math.random();

    const userGoalChance = 0.28 * (userWeight * 2) + shoBonus + homelandShoBonus;
    const aiGoalChance = Math.max(0.05, 0.25 * ((1 - userWeight) * 2) - gkSaveBonus - defBonus - expDefBonus);

    if (rand < userGoalChance) {
      simScheduledEvents.push({ minute: min, type: 'GOAL_USER' });
    } else if (rand < userGoalChance + aiGoalChance) {
      simScheduledEvents.push({ minute: min, type: 'GOAL_AI' });
    } else if (rand < 0.65) {
      simScheduledEvents.push({ minute: min, type: Math.random() < (0.5 + gkSaveBonus) ? 'SAVE_USER' : 'SAVE_AI' });
    } else if (rand < 0.77) {
      simScheduledEvents.push({ minute: min, type: 'POST' });
    } else if (rand < 0.88) {
      simScheduledEvents.push({ minute: min, type: 'YELLOW_CARD' });
    } else if (rand < 0.94) {
      simScheduledEvents.push({ minute: min, type: 'CORNER' });
    } else {
      simScheduledEvents.push({ minute: min, type: 'INJURY' });
    }
  });
}

function addSimFeedItem(minute, icon, text, extraClass = '') {
  if (tvBroadcastEngine && tvBroadcastEngine.active) {
    tvBroadcastEngine.setTickerCommentary(`${icon} ${text}`);
  }
  const feedList = document.getElementById('simFeedList');
  if (!feedList) return;

  const item = document.createElement('div');
  item.className = 'sim-feed-item ' + extraClass;

  const minEl = document.createElement('div');
  minEl.className = 'sim-feed-minute';
  minEl.textContent = `${minute}'`;

  const contentEl = document.createElement('div');
  contentEl.className = 'sim-feed-content';
  contentEl.innerHTML = `<b>${icon}</b> ${text}`;

  item.appendChild(minEl);
  item.appendChild(contentEl);

  feedList.appendChild(item);
  feedList.scrollTop = feedList.scrollHeight;
}

/* ═══════════════════════════════════════════════════════════════════
   ТАКТИЧЕСКИЙ КУЛДАУН (5 СЕКУНД)
═══════════════════════════════════════════════════════════════════ */
let simTacticCooldown = 0;
let simTacticCooldownTimer = null;

function triggerTacticCooldown(seconds = 5) {
  simTacticCooldown = seconds;
  const bar = document.getElementById('simTacticsBar');
  if (!bar) return;
  const buttons = bar.querySelectorAll('.tactic-btn');
  buttons.forEach(b => {
    b.classList.add('cooldown');
    b.disabled = true;
    let badge = b.querySelector('.tactic-cooldown-badge');
    if (!badge) {
      badge = document.createElement('span');
      badge.className = 'tactic-cooldown-badge';
      b.appendChild(badge);
    }
    badge.textContent = `${simTacticCooldown}s`;
  });

  if (simTacticCooldownTimer) clearInterval(simTacticCooldownTimer);
  simTacticCooldownTimer = setInterval(() => {
    simTacticCooldown--;
    if (simTacticCooldown <= 0) {
      clearInterval(simTacticCooldownTimer);
      simTacticCooldown = 0;
      buttons.forEach(b => {
        b.classList.remove('cooldown');
        b.disabled = false;
        const badge = b.querySelector('.tactic-cooldown-badge');
        if (badge) badge.remove();
      });
    } else {
      buttons.forEach(b => {
        const badge = b.querySelector('.tactic-cooldown-badge');
        if (badge) badge.textContent = `${simTacticCooldown}s`;
      });
    }
  }, 1000);
}

/* ═══════════════════════════════════════════════════════════════════
   MATCH ENGINE 2D — FSM SOCCER SIMULATION ENGINE
   Pure math calculations in relative pitch coordinates (0 to 100).
   - X: 0 (User Goal) -> 100 (Opponent Goal). Goal line User: 2.5. Goal line Opp: 97.5.
   - Y: 0 (Top line) -> 100 (Bottom line). Center: (50, 50).
   - Goals: Y in [41, 59].
═══════════════════════════════════════════════════════════════════ */
// Координаты поля строго в процентах от 0 до 100
function clampPosition(x, y, isGK = false) {
  // Для полевых игроков держим отступ от краев: X in [4, 96], Y in [6, 94] (GK in [2, 98])
  const minX = isGK ? 2 : 4;
  const maxX = isGK ? 98 : 96;
  const minY = 6;
  const maxY = 94;

  return {
    x: Math.max(minX, Math.min(maxX, x)),
    y: Math.max(minY, Math.min(maxY, y))
  };
}

class MatchSimEngine {
  constructor() {
    this.userPlayers = [];
    this.oppPlayers = [];
    this.players = [];
    this.ball = {
      x: 50,
      y: 50,
      vx: 0,
      vy: 0,
      carrier: null,
      lastTouchTeam: 'user',
      lastTouchPlayer: null,
      flightType: 'none',
      flightTarget: null
    };
    this.simTime = 0;
    this.state = 'PLAYING';
    this.goalPauseTimer = 0;
    this.currentTactic = 'balance';
    this.oppClubName = 'Соперник';
    this.activePresser = null;
    this.secondPresser = null;
    this.userPossTicks = 50;
    this.oppPossTicks = 50;
  }

  setTactic(tactic) {
    this.currentTactic = tactic || 'balance';
  }

  init(userSquad, oppClubName, formationKey, tacticKey = 'balance') {
    this.oppClubName = oppClubName || 'Соперник';
    this.currentTactic = tacticKey;
    this.state = 'PLAYING';
    this.goalPauseTimer = 0;
    this.simTime = 0;
    this.userPossTicks = 50;
    this.oppPossTicks = 50;

    const oppRoster = getOpponentRoster(this.oppClubName);
    const structure = FORMATIONS[formationKey] || [1, 3, 2, 4, 1];

    const userSlots = this.calcSlots(structure, 'user');
    const oppSlots = this.calcSlots([3, 3, 4, 1], 'opp');

    const buffs = getActiveTeamBuffs(userSquad);

    this.userPlayers = userSlots.map((slot, idx) => {
      const card = userSquad[idx] || (idx === 10 ? { name: 'Вратарь', position: 'GK' } : { name: `Игрок ${idx + 1}`, position: slot.role });
      const baseStats = this.extractStats(card, slot.role);
      const isGK = slot.role === 'GK';
      const cl = clampPosition(slot.baseX, slot.baseY, isGK);

      // Chemistry Multiplier:
      // 0⚡ = base; 1-2⚡ = +5% speed, pass, def; 3⚡ = +12% all stats
      const chemScore = getPlayerChemistryScore(idx, formationKey, userSquad);
      const stats = { ...baseStats };

      if (chemScore === 3) {
        Object.keys(stats).forEach(k => {
          stats[k] = Math.round(stats[k] * 1.12);
        });
      } else if (chemScore >= 1) {
        stats.pac = Math.round(stats.pac * 1.05);
        stats.pas = Math.round(stats.pas * 1.05);
        stats.def = Math.round(stats.def * 1.05);
      }

      // Team Buffs:
      // «Землячество» (>=5 from same country): +10% def/tackle and shot power
      if (buffs.homeland.active) {
        stats.def = Math.round(stats.def * 1.10);
        stats.sho = Math.round(stats.sho * 1.10);
      }
      // «Молодая кровь» (>=6 from 1-2 курс): +10% PAC speed
      if (buffs.young.active) {
        stats.pac = Math.round(stats.pac * 1.10);
      }
      // «На опыте» (>=6 from 3-4 курс): +15% pass accuracy & interceptions
      if (buffs.experienced.active) {
        stats.pas = Math.round(stats.pas * 1.15);
        stats.def = Math.round(stats.def * 1.15);
      }

      return {
        id: card.id || `u_${idx}`,
        name: card.name || `Игрок ${idx + 1}`,
        team: 'user',
        role: slot.role,
        slotIdx: idx,
        index: idx,
        x: cl.x,
        y: cl.y,
        vx: 0,
        vy: 0,
        baseX: cl.x,
        baseY: cl.y,
        targetX: cl.x,
        targetY: cl.y,
        state: 'STATE_OFF_BALL',
        stats: stats,
        speed: 8.5 + (stats.pac / 100) * 7.5,
        holdTimer: 0,
        maxHoldTime: isGK ? 1.0 : (1.2 + Math.random() * 0.6),
        tackleImmunity: 0
      };
    });

    const oppGkCard = oppRoster.find(c => c.role === 'GK') || oppRoster[0] || { name: 'Вратарь', role: 'GK' };
    const oppDefenders = oppRoster.filter(c => ['CB', 'LB', 'RB', 'LWB', 'RWB', 'DEF'].includes(c.role));
    const oppMidfielders = oppRoster.filter(c => ['CM', 'CAM', 'CDM', 'LM', 'RM', 'MID'].includes(c.role));
    const oppAttackers = oppRoster.filter(c => ['ST', 'LW', 'RW', 'CF', 'ATT'].includes(c.role));

    let defIdx = 0, midIdx = 0, attIdx = 0;

    this.oppPlayers = oppSlots.map((slot, idx) => {
      const isGK = slot.role === 'GK';
      let oppCard = null;
      if (isGK) {
        oppCard = oppGkCard;
      } else if (['ST', 'LW', 'RW', 'ATT'].includes(slot.role)) {
        oppCard = oppAttackers[attIdx++] || oppRoster[idx];
      } else if (['CB', 'LB', 'RB', 'DEF'].includes(slot.role)) {
        oppCard = oppDefenders[defIdx++] || oppRoster[idx];
      } else {
        oppCard = oppMidfielders[midIdx++] || oppRoster[idx];
      }
      if (!oppCard) oppCard = { name: `Соперник ${idx + 1}`, role: slot.role };

      const oppOvr = (typeof simAiOvr === 'number' && simAiOvr > 0) ? simAiOvr : 82;
      const stats = {
        pac: oppOvr + Math.floor(Math.random() * 6 - 3),
        sho: oppOvr + Math.floor(Math.random() * 6 - 3),
        pas: oppOvr + Math.floor(Math.random() * 6 - 3),
        dri: oppOvr + Math.floor(Math.random() * 6 - 3),
        def: oppOvr + Math.floor(Math.random() * 6 - 3),
        phy: oppOvr + Math.floor(Math.random() * 6 - 3),
        div: oppOvr + Math.floor(Math.random() * 6 - 3),
        han: oppOvr + Math.floor(Math.random() * 6 - 3),
        kic: oppOvr + Math.floor(Math.random() * 6 - 3),
        ref: oppOvr + Math.floor(Math.random() * 6 - 3),
        pos: oppOvr + Math.floor(Math.random() * 6 - 3)
      };
      const cl = clampPosition(slot.baseX, slot.baseY, isGK);
      return {
        id: `opp_${idx}`,
        name: oppCard.name,
        team: 'opp',
        role: oppCard.role || slot.role,
        slotIdx: idx,
        index: idx,
        x: cl.x,
        y: cl.y,
        vx: 0,
        vy: 0,
        baseX: cl.x,
        baseY: cl.y,
        targetX: cl.x,
        targetY: cl.y,
        state: 'STATE_OFF_BALL',
        stats: stats,
        speed: 8.5 + (stats.pac / 100) * 7.5,
        holdTimer: 0,
        maxHoldTime: isGK ? 1.0 : (1.2 + Math.random() * 0.6),
        tackleImmunity: 0
      };
    });

    this.players = [...this.userPlayers, ...this.oppPlayers];
    this.resetKickoff('user', true);
  }

  calcSlots(structure, team) {
    const isUser = team === 'user';
    const lineCount = structure.length;
    const slots = [];

    const userLineX = lineCount === 4
      ? [68, 46, 22, 6]
      : [70, 52, 38, 22, 6];

    let pIdx = 0;
    for (let l = 0; l < lineCount; l++) {
      const count = structure[l];
      const ux = userLineX[l];
      const lineX = isUser ? ux : (100 - ux);

      const step = 64 / (count + 1);
      for (let c = 0; c < count; c++) {
        const y = 18 + step * (c + 1);
        let role = 'MID';
        if (l === lineCount - 1) role = 'GK';
        else if (l === lineCount - 2) {
          if (count === 3) role = 'CB';
          else if (count === 4) role = (c === 0 ? 'LB' : (c === 3 ? 'RB' : 'CB'));
          else if (count === 5) role = (c === 0 ? 'LWB' : (c === 4 ? 'RWB' : 'CB'));
          else role = 'DEF';
        } else if (l === 0) {
          if (count === 1) role = 'ST';
          else if (count === 3) role = (c === 0 ? 'LW' : (c === 2 ? 'RW' : 'ST'));
          else role = 'ST';
        } else {
          if (count === 1) role = 'CAM';
          else if (count === 2) role = 'CDM';
          else if (count === 3) role = (c === 0 ? 'LM' : (c === 2 ? 'RM' : 'CM'));
          else role = (c === 0 ? 'LM' : (c === count - 1 ? 'RM' : 'CM'));
        }

        const cl = clampPosition(lineX, y, role === 'GK');
        slots.push({ baseX: cl.x, baseY: cl.y, role, idx: pIdx++ });
      }
    }
    return slots;
  }

  extractStats(card, role) {
    const up = card && card.id ? getPlayerUpgrade(card.id) : {};
    const base = card && card.stats ? card.stats : {};
    const isGK = role === 'GK' || (card && card.position === 'GK');

    // In "МОЙ КЛУБ": Every invested point from playerTrainingData grants +1.8 to the actual in-game attribute
    const calcStat = (baseVal, upVal) => {
      const b = parseInt(baseVal, 10) || 75;
      const u = parseInt(upVal, 10) || 0;
      return b + Math.round(u * 1.8);
    };

    if (isGK) {
      return {
        pac: calcStat(base.pac || 62, up.pos || 0),
        sho: calcStat(base.sho || 45, 0),
        pas: calcStat(base.pas || 68, up.kic || 0),
        dri: calcStat(base.dri || 55, 0),
        def: calcStat(base.def || 82, up.pos || 0),
        phy: calcStat(base.phy || 75, up.han || 0),
        div: calcStat(base.div || base.def || 78, up.div || 0),
        han: calcStat(base.han || 75, up.han || 0),
        kic: calcStat(base.kic || 72, up.kic || 0),
        ref: calcStat(base.ref || base.def || 80, up.ref || 0),
        pos: calcStat(base.pos || 76, up.pos || 0)
      };
    }

    return {
      pac: calcStat(base.pac, up.pac),
      sho: calcStat(base.sho, up.sho),
      pas: calcStat(base.pas, up.pas),
      dri: calcStat(base.dri, up.pas),
      def: calcStat(base.def, up.def),
      phy: calcStat(base.phy, up.phy),
      div: 70,
      han: 70,
      kic: 70,
      ref: 70,
      pos: 70
    };
  }

  substituteUserPlayer(slotIndex, subPlayer) {
    if (!this.userPlayers[slotIndex]) return;
    const oldP = this.userPlayers[slotIndex];
    const stats = this.extractStats(subPlayer, oldP.role);
    this.userPlayers[slotIndex] = {
      ...oldP,
      id: subPlayer.id,
      name: subPlayer.name,
      stats: stats,
      speed: 8.5 + (stats.pac / 100) * 7.5
    };
    this.players = [...this.userPlayers, ...this.oppPlayers];
  }

  resetKickoff(kickingTeam, isInitial = false) {
    this.state = 'PLAYING';
    this.goalPauseTimer = 0;

    // Trigger TV replay wipe if TV mode is active
    if (tvBroadcastEngine && tvBroadcastEngine.active && !isInitial) {
      tvBroadcastEngine.triggerReplayWipe('VI SPORTS REPLAY');
    }

    // Reset base positions smoothly
    this.players.forEach(p => {
      p.x = p.baseX;
      p.y = p.baseY;
      p.vx = 0;
      p.vy = 0;
      p.state = 'STATE_OFF_BALL';
      p.holdTimer = 0;
      p.trapTimer = 0;
      p.sprintBoost = 1;
      p.isJockeying = false;
      p.kickWindup = 0;
      p.tackleImmunity = 0;
    });

    const isUser = kickingTeam === 'user';
    const kickers = isUser ? this.userPlayers : this.oppPlayers;
    const starter = kickers.find(p => p.role === 'ST') || kickers[0];

    starter.x = isUser ? 48.5 : 51.5;
    starter.y = 50;

    this.ball.x = starter.x;
    this.ball.y = starter.y;
    this.ball.vx = 0;
    this.ball.vy = 0;
    this.ball.flightType = 'none';
    this.ball.flightTarget = null;
    this.ball.isHighLob = false;
    this.receiveBall(starter);
  }

  triggerGoal(scoringTeam) {
    this.state = 'GOAL_PAUSE';
    this.goalPauseTimer = 2.2; // Комфортная пауза 2.2с после гола
    this.ball.carrier = null;
    this.ball.flightType = 'none';
    this.ball.flightTarget = null;
    this.ball.isHighLob = false;

    if (scoringTeam === 'user') {
      this.ball.x = 99.0;
      this.ball.y = 50;
      this.ball.vx = 0;
      this.ball.vy = 0;
      simScoreUser++;
      if (simStats) {
        simStats.userShots++;
        simStats.userShotsOnTarget++;
      }
      const scorer = this.ball.lastTouchPlayer || this.userPlayers.find(p => p.role === 'ST') || this.userPlayers[0];
      if (scorer && scorer.id) simUserScorers.push(scorer.id);

      triggerSimGoalFlash(scorer.name, 'user');
      burstParticles();
      updateSimScoreboard();
      addSimFeedItem(simMinute, '⚽', `ГООООЛ! ${scorer.name} вколачивает мяч в сетку ворот «${this.oppClubName}»! (${simScoreUser}:${simScoreAi})`, 'sim-feed-item--goal-user');
    } else {
      this.ball.x = 1.0;
      this.ball.y = 50;
      this.ball.vx = 0;
      this.ball.vy = 0;
      simScoreAi++;
      if (simStats) {
        simStats.aiShots++;
        simStats.aiShotsOnTarget++;
      }
      const oppScorer = this.ball.lastTouchPlayer || this.oppPlayers.find(p => p.role === 'ST') || this.oppPlayers[0];

      triggerSimGoalFlash(oppScorer.name, 'opp');
      updateSimScoreboard();
      addSimFeedItem(simMinute, '⚽', `ГОЛ! ${oppScorer.name} забивает в наши ворота! (${simScoreUser}:${simScoreAi})`, 'sim-feed-item--goal-ai');
    }
  }

  injectAttackOpportunity(team, type) {
    if (this.state !== 'PLAYING') return;
    const isUser = team === 'user';
    const attackers = isUser ? this.userPlayers : this.oppPlayers;
    const st = attackers.find(p => p.role === 'ST' || p.role === 'ATT') || attackers[0];
    const wing = attackers.find(p => ['LW', 'RW', 'LM', 'RM'].includes(p.role)) || attackers[1] || st;
    const targetPlayer = type === 'GOAL' ? st : wing;

    targetPlayer.x = isUser ? (type === 'GOAL' ? 82 : 78) : (type === 'GOAL' ? 18 : 22);
    targetPlayer.y = 50 + (Math.random() * 16 - 8);

    this.receiveBall(targetPlayer);

    setTimeout(() => {
      if (this.state === 'PLAYING' && this.ball.carrier === targetPlayer) {
        this.executeShot(targetPlayer);
      }
    }, 450);
  }

  distPointToSegment(px, py, x1, y1, x2, y2) {
    const l2 = (x2 - x1) * (x2 - x1) + (y2 - y1) * (y2 - y1);
    if (l2 === 0) return Math.hypot(px - x1, py - y1);
    let t = ((px - x1) * (x2 - x1) + (py - y1) * (y2 - y1)) / l2;
    t = Math.max(0, Math.min(1, t));
    return Math.hypot(px - (x1 + t * (x2 - x1)), py - (y1 + t * (y2 - y1)));
  }

  receiveBall(p) {
    if (!p) return;
    if (this.ball.carrier && this.ball.carrier !== p) {
      this.ball.carrier.state = 'STATE_OFF_BALL';
      this.ball.carrier.holdTimer = 0;
    }
    this.ball.carrier = p;
    p.state = 'STATE_ON_BALL';
    p.holdTimer = 0;
    p.trapTimer = 0.5; // 0.5 сек на обработку и разворот корпуса
    p.sprintBoost = 1;
    this.ball.lastTouchTeam = p.team;
    this.ball.lastTouchPlayer = p;
    this.ball.flightType = 'none';
    this.ball.flightTarget = null;
    this.ball.isHighLob = false;
    this.ball.vx = 0;
    this.ball.vy = 0;
    this.ball.x = p.x;
    this.ball.y = p.y;

    if (p.role === 'GK') {
      p.maxHoldTime = 1.0;
      p.tackleImmunity = 999;
    } else {
      p.maxHoldTime = 1.2 + Math.random() * 0.6; // 1.2 - 1.8с на дриблинг
      p.tackleImmunity = 0.55;
    }
  }

  giveBallToGK(gk) {
    if (!gk) return;
    const isUser = gk.team === 'user';
    gk.x = isUser ? 3.5 : 96.5;
    gk.y = 50;
    this.receiveBall(gk);
  }

  executeGKPass(gk) {
    const isUser = gk.team === 'user';
    const teammates = (isUser ? this.userPlayers : this.oppPlayers).filter(p => p !== gk);
    const opponents = (isUser ? this.oppPlayers : this.userPlayers).filter(p => p.role !== 'GK');

    // Сканируем всех полевых партнеров (в первую очередь защитников) и проверяем коридор безопасности:
    // 1) Есть ли хотя бы один игрок соперника на расстоянии < 12% от линии паса?
    // 2) В радиусе < 10% от принимающего защитника?
    const defenders = teammates.filter(p => ['CB', 'LB', 'RB', 'LWB', 'RWB', 'DEF'].includes(p.role));
    let safeDefender = null;

    for (const def of defenders) {
      const hasCloseOpp = opponents.some(op => Math.hypot(op.x - def.x, op.y - def.y) < 10.0);
      const hasLineBlocker = opponents.some(op => this.distPointToSegment(op.x, op.y, gk.x, gk.y, def.x, def.y) < 12.0);

      if (!hasCloseOpp && !hasLineBlocker) {
        safeDefender = def;
        break;
      }
    }

    if (safeDefender) {
      // Вариант А (Короткий розыгрыш): крайний или центральный защитник полностью открыт
      this.executePass(gk, safeDefender);
    } else {
      // Вариант Б (Дальний вынос верхом — Goal Kick / High Punt):
      // Соперник прессингует у штрафной и ближние закрыты
      const midfieldTargets = teammates.filter(p => ['CM', 'CDM', 'CAM', 'LM', 'RM', 'LW', 'RW'].includes(p.role));
      let bestTarget = null;
      let maxScore = -Infinity;

      (midfieldTargets.length > 0 ? midfieldTargets : teammates).forEach(tm => {
        let minOppDist = Infinity;
        opponents.forEach(op => {
          const d = Math.hypot(op.x - tm.x, op.y - tm.y);
          if (d < minOppDist) minOppDist = d;
        });
        const inCenterCircle = tm.x >= 35 && tm.x <= 65;
        let score = minOppDist * 2.5;
        if (inCenterCircle) score += 25;
        if (['LM', 'RM', 'LW', 'RW'].includes(tm.role)) score += 15;
        if (score > maxScore) {
          maxScore = score;
          bestTarget = tm;
        }
      });

      const target = bestTarget || teammates[0];
      this.executeHighPunt(gk, target);
    }
  }

  executeHighPunt(kicker, target) {
    if (!kicker || !target) return;
    this.ball.carrier = null;
    kicker.state = 'STATE_OFF_BALL';
    kicker.holdTimer = 0;
    this.ball.flightType = 'air';
    this.ball.isHighLob = true;
    this.ball.lastTouchTeam = kicker.team;
    this.ball.lastTouchPlayer = kicker;
    this.ball.flightTarget = { x: target.x, y: target.y, receiver: target };

    const dx = target.x - kicker.x;
    const dy = target.y - kicker.y;
    const d = Math.hypot(dx, dy) || 1;
    const puntSpeed = 28;

    this.ball.vx = (dx / d) * puntSpeed;
    this.ball.vy = (dy / d) * puntSpeed;

    if (tvBroadcastEngine && tvBroadcastEngine.active) {
      tvBroadcastEngine.ball3D.vz = 48; // мощный подъем по параболе до z=1.8+
      tvBroadcastEngine.setTickerCommentary(`🧤 Дальний вынос мяча верхом от ворот!`);
    }
  }

  executeThroughPass(carrier, receiver) {
    if (!carrier || !receiver) return;
    this.ball.carrier = null;
    carrier.state = 'STATE_OFF_BALL';
    carrier.holdTimer = 0;
    this.ball.flightType = 'pass';
    this.ball.passType = 'through';
    this.ball.lastTouchTeam = carrier.team;
    this.ball.lastTouchPlayer = carrier;

    const isUser = receiver.team === 'user';
    const leadDist = 9.0 + (receiver.stats.pac / 100) * 3.5;
    const targetX = clampPosition(isUser ? receiver.x + leadDist : receiver.x - leadDist, receiver.y, false).x;
    const targetY = receiver.y;

    this.ball.flightTarget = { x: targetX, y: targetY, receiver, isThrough: true };

    receiver.sprintBoost = 1.30;
    receiver.targetX = targetX;
    receiver.targetY = targetY;

    const pas = carrier.stats.pas || 75;
    const passSpeed = 34 + (pas / 100) * 16;
    const dx = targetX - carrier.x;
    const dy = targetY - carrier.y;
    const d = Math.hypot(dx, dy) || 1;

    this.ball.vx = (dx / d) * passSpeed;
    this.ball.vy = (dy / d) * passSpeed;

    if (tvBroadcastEngine && tvBroadcastEngine.active) {
      tvBroadcastEngine.setTickerCommentary(`⚡ Разрезной пас на ход! ${receiver.name} ускоряется за мячом!`);
    }
  }

  executeSwitchOfPlay(carrier, target) {
    if (!carrier || !target) return;
    this.ball.carrier = null;
    carrier.state = 'STATE_OFF_BALL';
    carrier.holdTimer = 0;
    this.ball.flightType = 'air';
    this.ball.isHighLob = true;
    this.ball.passType = 'switch';
    this.ball.lastTouchTeam = carrier.team;
    this.ball.lastTouchPlayer = carrier;

    this.ball.flightTarget = { x: target.x, y: target.y, receiver: target };

    const dx = target.x - carrier.x;
    const dy = target.y - carrier.y;
    const d = Math.hypot(dx, dy) || 1;
    const switchSpeed = 30;

    this.ball.vx = (dx / d) * switchSpeed;
    this.ball.vy = (dy / d) * switchSpeed;

    if (tvBroadcastEngine && tvBroadcastEngine.active) {
      tvBroadcastEngine.ball3D.vz = 44;
      tvBroadcastEngine.setTickerCommentary(`🔄 Перевод атаки верхом на свободный противоположный фланг!`);
    }
  }

  executeSmartPass(carrier) {
    const isUser = carrier.team === 'user';
    const teammates = (isUser ? this.userPlayers : this.oppPlayers).filter(p => p !== carrier && p.role !== 'GK');
    const opponents = (isUser ? this.oppPlayers : this.userPlayers).filter(p => p.role !== 'GK');

    // 1. Проверяем скопление игроков в зоне мяча (Switch of Play / Верховой перевод на другой фланг)
    const playersInZone = this.players.filter(p => Math.hypot(p.x - carrier.x, p.y - carrier.y) < 16.0).length;
    if (playersInZone >= 4) {
      const oppositeFlankTarget = teammates.find(tm => {
        const isOppositeSide = (carrier.y < 50 && tm.y > 62) || (carrier.y >= 50 && tm.y < 38);
        if (!isOppositeSide) return false;
        const minOpp = Math.min(...opponents.map(op => Math.hypot(op.x - tm.x, op.y - tm.y)));
        return minOpp > 10.0;
      });

      if (oppositeFlankTarget) {
        this.executeSwitchOfPlay(carrier, oppositeFlankTarget);
        return;
      }
    }

    // 2. Разрезной пас на ход (Through Pass) для открывающихся нападающих
    const runners = teammates.filter(tm => ['ST', 'LW', 'RW'].includes(tm.role));
    let bestThroughRunner = null;
    let bestThroughScore = -Infinity;

    runners.forEach(rn => {
      const progress = isUser ? (rn.x - carrier.x) : (carrier.x - rn.x);
      if (progress > 5.0 && progress < 38.0) {
        const leadDist = 8.5 + (rn.stats.pac / 100) * 3.5;
        const leadX = isUser ? rn.x + leadDist : rn.x - leadDist;
        const targetX = clampPosition(leadX, rn.y, false).x;
        const targetY = rn.y;

        let minLineDist = Infinity;
        opponents.forEach(op => {
          const ld = this.distPointToSegment(op.x, op.y, carrier.x, carrier.y, targetX, targetY);
          if (ld < minLineDist) minLineDist = ld;
        });

        if (minLineDist > 5.0) {
          const score = progress * 2.0 + (rn.stats.pac || 75) * 0.5 + minLineDist * 3.0;
          if (score > bestThroughScore) {
            bestThroughScore = score;
            bestThroughRunner = rn;
          }
        }
      }
    });

    if (bestThroughRunner && bestThroughScore > 50) {
      this.executeThroughPass(carrier, bestThroughRunner);
      return;
    }

    // 3. Стандартный комбинационный пас в ноги (Ground Pass)
    const inCentralThird = carrier.x >= 30 && carrier.x <= 70;
    let bestCandidate = null;
    let bestScore = -Infinity;

    teammates.forEach(tm => {
      const progress = isUser ? (tm.x - carrier.x) : (carrier.x - tm.x);

      let minOppDist = Infinity;
      opponents.forEach(op => {
        const d = Math.hypot(op.x - tm.x, op.y - tm.y);
        if (d < minOppDist) minOppDist = d;
      });

      let minLineDist = Infinity;
      opponents.forEach(op => {
        const ld = this.distPointToSegment(op.x, op.y, carrier.x, carrier.y, tm.x, tm.y);
        if (ld < minLineDist) minLineDist = ld;
      });

      const passDist = Math.hypot(tm.x - carrier.x, tm.y - carrier.y);

      let score = 50;
      score += progress * 1.5;
      score += Math.min(minOppDist, 14) * 2.2;
      if (minLineDist < 4.5) {
        score -= (4.5 - minLineDist) * 16;
      }

      if (inCentralThird) {
        if (['CM', 'CDM', 'CAM', 'LM', 'RM'].includes(tm.role)) score += 20;
        if (['LW', 'RW'].includes(tm.role)) score += 16;
      } else {
        if (['ST', 'LW', 'RW'].includes(tm.role) && progress > 3.0) score += 18;
      }

      if (passDist < 6) score -= 25;
      if (passDist > 55) score -= (passDist - 55) * 1.5;
      score += Math.random() * 14;

      if (score > bestScore) {
        bestScore = score;
        bestCandidate = tm;
      }
    });

    const receiver = bestCandidate || teammates[0];
    this.executePass(carrier, receiver);
  }

  executePass(carrier, receiver) {
    if (!carrier || !receiver) return;
    this.ball.carrier = null;
    carrier.state = 'STATE_OFF_BALL';
    carrier.holdTimer = 0;
    this.ball.flightType = 'pass';
    this.ball.lastTouchTeam = carrier.team;
    this.ball.lastTouchPlayer = carrier;

    const isUser = receiver.team === 'user';
    const leadX = isUser ? Math.min(3.0, (receiver.stats.pac || 75) * 0.025) : -Math.min(3.0, (receiver.stats.pac || 75) * 0.025);
    const targetX = clampPosition(receiver.x + leadX, receiver.y, false).x;
    const targetY = receiver.y;

    this.ball.flightTarget = { x: targetX, y: targetY, receiver };

    const pas = carrier.stats.pas || 75;
    const passSpeed = 32 + (pas / 100) * 15;
    const dx = targetX - carrier.x;
    const dy = targetY - carrier.y;
    const d = Math.hypot(dx, dy) || 1;

    this.ball.vx = (dx / d) * passSpeed;
    this.ball.vy = (dy / d) * passSpeed;
  }

  executeShot(shooter) {
    if (!shooter) return;
    this.ball.carrier = null;
    shooter.state = 'STATE_OFF_BALL';
    shooter.holdTimer = 0;
    this.ball.flightType = 'shot';
    this.ball.lastTouchTeam = shooter.team;
    this.ball.lastTouchPlayer = shooter;
    this.ball.isHighLob = false;

    const isUser = shooter.team === 'user';
    const goalX = isUser ? 99.0 : 1.0;
    const sho = shooter.stats.sho || 75;
    const oppGk = (isUser ? this.oppPlayers : this.userPlayers).find(p => p.role === 'GK');
    const gkStat = oppGk ? (((oppGk.stats.div || 75) + (oppGk.stats.ref || 75)) / 2) : 78;

    if (isUser) {
      if (simStats) simStats.userShots++;
    } else {
      if (simStats) simStats.aiShots++;
    }

    const shotSpeed = 44 + (sho / 100) * 18;

    // Сбалансированное распределение исходов ударов:
    // ~16-22% ГОЛ, ~28% Промах/Блок/Штанга, ~52-56% Сейв вратаря
    const goalProb = Math.max(0.12, Math.min(0.25, 0.18 + ((sho - gkStat) / 200) * 0.16));
    const missProb = 0.28;
    const roll = Math.random();

    if (roll < goalProb) {
      // 1. ГОЛ! (~18-22%)
      if (isUser) {
        if (simStats) simStats.userShotsOnTarget++;
      } else {
        if (simStats) simStats.aiShotsOnTarget++;
      }
      const goalY = 50 + (Math.random() < 0.5 ? -6.2 : 6.2);
      const dx = goalX - shooter.x;
      const dy = goalY - shooter.y;
      const d = Math.hypot(dx, dy) || 1;

      this.ball.vx = (dx / d) * (shotSpeed * 1.15);
      this.ball.vy = (dy / d) * (shotSpeed * 1.15);
      this.ball.flightTarget = { x: goalX, y: goalY, isGoal: true, scoringTeam: shooter.team };
    } else if (roll < goalProb + missProb) {
      // 2. ПРОМАХ / БЛОК / ШТАНГА (~28%)
      const isPost = Math.random() < 0.35;
      const missY = isPost ? (50 + (Math.random() < 0.5 ? -10.5 : 10.5)) : (50 + (Math.random() < 0.5 ? -17 : 17));
      const targetX = goalX;
      const dx = targetX - shooter.x;
      const dy = missY - shooter.y;
      const d = Math.hypot(dx, dy) || 1;

      this.ball.vx = (dx / d) * shotSpeed;
      this.ball.vy = (dy / d) * shotSpeed;
      this.ball.flightTarget = { x: targetX, y: missY, isMiss: true, isPost: isPost, gk: oppGk };

      if (isPost) {
        addSimFeedItem(simMinute, '🎯', `Опаснейший момент! Мяч сотрясает каркас ворот!`, 'sim-feed-item--post');
      } else {
        const isBlock = Math.random() < 0.5;
        if (isBlock) {
          addSimFeedItem(simMinute, '🛡️', `Удар заблокирован плотной обороной!`, 'sim-feed-item--block');
        } else {
          addSimFeedItem(simMinute, '💨', `Мяч после мощного удара просвистел рядом со штангой!`, 'sim-feed-item--miss');
        }
      }
    } else {
      // 3. СЕЙВ ВРАТАРЯ (~52-56%) с 40% шансом углового удара
      if (isUser) {
        if (simStats) simStats.userShotsOnTarget++;
      } else {
        if (simStats) simStats.aiShotsOnTarget++;
      }
      const isCorner = Math.random() < 0.40;
      const targetX = oppGk ? oppGk.x : goalX;
      const targetY = oppGk ? oppGk.y : 50;
      const dx = targetX - shooter.x;
      const dy = targetY - shooter.y;
      const d = Math.hypot(dx, dy) || 1;

      this.ball.vx = (dx / d) * shotSpeed;
      this.ball.vy = (dy / d) * shotSpeed;
      this.ball.flightTarget = { x: targetX, y: targetY, isSave: true, isCorner: isCorner, gk: oppGk, attackingTeam: shooter.team };

      if (oppGk) {
        if (oppGk.team === 'user') {
          if (simStats) simStats.userSaves++;
          addSimFeedItem(simMinute, '🧤', `СЕЙВ! Наш вратарь ${oppGk.name} спасает ворота в красивом прыжке!`, 'sim-feed-item--save');
        } else {
          if (simStats) simStats.aiSaves++;
          addSimFeedItem(simMinute, '🧤', `СЕЙВ! Вратарь «${this.oppClubName}» ${oppGk.name} парирует мощный удар!`, 'sim-feed-item--save');
        }
      }
    }
  }

  triggerCornerKick(attackingTeam) {
    this.state = 'CORNER_KICK';
    this.cornerTimer = 1.0;
    this.cornerAttackingTeam = attackingTeam;

    const isUser = attackingTeam === 'user';
    const cornerX = isUser ? 97.5 : 2.5;
    const cornerY = this.ball.y < 50 ? 5.0 : 95.0;

    this.ball.x = cornerX;
    this.ball.y = cornerY;
    this.ball.vx = 0;
    this.ball.vy = 0;
    this.ball.carrier = null;
    this.ball.flightType = 'none';
    this.ball.flightTarget = null;
    this.ball.isHighLob = false;

    const attackers = isUser ? this.userPlayers : this.oppPlayers;
    const defenders = isUser ? this.oppPlayers : this.userPlayers;

    // Штатный подающий углового (setPieceTaker)
    const taker = attackers.find(p => ['LW', 'RW', 'CAM', 'LM', 'RM'].includes(p.role)) || attackers[1] || attackers[0];
    taker.x = cornerX;
    taker.y = cornerY;
    this.cornerTaker = taker;
    this.receiveBall(taker);

    // Стягивание игроков в штрафную площадь
    const boxX = isUser ? 89.0 : 11.0;
    attackers.forEach((p, idx) => {
      if (p === taker || p.role === 'GK') return;
      p.x = boxX + (Math.random() * 6 - 3);
      p.y = 50 + (idx % 2 === 0 ? 1 : -1) * (4 + idx * 2.2);
    });

    defenders.forEach((p, idx) => {
      if (p.role === 'GK') {
        p.x = isUser ? 96.5 : 3.5;
        p.y = 50;
        return;
      }
      p.x = boxX + (Math.random() * 4 - 2);
      p.y = 50 + (idx % 2 === 0 ? 1 : -1) * (3 + idx * 2.5);
    });

    addSimFeedItem(simMinute, '🚩', `УГЛОВОЙ УДАР! ${taker.name} отправляется к угловому флажку.`);
    if (tvBroadcastEngine && tvBroadcastEngine.active) {
      tvBroadcastEngine.setTickerCommentary(`🚩 УГЛОВОЙ УДАР! ${taker.name} готовится подать в штрафную!`);
    }
  }

  executeCornerCross() {
    this.state = 'PLAYING';
    const taker = this.cornerTaker;
    const isUser = this.cornerAttackingTeam === 'user';
    const attackers = isUser ? this.userPlayers : this.oppPlayers;
    const st = attackers.find(p => p.role === 'ST' || p.role === 'CF') || attackers[0];

    this.ball.carrier = null;
    if (taker) {
      taker.state = 'STATE_OFF_BALL';
      taker.holdTimer = 0;
      taker.kickWindup = 0.25;
    }

    this.ball.flightType = 'air';
    this.ball.isHighLob = true;
    this.ball.lastTouchTeam = this.cornerAttackingTeam;
    this.ball.lastTouchPlayer = taker;

    const targetX = isUser ? (89 + Math.random() * 4) : (11 - Math.random() * 4);
    const targetY = 50 + (Math.random() * 12 - 6);

    this.ball.flightTarget = { x: targetX, y: targetY, receiver: st, isCornerCross: true };

    const dx = targetX - this.ball.x;
    const dy = targetY - this.ball.y;
    const d = Math.hypot(dx, dy) || 1;
    const crossSpeed = 30;

    this.ball.vx = (dx / d) * crossSpeed;
    this.ball.vy = (dy / d) * crossSpeed;

    if (tvBroadcastEngine && tvBroadcastEngine.active) {
      tvBroadcastEngine.ball3D.vz = 46;
      tvBroadcastEngine.setTickerCommentary(`🚀 Навес с углового в центр штрафной площади! Верховая борьба!`);
    }
  }

  updateCarrier(dt) {
    const carrier = this.ball.carrier;
    if (!carrier) return;

    carrier.holdTimer += dt;
    if (carrier.trapTimer > 0) carrier.trapTimer -= dt;
    if (carrier.tackleImmunity > 0) carrier.tackleImmunity -= dt;

    // Вратарь держит мяч 1.0с
    if (carrier.role === 'GK') {
      if (carrier.holdTimer >= 1.0) {
        this.executeGKPass(carrier);
      }
      return;
    }

    // Игрок обрабатывает мяч (0.5с) и разворачивается перед пасом
    if (carrier.trapTimer > 0) {
      return;
    }

    // Полевой игрок
    const isUser = carrier.team === 'user';
    const opponents = isUser ? this.oppPlayers : this.userPlayers;

    let minOppDist = Infinity;
    opponents.forEach(op => {
      if (op.role === 'GK') return;
      const d = Math.hypot(op.x - carrier.x, op.y - carrier.y);
      if (d < minOppDist) minOppDist = d;
    });

    const inShootingZone = isUser ? (carrier.x >= 74) : (carrier.x <= 26);
    const mustAct = carrier.holdTimer >= carrier.maxHoldTime || minOppDist < 4.8;

    if (inShootingZone && (carrier.holdTimer >= 0.5 || minOppDist < 4.8)) {
      carrier.kickWindup = 0.22;
      this.executeShot(carrier);
    } else if (mustAct) {
      carrier.kickWindup = 0.22;
      this.executeSmartPass(carrier);
    }
  }

  updateBall(dt) {
    if (this.ball.carrier) {
      this.ball.x = this.ball.carrier.x;
      this.ball.y = this.ball.carrier.y;
      this.ball.vx = 0;
      this.ball.vy = 0;
      return;
    }

    this.ball.x += this.ball.vx * dt;
    this.ball.y += this.ball.vy * dt;

    // Проверка границ поля
    if (this.ball.x <= 2.5 || this.ball.x >= 97.5 || this.ball.y <= 4 || this.ball.y >= 96) {
      if (this.ball.y >= 41 && this.ball.y <= 59) {
        if (this.ball.x >= 96.5) {
          this.triggerGoal('user');
          return;
        } else if (this.ball.x <= 3.5) {
          this.triggerGoal('opp');
          return;
        }
      }
      // Мяч ушел за пределы поля -> от ворот
      if (this.ball.x <= 50) {
        this.giveBallToGK(this.userPlayers.find(p => p.role === 'GK'));
      } else {
        this.giveBallToGK(this.oppPlayers.find(p => p.role === 'GK'));
      }
      return;
    }

    // Достижение цели полета
    if (this.ball.flightTarget) {
      const ft = this.ball.flightTarget;
      const distToTarget = Math.hypot(ft.x - this.ball.x, ft.y - this.ball.y);

      if (ft.isGoal && (distToTarget < 3.0 || (ft.scoringTeam === 'user' ? this.ball.x >= 97.0 : this.ball.x <= 3.0))) {
        this.triggerGoal(ft.scoringTeam);
        return;
      }

      if (ft.isMiss && (distToTarget < 4.0 || (ft.gk && (ft.gk.team === 'user' ? this.ball.x <= 4.0 : this.ball.x >= 96.0)))) {
        if (ft.gk) this.giveBallToGK(ft.gk);
        else this.giveBallToGK((this.ball.lastTouchTeam === 'user' ? this.oppPlayers : this.userPlayers).find(p => p.role === 'GK'));
        return;
      }

      if (ft.isSave && distToTarget < 4.0) {
        if (ft.isCorner) {
          this.triggerCornerKick(ft.attackingTeam || (this.ball.lastTouchTeam === 'user' ? 'user' : 'opp'));
          return;
        }
        if (ft.gk) this.receiveBall(ft.gk);
        else this.giveBallToGK((this.ball.lastTouchTeam === 'user' ? this.oppPlayers : this.userPlayers).find(p => p.role === 'GK'));
        return;
      }

      if (ft.isCornerCross && distToTarget < 4.5) {
        const receiver = ft.receiver;
        if (receiver) {
          this.receiveBall(receiver);
          setTimeout(() => {
            if (this.ball.carrier === receiver && this.state === 'PLAYING') {
              this.executeShot(receiver);
            }
          }, 320);
        }
        return;
      }

      if (ft.receiver && distToTarget < 4.0) {
        this.receiveBall(ft.receiver);
        return;
      }
    }

    // Перехват передач низом (верховой вынос isHighLob не может быть перехвачен в полете!)
    if (this.ball.flightType === 'pass' || (this.ball.flightType === 'air' && !this.ball.isHighLob)) {
      const opponents = (this.ball.lastTouchTeam === 'user' ? this.oppPlayers : this.userPlayers).filter(p => p.role !== 'GK');
      const inCenter = this.ball.x >= 28 && this.ball.x <= 72;
      const bonusMidfield = inCenter ? 0.08 : 0;

      for (const op of opponents) {
        const d = Math.hypot(op.x - this.ball.x, op.y - this.ball.y);
        if (d < 3.4) {
          const passerPas = this.ball.lastTouchPlayer && this.ball.lastTouchPlayer.stats ? this.ball.lastTouchPlayer.stats.pas : 75;
          const defStat = op.stats.def || 75;
          const interceptChance = 0.28 + bonusMidfield + ((defStat - passerPas) / 200) * 0.25;
          if (Math.random() < Math.max(0.18, Math.min(0.58, interceptChance))) {
            this.receiveBall(op);
            return;
          }
        }
      }
    }

    // Подбор катящегося / ничейного мяча
    const speed = Math.hypot(this.ball.vx, this.ball.vy);
    if (speed < 10.0) {
      let nearest = null;
      let minD = Infinity;
      for (const p of this.players) {
        const d = Math.hypot(p.x - this.ball.x, p.y - this.ball.y);
        if (d < minD) {
          minD = d;
          nearest = p;
        }
      }
      if (nearest && minD < 4.5) {
        this.receiveBall(nearest);
      }
    }
  }

  updatePressers() {
    const carrier = this.ball.carrier;
    if (!carrier || carrier.role === 'GK') {
      this.activePresser = null;
      this.secondPresser = null;
      return;
    }

    const opponents = (carrier.team === 'user' ? this.oppPlayers : this.userPlayers).filter(p => p.role !== 'GK');
    opponents.sort((a, b) => Math.hypot(a.x - carrier.x, a.y - carrier.y) - Math.hypot(b.x - carrier.x, b.y - carrier.y));

    this.activePresser = opponents[0] || null;
    this.secondPresser = opponents[1] || null;
  }

  updatePlayers(dt) {
    const shiftX = (this.ball.x - 50) * 0.42;
    const shiftY = (this.ball.y - 50) * 0.22;
    const tacticOffset = this.currentTactic === 'bus' ? -10 : (this.currentTactic === 'press' ? 10 : 0);

    // Компактная синхронизированная линия обороны (Defensive line)
    const userDefLineX = Math.max(16, Math.min(36, this.ball.x * 0.45 + 5 + (this.currentTactic === 'bus' ? -6 : (this.currentTactic === 'press' ? 6 : 0))));
    const oppDefLineX = Math.min(84, Math.max(64, 100 - (100 - this.ball.x) * 0.45 - 5));

    this.players.forEach(p => {
      // 1. Вратари
      if (p.role === 'GK') {
        const isUser = p.team === 'user';
        p.targetX = isUser ? 3.5 : 96.5;
        p.targetY = 50 + (this.ball.y - 50) * 0.45;
        p.targetY = Math.max(40, Math.min(60, p.targetY));

        if (!this.ball.carrier && this.ball.flightType === 'none' && this.ball.lastTouchPlayer !== p && Math.hypot(p.x - this.ball.x, p.y - this.ball.y) < 7.0) {
          this.receiveBall(p);
        }

        const moveX = (p.targetX - p.x) * Math.min(1.0, 8 * dt);
        const moveY = (p.targetY - p.y) * Math.min(1.0, 8 * dt);
        p.x += moveX;
        p.y += moveY;
        const cl = clampPosition(p.x, p.y, true);
        p.x = cl.x;
        p.y = cl.y;
        return;
      }

      // 2. Дриблинг игрока с мячом (плавный темп)
      if (p === this.ball.carrier) {
        const isUser = p.team === 'user';
        const targetX = isUser ? p.x + 6 : p.x - 6;
        const targetY = p.y + Math.sin(this.simTime * 2.5) * 1.2;
        const dx = targetX - p.x;
        const dy = targetY - p.y;
        const d = Math.hypot(dx, dy) || 1;
        const dribbleSpeed = p.speed * 0.80;

        p.x += (dx / d) * dribbleSpeed * dt;
        p.y += (dy / d) * dribbleSpeed * dt;
        const cl = clampPosition(p.x, p.y, false);
        p.x = cl.x;
        p.y = cl.y;
        return;
      }

      // 3. Ближайший защитник: плассирование (Jockeying) и перекрытие угла удара
      if (p === this.activePresser) {
        p.state = 'STATE_PRESSING';
        const carrier = this.ball.carrier;
        if (carrier && carrier.role !== 'GK') {
          const ownGoalX = p.team === 'user' ? 3.0 : 97.0;
          const dirX = (ownGoalX - carrier.x);
          const dirY = (50 - carrier.y);
          const distGoal = Math.hypot(dirX, dirY) || 1;

          // Плассирование на расстоянии 4.2% перед носом атакующего
          const jockeyX = carrier.x + (dirX / distGoal) * 4.2;
          const jockeyY = carrier.y + (dirY / distGoal) * 4.2;

          const dx = jockeyX - p.x;
          const dy = jockeyY - p.y;
          const dist = Math.hypot(dx, dy) || 1;

          p.x += (dx / dist) * p.speed * 1.08 * dt;
          p.y += (dy / dist) * p.speed * 1.08 * dt;

          // Единоборство при сближении (< 3.4%)
          const contactDist = Math.hypot(carrier.x - p.x, carrier.y - p.y);
          if (contactDist < 3.4 && carrier.tackleImmunity <= 0) {
            p.kickWindup = 0.22;
            const defStat = p.stats.def || 75;
            const driStat = carrier.stats.dri || 75;
            const tackleChance = 0.40 + ((defStat - driStat) / 200) * 0.35;
            if (Math.random() < Math.max(0.20, Math.min(0.72, tackleChance))) {
              this.receiveBall(p);
            } else {
              carrier.tackleImmunity = 0.55;
            }
          }
        } else {
          // Прессинг свободного мяча
          const dx = this.ball.x - p.x;
          const dy = this.ball.y - p.y;
          const dist = Math.hypot(dx, dy) || 1;
          p.x += (dx / dist) * p.speed * 1.10 * dt;
          p.y += (dy / dist) * p.speed * 1.10 * dt;
        }

        const cl = clampPosition(p.x, p.y, false);
        p.x = cl.x;
        p.y = cl.y;
        return;
      }

      // 4. Второй прессингующий (перекрытие коридора)
      if (p === this.secondPresser) {
        p.state = 'STATE_PRESSING';
        const carrier = this.ball.carrier;
        const targetX = carrier ? (carrier.x + p.baseX) / 2 : (this.ball.x + p.baseX) / 2;
        const targetY = carrier ? (carrier.y + p.baseY) / 2 : (this.ball.y + p.baseY) / 2;
        const dx = targetX - p.x;
        const dy = targetY - p.y;
        const d = Math.hypot(dx, dy) || 1;

        p.x += (dx / d) * p.speed * 1.02 * dt;
        p.y += (dy / d) * p.speed * 1.02 * dt;
        const cl = clampPosition(p.x, p.y, false);
        p.x = cl.x;
        p.y = cl.y;
        return;
      }

      // 5. Размеренное движение остальных полевых игроков
      p.state = 'STATE_OFF_BALL';
      const isUser = p.team === 'user';
      const isDefender = ['CB', 'LB', 'RB', 'LWB', 'RWB', 'DEF'].includes(p.role);
      const teamHasBall = this.ball.carrier && this.ball.carrier.team === p.team;

      let targetX = p.baseX;
      let targetY = p.baseY;

      // Если защитник без мяча — держит общую линию обороны (Defensive line)
      if (isDefender && !teamHasBall) {
        const lineX = isUser ? userDefLineX : oppDefLineX;
        targetX = lineX + (p.role === 'CB' ? 0 : (isUser ? 2 : -2));
        targetY = p.baseY + shiftY * 0.7;
      } else {
        const tShiftX = isUser ? (shiftX + tacticOffset) : (shiftX - tacticOffset);
        targetX = p.baseX + tShiftX;
        targetY = p.baseY + shiftY;

        // Дыхание
        targetX += Math.sin(this.simTime * 1.5 + p.index * 1.35) * 2.8;
        targetY += Math.cos(this.simTime * 1.3 + p.index * 1.65) * 2.8;

        // Забегания в атакующие каналы при контроле мяча
        if (teamHasBall) {
          if (['ST', 'LW', 'RW'].includes(p.role)) {
            const runProg = isUser ? 9.0 : -9.0;
            const channelY = p.role === 'LW' ? -4.5 : (p.role === 'RW' ? 4.5 : 0);
            targetX += runProg;
            targetY += channelY;
          } else if (['CAM', 'CM'].includes(p.role)) {
            const runProg = isUser ? 4.5 : -4.5;
            targetX += runProg;
          }
        }
      }

      // Спринт при разрезной передаче на ход
      let spd = p.speed * 0.88;
      if (p.sprintBoost && p.sprintBoost > 1) {
        spd *= p.sprintBoost;
        p.sprintBoost -= dt * 0.6;
        if (p.sprintBoost < 1) p.sprintBoost = 1;
      }

      const dx = targetX - p.x;
      const dy = targetY - p.y;
      const dist = Math.hypot(dx, dy);
      if (dist > 0.1) {
        const move = Math.min(dist, spd * dt);
        p.x += (dx / dist) * move;
        p.y += (dy / dist) * move;
      }

      const cl = clampPosition(p.x, p.y, false);
      p.x = cl.x;
      p.y = cl.y;
    });
  }

  update(dt) {
    const safeDt = Math.min(dt || 0.033, 0.1);
    this.simTime += safeDt;

    if (this.state === 'GOAL_PAUSE') {
      this.goalPauseTimer -= safeDt;
      if (this.goalPauseTimer <= 0) {
        this.resetKickoff(this.ball.lastTouchTeam === 'user' ? 'opp' : 'user');
      }
      return;
    }

    if (this.state === 'CORNER_KICK') {
      this.cornerTimer -= safeDt;
      if (this.cornerTimer <= 0) {
        this.executeCornerCross();
      }
      return;
    }

    this.updateBall(safeDt);
    this.updatePressers();
    this.updateCarrier(safeDt);
    this.updatePlayers(safeDt);

    // Подсчет владения мячом
    if (this.ball.carrier) {
      if (this.ball.carrier.team === 'user') this.userPossTicks++;
      else this.oppPossTicks++;
      if (simStats && (this.userPossTicks + this.oppPossTicks) > 0) {
        simStats.userPossession = Math.round((this.userPossTicks / (this.userPossTicks + this.oppPossTicks)) * 100);
      }
    }
  }
}

// Backward-compatible alias for existing hooks and renderer
const MatchEngine2D = MatchSimEngine;


/* ═══════════════════════════════════════════════════════════════════
   MATCH RENDERER — DOM ENTITY & CANVAS VISUALIZATION LAYER
═══════════════════════════════════════════════════════════════════ */
class MatchRenderer {
  constructor() {
    this.canvas = null;
    this.ctx = null;
    this.container = null;
    this.entitiesLayer = null;
    this.blueElements = [];
    this.redElements = [];
    this.ballElement = null;
    this.badgeElement = null;
  }

  init(containerEl, canvasEl) {
    this.container = containerEl;
    this.canvas = canvasEl;
    if (this.canvas) this.ctx = this.canvas.getContext('2d');

    this.drawPitchBackground();

    let layer = document.getElementById('radarEntitiesLayer');
    if (!layer && this.container) {
      layer = document.createElement('div');
      layer.id = 'radarEntitiesLayer';
      layer.className = 'radar-entities-layer';
      this.container.appendChild(layer);
    }
    this.entitiesLayer = layer;
    if (!this.entitiesLayer) return;

    this.entitiesLayer.innerHTML = '';

    this.blueElements = [];
    for (let i = 0; i < 11; i++) {
      const el = document.createElement('div');
      el.className = 'radar-player blue';
      this.entitiesLayer.appendChild(el);
      this.blueElements.push(el);
    }

    this.redElements = [];
    for (let i = 0; i < 11; i++) {
      const el = document.createElement('div');
      el.className = 'radar-player red';
      this.entitiesLayer.appendChild(el);
      this.redElements.push(el);
    }

    this.ballElement = document.createElement('div');
    this.ballElement.className = 'radar-ball';
    this.entitiesLayer.appendChild(this.ballElement);

    this.badgeElement = document.createElement('div');
    this.badgeElement.className = 'radar-carrier-badge blue';
    this.badgeElement.style.display = 'none';
    this.entitiesLayer.appendChild(this.badgeElement);
  }

  drawPitchBackground() {
    if (!this.canvas || !this.ctx) return;
    const ctx = this.ctx;
    const w = this.canvas.width;
    const h = this.canvas.height;
    const scaleX = w / 414;
    const scaleY = h / 230;

    ctx.save();
    ctx.scale(scaleX, scaleY);
    ctx.clearRect(0, 0, 414, 230);

    // Turf & Subtle Mowing Stripes
    ctx.fillStyle = '#0a2113';
    ctx.fillRect(0, 0, 414, 230);

    const stripeW = 414 / 8;
    for (let i = 0; i < 8; i += 2) {
      ctx.fillStyle = 'rgba(0, 255, 136, 0.025)';
      ctx.fillRect(i * stripeW, 0, stripeW, 230);
    }

    // Pitch Lines
    ctx.strokeStyle = 'rgba(255, 255, 255, 0.65)';
    ctx.lineWidth = 1.6;

    ctx.strokeRect(12, 12, 390, 206);

    ctx.beginPath();
    ctx.moveTo(207, 12);
    ctx.lineTo(207, 218);
    ctx.stroke();

    ctx.beginPath();
    ctx.arc(207, 115, 36, 0, Math.PI * 2);
    ctx.stroke();

    ctx.fillStyle = 'rgba(255, 255, 255, 0.8)';
    ctx.beginPath();
    ctx.arc(207, 115, 2.5, 0, Math.PI * 2);
    ctx.fill();

    // Boxes & Arcs
    ctx.strokeRect(12, 55, 62, 120);
    ctx.strokeRect(12, 80, 24, 70);
    ctx.beginPath(); ctx.arc(52, 115, 2, 0, Math.PI * 2); ctx.fill();
    ctx.beginPath(); ctx.arc(52, 115, 24, -0.9, 0.9); ctx.stroke();

    ctx.strokeRect(340, 55, 62, 120);
    ctx.strokeRect(378, 80, 24, 70);
    ctx.beginPath(); ctx.arc(362, 115, 2, 0, Math.PI * 2); ctx.fill();
    ctx.beginPath(); ctx.arc(362, 115, 24, Math.PI - 0.9, Math.PI + 0.9); ctx.stroke();

    // Goal Nets
    ctx.strokeStyle = 'rgba(255, 255, 255, 0.35)';
    ctx.strokeRect(4, 92, 8, 46);
    ctx.strokeRect(402, 92, 8, 46);

    ctx.restore();
  }

  render(engine) {
    if (!engine) return;

    engine.userPlayers.forEach((p, idx) => {
      const el = this.blueElements[idx];
      if (el) {
        const cl = clampPosition(p.x, p.y, p.role === 'GK');
        el.style.left = `${cl.x}%`;
        el.style.top = `${cl.y}%`;
        el.className = 'radar-player blue'
          + (p.role === 'GK' ? ' gk' : '')
          + (p.state === 'STATE_PRESSING' ? ' pressing' : '');
      }
    });

    engine.oppPlayers.forEach((p, idx) => {
      const el = this.redElements[idx];
      if (el) {
        const cl = clampPosition(p.x, p.y, p.role === 'GK');
        el.style.left = `${cl.x}%`;
        el.style.top = `${cl.y}%`;
        el.className = 'radar-player red'
          + (p.role === 'GK' ? ' gk' : '')
          + (p.state === 'STATE_PRESSING' ? ' pressing' : '');
      }
    });

    if (this.ballElement) {
      const bx = Math.max(2, Math.min(98, engine.ball.x));
      const by = Math.max(6, Math.min(94, engine.ball.y));
      this.ballElement.style.left = `${bx}%`;
      this.ballElement.style.top = `${by}%`;
    }

    if (this.badgeElement) {
      const carrier = engine.ball.carrier;
      if (carrier && carrier.name) {
        const cl = clampPosition(carrier.x, carrier.y, carrier.role === 'GK');
        this.badgeElement.style.display = 'flex';
        this.badgeElement.style.left = `${cl.x}%`;
        this.badgeElement.style.top = `${cl.y}%`;
        this.badgeElement.className = `radar-carrier-badge ${carrier.team === 'opp' ? 'red' : 'blue'}`;
        this.badgeElement.textContent = `${carrier.name} ⚽`;
      } else {
        this.badgeElement.style.display = 'none';
      }
    }
  }
}

/* ═══════════════════════════════════════════════════════════════════
   📺 CINEMATIC TV BROADCAST ENGINE (Full 2D Broadcast Mode)
═══════════════════════════════════════════════════════════════════ */
class TVBroadcastEngine {
  constructor() {
    this.active = false;
    this.container = null;
    this.canvas = null;
    this.ctx = null;
    this.minimapCanvas = null;
    this.minimapCtx = null;

    // Pitch virtual dimensions (16:10 aspect ratio)
    this.pitchW = 1200;
    this.pitchH = 750;
    this.margin = 90;
    this.totalW = this.pitchW + this.margin * 2;
    this.totalH = this.pitchH + this.margin * 2;

    // Camera with smooth lerp
    this.camera = {
      x: this.totalW / 2,
      y: this.totalH / 2,
      zoom: 1.25,
      targetZoom: 1.25
    };

    // 3D Ball physics
    this.ball3D = {
      z: 0,
      vz: 0,
      trail: [],
      prevFlightType: 'none'
    };

    // Goal celebration
    this.celebration = {
      active: false,
      timer: 0,
      scorerName: '',
      team: 'user',
      sparks: []
    };

    // TV Replay Wipe Transition (0.6s smooth broadcast wipe)
    this.replayWipe = {
      active: false,
      timer: 0,
      duration: 0.6,
      text: 'VI SPORTS REPLAY'
    };

    // Player animation states
    this.playerStates = {}; // id -> { angle, strideTime, kickTimer }

    this.animTime = 0;
    this.dpr = 1;
    this.tickerCommentary = 'Матч в самом разгаре...';
    this.goalOverlayTimeout = null;
    this.isFallbackFullscreen = false;
  }

  init() {
    this.container = document.getElementById('tvBroadcastOverlay') || document.getElementById('tvBroadcastContainer');
    this.canvas = document.getElementById('tvBroadcastCanvas');
    this.minimapCanvas = document.getElementById('tvMinimapCanvas');

    // Ensure overlay is a direct child of document.body for true 100vw x 100vh fullscreen
    if (this.container && this.container.parentElement !== document.body) {
      document.body.appendChild(this.container);
    }

    if (this.canvas) {
      this.ctx = this.canvas.getContext('2d');
    }
    if (this.minimapCanvas) {
      this.minimapCtx = this.minimapCanvas.getContext('2d');
    }

    // Toggle button in scoreboard
    const btnToggle = document.getElementById('btnToggleTvBroadcast');
    if (btnToggle) {
      btnToggle.onclick = () => this.toggle();
    }

    // Exit button in TV mode top-right
    const btnExit = document.getElementById('btnExitTvBroadcast');
    if (btnExit) {
      btnExit.onclick = () => this.stop();
    }

    // Quick coach tactic buttons
    const btnBus = document.getElementById('tvTacticBus');
    if (btnBus) btnBus.onclick = () => this.setTactic('bus');
    const btnBal = document.getElementById('tvTacticBalance');
    if (btnBal) btnBal.onclick = () => this.setTactic('balance');
    const btnPress = document.getElementById('tvTacticPress');
    if (btnPress) btnPress.onclick = () => this.setTactic('press');

    // TV Speed button
    const btnSpeed = document.getElementById('tvBtnSpeed');
    if (btnSpeed) {
      btnSpeed.onclick = () => {
        simSpeedMode = simSpeedMode === 1 ? 2 : 1;
        const btnMainSpeed = document.getElementById('btnSimSpeed');
        if (btnMainSpeed) btnMainSpeed.textContent = `${simSpeedMode}x`;
        btnSpeed.textContent = `⚡ ${simSpeedMode}x`;
        startSimClock();
      };
    }

    // TV Subs button
    const btnSubs = document.getElementById('tvBtnSubs');
    if (btnSubs) {
      btnSubs.onclick = () => {
        if (typeof openSimSubsModal === 'function') {
          openSimSubsModal();
        }
      };
    }

    // Escape key listener to exit TV mode
    window.addEventListener('keydown', (e) => {
      if (e.key === 'Escape' && this.active) {
        this.stop();
      }
    });

    // Native fullscreenchange listener
    document.addEventListener('fullscreenchange', () => {
      if (!document.fullscreenElement && this.active) {
        this.stop();
      }
    });

    window.addEventListener('resize', () => {
      if (this.active) this.resizeCanvas();
    });
  }

  setTactic(tactic) {
    if (simTacticCooldown > 0) {
      if (typeof showToast === 'function') {
        showToast(`⏳ Перестройка тактики через ${simTacticCooldown} сек.`);
      }
      return;
    }
    if (typeof updateTacticsUI === 'function') {
      updateTacticsUI(tactic);
    }
    if (matchEngine2D) {
      matchEngine2D.setTactic(tactic);
    }
    if (tactic === 'bus') {
      addSimFeedItem(simMinute, '🛡️', 'Тренер даёт команду: «Автобус»! Линия обороны прижимается к своей штрафной.');
    } else if (tactic === 'press') {
      addSimFeedItem(simMinute, '⚔️', 'Тренер даёт команду: «Прессинг!» Давление на половине поля соперника.');
    } else {
      addSimFeedItem(simMinute, '⚖️', 'Тактическое построение возвращено в баланс.');
    }
    if (typeof triggerTacticCooldown === 'function') {
      triggerTacticCooldown(5);
    }
  }

  setTickerCommentary(text) {
    this.tickerCommentary = text;
    const el = document.getElementById('tvTickerCommentary');
    if (el) el.textContent = text;
  }

  triggerReplayWipe(text = 'VI SPORTS REPLAY') {
    this.replayWipe.active = true;
    this.replayWipe.timer = 0.6;
    this.replayWipe.duration = 0.6;
    this.replayWipe.text = text || 'VI SPORTS REPLAY';
  }

  start() {
    this.active = true;
    if (!this.container) this.init();
    if (!this.container) return;

    if (this.container.parentElement !== document.body) {
      document.body.appendChild(this.container);
    }

    this.container.classList.add('active');

    // Attempt Fullscreen on documentElement
    try {
      if (document.documentElement.requestFullscreen) {
        document.documentElement.requestFullscreen().catch(() => {});
      } else if (document.documentElement.webkitRequestFullscreen) {
        document.documentElement.webkitRequestFullscreen();
      }
    } catch(err) {}

    this.resizeCanvas();
    this.camera.x = this.totalW / 2;
    this.camera.y = this.totalH / 2;
    this.camera.zoom = 1.25;
    this.camera.targetZoom = 1.25;
    this.ball3D.trail = [];

    // Apply cinematic pacing immediately
    if (simRunning) startSimClock();

    if (typeof showToast === 'function') {
      showToast('📺 ТВ-ЭФИР: Полноэкранный режим включен');
    }
  }

  stop() {
    this.active = false;
    if (this.container) {
      this.container.classList.remove('active');
    }

    try {
      if (document.fullscreenElement && document.exitFullscreen) {
        document.exitFullscreen().catch(() => {});
      }
    } catch(e) {}

    const goalOverlay = document.getElementById('tvGoalOverlay');
    if (goalOverlay) goalOverlay.classList.add('hidden');

    // Restore standard clock pace
    if (simRunning) startSimClock();
  }

  toggle() {
    if (this.active) this.stop();
    else this.start();
  }

  onGoal(scorerName, team = 'user') {
    this.celebration.active = true;
    this.celebration.timer = 2.8;
    this.celebration.scorerName = scorerName || 'ИГРОК';
    this.celebration.team = team;
    this.camera.targetZoom = 1.55;

    // Spawn 45 festive celebration spark particles
    this.celebration.sparks = [];
    const colors = team === 'user' 
      ? ['#00e5ff', '#ffd700', '#00ff88', '#ffffff', '#38bdf8']
      : ['#ff3344', '#ffd700', '#ff9900', '#ffffff', '#f43f5e'];

    for (let i = 0; i < 45; i++) {
      const angle = Math.random() * Math.PI * 2;
      const speed = 2 + Math.random() * 7;
      this.celebration.sparks.push({
        x: this.camera.x + (Math.random() * 40 - 20),
        y: this.camera.y + (Math.random() * 40 - 20),
        vx: Math.cos(angle) * speed,
        vy: Math.sin(angle) * speed - 1.5,
        color: colors[Math.floor(Math.random() * colors.length)],
        size: 2.5 + Math.random() * 3.5,
        life: 1.0,
        decay: 0.28 + Math.random() * 0.25
      });
    }

    const goalOverlay = document.getElementById('tvGoalOverlay');
    const scorerEl = document.getElementById('tvGoalScorer');
    if (goalOverlay && scorerEl) {
      scorerEl.textContent = this.celebration.scorerName;
      goalOverlay.classList.remove('hidden');
      if (this.goalOverlayTimeout) clearTimeout(this.goalOverlayTimeout);
      this.goalOverlayTimeout = setTimeout(() => {
        goalOverlay.classList.add('hidden');
      }, 2600);
    }
  }

  resizeCanvas() {
    if (!this.canvas) return;
    const w = window.innerWidth || document.documentElement.clientWidth || 1200;
    const h = window.innerHeight || document.documentElement.clientHeight || 750;
    this.dpr = Math.min(window.devicePixelRatio || 1, 2);

    this.canvas.width = Math.round(w * this.dpr);
    this.canvas.height = Math.round(h * this.dpr);

    if (this.minimapCanvas) {
      this.minimapCanvas.width = Math.round(160 * this.dpr);
      this.minimapCanvas.height = Math.round(96 * this.dpr);
    }
  }

  worldX(normX) {
    return this.margin + (Math.max(0, Math.min(100, normX)) / 100) * this.pitchW;
  }

  worldY(normY) {
    return this.margin + (Math.max(0, Math.min(100, normY)) / 100) * this.pitchH;
  }

  updateAndRender(engine, dt) {
    if (!this.active || !engine || !this.ctx) return;
    dt = Math.min(0.08, Math.max(0.001, dt || 0.016));
    this.animTime += dt;

    const w = this.canvas.width;
    const h = this.canvas.height;
    if (w === 0 || h === 0) {
      this.resizeCanvas();
      return;
    }

    const ball = engine.ball || { x: 50, y: 50, vx: 0, vy: 0 };

    // 1. RENDER INTERPOLATION & INERTIA (устранение любых телепортаций)
    const smoothFactor = 0.14; // Плавная инерция без рывков
    const maxShift = 2.2; // Максимальное смещение визуальной позиции за кадр

    const allPlayers = [...(engine.userPlayers || []), ...(engine.oppPlayers || [])];
    allPlayers.forEach(p => {
      if (p.renderX === undefined || isNaN(p.renderX)) {
        p.renderX = p.x;
        p.renderY = p.y;
        p.renderAngle = p.team === 'user' ? 0 : Math.PI;
      }

      let dx = (p.x - p.renderX) * smoothFactor;
      let dy = (p.y - p.renderY) * smoothFactor;
      const d = Math.hypot(dx, dy);
      if (d > maxShift) {
        dx = (dx / d) * maxShift;
        dy = (dy / d) * maxShift;
      }
      p.renderX += dx;
      p.renderY += dy;

      // Плавный поворот корпуса по кратчайшей дуге
      let targetAngle = p.team === 'user' ? 0 : Math.PI;
      const vx = p.vx || (p.x - (p.prevX !== undefined ? p.prevX : p.x));
      const vy = p.vy || (p.y - (p.prevY !== undefined ? p.prevY : p.y));
      const spd = Math.hypot(vx, vy);

      if (p === engine.ball.carrier) {
        if (engine.ball.flightTarget) {
          targetAngle = Math.atan2(engine.ball.flightTarget.y - p.renderY, engine.ball.flightTarget.x - p.renderX);
        } else {
          targetAngle = p.team === 'user' ? 0 : Math.PI;
        }
      } else if (spd > 0.18) {
        targetAngle = Math.atan2(vy, vx);
      } else {
        targetAngle = Math.atan2(engine.ball.y - p.renderY, engine.ball.x - p.renderX);
      }
      p.prevX = p.x;
      p.prevY = p.y;

      let diff = targetAngle - (p.renderAngle || 0);
      while (diff < -Math.PI) diff += Math.PI * 2;
      while (diff > Math.PI) diff -= Math.PI * 2;
      p.renderAngle = (p.renderAngle || 0) + diff * Math.min(1.0, dt * 8);
    });

    // Интерполяция мяча
    if (ball.renderX === undefined || isNaN(ball.renderX)) {
      ball.renderX = ball.x;
      ball.renderY = ball.y;
    }
    const bSmooth = ball.carrier ? 0.22 : 0.32;
    ball.renderX += (ball.x - ball.renderX) * bSmooth;
    ball.renderY += (ball.y - ball.renderY) * bSmooth;

    const bwX = this.worldX(ball.renderX);
    const bwY = this.worldY(ball.renderY);

    // 2. Camera Tracking & Dynamic Zoom (1.25x normal, 1.45x penalty box drama, 1.55x celebration)
    let targetX = bwX;
    let targetY = bwY;

    if (this.celebration.active) {
      this.celebration.timer -= dt;
      if (this.celebration.timer <= 0) {
        this.celebration.active = false;
        this.camera.targetZoom = 1.25;
      } else {
        this.camera.targetZoom = 1.55;
      }
    } else if (ball.x < 22 || ball.x > 78) {
      // Penalty box drama zoom (1.45x)
      this.camera.targetZoom = 1.45;
    } else {
      this.camera.targetZoom = 1.25;
    }

    // Camera Lerp (0.08)
    this.camera.x += (targetX - this.camera.x) * 0.08;
    this.camera.y += (targetY - this.camera.y) * 0.08;
    this.camera.zoom += (this.camera.targetZoom - this.camera.zoom) * 0.08;

    // Camera border clamping
    const minCamX = this.margin + 120;
    const maxCamX = this.margin + this.pitchW - 120;
    const minCamY = this.margin + 80;
    const maxCamY = this.margin + this.pitchH - 80;
    this.camera.x = Math.max(minCamX, Math.min(maxCamX, this.camera.x));
    this.camera.y = Math.max(minCamY, Math.min(maxCamY, this.camera.y));

    // 3. 3D Ball Elevation & Trail Physics (6 segments, z up to 1.8 / 42px on high lob)
    const isShot = ball.flightType === 'shot' || Math.hypot(ball.vx || 0, ball.vy || 0) > 28;
    const isAirPass = ball.flightType === 'air' || ball.flightType === 'pass_air' || ball.isHighLob;

    if (ball.isHighLob && this.ball3D.prevFlightType !== 'air_lob') {
      this.ball3D.vz = 48; // мощная парабола верхового выноса/навеса
      this.ball3D.prevFlightType = 'air_lob';
    } else if (isAirPass && this.ball3D.prevFlightType !== 'air') {
      this.ball3D.vz = 40;
      this.ball3D.prevFlightType = 'air';
    } else if (isShot && this.ball3D.prevFlightType !== 'shot') {
      this.ball3D.vz = 34;
      this.ball3D.prevFlightType = 'shot';
    } else if (!isAirPass && !isShot) {
      this.ball3D.prevFlightType = 'none';
    }

    if (isAirPass || isShot || this.ball3D.z > 0.5) {
      this.ball3D.z += this.ball3D.vz * dt;
      this.ball3D.vz -= 82 * dt; // gravity
      if (this.ball3D.z < 0) {
        this.ball3D.z = 0;
        this.ball3D.vz = -this.ball3D.vz * 0.35; // bounce damping
        if (Math.abs(this.ball3D.vz) < 4) this.ball3D.vz = 0;
      }
    } else {
      this.ball3D.z = 0;
      this.ball3D.vz = 0;
    }
    this.ball3D.z = Math.min(42, Math.max(0, this.ball3D.z));

    // Record ball trail (6 fading segments)
    this.ball3D.trail.unshift({
      x: bwX,
      y: bwY - this.ball3D.z,
      z: this.ball3D.z,
      isShot: isShot,
      isPass: isAirPass || ball.flightType === 'pass'
    });
    if (this.ball3D.trail.length > 6) this.ball3D.trail.pop();

    // 4. Render World to Main Canvas
    const ctx = this.ctx;
    ctx.save();
    ctx.clearRect(0, 0, w, h);
    ctx.scale(this.dpr, this.dpr);

    const vpW = w / this.dpr;
    const vpH = h / this.dpr;

    // Viewport camera matrix
    ctx.translate(vpW / 2, vpH / 2);
    ctx.scale(this.camera.zoom, this.camera.zoom);
    ctx.translate(-this.camera.x, -this.camera.y);

    // Draw Pitch & Stadium
    this.renderPitch(ctx);

    // Draw 22 Animated Player Sprites (depth sorted)
    allPlayers.sort((a, b) => (a.renderY || a.y) - (b.renderY || b.y));

    for (const p of allPlayers) {
      const isCarrier = engine.ball.carrier === p;
      const isPresser = engine.activePresser === p || engine.secondPresser === p;
      this.renderPlayer(ctx, p, dt, engine, isCarrier, isPresser);
    }

    // Draw Ball & 6-segment Trail
    this.renderBall(ctx, bwX, bwY, dt);

    // Draw Celebration Sparks
    if (this.celebration.active) {
      this.renderSparks(ctx, dt);
    }

    // Draw TV Replay Wipe Transition if active
    if (this.replayWipe && this.replayWipe.active) {
      this.renderReplayWipe(ctx, vpW, vpH, dt);
    }

    ctx.restore();

    // 5. Render Tactical Mini-Radar (160x96px)
    this.renderMinimap(engine, vpW, vpH);

    // 6. Sync UCL Broadcast Overlay (Scorebug, Ticker, Buttons)
    this.syncBroadcastUI(engine);
  }

  renderReplayWipe(ctx, vpW, vpH, dt) {
    if (!this.replayWipe || !this.replayWipe.active) return;
    this.replayWipe.timer -= dt;
    if (this.replayWipe.timer <= 0) {
      this.replayWipe.active = false;
      return;
    }

    const p = 1 - (this.replayWipe.timer / this.replayWipe.duration);
    const alpha = Math.sin(p * Math.PI);

    ctx.save();
    // Dark broadcast sweep
    ctx.fillStyle = `rgba(5, 12, 22, ${alpha * 0.88})`;
    ctx.fillRect(-vpW * 2, -vpH * 2, vpW * 5, vpH * 5);

    // Sleek central TV banner with cyan glow
    const bannerH = 50;
    const bannerW = 340;
    const sweepOffset = (p * 2 - 1) * 40;

    ctx.save();
    ctx.translate(this.camera.x + sweepOffset, this.camera.y);
    ctx.fillStyle = `rgba(9, 21, 40, ${alpha * 0.96})`;
    ctx.strokeStyle = `rgba(0, 229, 255, ${alpha})`;
    ctx.lineWidth = 2.0;
    ctx.shadowColor = '#00e5ff';
    ctx.shadowBlur = 18 * alpha;

    ctx.beginPath();
    if (ctx.roundRect) {
      ctx.roundRect(-bannerW / 2, -bannerH / 2, bannerW, bannerH, 8);
    } else {
      ctx.rect(-bannerW / 2, -bannerH / 2, bannerW, bannerH);
    }
    ctx.fill();
    ctx.stroke();

    // Banner accent borders
    ctx.fillStyle = `rgba(255, 215, 0, ${alpha * 0.9})`;
    ctx.fillRect(-bannerW / 2 + 8, -bannerH / 2 + 4, 3, bannerH - 8);
    ctx.fillRect(bannerW / 2 - 11, -bannerH / 2 + 4, 3, bannerH - 8);

    // Typography
    ctx.shadowBlur = 8 * alpha;
    ctx.shadowColor = '#00e5ff';
    ctx.fillStyle = `rgba(255, 255, 255, ${alpha})`;
    ctx.font = '900 15px var(--font), sans-serif';
    ctx.textAlign = 'center';
    ctx.textBaseline = 'middle';
    ctx.fillText(`⚡ ${this.replayWipe.text || 'VI SPORTS REPLAY'} ⚡`, 0, 0);

    ctx.restore();
    ctx.restore();
  }

  renderPitch(ctx) {
    const m = this.margin;
    const pw = this.pitchW;
    const ph = this.pitchH;

    // Stadium outer surround
    ctx.fillStyle = '#08170c';
    ctx.fillRect(m - 70, m - 70, pw + 140, ph + 140);

    // Glowing LED Advertising Boards (Sidelines)
    ctx.save();
    ctx.fillStyle = '#0a192f';
    ctx.strokeStyle = '#00f0ff';
    ctx.lineWidth = 1.5;
    ctx.shadowColor = '#00e5ff';
    ctx.shadowBlur = 8;
    // Top LED Board
    ctx.fillRect(m - 20, m - 32, pw + 40, 22);
    ctx.strokeRect(m - 20, m - 32, pw + 40, 22);
    // Bottom LED Board
    ctx.fillRect(m - 20, m + ph + 10, pw + 40, 22);
    ctx.strokeRect(m - 20, m + ph + 10, pw + 40, 22);

    // LED text
    ctx.shadowBlur = 0;
    ctx.font = '900 11px var(--font), sans-serif';
    ctx.fillStyle = '#00f0ff';
    ctx.textAlign = 'center';
    ctx.textBaseline = 'middle';
    ctx.fillText('⚽ VI FOOTBALL • ULTIMATE TEAM • VI SPORTS HD • CHAMPIONS LEAGUE ⚽', m + pw / 2, m - 21);
    ctx.fillText('🏆 VI FOOTBALL • BECOME A LEGEND • VI SPORTS HD • FAIR PLAY 🏆', m + pw / 2, m + ph + 21);
    ctx.restore();

    // 10 Mowing grass stripes
    const bands = 10;
    const bandW = pw / bands;
    for (let i = 0; i < bands; i++) {
      ctx.fillStyle = i % 2 === 0 ? '#1b5028' : '#226032';
      ctx.fillRect(m + i * bandW, m, bandW, ph);
    }

    // Pitch Line Markings
    ctx.save();
    ctx.strokeStyle = 'rgba(255, 255, 255, 0.88)';
    ctx.lineWidth = 2.5;

    // Pitch perimeter
    ctx.strokeRect(m, m, pw, ph);

    // Halfway line
    const midX = m + pw / 2;
    ctx.beginPath();
    ctx.moveTo(midX, m);
    ctx.lineTo(midX, m + ph);
    ctx.stroke();

    // Center circle & center spot
    ctx.beginPath();
    ctx.arc(midX, m + ph / 2, 85, 0, Math.PI * 2);
    ctx.stroke();

    ctx.beginPath();
    ctx.arc(midX, m + ph / 2, 3.5, 0, Math.PI * 2);
    ctx.fillStyle = '#ffffff';
    ctx.fill();

    // Corner arcs (15px)
    const corners = [
      [m, m, 0, Math.PI / 2],
      [m + pw, m, Math.PI / 2, Math.PI],
      [m + pw, m + ph, Math.PI, Math.PI * 1.5],
      [m, m + ph, Math.PI * 1.5, Math.PI * 2]
    ];
    corners.forEach(([cx, cy, sA, eA]) => {
      ctx.beginPath();
      ctx.arc(cx, cy, 15, sA, eA);
      ctx.stroke();
    });

    // Left Penalty Box (18-yard box)
    const penW = pw * 0.165;
    const penH = ph * 0.58;
    const penY = m + (ph - penH) / 2;
    ctx.strokeRect(m, penY, penW, penH);

    // Left Goal Area (6-yard box)
    const goalAreaW = pw * 0.055;
    const goalAreaH = ph * 0.28;
    const goalAreaY = m + (ph - goalAreaH) / 2;
    ctx.strokeRect(m, goalAreaY, goalAreaW, goalAreaH);

    // Left Penalty Spot & Arc
    const penSpotX = m + pw * 0.11;
    ctx.beginPath();
    ctx.arc(penSpotX, m + ph / 2, 3.5, 0, Math.PI * 2);
    ctx.fill();

    ctx.beginPath();
    ctx.arc(penSpotX, m + ph / 2, 85, -0.65, 0.65);
    ctx.stroke();

    // Right Penalty Box (18-yard box)
    const rightPenX = m + pw - penW;
    ctx.strokeRect(rightPenX, penY, penW, penH);

    // Right Goal Area (6-yard box)
    const rightGoalAreaX = m + pw - goalAreaW;
    ctx.strokeRect(rightGoalAreaX, goalAreaY, goalAreaW, goalAreaH);

    // Right Penalty Spot & Arc
    const rightPenSpotX = m + pw - pw * 0.11;
    ctx.beginPath();
    ctx.arc(rightPenSpotX, m + ph / 2, 3.5, 0, Math.PI * 2);
    ctx.fill();

    ctx.beginPath();
    ctx.arc(rightPenSpotX, m + ph / 2, 85, Math.PI - 0.65, Math.PI + 0.65);
    ctx.stroke();

    // 3D Goal Posts & Nets with responsive net cushioning
    const goalPostH = 104;
    const goalPostY = m + (ph - goalPostH) / 2;

    // Left Goal
    ctx.fillStyle = 'rgba(255, 255, 255, 0.08)';
    ctx.fillRect(m - 26, goalPostY, 26, goalPostH);
    ctx.strokeStyle = '#ffffff';
    ctx.lineWidth = 3.5;
    ctx.strokeRect(m - 26, goalPostY, 26, goalPostH);
    // Left net mesh
    ctx.strokeStyle = 'rgba(255, 255, 255, 0.3)';
    ctx.lineWidth = 1;
    for (let ny = goalPostY + 12; ny < goalPostY + goalPostH; ny += 12) {
      ctx.beginPath();
      ctx.moveTo(m - 26, ny);
      ctx.lineTo(m, ny);
      ctx.stroke();
    }

    // Right Goal
    ctx.fillStyle = 'rgba(255, 255, 255, 0.08)';
    ctx.fillRect(m + pw, goalPostY, 26, goalPostH);
    ctx.strokeStyle = '#ffffff';
    ctx.lineWidth = 3.5;
    ctx.strokeRect(m + pw, goalPostY, 26, goalPostH);
    // Right net mesh
    ctx.strokeStyle = 'rgba(255, 255, 255, 0.3)';
    ctx.lineWidth = 1;
    for (let ny = goalPostY + 12; ny < goalPostY + goalPostH; ny += 12) {
      ctx.beginPath();
      ctx.moveTo(m + pw, ny);
      ctx.lineTo(m + pw + 26, ny);
      ctx.stroke();
    }

    ctx.restore();
  }

  renderPlayer(ctx, p, dt, engine, isCarrier, isPresser) {
    const wx = this.worldX(p.renderX !== undefined ? p.renderX : p.x);
    const wy = this.worldY(p.renderY !== undefined ? p.renderY : p.y);
    const id = p.id || `${p.team}_${p.slotIdx}`;

    if (!this.playerStates[id]) {
      this.playerStates[id] = {
        strideTime: Math.random() * 5,
        kickTimer: 0
      };
    }
    const state = this.playerStates[id];

    // Compute player velocity & stride
    const vx = p.vx || (p.x - (p.prevX !== undefined ? p.prevX : p.x));
    const vy = p.vy || (p.y - (p.prevY !== undefined ? p.prevY : p.y));
    const speed = Math.hypot(vx, vy);

    if (speed > 0.25) {
      state.strideTime += dt * speed * 1.1;
    }

    const angle = p.renderAngle !== undefined ? p.renderAngle : (p.team === 'user' ? 0 : Math.PI);
    const isUser = p.team === 'user';
    const isGK = p.role === 'GK';
    const isCaptain = (save && save.myClubRoles && save.myClubRoles.captain === p.id) || (isUser && p.slotIdx === 0);

    // Active carrier neon marker (EA FC / FIFA style)
    if (isCarrier) {
      ctx.save();
      const pulse = 1 + Math.sin(this.animTime * 8) * 0.12;
      ctx.strokeStyle = '#00f0ff';
      ctx.shadowColor = '#00f0ff';
      ctx.shadowBlur = 14;
      ctx.lineWidth = 2.5;
      ctx.beginPath();
      ctx.arc(wx, wy, 22 * pulse, 0, Math.PI * 2);
      ctx.stroke();

      // Top inverted triangle indicator
      ctx.fillStyle = '#00f0ff';
      ctx.beginPath();
      ctx.moveTo(wx - 5, wy - 32);
      ctx.lineTo(wx + 5, wy - 32);
      ctx.lineTo(wx, wy - 24);
      ctx.closePath();
      ctx.fill();

      // Floating TV Nameplate
      const nameText = `[${p.role || 'ST'}] ${p.name.toUpperCase()}`;
      ctx.font = '900 10px var(--font), sans-serif';
      const textW = ctx.measureText(nameText).width;
      const plateW = textW + 16;
      const plateH = 18;
      const plateX = wx - plateW / 2;
      const plateY = wy - 52;

      ctx.fillStyle = 'rgba(8, 14, 28, 0.92)';
      ctx.strokeStyle = '#00f0ff';
      ctx.lineWidth = 1.2;
      ctx.shadowBlur = 8;
      ctx.beginPath();
      if (ctx.roundRect) {
        ctx.roundRect(plateX, plateY, plateW, plateH, 5);
      } else {
        ctx.rect(plateX, plateY, plateW, plateH);
      }
      ctx.fill();
      ctx.stroke();

      ctx.shadowBlur = 0;
      ctx.fillStyle = '#ffffff';
      ctx.textAlign = 'center';
      ctx.textBaseline = 'middle';
      ctx.fillText(nameText, wx, plateY + plateH / 2);
      ctx.restore();
    }

    // High pressing ring
    if (isPresser) {
      ctx.save();
      ctx.strokeStyle = '#ff3344';
      ctx.shadowColor = '#ff3344';
      ctx.shadowBlur = 12;
      ctx.lineWidth = 2;
      ctx.beginPath();
      ctx.arc(wx, wy, 24, 0, Math.PI * 2);
      ctx.stroke();
      ctx.restore();
    }

    // Render Procedural Player Sprite
    ctx.save();
    ctx.translate(wx, wy);
    ctx.rotate(angle);

    // 1. Drop shadow (soft translucent ellipse on turf)
    ctx.beginPath();
    ctx.ellipse(0, 4, 18, 11, 0, 0, Math.PI * 2);
    ctx.fillStyle = 'rgba(0, 0, 0, 0.42)';
    ctx.fill();

    let playerHash = 0;
    const str = String(p.id || p.name || p.slotIdx || 0);
    for (let i = 0; i < str.length; i++) playerHash += str.charCodeAt(i);

    const isMoving = speed > 0.15;
    const isKicking = (p.kickWindup && p.kickWindup > 0) || (isCarrier && (engine.ball.flightType === 'shot' || engine.ball.flightType === 'pass' || engine.ball.flightType === 'air'));
    if (p.kickWindup && p.kickWindup > 0) p.kickWindup -= dt;

    const stridePhase = this.animTime * 14 + (playerHash % 10);
    const stride = isMoving ? Math.sin(stridePhase) * 6 : 0;
    const armSwing = isMoving ? Math.sin(stridePhase) * 4.5 : 0;
    const shoulderSway = isMoving ? Math.sin(stridePhase) * 0.08 : 0;
    const lunge = isKicking ? 8.5 : 0;

    // 2. Legs & Boots (alternating animated strides + kick lunge)
    ctx.fillStyle = '#111111';
    // Left Boot
    ctx.fillRect(-7, -4 - stride + lunge, 5, 8);
    // Right Boot
    ctx.fillRect(2, -4 + stride - (lunge ? 2 : 0), 5, 8);

    // Boot trim (team accent)
    ctx.fillStyle = isUser ? '#00e5ff' : '#ff4444';
    ctx.fillRect(-7, 2 - stride + lunge, 5, 2);
    ctx.fillRect(2, 2 + stride - (lunge ? 2 : 0), 5, 2);

    // 3. Shorts
    ctx.fillStyle = isGK ? '#052210' : (isUser ? '#091328' : '#ffffff');
    ctx.beginPath();
    if (ctx.roundRect) {
      ctx.roundRect(-8, -6, 16, 10, 3);
    } else {
      ctx.rect(-8, -6, 16, 10);
    }
    ctx.fill();

    // 4. Arms & Hands
    ctx.fillStyle = '#d4986a';
    ctx.beginPath();
    ctx.arc(-11, armSwing, 3, 0, Math.PI * 2);
    ctx.fill();
    ctx.beginPath();
    ctx.arc(11, -armSwing, 3, 0, Math.PI * 2);
    ctx.fill();

    // 5. Torso & Club Jersey (with subtle shoulder sway)
    ctx.save();
    ctx.rotate(shoulderSway);
    if (isGK) {
      // GK Emerald / Gold
      ctx.fillStyle = isUser ? '#00e676' : '#ffb300';
    } else if (isUser) {
      // My Club Royal Navy to Cyan gradient
      const grad = ctx.createLinearGradient(-10, 0, 10, 0);
      grad.addColorStop(0, '#0048ba');
      grad.addColorStop(0.5, '#0099ff');
      grad.addColorStop(1, '#00e5ff');
      ctx.fillStyle = grad;
    } else {
      // Opponent Crimson gradient
      const grad = ctx.createLinearGradient(-10, 0, 10, 0);
      grad.addColorStop(0, '#880011');
      grad.addColorStop(0.5, '#cc1122');
      grad.addColorStop(1, '#ff3344');
      ctx.fillStyle = grad;
    }
    ctx.beginPath();
    if (ctx.roundRect) {
      ctx.roundRect(-10, -10, 20, 15, 4);
    } else {
      ctx.rect(-10, -10, 20, 15);
    }
    ctx.fill();

    // Jersey squad number on back
    ctx.fillStyle = '#ffffff';
    ctx.font = 'bold 7px var(--font), sans-serif';
    ctx.textAlign = 'center';
    ctx.textBaseline = 'middle';
    const squadNum = (p.slotIdx !== undefined ? p.slotIdx + 1 : 10);
    ctx.fillText(`${squadNum}`, 0, -4);

    // Captain golden armband
    if (isCaptain) {
      ctx.fillStyle = '#ffd700';
      ctx.shadowColor = '#ffd700';
      ctx.shadowBlur = 6;
      ctx.fillRect(-11, -5, 3, 5);
      ctx.shadowBlur = 0;
    }
    ctx.restore();

    // 6. Head & Hair
    ctx.fillStyle = '#c68642';
    ctx.fillRect(-3, -12, 6, 4);

    // Head
    const skinTones = ['#e0ac69', '#d4986a', '#c68642', '#8d5524', '#f1c27d'];
    const skin = skinTones[Math.abs(p.name.length) % skinTones.length];
    ctx.fillStyle = skin;
    ctx.beginPath();
    ctx.arc(0, -14, 6.5, 0, Math.PI * 2);
    ctx.fill();

    // Hair cap
    const hairColors = ['#1a1105', '#2b1d0c', '#0f0f0f', '#4a3728', '#c29b38'];
    const hairColor = hairColors[Math.abs(p.name.charCodeAt(0)) % hairColors.length];
    ctx.fillStyle = hairColor;
    ctx.beginPath();
    ctx.arc(0, -16, 6.2, Math.PI, Math.PI * 2);
    ctx.fill();

    ctx.restore();
  }

  renderBall(ctx, bwX, bwY, dt) {
    const z = this.ball3D.z;

    // 1. Ball Ground Shadow (displaces downwards with elevation)
    ctx.save();
    const shadowY = bwY + z * 0.32;
    const shadowR = Math.max(3.5, 7.5 - z * 0.1);
    const shadowAlpha = Math.max(0.12, 0.48 - z * 0.01);
    ctx.fillStyle = `rgba(0, 0, 0, ${shadowAlpha})`;
    ctx.beginPath();
    ctx.ellipse(bwX, shadowY, shadowR * 1.3, shadowR * 0.8, 0, 0, Math.PI * 2);
    ctx.fill();
    ctx.restore();

    // 2. Dynamic Ball Trail (6 fading segments)
    if (this.ball3D.trail.length > 1) {
      ctx.save();
      for (let i = 1; i < this.ball3D.trail.length; i++) {
        const pt = this.ball3D.trail[i];
        const alpha = (1 - i / this.ball3D.trail.length) * 0.75;
        const radius = Math.max(2, 6 * (1 - i / this.ball3D.trail.length));

        ctx.beginPath();
        ctx.arc(pt.x, pt.y, radius, 0, Math.PI * 2);
        if (pt.isShot) {
          ctx.fillStyle = `rgba(255, 170, 0, ${alpha})`;
          ctx.shadowColor = '#ff6600';
          ctx.shadowBlur = 10;
        } else {
          ctx.fillStyle = `rgba(0, 229, 255, ${alpha})`;
          ctx.shadowColor = '#00e5ff';
          ctx.shadowBlur = 8;
        }
        ctx.fill();
      }
      ctx.restore();
    }

    // 3. 3D Soccer Ball Sphere (scales up with height)
    ctx.save();
    const ballY = bwY - z;
    const ballR = 6.5 * (1 + z * 0.008);

    // Ball glow
    ctx.shadowColor = '#ffffff';
    ctx.shadowBlur = z > 2 ? 10 : 5;

    // Radial gradient lighting
    const grad = ctx.createRadialGradient(bwX - 2, ballY - 2, 1, bwX, ballY, ballR);
    grad.addColorStop(0, '#ffffff');
    grad.addColorStop(0.65, '#f0f0f0');
    grad.addColorStop(1, '#b0b5be');

    ctx.fillStyle = grad;
    ctx.beginPath();
    ctx.arc(bwX, ballY, ballR, 0, Math.PI * 2);
    ctx.fill();

    // Black pentagonal soccer patches
    ctx.fillStyle = '#1a1f2c';
    ctx.beginPath();
    ctx.arc(bwX, ballY, ballR * 0.42, 0, Math.PI * 2);
    ctx.fill();

    ctx.restore();
  }

  renderSparks(ctx, dt) {
    ctx.save();
    for (let i = this.celebration.sparks.length - 1; i >= 0; i--) {
      const sp = this.celebration.sparks[i];
      sp.x += sp.vx;
      sp.y += sp.vy;
      sp.vy += 0.12; // gravity
      sp.life -= sp.decay * dt;

      if (sp.life <= 0) {
        this.celebration.sparks.splice(i, 1);
        continue;
      }

      ctx.fillStyle = sp.color;
      ctx.shadowColor = sp.color;
      ctx.shadowBlur = 8;
      ctx.beginPath();
      ctx.arc(sp.x, sp.y, sp.size * sp.life, 0, Math.PI * 2);
      ctx.fill();
    }
    ctx.restore();
  }

  renderMinimap(engine, vpW, vpH) {
    if (!this.minimapCtx || !this.minimapCanvas) return;
    const mctx = this.minimapCtx;
    const mw = this.minimapCanvas.width;
    const mh = this.minimapCanvas.height;

    mctx.save();
    mctx.clearRect(0, 0, mw, mh);
    mctx.scale(this.dpr, this.dpr);

    const pad = 4;
    const pitchMinW = 160 - pad * 2;
    const pitchMinH = 96 - pad * 2;

    // Pitch turf
    mctx.fillStyle = 'rgba(6, 26, 12, 0.88)';
    mctx.fillRect(pad, pad, pitchMinW, pitchMinH);

    // Pitch border & center line
    mctx.strokeStyle = 'rgba(0, 255, 136, 0.45)';
    mctx.lineWidth = 1;
    mctx.strokeRect(pad, pad, pitchMinW, pitchMinH);

    mctx.beginPath();
    mctx.moveTo(pad + pitchMinW / 2, pad);
    mctx.lineTo(pad + pitchMinW / 2, pad + pitchMinH);
    mctx.stroke();

    // Center circle
    mctx.beginPath();
    mctx.arc(pad + pitchMinW / 2, pad + pitchMinH / 2, 12, 0, Math.PI * 2);
    mctx.stroke();

    // 1. User Players (Electric Cyan dots with smooth render positions)
    mctx.fillStyle = '#00f0ff';
    mctx.shadowColor = '#00f0ff';
    mctx.shadowBlur = 4;
    (engine.userPlayers || []).forEach(p => {
      const rx = p.renderX !== undefined ? p.renderX : p.x;
      const ry = p.renderY !== undefined ? p.renderY : p.y;
      const px = pad + (rx / 100) * pitchMinW;
      const py = pad + (ry / 100) * pitchMinH;
      mctx.beginPath();
      mctx.arc(px, py, 2.5, 0, Math.PI * 2);
      mctx.fill();
    });

    // 2. Opponent Players (Crimson dots with smooth render positions)
    mctx.fillStyle = '#ff3344';
    mctx.shadowColor = '#ff3344';
    mctx.shadowBlur = 4;
    (engine.oppPlayers || []).forEach(p => {
      const rx = p.renderX !== undefined ? p.renderX : p.x;
      const ry = p.renderY !== undefined ? p.renderY : p.y;
      const px = pad + (rx / 100) * pitchMinW;
      const py = pad + (ry / 100) * pitchMinH;
      mctx.beginPath();
      mctx.arc(px, py, 2.5, 0, Math.PI * 2);
      mctx.fill();
    });

    // 3. Ball dot (Glowing white with smooth render positions)
    const ball = engine.ball || { x: 50, y: 50 };
    const rbx = ball.renderX !== undefined ? ball.renderX : ball.x;
    const rby = ball.renderY !== undefined ? ball.renderY : ball.y;
    const bx = pad + (rbx / 100) * pitchMinW;
    const by = pad + (rby / 100) * pitchMinH;
    mctx.fillStyle = '#ffffff';
    mctx.shadowColor = '#ffffff';
    mctx.shadowBlur = 8;
    mctx.beginPath();
    mctx.arc(bx, by, 3.2, 0, Math.PI * 2);
    mctx.fill();

    // 4. Camera Frustum Viewport Box
    const viewW = (vpW / this.camera.zoom);
    const viewH = (vpH / this.camera.zoom);
    const frustumLeft = pad + ((this.camera.x - viewW / 2 - this.margin) / this.pitchW) * pitchMinW;
    const frustumTop = pad + ((this.camera.y - viewH / 2 - this.margin) / this.pitchH) * pitchMinH;
    const frustumW = (viewW / this.pitchW) * pitchMinW;
    const frustumH = (viewH / this.pitchH) * pitchMinH;

    mctx.strokeStyle = 'rgba(255, 235, 59, 0.85)';
    mctx.shadowColor = '#ffeb3b';
    mctx.shadowBlur = 5;
    mctx.lineWidth = 1.2;
    mctx.setLineDash([3, 2]);
    mctx.strokeRect(frustumLeft, frustumTop, frustumW, frustumH);
    mctx.setLineDash([]);

    mctx.restore();
  }

  syncBroadcastUI(engine) {
    // Scorebug
    const tvHomeName = document.getElementById('tvHomeName');
    if (tvHomeName) tvHomeName.textContent = 'МОЙ КЛУБ';

    const tvAwayName = document.getElementById('tvAwayName');
    if (tvAwayName) tvAwayName.textContent = (engine.oppClubName || 'СОПЕРНИК').toUpperCase();

    const tvScoreHome = document.getElementById('tvScoreHome');
    if (tvScoreHome) tvScoreHome.textContent = simScoreUser;

    const tvScoreAway = document.getElementById('tvScoreAway');
    if (tvScoreAway) tvScoreAway.textContent = simScoreAi;

    const tvClock = document.getElementById('tvClock');
    const simClock = document.getElementById('simClock');
    if (tvClock && simClock) tvClock.textContent = `⏱ ${simClock.textContent}`;

    const tvPeriod = document.getElementById('tvPeriod');
    const simPeriod = document.getElementById('simPeriod');
    if (tvPeriod && simPeriod) tvPeriod.textContent = simPeriod.textContent;

    // Tactics quick buttons
    const curTactic = engine.currentTactic || simCurrentTactic || 'balance';
    ['bus', 'balance', 'press'].forEach(t => {
      const btn = document.getElementById(`tvTactic${t.charAt(0).toUpperCase() + t.slice(1)}`);
      if (btn) btn.classList.toggle('active', curTactic === t);
    });

    // Speed button
    const tvBtnSpeed = document.getElementById('tvBtnSpeed');
    if (tvBtnSpeed) tvBtnSpeed.textContent = `⚡ ${simSpeedMode}x`;

    // Subs button
    const tvBtnSubs = document.getElementById('tvBtnSubs');
    if (tvBtnSubs) tvBtnSubs.textContent = `🔄 Замена (${simSubsUsed}/3)`;

    // Live Stats Ticker
    const userTicks = engine.userPossTicks || 50;
    const oppTicks = engine.oppPossTicks || 50;
    const totalTicks = Math.max(1, userTicks + oppTicks);
    const userPct = Math.round((userTicks / totalTicks) * 100);
    const oppPct = 100 - userPct;

    const userShots = simStats ? simStats.userShots : 0;
    const aiShots = simStats ? simStats.aiShots : 0;

    const statsEl = document.getElementById('tvTickerStats');
    if (statsEl) {
      statsEl.textContent = `Владение: ${userPct}% - ${oppPct}% • Удары: ${userShots} - ${aiShots} • Точность: 87%`;
    }
  }
}

let tvBroadcastEngine = new TVBroadcastEngine();

function processSimMinuteEvent(min) {
  const ev = simScheduledEvents.find(e => e.minute === min);
  if (!ev) return;

  const clubName = (simCurrentStageInfo && simCurrentStageInfo.club) || 'Соперник';
  const oppRoster = getOpponentRoster(clubName);
  const oppStar = oppRoster[9] ? oppRoster[9].name : 'Форвард';
  const oppMid = oppRoster[6] ? oppRoster[6].name : 'Полузащитник';
  const userDef = simBluePlayers.find(p => ['CB', 'LB', 'RB', 'DEF'].includes(p.role)) || simBluePlayers[2] || { name: 'Защитник' };

  if (ev.type === 'GOAL_USER') {
    if (matchEngine2D) matchEngine2D.injectAttackOpportunity('user', 'GOAL');
  } else if (ev.type === 'GOAL_AI') {
    if (matchEngine2D) matchEngine2D.injectAttackOpportunity('opp', 'GOAL');
  } else if (ev.type === 'SAVE_USER') {
    if (matchEngine2D) matchEngine2D.injectAttackOpportunity('opp', 'SAVE');
  } else if (ev.type === 'SAVE_AI') {
    if (matchEngine2D) matchEngine2D.injectAttackOpportunity('user', 'SAVE');
  } else if (ev.type === 'POST') {
    if (matchEngine2D) matchEngine2D.injectAttackOpportunity(Math.random() < 0.5 ? 'user' : 'opp', 'SAVE');
    addSimFeedItem(min, '🎯', 'Опаснейший момент! Мяч сотрясает каркас ворот!');
  } else if (ev.type === 'CORNER') {
    if (simStats) simStats.userShots++;
    const setPieceCardId = save.myClubRoles && save.myClubRoles.setPieces;
    const setPlayer = setPieceCardId ? PLAYERS_DB.find(p => p.id === setPieceCardId) : (simBluePlayers[1] || simBluePlayers[0]);
    addSimFeedItem(min, '📐', `Опасный угловой подаёт мастер стандартов ${setPlayer ? setPlayer.name : 'Игрок'}! Мяч закручен в район вратарской.`);
  } else if (ev.type === 'YELLOW_CARD') {
    const isUser = Math.random() < 0.5;
    if (isUser) {
      if (simStats) simStats.userFouls++;
      addSimFeedItem(min, '🟨', `Предупреждение за срыв атаки получил ${userDef ? userDef.name : 'Защитник'}`);
    } else {
      if (simStats) simStats.aiFouls++;
      addSimFeedItem(min, '🟨', `Жёлтая карточка: ${oppMid} срывает нашу быструю контратаку.`);
    }
  } else if (ev.type === 'INJURY') {
    const targetSlot = Math.floor(Math.random() * (simBluePlayers.length - 1)) + 1;
    const injuredPlayer = getSimUserPlayer(targetSlot);
    simUserInjuries[targetSlot] = true;
    addSimFeedItem(min, '🚑', `ТРАВМА: ${injuredPlayer.name} получил повреждение! Характеристики снижены на 20%. Сделайте замену!`, 'sim-feed-item--injury');
  }
}

function resetRadarToCenter() {
  if (matchEngine2D) {
    matchEngine2D.resetKickoff('opp');
  }
}

function startSimClock() {
  if (simIntervalId) {
    clearInterval(simIntervalId);
    simIntervalId = null;
  }
  // 1x: ~81 сек на полный матч 90' (900мс/мин), в ТВ-режиме кинематографичные ~125 сек (900/0.65 = 1385мс/мин), 2x: 450мс/мин
  const isTv = tvBroadcastEngine && tvBroadcastEngine.active;
  const base1x = isTv ? Math.round(900 / 0.65) : 900;
  const intervalMs = simSpeedMode === 2 ? 450 : base1x;

  simIntervalId = setInterval(() => {
    if (!simRunning || simIsPaused || simIsHalftimePause) return;

    simMinute++;
    const simClock = document.getElementById('simClock');
    if (simClock) {
      const minStr = simMinute < 10 ? `0${simMinute}` : `${simMinute}`;
      simClock.textContent = `${minStr}:00`;
    }

    // 1st Half Whistle strictly at minute 45
    if (simMinute === 45) {
      const simPeriod = document.getElementById('simPeriod');
      if (simPeriod) simPeriod.textContent = 'ПЕРЕРЫВ';
      addSimFeedItem(45, '⏸️', 'Свисток на перерыв! Команды уходят в раздевалку.');
      if (tvBroadcastEngine && tvBroadcastEngine.active) {
        tvBroadcastEngine.triggerReplayWipe('ПЕРЕРЫВ • 1-Й ТАЙМ');
      }
      resetRadarToCenter();

      // Strict 2-second pause before 2nd half begins
      simIsHalftimePause = true;
      if (simHalftimeTimeout) clearTimeout(simHalftimeTimeout);
      simHalftimeTimeout = setTimeout(() => {
        simIsHalftimePause = false;
        if (!simRunning) return;
        const pEl = document.getElementById('simPeriod');
        if (pEl) pEl.textContent = '2-Й ТАЙМ';
        addSimFeedItem(46, '▶️', 'Начался 2-й тайм!');
      }, 2000);
      return;
    }

    // Fatigue alert at minute 60
    if (simMinute === 60) {
      addSimFeedItem(60, '⚡', '60\' Стартовый состав начинает уставать! Рекомендуется освежить игру заменой.');
    }

    // Added time alert at minute 90
    if (simMinute === 90 && simAddedTime > 0) {
      addSimFeedItem(90, '⏱️', `Судья добавил ${simAddedTime} мин. к основному времени!`);
    }

    // Check scheduled timeline events
    processSimMinuteEvent(simMinute);

    // Final whistle: strictly stop at 90 + added time (never runs beyond!)
    const finalWhistleMinute = 90 + (simAddedTime || 0);
    if (simMinute >= finalWhistleMinute) {
      stopSimLoops();
      const simPeriod = document.getElementById('simPeriod');
      if (simPeriod) simPeriod.textContent = 'МАТЧ ОКОНЧЕН';

      if (simScoreUser === simScoreAi) {
        startPenaltyShootout();
      } else {
        finishSimMatch();
      }
    }
  }, intervalMs);
}

function skipSimMatchToEnd() {
  if (!simRunning) return;
  stopSimLoops();

  const remaining = simScheduledEvents.filter(e => e.minute > simMinute);
  const stars = (simCurrentStageInfo && simCurrentStageInfo.stars) || ['Звезда'];
  const oppStar = stars[0] || 'Форвард';
  const userSt = getSimUserPlayer(9);

  remaining.forEach(ev => {
    if (ev.type === 'GOAL_USER') {
      simScoreUser++;
      simStats.userShots++;
      simStats.userShotsOnTarget++;
      if (userSt && userSt.id) simUserScorers.push(userSt.id);
      addSimFeedItem(ev.minute, '⚽', `ГОЛ! ${userSt.name} поражает ворота соперника! (Счёт ${simScoreUser}:${simScoreAi})`, 'sim-feed-item--goal-user');
    } else if (ev.type === 'GOAL_AI') {
      simScoreAi++;
      simStats.aiShots++;
      simStats.aiShotsOnTarget++;
      addSimFeedItem(ev.minute, '⚽', `ГОЛ! ${oppStar} поражает наши ворота! (Счёт ${simScoreUser}:${simScoreAi})`, 'sim-feed-item--goal-ai');
    } else if (ev.type === 'SAVE_USER') {
      simStats.aiShots++;
      simStats.aiShotsOnTarget++;
      simStats.userSaves++;
      addSimFeedItem(ev.minute, '🧤', `Опасный удар отражён нашим вратарём!`, 'sim-feed-item--save');
    } else if (ev.type === 'SAVE_AI') {
      simStats.userShots++;
      simStats.userShotsOnTarget++;
      simStats.aiSaves++;
      addSimFeedItem(ev.minute, '🧤', `Вратарь соперника парирует удар!`, 'sim-feed-item--save');
    } else if (ev.type === 'POST') {
      simStats.userShots++;
      addSimFeedItem(ev.minute, '🎯', `Опасный момент! Мяч сотрясает штангу ворот!`);
    } else if (ev.type === 'YELLOW_CARD') {
      simStats.userFouls++;
      addSimFeedItem(ev.minute, '🟨', `Предупреждение за срыв атаки.`);
    }
  });

  simMinute = 90 + (simAddedTime || 0);
  const simClock = document.getElementById('simClock');
  if (simClock) simClock.textContent = `${simMinute}:00`;
  const simPeriod = document.getElementById('simPeriod');
  if (simPeriod) simPeriod.textContent = 'МАТЧ ОКОНЧЕН';
  updateSimScoreboard();

  if (simScoreUser === simScoreAi) {
    startPenaltyShootout();
  } else {
    finishSimMatch();
  }
}

/* ═══════════════════════════════════════════════════════════════════
   ИНТЕРАКТИВНАЯ СЕРИЯ ПЕНАЛЬТИ (ПРИ НИЧЬЕЙ)
═══════════════════════════════════════════════════════════════════ */
let penaltyState = {
  round: 1,
  phase: 'USER_SHOOT', // 'USER_SHOOT' | 'AI_SHOOT'
  userScore: 0,
  aiScore: 0,
  userKicks: [],
  aiKicks: [],
  isSuddenDeath: false,
  isFinished: false,
  inputLocked: false
};

function renderPenaltyDots() {
  const userDotsEl = document.getElementById('penUserDots');
  const aiDotsEl = document.getElementById('penAiDots');
  if (!userDotsEl || !aiDotsEl) return;

  const totalDots = Math.max(5, penaltyState.userKicks.length, penaltyState.aiKicks.length);
  
  userDotsEl.innerHTML = '';
  for (let i = 0; i < totalDots; i++) {
    const dot = document.createElement('span');
    dot.className = 'pen-dot';
    if (i < penaltyState.userKicks.length) {
      dot.classList.add(penaltyState.userKicks[i] ? 'goal' : 'miss');
    }
    userDotsEl.appendChild(dot);
  }

  aiDotsEl.innerHTML = '';
  for (let i = 0; i < totalDots; i++) {
    const dot = document.createElement('span');
    dot.className = 'pen-dot';
    if (i < penaltyState.aiKicks.length) {
      dot.classList.add(penaltyState.aiKicks[i] ? 'goal' : 'miss');
    }
    aiDotsEl.appendChild(dot);
  }
}

function startPenaltyShootout() {
  stopSimLoops();
  penaltyState = {
    round: 1,
    phase: 'USER_SHOOT',
    userScore: 0,
    aiScore: 0,
    userKicks: [],
    aiKicks: [],
    isSuddenDeath: false,
    isFinished: false,
    inputLocked: false
  };

  const modal = document.getElementById('modalPenaltyShootout');
  const matchupEl = document.getElementById('penaltyMatchup');
  const scoreUserEl = document.getElementById('penUserScore');
  const scoreAiEl = document.getElementById('penAiScore');
  const aiTeamNameEl = document.getElementById('penAiTeamName');

  if (matchupEl) matchupEl.textContent = `МОЙ КЛУБ vs ${simCurrentStageInfo.club}`;
  if (aiTeamNameEl) aiTeamNameEl.textContent = simCurrentStageInfo.club;
  if (scoreUserEl) scoreUserEl.textContent = '0';
  if (scoreAiEl) scoreAiEl.textContent = '0';

  renderPenaltyDots();
  addSimFeedItem(90, '🎯', 'Ничья в основное время! Победитель определится в серии пенальти!');

  if (modal) modal.classList.remove('hidden');
  setupPenaltyUserShootPhase();
}

function setupPenaltyUserShootPhase() {
  penaltyState.phase = 'USER_SHOOT';
  penaltyState.inputLocked = false;

  const banner = document.getElementById('penaltyBanner');
  const status = document.getElementById('penaltyStatus');
  const ball = document.getElementById('penaltyBall');
  const gk = document.getElementById('penaltyGk');
  const gkName = document.getElementById('penaltyGkName');
  const targets = document.getElementById('penaltyTargets');

  if (ball) ball.style.transform = 'translate(-50%, 0)';
  if (gk) {
    gk.className = 'penalty-goalkeeper';
  }
  if (gkName) gkName.textContent = simCurrentStageInfo.gk || 'Вратарь';

  const roundText = penaltyState.isSuddenDeath ? `Внезапная смерть (Раунд ${penaltyState.round})` : `Раунд ${penaltyState.round} из 5`;
  if (banner) banner.textContent = `${roundText} • Ваш удар! Выберите угол ворот:`;
  if (status) {
    status.textContent = 'Выберите направление удара (11 метров):';
    status.style.color = 'var(--silver)';
  }

  const bLeft = document.getElementById('btnPenTargetLeft');
  const bCenter = document.getElementById('btnPenTargetCenter');
  const bRight = document.getElementById('btnPenTargetRight');
  if (bLeft) bLeft.querySelector('.pen-tgt-lbl').textContent = 'ВЛЕВО';
  if (bCenter) bCenter.querySelector('.pen-tgt-lbl').textContent = 'ПО ЦЕНТРУ';
  if (bRight) bRight.querySelector('.pen-tgt-lbl').textContent = 'ВПРАВО';
  if (targets) targets.style.pointerEvents = 'auto';
}

function handlePenaltyUserShot(zone) {
  if (penaltyState.inputLocked || penaltyState.phase !== 'USER_SHOOT') return;
  penaltyState.inputLocked = true;

  const targets = document.getElementById('penaltyTargets');
  if (targets) targets.style.pointerEvents = 'none';

  const ball = document.getElementById('penaltyBall');
  const gk = document.getElementById('penaltyGk');
  const status = document.getElementById('penaltyStatus');
  const scoreUserEl = document.getElementById('penUserScore');

  // AI Goalkeeper dives
  const zones = ['left', 'center', 'right'];
  const aiGkDive = zones[Math.floor(Math.random() * zones.length)];

  // Animate ball trajectory
  if (ball) {
    if (zone === 'left') ball.style.transform = 'translate(-85px, -125px) scale(0.6)';
    else if (zone === 'center') ball.style.transform = 'translate(0px, -135px) scale(0.55)';
    else ball.style.transform = 'translate(85px, -125px) scale(0.6)';
  }

  // Animate keeper dive
  if (gk) {
    gk.classList.add(`dive-${aiGkDive}`);
  }

  const isGuessed = aiGkDive === zone;
  const isGoal = !isGuessed || (Math.random() < 0.15); // 15% to slip through fingers even if guessed

  setTimeout(() => {
    if (isGoal) {
      penaltyState.userScore++;
      penaltyState.userKicks.push(true);
      if (scoreUserEl) scoreUserEl.textContent = penaltyState.userScore;
      if (status) {
        status.textContent = '⚽ ГООООЛ! Мяч вонзается в сетку ворот!';
        status.style.color = 'var(--gold)';
      }
      triggerSimGoalFlash();
      burstParticles();
    } else {
      penaltyState.userKicks.push(false);
      if (status) {
        status.textContent = `🧤 СЕЙВ! Вратарь ${simCurrentStageInfo.gk || 'соперника'} угадывает и парирует удар!`;
        status.style.color = '#ff4444';
      }
    }

    renderPenaltyDots();

    // Check premature win condition or proceed to AI kick phase
    setTimeout(() => {
      checkPenaltyShootoutStepAfterUser();
    }, 1400);
  }, 450);
}

function checkPenaltyShootoutStepAfterUser() {
  // If in regular 5 rounds and math impossibility reached
  const uK = penaltyState.userKicks.length;
  const aK = penaltyState.aiKicks.length;
  const uRemaining = 5 - uK;
  const aRemaining = 5 - aK;

  if (!penaltyState.isSuddenDeath && uK <= 5 && aK <= 5) {
    if (penaltyState.userScore > penaltyState.aiScore + aRemaining) {
      finishPenaltyShootout();
      return;
    }
  }

  setupPenaltyAiShootPhase();
}

function setupPenaltyAiShootPhase() {
  penaltyState.phase = 'AI_SHOOT';
  penaltyState.inputLocked = false;

  const banner = document.getElementById('penaltyBanner');
  const status = document.getElementById('penaltyStatus');
  const ball = document.getElementById('penaltyBall');
  const gk = document.getElementById('penaltyGk');
  const gkName = document.getElementById('penaltyGkName');
  const targets = document.getElementById('penaltyTargets');

  if (ball) ball.style.transform = 'translate(-50%, 0)';
  if (gk) {
    gk.className = 'penalty-goalkeeper';
  }
  const userGk = getSimUserGK();
  if (gkName) gkName.textContent = userGk.name;

  const roundText = penaltyState.isSuddenDeath ? `Внезапная смерть (Раунд ${penaltyState.round})` : `Раунд ${penaltyState.round} из 5`;
  if (banner) banner.textContent = `${roundText} • Удар соперника! Куда прыгнет ваш вратарь?`;
  if (status) {
    status.textContent = 'Угадайте направление удара соперника:';
    status.style.color = 'var(--silver)';
  }

  const bLeft = document.getElementById('btnPenTargetLeft');
  const bCenter = document.getElementById('btnPenTargetCenter');
  const bRight = document.getElementById('btnPenTargetRight');
  if (bLeft) bLeft.querySelector('.pen-tgt-lbl').textContent = 'ПРЫЖОК ВЛЕВО';
  if (bCenter) bCenter.querySelector('.pen-tgt-lbl').textContent = 'ПО ЦЕНТРУ';
  if (bRight) bRight.querySelector('.pen-tgt-lbl').textContent = 'ПРЫЖОК ВПРАВО';
  if (targets) targets.style.pointerEvents = 'auto';
}

function handlePenaltyUserSave(userDive) {
  if (penaltyState.inputLocked || penaltyState.phase !== 'AI_SHOOT') return;
  penaltyState.inputLocked = true;

  const targets = document.getElementById('penaltyTargets');
  if (targets) targets.style.pointerEvents = 'none';

  const ball = document.getElementById('penaltyBall');
  const gk = document.getElementById('penaltyGk');
  const status = document.getElementById('penaltyStatus');
  const scoreAiEl = document.getElementById('penAiScore');

  // AI shooter picks a zone
  const zones = ['left', 'center', 'right'];
  const aiShotZone = zones[Math.floor(Math.random() * zones.length)];

  // Animate user keeper
  if (gk) {
    gk.classList.add(`dive-${userDive}`);
  }

  // Animate ball trajectory
  if (ball) {
    if (aiShotZone === 'left') ball.style.transform = 'translate(-85px, -125px) scale(0.6)';
    else if (aiShotZone === 'center') ball.style.transform = 'translate(0px, -135px) scale(0.55)';
    else ball.style.transform = 'translate(85px, -125px) scale(0.6)';
  }

  const isGuessed = userDive === aiShotZone;
  const isGoal = !isGuessed;

  setTimeout(() => {
    if (isGoal) {
      penaltyState.aiScore++;
      penaltyState.aiKicks.push(true);
      if (scoreAiEl) scoreAiEl.textContent = penaltyState.aiScore;
      if (status) {
        status.textContent = `⚽ Гол! ${simCurrentStageInfo.stars[0] || 'Соперник'} реализует пенальти.`;
        status.style.color = '#ff4444';
      }
    } else {
      penaltyState.aiKicks.push(false);
      simStats.userSaves++;
      if (status) {
        status.textContent = `🧤 БРАВО! ${getSimUserGK().name} ВЫТАЩИЛ ПЕНАЛЬТИ!`;
        status.style.color = 'var(--cyan)';
      }
      burstParticles();
    }

    renderPenaltyDots();

    setTimeout(() => {
      checkPenaltyRoundResolution();
    }, 1400);
  }, 450);
}

function checkPenaltyRoundResolution() {
  const uK = penaltyState.userKicks.length;
  const aK = penaltyState.aiKicks.length;

  if (!penaltyState.isSuddenDeath) {
    const uRemaining = 5 - uK;
    const aRemaining = 5 - aK;

    // Check if one team mathematically won
    if (penaltyState.userScore > penaltyState.aiScore + aRemaining) {
      finishPenaltyShootout();
      return;
    }
    if (penaltyState.aiScore > penaltyState.userScore + uRemaining) {
      finishPenaltyShootout();
      return;
    }

    // Both completed 5 kicks
    if (uK >= 5 && aK >= 5) {
      if (penaltyState.userScore !== penaltyState.aiScore) {
        finishPenaltyShootout();
        return;
      }
      // Tied after 5 rounds -> switch to Sudden Death
      penaltyState.isSuddenDeath = true;
      penaltyState.round++;
      setupPenaltyUserShootPhase();
      return;
    }
  } else {
    // Sudden Death: if both took kicks in this sudden death round and scores differ
    if (uK === aK) {
      if (penaltyState.userScore !== penaltyState.aiScore) {
        finishPenaltyShootout();
        return;
      }
    }
  }

  // Next round
  penaltyState.round++;
  setupPenaltyUserShootPhase();
}

function finishPenaltyShootout() {
  penaltyState.isFinished = true;
  const status = document.getElementById('penaltyStatus');
  const isWin = penaltyState.userScore > penaltyState.aiScore;

  if (status) {
    status.textContent = isWin ? '👑 ПОБЕДА В СЕРИИ ПЕНАЛЬТИ!' : '🛡️ ПОРАЖЕНИЕ В СЕРИИ ПЕНАЛЬТИ';
    status.style.color = isWin ? 'var(--gold)' : '#ff4444';
  }

  if (isWin) burstParticles();

  setTimeout(() => {
    const modal = document.getElementById('modalPenaltyShootout');
    if (modal) modal.classList.add('hidden');
    finishSimMatch({ userPen: penaltyState.userScore, aiPen: penaltyState.aiScore });
  }, 1800);
}

/* ═══════════════════════════════════════════════════════════════════
   ЗАВЕРШЕНИЕ МАТЧА, ПОСЛЕМАТЧЕВАЯ СТАТИСТИКА И ТРОФЕИ
═══════════════════════════════════════════════════════════════════ */
function finishSimMatch(penaltyResult = null) {
  stopSimLoops();
  if (goalOverlayTimeout) clearTimeout(goalOverlayTimeout);
  if (goalOverlayFadeTimeout) clearTimeout(goalOverlayFadeTimeout);
  const goalOverlay = document.getElementById('simGoalOverlay');
  if (goalOverlay) {
    goalOverlay.classList.remove('active', 'fade-out');
    goalOverlay.classList.add('hidden');
    goalOverlay.style.display = 'none';
  }

  addSimFeedItem(90, '🏁', 'ФИНАЛЬНЫЙ СВИСТОК! Матч окончен!');
  burstParticles();

  // Increment squad matches together
  save.myClubMatchesTogether = (save.myClubMatchesTogether || 0) + 1;

  const isWin = penaltyResult ? (penaltyResult.userPen > penaltyResult.aiPen) : (simScoreUser > simScoreAi);
  const isDraw = penaltyResult ? false : (simScoreUser === simScoreAi);
  const isCleanSheet = simScoreAi === 0;

  // Track Club Stats
  if (!save.clubStats) {
    save.clubStats = { matches: 0, wins: 0, draws: 0, losses: 0, goalsFor: 0, goalsAgainst: 0, cleanSheets: 0, playerStats: {} };
  }
  const cs = save.clubStats;
  cs.matches++;
  if (isWin) cs.wins++;
  else if (isDraw) cs.draws++;
  else cs.losses++;
  cs.goalsFor += simScoreUser;
  cs.goalsAgainst += simScoreAi;
  if (isCleanSheet) cs.cleanSheets++;

  // Track Player Stats & Distribute XP / Skill Points
  if (!cs.playerStats) cs.playerStats = {};
  if (!save.playerUpgrades) save.playerUpgrades = {};

  const userGk = getSimUserPlayer(0);
  simParticipatingPlayerIds.forEach(pId => {
    if (!cs.playerStats[pId]) cs.playerStats[pId] = { matches: 0, goals: 0, cleanSheets: 0 };
    cs.playerStats[pId].matches++;

    // Goals
    const scoredCount = simUserScorers.filter(id => id === pId).length;
    if (scoredCount > 0) cs.playerStats[pId].goals += scoredCount;

    // Clean sheet for GK
    if (isCleanSheet && userGk && userGk.id === pId) {
      cs.playerStats[pId].cleanSheets++;
    }

    // Award Card Mastery XP: +25 base, +15 for goal/save
    if (!save.playerUpgrades[pId]) {
      save.playerUpgrades[pId] = { xp: 0, sp: 0, pac: 0, sho: 0, pas: 0, def: 0, ref: 0 };
    }
    const up = save.playerUpgrades[pId];
    let gainedXp = 25;
    if (scoredCount > 0) gainedXp += 15 * scoredCount;
    if (isCleanSheet && userGk && userGk.id === pId) gainedXp += 15;

    up.xp = (up.xp || 0) + gainedXp;
    if (up.xp >= 100) {
      const newSp = Math.floor(up.xp / 100);
      up.sp = (up.sp || 0) + newSp;
      up.xp = up.xp % 100;
    }
  });

  // Rewards calculation
  let coinReward = isWin ? 600 : (isDraw ? 250 : 100);
  const goalBonus = simScoreUser * 100;
  let totalCoins = coinReward + goalBonus;
  let xpReward = 40;

  // Tournament progress & rewards
  const tourn = simCurrentTournament || TOURNAMENTS_CONFIG[0];
  if (!save.tournaments) save.tournaments = {};
  if (!save.tournaments[tourn.id]) save.tournaments[tourn.id] = { stage: 0, won: false };
  const tState = save.tournaments[tourn.id];

  let tournamentWon = false;
  let tournamentMsg = '';

  if (isWin) {
    if (tState.stage >= 2) {
      // Grand Final Win!
      tournamentWon = true;
      tState.won = true;
      tState.stage = 3;
      if (!Array.isArray(save.trophies)) save.trophies = [];
      if (!save.trophies.includes(tourn.id)) save.trophies.push(tourn.id);

      // Increment trophy room counter!
      if (!save.trophyCounts) save.trophyCounts = { pl: 0, laliga: 0, ucl: 0 };
      save.trophyCounts[tourn.id] = (save.trophyCounts[tourn.id] || 0) + 1;

      totalCoins += tourn.rewards.coins;
      xpReward += tourn.rewards.xp;
      tournamentMsg = `🏆 ВЫ ВЫИГРАЛИ ${tourn.name.toUpperCase()}! (+${tourn.rewards.coins} ★, +${tourn.rewards.xp} XP)`;
    } else {
      tState.stage++;
      const nextStages = getTournamentStages(tourn.id);
      tournamentMsg = `Вы вышли в ${nextStages[tState.stage].name}!`;
    }
  } else {
    // Loss in playoff
    tState.stage = 0;
    tournamentMsg = `Вы выбыли из турнира на стадии ${simCurrentStageInfo.name}.`;
  }

  // Award training points strictly to the 11 starting players
  const starters11 = getValidMyClubSquad();
  let mvpPlayer = null;
  if (starters11.length > 0) {
    mvpPlayer = starters11.reduce((best, p) => {
      return (!best || getPlayerEffectiveRating(p) > getPlayerEffectiveRating(best)) ? p : best;
    }, starters11[0]);
  }

  const allTrData = getAllPlayerTrainingData();
  starters11.forEach(p => {
    if (!p) return;
    const pEntry = getPlayerTrainingData(p.id, p.position);
    const isMvp = mvpPlayer && mvpPlayer.id === p.id;
    const pts = isMvp ? 2 : 1;
    pEntry.points = (pEntry.points || 0) + pts;
    allTrData[String(p.id)] = pEntry;
  });
  saveAllPlayerTrainingData(allTrData);
  updateTrainingHubBadge();

  save.coins += totalCoins;
  save.xp += xpReward;
  writeSave();
  updateTopBar();

  // Populate Result Modal & Stats
  setTimeout(() => {
    const modal = document.getElementById('modalSimResult');
    const icon = document.getElementById('simResultIcon');
    const title = document.getElementById('simResultTitle');
    const teams = document.getElementById('simFinalTeams');
    const score = document.getElementById('simFinalScore');
    const rewards = document.getElementById('simFinalRewards');
    const btnContinue = document.getElementById('btnSimContinueTournament');

    if (title) {
      if (tournamentWon) {
        title.textContent = '👑 ЧЕМПИОН!';
        if (icon) icon.textContent = '🏆';
      } else if (isWin) {
        title.textContent = penaltyResult ? 'ПОБЕДА ПО ПЕНАЛЬТИ!' : 'ПОБЕДА!';
        if (icon) icon.textContent = '🏆';
      } else if (isDraw) {
        title.textContent = 'НИЧЬЯ';
        if (icon) icon.textContent = '🤝';
      } else {
        title.textContent = penaltyResult ? 'ПОРАЖЕНИЕ ПО ПЕНАЛЬТИ' : 'ПОРАЖЕНИЕ';
        if (icon) icon.textContent = '🛡️';
      }
    }

    if (teams) teams.textContent = `МОЙ КЛУБ vs ${simCurrentStageInfo.club}`;
    
    // Display score with penalties if applicable
    if (score) {
      if (penaltyResult) {
        score.textContent = `${simScoreUser} : ${simScoreAi} (пен. ${penaltyResult.userPen}:${penaltyResult.aiPen})`;
      } else {
        score.textContent = `${simScoreUser} : ${simScoreAi}`;
      }
    }

    // Populate Post-Match Statistics
    const statUserPoss = document.getElementById('statUserPoss');
    const statAiPoss = document.getElementById('statAiPoss');
    const statPossFill = document.getElementById('statPossFill');
    const statUserShots = document.getElementById('statUserShots');
    const statAiShots = document.getElementById('statAiShots');
    const statUserFouls = document.getElementById('statUserFouls');
    const statAiFouls = document.getElementById('statAiFouls');
    const statUserSaves = document.getElementById('statUserSaves');
    const statAiSaves = document.getElementById('statAiSaves');

    if (statUserPoss) statUserPoss.textContent = `${simStats.userPoss}%`;
    if (statAiPoss) statAiPoss.textContent = `${simStats.aiPoss}%`;
    if (statPossFill) statPossFill.style.width = `${simStats.userPoss}%`;
    if (statUserShots) statUserShots.textContent = `${simStats.userShots} (${simStats.userShotsOnTarget})`;
    if (statAiShots) statAiShots.textContent = `${simStats.aiShots} (${simStats.aiShotsOnTarget})`;
    if (statUserFouls) statUserFouls.textContent = `${simStats.userFouls}`;
    if (statAiFouls) statAiFouls.textContent = `${simStats.aiFouls}`;
    if (statUserSaves) statUserSaves.textContent = `${simStats.userSaves}`;
    if (statAiSaves) statAiSaves.textContent = `${simStats.aiSaves}`;

    if (rewards) {
      rewards.innerHTML = `
        <div class="result-reward-item"><span>${tournamentMsg}</span><b>${isWin ? '✓' : '—'}</b></div>
        <div class="result-reward-item"><span>Матчевая выплата</span><b>+${coinReward} ★</b></div>
        ${goalBonus > 0 ? `<div class="result-reward-item"><span>Бонус за ${simScoreUser} мяч(а)</span><b>+${goalBonus} ★</b></div>` : ''}
        ${tournamentWon ? `<div class="result-reward-item" style="color:var(--gold);"><span>Трофейный куш</span><b>+${tourn.rewards.coins} ★</b></div>` : ''}
        <div class="result-reward-item" style="color:var(--cyan);"><span>Тренировка основы</span><b>+1 TP (MVP: +2 TP)</b></div>
        <div class="result-reward-item"><span>Опыт карточек основы</span><b>+25 XP всем</b></div>
        <div class="result-reward-item"><span>Сыгранность состава</span><b>+1 матч</b></div>
      `;
    }

    if (btnContinue) {
      const curStages = getTournamentStages(tourn.id);
      if (isWin && !tournamentWon) {
        btnContinue.style.display = 'block';
        btnContinue.textContent = `🏆 Играть ${curStages[tState.stage].name}`;
      } else if (tournamentWon) {
        btnContinue.style.display = 'block';
        btnContinue.textContent = '🏆 Выбрать другой турнир';
      } else {
        btnContinue.style.display = 'block';
        btnContinue.textContent = '🔄 Начать турнир заново';
      }
    }

    if (modal) modal.classList.remove('hidden');
  }, 900);
}

// 2D RADAR CANVAS RENDERING & FSM ENGINE DRIVER
let lastSimFrameTime = performance.now();

function startRadarLoop() {
  const canvas = document.getElementById('simRadarCanvas');
  const wrap = document.querySelector('.sim-radar-wrap');
  if (!matchRenderer) {
    matchRenderer = new MatchRenderer();
  }
  matchRenderer.init(wrap, canvas);

  lastSimFrameTime = performance.now();

  function simFrame(now) {
    if (!simRunning && simMinute >= 90) return;

    const rawDt = Math.min(0.08, (now - lastSimFrameTime) / 1000);
    lastSimFrameTime = now;

    const isTv = tvBroadcastEngine && tvBroadcastEngine.active;
    const tvSlowMo = isTv ? 0.65 : 1.0;

    if (simRunning && !simIsPaused && matchEngine2D) {
      const dt = rawDt * simSpeedMode * tvSlowMo;
      matchEngine2D.update(dt);
    }

    if (matchRenderer && matchEngine2D) {
      matchRenderer.render(matchEngine2D);
    }

    if (tvBroadcastEngine && tvBroadcastEngine.active && matchEngine2D) {
      tvBroadcastEngine.updateAndRender(matchEngine2D, rawDt * simSpeedMode * tvSlowMo);
    }

    simAnimId = requestAnimationFrame(simFrame);
  }

  if (simAnimId) cancelAnimationFrame(simAnimId);
  simAnimId = requestAnimationFrame(simFrame);
}

// Tactical pad click handling with 5s cooldown
document.querySelectorAll('#simTacticsBar .tactic-btn').forEach(btn => {
  btn.addEventListener('click', () => {
    if (simTacticCooldown > 0) {
      showToast(`⏳ Перестройка тактики через ${simTacticCooldown} сек.`);
      return;
    }
    const tactic = btn.dataset.tactic;
    updateTacticsUI(tactic);
    if (matchEngine2D) matchEngine2D.setTactic(tactic);
    if (tactic === 'bus') {
      addSimFeedItem(simMinute, '🛡️', 'Тренер даёт команду: «Автобус»! Линия обороны прижимается к своей штрафной (-35% риска голов).');
    } else if (tactic === 'press') {
      addSimFeedItem(simMinute, '⚔️', 'Тренер даёт команду: «Все в атаку / Прессинг!» Высокая линия обороны, давление на соперника.');
    } else {
      addSimFeedItem(simMinute, '⚖️', 'Тактическое построение возвращено в баланс.');
    }
    triggerTacticCooldown(5);
  });
});

// In-Game Substitutions Handling
function openSimSubsModal() {
  if (simSubsUsed >= 3) {
    showToast('⚠️ Все 3 замены уже использованы!');
    return;
  }

  simIsPaused = true;
  simSelectedSubId = null;
  simSelectedPitchSlot = null;

  const modal = document.getElementById('modalSimSubs');
  const remainingEl = document.getElementById('simSubsRemaining');
  const benchList = document.getElementById('subsBenchList');
  const pitchList = document.getElementById('subsPitchList');
  const btnConfirm = document.getElementById('btnConfirmSub');

  if (!modal || !benchList || !pitchList) return;

  if (remainingEl) remainingEl.textContent = `${3 - simSubsUsed}`;
  if (btnConfirm) btnConfirm.disabled = true;

  // Render available bench cards
  benchList.innerHTML = '';
  const benchIds = (save.myClubBench || []).filter(Boolean);
  const availableBench = benchIds.filter(id => !simUsedBenchIds.has(id));

  if (!availableBench.length) {
    benchList.innerHTML = '<div style="font-size:.7rem;color:var(--silver);padding:10px;">Нет свежих запасных</div>';
  } else {
    availableBench.forEach(id => {
      const p = PLAYERS_DB.find(pl => pl.id === id);
      if (!p) return;

      const card = document.createElement('div');
      card.className = 'sub-card';
      card.innerHTML = `
        <div class="sub-card-top">
          <span class="sub-card-name">${p.name}</span>
          <span class="sub-card-badge" style="color:var(--cyan);">СВЕЖИЙ</span>
        </div>
        <div class="sub-card-sub">${p.position} • OVR ${p.rating}</div>
      `;

      card.addEventListener('click', () => {
        benchList.querySelectorAll('.sub-card').forEach(c => c.classList.remove('selected'));
        card.classList.add('selected');
        simSelectedSubId = p.id;
        checkSubSelectionReady();
      });

      benchList.appendChild(card);
    });
  }

  // Render 11 pitch cards
  pitchList.innerHTML = '';
  simUserSquadPlayers.forEach((p, slotIdx) => {
    if (!p) return;
    const isInjured = Boolean(simUserInjuries[slotIdx]);
    const isFatigued = simMinute >= 60;

    const card = document.createElement('div');
    card.className = 'sub-card' + (isInjured ? ' injured' : '');

    let badgeText = isInjured ? '🩹 ТРАВМА (-20%)' : (isFatigued ? '⚡ УСТАЛ' : 'В норме');
    let badgeColor = isInjured ? 'var(--red)' : (isFatigued ? 'var(--gold)' : 'var(--green)');

    card.innerHTML = `
      <div class="sub-card-top">
        <span class="sub-card-name">${p.name}</span>
        <span class="sub-card-badge" style="color:${badgeColor};">${badgeText}</span>
      </div>
      <div class="sub-card-sub">${p.position} • OVR ${p.rating}</div>
    `;

    card.addEventListener('click', () => {
      pitchList.querySelectorAll('.sub-card').forEach(c => c.classList.remove('selected'));
      card.classList.add('selected');
      simSelectedPitchSlot = slotIdx;
      checkSubSelectionReady();
    });

    pitchList.appendChild(card);
  });

  function checkSubSelectionReady() {
    if (btnConfirm) {
      btnConfirm.disabled = !(simSelectedSubId && simSelectedPitchSlot !== null);
    }
  }

  modal.classList.remove('hidden');
}

const btnSimSubs = document.getElementById('btnSimSubs');
if (btnSimSubs) {
  btnSimSubs.addEventListener('click', openSimSubsModal);
}

const btnCloseSimSubs = document.getElementById('btnCloseSimSubs');
if (btnCloseSimSubs) {
  btnCloseSimSubs.addEventListener('click', () => {
    const modal = document.getElementById('modalSimSubs');
    if (modal) modal.classList.add('hidden');
    simIsPaused = false;
  });
}

const btnConfirmSub = document.getElementById('btnConfirmSub');
if (btnConfirmSub) {
  btnConfirmSub.addEventListener('click', () => {
    if (!simSelectedSubId || simSelectedPitchSlot === null) return;

    const subPlayer = PLAYERS_DB.find(p => p.id === simSelectedSubId);
    const oldPlayer = simUserSquadPlayers[simSelectedPitchSlot];

    if (subPlayer && oldPlayer) {
      // Execute substitution
      simUserSquadPlayers[simSelectedPitchSlot] = subPlayer;
      simParticipatingPlayerIds.add(subPlayer.id);
      simUsedBenchIds.add(subPlayer.id);
      delete simUserInjuries[simSelectedPitchSlot];

      // Update 2D radar engine & player name
      if (matchEngine2D) {
        matchEngine2D.substituteUserPlayer(simSelectedPitchSlot, subPlayer);
      }
      if (simBluePlayers[simSelectedPitchSlot]) {
        simBluePlayers[simSelectedPitchSlot].name = subPlayer.name;
      }

      simSubsUsed++;
      const btnSubsEl = document.getElementById('btnSimSubs');
      if (btnSubsEl) btnSubsEl.textContent = `🔄 Замена (${simSubsUsed}/3)`;

      addSimFeedItem(simMinute, '🔄', `ЗАМЕНА: ${subPlayer.name} выходит на поле вместо ${oldPlayer.name}! Игрок полон сил.`);
      burstParticles();
      showToast(`🔄 Замена проведена: ${subPlayer.name} на поле!`);
    }

    const modal = document.getElementById('modalSimSubs');
    if (modal) modal.classList.add('hidden');
    simIsPaused = false;
  });
}

// Training Camp Skill Upgrade Buttons
document.querySelectorAll('.btn-skill-plus').forEach(btn => {
  btn.addEventListener('click', () => {
    const skillKey = btn.dataset.skill;
    if (!activeTrainingPlayerId || !skillKey) return;

    if (!save.playerUpgrades) save.playerUpgrades = {};
    if (!save.playerUpgrades[activeTrainingPlayerId]) {
      save.playerUpgrades[activeTrainingPlayerId] = { xp: 0, sp: 0, pac: 0, sho: 0, pas: 0, def: 0, ref: 0 };
    }
    const up = save.playerUpgrades[activeTrainingPlayerId];

    if ((up.sp || 0) > 0) {
      up.sp--;
      up[skillKey] = (up[skillKey] || 0) + 1;
      writeSave();
      openTrainingCampModal(activeTrainingPlayerId);
      showToast(`⚡ Навык ${skillKey.toUpperCase()} улучшен до +${up[skillKey]}!`);
    }
  });
});

// Card Action Modal Buttons
const btnActionTrain = document.getElementById('btnActionTrain');
if (btnActionTrain) {
  btnActionTrain.addEventListener('click', () => {
    const modalAction = document.getElementById('modalCardAction');
    if (modalAction) modalAction.classList.add('hidden');
    if (activeCardAction && activeCardAction.playerId) {
      openTrainingCampModal(activeCardAction.playerId);
    }
  });
}

const btnActionSwap = document.getElementById('btnActionSwap');
if (btnActionSwap) {
  btnActionSwap.addEventListener('click', () => {
    const modalAction = document.getElementById('modalCardAction');
    if (modalAction) modalAction.classList.add('hidden');
    if (!activeCardAction) return;
    if (activeCardAction.type === 'bench') {
      openMyClubBenchPicker(activeCardAction.slotIndex);
    } else {
      openMyClubPicker(activeCardAction.slotIndex);
    }
  });
}

const btnActionRemoveBench = document.getElementById('btnActionRemoveBench');
if (btnActionRemoveBench) {
  btnActionRemoveBench.addEventListener('click', () => {
    const modalAction = document.getElementById('modalCardAction');
    if (modalAction) modalAction.classList.add('hidden');
    if (activeCardAction && activeCardAction.type === 'bench') {
      if (!Array.isArray(save.myClubBench)) save.myClubBench = [null, null, null];
      save.myClubBench[activeCardAction.slotIndex] = null;
      writeSave();
      renderMyClubField();
      showToast('Игрок убран со скамьи запасных.');
    }
  });
}

const btnCloseCardAction = document.getElementById('btnCloseCardAction');
if (btnCloseCardAction) {
  btnCloseCardAction.addEventListener('click', () => {
    const modal = document.getElementById('modalCardAction');
    if (modal) modal.classList.add('hidden');
  });
}

const btnOpenTrainingHub = document.getElementById('btnOpenTrainingHub');
if (btnOpenTrainingHub) {
  btnOpenTrainingHub.addEventListener('click', () => {
    openTrainingHubModal();
  });
}

const btnCloseTrainingHub = document.getElementById('btnCloseTrainingHub');
if (btnCloseTrainingHub) {
  btnCloseTrainingHub.addEventListener('click', () => {
    const modal = document.getElementById('modalTrainingHub') || document.getElementById('modalTrainingCamp');
    if (modal) modal.classList.add('hidden');
  });
}

const btnCloseTrainingCamp = document.getElementById('btnCloseTrainingCamp');
if (btnCloseTrainingCamp) {
  btnCloseTrainingCamp.addEventListener('click', () => {
    const modal = document.getElementById('modalTrainingHub') || document.getElementById('modalTrainingCamp');
    if (modal) modal.classList.add('hidden');
  });
}

const btnCloseRolesPicker = document.getElementById('btnCloseRolesPicker');
if (btnCloseRolesPicker) {
  btnCloseRolesPicker.addEventListener('click', () => {
    const modal = document.getElementById('modalRolesPicker');
    if (modal) modal.classList.add('hidden');
  });
}

// Role card click listeners
const roleItemCaptain = document.getElementById('roleItemCaptain');
if (roleItemCaptain) {
  roleItemCaptain.addEventListener('click', () => openRolesPickerModal('captain'));
}
const roleItemPenalty = document.getElementById('roleItemPenalty');
if (roleItemPenalty) {
  roleItemPenalty.addEventListener('click', () => openRolesPickerModal('penalty'));
}
const roleItemSetPieces = document.getElementById('roleItemSetPieces');
if (roleItemSetPieces) {
  roleItemSetPieces.addEventListener('click', () => openRolesPickerModal('setPieces'));
}

// Stats & Hall of Fame
const btnOpenClubStats = document.getElementById('btnOpenClubStats');
if (btnOpenClubStats) {
  btnOpenClubStats.addEventListener('click', openClubStatsModal);
}
const btnCloseClubStats = document.getElementById('btnCloseClubStats');
if (btnCloseClubStats) {
  btnCloseClubStats.addEventListener('click', () => {
    const modal = document.getElementById('modalClubStats');
    if (modal) modal.classList.add('hidden');
  });
}

// Speed Button Toggle: 1x -> 2x -> Пропустить к итогу
const btnSimSpeed = document.getElementById('btnSimSpeed');
if (btnSimSpeed) {
  btnSimSpeed.addEventListener('click', () => {
    if (simSpeedMode === 1) {
      simSpeedMode = 2;
      btnSimSpeed.textContent = '2x';
      if (simRunning) startSimClock();
    } else if (simSpeedMode === 2) {
      simSpeedMode = 3;
      btnSimSpeed.textContent = '⏩ Итог';
      if (simRunning) skipSimMatchToEnd();
    } else {
      simSpeedMode = 1;
      btnSimSpeed.textContent = '1x';
      if (simRunning) startSimClock();
    }
  });
}

// Button listeners
const btnBackFromMyClub = document.getElementById('btnBackFromMyClub');
if (btnBackFromMyClub) {
  btnBackFromMyClub.addEventListener('click', () => {
    showScreen('screenMenu');
  });
}

const btnAutoSquadEl = document.getElementById('btnAutoSquad') || document.getElementById('btnMyClubAutoSquad');
if (btnAutoSquadEl) {
  btnAutoSquadEl.addEventListener('click', () => {
    handleAutoSquadClick();
  });
}

const btnOpenTournaments = document.getElementById('btnOpenTournaments');
if (btnOpenTournaments) {
  btnOpenTournaments.addEventListener('click', () => {
    ensureValidSquad();
    openTournamentsModal();
  });
}

const btnCloseTournaments = document.getElementById('btnCloseTournaments');
if (btnCloseTournaments) {
  btnCloseTournaments.addEventListener('click', () => {
    const modal = document.getElementById('modalTournaments');
    if (modal) modal.classList.add('hidden');
  });
}

const btnCloseMyClubPicker = document.getElementById('btnCloseMyClubPicker');
if (btnCloseMyClubPicker) {
  btnCloseMyClubPicker.addEventListener('click', () => {
    const modal = document.getElementById('modalMyClubPicker');
    if (modal) modal.classList.add('hidden');
  });
}

const btnSimContinueTournament = document.getElementById('btnSimContinueTournament');
if (btnSimContinueTournament) {
  btnSimContinueTournament.addEventListener('click', () => {
    const modal = document.getElementById('modalSimResult');
    if (modal) modal.classList.add('hidden');
    openTournamentsModal();
  });
}

const btnSimBackToClub = document.getElementById('btnSimBackToClub');
if (btnSimBackToClub) {
  btnSimBackToClub.addEventListener('click', () => {
    const modal = document.getElementById('modalSimResult');
    if (modal) modal.classList.add('hidden');
    openMyClubScreen();
  });
}

const btnSimBackToMenu = document.getElementById('btnSimBackToMenu');
if (btnSimBackToMenu) {
  btnSimBackToMenu.addEventListener('click', () => {
    const modal = document.getElementById('modalSimResult');
    if (modal) modal.classList.add('hidden');
    showScreen('screenMenu');
  });
}

// My Club Formation Picker Modal
const btnOpenFormationMC = document.getElementById('btnOpenFormationMC');
if (btnOpenFormationMC) {
  btnOpenFormationMC.addEventListener('click', openFormationPickerMC);
}

const btnCloseFormationMC = document.getElementById('btnCloseFormationMC');
if (btnCloseFormationMC) {
  btnCloseFormationMC.addEventListener('click', () => {
    const modal = document.getElementById('modalFormationMC');
    if (modal) modal.classList.add('hidden');
  });
}

// Penalty Shootout Interactive Target Listeners
function handlePenaltyTargetClick(zone) {
  if (!penaltyState) return;
  if (penaltyState.phase === 'USER_SHOOT') {
    handlePenaltyUserShot(zone);
  } else if (penaltyState.phase === 'AI_SHOOT') {
    handlePenaltyUserSave(zone);
  }
}

const btnPenTargetLeft = document.getElementById('btnPenTargetLeft');
if (btnPenTargetLeft) {
  btnPenTargetLeft.addEventListener('click', () => handlePenaltyTargetClick('left'));
}
const btnPenTargetCenter = document.getElementById('btnPenTargetCenter');
if (btnPenTargetCenter) {
  btnPenTargetCenter.addEventListener('click', () => handlePenaltyTargetClick('center'));
}
const btnPenTargetRight = document.getElementById('btnPenTargetRight');
if (btnPenTargetRight) {
  btnPenTargetRight.addEventListener('click', () => handlePenaltyTargetClick('right'));
}

// Universal Modal Close Handler for all modals
document.addEventListener('click', (e) => {
  const btnClose = e.target.closest('.btn-modal-close');
  if (btnClose) {
    const overlay = btnClose.closest('.modal-overlay');
    if (overlay) {
      overlay.classList.add('hidden');
      overlay.style.display = 'none';
      setTimeout(() => { overlay.style.display = ''; }, 50);
    }
  }
});

/* ═══════════════════════════════════════════════════════════════════
   19. SBC / «ДЕКАНАТ / ОБМЕН КАРТ» (COURSE EXCHANGES & LEGEND CRAFT)
═══════════════════════════════════════════════════════════════════ */
const sbcCourseSlots = {
  '1to2': [null, null, null],
  '2to3': [null, null, null],
  '3to4': [null, null, null]
};
const sbcLegendSlots = [null, null, null, null];
let activeSBCPickerContext = null;

function openSBCModal() {
  const modal = document.getElementById('modalSBC');
  if (!modal) return;

  renderSBCCourseSlots('1to2');
  renderSBCCourseSlots('2to3');
  renderSBCCourseSlots('3to4');
  renderSBCLegendSlots();

  modal.classList.remove('hidden');
}

function closeSBCModal() {
  const modal = document.getElementById('modalSBC');
  if (modal) modal.classList.add('hidden');
}

function switchSBCTab(tabKey) {
  const btnCourses = document.getElementById('sbcTabCourse') || document.getElementById('sbcTabBtnCourses');
  const btnLegend = document.getElementById('sbcTabLegend') || document.getElementById('sbcTabBtnLegend');
  const contentCourses = document.getElementById('sbcContentCourse') || document.getElementById('sbcContentCourses');
  const contentLegend = document.getElementById('sbcContentLegend');

  if (tabKey === 'courses') {
    if (btnCourses) btnCourses.classList.add('active');
    if (btnLegend) btnLegend.classList.remove('active');
    if (contentCourses) contentCourses.classList.remove('hidden');
    if (contentLegend) contentLegend.classList.add('hidden');
  } else {
    if (btnCourses) btnCourses.classList.remove('active');
    if (btnLegend) btnLegend.classList.add('active');
    if (contentCourses) contentCourses.classList.add('hidden');
    if (contentLegend) contentLegend.classList.remove('hidden');
    renderSBCLegendSlots();
  }
}

function renderSBCCourseSlots(exchangeKey) {
  const container = document.getElementById(`sbcSlots${exchangeKey}`);
  if (!container) return;

  const slots = sbcCourseSlots[exchangeKey];
  container.innerHTML = '';

  slots.forEach((card, slotIdx) => {
    const slotEl = document.createElement('div');
    if (card && card.image) {
      slotEl.className = 'sbc-slot filled';
      slotEl.innerHTML = `
        <img class="sbc-slot-img" src="${card.image}" alt="${card.name}">
        <div class="sbc-slot-remove" title="Убрать карту" data-action="remove-course" data-exchange="${exchangeKey}" data-slot="${slotIdx}">✕</div>
      `;
    } else {
      slotEl.className = 'sbc-slot empty';
      slotEl.innerHTML = `<span>+</span>`;
    }

    slotEl.onclick = (e) => {
      if (e.target.closest('.sbc-slot-remove')) {
        e.stopPropagation();
        sbcCourseSlots[exchangeKey][slotIdx] = null;
        renderSBCCourseSlots(exchangeKey);
        return;
      }
      openSBCPicker({ type: 'course', exchangeKey, slotIdx });
    };

    container.appendChild(slotEl);
  });

  const submitBtn = document.getElementById(`btnSubmitCourse${exchangeKey}`);
  if (submitBtn) {
    submitBtn.disabled = !slots.every(Boolean);
  }
}

function renderSBCLegendSlots() {
  const chainSlots = [
    document.getElementById('sbcLegendSlot0'),
    document.getElementById('sbcLegendSlot1'),
    document.getElementById('sbcLegendSlot2'),
    document.getElementById('sbcLegendSlot3')
  ];

  chainSlots.forEach((slotEl, idx) => {
    if (!slotEl) return;
    const card = sbcLegendSlots[idx];
    if (card && card.image) {
      slotEl.className = 'sbc-slot sbc-legend-slot filled';
      slotEl.innerHTML = `
        <img class="sbc-slot-img" src="${card.image}" alt="${card.name}">
        <div class="sbc-slot-remove" title="Убрать карту" data-action="remove-legend" data-slot="${idx}">✕</div>
      `;
    } else {
      slotEl.className = 'sbc-slot sbc-legend-slot empty';
      slotEl.innerHTML = `<span>+</span>`;
    }

    slotEl.onclick = (e) => {
      if (e.target.closest('.sbc-slot-remove')) {
        e.stopPropagation();
        sbcLegendSlots[idx] = null;
        renderSBCLegendSlots();
        return;
      }
      openSBCPicker({ type: 'legend', slotIdx: idx });
    };
  });

  // Calculate link chemistry along the chain
  const c0 = sbcLegendSlots[0];
  const c1 = sbcLegendSlots[1];
  const c2 = sbcLegendSlots[2];
  const c3 = sbcLegendSlots[3];

  const chem01 = (c0 && c1) ? getLinkChemistry(c0, c1) : 0;
  const chem12 = (c1 && c2) ? getLinkChemistry(c1, c2) : 0;
  const chem23 = (c2 && c3) ? getLinkChemistry(c2, c3) : 0;

  const updateChainLink = (id, val, active) => {
    const el = document.getElementById(id);
    if (!el) return;
    el.className = 'sbc-chain-link';
    if (!active) {
      el.innerHTML = `<span class="sbc-link-val">0⚡</span>`;
      return;
    }
    if (val === 2) {
      el.classList.add('link-green');
      el.innerHTML = `<span class="sbc-link-val">2⚡</span>`;
    } else if (val === 1) {
      el.classList.add('link-yellow');
      el.innerHTML = `<span class="sbc-link-val">1⚡</span>`;
    } else {
      el.classList.add('link-red');
      el.innerHTML = `<span class="sbc-link-val">0⚡</span>`;
    }
  };

  updateChainLink('sbcLink0to1', chem01, Boolean(c0 && c1));
  updateChainLink('sbcLink1to2', chem12, Boolean(c1 && c2));
  updateChainLink('sbcLink2to3', chem23, Boolean(c2 && c3));

  const totalChem = (c0 && c1 ? chem01 : 0) + (c1 && c2 ? chem12 : 0) + (c2 && c3 ? chem23 : 0);
  const allFilled = Boolean(c0 && c1 && c2 && c3);

  const valEl = document.getElementById('sbcLegendChemVal');
  const subEl = document.getElementById('sbcLegendChemStatus');
  const submitBtn = document.getElementById('btnSubmitLegendSBC');

  if (valEl) valEl.textContent = `${totalChem} / 4 ⚡`;
  if (subEl) {
    if (allFilled && totalChem >= 4) {
      subEl.textContent = '✓ Отличная сыгранность связок! Готово к крафту Легенды 👑';
      subEl.className = 'sbc-meter-sub ready';
    } else if (!allFilled) {
      subEl.textContent = `Заполните все 4 курса (требуется суммарно 4⚡, сейчас: ${totalChem}⚡)`;
      subEl.className = 'sbc-meter-sub';
    } else {
      subEl.textContent = `Недостаточно сыгранности связок (${totalChem}/4⚡). Подберите игроков одной страны!`;
      subEl.className = 'sbc-meter-sub';
    }
  }

  if (submitBtn) {
    submitBtn.disabled = !(allFilled && totalChem >= 4);
  }
}

function openSBCPicker(context) {
  activeSBCPickerContext = context;
  const modal = document.getElementById('modalSBCPicker');
  const title = document.getElementById('sbcPickerTitle');
  const sub = document.getElementById('sbcPickerSub');
  const grid = document.getElementById('sbcPickerGrid');
  if (!modal || !grid) return;

  let targetCourse = '1 kurs';
  if (context.type === 'course') {
    if (context.exchangeKey === '1to2') targetCourse = '1 kurs';
    else if (context.exchangeKey === '2to3') targetCourse = '2 kurs';
    else if (context.exchangeKey === '3to4') targetCourse = '3 kurs';
  } else if (context.type === 'legend') {
    if (context.slotIdx === 0) targetCourse = '1 kurs';
    else if (context.slotIdx === 1) targetCourse = '2 kurs';
    else if (context.slotIdx === 2) targetCourse = '3 kurs';
    else if (context.slotIdx === 3) targetCourse = '4 kurs';
  }

  const courseLabel = getCourseDisplayName(targetCourse);
  if (title) title.textContent = `ВЫБОР КАРТЫ (${courseLabel.toUpperCase()})`;
  if (sub) sub.textContent = `Выберите карточку ${courseLabel} для обмена:`;

  const inDbCards = PLAYERS_DB.filter(p => getPlayerCourse(p) === targetCourse);
  if (!inDbCards.length) {
    grid.innerHTML = `
      <div style="grid-column: 1/-1; text-align: center; color: var(--silver); padding: 32px 14px; font-family: var(--ui);">
        <div style="font-size: 2.2rem; margin-bottom: 8px;">⏳</div>
        <div style="font-weight: 800; font-size: 1rem; color: #fff;">Карточки «${courseLabel}» скоро появятся в игре!</div>
        <div style="font-size: 0.78rem; color: var(--dim); margin-top: 6px; line-height: 1.4;">
          Папка <b>pers/${targetCourse}/</b> пока ожидает добавления карточек.<br>Как только карточки будут добавлены в базу, они автоматически появятся для обмена!
        </div>
      </div>
    `;
    modal.classList.remove('hidden');
    return;
  }

  // Count currently slotted cards to prevent picking more copies than owned
  const slottedCounts = {};
  if (context.type === 'course') {
    (sbcCourseSlots[context.exchangeKey] || []).forEach((c, i) => {
      if (c && i !== context.slotIdx) {
        slottedCounts[c.id] = (slottedCounts[c.id] || 0) + 1;
      }
    });
  } else if (context.type === 'legend') {
    sbcLegendSlots.forEach((c, i) => {
      if (c && i !== context.slotIdx) {
        slottedCounts[c.id] = (slottedCounts[c.id] || 0) + 1;
      }
    });
  }

  const pitchIds = (myClubSquad || []).map(p => p ? p.id : null);
  const benchIds = (myClubSubs || []).map(p => p ? p.id : null);

  // Filter owned players matching required course
  const candidates = inDbCards.filter(p => {
    const ownedCopies = save.collection[p.id] || 0;
    const usedCopies = slottedCounts[p.id] || 0;
    return (ownedCopies - usedCopies) > 0;
  });

  // Sort: prefer duplicates first, then players not in active pitch squad
  candidates.sort((a, b) => {
    const aCopies = save.collection[a.id] || 0;
    const bCopies = save.collection[b.id] || 0;
    if (aCopies !== bCopies) return bCopies - aCopies;
    const aInSquad = pitchIds.includes(a.id) || benchIds.includes(a.id);
    const bInSquad = pitchIds.includes(b.id) || benchIds.includes(b.id);
    if (aInSquad !== bInSquad) return aInSquad ? 1 : -1;
    return a.rating - b.rating;
  });

  grid.innerHTML = '';
  if (!candidates.length) {
    grid.innerHTML = `
      <div style="grid-column: 1/-1; text-align: center; color: var(--silver); padding: 24px 10px; font-family: var(--ui); font-size: 0.85rem;">
        Нет свободных карт <b>${courseLabel}</b> в коллекции.<br>
        <span style="font-size:0.75rem; color:var(--dim); margin-top:6px; display:block;">Открывайте паки в Магазине, чтобы получить больше игроков!</span>
      </div>
    `;
  } else {
    candidates.forEach(card => {
      const ownedCopies = save.collection[card.id] || 0;
      const inSquad = pitchIds.includes(card.id) || benchIds.includes(card.id);

      const cardEl = document.createElement('div');
      cardEl.className = 'sbc-picker-card' + (inSquad ? ' in-squad' : '');
      cardEl.innerHTML = `
        <img src="${card.image}" alt="${card.name}">
        ${ownedCopies > 1 ? `<div class="picker-count-badge">x${ownedCopies}</div>` : ''}
        ${inSquad ? `<div class="picker-squad-tag">В составе</div>` : ''}
      `;

      cardEl.onclick = () => {
        if (context.type === 'course') {
          sbcCourseSlots[context.exchangeKey][context.slotIdx] = card;
          renderSBCCourseSlots(context.exchangeKey);
        } else if (context.type === 'legend') {
          sbcLegendSlots[context.slotIdx] = card;
          renderSBCLegendSlots();
        }
        modal.classList.add('hidden');
      };

      grid.appendChild(cardEl);
    });
  }

  modal.classList.remove('hidden');
}

function autoFillSBCCourse(exchangeKey) {
  let targetCourse = '1 kurs';
  if (exchangeKey === '1to2') targetCourse = '1 kurs';
  else if (exchangeKey === '2to3') targetCourse = '2 kurs';
  else if (exchangeKey === '3to4') targetCourse = '3 kurs';

  const inDbCards = PLAYERS_DB.filter(p => getPlayerCourse(p) === targetCourse);
  if (!inDbCards.length) {
    showToast(`Карточки ${getCourseDisplayName(targetCourse)} скоро появятся в игре!`);
    return;
  }

  const currentSlots = sbcCourseSlots[exchangeKey];
  const pitchIds = (myClubSquad || []).map(p => p ? p.id : null);
  const benchIds = (myClubSubs || []).map(p => p ? p.id : null);

  const usedCounts = {};
  currentSlots.forEach(c => {
    if (c) usedCounts[c.id] = (usedCounts[c.id] || 0) + 1;
  });

  const available = inDbCards.filter(p => {
    const ownedCopies = save.collection[p.id] || 0;
    const used = usedCounts[p.id] || 0;
    return (ownedCopies - used) > 0;
  });

  if (!available.length && currentSlots.every(s => !s)) {
    showToast(`У вас нет свободных карт ${getCourseDisplayName(targetCourse)} для обмена!`);
    return;
  }

  available.sort((a, b) => {
    const aCopies = save.collection[a.id] || 0;
    const bCopies = save.collection[b.id] || 0;
    if (aCopies !== bCopies) return bCopies - aCopies;
    const aInSquad = pitchIds.includes(a.id) || benchIds.includes(a.id);
    const bInSquad = pitchIds.includes(b.id) || benchIds.includes(b.id);
    if (aInSquad !== bInSquad) return aInSquad ? 1 : -1;
    return a.rating - b.rating;
  });

  for (let i = 0; i < 3; i++) {
    if (!currentSlots[i]) {
      const cand = available.find(p => {
        const owned = save.collection[p.id] || 0;
        const used = usedCounts[p.id] || 0;
        return (owned - used) > 0;
      });
      if (cand) {
        currentSlots[i] = cand;
        usedCounts[cand.id] = (usedCounts[cand.id] || 0) + 1;
      }
    }
  }

  renderSBCCourseSlots(exchangeKey);
  showToast(`Слоты перевода ${getCourseDisplayName(targetCourse)} заполнены!`);
}

function submitSBCCourseExchange(exchangeKey) {
  const cards = sbcCourseSlots[exchangeKey];
  if (!cards || cards.length !== 3 || !cards.every(Boolean)) {
    showToast('⚠️ Необходимо заполнить все 3 слота!');
    return;
  }

  let rewardCourse = '2 kurs';
  if (exchangeKey === '1to2') rewardCourse = '2 kurs';
  else if (exchangeKey === '2to3') rewardCourse = '3 kurs';
  else if (exchangeKey === '3to4') rewardCourse = '4 kurs';

  const rewardLabel = getCourseDisplayName(rewardCourse);
  const pool = PLAYERS_DB.filter(p => getPlayerCourse(p) === rewardCourse);

  if (!pool.length) {
    showToast(`⚠️ Карточки ${rewardLabel} пока не добавлены в игру!`);
    return;
  }

  cards.forEach(card => {
    if (save.collection[card.id] > 0) {
      save.collection[card.id]--;
      if (save.collection[card.id] <= 0) {
        delete save.collection[card.id];
        if (Array.isArray(myClubSquad)) {
          const sIdx = myClubSquad.findIndex(p => p && p.id === card.id);
          if (sIdx !== -1) myClubSquad[sIdx] = null;
        }
        if (Array.isArray(myClubSubs)) {
          const bIdx = myClubSubs.findIndex(p => p && p.id === card.id);
          if (bIdx !== -1) myClubSubs[bIdx] = null;
        }
      }
    }
  });

  const wonPlayer = pool[Math.floor(Math.random() * pool.length)] || pool[0];

  addToCollection(wonPlayer);
  sbcCourseSlots[exchangeKey] = [null, null, null];
  writeSave();
  updateTopBar();
  renderSBCCourseSlots(exchangeKey);
  renderMyClubPitch();
  closeSBCModal();

  openPackWithCard(wonPlayer, `ПЕРЕВОД НА ${rewardLabel.toUpperCase()}`);
  showToast(`🎓 Перевод совершён! Получен игрок: ${wonPlayer.name}!`);
}

function submitSBCLegend() {
  const cards = sbcLegendSlots;
  if (!cards.every(Boolean)) {
    showToast('⚠️ Необходимо заполнить все 4 курса!');
    return;
  }

  const chem01 = getLinkChemistry(cards[0], cards[1]);
  const chem12 = getLinkChemistry(cards[1], cards[2]);
  const chem23 = getLinkChemistry(cards[2], cards[3]);
  const totalChem = chem01 + chem12 + chem23;

  if (totalChem < 4) {
    showToast(`⚠️ Недостаточно сыгранности связок! Требуется 4⚡ (сейчас: ${totalChem}⚡)`);
    return;
  }

  cards.forEach(card => {
    if (save.collection[card.id] > 0) {
      save.collection[card.id]--;
      if (save.collection[card.id] <= 0) {
        delete save.collection[card.id];
        if (Array.isArray(myClubSquad)) {
          const sIdx = myClubSquad.findIndex(p => p && p.id === card.id);
          if (sIdx !== -1) myClubSquad[sIdx] = null;
        }
        if (Array.isArray(myClubSubs)) {
          const bIdx = myClubSubs.findIndex(p => p && p.id === card.id);
          if (bIdx !== -1) myClubSubs[bIdx] = null;
        }
      }
    }
  });

  const legendPool = PLAYERS_DB.filter(p => {
    const c = getPlayerCourse(p);
    return c === 'Legend' || c === 'Ultra legend';
  });
  const wonPlayer = legendPool[Math.floor(Math.random() * legendPool.length)] || legendPool[0];

  addToCollection(wonPlayer);
  sbcLegendSlots.fill(null);
  writeSave();
  updateTopBar();
  renderSBCLegendSlots();
  renderMyClubPitch();
  closeSBCModal();

  openPackWithCard(wonPlayer, 'СБОРКА ЛЕГЕНДЫ');
  showToast(`👑 Сборка завершена! Вы скрафтили Легенду: ${wonPlayer.name}!`);
}

// SBC Event Listeners
const btnOpenSBCEl = document.getElementById('btnOpenSBC');
if (btnOpenSBCEl) {
  btnOpenSBCEl.addEventListener('click', openSBCModal);
}

const btnOpenSBCFromCollEl = document.getElementById('btnOpenSBCFromColl');
if (btnOpenSBCFromCollEl) {
  btnOpenSBCFromCollEl.addEventListener('click', openSBCModal);
}

const btnCloseSBCEl = document.getElementById('btnCloseSBC');
if (btnCloseSBCEl) {
  btnCloseSBCEl.addEventListener('click', closeSBCModal);
}

const btnCloseSBCPickerEl = document.getElementById('btnCloseSBCPicker');
if (btnCloseSBCPickerEl) {
  btnCloseSBCPickerEl.addEventListener('click', () => {
    const modal = document.getElementById('modalSBCPicker');
    if (modal) modal.classList.add('hidden');
  });
}

const sbcTabBtnCoursesEl = document.getElementById('sbcTabCourse') || document.getElementById('sbcTabBtnCourses');
if (sbcTabBtnCoursesEl) {
  sbcTabBtnCoursesEl.addEventListener('click', () => switchSBCTab('courses'));
}

const sbcTabBtnLegendEl = document.getElementById('sbcTabLegend') || document.getElementById('sbcTabBtnLegend');
if (sbcTabBtnLegendEl) {
  sbcTabBtnLegendEl.addEventListener('click', () => switchSBCTab('legend'));
}

document.querySelectorAll('.sbc-autofill-btn').forEach(btn => {
  btn.addEventListener('click', () => {
    const key = btn.dataset.exchange;
    if (key) autoFillSBCCourse(key);
  });
});

const btnSubmitCourse1to2El = document.getElementById('btnSubmitCourse1to2');
if (btnSubmitCourse1to2El) {
  btnSubmitCourse1to2El.addEventListener('click', () => submitSBCCourseExchange('1to2'));
}

const btnSubmitCourse2to3El = document.getElementById('btnSubmitCourse2to3');
if (btnSubmitCourse2to3El) {
  btnSubmitCourse2to3El.addEventListener('click', () => submitSBCCourseExchange('2to3'));
}

const btnSubmitCourse3to4El = document.getElementById('btnSubmitCourse3to4');
if (btnSubmitCourse3to4El) {
  btnSubmitCourse3to4El.addEventListener('click', () => submitSBCCourseExchange('3to4'));
}

const btnClearLegendSBCEl = document.getElementById('btnClearLegendSBC');
if (btnClearLegendSBCEl) {
  btnClearLegendSBCEl.addEventListener('click', () => {
    sbcLegendSlots.fill(null);
    renderSBCLegendSlots();
    showToast('Слоты Легенды очищены');
  });
}

const btnSubmitLegendSBCEl = document.getElementById('btnSubmitLegendSBC');
if (btnSubmitLegendSBCEl) {
  btnSubmitLegendSBCEl.addEventListener('click', submitSBCLegend);
}

// Window resize redraw for SVG Chemistry Lines on pitch
window.addEventListener('resize', () => {
  const scr = document.getElementById('screenMyClub');
  if (scr && !scr.classList.contains('hidden')) {
    drawPitchChemistryLines();
  }
});

/* ═══════════════════════════════════════════════════════════════════
   19.5 BACKGROUND MUSIC CONTROLLER & SETTINGS
═══════════════════════════════════════════════════════════════════ */
const MUSIC_PLAYLIST = [
  { title: 'Саундтрек #1', src: 'musik/musik_1.mp3' },
  { title: 'Саундтрек #2', src: 'musik/musik_2.mp3' },
  { title: 'Саундтрек #3', src: 'musik/musik_3.m4a' },
  { title: 'Саундтрек #4', src: 'musik/musik_4.mp3' },
  { title: 'Саундтрек #5', src: 'musik/musik_5.mp3', fallbackSrc: 'musik/musik_5.mp.3' },
  { title: 'Саундтрек #6', src: 'musik/musik_6.m4a' }
];

class MusicController {
  constructor() {
    this.playlist = MUSIC_PLAYLIST;
    this.currentIndex = 0;
    this.audio = typeof Audio !== 'undefined' ? new Audio() : null;
    this.isPlaying = false;
    this._triedFallback = false;
    this.isUnlocked = false;

    // Load persisted preferences
    let savedEnabled = true;
    try {
      if (typeof localStorage !== 'undefined') {
        const val = localStorage.getItem('viMusicEnabled');
        if (val !== null) savedEnabled = val === 'true';
      }
    } catch (_) {}
    this.enabled = savedEnabled;

    let savedVol = 50;
    try {
      if (typeof localStorage !== 'undefined') {
        const val = localStorage.getItem('viMusicVolume');
        if (val !== null) {
          const num = parseInt(val, 10);
          if (!isNaN(num)) savedVol = Math.max(0, Math.min(100, num));
        }
      }
    } catch (_) {}
    this.volume = savedVol;

    if (this.audio) {
      this.audio.preload = 'auto';
      this.audio.volume = this.volume / 100;
    }
  }

  init() {
    if (!this.audio) return;

    // Attach audio element event listeners
    this.audio.addEventListener('ended', () => {
      this._triedFallback = false;
      this.nextTrack();
    });

    this.audio.addEventListener('error', () => {
      this.handleError();
    });

    this.audio.addEventListener('play', () => {
      this.isPlaying = true;
      this.updateUI();
    });

    this.audio.addEventListener('pause', () => {
      this.isPlaying = false;
      this.updateUI();
    });

    // Wire up modal elements
    const btnOpen = document.getElementById('btnOpenSettings');
    if (btnOpen) {
      btnOpen.addEventListener('click', () => this.openSettingsModal());
    }

    const btnClose = document.getElementById('btnCloseSettings');
    if (btnClose) {
      btnClose.addEventListener('click', () => this.closeSettingsModal());
    }

    const modalSettings = document.getElementById('modalSettings');
    if (modalSettings) {
      modalSettings.addEventListener('click', (e) => {
        if (e.target === modalSettings) this.closeSettingsModal();
      });
    }

    // Toggle switch
    const toggle = document.getElementById('musicToggle');
    if (toggle) {
      toggle.checked = this.enabled;
      toggle.addEventListener('change', (e) => {
        this.toggleEnabled(e.target.checked);
      });
    }

    // Volume slider
    const slider = document.getElementById('musicVolumeSlider');
    if (slider) {
      slider.value = this.volume;
      slider.addEventListener('input', (e) => {
        this.setVolume(e.target.value);
      });
    }

    // Prev / PlayPause / Next buttons
    const btnPrev = document.getElementById('btnMusicPrev');
    if (btnPrev) {
      btnPrev.addEventListener('click', () => this.prevTrack());
    }

    const btnPlayPause = document.getElementById('btnMusicPlayPause');
    if (btnPlayPause) {
      btnPlayPause.addEventListener('click', () => this.togglePlayPause());
    }

    const btnNext = document.getElementById('btnMusicNext');
    if (btnNext) {
      btnNext.addEventListener('click', () => this.nextTrack());
    }

    // Set initial track source without playing yet
    this.loadTrack(this.currentIndex, false);

    // Global one-time gesture listeners to unlock autoplay on mobile/modern browsers
    const unlockAudio = () => {
      if (!this.isUnlocked) {
        this.isUnlocked = true;
        if (this.enabled && !this.isPlaying) {
          this.play().catch(() => {});
        }
      }
    };
    document.addEventListener('click', unlockAudio, { once: true, passive: true });
    document.addEventListener('touchstart', unlockAudio, { once: true, passive: true });

    // Initial autoplay attempt (works if browser allows, or unlocks on gesture)
    if (this.enabled) {
      this.play().catch(() => {
        // Autoplay policy prevented immediate playback; waiting for unlock gesture
      });
    }

    this.updateUI();
  }

  loadTrack(index, autoPlay = true) {
    if (!this.playlist.length || !this.audio) return;
    this._triedFallback = false;
    this.currentIndex = (index + this.playlist.length) % this.playlist.length;
    const track = this.playlist[this.currentIndex];
    this.audio.src = track.src;
    this.audio.volume = this.volume / 100;
    this.updateUI();

    if (autoPlay && this.enabled) {
      this.play().catch(() => {});
    }
  }

  play() {
    if (!this.audio || !this.enabled) return Promise.resolve();
    const p = this.audio.play();
    if (p && typeof p.then === 'function') {
      return p.then(() => {
        this.isPlaying = true;
        this.updateUI();
      }).catch((err) => {
        this.isPlaying = false;
        this.updateUI();
        throw err;
      });
    }
    this.isPlaying = true;
    this.updateUI();
    return Promise.resolve();
  }

  pause() {
    if (!this.audio) return;
    this.audio.pause();
    this.isPlaying = false;
    this.updateUI();
  }

  togglePlayPause() {
    if (!this.enabled) {
      this.toggleEnabled(true);
      return;
    }
    if (this.isPlaying) {
      this.pause();
    } else {
      this.play().catch(() => {});
    }
  }

  prevTrack() {
    const shouldPlay = this.isPlaying || this.enabled;
    this.loadTrack(this.currentIndex - 1, shouldPlay);
  }

  nextTrack() {
    const shouldPlay = this.isPlaying || this.enabled;
    this.loadTrack(this.currentIndex + 1, shouldPlay);
  }

  toggleEnabled(val) {
    this.enabled = !!val;
    try {
      if (typeof localStorage !== 'undefined') {
        localStorage.setItem('viMusicEnabled', String(this.enabled));
      }
    } catch (_) {}

    if (!this.enabled) {
      this.pause();
    } else {
      this.play().catch(() => {});
    }
    this.updateUI();
  }

  setVolume(val) {
    const volNum = Math.max(0, Math.min(100, parseInt(val, 10) || 0));
    this.volume = volNum;
    if (this.audio) {
      this.audio.volume = this.volume / 100;
    }
    try {
      if (typeof localStorage !== 'undefined') {
        localStorage.setItem('viMusicVolume', String(volNum));
      }
    } catch (_) {}
    this.updateUI();
  }

  handleError() {
    const track = this.playlist[this.currentIndex];
    if (track && track.fallbackSrc && !this._triedFallback && this.audio) {
      this._triedFallback = true;
      this.audio.src = track.fallbackSrc;
      if (this.enabled) {
        this.play().catch(() => {});
      }
    } else {
      this._triedFallback = false;
      this.nextTrack();
    }
  }

  updateUI() {
    const track = this.playlist[this.currentIndex] || { title: 'Саундтрек' };

    const toggle = document.getElementById('musicToggle');
    if (toggle && toggle.checked !== this.enabled) {
      toggle.checked = this.enabled;
    }

    const statusText = document.getElementById('musicStatusText');
    if (statusText) {
      statusText.textContent = this.enabled ? 'Включено' : 'Выключено';
      statusText.classList.toggle('disabled', !this.enabled);
    }

    const slider = document.getElementById('musicVolumeSlider');
    if (slider && parseInt(slider.value, 10) !== this.volume) {
      slider.value = this.volume;
    }

    const volumeVal = document.getElementById('musicVolumeVal');
    if (volumeVal) {
      volumeVal.textContent = `${this.volume}%`;
    }

    const trackTitle = document.getElementById('musicTrackTitle');
    if (trackTitle) {
      trackTitle.textContent = track.title;
    }

    const equalizer = document.getElementById('trackEqualizer');
    if (equalizer) {
      equalizer.classList.toggle('playing', this.isPlaying && this.enabled);
    }

    const playPauseIcon = document.getElementById('musicPlayPauseIcon');
    const playPauseText = document.getElementById('musicPlayPauseText');
    const isActivelyPlaying = this.isPlaying && this.enabled;
    if (playPauseIcon) {
      playPauseIcon.textContent = isActivelyPlaying ? '⏸' : '▶';
    }
    if (playPauseText) {
      playPauseText.textContent = isActivelyPlaying ? 'Пауза' : 'Пуск';
    }

    const btnOpenSettings = document.getElementById('btnOpenSettings');
    if (btnOpenSettings) {
      btnOpenSettings.classList.toggle('music-active', isActivelyPlaying);
    }
  }

  openSettingsModal() {
    const modal = document.getElementById('modalSettings');
    if (modal) modal.classList.remove('hidden');
    this.updateUI();
  }

  closeSettingsModal() {
    const modal = document.getElementById('modalSettings');
    if (modal) modal.classList.add('hidden');
  }
}

const musicController = new MusicController();

/* ═══════════════════════════════════════════════════════════════════
   20. INITIALIZATION
═══════════════════════════════════════════════════════════════════ */
document.addEventListener('DOMContentLoaded', () => {
  updateTopBar();
  showScreen('screenMenu');
  if (tvBroadcastEngine) tvBroadcastEngine.init();
  if (musicController) musicController.init();
});

// Run immediately as well if DOM is already ready
updateTopBar();
showScreen('screenMenu');
if (tvBroadcastEngine) tvBroadcastEngine.init();
if (musicController) musicController.init();


