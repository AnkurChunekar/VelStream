import { Link, useLocation } from "react-router-dom";
import { useAuth } from "../../context";
import "./Navbar.css";

export function Navbar({ searchInput, setSearchInput }) {
  const { pathname } = useLocation();
  const {
    authState: { user },
  } = useAuth();

  return (
    <>
      <nav className="navigation dark">
        <div className="nav-brand">
          <i className="fas fa-bars ham-icon" id="ham-icon" />
          <Link to="/explore" className="brand-name">
            VelStream
          </Link>
        </div>
        <div className="navigation-ham-menu" id="navigation-ham-menu">
          <i className="fas fa-times" id="ham-close-icon" />
          <a href="/index.html">Home</a>
          <a href="/pages/products-page/products.html">Products</a>
          <a href="/pages/wishlist/wishlist.html">Wishlist</a>
          <a href="/pages/cart-management/cart-management.html">Orders</a>
          <a href="/pages/login/login.html">Login</a>
        </div>
        <div className="navigation-ham-bg" />

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
