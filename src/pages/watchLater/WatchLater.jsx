import { Fragment } from "react";
import { Link } from "react-router-dom";
import { useWatchLater } from "../../context";
import { ContentSidebar, Drawer, HorizontalCard } from "../../components";
import "./WatchLater.css";

export function WatchLater() {
  const {
    watchLaterState: { watchLaterData },
  } = useWatchLater();

  return (
    <main className="flex page-container">
      <Drawer />
      <div className="flex w-100pc">
        <ContentSidebar
          pageTitle={"Watch Later"}
          sidebarBanner={
            watchLaterData.length > 0 ? watchLaterData[0].videoThumbnail : undefined
          }
          videoCount={watchLaterData.length}
        />
        <div className="flex flex-column h-card-container">
          {watchLaterData.length > 0 ? (
            watchLaterData.map((video) => (
              <Fragment key={video._id}>
                <HorizontalCard video={video} />
              </Fragment>
            ))
          ) : (
            <Link to="/explore" className="btn btn-primary m-xs">
              Explore More
            </Link>
          )}
        </div>
      </div>
    </main>
  );
}
