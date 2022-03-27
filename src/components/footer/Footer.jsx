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
                <li>About Us</li>
                <li>Our Services</li>
                <li>FAQ</li>
              </ul>
            </div>
            <div className="footer-col">
              <h4>Categories</h4>
              <ul className="list-style-none">
                <li>Weights</li>
                <li>Equipments</li>
                <li>Accessories</li>
                <li>Supplements</li>
              </ul>
            </div>
            <div className="footer-col">
              <h4>Our Shop</h4>
              <ul className="list-style-none">
                <li>Orders</li>
                <li>Wishlist</li>
                <li>Account</li>
              </ul>
            </div>
            <div className="footer-col">
              <h4>Follow Us</h4>
              <div className="social-links">
                <i className="fa-brands fa-twitter" />

                <i className="fa-brands fa-linkedin" />

                <i className="fa-brands fa-github" />

                <i className="fa-brands fa-hashnode" />
              </div>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}
