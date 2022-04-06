import { useLocation, useNavigate } from "react-router-dom";
import {
  useAuth,
  useLike,
  usePlaylist,
  useWatchLater,
  useHistory,
} from "../../context";
import {
  removeFromLikesService,
  removeFromPlaylistService,
  removeFromWatchLaterService,
  removeFromHistoryService,
} from "../../services";
import "./HorizontalCard.css";

export function HorizontalCard({ video, playlistID = "" }) {
  const location = useLocation();
  const navigate = useNavigate();
  const {
    authState: { token },
  } = useAuth();
  const { likeDispatch } = useLike();
  const { playlistDispatch } = usePlaylist();
  const { watchLaterDispatch } = useWatchLater();
  const { historyDispatch } = useHistory();

  const { videoThumbnail, videoLength, title, channelName } = video;

  const removeBtnClickHandler = (e) => {
    e.stopPropagation();
    switch (location.pathname) {
      case "/liked":
        removeFromLikesService({ video, token, likeDispatch });
        break;
      case "/watchlater":
        removeFromWatchLaterService({ video, token, watchLaterDispatch });
        break;
      case "/history":
        removeFromHistoryService({ video, token, historyDispatch });
        break;
      default:
        break;
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
    <div onClick={() => navigate(`/explore/${video._id}`)} className="horizontal-card flex p-s">
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
