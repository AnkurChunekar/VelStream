import "./VideoListing.css";
import { Drawer, VideoCard } from "../../components";

export function VideoListing() {
  return (
    <main className="flex vl-main">
      <Drawer />
      <div className="video-listing">
        <div className="filter-container">
          <button className="chip">All</button>
          <button className="chip">Categories</button>
          <button className="chip">Video</button>
          <button className="chip">Library</button>
          <button className="chip">Project</button>
        </div>

        <div className="video-grid-wrapper">
          <div className="video-grid">
            <VideoCard />
            <VideoCard />
            <VideoCard />
            <VideoCard />
            <VideoCard />
            <VideoCard />
            <VideoCard />
          </div>
        </div>
      </div>
    </main>
  );
}
