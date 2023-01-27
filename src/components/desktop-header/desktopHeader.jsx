import "./desktopHeaderStyles.css";

export default function DesktopHeader({ page, goToPage }) {
  return (
    <header className="desktop-header-container">
      <div className="desktop-header">
        <div className="desktop-logo-Nav-container">
          <div className="desktop-logo">
            <img src="logo.svg" alt=" N/B logo" />
          </div>
          <nav className="desktop-nav">
            <button className="desktop-nav-home active" href="#" onClick={() => goToPage('home')}>Home</button>
            <button className="desktop-nav-item" href="#" onClick={() => goToPage('desktop')}>About</button>
            <a className="desktop-nav-item" href="#">Pricing</a>
            <a className="" href="#">Contact</a>
          </nav>
        </div>

        <div className="desktop-nav-actions">
          <a className="desktop-login-btn" href="#">Log in</a>
          <a className="desktop-signup-btn btn" href="#">Sign up</a>
        </div>
      </div>
    </header>
  );
}
