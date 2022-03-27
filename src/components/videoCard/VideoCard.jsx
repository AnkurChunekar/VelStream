import "./VideoCard.css";
import { useState } from "react";

export function VideoCard() {
  const [isVideoDrawerVisible, setIsVideoDrawerVisible] = useState(false);

  const handleVideoDrawerToggleClick = () => {
    setIsVideoDrawerVisible((pv) => !pv);
  };

  return (
    <div className="video-card flex flex-column">
      {/* thumnail image */}
      <img
        src="https://i.picsum.photos/id/507/350/200.jpg?hmac=hlpv7jKjCuDSZfctg82iwrLnYS8hWlJB5yfaECifXjw"
        className="img-responsive"
        alt=""
      />
      <div className="flex details ai-start">
        <img
          src="https://i.picsum.photos/id/507/350/200.jpg?hmac=hlpv7jKjCuDSZfctg82iwrLnYS8hWlJB5yfaECifXjw"
          className="profile-pic"
          alt=""
        />

        {/* Text content */}

        <div className="text-content flex flex-column">
          <div className="title fs-14px">
            This can be a random title for a random video.
          </div>
          <div className="gray-text fs-12px">
            <p> Ankur Chunekar </p>
            <span>660K views | 1 year ago</span>
          </div>
        </div>

        {/* menu button */}
        <button
          onClick={handleVideoDrawerToggleClick}
          className="menu-btn fs-4 transparent-bg"
        >
          <i class="fa-solid fa-ellipsis-vertical"></i>
        </button>

        {/* tags */}

        <div className="badge-container tag tag-dark tag-round-border">
          <span className="icon-badge">55:00</span>
        </div>

        {/* video drawer */}
        {isVideoDrawerVisible ? (
          <div className="video-drawer-conatiner">
            <button className="drawer-row">
              <span>
                <i class="fa-solid fa-list-check"></i>
              </span>
              <span className="m-xs m-tb0"> Save to playlist </span>
            </button>
            <button className="drawer-row">
              <span>
                <i class="fa-regular fa-clock"></i>
              </span>
              <span className="m-xs m-tb0"> Save to Watch Later </span>
            </button>
            <button className="drawer-row">
              <span>
                <i class="fa-solid fa-thumbs-up"></i>
              </span>
              <span className="m-xs m-tb0"> Add to liked Videos </span>
            </button>
          </div>
        ) : null}
      </div>
    </div>
  );
}
