// P003 — ENND I, LLC Practice Data
// Internal. Never shown verbatim to clients.

export const PRACTICE = {
  entity: "ENND I, LLC",
  dba: "All Star Travel",
  ein: true,
  domain: "ennd.co",
  domainStatus: "inactive — needs activation",
  verticals: ["Travel", "Technology", "Finance"],
  rate: {
    list: 20000,
    floor: 7500,
    floorNote: "Minimum cash per month. Balance convertible to equity/options at Niket's election.",
    excludes: "T&E, travel, and all incurred expenses — always passed through separately.",
  },
  capacity: {
    daysAvailable: 5,
    daysOfferable: 4,
    daysReserved: 1,
    reservedFor: "D5 — NND personal / IP / writing",
  },
  overview: [
    "ENND I, LLC is the primary consulting entity. It houses all paid engagements, client relationships, and operating expenses.",
    "Work spans three verticals: Travel (via DBA All Star Travel), Technology, and Finance. Engagements are structured as retainers — priced by days per week and duration.",
    "The entity also holds equity interests in portfolio companies (Opavino, General Fund Systems, Laurel) through assignment agreements, structured as long-term distribution annuities.",
  ],
};

// ─── PRICING MATRIX ───────────────────────────────────────────────
export const MATRIX = {
  days: [1, 2, 3, 4],
  months: [3, 6, 9, 12],
  rates: [
    [15000, 12500, 11000, 10000],
    [27000, 23000, 20000, 18000],
    [38000, 32000, 28000, 25000],
    [48000, 40000, 35000, 30000],
  ],
  listRate: 20000,
  floor: 7500,
  notes: [
    "Duration is the only discount lever — no relationship or single-day discounts.",
    "Minimum cash floor: $7,500/month regardless of equity structure.",
    "Balance above floor convertible to equity or options at Niket's election, on his terms.",
    "T&E always passed through separately. Never absorbed into the rate.",
    "Minimum engagement: 3 months. Maximum: 12 months.",
    "Never more than 4 days/week sold. The fifth day is reserved.",
  ],
};

// ─── PROJECTS ─────────────────────────────────────────────────────
// Status flow: Lead → Negotiating → Signed → Active
// Projects, not clients — multiple projects per relationship possible.

export const PROJECTS = [
  {
    code: "P082",
    name: "All Star Travel",
    client: "All Star Travel",
    vertical: "Travel",
    status: "Active",
    structure: "DBA operations",
    note: "Core operating revenue. Active travel client base under ENND I DBA.",
    payment: "Cash retainer",
  },
  {
    code: "P062",
    name: "Future Corp",
    client: "Future Corporation",
    vertical: "Technology",
    status: "Lead",
    structure: "Consulting retainer",
    note: "Live lead. Rate conversation pending.",
    payment: "Cash retainer",
  },
  {
    code: "P300",
    name: "Global Regenesis",
    client: "Global Regenesis Inc.",
    vertical: "Finance",
    status: "Lead",
    structure: "Consulting retainer",
    note: "Live lead.",
    payment: "Cash retainer",
  },
  {
    code: "P369",
    name: "Stakeholder Labs",
    client: "Stakeholder Labs",
    vertical: "Technology",
    status: "Lead",
    structure: "Consulting — Financial Avatar project",
    note: "P369 Financial Avatar. Live lead.",
    payment: "Cash retainer",
  },
  {
    code: "P042",
    name: "Laurel — Series D",
    client: "Laurel",
    vertical: "Technology",
    status: "Lead",
    structure: "Advisory — Series D",
    note: "Series D targeting >$1B valuation, summer 2026. Primary generational asset.",
    payment: "Cash retainer",
  },
  {
    code: "P057",
    name: "Opavino",
    client: "Opavino",
    vertical: "Hospitality",
    status: "Negotiating",
    structure: "Equity assignment",
    note: "15% equity assignment in negotiation. Pre-revenue. D4 annuity target once cashflowing.",
    payment: "15% equity assignment",
  },
  {
    code: "P500",
    name: "General Fund Systems",
    client: "General Fund Systems",
    vertical: "Finance",
    status: "Negotiating",
    structure: "Equity assignment",
    note: "15% equity assignment in negotiation. Pre-revenue. D4 annuity target once cashflowing.",
    payment: "15% equity assignment",
  },
];

// ─── TALK TRACK ───────────────────────────────────────────────────
export const TALK_TRACK = [
  {
    id: "open",
    moment: "Introducing the Practice",
    context: "Someone asks what you do, or you need to frame before scope or price.",
    lines: [
      "ENND is my consulting practice. I work across travel, technology, and finance — usually with founders and operators at an inflection point who need someone who's been in the room, or can get them into one.",
      "The common thread is leverage. I tend to show up where the value of getting it right is very high.",
    ],
  },
  {
    id: "what_you_sell",
    moment: "When They Try to Scope You Like a Contractor",
    context: "They're asking for deliverables, timelines, or hourly rates.",
    lines: [
      "What you're engaging isn't hours — it's access. Access to how I think, who I know, and the judgment I've built across a few industries over a long time.",
      "The people who get the most out of working with me come in with a real problem, give me real context, and let me work. The ROI tends to be disproportionate to the time spent.",
    ],
  },
  {
    id: "pricing_state",
    moment: "Stating the Rate",
    context: "Say it once. Don't soften it. Don't pre-explain. Let them respond.",
    lines: [
      "My day rate is $20,000 — that's for a full engagement day, plus expenses. For ongoing work, we'd structure it as a retainer based on days per week and how long we're working together.",
    ],
    rule: "State it. Stop talking. The pause is theirs to fill.",
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
    context: "Client can't hit full rate in cash. Opportunity is real.",
    lines: [
      "There are situations where I'll structure part of the engagement as equity instead of cash. I've done that with companies I believe in long-term.",
      "That's not a discount — it's a different denomination. We start with what the cash value would be, agree on that, and figure out what portion makes sense to take in equity at the agreed valuation. Same rate. Different form.",
    ],
    rule: "Minimum $7,500/month cash regardless. Equity is at Niket's election, on his terms — not a path clients propose.",
  },
  {
    id: "discount_ask",
    moment: "They Ask Directly for a Discount",
    context: "Kind. Direct. No opening left.",
    lines: [
      "I don't have flexibility on the rate — I've learned the hard way that discounted engagements don't serve either side well. What I can do is be thoughtful about scope.",
      "If a full engagement day is more than you need right now, we can talk about what a more focused piece of work looks like. But the rate stays the same. What changes is how much of it you're buying.",
    ],
  },
  {
    id: "retainer_structure",
    moment: "Structuring a Retainer",
    context: "They want ongoing work. Guide them toward committing on duration.",
    lines: [
      "For ongoing work, I can offer one to four days per week as a retainer. The rate depends on how many days you need and how long we're locking in — the longer the commitment, the better the rate.",
      "Tell me what you're thinking in terms of duration. Are we talking 3 months, 6, 9, or 12? And what's your sense of how much of my time you'd actually need week to week?",
    ],
    rule: "Minimum 3 months. Maximum 12 months. Never sell more than 4 days/week.",
  },
  {
    id: "followup",
    moment: "The Follow-Up (When They've Gone Quiet)",
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
