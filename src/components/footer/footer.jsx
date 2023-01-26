import "./footerStyles.css";

export default function Footer() {
  return (
    <section>
      <div className="container">
        {/* row 1 */}
        <div>
          <div>
            <div>
              <img src="logo.svg" alt="logo" />
            </div>
            <nav>
              <a href="#">Terms</a>
              <a href="#">GDPR & Privacy</a>
              <a href="#">Cookies</a>
              <a href="#">Legal Notice</a>
            </nav>
          </div>
          <div>
            <p>Stay up to date</p>
            <input type="text" />
            <button>Subscribe</button>
          </div>
        </div>

        {/* row 2 */}
        <div>
          <span>© NewBrands™ All Rights Reserved, 2017 - 2023.</span>
          <div>
            <img src="instagram-icon" alt="instagram-icon" />
            <img src="linkedin-icon" alt="linkedin-icon" />
            <img src="twitter-icon" alt="twitter-icon" />
          </div>
        </div>
      </div>
    </section>
  );
}
