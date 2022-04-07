import { Fragment } from "react";
import { useLike } from "../../context";
import { ContentSidebar, Drawer, HorizontalCard } from "../../components";

export function Liked() {
  const {
    likeState: { likeData },
  } = useLike();

  return (
    <main className="flex page-container">
      <Drawer />
      <div className="flex w-100pc">
        <ContentSidebar
          pageTitle={"Liked Videos"}
          sidebarBanner={
            likeData.length > 0 ? likeData[0].videoThumbnail : undefined
          }
          videoCount={likeData.length}
        />
        <div className="flex flex-column h-card-container">
          {likeData.map((video) => (
            <Fragment key={video._id}>
              <HorizontalCard video={video} />
            </Fragment>
          ))}
        </div>
      </div>
    </main>
  );
}
