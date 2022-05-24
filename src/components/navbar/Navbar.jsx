import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { useAuth } from "../../context";
import "./Navbar.css";

export function Navbar({ searchInput, setSearchInput }) {
  const { pathname } = useLocation();
  const [isHamMenuVisible, setIsHamMenuVisible] = useState(false);
  const { authState } = useAuth();
  const user = authState.user || JSON.parse(localStorage.getItem("user"));

  return (
    <>
      <nav className="navigation dark">
        <div className="nav-brand">
          <button
            onClick={() => setIsHamMenuVisible((pv) => !pv)}
            className="btn-unset"
          >
            <i className="fas fa-bars ham-icon" id="ham-icon" />
          </button>
          <Link to="/explore" className="brand-name">
            VelStream
          </Link>
        </div>

        {isHamMenuVisible ? (
          <div className="navigation-ham-menu active" id="navigation-ham-menu">
            <button
              onClick={() => setIsHamMenuVisible((pv) => !pv)}
              className="btn-unset ham-close-icon"
            >
              <i className="fas fa-times" />
            </button>
            <Link to="/explore">
              <div className="drawer-item">
                <span>
                  <i className="fa-regular fa-compass m-xs m-tb0"></i>
                </span>
                <span className="text"> Explore </span>
              </div>
            </Link>
            <Link to={user ? "/playlist" : "/login"}>
              <div className="drawer-item">
                <span>
                  <i className="fa-solid fa-list-check m-xs m-tb0"></i>
                </span>
                <span className="text"> Playlists </span>
              </div>
            </Link>
            <Link to={user ? "/watchlater" : "/login"}>
              <div className="drawer-item">
                <span>
                  <i className="fa-regular fa-clock m-xs m-tb0"></i>
                </span>
                <span className="text"> Watch Later </span>
              </div>
            </Link>
            <Link to={user ? "/liked" : "/login"}>
              <div className="drawer-item">
                <span>
                  <i className="fa-solid fa-thumbs-up m-xs m-tb0"></i>
                </span>
                <span className="text"> Liked </span>
              </div>
            </Link>
            <Link to={user ? "/history" : "/login"}>
              <div className="drawer-item">
                <span>
                  <i className="fa-solid fa-clock-rotate-left m-xs m-tb0"></i>
                </span>
                <span className="text"> History </span>
              </div>
            </Link>
          </div>
        ) : null}

        {/* <div className="navigation-ham-bg" /> */}

        {pathname === "/" || pathname === "/explore" ? (
          <div className="flex flex-row ai-center search-container">
            <input
              type="text"
              className="p-xxxs search-input"
              placeholder="Search for all videos here..."
              value={searchInput}
              onChange={(e) => setSearchInput(e.target.value)}
            />
            <button className="search-icon">
              <i className="fas fa-search" title="Search" />
            </button>

            {searchInput ? (
              <button
                onClick={() => setSearchInput("")}
                className="search-close-btn btn-unset"
              >
                <i className="fas fa-times" title="Close" />
              </button>
            ) : null}
          </div>
        ) : null}

        <div className="nav-actions">
          <Link to={user ? "/user" : "/login"}>
            <i className="fa-solid fa-user"></i>
            <span className="fs-5">
              {user ? ` Hi, ${user.firstName}` : " Login"}
            </span>
          </Link>
        </div>
      </nav>
    </>
  );
}
