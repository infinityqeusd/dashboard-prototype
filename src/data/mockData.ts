export type TickerItem = {
  ticker: string;
  name: string;
  change24h: number;
};

export type StoryCategory = "Earnings" | "Macro" | "Analyst" | "Dividend" | "Risk";

export type StoryItem = {
  id: number;
  category: StoryCategory;
  headline: string;
  source: string;
};

export type MostSearchedItem = {
  rank: number;
  ticker: string;
  name: string;
  mentions: number;
  mentionsDelta: number;
};

export type DividendRow = {
  ticker: string;
  exDivDate: string;
  payDate: string;
  yieldPct: number;
  amount: string;
};

export const portfolioScore = {
  score: 78,
  change24h: 1.8,
  label: "Composite quality + momentum score"
};

export const welcomeStats = [
  { label: "Holdings", value: "14" },
  { label: "Watchlist", value: "27" },
  { label: "Cash", value: "GBP 12,480" }
];

export const tickerRibbonItems: TickerItem[] = [
  { ticker: "AZN", name: "AstraZeneca", change24h: 1.42 },
  { ticker: "HSBA", name: "HSBC", change24h: -0.64 },
  { ticker: "BP.", name: "BP", change24h: 2.11 },
  { ticker: "SHEL", name: "Shell", change24h: 0.56 },
  { ticker: "ULVR", name: "Unilever", change24h: -1.07 },
  { ticker: "VOD", name: "Vodafone", change24h: 0.92 },
  { ticker: "GSK", name: "GSK", change24h: -0.25 },
  { ticker: "DGE", name: "Diageo", change24h: 1.14 },
  { ticker: "REL", name: "RELX", change24h: 0.68 },
  { ticker: "LLOY", name: "Lloyds", change24h: -1.34 },
  { ticker: "NG.", name: "National Grid", change24h: 0.31 },
  { ticker: "BARC", name: "Barclays", change24h: 1.88 },
  { ticker: "TSCO", name: "Tesco", change24h: 0.47 },
  { ticker: "SMIN", name: "Smiths Group", change24h: -0.73 }
];

export const portfolioStories: StoryItem[] = [
  {
    id: 1,
    category: "Macro",
    headline: "BoE speakers strike a cautious tone as rate-cut timing expectations drift into summer",
    source: "Reuters"
  },
  {
    id: 2,
    category: "Earnings",
    headline: "Barclays trading income beats consensus while guidance stays measured for full-year outlook",
    source: "FT"
  },
  {
    id: 3,
    category: "Dividend",
    headline: "Shell reiterates capital return framework as income investors focus on payout durability",
    source: "Company RNS"
  },
  {
    id: 4,
    category: "Analyst",
    headline: "Broker note lifts RELX target on resilient data subscriptions and margin discipline",
    source: "Bloomberg"
  },
  {
    id: 5,
    category: "Risk",
    headline: "Energy holdings swing with crude volatility after mixed inventory signals and sterling strength",
    source: "Reuters"
  },
  {
    id: 6,
    category: "Dividend",
    headline: "Lloyds ex-dividend timing draws fresh attention from UK bank yield hunters",
    source: "MarketWatch"
  }
];

export const aiSuggestions = [
  "Summarise what moved my portfolio today",
  "Which holdings had the biggest factor-score change?",
  "Any dividend risks in my holdings this month?",
  "Explain today's move in BP. in plain English",
  "Screen for UK value + quality winners"
];

export const mostSearchedStocks: MostSearchedItem[] = [
  { rank: 1, ticker: "BP.", name: "BP", mentions: 482, mentionsDelta: 74 },
  { rank: 2, ticker: "BARC", name: "Barclays", mentions: 451, mentionsDelta: 41 },
  { rank: 3, ticker: "LLOY", name: "Lloyds", mentions: 426, mentionsDelta: -18 },
  { rank: 4, ticker: "SHEL", name: "Shell", mentions: 388, mentionsDelta: 23 },
  { rank: 5, ticker: "VOD", name: "Vodafone", mentions: 342, mentionsDelta: -9 },
  { rank: 6, ticker: "TSCO", name: "Tesco", mentions: 331, mentionsDelta: 16 },
  { rank: 7, ticker: "AZN", name: "AstraZeneca", mentions: 297, mentionsDelta: 12 },
  { rank: 8, ticker: "HSBA", name: "HSBC", mentions: 281, mentionsDelta: -14 }
];

export const upcomingDividends: DividendRow[] = [
  { ticker: "ULVR", exDivDate: "12 Mar 2026", payDate: "28 Mar 2026", yieldPct: 3.7, amount: "GBP 0.372" },
  { ticker: "NG.", exDivDate: "13 Mar 2026", payDate: "02 Apr 2026", yieldPct: 5.1, amount: "GBP 0.195" },
  { ticker: "REL", exDivDate: "17 Mar 2026", payDate: "10 Apr 2026", yieldPct: 1.9, amount: "GBP 0.185" },
  { ticker: "DGE", exDivDate: "19 Mar 2026", payDate: "22 Apr 2026", yieldPct: 2.3, amount: "GBP 0.408" },
  { ticker: "GSK", exDivDate: "20 Mar 2026", payDate: "11 Apr 2026", yieldPct: 4.0, amount: "GBP 0.160" },
  { ticker: "HSBA", exDivDate: "24 Mar 2026", payDate: "30 Apr 2026", yieldPct: 6.2, amount: "GBP 0.115" },
  { ticker: "LLOY", exDivDate: "27 Mar 2026", payDate: "15 May 2026", yieldPct: 5.8, amount: "GBP 0.021" },
  { ticker: "SHEL", exDivDate: "31 Mar 2026", payDate: "19 May 2026", yieldPct: 4.3, amount: "GBP 0.277" }
];

export const portfolioHeadlineStats = {
  totalValue: "GBP 248,320",
  dayChange: 1.24,
  pnl: "+GBP 3,046 today"
};
