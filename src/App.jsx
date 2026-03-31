import { useState } from "react";
import { PROJECT } from "./config.js";
import Shell from "./layout/Shell.jsx";
import MatrixView from "./views/MatrixView.jsx";
import TalkTrackView from "./views/TalkTrackView.jsx";
import ClientsView from "./views/ClientsView.jsx";

const TABS = [
  { id: "matrix",    label: "Pricing",    component: MatrixView },
  { id: "track",     label: "Talk Track", component: TalkTrackView },
  { id: "clients",   label: "Clients",    component: ClientsView },
];

export default function App({ arriving }) {
  const [activeTab, setActiveTab] = useState(TABS[0].id);
  const ActiveView = TABS.find(t => t.id === activeTab)?.component || MatrixView;

  return (
    <Shell tabs={TABS} activeTab={activeTab} onTabChange={setActiveTab} arriving={arriving}>
      <ActiveView />
    </Shell>
  );
}
