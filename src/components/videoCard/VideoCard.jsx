import "./VideoCard.css";
import { useState } from "react";

export function VideoCard({ video }) {
  const [isVideoDrawerVisible, setIsVideoDrawerVisible] = useState(false);
  const { channelName, videoThumbnail, title, channelThumbnail, views, likes } =
    video;

  const handleVideoDrawerToggleClick = () => {
    setIsVideoDrawerVisible((pv) => !pv);
  };

  return (
    <div key={video._id} className="video-card flex flex-column">
      {/* thumnail image */}
      <img src={videoThumbnail} className="img-responsive" alt="" />
      <div className="flex details ai-start">
        <img src={channelThumbnail} className="profile-pic" alt="" />

        {/* Text content */}

        <div className="text-content flex flex-column">
          <div className="title fs-14px">{title}</div>
          <div className="gray-text fs-12px">
            <p> {channelName} </p>
            <span>
              {views} Views | {likes} Likes
            </span>
          </div>
        </div>

        {/* menu button */}
        <button
          onClick={handleVideoDrawerToggleClick}
          className="menu-btn fs-4 transparent-bg"
        >
          <i className="fa-solid fa-ellipsis-vertical"></i>
        </button>

        {/* tags */}

        <div className="badge-container tag tag-dark tag-round-border">
          <span className="icon-badge"> {video.videoLength} </span>
        </div>

        {/* video drawer */}
        {isVideoDrawerVisible ? (
          <div className="video-drawer-conatiner">
            <button className="drawer-row">
              <span>
                <i className="fa-solid fa-list-check"></i>
              </span>
              <span className="m-xs m-tb0"> Save to playlist </span>
            </button>
            <button className="drawer-row">
              <span>
                <i className="fa-regular fa-clock"></i>
              </span>
              <span className="m-xs m-tb0"> Save to Watch Later </span>
            </button>
            <button className="drawer-row">
              <span>
                <i className="fa-solid fa-thumbs-up"></i>
              </span>
              <span className="m-xs m-tb0"> Add to liked Videos </span>
            </button>
          </div>
        ) : null}
      </div>
    </div>
  );
}
