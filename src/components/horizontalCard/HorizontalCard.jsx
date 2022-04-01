import "./HorizontalCard.css";
import {
  removeFromLikesService,
  removeFromPlaylistService,
  removeFromWatchLaterService,
  removeFromHistoryService
} from "../../services";
import { useAuth, useLike, usePlaylist, useWatchLater, useHistory } from "../../context";
import { useLocation } from "react-router-dom";

export function HorizontalCard({ video, playlistID = "" }) {
  const {
    authState: { token },
  } = useAuth();
  const location = useLocation();
  const { likeDispatch } = useLike();
  const { playlistDispatch } = usePlaylist();
  const { watchLaterDispatch } = useWatchLater();
  const { historyDispatch } = useHistory();

  const { videoThumbnail, videoLength, title, channelName } = video;

  const removeBtnClickHandler = () => {
    if (location.pathname === "/liked") {
      removeFromLikesService({ video, token, likeDispatch });
    }

    if (location.pathname === "/watchlater") {
      removeFromWatchLaterService({ video, token, watchLaterDispatch });
    }

    if (location.pathname === "/history") {
      removeFromHistoryService({ video, token, historyDispatch });
    }

    if (location.pathname.includes("/playlist")) {
      removeFromPlaylistService({
        video,
        token,
        playlistDispatch,
        playlistId: playlistID,
      });
    }
  };

  return (
    <div className="horizontal-card flex p-s">
      <div className="banner">
        <img
          src={videoThumbnail}
          className="img-responsive thumbnail"
          alt="video thumbnail"
        />
        <div className="badge-container tag tag-dark tag-round-border">
          <span className="icon-badge"> {videoLength} </span>
        </div>
      </div>
      <div>
        <div className="title m-xs m-rl0">{title}</div>
        <div className="gray-text fs-6"> {channelName} </div>
      </div>
      <button onClick={removeBtnClickHandler} className="delete-btn">
        <i className="fa-solid fa-trash"></i>
      </button>
    </div>
  );
}
