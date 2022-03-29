import "./HorizontalCard.css";
import { removeFromLikesService } from "../../services";
import { useAuth, useLike } from "../../context";

export function HorizontalCard({ video }) {
  const {
    authState: { token },
  } = useAuth();
  const { likeDispatch } = useLike();

  const { videoThumbnail, videoLength, title, channelName } = video;

  const removeFromLikeHandler = () => {
    removeFromLikesService({ video, token, likeDispatch });
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
      <button onClick={removeFromLikeHandler} className="delete-btn">
        <i className="fa-solid fa-trash"></i>
      </button>
    </div>
  );
}
