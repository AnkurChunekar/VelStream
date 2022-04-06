import "./Drawer.css";
import { Link, useLocation } from "react-router-dom";
import { useAuth } from "../../context";

export function Drawer() {
  const {
    authState: { user },
  } = useAuth();
  const { pathname } = useLocation();

  const inSingleVideoPage = () => {
    if (pathname.includes("explore")) {
      if (pathname !== "/explore") {
        return true;
      }
    }
    return false;
  };

  return (
    <div
      className={`nav-drawer dark fs-5 ${
        inSingleVideoPage() ? "compressed" : ""
      }`}
    >
      <Link to="/explore">
        <div className="drawer-item">
          <span>
            <i className="fa-regular fa-compass"></i>
          </span>
          <span className="text"> Explore </span>
        </div>
      </Link>
      <Link to={user ? "/playlist" : "/login"}>
        <div className="drawer-item">
          <span>
            <i className="fa-solid fa-list-check"></i>
          </span>
          <span className="text"> Playlists </span>
        </div>
      </Link>
      <Link to={user ? "/watchlater" : "/login"}>
        <div className="drawer-item">
          <span>
            <i className="fa-regular fa-clock"></i>
          </span>
          <span className="text"> Watch Later </span>
        </div>
      </Link>
      <Link to={user ? "/liked" : "/login"}>
        <div className="drawer-item">
          <span>
            <i className="fa-solid fa-thumbs-up"></i>
          </span>
          <span className="text"> Liked </span>
        </div>
      </Link>
      <Link to={user ? "/history" : "/login"}>
        <div className="drawer-item">
          <span>
            <i className="fa-solid fa-clock-rotate-left"></i>
          </span>
          <span className="text"> History </span>
        </div>
      </Link>
    </div>
  );
}
