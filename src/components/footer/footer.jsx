import "./footerStyles.css";

export default function Footer({ page }) {
  const homeCopyRights = "© NewBrands™ All Rights Reserved, 2017 - 2023.";
  const desktopCopyRights = "© NewBrands™ All Rights Reserved, 2023.";
  return (
    <section className="footer">
      {/* row 1 */}
      <div className="n-container">
        <div className="footer-content-top">
          <div className="footer-logo-links">
            <div>
              <img src="small-logo.png" alt="logo" />
            </div>
            <nav className="footer-links">
              <a className="link" href="#">Terms</a>
              <a className="link" href="#">GDPR & Privacy</a>
              <a className="link" href="#">Cookies</a>
              <a className="link" href="#">Legal Notice</a>
            </nav>
          </div>

          <div className="footer-newsletter">
            <p className="footer-heading">Stay up to date</p>
            <form action="">
              <div className="footer-email-capture">
                <input className="footer-input" placeholder="Enter your email" type="email" />
                <button className="footer-subscribe-btn btn">Subscribe</button>
              </div>
            </form>
          </div>
        </div>
      </div>

      {/* row 2 */}
      <div className="n-container">
        <div className="footer-content-bottom">
          <span className="footer-copyrights">{page === 'desktop'? desktopCopyRights:homeCopyRights}</span>
          <div className="footer-social-links">
            <img src="instagram-icon.png" alt="instagram-icon" />
            <img src="linkedin-icon.png" alt="linkedin-icon" />
            <img src="twitter-icon.png" alt="twitter-icon" />
          </div>
        </div>
      </div>
    </section>
  );
}
