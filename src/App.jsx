import { useState } from "react";
import Shell from "./layout/Shell.jsx";
import OverviewView from "./views/OverviewView.jsx";
import ProjectsView from "./views/ProjectsView.jsx";
import TalkTrackView from "./views/TalkTrackView.jsx";

const TABS = [
  { id: "overview",  label: "Overview",    component: OverviewView },
  { id: "projects",  label: "Projects",    component: ProjectsView },
  { id: "track",     label: "Talk Track",  component: TalkTrackView },
];

export default function App({ arriving }) {
  const [activeTab, setActiveTab] = useState(TABS[0].id);
  const ActiveView = TABS.find(t => t.id === activeTab)?.component || OverviewView;

  return (
    <Shell tabs={TABS} activeTab={activeTab} onTabChange={setActiveTab} arriving={arriving}>
      <ActiveView />
    </Shell>
  );
}
