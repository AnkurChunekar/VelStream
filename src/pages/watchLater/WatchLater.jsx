import "./WatchLater.css";
import { ContentSidebar, Drawer, HorizontalCard } from "../../components";
import { useWatchLater } from "../../context";
import { Link } from "react-router-dom";
import { Fragment } from "react";

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
            <Link to="/" className="btn btn-primary m-xs">
              Explore More
            </Link>
          )}
        </div>
      </div>
    </main>
  );
}
