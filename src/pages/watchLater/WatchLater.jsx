import "./WatchLater.css";
import { ContentSidebar, Drawer } from "../../components";

export function WatchLater() {
  return (
    <main className="flex page-container">
      <Drawer />
      <div className="flex w-100pc">
        <ContentSidebar pageTitle={"Watch Later"} />
        <div className="flex flex-column h-card-container"></div>
      </div>
    </main>
  );
}
