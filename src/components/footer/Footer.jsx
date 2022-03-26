import "./Footer.css";

export function Footer() {
  return (
    <>
    <footer className="footer dark">
      <div className="footer-container">
        <div className="row flex flex-wrap">
          <div className="footer-col">
            <h4>Company</h4>
            <ul className="list-style-none">
              <li>
                <a >About Us</a>
              </li>
              <li>
                <a >Our Services</a>
              </li>
              <li>
                <a >FAQ</a>
              </li>
            </ul>
          </div>
          <div className="footer-col">
            <h4>Categories</h4>
            <ul className="list-style-none">
              <li>
                <a >Weights</a>
              </li>
              <li>
                <a >Equipments</a>
              </li>
              <li>
                <a >Accessories</a>
              </li>
              <li>
                <a >Supplements</a>
              </li>
            </ul>
          </div>
          <div className="footer-col">
            <h4>Our Shop</h4>
            <ul className="list-style-none">
              <li>
                <a >Orders</a>
              </li>
              <li>
                <a >Wishlist</a>
              </li>
              <li>
                <a >Account</a>
              </li>
            </ul>
          </div>
          <div className="footer-col">
            <h4>Follow Us</h4>
            <div className="social-links">
              <a >
                <i className="fa-brands fa-twitter" />
              </a>
              <a >
                <i className="fa-brands fa-linkedin" />
              </a>
              <a >
                <i className="fa-brands fa-github" />
              </a>
              <a >
                <i className="fa-brands fa-hashnode" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  </>
  
  );
}
