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
   8. FAIR RNG PACK PROBABILITIES & FILTERS
   - Standard (500): <=80 OVR (97%), 81-84 (3%), 85+ (0%)
   - Pro (1500): 75-85 OVR (94.5%), 86-89 (5%), 90+ (0.5%)
   - Elite (3000): 83-88 OVR (85%), 89-92 (12%), 95+ (3%)
   - Matus (7000): 89-92 OVR (75%), 95+ Ultra Legend (25%)
   - KOMILZHONOV 120 is strictly excluded from all packs (LVL 10 reward only)!
═══════════════════════════════════════════════════════════════════ */
function rollPackPlayer(packType) {
  // STRICTLY EXCLUDE KOMILZHONOV 120 FROM ALL PACKS!
  const validCards = PLAYERS_DB.filter(p => p.personId !== 'komilzhonov' && p.id !== 'komilzhonov_120');

  const rand = Math.random();

  if (packType === 'standard') {
    // 1. Standard Pack:
    // - 3% chance: 81–84 OVR
    // - 97% chance: <= 80 OVR
    // - 85+ OVR: 0%
    if (rand < 0.03) {
      const pool = validCards.filter(p => p.rating >= 81 && p.rating <= 84);
      if (pool.length) return getRandomItem(pool);
    }
    const pool = validCards.filter(p => p.rating <= 80);
    return getRandomItem(pool);

  } else if (packType === 'pro') {
    // 2. Pro Pack:
    // - 0.5% chance: 90+ OVR
    // - 5% chance: 86–89 OVR
    // - 94.5% chance: 75–85 OVR (guaranteed 75+)
    if (rand < 0.005) {
      const pool = validCards.filter(p => p.rating >= 90);
      if (pool.length) return getRandomItem(pool);
    } else if (rand < 0.055) {
      const pool = validCards.filter(p => p.rating >= 86 && p.rating <= 89);
      if (pool.length) return getRandomItem(pool);
    }
    const pool = validCards.filter(p => p.rating >= 75 && p.rating <= 85);
    return getRandomItem(pool);

  } else if (packType === 'elite') {
    // 3. Elite Pack:
    // - Guaranteed strictly 82+ OVR
    // - 3% chance: Ultra Legend (95+)
    // - 12% chance: 89–92 OVR
    // - 85% chance: 83–88 OVR
    if (rand < 0.03) {
      const pool = validCards.filter(p => p.rating >= 95);
      if (pool.length) return getRandomItem(pool);
    } else if (rand < 0.15) {
      const pool = validCards.filter(p => p.rating >= 89 && p.rating <= 92);
      if (pool.length) return getRandomItem(pool);
    }
    const pool = validCards.filter(p => p.rating >= 82 && p.rating <= 88);
    return getRandomItem(pool);

  } else if (packType === 'matus') {
    // 4. Matus / Ultra Pack:
    // - Strictly 88+ OVR guaranteed
    // - 25% chance: Ultra Legend (Matus 99, Davletov 95, Alpyspayev 96)
    // - 75% chance: 89–92 OVR
    if (rand < 0.25) {
      const pool = validCards.filter(p => p.rating >= 95);
      if (pool.length) return getRandomItem(pool);
    }
    const pool = validCards.filter(p => p.rating >= 88 && p.rating <= 92);
    return getRandomItem(pool);
  }

  // Fallback
  const fallback = validCards.filter(p => p.rating <= 80);
  return getRandomItem(fallback);
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

function getCountryFlag(code) {
  if (code === 'ABH') {
    return `<img src="https://flagcdn.com/w40/ge-ab.png" alt="ABH" class="flag-icon" style="width: 18px; height: 12px; vertical-align: middle; border-radius: 2px; object-fit: cover; display: inline-block;">`;
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
  '4-1-4-1': [1, 4, 1, 4, 1]
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
  }
};

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

  const currentFormation = localStorage.getItem('myClubFormation') || save.myClubFormation || '4-2-3-1';
  const structure = FORMATIONS[currentFormation] || [1, 3, 2, 4, 1];

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
      slot.style.cssText = 'display: flex; flex-direction: column; align-items: center; cursor: pointer;';

      if (player && player.image) {
        slot.innerHTML = `<img class="pitch-card-img" src="${player.image}" alt="${player.name}" style="width: clamp(56px, 17vw, 76px); aspect-ratio: 2/3; object-fit: contain; filter: drop-shadow(0 4px 8px rgba(0,0,0,0.65)); pointer-events: auto;">`;
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

function openTrainingHubModal(targetPlayerId) {
  const modal = document.getElementById('modalTrainingHub') || document.getElementById('modalTrainingCamp');
  if (!modal) return;

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

      if (isCur) {
        setTimeout(() => {
          chip.scrollIntoView({ behavior: 'smooth', block: 'nearest', inline: 'center' });
        }, 50);
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
        <button class="th-sc-btn-plus" title="Вложить 1 TP (+1)" ${canUpgrade ? '' : 'disabled'}>+</button>
      `;

      const btnPlus = card.querySelector('.th-sc-btn-plus');
      btnPlus.addEventListener('click', () => {
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

        curEntry.points -= 1;
        curEntry.stats[sk.key] = currentVal + 1;
        const all = getAllPlayerTrainingData();
        all[String(player.id)] = curEntry;
        saveAllPlayerTrainingData(all);

        let perkUnlockedMsg = '';
        if (curEntry.stats[sk.key] === 10 && SKILL_PERKS[sk.key] && SKILL_PERKS[sk.key][10]) {
          perkUnlockedMsg = ` ✨ Открыт перк: «${SKILL_PERKS[sk.key][10].name}»!`;
        } else if (curEntry.stats[sk.key] === 20 && SKILL_PERKS[sk.key] && SKILL_PERKS[sk.key][20]) {
          perkUnlockedMsg = ` ⭐ Открыт перк: «${SKILL_PERKS[sk.key][20].name}»!`;
        }

        showToast(`⚡ ${player.name}: +1 к ${sk.name}!${perkUnlockedMsg} Осталось ${curEntry.points} TP.`);
        openTrainingHubModal(player.id);
        updateClubOVR();
      });

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
      openTrainingHubModal(player.id);
      updateClubOVR();
    };
  }

  updateTrainingHubBadge();
  modal.classList.remove('hidden');
}

function openTrainingCampModal(playerId) {
  openTrainingHubModal(playerId);
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

    const userGoalChance = 0.28 * (userWeight * 2) + shoBonus;
    const aiGoalChance = Math.max(0.05, 0.25 * ((1 - userWeight) * 2) - gkSaveBonus - defBonus);

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

    this.userPlayers = userSlots.map((slot, idx) => {
      const card = userSquad[idx] || (idx === 10 ? { name: 'Вратарь', position: 'GK' } : { name: `Игрок ${idx + 1}`, position: slot.role });
      const stats = this.extractStats(card, slot.role);
      const isGK = slot.role === 'GK';
      const cl = clampPosition(slot.baseX, slot.baseY, isGK);
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

    // Reset base positions
    this.players.forEach(p => {
      p.x = p.baseX;
      p.y = p.baseY;
      p.vx = 0;
      p.vy = 0;
      p.state = 'STATE_OFF_BALL';
      p.holdTimer = 0;
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
    this.receiveBall(starter);
  }

  triggerGoal(scoringTeam) {
    this.state = 'GOAL_PAUSE';
    this.goalPauseTimer = 2.2; // Комфортная пауза 2.2с после гола
    this.ball.carrier = null;
    this.ball.flightType = 'none';
    this.ball.flightTarget = null;

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

      triggerSimGoalFlash();
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

      triggerSimGoalFlash();
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
    this.ball.lastTouchTeam = p.team;
    this.ball.lastTouchPlayer = p;
    this.ball.flightType = 'none';
    this.ball.flightTarget = null;
    this.ball.vx = 0;
    this.ball.vy = 0;
    this.ball.x = p.x;
    this.ball.y = p.y;

    if (p.role === 'GK') {
      p.maxHoldTime = 1.0;
      p.tackleImmunity = 999;
    } else {
      p.maxHoldTime = 1.2 + Math.random() * 0.6; // 1.2 - 1.8с на обработку и дриблинг
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

    // Кристальная логика голкипера: вынос открытому партнеру в центральную зону (X: 30 - 55)
    let bestCandidate = null;
    let bestScore = -Infinity;

    teammates.forEach(tm => {
      let minOppDist = Infinity;
      opponents.forEach(op => {
        const d = Math.hypot(op.x - tm.x, op.y - tm.y);
        if (d < minOppDist) minOppDist = d;
      });

      const inCentralZone = tm.x >= 30 && tm.x <= 70;
      let score = minOppDist * 2.0;
      if (inCentralZone) score += 35;
      if (['CM', 'CDM', 'CAM'].includes(tm.role)) score += 20;
      if (['LW', 'RW', 'LM', 'RM'].includes(tm.role)) score += 15;
      score += Math.random() * 10;

      if (score > bestScore) {
        bestScore = score;
        bestCandidate = tm;
      }
    });

    const target = bestCandidate || teammates[1] || teammates[0];
    this.executePass(gk, target);
  }

  executeSmartPass(carrier) {
    const isUser = carrier.team === 'user';
    const teammates = (isUser ? this.userPlayers : this.oppPlayers).filter(p => p !== carrier && p.role !== 'GK');
    const opponents = (isUser ? this.oppPlayers : this.userPlayers).filter(p => p.role !== 'GK');
    const inCentralThird = carrier.x >= 30 && carrier.x <= 70;

    let bestCandidate = null;
    let bestScore = -Infinity;

    teammates.forEach(tm => {
      // 1. Продвижение вперед
      const progress = isUser ? (tm.x - carrier.x) : (carrier.x - tm.x);

      // 2. Свободное пространство вокруг адресата
      let minOppDist = Infinity;
      opponents.forEach(op => {
        const d = Math.hypot(op.x - tm.x, op.y - tm.y);
        if (d < minOppDist) minOppDist = d;
      });

      // 3. Препятствия на линии передачи
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

      // В центральной трети поля приоритет комбинациям: полузащита, опорники, фланги
      if (inCentralThird) {
        if (['CM', 'CDM', 'CAM', 'LM', 'RM'].includes(tm.role)) score += 20;
        if (['LW', 'RW'].includes(tm.role)) score += 16;
        if (tm.role === 'ST' && progress > 22 && minOppDist < 8.0) score -= 18;
      } else {
        if (['ST', 'LW', 'RW'].includes(tm.role) && progress > 3.0) score += 18;
        if (['CAM', 'CM'].includes(tm.role)) score += 10;
      }

      if (passDist < 6) score -= 25; // Слишком близко
      if (passDist > 55) score -= (passDist - 55) * 1.5; // Слишком далеко
      score += Math.random() * 18; // Естественная вариативность

      if (score > bestScore) {
        bestScore = score;
        bestCandidate = tm;
      }
    });

    // Гарантированный запасной адресат
    if (!bestCandidate) {
      let maxDist = -1;
      teammates.forEach(tm => {
        let minD = Infinity;
        opponents.forEach(op => {
          const d = Math.hypot(op.x - tm.x, op.y - tm.y);
          if (d < minD) minD = d;
        });
        if (minD > maxDist) {
          maxDist = minD;
          bestCandidate = tm;
        }
      });
    }

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
    // Снижение скорости полета мяча на 30% (32 - 47 %/сек) для четкой читаемости передачи
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
      // 3. СЕЙВ ВРАТАРЯ (~52-56%)
      if (isUser) {
        if (simStats) simStats.userShotsOnTarget++;
      } else {
        if (simStats) simStats.aiShotsOnTarget++;
      }
      const targetX = oppGk ? oppGk.x : goalX;
      const targetY = oppGk ? oppGk.y : 50;
      const dx = targetX - shooter.x;
      const dy = targetY - shooter.y;
      const d = Math.hypot(dx, dy) || 1;

      this.ball.vx = (dx / d) * shotSpeed;
      this.ball.vy = (dy / d) * shotSpeed;
      this.ball.flightTarget = { x: targetX, y: targetY, isSave: true, gk: oppGk };

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

  updateCarrier(dt) {
    const carrier = this.ball.carrier;
    if (!carrier) return;

    carrier.holdTimer += dt;
    if (carrier.tackleImmunity > 0) carrier.tackleImmunity -= dt;

    // Вратарь держит мяч 1.0с
    if (carrier.role === 'GK') {
      if (carrier.holdTimer >= 1.0) {
        this.executeGKPass(carrier);
      }
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
      this.executeShot(carrier);
    } else if (mustAct) {
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
        if (ft.gk) this.receiveBall(ft.gk);
        else this.giveBallToGK((this.ball.lastTouchTeam === 'user' ? this.oppPlayers : this.userPlayers).find(p => p.role === 'GK'));
        return;
      }

      if (ft.receiver && distToTarget < 4.0) {
        this.receiveBall(ft.receiver);
        return;
      }
    }

    // Повышенный шанс перехвата передач в центре поля (+20-25%)
    if (this.ball.flightType === 'pass') {
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
    // Командный сдвиг за мячом
    const shiftX = (this.ball.x - 50) * 0.42;
    const shiftY = (this.ball.y - 50) * 0.22;
    const tacticOffset = this.currentTactic === 'bus' ? -10 : (this.currentTactic === 'press' ? 10 : 0);

    this.players.forEach(p => {
      // 1. Вратари
      if (p.role === 'GK') {
        const isUser = p.team === 'user';
        p.targetX = isUser ? 3.5 : 96.5;
        p.targetY = 50 + (this.ball.y - 50) * 0.45;
        p.targetY = Math.max(40, Math.min(60, p.targetY));

        // Подбор бесхозного мяча в штрафной
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

      // 3. Ближайший прессингующий
      if (p === this.activePresser) {
        p.state = 'STATE_PRESSING';
        const carrier = this.ball.carrier;
        const targetX = carrier ? carrier.x : this.ball.x;
        const targetY = carrier ? carrier.y : this.ball.y;
        const dx = targetX - p.x;
        const dy = targetY - p.y;
        const d = Math.hypot(dx, dy) || 1;

        p.x += (dx / d) * p.speed * 1.12 * dt;
        p.y += (dy / d) * p.speed * 1.12 * dt;

        // Единоборство при сближении (< 3.6%)
        if (carrier && d < 3.6 && carrier.tackleImmunity <= 0 && carrier.role !== 'GK') {
          const defStat = p.stats.def || 75;
          const driStat = carrier.stats.dri || 75;
          const tackleChance = 0.38 + ((defStat - driStat) / 200) * 0.35;
          if (Math.random() < Math.max(0.18, Math.min(0.70, tackleChance))) {
            this.receiveBall(p);
          } else {
            carrier.tackleImmunity = 0.5;
          }
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
      const tShiftX = isUser ? (shiftX + tacticOffset) : (shiftX - tacticOffset);
      let targetX = p.baseX + tShiftX;
      let targetY = p.baseY + shiftY;

      // Органическое дыхание с умеренным темпом
      const breathX = Math.sin(this.simTime * 1.5 + p.index * 1.35) * 3.0;
      const breathY = Math.cos(this.simTime * 1.3 + p.index * 1.65) * 3.0;
      targetX += breathX;
      targetY += breathY;

      // Забегания в атакующие каналы при контроле мяча командой
      const teamHasBall = this.ball.carrier && this.ball.carrier.team === p.team;
      if (teamHasBall) {
        if (['ST', 'LW', 'RW'].includes(p.role)) {
          const runProg = isUser ? 8.0 : -8.0;
          const channelY = p.role === 'LW' ? -4.5 : (p.role === 'RW' ? 4.5 : 0);
          targetX += runProg;
          targetY += channelY;
        } else if (['CAM', 'CM'].includes(p.role)) {
          const runProg = isUser ? 4.0 : -4.0;
          targetX += runProg;
        }
      }

      const dx = targetX - p.x;
      const dy = targetY - p.y;
      const dist = Math.hypot(dx, dy);
      if (dist > 0.1) {
        const move = Math.min(dist, p.speed * 0.88 * dt);
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
  // 1x: ~81 сек на полный матч 90' (900мс/мин), 2x: 450мс/мин
  const intervalMs = simSpeedMode === 2 ? 450 : 900;

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

    if (simRunning && !simIsPaused && matchEngine2D) {
      const dt = rawDt * simSpeedMode;
      matchEngine2D.update(dt);
    }

    if (matchRenderer && matchEngine2D) {
      matchRenderer.render(matchEngine2D);
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
   20. INITIALIZATION
═══════════════════════════════════════════════════════════════════ */
document.addEventListener('DOMContentLoaded', () => {
  updateTopBar();
  showScreen('screenMenu');
});

// Run immediately as well if DOM is already ready
updateTopBar();
showScreen('screenMenu');


