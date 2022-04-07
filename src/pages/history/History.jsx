import { Fragment } from "react";
import { useHistory } from "../../context";
import { ContentSidebar, Drawer, HorizontalCard } from "../../components";

export function History() {
  const {
    historyState: { historyData },
  } = useHistory();

  return (
    <main className="flex page-container">
      <Drawer />
      <div className="flex w-100pc">
        <ContentSidebar
          pageTitle={"History"}
          sidebarBanner={
            historyData.length > 0 ? historyData[0].videoThumbnail : undefined
          }
          videoCount={historyData.length}
        />
        <div className="flex flex-column h-card-container">
          {historyData.map((video) => (
            <Fragment key={video._id}>
              <HorizontalCard video={video} />
            </Fragment>
          ))}
        </div>
      </div>
    </main>
  );
}
