// P003 — ENND I, LLC Practice Data
// Internal. Never shown verbatim to clients.

export const PRACTICE = {
  entity: "ENND I, LLC",
  dba: "All Star Travel",
  ein: true,
  domain: "ennd.co",
  domainStatus: "inactive",
  verticals: ["Travel", "Technology", "Finance"],
  rate: {
    list: 20000,
    floor: 7500,
    floorNote: "Minimum cash per month. Balance convertible to equity/options at Niket's election.",
    currency: "USD",
    unit: "day",
    excludes: "T&E, travel, incurred expenses and fees — always passed through separately.",
  },
  capacity: {
    daysAvailable: 5,
    daysOfferable: 4,
    daysReserved: 1,
    reservedFor: "D5 — NND personal / IP / writing",
  },
};

// ─── PRICING MATRIX ───────────────────────────────────────────────
// Monthly cash rate (excl. T&E). Internal only.
// Rows: days/week. Cols: engagement length (months).
// Floor: $7,500/month cash. Balance swappable to equity.

export const MATRIX = {
  days: [1, 2, 3, 4],
  months: [3, 6, 9, 12],
  // [days_index][months_index]
  rates: [
    [15000, 12500, 11000, 10000],  // 1 day/week
    [27000, 23000, 20000, 18000],  // 2 days/week
    [38000, 32000, 28000, 25000],  // 3 days/week
    [48000, 40000, 35000, 30000],  // 4 days/week
  ],
  listRate: 20000,       // single day, no commitment
  floor: 7500,           // minimum cash, non-negotiable
  discountNote: "Duration is the only lever. No single-day discounts. No relationship discounts.",
  equityNote: "Anything above $7,500/month can be structured as equity/options at Niket's election and on his terms.",
};

// ─── TALK TRACK ───────────────────────────────────────────────────
// Organized by conversational moment. Internal reference.

export const TALK_TRACK = [
  {
    id: "open",
    moment: "Introducing the Practice",
    context: "Someone asks what you do, or you need to frame before scope/price.",
    lines: [
      "ENND is my consulting practice. I work across travel, technology, and finance — usually with founders and operators at an inflection point who need someone who's been in the room, or can get them into one.",
      "The common thread is leverage. I tend to show up where the value of getting it right is very high.",
    ],
  },
  {
    id: "what_you_sell",
    moment: "When They Try to Scope You Like a Contractor",
    context: "They're asking for deliverables, timelines, hourly rates.",
    lines: [
      "What you're engaging isn't hours — it's access. Access to how I think, who I know, and the judgment I've built across a few industries over a long time.",
      "The people who get the most out of working with me come in with a real problem, give me real context, and let me work. The ROI tends to be disproportionate to the time spent.",
    ],
  },
  {
    id: "pricing_state",
    moment: "Stating the Rate",
    context: "Say it once. Don't soften. Don't pre-explain. Let them respond.",
    lines: [
      "My day rate is $20,000 — that's for a full engagement day, plus expenses. For ongoing work, we'd structure it as a retainer based on days per week and how long we're working together.",
    ],
    rule: "State it. Stop talking. The pause is theirs.",
  },
  {
    id: "pushback_founder",
    moment: "Founder / CEO Pushes Back",
    context: "Usually a value question framed as a budget problem.",
    lines: [
      "I hear you on the budget side. The decisions you're bringing me in for — if you get them right, they're worth multiples of what you'd pay me. If you get them wrong, it's not the consulting fee you're worried about.",
      "I'm not cheap. I'm also not a cost. I'm a force multiplier on calls that already matter.",
    ],
  },
  {
    id: "pushback_investor",
    moment: "Investor / Family Office Pushes Back",
    context: "They're used to paying for access. Remind them what access means here.",
    lines: [
      "What you're paying for is two things: how I think about a problem, and who picks up when I call. Both took a long time to build and neither is replicable with a larger team or a faster timeline.",
      "The rate reflects that. I've been deliberate about it.",
    ],
  },
  {
    id: "pushback_operator",
    moment: "Operator / COO Pushes Back",
    context: "Practical people. They want to know what they get.",
    lines: [
      "What you're buying is speed and clarity. I've probably seen a version of what you're dealing with — and I can help you get to the right answer faster, and avoid the ones that look right but aren't.",
      "At $20,000 a day, if we save you a bad hire, a bad partnership, or six months of drift — that math works in your favor pretty quickly.",
    ],
  },
  {
    id: "equity_swap",
    moment: "The Equity Swap Conversation",
    context: "Client can't hit rate in cash. Opportunity is real.",
    lines: [
      "There are situations where I'll structure part of the engagement as equity instead of cash. I've done that with companies I believe in long-term.",
      "That's not a discount — it's a different denomination. We start with what the cash value would be, agree on that, and figure out what portion makes sense to take in equity at the agreed valuation. Same rate. Different form.",
    ],
    rule: "Minimum $7,500/month cash regardless. Equity is at Niket's election, on his terms.",
  },
  {
    id: "discount_ask",
    moment: "They Ask Directly for a Discount",
    context: "The moment. Kind. Direct. No opening left.",
    lines: [
      "I don't have flexibility on the rate — I've learned the hard way that discounted engagements don't serve either side well. What I can do is be thoughtful about scope.",
      "If a full engagement day is more than you need right now, we can talk about what a more focused piece of work looks like. But the rate stays the same. What changes is how much of it you're buying.",
    ],
  },
  {
    id: "retainer_structure",
    moment: "Structuring a Retainer",
    context: "They want ongoing work. Guide them to commit on duration.",
    lines: [
      "For ongoing work, I can offer one to four days per week as a retainer. The rate depends on how many days you need and how long we're locking in — the longer the commitment, the better the rate.",
      "Tell me what you're thinking in terms of duration. Are we talking 3 months, 6, 9, or 12? And what's your sense of how much of my time you'd actually need week to week?",
    ],
    rule: "Minimum 3 months. Maximum 12. Never sell more than 4 days/week.",
  },
  {
    id: "followup",
    moment: "The Follow-Up (when they've gone quiet)",
    context: "One note. No chase energy. Written like you have other things going on.",
    lines: [
      "Wanted to close the loop on our conversation. I'm moving into a few new engagements this month and wanted to check in before my bandwidth narrows. If the timing is right, let's find 30 minutes. If it's not the right moment, no issue — just let me know and we can revisit when the situation changes.",
    ],
    rule: "No re-pitching. No re-explaining the rate. One note, then stop.",
  },
  {
    id: "close",
    moment: "The Close",
    context: "Simple. No oversell.",
    lines: [
      "Here's what I'd suggest: tell me what you're working on. I'll tell you whether I think I can genuinely help, and what that looks like. If it makes sense, we'll structure something. If it doesn't, I'll tell you that too.",
    ],
  },
  {
    id: "engagement_end",
    moment: "Setting the End Date",
    context: "Built in from day one. Engagements end when the work ends.",
    lines: [
      "We're going to work together for [3/6/9/12] months. At the end of that period we'll assess what's happened and whether it makes sense to continue. If the work is done, we're done — and that's a win. If you need more, we'll talk. But we're not building this to run forever.",
    ],
  },
];

// ─── INTERNAL RULES ───────────────────────────────────────────────
export const RULES = [
  { rule: "The floor is $7,500/month cash. This number never moves for silence, slowness, or relationships." },
  { rule: "Never sell more than 4 days/week. The fifth day is yours." },
  { rule: "Duration is the only discount lever. No relationship discounts. No single-day discounts." },
  { rule: "The equity swap is at your election. It is not a path clients propose — it's one you offer when you believe in the company." },
  { rule: "Discounted engagements produce resentment. Resentment produces bad work. Bad work costs more than the discount saved." },
  { rule: "Minimum engagement: 3 months. Maximum: 12 months. Engagements end where the work ends." },
  { rule: "T&E is always passed through. It is never absorbed into the rate." },
];

// ─── CLIENTS & PIPELINE ───────────────────────────────────────────
export const CLIENTS = [
  {
    name: "All Star Travel",
    type: "Active",
    vertical: "Travel",
    structure: "DBA",
    note: "Core operating revenue today. Travel client base.",
    status: "active",
  },
  {
    name: "Future Corporation",
    type: "Lead",
    vertical: "Technology",
    structure: "Consulting",
    note: "Live lead. Rate conversation pending.",
    status: "lead",
  },
  {
    name: "Global Regenesis Inc.",
    type: "Active",
    vertical: "Finance",
    structure: "Consulting",
    note: "Active engagement.",
    status: "active",
  },
  {
    name: "Stakeholder Labs / P369",
    type: "Lead",
    vertical: "Technology",
    structure: "Consulting",
    note: "Financial Avatar project. Live lead.",
    status: "lead",
  },
  {
    name: "Laurel",
    type: "Potential",
    vertical: "Technology",
    structure: "Advisory",
    note: "Current advisor. Potential paid consulting relationship at Series D.",
    status: "potential",
  },
];

// ─── ANNUITY TARGETS ──────────────────────────────────────────────
export const ANNUITIES = [
  {
    name: "Opavino (OPV)",
    target: "10–15% equity assignment",
    status: "Pending",
    note: "Pre-revenue. D4 work. Long-term distribution annuity once cashflowing.",
  },
  {
    name: "General Fund Systems (GFS)",
    target: "10–15% equity assignment",
    status: "Pending",
    note: "Pre-revenue. D4 work. Built considerably. Distribution annuity target.",
  },
  {
    name: "Laurel (LRL)",
    target: "Equity stake held",
    status: "Series D",
    note: "Primary generational asset. Series D summer 2026. Potential partial liquidity.",
  },
];
