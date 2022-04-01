import "./Navbar.css";
import { Link } from "react-router-dom";
import { useAuth } from "../../context";

export function Navbar() {
  const { authState: { user } } = useAuth();

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
        <div className="nav-actions">
          <span className="m-xs">
            <i id="nav-search-icon" className="fas fa-search" />
          </span>
          <Link to={user ? "/user" : "/login"}>
            <span className="m-xs">
              <i className={`fa-solid ${user ? "fa-user-check" : "fa-user-xmark"}`}></i>
            </span>
          </Link>
        </div>
      </nav>
      {/* Search bar starts */}
      <div id="nav-searchbar" className="input-wrapper">
        <div className="search-box flex flex-center">
          <i className="fas fa-search" />
          <input
            type="text"
            placeholder="search for products, brands and more..."
          />
          <i id="nav-close-icon" className="fas fa-times" />
        </div>
        <div id="nav-searchbar-bg" className="searchbar-bg" />
      </div>
      {/* Search bar ends */}
    </>
  );
}
