import {
  addToLikesService,
  removeFromLikesService,
  addToWatchLaterService,
  removeFromWatchLaterService,
} from "../../services";
import { useAuth, useLike, useWatchLater } from "../../context";
import { useNavigate } from "react-router-dom";
import { checkIfItemInArrOfObj } from "../../helpers";

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

  const LikeClickHandler = () => {
    setIsVideoMenuVisible(false);
    if (user) {
      if (videoInLike) {
        removeFromLikesService({ video, token, likeDispatch });
      } else {
        addToLikesService({ video, token, likeDispatch });
      }
    } else {
      navigate("/login");
    }
  };

  const handleSaveToPlaylistClick = () => {
    if (token) {
      setIsVideoMenuVisible(false);
      setIsPlaylistModalVisible(true);
      setPlaylistModalVideo(video);
    } else {
      navigate("login");
    }
  };

  // Watch later
  const videoInWatchlater = checkIfItemInArrOfObj(
    watchLaterData,
    (item) => item._id === video._id
  );


  const saveToWatchLaterClick = () => {
    setIsVideoMenuVisible(false);
    if (user) {
      if (!videoInWatchlater) {
        addToWatchLaterService({ video, token, watchLaterDispatch });
      } else {
        removeFromWatchLaterService({ video, token, watchLaterDispatch });
      }
    } else {
      navigate("/login");
    }
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
