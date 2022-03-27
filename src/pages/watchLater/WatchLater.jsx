import "./WatchLater.css";
import { ContentSidebar, Drawer, HorizontalCard } from "../../components";

export function WatchLater() {
  return (
    <main className="flex page-container">
    <Drawer />
    <div className="flex w-100pc">
      <ContentSidebar pageTitle={"Watch Later"} />
      <div className="flex flex-column h-card-container">
          <HorizontalCard />
          <HorizontalCard />
          <HorizontalCard />
          <HorizontalCard />
          <HorizontalCard />
          <HorizontalCard />
          <HorizontalCard />

      </div>
    </div>
    </main>
  );
}
