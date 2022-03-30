import "./HorizontalCard.css";
import { removeFromLikesService, removeFromPlaylistService } from "../../services";
import { useAuth, useLike, usePlaylist } from "../../context";
import { Navigate, useNavigate } from "react-router-dom";

export function HorizontalCard({ video, playlistID = "" }) {
  const {
    authState: { token },
  } = useAuth();
  const { likeDispatch } = useLike();
  const { playlistDispatch } = usePlaylist();
  const { navigate } = useNavigate();

  const { videoThumbnail, videoLength, title, channelName } = video;

  const removeBtnClickHandler = () => {
    if (window.location.pathname === "/liked") {
      removeFromLikesService({ video, token, likeDispatch });
    } 

    if (window.location.pathname.includes("/playlist")) {
      removeFromPlaylistService({ video, token, playlistDispatch, playlistId: playlistID });
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
