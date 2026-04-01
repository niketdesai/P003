// P003 — Practice Actions
// Open workstreams, decisions, and tasks across the business.

export const ACTION_STATUSES = [
  { id: "blocked",    label: "Blocked",     color: "#f87171", desc: "Waiting on external dependency." },
  { id: "open",       label: "Open",        color: "#D4A853", desc: "Ready to work, not started." },
  { id: "inProgress", label: "In Progress", color: "#818CF8", desc: "Actively being worked." },
  { id: "review",     label: "In Review",   color: "#fb923c", desc: "Done, needs validation or sign-off." },
  { id: "done",       label: "Done",        color: "#4ade80", desc: "Complete." },
];

export const ACTION_CATEGORIES = [
  { id: "entity",    label: "Entity & Legal" },
  { id: "capital",   label: "Capital & Trust" },
  { id: "brand",     label: "Brand & Presence" },
  { id: "pipeline",  label: "Pipeline & SOW" },
  { id: "ops",       label: "Operations" },
];

export const ACTIONS = [
  // ── Entity & Legal
  {
    id: "A001",
    category: "entity",
    title: "Resolve OPV equity holding entity",
    status: "open",
    dependency: "Turner / Goldman Sachs",
    notes: "Should OPV 15% assignment sit in ENND I, Living Trust, or Irrevocable Trust? ENND I has operational exposure \u2014 equity should not be in the blast radius of consulting liability. Likely answer: Living Trust (or Irrevocable once set up).",
    projects: ["P057"],
  },
  {
    id: "A002",
    category: "entity",
    title: "Resolve GFS equity holding entity",
    status: "open",
    dependency: "Turner / Goldman Sachs",
    notes: "Same question as OPV. 15% assignment. Likely same answer \u2014 Living Trust or Irrevocable.",
    projects: ["P500"],
  },
  {
    id: "A003",
    category: "entity",
    title: "Incorporate ENND II",
    status: "open",
    dependency: null,
    notes: "Conceptual IP/project studio. Needs entity formation + banking (Mercury). Kept separate from ENND I for clean exits. Get serious when income arrives.",
    projects: [],
  },
  {
    id: "A004",
    category: "entity",
    title: "Formalize OPV assignment agreement",
    status: "open",
    dependency: "OPV operating agreement",
    notes: "10\u201315% via operating agreement or side letter. Entity decision (A001) must resolve first.",
    projects: ["P057"],
  },
  {
    id: "A005",
    category: "entity",
    title: "Formalize GFS assignment agreement",
    status: "open",
    dependency: "GFS operating agreement",
    notes: "10\u201315% via operating agreement or side letter. Entity decision (A002) must resolve first.",
    projects: ["P500"],
  },

  // ── Capital & Trust
  {
    id: "A010",
    category: "capital",
    title: "Set up Desfam Longer Irrevocable Trust",
    status: "open",
    dependency: "Turner / Goldman Sachs",
    notes: "Pending. Once active, provides creditor protection layer that the revocable Living Trust does not. Target: hold long-term equity positions (OPV, GFS, potentially Laurel secondary).",
    projects: [],
  },
  {
    id: "A011",
    category: "capital",
    title: "Pay off Goldman Sachs loan",
    status: "open",
    dependency: "Income",
    notes: "~$25k. Immediate financial priority. Needs to come from D1\u2013D2 consulting revenue.",
    projects: [],
  },

  // ── Brand & Presence
  {
    id: "A020",
    category: "brand",
    title: "Activate ennd.co domain",
    status: "open",
    dependency: null,
    notes: "Domain owned, currently inactive. Decide what it points to \u2014 redirect to niket.com, or standalone entity page.",
    projects: [],
  },
  {
    id: "A021",
    category: "brand",
    title: "Rebuild niket.com",
    status: "open",
    dependency: null,
    notes: "Currently a word puzzle + newsletter signup. Needs to say what you do, who you\u2019ve done it for, and why someone should pay $17.5k/day. Brand is Niket Desai / /N. ENND I stays on invoices.",
    projects: [],
  },
  {
    id: "A022",
    category: "brand",
    title: "Ship \u201COn AI and Administration\u201D",
    status: "inProgress",
    dependency: "Line editing (Fiverr) + visual treatment (Behance illustrator)",
    notes: "Near-final draft. Primary outreach mechanism. First of 6 essays/year target.",
    projects: [],
  },
  {
    id: "A023",
    category: "brand",
    title: "Re-enter social platforms",
    status: "open",
    dependency: "Essay ships first",
    notes: "X and LinkedIn as primary. Goal is niche authority, not mass following. Writing and ENND work are the vehicles.",
    projects: [],
  },

  // ── Pipeline & SOW
  {
    id: "A030",
    category: "pipeline",
    title: "Define standard SOW terms block",
    status: "inProgress",
    dependency: null,
    notes: "Kill fee, T&E, IP, collaboration window, travel. P003 owns the constants. Each project SOW pulls from here. In progress this session.",
    projects: [],
  },
  {
    id: "A031",
    category: "pipeline",
    title: "Update P300 SOW with standard terms",
    status: "open",
    dependency: "A030 (standard terms defined)",
    notes: "P300 SOW is missing: kill fee, T&E, IP ownership, collaboration window, actual price. Need to push standard terms block to P300.",
    projects: ["P300"],
  },
  {
    id: "A032",
    category: "pipeline",
    title: "Draft outreach notes for essay distribution",
    status: "open",
    dependency: "A022 (essay ships)",
    notes: "Tiered: friends \u2192 former colleagues \u2192 business associates \u2192 VCs \u2192 capital allocators. Each note tailored per relationship.",
    projects: [],
  },

  // ── Operations
  {
    id: "A040",
    category: "ops",
    title: "Generate $20k gross ASAP",
    status: "open",
    dependency: "Pipeline conversion",
    notes: "Immediate priority. Offset operating costs + GS loan payoff. D1\u2013D2 slots need to fill.",
    projects: ["P062", "P300", "P369"],
  },
];
