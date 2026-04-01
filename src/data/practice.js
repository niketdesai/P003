// P003 — Practice Data
// Source of truth. Other projects pull from this.

// ─── BRAND ───────────────────────────────────────────────────
export const BRAND = {
  name: "Niket Desai",
  mark: "/N",
  site: "niket.com",
  entity: "ENND I, LLC",
  verticals: ["Travel", "Technology", "Finance"],
};

// ─── PRINCIPLES ──────────────────────────────────────────────
// These are how you operate. Not tactics, not pricing mechanics.
export const PRINCIPLES = [
  {
    title: "Autonomy over schedule.",
    body: "I work on my terms. Collaboration happens during the window. Everything else is protected time.",
  },
  {
    title: "Fit matters more than revenue.",
    body: "I choose who I work with. The wrong engagement at the right price is still wrong.",
  },
  {
    title: "Retainer, not hourly.",
    body: "Clients buy a monthly commitment to outcomes. Not a time clock.",
  },
  {
    title: "Hold the floor.",
    body: "The rate reflects the value. Historically, underselling has been the most expensive mistake I\u2019ve made.",
  },
  {
    title: "Equity is earned at list price.",
    body: "If I take equity in lieu of cash, it\u2019s valued at the list rate. Not the floor, not a discount \u2014 the list.",
  },
  {
    title: "No resentment.",
    body: "Discounted engagements produce resentment. Resentment produces bad work. Structure that works for both sides is not the same as a lower number.",
  },
];

// ─── STANDARD TERMS ──────────────────────────────────────────
// These flow into every SOW.
export const TERMS = {
  collaborationWindow: "11:00\u201316:00 PT",
  collaborationNote: "Meetings, syncs, collaborative work. Everything outside this window is IC time.",
  nda: "Standard on all engagements.",
  exclusivity: "None. Confidentiality protected, not contractual.",
  ipRule: "Work product assigned to client when full rate is paid. Retained otherwise.",
  tePolicy: "Travel and expenses billed separately at cost. Never included in retainer.",
  paymentTerms: "Net 15. First month upfront on signing.",
  upfrontDiscount: "10% off total contract if full term paid upfront.",
};

// ─── TRAVEL POLICY ───────────────────────────────────────────
export const TRAVEL = {
  longHaul: { threshold: "2,000+ miles", class: "Business" },
  shortHaul: [
    { window: "AM / night flights", class: "Business" },
    { window: "Midday flights", class: "Economy (travel day)" },
  ],
  hotel: "Gym on-site required, or walkable \u2014 unless selected by Niket.",
};

// ─── PRICING ─────────────────────────────────────────────────
export const PRICING = {
  listRate: 17500,
  floorMonthly: 7500,
  currency: "USD",
  unit: "day",
  maxDays: 4,

  engagementMonths: [3, 6, 9, 12],
  daysPerWeek: [1, 2, 3, 4],

  rates: [
    [16000, 14000, 14000, 16000],
    [29000, 25000, 25000, 29000],
    [41000, 35000, 35000, 41000],
    [52000, 44000, 44000, 52000],
  ],

  killFee: {
    model: "33% of remaining contract value or one additional month \u2014 whichever is higher.",
    rate: 0.33,
    rateDisplay: "33%",
    terms: "Payable within 5 business days of written notice.",
    floor: "One additional month retainer, minimum.",
  },

  paymentTerms: "Net 15. First month upfront on signing.",
  upfrontDiscount: "10% off total contract if full term paid upfront.",
};

// ─── PIPELINE STAGES ─────────────────────────────────────────
export const STAGES = [
  { id: "identified", label: "Identified", desc: "On radar, no conversation yet." },
  { id: "lead",       label: "Lead",       desc: "Conversation started, mutual interest." },
  { id: "proposed",   label: "Proposed",   desc: "SOW or terms sent." },
  { id: "negotiating",label: "Negotiating",desc: "Active back-and-forth on terms." },
  { id: "signed",     label: "Signed",     desc: "Agreement executed." },
  { id: "active",     label: "Active",     desc: "Engagement underway, billing live." },
  { id: "paused",     label: "Paused",     desc: "Mutual hold, time-bound." },
  { id: "closed",     label: "Closed",     desc: "Completed or terminated." },
];

// ─── PROJECTS ────────────────────────────────────────────────
export const PROJECTS = [
  {
    code: "P702",
    project: "All Star Travel",
    client: "All Star Travel",
    stage: "active",
    vertical: "Travel",
    payment: "None",
    paymentNote: "Family business. No compensation accepted.",
    monthlyValue: 0,
    engagementMonths: null,
    ipAssigned: false,
    nda: false,
    notes: "Founded by Niket\u2019s mother (July 2). Ongoing operational support.",
  },
  {
    code: "P062",
    project: "Space Corp",
    client: "Future Corporation",
    stage: "lead",
    vertical: "Technology",
    payment: "Retainer",
    paymentNote: null,
    monthlyValue: 17500,
    engagementMonths: null,
    ipAssigned: null,
    nda: true,
    notes: "Live lead. Rate conversation pending.",
  },
  {
    code: "P300",
    project: "Capital Formation",
    client: "Global Regenesis Inc.",
    stage: "lead",
    vertical: "Finance",
    payment: "Retainer",
    paymentNote: "Advisory role; may run aspects of process.",
    monthlyValue: 17500,
    engagementMonths: null,
    ipAssigned: null,
    nda: true,
    notes: "Seed fundraise process. Modeling and packaging as inputs.",
  },
  {
    code: "P369",
    project: "Cultural Retail Investor",
    client: "Stakeholder Labs",
    stage: "lead",
    vertical: "Finance",
    payment: "Retainer",
    paymentNote: null,
    monthlyValue: 17500,
    engagementMonths: null,
    ipAssigned: null,
    nda: true,
    notes: "Financial Avatar project context.",
  },
  {
    code: "P042",
    project: "Series D",
    client: "Laurel",
    stage: "lead",
    vertical: "Technology",
    payment: "Retainer",
    paymentNote: "Current advisor relationship. Paid consulting TBD.",
    monthlyValue: 17500,
    engagementMonths: null,
    ipAssigned: null,
    nda: true,
    notes: "Series D targeting >$1B. Summer 2026. Primary generational asset.",
  },
  {
    code: "P057",
    project: "Opavino",
    client: "Opavino",
    stage: "lead",
    vertical: "Technology",
    payment: "15% equity assignment",
    paymentNote: "ENND I, LLC (or Living Trust) assigned via operating agreement or side letter.",
    monthlyValue: 0,
    engagementMonths: null,
    ipAssigned: false,
    nda: true,
    notes: "Considerable prior work. Assignment pending formalization.",
  },
  {
    code: "P500",
    project: "General Fund Systems",
    client: "General Fund Systems (GFS)",
    stage: "lead",
    vertical: "Finance",
    payment: "15% equity assignment",
    paymentNote: "ENND I, LLC (or Living Trust) assigned via operating agreement or side letter.",
    monthlyValue: 0,
    engagementMonths: null,
    ipAssigned: false,
    nda: true,
    notes: "Considerable prior work. Assignment pending formalization.",
  },
];

// ─── SOW FIELD ARCHITECTURE ──────────────────────────────────
export const SOW_FIELDS = [
  { field: "client",           source: "PROJECTS.client",          required: true,  note: "Full legal name of counterparty" },
  { field: "project",          source: "PROJECTS.project",         required: true,  note: "Project name as referenced in agreement" },
  { field: "entity",           source: "BRAND.entity",             required: true,  note: "ENND I, LLC" },
  { field: "scope",            source: "Project context",          required: true,  note: "Defined in each project \u2014 not stored in P003" },
  { field: "rate",             source: "PROJECTS.monthlyValue",    required: true,  note: "Monthly retainer or equity structure" },
  { field: "engagementLength", source: "PROJECTS.engagementMonths",required: true,  note: "3, 6, 9, or 12 months" },
  { field: "startDate",        source: "Agreed at signing",        required: true,  note: "Calendar date" },
  { field: "killFee",          source: "PRICING.killFee",          required: true,  note: "33% of remaining or 1 month \u2014 whichever is higher." },
  { field: "ipAssignment",     source: "TERMS.ipRule",             required: true,  note: "Assigned if full rate paid. Retained otherwise." },
  { field: "nda",              source: "TERMS.nda",                required: true,  note: "Standard on all engagements." },
  { field: "paymentTerms",     source: "TERMS.paymentTerms",       required: true,  note: "Net 15. First month upfront." },
  { field: "tePolicy",         source: "TERMS.tePolicy",           required: true,  note: "T&E billed separately at cost." },
  { field: "exclusivity",      source: "TERMS.exclusivity",        required: false, note: "None. Confidentiality protected." },
  { field: "collabWindow",     source: "TERMS.collaborationWindow",required: false, note: "11:00\u201316:00 PT" },
  { field: "travelPolicy",     source: "TRAVEL",                   required: false, note: "Business class long-haul, policy per engagement." },
];
