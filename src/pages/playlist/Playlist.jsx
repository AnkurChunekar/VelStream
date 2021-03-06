import { useNavigate } from "react-router-dom";
import { useAuth, usePlaylist } from "../../context";
import { deletePlaylistService } from "../../services";

export function Playlist({ title, videos = 0, playlistId }) {
  const navigate = useNavigate();

  const { authState } = useAuth();
  const token = authState.token || localStorage.getItem("token");
  const { playlistDispatch } = usePlaylist();

  const handleDeletePlaylistClick = (e) => {
    e.stopPropagation();
    deletePlaylistService({ token, playlistId, playlistDispatch });
  };

  return (
    <div
      onClick={() => navigate(`/playlist/${playlistId}`)}
      className="horizontal-card flex ai-center p-s playlist"
    >
      <i className="fa-solid fa-list-check fs-3"></i>
      <div>
        <div className="title"> {title} </div>
        <div className="gray-text fs-6"> {videos.length} videos</div>
      </div>
      <button onClick={handleDeletePlaylistClick} className="delete-btn">
        <i className="fa-solid fa-trash"></i>
      </button>
    </div>
  );
}
