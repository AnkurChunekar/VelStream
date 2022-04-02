import { useNavigate } from "react-router-dom";
import { useAuth, useLike, usePlaylist, useWatchLater, useHistory } from "../../context";

export function User() {
  const { authState, authDispatch } = useAuth();
  const { likeDispatch } = useLike();
  const { playlistDispatch } = usePlaylist();
  const { watchLaterDispatch } = useWatchLater();
  const { historyDispatch } = useHistory();
  const navigate = useNavigate();
  const { user } = authState;


  const handleLogoutClick = () => {
    alert("Logout Successfull!");
    navigate("/");
    localStorage.removeItem("token");
    authDispatch({ type: "LOGOUT" });
    likeDispatch({type: "RESET"});
    playlistDispatch({type: "RESET"});
    watchLaterDispatch({type: "RESET"});
    historyDispatch({type: "RESET"});
  };

  return (
    <div className="user-page center-align-text">
      <h1> Hello, {user.firstName} </h1>
      <button className="btn btn-danger" onClick={handleLogoutClick}>
        Logout
      </button>
    </div>
  );
}
