// P003 — Practice Actions
// Open workstreams, decisions, and tasks across the business.
// Priority-ordered. Status-filtered. No category grouping.

export const ACTION_STATUSES = [
  { id: "blocked",    label: "Blocked",     color: "#f87171", desc: "Waiting on external dependency." },
  { id: "open",       label: "Open",        color: "#D4A853", desc: "Ready to work, not started." },
  { id: "inProgress", label: "In Progress", color: "#818CF8", desc: "Actively being worked." },
  { id: "review",     label: "Review",      color: "#fb923c", desc: "Done, needs validation." },
  { id: "complete",   label: "Complete",    color: "#4ade80", desc: "Done." },
];

export const ACTION_CATEGORIES = [
  { id: "entity",    label: "Entity & Legal" },
  { id: "capital",   label: "Capital & Trust" },
  { id: "brand",     label: "Brand & Presence" },
  { id: "pipeline",  label: "Pipeline & SOW" },
  { id: "ops",       label: "Operations" },
];

// Priority: lower number = do it sooner
// 1 = urgent/next, 2 = this week, 3 = this month, 4 = someday, 9 = complete
export const ACTIONS = [
  // ── PRIORITY 1: NOW
  {
    id: "A040", priority: 1, category: "ops",
    title: "Generate $20k gross ASAP",
    status: "open", dependency: "Pipeline conversion",
    notes: "Immediate priority. Offset operating costs + GS loan payoff. D1\u2013D2 slots need to fill.",
    projects: ["P062", "P300", "P369"],
  },
  {
    id: "A011", priority: 1, category: "capital",
    title: "Pay off Goldman Sachs loan",
    status: "open", dependency: "Income",
    notes: "~$25k. Needs to come from D1\u2013D2 consulting revenue.",
    projects: [],
  },
  {
    id: "A032", priority: 1, category: "pipeline",
    title: "Draft outreach notes for essay distribution",
    status: "open", dependency: null,
    notes: "Tiered: friends \u2192 former colleagues \u2192 business associates \u2192 VCs \u2192 capital allocators. Each note tailored per relationship.",
    projects: [],
  },
  {
    id: "A060", priority: 1, category: "brand",
    title: "Set up Google OAuth for P003",
    status: "open", dependency: null,
    notes: "Create OAuth 2.0 Client ID in Google Cloud Console. Add authorized origins: niketdesai.github.io, ennd.co. Drop client ID into P003 config.js. Restricts access to @ennd.co accounts only.",
    projects: ["P003"],
  },

  // ── PRIORITY 2: THIS WEEK
  {
    id: "A061", priority: 2, category: "brand",
    title: "Publish On Hospitality (in San Francisco)",
    status: "inProgress", dependency: null,
    notes: "Third essay in NND D5 pipeline. Hospitality vertical. Goes in Thinking section on ennd.co with vermilion underline. Not a project card — writing only.",
    projects: ["P902"],
  },
  {
    id: "A001", priority: 2, category: "entity",
    title: "Resolve OPV equity holding entity",
    status: "blocked", dependency: "Turner / Goldman Sachs",
    notes: "Hold in Desfam Long Living Trust. Check OPV operating agreement for permitted transferee language, add trust as permitted transferee, execute assignment, update agreement.",
    projects: ["P057"],
  },
  {
    id: "A002", priority: 2, category: "entity",
    title: "Resolve GFS equity holding entity",
    status: "blocked", dependency: "Turner / Goldman Sachs",
    notes: "Same structure as OPV \u2014 Desfam Long Living Trust. Handle alongside A001.",
    projects: ["P500"],
  },
  {
    id: "A058", priority: 2, category: "ops",
    title: "Mercury banking for ENND",
    status: "open", dependency: null,
    notes: "Free. No monthly fees. mercury.com/signup with ENND I, LLC EIN. Currently using Ally sub-account.",
    projects: [],
  },

  // ── PRIORITY 3: THIS MONTH
  {
    id: "A062", priority: 3, category: "brand",
    title: "Publish SFCGJ Report: Sirens and Alerts",
    status: "open", dependency: "SFCGJ publication schedule — May 2026",
    notes: "Two reports (Sirens + Digital Alerts) under one project. Niket served on the SF Civil Grand Jury 2025–26. Add project card to ennd.co after public release.",
    projects: ["P903"],
  },
  {
    id: "A063", priority: 3, category: "brand",
    title: "Publish SFCGJ Report: County Jails",
    status: "open", dependency: "SFCGJ publication schedule — May 2026",
    notes: "Niket served on the SF Civil Grand Jury 2025–26. Add project card to ennd.co after public release.",
    projects: ["P904"],
  },
  {
    id: "A004", priority: 3, category: "entity",
    title: "Formalize OPV assignment agreement",
    status: "open", dependency: "A001",
    notes: "10\u201315% via operating agreement or side letter. Entity decision must resolve first.",
    projects: ["P057"],
  },
  {
    id: "A005", priority: 3, category: "entity",
    title: "Formalize GFS assignment agreement",
    status: "open", dependency: "A002",
    notes: "10\u201315% via operating agreement or side letter. Entity decision must resolve first.",
    projects: ["P500"],
  },
  {
    id: "A010", priority: 3, category: "capital",
    title: "Set up Desfam Longer Irrevocable Trust",
    status: "blocked", dependency: "Turner / Goldman Sachs",
    notes: "Gets own EIN, Form 1041, GS account. Compressed brackets hit 37% at ~$15,650. Structure distributions to push income to beneficiaries. Primary purpose: creditor protection + estate tax reduction.",
    projects: [],
  },
  {
    id: "A056", priority: 3, category: "brand",
    title: "Rebuild opavino.com",
    status: "open", dependency: null,
    notes: "Current site needs full rebuild. Opavino is parent to Lillie Coit\u2019s, HITW Coffee, Pushback Wines.",
    projects: ["P057"],
  },
  {
    id: "A059", priority: 3, category: "brand",
    title: "Password hardening for project sites",
    status: "open", dependency: null,
    notes: "Google Auth gate built for P003. Roll out to other project sites or use server-side .htpasswd on Dreamhost.",
    projects: [],
  },

  // ── PRIORITY 4: SOMEDAY
  {
    id: "A003", priority: 4, category: "entity",
    title: "Incorporate ENND II",
    status: "open", dependency: null,
    notes: "IP/project studio. Separate from ENND I for clean exits. Get serious when income arrives.",
    projects: [],
  },

  // ── COMPLETE
  {
    id: "A055", priority: 9, category: "brand",
    title: "Build and deploy ennd.co",
    status: "complete", dependency: null,
    notes: "LIVE at ennd.co. Dreamhost + GitHub Actions. v0.2.4-260402.",
    projects: [],
  },
  {
    id: "A050", priority: 9, category: "brand",
    title: "Set up inquiries@ennd.co email",
    status: "complete", dependency: null,
    notes: "Collaborative inbox group. Aliases: yo@, hi@, hello@. Verified working.",
    projects: [],
  },
  {
    id: "A051", priority: 9, category: "ops",
    title: "Migrate pad.co Workspace to ennd.co",
    status: "complete", dependency: null,
    notes: "ennd.co is primary domain on Google Workspace.",
    projects: [],
  },
  {
    id: "A052", priority: 9, category: "brand",
    title: "pad.co \u2192 ennd.co redirect",
    status: "complete", dependency: null,
    notes: "301 permanent redirect via Namecheap. Wildcard enabled.",
    projects: [],
  },
  {
    id: "A053", priority: 9, category: "brand",
    title: "Delete Crunchbase profile",
    status: "complete", dependency: null,
    notes: "Submitted for deletion via privacy request form. Processing.",
    projects: [],
  },
  {
    id: "A054", priority: 9, category: "brand",
    title: "Delete AngelList profile",
    status: "complete", dependency: null,
    notes: "Profile deleted. Search cache will clear as Google recrawls.",
    projects: [],
  },
  {
    id: "A020", priority: 9, category: "brand",
    title: "Activate ennd.co domain",
    status: "complete", dependency: null,
    notes: "Live. DNS on Dreamhost, MX on Google, DKIM verified.",
    projects: [],
  },
  {
    id: "A021", priority: 9, category: "brand",
    title: "Rebuild niket.com",
    status: "complete", dependency: null,
    notes: "Done.",
    projects: [],
  },
  {
    id: "A022", priority: 9, category: "brand",
    title: "Ship On AI and Administration",
    status: "complete", dependency: null,
    notes: "Published at niket.com/ai.",
    projects: [],
  },
  {
    id: "A023", priority: 9, category: "brand",
    title: "Re-enter social platforms",
    status: "complete", dependency: null,
    notes: "X and LinkedIn active.",
    projects: [],
  },
  {
    id: "A030", priority: 9, category: "pipeline",
    title: "Define standard SOW terms",
    status: "complete", dependency: null,
    notes: "Kill fee, T&E, IP, equity display/clawback. In P003.",
    projects: [],
  },
  {
    id: "A031", priority: 9, category: "pipeline",
    title: "Update P300 SOW with standard terms",
    status: "complete", dependency: null,
    notes: "Done.",
    projects: ["P300"],
  },
];
