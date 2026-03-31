// P003 — ENND I, LLC Practice Data
// Source of truth. Other projects pull from this.

// ─── ENTITY ───────────────────────────────────────────────────
export const ENTITY = {
  name: "ENND I, LLC",
  dba: "All Star Travel",
  ein: true,
  domain: "ennd.co",
  domainStatus: "inactive",
  verticals: ["Travel", "Technology", "Finance"],
  collaborationHours: "11:00–16:00 PT",
  ethos: "V(t) = ∫ O(t) / C(t) dt",
  ethosNote: "Value is a function of Opportunity divided by Cost over Time. The goal of every engagement is to deliver 10–100x the cost of the engagement. If the opportunity is not large enough to justify the cost, the answer is not yet — not a discount.",
  nda: "Standard practice on all engagements.",
  exclusivity: "None. Confidentiality protected. Not contractual.",
  ipRule: "IP assigned to client when full rate is paid. Not assigned otherwise.",
};

// ─── TRAVEL POLICY ────────────────────────────────────────────
export const TRAVEL = {
  longHaul: { threshold: "2,000+ miles", class: "Business" },
  shortHaul: [
    { window: "AM / night flights", class: "Business" },
    { window: "Midday flights", class: "Economy (travel day)" },
  ],
  hotel: "Gym on-site required, or walkable to Barry's Bootcamp — unless selected by Niket.",
  teNote: "T&E always billed separately. Never included in retainer.",
};

// ─── PRINCIPLES ───────────────────────────────────────────────
// Distilled. Each one actionable in conversation.
export const PRINCIPLES = [
  {
    title: "State the rate. Stop talking.",
    body: "The number is $17,500/day. Say it once. The pause after belongs to them.",
  },
  {
    title: "Duration earns the discount. Nothing else does.",
    body: "6 and 9 months are the anchor. 3 months costs more (churn). 12 months costs more (lock-in). No relationship discounts. No volume discounts on single days.",
  },
  {
    title: "The floor is $7,500/month retainer. It never moves.",
    body: "Below that, the engagement does not serve either side. If someone cannot reach the floor, the answer is not yet.",
  },
  {
    title: "Equity is at your election. Not theirs.",
    body: "If the company is real and the opportunity is compelling, you offer to take part of the engagement as equity. Clients do not propose this. You do.",
  },
  {
    title: "The follow-up is one note. Then stop.",
    body: "No re-pitching. No re-explaining the rate. One note written like you have other things going on — because you do.",
  },
  {
    title: "Discounted engagements produce resentment.",
    body: "Resentment produces bad work. Bad work costs more than the discount saved. Structure that works for the client is not the same as a lower number.",
  },
];

// ─── PRICING ──────────────────────────────────────────────────
export const PRICING = {
  listRate: 17500,         // single day, no commitment
  floorMonthly: 7500,      // minimum cash/month, non-negotiable
  currency: "USD",
  unit: "day",

  // U-curve: 6 and 9 months are cheapest. 3 and 12 carry premiums.
  // Rationale: 3mo = churn premium. 12mo = lock-in premium.
  engagementMonths: [3, 6, 9, 12],
  daysPerWeek: [1, 2, 3, 4],

  // Monthly retainer rates [days_index][months_index]
  rates: [
    [16000, 14000, 14000, 16000],   // 1 day/week
    [29000, 25000, 25000, 29000],   // 2 days/week
    [41000, 35000, 35000, 41000],   // 3 days/week
    [52000, 44000, 44000, 52000],   // 4 days/week
  ],

  killFee: {
    model: "Flat % of remaining contract value",
    rate: 0.33,
    rateDisplay: "33%",
    terms: "Payable within 5 business days of written notice.",
    note: "Client-friendly by design. Not punitive — reflects real cost of early exit.",
  },

  paymentTerms: "Net 15. First month upfront on signing.",
  upfrontDiscount: "10% off total contract if full term paid upfront.",
};

// ─── PIPELINE STAGES ──────────────────────────────────────────
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

// ─── PROJECTS ─────────────────────────────────────────────────
// Each entry stores enough to generate an SOW downstream.
export const PROJECTS = [
  {
    code: "P702",
    project: "All Star Travel",
    client: "All Star Travel",
    stage: "active",
    vertical: "Travel",
    payment: "None",
    paymentNote: "Family business. No compensation accepted.",
    rate: null,
    engagementMonths: null,
    ipAssigned: false,
    nda: false,
    notes: "Founded by Niket's mother (July 2). Ongoing operational support.",
  },
  {
    code: "P062",
    project: "Space Corp",
    client: "Future Corporation",
    stage: "lead",
    vertical: "Technology",
    payment: "Retainer",
    paymentNote: null,
    rate: 17500,
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
    rate: 17500,
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
    rate: 17500,
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
    rate: 17500,
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
    paymentNote: "ENND I, LLC (or Living Trust) assigned into entity via operating agreement or side letter. No cash floor established yet.",
    rate: null,
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
    paymentNote: "ENND I, LLC (or Living Trust) assigned into entity via operating agreement or side letter. No cash floor established yet.",
    rate: null,
    engagementMonths: null,
    ipAssigned: false,
    nda: true,
    notes: "Considerable prior work. Assignment pending formalization.",
  },
];

// ─── SOW FIELD ARCHITECTURE ───────────────────────────────────
// These are the fields required to generate an SOW.
// P003 owns the schema. Generation happens in each project's context.
export const SOW_FIELDS = [
  { field: "client",           source: "PROJECTS.client",          required: true,  note: "Full legal name of counterparty" },
  { field: "project",          source: "PROJECTS.project",         required: true,  note: "Project name as referenced in agreement" },
  { field: "entity",           source: "ENTITY.name",              required: true,  note: "ENND I, LLC" },
  { field: "scope",            source: "Project context",          required: true,  note: "Defined in each project — not stored in P003" },
  { field: "rate",             source: "PROJECTS.rate",            required: true,  note: "Monthly retainer or equity structure" },
  { field: "engagementLength", source: "PROJECTS.engagementMonths",required: true,  note: "3, 6, 9, or 12 months" },
  { field: "startDate",        source: "Agreed at signing",        required: true,  note: "Calendar date" },
  { field: "killFee",          source: "PRICING.killFee",          required: true,  note: "33% of remaining. 5 business days." },
  { field: "ipAssignment",     source: "PROJECTS.ipAssigned",      required: true,  note: "Assigned if full rate paid. Not otherwise." },
  { field: "nda",              source: "PROJECTS.nda",             required: true,  note: "Standard practice. Attached as exhibit." },
  { field: "paymentTerms",     source: "PRICING.paymentTerms",     required: true,  note: "Net 15. First month upfront." },
  { field: "tePolicy",         source: "TRAVEL.teNote",            required: true,  note: "T&E billed separately at cost." },
  { field: "exclusivity",      source: "ENTITY.exclusivity",       required: false, note: "None. Confidentiality protected." },
];
