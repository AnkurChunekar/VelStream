import { addToLikesService, removeFromLikesService } from "../../services";
import { useAuth, useLike } from "../../context";
import { useNavigate } from "react-router-dom";

export function VideoMenu({ video, setIsVideoMenuVisible }) {
  const navigate = useNavigate();

  const {
    authState: { user, token },
  } = useAuth();

  const {
    likeState: { likeData }, likeDispatch,
  } = useLike();

  const videoInLike = likeData.findIndex((item) => item._id === video._id) !== -1;

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

  return (
    <div className="video-menu">
      <button className="menu-row">
        <span>
          <i className="fa-solid fa-list-check"></i>
        </span>
        <span className="m-xs m-tb0"> Save to playlist </span>
      </button>
      <button className="menu-row">
        <span>
          <i className="fa-regular fa-clock"></i>
        </span>
        <span className="m-xs m-tb0"> Save to Watch Later </span>
      </button>
      <button onClick={LikeClickHandler} className="menu-row">
        <span>
          <i className="fa-solid fa-thumbs-up"></i>
        </span>
        <span className="m-xs m-tb0">
          {" "}
          {videoInLike ? "Remove from" : "Add To"} liked Videos{" "}
        </span>
      </button>
    </div>
  );
}
