import "./VideoCard.css";
import { useState } from "react";
import { VideoMenu } from "./VideoMenu";
import { useNavigate } from "react-router-dom";

export function VideoCard({
  video,
  setIsPlaylistModalVisible,
  setPlaylistModalVideo,
}) {

  const [isVideoMenuVisible, setIsVideoMenuVisible] = useState(false);
  const { channelName, videoThumbnail, title, channelThumbnail, views, likes } =
    video;
  const navigate = useNavigate();
  const handleVideoMenuToggleClick = (e) => {
    e.stopPropagation();
    setIsVideoMenuVisible((pv) => !pv);
  };

  const naviagteToVideo = () => {
    navigate(`/explore/${video._id}`);
  };

  return (
    <div onClick={naviagteToVideo} className="video-card flex flex-column">
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
          onClick={handleVideoMenuToggleClick}
          className="menu-btn fs-4 transparent-bg"
        >
          <i className="fa-solid fa-ellipsis-vertical"></i>
        </button>

        {/* tags */}

        <div className="badge-container tag tag-dark tag-round-border">
          <span className="icon-badge"> {video.videoLength} </span>
        </div>

        {/* video menu */}
        {isVideoMenuVisible ? (
          <VideoMenu
            video={video}
            setIsVideoMenuVisible={setIsVideoMenuVisible}
            setIsPlaylistModalVisible={setIsPlaylistModalVisible}
            setPlaylistModalVideo={setPlaylistModalVideo}
          />
        ) : null}
      </div>
    </div>
  );
}
