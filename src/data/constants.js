export const RANK_COLORS = [
  '#f0c040', '#e2e8f0', '#cd7f32', '#60a5fa', '#a3e635',
  '#f87171', '#c084fc', '#fb923c', '#34d399', '#f472b6',
  '#818cf8', '#94a3b8',
];

export const METRIC_HEADERS = [
  { key: 'rings',       label: 'Rings',     title: 'Championship rings as primary player' },
  { key: 'awards',      label: 'Awards',    title: 'Individual awards — rate-adjusted formula' },
  { key: 'stats',       label: 'Stats',     title: 'Statistical dominance relative to era' },
  { key: 'alpha',       label: 'Alpha',     title: 'Sustained alpha / best player on team' },
  { key: 'playoffs',    label: 'Playoffs',  title: 'Playoff performance vs regular season' },
  { key: 'clutch',      label: 'Clutch',    title: 'Late-game clutch record' },
  { key: 'defense',     label: 'Defense',   title: 'Defensive impact, All-Def teams, DPOY' },
  { key: 'versatility', label: 'Versatil.', title: 'Multi-dimensional impact across game' },
  { key: 'longevity',   label: 'Longevity', title: 'Years of sustained elite performance' },
];

export const AWARDS_FORMULA_WEIGHTS = [
  { label: 'Season MVP',        width: '100%', color: 'rgba(240,192,64,0.5)',   val: '×1.5' },
  { label: 'All-NBA 1st rate',  width: '100%', color: 'rgba(96,165,250,0.5)',  val: '×1.5' },
  { label: 'Finals MVP',        width: '100%', color: 'rgba(74,222,128,0.5)',  val: '×1.5' },
  { label: 'All-Def 1st rate',  width: '67%',  color: 'rgba(163,230,53,0.5)', val: '×1.0' },
  { label: 'DPOY',              width: '67%',  color: 'rgba(163,230,53,0.5)', val: '×1.0' },
  { label: 'Scoring title rate',width: '33%',  color: 'rgba(248,113,113,0.5)',val: '×0.5' },
];

export const AWARDS_RAW_DATA = [
  { name: 'Jordan',  seasons: 15, mvps: 5, finMvps: 6, dpoy: 1, allNba1: 10, allNba1Rate: '67%', allDef1: 8,  allDefRate: '53%', scrTitles: 10, scrRate: '67%', score: 10 },
  { name: 'Kareem',  seasons: 20, mvps: 6, finMvps: 2, dpoy: 1, allNba1: 10, allNba1Rate: '50%', allDef1: 10, allDefRate: '50%', scrTitles: 2,  scrRate: '10%', score: 8  },
  { name: 'LeBron',  seasons: 21, mvps: 4, finMvps: 4, dpoy: 0, allNba1: 13, allNba1Rate: '62%', allDef1: 6,  allDefRate: '29%', scrTitles: 1,  scrRate: '5%',  score: 7  },
  { name: 'Bird',    seasons: 13, mvps: 3, finMvps: 2, dpoy: 0, allNba1: 9,  allNba1Rate: '69%', allDef1: 3,  allDefRate: '23%', scrTitles: 0,  scrRate: '0%',  score: 6  },
  { name: 'Giannis', seasons: 12, mvps: 2, finMvps: 1, dpoy: 2, allNba1: 6,  allNba1Rate: '50%', allDef1: 4,  allDefRate: '33%', scrTitles: 1,  scrRate: '8%',  score: 6  },
  { name: 'Kobe',    seasons: 20, mvps: 1, finMvps: 2, dpoy: 0, allNba1: 11, allNba1Rate: '55%', allDef1: 9,  allDefRate: '45%', scrTitles: 2,  scrRate: '10%', score: 5  },
  { name: 'Russell', seasons: 13, mvps: 5, finMvps: 1, dpoy: 0, allNba1: 3,  allNba1Rate: '23%', allDef1: 1,  allDefRate: '8%',  scrTitles: 0,  scrRate: '0%',  score: 4  },
  { name: 'Jokic',   seasons: 10, mvps: 3, finMvps: 1, dpoy: 0, allNba1: 6,  allNba1Rate: '60%', allDef1: 0,  allDefRate: '0%',  scrTitles: 0,  scrRate: '0%',  score: 4  },
  { name: 'Shaq',    seasons: 19, mvps: 1, finMvps: 3, dpoy: 0, allNba1: 8,  allNba1Rate: '42%', allDef1: 3,  allDefRate: '16%', scrTitles: 0,  scrRate: '0%',  score: 4  },
  { name: 'Curry',   seasons: 15, mvps: 2, finMvps: 1, dpoy: 0, allNba1: 8,  allNba1Rate: '53%', allDef1: 0,  allDefRate: '0%',  scrTitles: 2,  scrRate: '13%', score: 4  },
  { name: 'Durant',  seasons: 17, mvps: 1, finMvps: 2, dpoy: 0, allNba1: 6,  allNba1Rate: '35%', allDef1: 1,  allDefRate: '6%',  scrTitles: 4,  scrRate: '24%', score: 4  },
  { name: 'Wade',    seasons: 16, mvps: 0, finMvps: 1, dpoy: 0, allNba1: 3,  allNba1Rate: '19%', allDef1: 3,  allDefRate: '19%', scrTitles: 0,  scrRate: '0%',  score: 2  },
];

export const PENDING_METHODOLOGY_CARDS = [
  { tag: 'Rings',       desc: 'Championship rings as primary player' },
  { tag: 'Stats',       desc: 'Statistical dominance relative to era peers' },
  { tag: 'Alpha',       desc: 'Sustained best-player-on-team status — peak and duration' },
  { tag: 'Playoffs',    desc: 'Performance elevation vs regular season' },
  { tag: 'Clutch',      desc: 'Late-game record, close-game performance' },
  { tag: 'Defense',     desc: 'Defensive impact — All-Def teams, DPOY' },
  { tag: 'Versatility', desc: 'Multi-dimensional impact across scoring, playmaking, defense' },
  { tag: 'Longevity',   desc: 'Years of sustained elite performance' },
];
