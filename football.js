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
];

/* ═══════════════════════════════════════════════════════════════════
   2. FORMATIONS (Exact file paths from pers/Taktik/ on disk)
═══════════════════════════════════════════════════════════════════ */
const FORMATIONS = [
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
   3. LEVEL REWARDS CONFIGURATION (LVL 1 - 10)
═══════════════════════════════════════════════════════════════════ */
const LEVEL_REWARDS_CONFIG = [
  { level: 1,  type: 'coins', title: 'Старт игры', desc: 'Добро пожаловать в VI Football!', icon: '⚽', value: 0 },
  { level: 2,  type: 'coins', title: '+1,000 VI Coins', desc: 'Бонус за 2-й уровень', icon: '💰', value: 1000 },
  { level: 3,  type: 'pack',  title: 'Бесплатный Pro Pack', desc: 'Гарантия 75+ OVR', icon: '🎁', packType: 'pro' },
  { level: 4,  type: 'coins', title: '+2,500 VI Coins', desc: 'Бонус за 4-й уровень', icon: '💰', value: 2500 },
  { level: 5,  type: 'pack',  title: 'Бесплатный Elite Pack', desc: 'Гарантия 83+ OVR', icon: '💎', packType: 'elite' },
  { level: 6,  type: 'coins', title: '+5,000 VI Coins', desc: 'Бонус за 6-й уровень', icon: '💰', value: 5000 },
  { level: 7,  type: 'card_or_coins', title: 'GEMUA (90 GK)', desc: 'Эксклюзивная карта или 5 000 монет', icon: '🧤', cardId: 'gemua_90', fallbackCoins: 5000 },
  { level: 8,  type: 'pack',  title: 'Бесплатный Ultra Pack', desc: 'Хайроллер пак 88+', icon: '🏆', packType: 'matus' },
  { level: 9,  type: 'coins', title: '+10,000 VI Coins', desc: 'Бонус за 9-й уровень', icon: '👑', value: 10000 },
  { level: 10, type: 'final_card', title: 'KOMILZHONOV (120 OVR)', desc: '🏆 ГЛАВНЫЙ ПРИЗ: Король футбола', icon: '👑', cardId: 'komilzhonov_120' }
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
    myClubSquad: [null, null, null, null, null, null, null, null, null, null, null],
    myClubBench: [null, null, null],
    myClubRoles: { captain: null, penalty: null, setPieces: null },
    myClubMatchesTogether: 0,
    playerUpgrades: {}, // cardId -> { xp: 0, sp: 0, pac: 0, sho: 0, pas: 0, def: 0, ref: 0 }
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
    trophies: []
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
    if (!saveObj.playerUpgrades || typeof saveObj.playerUpgrades !== 'object') {
      saveObj.playerUpgrades = {};
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
  // 100 XP per level, up to level 10
  return Math.min(10, Math.floor(xp / 100) + 1);
}

function getCurrentLvlXp(xp) {
  const lvl = calcLevel(xp);
  if (lvl >= 10) return 100;
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
   8. REALISTIC DYNAMIC RNG CURVE (OVR DECAY & EXCLUSION OF KOMILZHONOV 120)
═══════════════════════════════════════════════════════════════════ */
/*
   Rarity weights based on OVR:
   - 63–70 OVR: weight 100
   - 71–79 OVR: weight 45
   - 80–86 OVR: weight 12
   - 87–92 OVR: weight 3
   - 95–99 OVR (MATUS 99, DAVLETOV 95, ALPYSPAYEV 96): weight 0.3
   - KOMILZHONOV 120 is strictly excluded from all packs (LVL 10 reward only)!
*/
function getCardWeight(rating) {
  if (rating <= 70) return 100;
  if (rating <= 79) return 45;
  if (rating <= 86) return 12;
  if (rating <= 92) return 3;
  if (rating <= 99) return 0.3;
  return 0.1;
}

function rollPackPlayer(packType) {
  let minRating = 0;
  if (packType === 'pro') minRating = 75;
  if (packType === 'elite') minRating = 83;
  if (packType === 'matus') minRating = 88;

  // STRICTLY EXCLUDE KOMILZHONOV 120 FROM ALL PACKS!
  const pool = PLAYERS_DB.filter(p => p.personId !== 'komilzhonov' && p.id !== 'komilzhonov_120' && p.rating >= minRating);
  if (!pool.length) return PLAYERS_DB.find(p => p.personId !== 'komilzhonov' && p.id !== 'komilzhonov_120');

  const totalWeight = pool.reduce((sum, p) => sum + getCardWeight(p.rating), 0);
  let rand = Math.random() * totalWeight;
  for (let i = 0; i < pool.length; i++) {
    rand -= getCardWeight(pool[i].rating);
    if (rand <= 0) return pool[i];
  }
  return pool[pool.length - 1];
}

let lastOpenedPackType = 'standard';
let lastOpenedPackCost = 500;

function addToCollection(player) {
  save.collection[player.id] = (save.collection[player.id] || 0) + 1;
  save.xp += (player.rarity === 'ultra_legend' ? 60 : player.rating >= 90 ? 40 : 25);
  writeSave();
  updateTopBar();
}

function openPack(packType, cost) {
  cost = cost || 0;
  if (cost > 0) {
    if (save.coins < cost) {
      showToast('Недостаточно VI Coins!');
      return;
    }
    save.coins -= cost;
    lastOpenedPackCost = cost;
  }
  lastOpenedPackType = packType;
  writeSave();
  updateTopBar();

  const player = rollPackPlayer(packType);
  addToCollection(player);

  const flipCard = document.getElementById('flipCard');
  const flipCardFront = document.getElementById('flipCardFront');
  const revealLabel = document.getElementById('revealLabel');

  flipCardFront.innerHTML = '';
  const cardImg = makeCardImg(player, 'player-card__bg');
  const wrapper = document.createElement('div');
  wrapper.className = 'player-card';
  wrapper.appendChild(cardImg);
  flipCardFront.appendChild(wrapper);

  // Reset flip animation
  flipCard.style.animation = 'none';
  void flipCard.offsetWidth;
  flipCard.style.animation = '';

  // Labels & FX
  if (player.rarity === 'ultra_legend') {
    revealLabel.textContent = '🏆 ULTRA ЛЕГЕНДА!';
    burstParticles();
  } else if (player.rating >= 90) {
    revealLabel.textContent = '⭐ ТОП ЛЕГЕНДА!';
    burstParticles();
  } else {
    revealLabel.textContent = '🎉 ПОЗДРАВЛЯЕМ!';
  }

  triggerFlash();
  showScreen('screenReveal');
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
    const costMap = { standard: 500, pro: 1500, elite: 3000, matus: 7000 };
    const cost = costMap[packType] || 500;
    openPack(packType, cost);
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
    const isFinal = tier.level === 10;

    const el = document.createElement('div');
    el.className = 'reward-tier' + (isReady ? ' active' : '') + (isClaimed ? ' claimed' : '') + (isFinal ? ' final' : '');

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
  } else if (tier.type === 'pack') {
    writeSave();
    updateTopBar();
    openPack(tier.packType, 0); // Free pack opening with 3D reveal!
  } else if (tier.type === 'card_or_coins') {
    if (!save.collection[tier.cardId]) {
      const card = PLAYERS_DB.find(p => p.id === tier.cardId);
      addToCollection(card);
      burstParticles();
      triggerFlash();
      showToast('🧤 Эксклюзивная карта GEMUA 90 добавлена в клуб!');
    } else {
      save.coins += tier.fallbackCoins;
      burstParticles();
      showToast(`+${tier.fallbackCoins.toLocaleString('ru-RU')} монет за дубликат Gemua!`);
      writeSave();
      updateTopBar();
    }
  } else if (tier.type === 'final_card') {
    const card = PLAYERS_DB.find(p => p.id === tier.cardId);
    addToCollection(card);
    burstParticles();
    triggerFlash();
    showToast('👑 ПОЗДРАВЛЯЕМ! ЭКСКЛЮЗИВНЫЙ KOMILZHONOV (120 OVR) В ВАШЕМ КЛУБЕ!');
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

function renderNationsProgress() {
  const container = document.getElementById('nationsProgress');
  if (!container) return;
  container.innerHTML = '';

  const NATION_NAMES = {
    UZB: { name: 'Узбекистан', flag: '🇺🇿' },
    RUS: { name: 'Россия', flag: '🇷🇺' },
    KAZ: { name: 'Казахстан', flag: '🇰🇿' },
    ABH: { name: 'Абхазия', flag: '🇬🇪' },
    SLV: { name: 'Сальвадор', flag: '🇸🇻' },
    NIC: { name: 'Никарагуа', flag: '🇳🇮' },
    TJK: { name: 'Таджикистан', flag: '🇹🇯' }
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

function buildCollectionGrid() {
  const grid = document.getElementById('collectionGrid');
  const countEl = document.getElementById('collectionCount');
  if (!grid) return;
  grid.innerHTML = '';

  renderNationsProgress();

  let ownedCount = 0;

  // Sort: Ultra Legend first, then by rating desc
  const sorted = PLAYERS_DB.slice().sort((a, b) => {
    if (a.rarity === 'ultra_legend' && b.rarity !== 'ultra_legend') return -1;
    if (b.rarity === 'ultra_legend' && a.rarity !== 'ultra_legend') return 1;
    return b.rating - a.rating;
  });

  sorted.forEach(player => {
    const copies = save.collection[player.id] || 0;
    if (copies > 0) ownedCount++;

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

    meta.appendChild(rating);
    meta.appendChild(pos);
    body.appendChild(name);
    body.appendChild(meta);
    card.appendChild(body);

    grid.appendChild(card);
  });

  if (countEl) {
    countEl.textContent = `${ownedCount} / ${PLAYERS_DB.length} карт собрано (${Math.round((ownedCount / PLAYERS_DB.length) * 100)}%)`;
  }
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

  FORMATIONS.forEach(f => {
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
  const s = player.stats;
  return Math.max(s.pac || 0, s.sho || 0, s.dri || 0, s.pas || 0);
}

function getPlayerDef(player) {
  const s = player.stats || {};
  // Goalkeepers use their best defensive/saving stat in defense!
  if (player.position === 'GK') {
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

const tileCollection = document.getElementById('tileCollection');
if (tileCollection) {
  tileCollection.addEventListener('click', () => {
    buildCollectionGrid();
    showScreen('screenCollection');
  });
}

const tileMyClub = document.getElementById('tileMyClub');
if (tileMyClub) {
  tileMyClub.addEventListener('click', () => {
    const unlockedCount = Object.keys(save.collection).filter(id => save.collection[id] > 0).length;
    if (unlockedCount < 11) {
      showToast(`Нужно минимум 11 открытых карт в коллекции! (У вас: ${unlockedCount}/11)`);
      return;
    }
    openMyClubScreen();
  });
}

/* ═══════════════════════════════════════════════════════════════════
   17. МОЙ КЛУБ (MY CLUB) SQUAD LOGIC & PICKER
═══════════════════════════════════════════════════════════════════ */
const MY_CLUB_SLOTS_DEF = [
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
];

const MY_CLUB_ROWS = [
  [8, 9, 10],   // LW, ST, RW
  [5, 6, 7],    // CM, CAM, CM
  [1, 2, 3, 4], // LB, CB, CB, RB
  [0]           // GK
];

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

function getUnlockedCardsList() {
  const ownedIds = Object.keys(save.collection).filter(id => save.collection[id] > 0);
  return PLAYERS_DB.filter(p => ownedIds.includes(p.id));
}

function calcMyClubBaseRating() {
  const squad = save.myClubSquad || [];
  const players = squad.map(id => id ? PLAYERS_DB.find(p => p.id === id) : null).filter(Boolean);
  if (!players.length) return 0;
  const sum = players.reduce((acc, p) => acc + p.rating, 0);
  return Math.round(sum / 11);
}

function calcMyClubTotalRating() {
  const base = calcMyClubBaseRating();
  if (base === 0) return 0;
  const mastery = getClubMasteryData(save.myClubMatchesTogether || 0);
  const hasCaptain = save.myClubRoles && save.myClubRoles.captain && (save.myClubSquad || []).includes(save.myClubRoles.captain);
  const captainBonus = hasCaptain ? 3 : 0;
  return base + mastery.bonus + captainBonus;
}

let activeCardAction = null; // { slotIndex, type: 'starter'|'bench', playerId }
let activeTrainingPlayerId = null;

function renderMyClubField() {
  const pitch = document.getElementById('myClubPitch');
  if (pitch) {
    pitch.innerHTML = '';
    const squad = save.myClubSquad || [];

    MY_CLUB_ROWS.forEach(rowSlots => {
      const rowEl = document.createElement('div');
      rowEl.className = 'myclub-row';

      rowSlots.forEach(idx => {
        const slotDef = MY_CLUB_SLOTS_DEF[idx];
        const playerId = squad[idx];
        const player = playerId ? PLAYERS_DB.find(p => p.id === playerId) : null;

        const slotEl = document.createElement('div');
        slotEl.className = 'myclub-slot' + (player ? '' : ' empty');
        slotEl.title = `${slotDef.pos} (${slotDef.label})`;

        if (player) {
          const img = makeCardImg(player, 'myclub-slot__img');
          slotEl.appendChild(img);
        } else {
          const plus = document.createElement('div');
          plus.className = 'myclub-slot__plus';
          plus.textContent = '+';
          const pos = document.createElement('div');
          pos.className = 'myclub-slot__pos';
          pos.textContent = slotDef.label;
          slotEl.appendChild(plus);
          slotEl.appendChild(pos);
        }

        slotEl.addEventListener('click', () => {
          if (player) {
            openCardActionMenu(idx, 'starter', player.id);
          } else {
            openMyClubPicker(idx);
          }
        });

        rowEl.appendChild(slotEl);
      });

      pitch.appendChild(rowEl);
    });
  }

  // Render 3 Bench Slots
  const benchEl = document.getElementById('myClubBench');
  if (benchEl) {
    benchEl.innerHTML = '';
    if (!Array.isArray(save.myClubBench)) save.myClubBench = [null, null, null];

    for (let bIdx = 0; bIdx < 3; bIdx++) {
      const bPlayerId = save.myClubBench[bIdx];
      const bPlayer = bPlayerId ? PLAYERS_DB.find(p => p.id === bPlayerId) : null;

      const slot = document.createElement('div');
      slot.className = 'bench-slot' + (bPlayer ? ' filled' : '');

      if (bPlayer) {
        const img = makeCardImg(bPlayer, 'bench-slot__img');
        slot.appendChild(img);
        slot.title = `Запасной: ${bPlayer.name} (${bPlayer.position})`;
      } else {
        const plus = document.createElement('div');
        plus.className = 'bench-slot__plus';
        plus.textContent = '+';
        const pos = document.createElement('div');
        pos.className = 'bench-slot__pos';
        pos.textContent = `SUB ${bIdx + 1}`;
        slot.appendChild(plus);
        slot.appendChild(pos);
      }

      slot.addEventListener('click', () => {
        if (bPlayer) {
          openCardActionMenu(bIdx, 'bench', bPlayer.id);
        } else {
          openMyClubBenchPicker(bIdx);
        }
      });

      benchEl.appendChild(slot);
    }
  }

  // Update Team Roles UI
  const capPlayer = save.myClubRoles.captain ? PLAYERS_DB.find(p => p.id === save.myClubRoles.captain) : null;
  const penPlayer = save.myClubRoles.penalty ? PLAYERS_DB.find(p => p.id === save.myClubRoles.penalty) : null;
  const setPlayer = save.myClubRoles.setPieces ? PLAYERS_DB.find(p => p.id === save.myClubRoles.setPieces) : null;

  const elCap = document.getElementById('rolePlayerCaptain');
  const elPen = document.getElementById('rolePlayerPenalty');
  const elSet = document.getElementById('rolePlayerSetPieces');
  if (elCap) elCap.textContent = capPlayer ? capPlayer.name : 'Не назначен';
  if (elPen) elPen.textContent = penPlayer ? penPlayer.name : 'Не назначен';
  if (elSet) elSet.textContent = setPlayer ? setPlayer.name : 'Не назначен';

  const squadFilled = (save.myClubSquad || []).filter(Boolean).length;
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

  // Update Mastery Card UI
  const mTitle = document.getElementById('myClubMasteryTitle');
  const mSub = document.getElementById('myClubMasterySub');
  const mBonus = document.getElementById('myClubMasteryBonus');
  if (mTitle) mTitle.textContent = mastery.title;
  if (mSub) mSub.textContent = mastery.sub;
  if (mBonus) mBonus.textContent = mastery.bonusText;
}

function openMyClubScreen() {
  const squad = save.myClubSquad || [];
  const filledCount = squad.filter(Boolean).length;
  if (filledCount === 0) {
    autoBuildMyClubSquad(false);
  }
  renderMyClubField();
  showScreen('screenMyClub');
}

function autoBuildMyClubSquad(notify = true) {
  const unlocked = getUnlockedCardsList();
  if (!unlocked.length) return;

  const sorted = [...unlocked].sort((a, b) => b.rating - a.rating);
  const used = new Set();
  const newSquad = new Array(11).fill(null);

  function pickMatch(pred) {
    for (let i = 0; i < sorted.length; i++) {
      const p = sorted[i];
      if (!used.has(p.id) && pred(p)) {
        used.add(p.id);
        return p;
      }
    }
    return null;
  }

  // 1. GK
  const gk = pickMatch(p => p.position === 'GK') || pickMatch(() => true);
  if (gk) newSquad[0] = gk.id;

  // 2. DEF (1-4)
  const defIndices = [1, 2, 3, 4];
  defIndices.forEach(idx => {
    const pos = MY_CLUB_SLOTS_DEF[idx].pos;
    const p = pickMatch(pl => pl.position === pos) ||
              pickMatch(pl => ['LB', 'CB', 'RB', 'LWB', 'RWB'].includes(pl.position)) ||
              pickMatch(() => true);
    if (p) newSquad[idx] = p.id;
  });

  // 3. MID (5-7)
  const midIndices = [5, 6, 7];
  midIndices.forEach(idx => {
    const pos = MY_CLUB_SLOTS_DEF[idx].pos;
    const p = pickMatch(pl => pl.position === pos) ||
              pickMatch(pl => ['CDM', 'CM', 'CAM', 'LM', 'RM'].includes(pl.position)) ||
              pickMatch(() => true);
    if (p) newSquad[idx] = p.id;
  });

  // 4. ATT (8-10)
  const attIndices = [8, 9, 10];
  attIndices.forEach(idx => {
    const pos = MY_CLUB_SLOTS_DEF[idx].pos;
    const p = pickMatch(pl => pl.position === pos) ||
              pickMatch(pl => ['ST', 'CF', 'LW', 'RW'].includes(pl.position)) ||
              pickMatch(() => true);
    if (p) newSquad[idx] = p.id;
  });

  // Fill gaps
  for (let i = 0; i < 11; i++) {
    if (!newSquad[i]) {
      const fallback = pickMatch(() => true);
      if (fallback) newSquad[i] = fallback.id;
    }
  }

  // Auto-fill bench with next top available players
  if (!Array.isArray(save.myClubBench)) save.myClubBench = [null, null, null];
  for (let b = 0; b < 3; b++) {
    if (!save.myClubBench[b] || newSquad.includes(save.myClubBench[b])) {
      const sub = pickMatch(() => true);
      if (sub) save.myClubBench[b] = sub.id;
    }
  }

  // Auto-assign captain if none
  if (!save.myClubRoles.captain && newSquad[0]) {
    const best = newSquad.map(id => PLAYERS_DB.find(p => p.id === id)).filter(Boolean).sort((a,b) => b.rating - a.rating)[0];
    if (best) save.myClubRoles.captain = best.id;
  }

  save.myClubSquad = newSquad;
  writeSave();
  renderMyClubField();
  if (notify) {
    showToast('⚡ Автосостав и скамья успешно собраны!');
  }
}

function openMyClubPicker(slotIndex) {
  activeMyClubSlot = slotIndex;
  const slotDef = MY_CLUB_SLOTS_DEF[slotIndex];
  const modal = document.getElementById('modalMyClubPicker');
  const title = document.getElementById('myClubPickerTitle');
  const grid = document.getElementById('myClubPickerGrid');
  if (!modal || !grid) return;

  if (title) title.textContent = `ВЫБЕРИ ИГРОКА (${slotDef.label} / ${slotDef.pos})`;
  grid.innerHTML = '';
  grid.scrollTop = 0;

  const unlocked = getUnlockedCardsList();
  if (!unlocked.length) {
    grid.innerHTML = '<div style="grid-column:1/-1;text-align:center;padding:24px;color:var(--silver);">Нет доступных карт</div>';
    modal.classList.remove('hidden');
    return;
  }

  const line = slotDef.line;
  const sorted = [...unlocked].sort((a, b) => {
    let scoreA = a.rating + (a.position === slotDef.pos ? 1000 : (posToLine(a.position) === line ? 400 : 0));
    let scoreB = b.rating + (b.position === slotDef.pos ? 1000 : (posToLine(b.position) === line ? 400 : 0));
    return scoreB - scoreA;
  });

  let selecting = false;
  sorted.forEach(player => {
    const card = document.createElement('div');
    card.className = 'picker-card';
    const isCurrent = (save.myClubSquad || [])[slotIndex] === player.id;
    if (isCurrent) card.style.borderColor = 'var(--gold)';

    const img = makeCardImg(player, '');
    card.appendChild(img);

    card.addEventListener('click', () => {
      if (selecting) return;
      selecting = true;
      card.classList.add('selected');

      setTimeout(() => {
        const squad = [...(save.myClubSquad || new Array(11).fill(null))];
        const existingIdx = squad.indexOf(player.id);
        if (existingIdx !== -1 && existingIdx !== slotIndex) {
          squad[existingIdx] = squad[slotIndex];
        }
        squad[slotIndex] = player.id;
        save.myClubSquad = squad;
        writeSave();

        modal.classList.add('hidden');
        renderMyClubField();
      }, 130);
    });

    grid.appendChild(card);
  });

  modal.classList.remove('hidden');
}

function openMyClubBenchPicker(benchIdx) {
  const modal = document.getElementById('modalMyClubPicker');
  const title = document.getElementById('myClubPickerTitle');
  const grid = document.getElementById('myClubPickerGrid');
  if (!modal || !grid) return;

  if (title) title.textContent = `ВЫБЕРИ ЗАПАСНОГО (SUB ${benchIdx + 1})`;
  grid.innerHTML = '';
  grid.scrollTop = 0;

  const unlocked = getUnlockedCardsList();
  const currentPitchIds = save.myClubSquad || [];
  const currentBenchIds = save.myClubBench || [];

  // Exclude players already on pitch or in other bench slots
  const candidates = unlocked.filter(p => !currentPitchIds.includes(p.id) && (!currentBenchIds.includes(p.id) || currentBenchIds[benchIdx] === p.id));

  if (!candidates.length) {
    grid.innerHTML = '<div style="grid-column:1/-1;text-align:center;padding:24px;color:var(--silver);">Нет свободных карт для скамьи</div>';
    modal.classList.remove('hidden');
    return;
  }

  const sorted = [...candidates].sort((a, b) => b.rating - a.rating);
  let selecting = false;

  sorted.forEach(player => {
    const card = document.createElement('div');
    card.className = 'picker-card';
    if (currentBenchIds[benchIdx] === player.id) card.style.borderColor = 'var(--cyan)';

    const img = makeCardImg(player, '');
    card.appendChild(img);

    card.addEventListener('click', () => {
      if (selecting) return;
      selecting = true;
      card.classList.add('selected');

      setTimeout(() => {
        if (!Array.isArray(save.myClubBench)) save.myClubBench = [null, null, null];
        save.myClubBench[benchIdx] = player.id;
        writeSave();
        modal.classList.add('hidden');
        renderMyClubField();
      }, 130);
    });

    grid.appendChild(card);
  });

  modal.classList.remove('hidden');
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

function openTrainingCampModal(playerId) {
  activeTrainingPlayerId = playerId;
  const player = PLAYERS_DB.find(p => p.id === playerId);
  if (!player) return;

  if (!save.playerUpgrades) save.playerUpgrades = {};
  if (!save.playerUpgrades[playerId]) {
    save.playerUpgrades[playerId] = { xp: 0, sp: 0, pac: 0, sho: 0, pas: 0, def: 0, ref: 0 };
  }
  const up = save.playerUpgrades[playerId];

  const modal = document.getElementById('modalTrainingCamp');
  const wrap = document.getElementById('trainingCardWrap');
  const nameEl = document.getElementById('trainingPlayerName');
  const posEl = document.getElementById('trainingPlayerPos');
  const xpText = document.getElementById('trainingXpText');
  const xpFill = document.getElementById('trainingXpFill');
  const spCount = document.getElementById('trainingSpCount');

  if (!modal) return;

  if (wrap) {
    wrap.innerHTML = '';
    wrap.appendChild(makeCardImg(player, ''));
  }
  if (nameEl) nameEl.textContent = player.name;
  if (posEl) posEl.textContent = `${player.position} • ${player.rating} OVR • ${player.country}`;

  const currentXp = (up.xp || 0) % 100;
  if (xpText) xpText.textContent = `${currentXp} / 100 XP`;
  if (xpFill) xpFill.style.width = `${currentXp}%`;
  if (spCount) spCount.textContent = up.sp || 0;

  // Skill values
  ['pac', 'sho', 'pas', 'def', 'ref'].forEach(k => {
    const valEl = document.getElementById(`skillVal${k.charAt(0).toUpperCase() + k.slice(1)}`);
    if (valEl) valEl.textContent = `+${up[k] || 0}`;
    const btn = modal.querySelector(`.btn-skill-plus[data-skill="${k}"]`);
    if (btn) btn.disabled = (up.sp || 0) <= 0;
  });

  modal.classList.remove('hidden');
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
  if (title) title.textContent = roleTitles[roleKey] || 'НАЗНАЧЕНИЕ РОЛИ';

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
          <div class="role-cand-pos">${p.position} • ${p.country}</div>
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
   18. ТОП-КЛУБЫ, РЕАЛЬНЫЕ ЗВЁЗДЫ И СИСТЕМА ТУРНИРОВ
═══════════════════════════════════════════════════════════════════ */
const TOURNAMENTS_CONFIG = [
  {
    id: 'pl',
    name: 'Premier League Cup',
    country: 'Англия',
    icon: '🏴󠁧󠁢󠁥󠁮󠁧󠁿',
    diff: 'Сложность: Средняя',
    cardClass: 'tournament-card--pl',
    stages: [
      {
        name: '1/4 Финала',
        club: 'Челси',
        ovr: 84,
        stars: ['Палмер', 'Энцо', 'Кайседо', 'Джексон', 'Санчес'],
        gk: 'Санчес'
      },
      {
        name: '1/2 Финала',
        club: 'Ливерпуль',
        ovr: 87,
        stars: ['Салах', 'Ван Дейк', 'Трент', 'Макаллистер', 'Алиссон'],
        gk: 'Алиссон'
      },
      {
        name: 'Финал',
        club: 'Манчестер Сити',
        ovr: 89,
        stars: ['Холанн', 'Де Брёйне', 'Родри', 'Фоден', 'Эдерсон'],
        gk: 'Эдерсон'
      }
    ],
    rewards: { coins: 2500, xp: 100, pack: 'pro' }
  },
  {
    id: 'laliga',
    name: 'La Liga Trophy',
    country: 'Испания',
    icon: '🇪🇸',
    diff: 'Сложность: Высокая',
    cardClass: 'tournament-card--laliga',
    stages: [
      {
        name: '1/4 Финала',
        club: 'Атлетико Мадрид',
        ovr: 85,
        stars: ['Гризманн', 'Альварес', 'Де Пауль', 'Хименес', 'Облак'],
        gk: 'Облак'
      },
      {
        name: '1/2 Финала',
        club: 'Барселона',
        ovr: 88,
        stars: ['Левандовски', 'Ямаль', 'Педри', 'Гави', 'тер Стеген'],
        gk: 'тер Стеген'
      },
      {
        name: 'Финал',
        club: 'Реал Мадрид',
        ovr: 90,
        stars: ['Винисиус', 'Мбаппе', 'Беллингем', 'Вальверде', 'Куртуа'],
        gk: 'Куртуа'
      }
    ],
    rewards: { coins: 3500, xp: 150, pack: 'elite' }
  },
  {
    id: 'ucl',
    name: 'Champions League',
    country: 'Европа',
    icon: '🏆',
    diff: 'Сложность: Эксперт',
    cardClass: 'tournament-card--ucl',
    stages: [
      {
        name: '1/4 Финала',
        club: 'Интер Милан',
        ovr: 87,
        stars: ['Лаутаро', 'Барелла', 'Тюрам', 'Чалханоглу', 'Зоммер'],
        gk: 'Зоммер'
      },
      {
        name: '1/2 Финала',
        club: 'Бавария / ПСЖ',
        ovr: 89,
        stars: ['Кейн', 'Мусиала', 'Дембеле', 'Киммих', 'Нойер'],
        gk: 'Нойер'
      },
      {
        name: 'Финал',
        club: 'Реал Мадрид',
        ovr: 92,
        stars: ['Винисиус', 'Мбаппе', 'Беллингем', 'Вальверде', 'Куртуа'],
        gk: 'Куртуа'
      }
    ],
    rewards: { coins: 5000, xp: 250, pack: 'matus' }
  }
];

function openTournamentsModal() {
  const modal = document.getElementById('modalTournaments');
  const list = document.getElementById('tournamentsList');
  if (!modal || !list) return;

  list.innerHTML = '';
  if (!save.tournaments) {
    save.tournaments = { pl: { stage: 0, won: false }, laliga: { stage: 0, won: false }, ucl: { stage: 0, won: false } };
  }

  TOURNAMENTS_CONFIG.forEach(tourn => {
    const tState = save.tournaments[tourn.id] || { stage: 0, won: false };
    const curStageIdx = Math.min(2, tState.stage);
    const stageInfo = tourn.stages[curStageIdx];
    const isWon = tState.won;

    const card = document.createElement('div');
    card.className = `tournament-card ${tourn.cardClass}`;

    // Bracket stages
    const bracketHtml = tourn.stages.map((s, idx) => {
      let statusClass = '';
      if (isWon || idx < curStageIdx) statusClass = 'completed';
      else if (idx === curStageIdx) statusClass = 'active';

      const icon = isWon || idx < curStageIdx ? '✓' : (idx === curStageIdx ? '▶' : '○');
      return `<div class="bracket-step ${statusClass}">${icon} ${s.name}</div>`;
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
        ${isWon ? '<span style="font-family:var(--ui);font-weight:900;color:var(--gold);font-size:.8rem;">👑 ТРОФЕЙ</span>' : ''}
      </div>

      <div class="tourn-bracket">
        ${bracketHtml}
      </div>

      <div class="tourn-matchup">
        <div class="tourn-opp-info">
          <div class="tourn-opp-name">${isWon ? 'Кубок завоёван!' : `Соперник: ${stageInfo.club} (${stageInfo.name})`}</div>
          <div class="tourn-opp-stars">${isWon ? 'Все соперники повержены' : `Звёзды: ${stageInfo.stars.slice(0, 3).join(', ')}`}</div>
        </div>
        <div class="tourn-opp-ovr">${isWon ? '👑' : `OVR ${stageInfo.ovr}`}</div>
      </div>

      <button class="btn-gold tourn-play-btn" data-tournid="${tourn.id}">
        ${isWon ? '🔄 Сыграть заново' : `▶ Играть матч (${stageInfo.name})`}
      </button>
    `;

    const playBtn = card.querySelector('.tourn-play-btn');
    playBtn.addEventListener('click', () => {
      if (isWon) {
        save.tournaments[tourn.id] = { stage: 0, won: false };
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

// Radar dots & ball state
let simBluePlayers = [];
let simRedPlayers = [];
let simBall = { x: 207, y: 115, targetX: 207, targetY: 115 };
let simPlayPhase = 'IDLE'; // IDLE, BUILDUP, PROGRESSION, FINISHING, CELEBRATION
let goalOverlayTimeout = null;
let goalOverlayFadeTimeout = null;

function triggerSimGoalFlash() {
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
  }, 1300);
}

function getSimUserPlayer(slotIndex) {
  const p = simUserSquadPlayers[slotIndex];
  if (p) return p;
  const anyP = simUserSquadPlayers.find(Boolean);
  return anyP || { name: 'ИГРОК', position: 'ST' };
}

function start2DSimulationMatch(tournId) {
  tournId = tournId || save.activeTournamentId || 'pl';
  const tourn = TOURNAMENTS_CONFIG.find(t => t.id === tournId) || TOURNAMENTS_CONFIG[0];
  simCurrentTournament = tourn;

  const tState = (save.tournaments && save.tournaments[tourn.id]) || { stage: 0, won: false };
  const curStageIdx = Math.min(2, tState.stage);
  simCurrentStageInfo = tourn.stages[curStageIdx];

  // Setup squad and mastery bonus
  const squad = save.myClubSquad || [];
  simUserSquadPlayers = squad.map(id => id ? PLAYERS_DB.find(p => p.id === id) : null);
  simParticipatingPlayerIds = new Set(squad.filter(Boolean));
  simUserScorers = [];
  simSubsUsed = 0;
  simUsedBenchIds = new Set();
  simUserInjuries = {};
  simCurrentTactic = 'balance';
  simIsPaused = false;

  // Apply Captain Bonus (+3 OVR)
  const hasCaptain = save.myClubRoles && save.myClubRoles.captain && squad.includes(save.myClubRoles.captain);
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
  }

  // Pre-schedule realistic events across 90 minutes
  buildSimTimeline();

  // Initialize Radar dots geometry
  initRadarDots();

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

  eventMinutes.forEach(min => {
    const userWeight = simUserOvr / (simUserOvr + simAiOvr);
    const rand = Math.random();

    if (rand < 0.28 * (userWeight * 2)) {
      simScheduledEvents.push({ minute: min, type: 'GOAL_USER' });
    } else if (rand < 0.28 * (userWeight * 2) + 0.25 * ((1 - userWeight) * 2)) {
      simScheduledEvents.push({ minute: min, type: 'GOAL_AI' });
    } else if (rand < 0.65) {
      simScheduledEvents.push({ minute: min, type: Math.random() < 0.5 ? 'SAVE_USER' : 'SAVE_AI' });
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

function initRadarDots() {
  // 11 Blue Team dots (User)
  const blueBase = [
    { x: 30,  y: 115, role: 'GK',  idx: 0 },
    { x: 80,  y: 42,  role: 'LB',  idx: 1 },
    { x: 74,  y: 88,  role: 'CB',  idx: 2 },
    { x: 74,  y: 142, role: 'CB',  idx: 3 },
    { x: 80,  y: 188, role: 'RB',  idx: 4 },
    { x: 140, y: 65,  role: 'CM',  idx: 5 },
    { x: 175, y: 115, role: 'CAM', idx: 6 },
    { x: 140, y: 165, role: 'CM',  idx: 7 },
    { x: 235, y: 45,  role: 'LW',  idx: 8 },
    { x: 255, y: 115, role: 'ST',  idx: 9 },
    { x: 235, y: 185, role: 'RW',  idx: 10 }
  ];

  simBluePlayers = blueBase.map(b => ({
    ...b,
    targetX: b.x,
    targetY: b.y,
    baseX: b.x,
    baseY: b.y,
    name: getSimUserPlayer(b.idx).name
  }));

  // 11 Red Team dots (Rival Grand Club)
  const stars = (simCurrentStageInfo && simCurrentStageInfo.stars) || ['Звезда', 'Нападающий', 'Полузащитник'];
  const redBase = [
    { x: 384, y: 115, role: 'GK',  name: (simCurrentStageInfo && simCurrentStageInfo.gk) || 'Вратарь' },
    { x: 334, y: 42,  role: 'RB',  name: stars[1] || 'Защитник' },
    { x: 340, y: 88,  role: 'CB',  name: stars[2] || 'Защитник' },
    { x: 340, y: 142, role: 'CB',  name: stars[3] || 'Защитник' },
    { x: 334, y: 188, role: 'LB',  name: stars[4] || 'Защитник' },
    { x: 274, y: 65,  role: 'CM',  name: stars[1] || 'Полузащитник' },
    { x: 239, y: 115, role: 'CAM', name: stars[2] || 'Хавбек' },
    { x: 274, y: 165, role: 'CM',  name: stars[3] || 'Полузащитник' },
    { x: 179, y: 45,  role: 'RW',  name: stars[0] || 'Вингер' },
    { x: 159, y: 115, role: 'ST',  name: stars[0] || 'Форвард' },
    { x: 179, y: 185, role: 'LW',  name: stars[1] || 'Вингер' }
  ];

  simRedPlayers = redBase.map(r => ({
    ...r,
    targetX: r.x,
    targetY: r.y,
    baseX: r.x,
    baseY: r.y
  }));

  // Ball at center
  simBall = { x: 207, y: 115, targetX: 207, targetY: 115 };
  simCarrier = { team: 'user', name: simBluePlayers[9].name, index: 9 };
  simPlayPhase = 'IDLE';
}

function addSimFeedItem(minute, icon, text, extraClass = '') {
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
   3 ФАЗЫ АТАКИ И РОЗЫГРЫША МЯЧА
═══════════════════════════════════════════════════════════════════ */
function run3PhaseAttack(team, outcome, min) {
  simPlayPhase = 'BUILDUP';
  const isUser = team === 'user';
  const stars = (simCurrentStageInfo && simCurrentStageInfo.stars) || ['Звезда'];
  const oppStar = stars[0] || 'Форвард';
  const oppGk = (simCurrentStageInfo && simCurrentStageInfo.gk) || 'Вратарь';

  // Check roles
  const penaltyCardId = save.myClubRoles && save.myClubRoles.penalty;
  const penPlayer = penaltyCardId ? PLAYERS_DB.find(p => p.id === penaltyCardId) : null;
  const userSt = (outcome === 'PENALTY_USER' && penPlayer) ? penPlayer : getSimUserPlayer(9);
  const userGk = getSimUserPlayer(0);

  // Phase 1: Buildup (Билдап)
  if (isUser) {
    const cb = simBluePlayers[2];
    const cdm = simBluePlayers[5];
    simCarrier = { team: 'user', name: cb.name, index: 2 };
    simBall.targetX = cb.x;
    simBall.targetY = cb.y;
    setTimeout(() => {
      if (!simRunning) return;
      simCarrier = { team: 'user', name: cdm.name, index: 5 };
      simBall.targetX = cdm.x;
      simBall.targetY = cdm.y;
    }, 450);
  } else {
    const rcb = simRedPlayers[2];
    const rcm = simRedPlayers[5];
    simCarrier = { team: 'ai', name: rcb.name, index: 2 };
    simBall.targetX = rcb.x;
    simBall.targetY = rcb.y;
    setTimeout(() => {
      if (!simRunning) return;
      simCarrier = { team: 'ai', name: rcm.name, index: 5 };
      simBall.targetX = rcm.x;
      simBall.targetY = rcm.y;
    }, 450);
  }

  // Phase 2: Progression (Развитие) at 850ms
  setTimeout(() => {
    if (!simRunning) return;
    simPlayPhase = 'PROGRESSION';

    if (isUser) {
      const striker = simBluePlayers[9];
      striker.targetX = 335;
      striker.targetY = 115 + (Math.random() * 20 - 10);
      simCarrier = { team: 'user', name: userSt.name, index: 9 };
      simBall.targetX = striker.targetX;
      simBall.targetY = striker.targetY;
      simRedPlayers.slice(1, 5).forEach(d => { d.targetX = 355; });
    } else {
      const rivalStriker = simRedPlayers[9];
      rivalStriker.targetX = 75;
      rivalStriker.targetY = 115 + (Math.random() * 20 - 10);
      simCarrier = { team: 'ai', name: oppStar, index: 9 };
      simBall.targetX = rivalStriker.targetX;
      simBall.targetY = rivalStriker.targetY;
      simBluePlayers.slice(1, 5).forEach(d => { d.targetX = 55; });
    }
  }, 900);

  // Phase 3: Finishing (Завершение) at 1700ms
  setTimeout(() => {
    if (!simRunning) return;
    simPlayPhase = 'FINISHING';

    if (outcome === 'GOAL_USER' || outcome === 'PENALTY_USER') {
      simBall.targetX = 406;
      simBall.targetY = 115 + (Math.random() * 18 - 9);
      simRedPlayers[0].targetY = simBall.targetY > 115 ? 128 : 102;

      // Ball enters net behind GK
      setTimeout(() => {
        if (!simRunning) return;
        simScoreUser++;
        updateSimScoreboard();
        triggerSimGoalFlash();
        burstParticles();

        if (userSt && userSt.id) simUserScorers.push(userSt.id);

        if (outcome === 'PENALTY_USER') {
          addSimFeedItem(min, '🎯', `ПЕНАЛЬТИ! Штатный пенальтист ${userSt.name} хладнокровно разводит вратаря и мяч по углам! (Счёт ${simScoreUser}:${simScoreAi})`, 'sim-feed-item--goal-user');
        } else {
          addSimFeedItem(min, '⚽', `ГОЛ! ${userSt.name} поражает ворота «${simCurrentStageInfo.club}»! (Счёт ${simScoreUser}:${simScoreAi})`, 'sim-feed-item--goal-user');
        }

        simPlayPhase = 'CELEBRATION';
        setTimeout(() => {
          if (!simRunning) return;
          resetRadarToCenter();
          simPlayPhase = 'IDLE';
        }, 1200);
      }, 450);

    } else if (outcome === 'GOAL_AI') {
      simBall.targetX = 8;
      simBall.targetY = 115 + (Math.random() * 18 - 9);
      simBluePlayers[0].targetY = simBall.targetY > 115 ? 128 : 102;

      setTimeout(() => {
        if (!simRunning) return;
        simScoreAi++;
        updateSimScoreboard();
        triggerSimGoalFlash();
        addSimFeedItem(min, '⚽', `ГОЛ! ${oppStar} прорывается по флангу и закручивает мяч в угол! (Счёт ${simScoreUser}:${simScoreAi})`, 'sim-feed-item--goal-ai');

        simPlayPhase = 'CELEBRATION';
        setTimeout(() => {
          if (!simRunning) return;
          resetRadarToCenter();
          simPlayPhase = 'IDLE';
        }, 1200);
      }, 450);

    } else if (outcome === 'SAVE_USER') {
      simBall.targetX = 26;
      simBall.targetY = 115;
      simBluePlayers[0].targetX = 28;
      setTimeout(() => {
        if (!simRunning) return;
        addSimFeedItem(min, '🧤', `СЕЙВ! Наш вратарь ${userGk.name} парирует мощнейший выстрел от ${oppStar}!`, 'sim-feed-item--save');
        simCarrier = { team: 'user', name: userGk.name, index: 0 };
        simPlayPhase = 'IDLE';
      }, 400);

    } else if (outcome === 'SAVE_AI') {
      simBall.targetX = 388;
      simBall.targetY = 115;
      setTimeout(() => {
        if (!simRunning) return;
        addSimFeedItem(min, '🧤', `СЕЙВ! Вратарь ${oppGk} спасает «${simCurrentStageInfo.club}» после удара ${userSt.name}!`, 'sim-feed-item--save');
        simCarrier = { team: 'ai', name: oppGk, index: 0 };
        simPlayPhase = 'IDLE';
      }, 400);

    } else if (outcome === 'POST') {
      simBall.targetX = 402;
      simBall.targetY = 92;
      setTimeout(() => {
        if (!simRunning) return;
        simBall.targetX = 360;
        simBall.targetY = 125;
        addSimFeedItem(min, '🎯', `Опасный момент! Мяч сотрясает каркас ворот!`);
        simPlayPhase = 'IDLE';
      }, 400);
    }
  }, 1750);
}

function processSimMinuteEvent(min) {
  const ev = simScheduledEvents.find(e => e.minute === min);
  if (!ev) return;

  const stars = (simCurrentStageInfo && simCurrentStageInfo.stars) || ['Звезда'];
  const oppStar = stars[0] || 'Форвард';
  const oppMid = stars[1] || 'Полузащитник';
  const userDef = getSimUserPlayer(2);
  const userWinger = getSimUserPlayer(8);

  // Tactic modifiers
  if (simCurrentTactic === 'bus' && ev.type === 'GOAL_AI' && Math.random() < 0.4) {
    addSimFeedItem(min, '🛡️', `«Автобус» работает! Защита блокирует опасный прорыв ${oppStar}!`);
    return;
  }
  if (simCurrentTactic === 'press' && ev.type === 'SAVE_AI' && Math.random() < 0.5) {
    ev.type = 'GOAL_USER'; // Press converted chance into goal!
  }

  switch (ev.type) {
    case 'GOAL_USER':
      run3PhaseAttack('user', 'GOAL_USER', min);
      break;

    case 'GOAL_AI':
      run3PhaseAttack('ai', 'GOAL_AI', min);
      break;

    case 'SAVE_USER':
      run3PhaseAttack('ai', 'SAVE_USER', min);
      break;

    case 'SAVE_AI':
      run3PhaseAttack('user', 'SAVE_AI', min);
      break;

    case 'POST':
      run3PhaseAttack(Math.random() < 0.5 ? 'user' : 'ai', 'POST', min);
      break;

    case 'CORNER': {
      const setPieceCardId = save.myClubRoles && save.myClubRoles.setPieces;
      const setPlayer = setPieceCardId ? PLAYERS_DB.find(p => p.id === setPieceCardId) : getSimUserPlayer(6);
      addSimFeedItem(min, '📐', `Опасный угловой подаёт ${setPlayer.name}! Мяч закручен в район вратарской.`);
      break;
    }

    case 'YELLOW_CARD': {
      const isUser = Math.random() < 0.5;
      if (isUser) {
        addSimFeedItem(min, '🟨', `Предупреждение за срыв атаки получил ${userDef.name}`);
      } else {
        addSimFeedItem(min, '🟨', `Жёлтая карточка: ${oppMid} срывает нашу быструю контратаку.`);
      }
      break;
    }

    case 'INJURY': {
      // Pick user player on pitch (index 1 to 10)
      const targetSlot = Math.floor(Math.random() * 10) + 1;
      const injuredPlayer = getSimUserPlayer(targetSlot);
      simUserInjuries[targetSlot] = true;
      addSimFeedItem(min, '🚑', `ТРАВМА: ${injuredPlayer.name} получил повреждение! Характеристики снижены на 20%. Сделайте замену!`, 'sim-feed-item--injury');
      break;
    }
  }
}

function resetRadarToCenter() {
  simBall.x = 207;
  simBall.y = 115;
  simBall.targetX = 207;
  simBall.targetY = 115;
  simBluePlayers.forEach(p => { p.targetX = p.baseX; p.targetY = p.baseY; });
  simRedPlayers.forEach(p => { p.targetX = p.baseX; p.targetY = p.baseY; });
}

function startSimClock() {
  if (simIntervalId) clearInterval(simIntervalId);
  const intervalMs = simSpeedMode === 2 ? 250 : 500;

  simIntervalId = setInterval(() => {
    if (!simRunning || simIsPaused) return;

    simMinute++;
    const simClock = document.getElementById('simClock');
    if (simClock) {
      const minStr = simMinute < 10 ? `0${simMinute}` : `${simMinute}`;
      simClock.textContent = `${minStr}:00`;
    }

    // Halftime change
    const simPeriod = document.getElementById('simPeriod');
    if (simMinute === 45) {
      if (simPeriod) simPeriod.textContent = 'ПЕРЕРЫВ';
      addSimFeedItem(45, '⏸️', 'Перерыв! Команды уходят в раздевалку.');
      resetRadarToCenter();
    } else if (simMinute === 46) {
      if (simPeriod) simPeriod.textContent = '2-Й ТАЙМ';
    }

    // Fatigue alert at minute 60
    if (simMinute === 60) {
      addSimFeedItem(60, '⚡', '60\' Стартовый состав начинает уставать! Рекомендуется освежить игру заменой.');
    }

    // Check minute events
    processSimMinuteEvent(simMinute);

    // Normal circulation between phases
    if (simPlayPhase === 'IDLE') {
      const isUserPossession = Math.random() < (simUserOvr / (simUserOvr + simAiOvr));
      if (isUserPossession) {
        const rIdx = Math.floor(Math.random() * 6) + 5;
        const receiver = simBluePlayers[rIdx];
        if (receiver) {
          simCarrier = { team: 'user', name: receiver.name, index: rIdx };
          simBall.targetX = receiver.x;
          simBall.targetY = receiver.y;
          receiver.targetX = receiver.baseX + (Math.random() * 30 - 10);
          receiver.targetY = receiver.baseY + (Math.random() * 20 - 10);
        }
      } else {
        const rIdx = Math.floor(Math.random() * 6) + 5;
        const receiver = simRedPlayers[rIdx];
        if (receiver) {
          simCarrier = { team: 'ai', name: receiver.name, index: rIdx };
          simBall.targetX = receiver.x;
          simBall.targetY = receiver.y;
          receiver.targetX = receiver.baseX - (Math.random() * 30 - 10);
          receiver.targetY = receiver.baseY + (Math.random() * 20 - 10);
        }
      }
    }

    // Match completion at 90
    if (simMinute >= 90) {
      simRunning = false;
      clearInterval(simIntervalId);
      finishSimMatch();
    }
  }, intervalMs);
}

function skipSimMatchToEnd() {
  if (!simRunning) return;
  simRunning = false;
  if (simIntervalId) clearInterval(simIntervalId);

  const remaining = simScheduledEvents.filter(e => e.minute > simMinute);
  const stars = (simCurrentStageInfo && simCurrentStageInfo.stars) || ['Звезда'];
  const oppStar = stars[0] || 'Форвард';
  const userSt = getSimUserPlayer(9);

  remaining.forEach(ev => {
    if (ev.type === 'GOAL_USER') {
      simScoreUser++;
      if (userSt && userSt.id) simUserScorers.push(userSt.id);
      addSimFeedItem(ev.minute, '⚽', `ГОЛ! ${userSt.name} поражает ворота соперника! (Счёт ${simScoreUser}:${simScoreAi})`, 'sim-feed-item--goal-user');
    } else if (ev.type === 'GOAL_AI') {
      simScoreAi++;
      addSimFeedItem(ev.minute, '⚽', `ГОЛ! ${oppStar} поражает наши ворота! (Счёт ${simScoreUser}:${simScoreAi})`, 'sim-feed-item--goal-ai');
    } else if (ev.type === 'SAVE_USER' || ev.type === 'SAVE_AI') {
      addSimFeedItem(ev.minute, '🧤', `Опасный удар отражён вратарём!`, 'sim-feed-item--save');
    } else if (ev.type === 'POST') {
      addSimFeedItem(ev.minute, '🎯', `Опасный момент! Мяч сотрясает штангу ворот!`);
    } else if (ev.type === 'YELLOW_CARD') {
      addSimFeedItem(ev.minute, '🟨', `Предупреждение за срыв атаки.`);
    }
  });

  simMinute = 90;
  const simClock = document.getElementById('simClock');
  if (simClock) simClock.textContent = '90:00';
  updateSimScoreboard();
  finishSimMatch();
}

function finishSimMatch() {
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

  const isWin = simScoreUser > simScoreAi;
  const isDraw = simScoreUser === simScoreAi;
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

      totalCoins += tourn.rewards.coins;
      xpReward += tourn.rewards.xp;
      tournamentMsg = `🏆 ВЫ ВЫИГРАЛИ ${tourn.name.toUpperCase()}! (+${tourn.rewards.coins} ★, +${tourn.rewards.xp} XP)`;
    } else {
      tState.stage++;
      tournamentMsg = `Вы вышли в ${tourn.stages[tState.stage].name}!`;
    }
  } else {
    // Loss in playoff
    tState.stage = 0;
    tournamentMsg = `Вы выбыли из турнира на стадии ${simCurrentStageInfo.name}.`;
  }

  save.coins += totalCoins;
  save.xp += xpReward;
  writeSave();
  updateTopBar();

  // Populate Result Modal
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
        title.textContent = 'ПОБЕДА!';
        if (icon) icon.textContent = '🏆';
      } else if (isDraw) {
        title.textContent = 'НИЧЬЯ';
        if (icon) icon.textContent = '🤝';
      } else {
        title.textContent = 'ПОРАЖЕНИЕ';
        if (icon) icon.textContent = '🛡️';
      }
    }

    if (teams) teams.textContent = `МОЙ КЛУБ vs ${simCurrentStageInfo.club}`;
    if (score) score.textContent = `${simScoreUser} : ${simScoreAi}`;
    if (rewards) {
      rewards.innerHTML = `
        <div class="result-reward-item"><span>${tournamentMsg}</span><b>${isWin ? '✓' : '—'}</b></div>
        <div class="result-reward-item"><span>Матчевая выплата</span><b>+${coinReward} ★</b></div>
        ${goalBonus > 0 ? `<div class="result-reward-item"><span>Бонус за ${simScoreUser} мяч(а)</span><b>+${goalBonus} ★</b></div>` : ''}
        ${tournamentWon ? `<div class="result-reward-item" style="color:var(--gold);"><span>Трофейный куш</span><b>+${tourn.rewards.coins} ★</b></div>` : ''}
        <div class="result-reward-item"><span>Опыт карточек основы</span><b>+25 XP всем</b></div>
        <div class="result-reward-item"><span>Сыгранность состава</span><b>+1 матч</b></div>
      `;
    }

    if (btnContinue) {
      if (isWin && !tournamentWon) {
        btnContinue.style.display = 'block';
        btnContinue.textContent = `🏆 Играть ${tourn.stages[tState.stage].name}`;
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

// 2D RADAR CANVAS RENDERING
function startRadarLoop() {
  const canvas = document.getElementById('simRadarCanvas');
  if (!canvas) return;
  const ctx = canvas.getContext('2d');
  let frameCount = 0;

  function render() {
    if (!canvas) return;
    frameCount++;

    const w = canvas.width;
    const h = canvas.height;
    const scaleX = w / 414;
    const scaleY = h / 230;

    ctx.save();
    ctx.scale(scaleX, scaleY);
    ctx.clearRect(0, 0, 414, 230);

    // 1. Turf & Subtle Mowing Stripes
    ctx.fillStyle = '#0a2113';
    ctx.fillRect(0, 0, 414, 230);

    const stripeW = 414 / 8;
    for (let i = 0; i < 8; i += 2) {
      ctx.fillStyle = 'rgba(0, 255, 136, 0.025)';
      ctx.fillRect(i * stripeW, 0, stripeW, 230);
    }

    // 2. Pitch Lines
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

    // Dynamic Team Shifts based on Ball Position and Tactical Pad
    const ballPosRatio = (simBall.x - 207) / 200; // -1 to +1
    let tacticShiftX = 0;
    if (simCurrentTactic === 'bus') tacticShiftX = -24;
    else if (simCurrentTactic === 'press') tacticShiftX = 26;

    // 3. Update & Draw Blue Team (User)
    simBluePlayers.forEach((p, i) => {
      const breath = Math.sin(frameCount * 0.05 + i) * 1.2;

      let shiftX = tacticShiftX;
      if (p.role === 'CB' || p.role === 'LB' || p.role === 'RB') {
        shiftX += ballPosRatio > 0 ? ballPosRatio * 32 : ballPosRatio * 15;
      } else if (p.role === 'CM' || p.role === 'CAM') {
        shiftX += ballPosRatio * 24;
      }

      // Smooth kinematic lerp
      p.x += ((p.targetX + shiftX) - p.x) * 0.055;
      p.y += ((p.targetY + breath) - p.y) * 0.055;

      ctx.save();
      ctx.shadowColor = '#00e5ff';
      ctx.shadowBlur = 8;
      ctx.fillStyle = '#00c3ff';
      ctx.beginPath();
      ctx.arc(p.x, p.y, 6.2, 0, Math.PI * 2);
      ctx.fill();
      ctx.strokeStyle = '#ffffff';
      ctx.lineWidth = 1.5;
      ctx.stroke();
      ctx.restore();
    });

    // 4. Update & Draw Red Team (Rival)
    simRedPlayers.forEach((p, i) => {
      const breath = Math.cos(frameCount * 0.05 + i) * 1.2;
      let shiftX = 0;
      if (p.role === 'CB' || p.role === 'LB' || p.role === 'RB') {
        shiftX = ballPosRatio < 0 ? ballPosRatio * 32 : ballPosRatio * 15;
      } else if (p.role === 'CM' || p.role === 'CAM') {
        shiftX = ballPosRatio * 24;
      }

      p.x += ((p.targetX + shiftX) - p.x) * 0.055;
      p.y += ((p.targetY + breath) - p.y) * 0.055;

      ctx.save();
      ctx.shadowColor = '#ff3b30';
      ctx.shadowBlur = 8;
      ctx.fillStyle = '#ff2b2b';
      ctx.beginPath();
      ctx.arc(p.x, p.y, 6.2, 0, Math.PI * 2);
      ctx.fill();
      ctx.strokeStyle = '#ffffff';
      ctx.lineWidth = 1.5;
      ctx.stroke();
      ctx.restore();
    });

    // 5. Update & Draw Ball with Smooth Lerp
    const ballLerp = simPlayPhase === 'FINISHING' ? 0.18 : 0.09;
    simBall.x += (simBall.targetX - simBall.x) * ballLerp;
    simBall.y += (simBall.targetY - simBall.y) * ballLerp;

    ctx.save();
    ctx.shadowColor = '#ffffff';
    ctx.shadowBlur = 10;
    ctx.fillStyle = '#ffffff';
    ctx.beginPath();
    ctx.arc(simBall.x, simBall.y, 3.8, 0, Math.PI * 2);
    ctx.fill();
    ctx.strokeStyle = '#000000';
    ctx.lineWidth = 0.8;
    ctx.stroke();
    ctx.restore();

    // 6. Draw Name Badge over active player with ball
    if (simCarrier && simCarrier.name) {
      let carrierDot = null;
      if (simCarrier.team === 'user') {
        carrierDot = simBluePlayers[simCarrier.index] || simBluePlayers[9];
      } else {
        carrierDot = simRedPlayers[simCarrier.index] || simRedPlayers[9];
      }

      if (carrierDot) {
        ctx.save();
        const tagText = `${simCarrier.name.toUpperCase()} ⚽`;
        ctx.font = 'bold 8.5px "Rajdhani", sans-serif';
        const textW = ctx.measureText(tagText).width;
        const tagX = carrierDot.x;
        const tagY = carrierDot.y - 12;

        ctx.fillStyle = 'rgba(9, 12, 21, 0.9)';
        ctx.strokeStyle = simCarrier.team === 'user' ? '#00e5ff' : '#ff3b30';
        ctx.lineWidth = 1;

        const rectX = tagX - textW / 2 - 5;
        const rectY = tagY - 9;
        ctx.beginPath();
        if (ctx.roundRect) ctx.roundRect(rectX, rectY, textW + 10, 12, 4);
        else ctx.rect(rectX, rectY, textW + 10, 12);
        ctx.fill();
        ctx.stroke();

        ctx.fillStyle = '#ffffff';
        ctx.textAlign = 'center';
        ctx.textBaseline = 'middle';
        ctx.fillText(tagText, tagX, tagY - 3);
        ctx.restore();
      }
    }

    ctx.restore();

    if (simRunning || simMinute < 90) {
      simAnimId = requestAnimationFrame(render);
    }
  }

  cancelAnimationFrame(simAnimId);
  simAnimId = requestAnimationFrame(render);
}

// Tactical pad click handling
document.querySelectorAll('#simTacticsBar .tactic-btn').forEach(btn => {
  btn.addEventListener('click', () => {
    const tactic = btn.dataset.tactic;
    updateTacticsUI(tactic);
    if (tactic === 'bus') {
      addSimFeedItem(simMinute, '🛡️', 'Тренер даёт команду: «Автобус»! Линия обороны прижимается к своей штрафной (-40% риск).');
    } else if (tactic === 'press') {
      addSimFeedItem(simMinute, '⚔️', 'Тренер даёт команду: «Все в атаку / Прессинг!» Высокая линия обороны, удары удваиваются!');
    } else {
      addSimFeedItem(simMinute, '⚖️', 'Тактическое построение возвращено в баланс.');
    }
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

      // Update 2D radar player name
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

const btnCloseTrainingCamp = document.getElementById('btnCloseTrainingCamp');
if (btnCloseTrainingCamp) {
  btnCloseTrainingCamp.addEventListener('click', () => {
    const modal = document.getElementById('modalTrainingCamp');
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
      startSimClock();
    } else if (simSpeedMode === 2) {
      simSpeedMode = 3;
      btnSimSpeed.textContent = '⏩ Итог';
      skipSimMatchToEnd();
    } else {
      simSpeedMode = 1;
      btnSimSpeed.textContent = '1x';
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

const btnMyClubAutoSquad = document.getElementById('btnMyClubAutoSquad');
if (btnMyClubAutoSquad) {
  btnMyClubAutoSquad.addEventListener('click', () => {
    autoBuildMyClubSquad(true);
  });
}

const btnOpenTournaments = document.getElementById('btnOpenTournaments');
if (btnOpenTournaments) {
  btnOpenTournaments.addEventListener('click', () => {
    const squad = save.myClubSquad || [];
    const filledCount = squad.filter(Boolean).length;
    if (filledCount < 11) {
      autoBuildMyClubSquad(false);
    }
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

/* ═══════════════════════════════════════════════════════════════════
   20. INITIALIZATION
═══════════════════════════════════════════════════════════════════ */
document.addEventListener('DOMContentLoaded', () => {
  updateTopBar();
  showScreen('screenMenu');
});

// Run immediately as well if DOM is already ready
updateTopBar();
showScreen('screenMenu');


