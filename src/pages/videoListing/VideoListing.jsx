import "./VideoListing.css";
import { Drawer, VideoCard } from "../../components";
import axios from "axios";
import { useEffect } from "react";
import { useState } from "react";

export function VideoListing() {
  const [data, setData] = useState([]);

  useEffect(() => {
    (async () => {
      const response = await axios.get("/api/videos");
      setData(response.data.videos);
    })();
  }, []);

  return (
    <main className="flex page-container">
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
            {
              data.map(video => <VideoCard video={video} />)
            }
          </div>
        </div>
      </div>
    </main>
  );
}
