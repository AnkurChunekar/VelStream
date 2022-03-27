import { ContentSidebar, Drawer, HorizontalCard } from "../../components";

export function History() {
  return (
    <main className="flex page-container">
      <Drawer />
      <div className="flex w-100pc">
        <ContentSidebar pageTitle={"History"} />
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
