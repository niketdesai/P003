// P003 — Practice Data
// Source of truth. Other projects pull from this.

// ─── BRAND ───────────────────────────────────────────────────
export const BRAND = {
  name: "Niket Desai",
  mark: "/N",
  site: "niket.com",
  entity: "ENND I, LLC",
  verticals: ["Travel", "Technology", "Finance", "Hospitality"],
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
  nda: "A mutual non-disclosure agreement will govern the exchange of proprietary information throughout this engagement.",
  ndaInternal: "Standard on all engagements. Attached as exhibit in Tier 3 (executed) only.",
  exclusivity: "This is a non-exclusive engagement. The advisor maintains a limited number of concurrent advisory relationships. Confidentiality is contractual; exclusivity is not.",
  ipRule: "Work product assigned to client when engagement rate is paid in full \u2014 retainer, equity, or deferred. Retained until whole.",
  tePolicy: "Travel and expenses billed separately at cost. Never included in retainer.",
  paymentTerms: "Net 15. First month upfront on signing.",
  upfrontDiscount: "10% off total contract if full term paid upfront.",
};

// ─── TRAVEL POLICY ───────────────────────────────────────────
// Internal preferences — NOT surfaced directly in client-facing SOWs.
// SOW language should be: "Travel arrangements reflect the nature and
// duration of the trip. Billed separately at cost."
export const TRAVEL = {
  sowLanguage: "Travel arrangements reflect the nature and duration of the trip. Billed separately at cost.",
  // Internal operational preferences (do not surface in SOW):
  longHaul: { threshold: "2,000+ miles", class: "Business" },
  shortHaul: [
    { window: "AM / night flights", class: "Business" },
    { window: "Midday flights", class: "Economy (travel day)" },
  ],
  hotel: "Gym on-site required, or walkable \u2014 unless selected by Niket.",
};

// ─── PRICING ─────────────────────────────────────────────────
// Two-axis U-curve:
//   Duration: 6mo is the sweet spot. 3 and 12 carry premiums. <3 is list.
//   Density:  2d/wk is the sweet spot (+5%). 1d and 3d baseline. 4d premium (−5%).
export const PRICING = {
  listRate: 17500,         // per day per month, no commitment
  floorMonthly: 7500,      // absolute minimum retainer/month
  currency: "USD",
  unit: "day",
  maxDays: 4,

  // Column headers
  engagementTiers: ["<3 mo", "3 mo", "6 mo", "9 mo", "12 mo"],
  daysPerWeek: [1, 2, 3, 4],

  // Discount percentages [days_index][tier_index]
  // Negative = premium (client pays MORE than list)
  discounts: [
    [0,   10,  30,  25,  20],    // 1d/wk — baseline
    [5,   15,  35,  30,  25],    // 2d/wk — sweet spot (+5)
    [0,   10,  30,  25,  20],    // 3d/wk — same as 1d
    [-5,   5,  25,  20,  15],    // 4d/wk — premium (−5)
  ],

  // Monthly retainer rates [days_index][tier_index]
  // Derived from listRate × days × (1 - discount), rounded down to $500
  rates: [
    [17500, 15500, 12000, 13000, 14000],    // 1d/wk
    [33000, 29500, 22500, 24500, 26000],    // 2d/wk
    [52500, 47000, 36500, 39000, 42000],    // 3d/wk
    [73500, 66500, 52500, 56000, 59500],    // 4d/wk
  ],

  // Sweet spot indices: 2d/wk (row 1) × 6mo (col 2)
  sweetSpot: { di: 1, ti: 2 },

  killFee: {
    internalLabel: "Kill Fee",
    clientLabel: "Early Exit",
    model: "33% of remaining contract value or one additional month \u2014 whichever is higher.",
    rate: 0.33,
    rateDisplay: "33%",
    terms: "Payable within 5 business days of written notice.",
    floor: "One additional month retainer, minimum.",
  },

  paymentTerms: "Net 15. First month upfront on signing.",
  upfrontDiscount: "10% off total contract if full term paid upfront.",

  // ── SOW TIERS ──────────────────────────────────────────────
  sowTiers: {
    tier1_public: {
      name: "Public (ennd.co)",
      purpose: "Self-qualification. Signal premium, structured, accessible.",
      shows: [
        "Two-axis model (duration × density) — structure, not numbers",
        "Starting range anchored where you want to be hired",
        "2–4 days/week, 3–12 month terms, longer = lower rate",
        "Equity/options at principal's election",
        "T&E always separate",
      ],
      hides: "Matrix, floor logic, sweet spot, kill fee, discount mechanics",
      anchor: "Matrix minimum is $12,000/mo (1d/wk × 6mo). Never reference $7,500 externally.",
    },
    tier2_proposal: {
      name: "Proposal SOW (qualified leads)",
      purpose: "Close. Full matrix, specific recommendation, transparent math.",
      format: "P300 is the template. Matrix + recommendation + scope + terms.",
    },
    tier3_executed: {
      name: "Executed SOW (contract)",
      purpose: "Legal protection. Tier 2 + kill fee formula, IP, equity mechanics, NDA, termination.",
    },
  },

  equityDisplay: {
    rule: "Always display equity component as $0 when none is included.",
    rationale: "Makes the discount visible — client sees below-list pricing AND no equity.",
    format: "Equity / Options: $0",
  },

  equityAssignment: {
    rule: "Equity compensation is granted directly to a designated entity, not ENND I.",
    default: "Desfam Long Living Trust (or designated assignee).",
    rationale: "Consulting liability in ENND I should never touch equity positions. Equity goes to the trust from day one.",
    sowLanguage: "Equity compensation shall be granted to [Desfam Long Living Trust] or its designated assignee.",
    requirement: "Client operating agreement must include permitted transferee language. Turner to verify per engagement.",
  },

  equityVesting: {
    schedule: "Monthly vesting.",
    cliff: "1-month cliff on multi-month engagements. Nothing vests in month 1. Monthly vesting begins month 2.",
    example: "6-month engagement: 0% month 1, then 1/5 per month (months 2–6). Fully vested at completion.",
    rationale: "Protects against deals that go sideways immediately. Fair from almost the start.",
  },

  equityValuation: {
    rule: "Equity is earned at list rate, not the floor or discounted rate.",
    conversion: "Equity value per month = list rate ($17,500/day/month equivalent). Specific valuation methodology (last priced round, negotiated, etc.) specified per deal.",
  },

  equityTermination: {
    cleanKill: {
      vestedEquity: "You keep. It's earned.",
      unvestedEquity: "Returns to client.",
      retainerKillFee: "33% of remaining contract value, or 1 month retainer — whichever is higher.",
      equityKillFee: "33% of unvested equity value at list rate, paid in retainer.",
      total: "Retainer kill fee + equity conversion = total payout.",
    },
    clientBreach: {
      vestedEquity: "You keep.",
      unvestedEquity: "Returns to client.",
      retainerKillFee: "33% of remaining contract value, or 1 month retainer — whichever is higher.",
      equityKillFee: "33% of unvested equity value at list rate, paid in retainer.",
      note: "Same financial mechanics as clean kill, plus: breach is punitive — vested equity retained AND retainer conversion on unvested. Client pays for both.",
    },
    example: "6-month deal, $15k/mo retainer + equity at $17.5k/mo list. Client exits at month 3. Vested equity (months 2–3): kept. Retainer kill: max(33% × $15k × 3, $15k) = $14,850. Equity conversion: 33% × (3/5 × $17.5k × 6) = $20,790. Total payout: $35,640.",
  },
};

// ─── SOW PROCESS ────────────────────────────────────────────
// Codified workflow for creating, sending, and executing SOWs.
// Every new engagement follows this process. No exceptions.
export const SOW_PROCESS = {
  // ── STEP 1: SCOPE ──
  scope: {
    trigger: "Lead moves to 'Proposed' stage",
    actions: [
      "Define workstreams and deliverables with client",
      "Determine duration (3–12mo) and density (1–4d/wk)",
      "Look up pricing in matrix — identify recommended cell",
      "Determine if equity is part of the deal",
      "Confirm client entity name, signatory, and contact",
    ],
  },

  // ── STEP 2: BUILD PROPOSAL (TIER 2) ──
  proposal: {
    format: "Project site SOW tab — P300 is the template",
    required: [
      "Parties (advisor entity + client entity + signatories)",
      "Problem statement (why they need this)",
      "Scope (workstreams with descriptions)",
      "Deliverables (specific artifacts per workstream)",
      "Timeline (sequencing, dependencies, inputs required from client)",
      "Compensation — MUST include:",
      "  → Full pricing matrix (shows the universe)",
      "  → Recommended engagement highlighted",
      "  → List rate stated ($17,500/day/month)",
      "  → Discount shown explicitly (X% for Y duration at Z density)",
      "  → Payment options if applicable (standard, deferred, equity)",
      "  → Equity line always visible ($0 if none — makes discount visible)",
      "  → If equity option: full equity terms block (assignment, vesting, termination)",
      "Terms block (not 'Standard Terms' — drop 'Standard', implies boilerplate)",
      "Not in Scope (explicit exclusions, but note: individual project SOWs can pull items in when integral to engagement)",
      "Confidentiality footer (no signature block — signatures belong in Tier 3 executed agreement only)",
    ],
    standardTerms: [
      "Early Exit: 33% of remaining contract value or 1 month — whichever higher",
      "T&E: billed separately at cost, never in retainer",
      "IP: assigned to client when engagement rate is paid in full",
      "Collaboration: 11:00–16:00 PT for meetings and syncs",
      "Payment: Net 15. First month upfront on signing",
      "NDA: referenced in Tier 2 proposals; attached as exhibit in Tier 3 executed agreements only",
      "Availability: non-exclusive. Advisor maintains limited concurrent relationships. Confidentiality contractual; exclusivity not",
    ],
    equityBlock: {
      when: "Include whenever equity or deferred compensation is an option",
      required: [
        "Assignment: granted to advisor's designated entity (trust), not ENND I",
        "Vesting: monthly, 1-month cliff, nothing vests month 1",
        "Valuation: equity valued at list rate ($17,500/day/month equivalent)",
        "Clean termination: vested retained, unvested returns, 33% kill fee on cash + equity",
        "Client breach: vested retained AND 33% of unvested at list rate in cash (punitive)",
      ],
    },
    languageRules: [
      "Never call it 'cash floor' — use 'retainer' for external-facing language",
      "Never reference $7,500 — that is a conceptual exception, never on the matrix",
      "Matrix minimum is $12,000/mo (1d/wk × 6mo) — anchor above this publicly",
      "Accommodations for specific clients are noted as exceptions, not standards",
      "Frame longer commitments as earning a lower retainer, not receiving a discount from a punitive list rate",
      "Example: 'A 6-month commitment at 1 day per week earns a 30% reduction on the monthly retainer'",
      "Use 'retainer always applies' not 'cash component always applies'",
    ],
  },

  // ── STEP 3: SEND & NEGOTIATE ──
  negotiate: {
    actions: [
      "Share project site link (ennd.co/p/###) with client",
      "Walk through SOW on a call — don't just send it",
      "Track changes and counter-proposals",
      "Move project stage to 'Negotiating'",
    ],
  },

  // ── STEP 4: EXECUTE (TIER 3) ──
  execute: {
    format: "NND-branded PDF (future: nnd_style system skill)",
    interim: "Google Doc with ENND letterhead until PDF skill is built",
    actions: [
      "Finalize all terms from negotiation",
      "Generate executed SOW document (Tier 2 content + binding language)",
      "Add: kill fee formula with equity conversion mechanics",
      "Add: IP assignment clause",
      "Add: equity vesting schedule and clawback (if applicable)",
      "Add: NDA (reference or inline)",
      "Add: collaboration window, T&E specifics, exclusivity",
      "Add: termination mechanics (clean kill vs breach)",
      "Send for signature (Google Workspace eSignature or equivalent)",
      "Both parties sign → PDF with audit trail auto-generated",
      "Store signed PDF in Drive: ENND I / Clients / [Client] / SOWs /",
      "Send confirmation from nnd@ennd.co with signed copy attached",
      "Move project stage to 'Signed'",
    ],
    checklist: [
      "Entity name matches client's legal entity exactly",
      "Signatory has authority to bind the entity",
      "Equity assignment entity specified (trust, not ENND I)",
      "Kill fee covers both cash and equity components",
      "IP assignment is conditional on full payment",
      "NDA is attached or referenced",
      "First month payment amount and due date specified",
      "All accommodations noted as engagement-specific exceptions",
    ],
  },

  // ── STEP 5: POST-EXECUTION ──
  postExecution: {
    actions: [
      "Invoice first month immediately",
      "Set up recurring invoice schedule",
      "Update project stage to 'Active'",
      "Update project monthly value in P003 pipeline",
      "Confirm collaboration window and primary contacts",
    ],
  },

  // ── DOWNSTREAM PROPAGATION ──
  propagation: {
    note: "When SOW terms, language, or process change in P003, all active project SOWs must be audited for consistency. The 'Not in Scope' list is a default, not absolute — individual projects can pull items into scope when they are integral to the engagement (e.g., P300 includes domicile evaluation because it affects grant eligibility).",
    affected: [
      "P300 (Global Regenesis) — SOW tab",
      "Any future project SOWs",
      "ennd.co/engage (public pricing)",
      "Outreach message templates (essay distribution)",
    ],
  },
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
    recommended: null,
    ipAssigned: false,
    nda: false,
    notes: "Founded by Niket\u2019s mother (July 2). Ongoing operational support.",
  },
  {
    code: "P062",
    project: "Space Corp",
    client: "Future Corporation",
    stage: "lead",
    vertical: "Finance",
    payment: "Retainer",
    paymentNote: null,
    monthlyValue: 13000,
    recommended: { days: 1, tier: 3 },  // 1d/wk × 9mo
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
    monthlyValue: 12000,
    recommended: { days: 1, tier: 2 },  // 1d/wk × 6mo
    ipAssigned: null,
    nda: true,
    notes: "Seed fundraise process. Modeling and packaging as inputs.",
  },
  {
    code: "P369",
    project: "Cultural Retail Investor",
    client: "Stakeholder Labs",
    stage: "lead",
    vertical: "Technology",
    payment: "Retainer",
    paymentNote: null,
    monthlyValue: 12000,
    recommended: { days: 1, tier: 2 },  // 1d/wk × 6mo
    ipAssigned: null,
    nda: true,
    notes: "Financial Avatar project context.",
  },
  {
    code: "P042",
    project: "Series D",
    client: "Laurel",
    stage: "lead",
    vertical: "Finance",
    payment: "Retainer",
    paymentNote: "Current advisor relationship. Paid consulting TBD.",
    monthlyValue: 12000,
    recommended: { days: 1, tier: 2 },  // 1d/wk × 6mo
    ipAssigned: null,
    nda: true,
    notes: "Series D targeting >$1B. Summer 2026. Primary generational asset.",
  },
  {
    code: "P057",
    project: "Opavino",
    client: "Opavino",
    stage: "lead",
    vertical: "Hospitality",
    payment: "15% equity assignment",
    paymentNote: "Desfam Long Living Trust (pending assignment). Avoids probate, no tax event. Check operating agreement for permitted transferee language.",
    monthlyValue: 0,
    recommended: null,
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
    paymentNote: "Desfam Long Living Trust (pending assignment). Avoids probate, no tax event. Check operating agreement for permitted transferee language.",
    monthlyValue: 0,
    recommended: null,
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
  { field: "engagementLength", source: "PROJECTS.recommended",   required: true,  note: "Days/wk and duration tier from pricing matrix" },
  { field: "startDate",        source: "Agreed at signing",        required: true,  note: "Calendar date" },
  { field: "earlyExit",        source: "PRICING.killFee",          required: true,  note: "33% of remaining or 1 month \u2014 whichever is higher." },
  { field: "ipAssignment",     source: "TERMS.ipRule",             required: true,  note: "Assigned when engagement rate paid in full. Retained until whole." },
  { field: "nda",              source: "TERMS.nda",                required: true,  note: "Referenced in proposal (Tier 2). Attached as exhibit in executed (Tier 3) only." },
  { field: "paymentTerms",     source: "TERMS.paymentTerms",       required: true,  note: "Net 15. First month upfront." },
  { field: "tePolicy",         source: "TERMS.tePolicy",           required: true,  note: "T&E billed separately at cost." },
  { field: "availability",     source: "TERMS.exclusivity",        required: false, note: "Non-exclusive. Limited concurrent relationships. Confidentiality contractual." },
  { field: "collabWindow",     source: "TERMS.collaborationWindow",required: false, note: "11:00\u201316:00 PT" },
  { field: "travelPolicy",     source: "TRAVEL.sowLanguage",       required: false, note: "Arrangements reflect trip nature/duration. Billed at cost. (Internal preferences not surfaced.)" },
];
