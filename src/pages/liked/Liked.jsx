import { ContentSidebar, Drawer, HorizontalCard } from "../../components";

export function Liked() {
  return (
    <main className="flex page-container">
    <Drawer />
    <div className="flex w-100pc">
      <ContentSidebar pageTitle={"Liked Videos"} />
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
