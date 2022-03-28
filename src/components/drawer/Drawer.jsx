import "./Drawer.css";
import { Link } from "react-router-dom";
import { useAuth } from "../../context";

export function Drawer() {
  const { authState: { user } } = useAuth();

  return (
    <div className="nav-drawer dark fs-5">
      <div className="drawer-item">
        <span>
          {" "}
          <i className="fa-solid fa-house"></i>{" "}
        </span>
        <span> Home </span>
      </div>
      <Link to="/">
        <div className="drawer-item">
          <span>
            {" "}
            <i className="fa-regular fa-compass"></i>{" "}
          </span>
          <span> Explore </span>
        </div>
      </Link>
      <Link to={ user ? "/playlist" : "/login" }>
        <div className="drawer-item">
          <span>
            {" "}
            <i className="fa-solid fa-list-check"></i>{" "}
          </span>
          <span> Playlists </span>
        </div>
      </Link>
      <Link to={ user ? "/watchlater" : "/login" }>
        <div className="drawer-item">
          <span>
            {" "}
            <i className="fa-regular fa-clock"></i>{" "}
          </span>
          <span> Watch Later </span>
        </div>
      </Link>
      <Link to={ user ? "/liked" : "/login" }>
        <div className="drawer-item">
          <span>
            {" "}
            <i className="fa-solid fa-thumbs-up"></i>{" "}
          </span>
          <span> Liked </span>
        </div>
      </Link>
      <Link to={ user ? "/history" : "/login" }>
        <div className="drawer-item">
          <span>
            {" "}
            <i className="fa-solid fa-clock-rotate-left"></i>{" "}
          </span>
          <span> History </span>
        </div>
      </Link>
    </div>
  );
}
