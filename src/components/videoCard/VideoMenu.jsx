import { useNavigate } from "react-router-dom";
import { useAuth, useLike, useWatchLater } from "../../context";
import {
  checkIfItemInArrOfObj,
  watchLaterToggleHandler,
  likeToggleClickHandler
} from "../../helpers";

export function VideoMenu({
  video,
  setIsVideoMenuVisible,
  setIsPlaylistModalVisible,
  setPlaylistModalVideo,
}) {
  const navigate = useNavigate();

  const {
    authState: { user, token },
  } = useAuth();

  const {
    watchLaterState: { watchLaterData },
    watchLaterDispatch,
  } = useWatchLater();

  const {
    likeState: { likeData },
    likeDispatch,
  } = useLike();

  const videoInLike =
    likeData.findIndex((item) => item._id === video._id) !== -1;

  const LikeClickHandler = (e) => {
    e.stopPropagation();
    setIsVideoMenuVisible(false);
    likeToggleClickHandler({
      user,
      token,
      likeData,
      likeDispatch,
      video,
      navigate,
    });
  };

  const handleSaveToPlaylistClick = (e) => {
    e.stopPropagation();
    setIsVideoMenuVisible(false);
    if (user) {
      setIsPlaylistModalVisible(true);
      setPlaylistModalVideo(video);
    } else {
      navigate("/login");
    }
  };

  // Watch later
  const videoInWatchlater = checkIfItemInArrOfObj(
    watchLaterData,
    (item) => item._id === video._id
  );

  const saveToWatchLaterClick = (e) => {
    setIsVideoMenuVisible(false);
    e.stopPropagation();
    watchLaterToggleHandler({
      user,
      token,
      watchLaterData,
      watchLaterDispatch,
      video,
      navigate,
    });
  };

  return (
    <div className="video-menu">
      <button onClick={handleSaveToPlaylistClick} className="menu-row">
        <span>
          <i className="fa-solid fa-list-check"></i>
        </span>
        <span className="m-xs m-tb0"> Save to playlist </span>
      </button>
      <button onClick={saveToWatchLaterClick} className="menu-row">
        <span>
          <i className="fa-regular fa-clock"></i>
        </span>
        <span className="m-xs m-tb0">
          {videoInWatchlater ? "Remove From" : "Save To"} Watch Later
        </span>
      </button>
      <button onClick={LikeClickHandler} className="menu-row">
        <span>
          <i className="fa-solid fa-thumbs-up"></i>
        </span>
        <span className="m-xs m-tb0">
          {videoInLike ? "Remove from" : "Add To"} liked Videos
        </span>
      </button>
    </div>
  );
}
