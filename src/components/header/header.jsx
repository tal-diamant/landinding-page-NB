import "./headerStyle.css";

export default function Header() {
  return (
    <header className="header-container">
      <div className="header">
        <div className="logo-Nav-container">
          <div className="logo">
            <img src="logo.svg" alt=" N/B logo" />
          </div>
          <nav className="nav">
            <a className="active" href="#">Home</a>
            <a className="" href="#">About</a>
            <a className="" href="#">Pricing</a>
            <a className="" href="#">Contact</a>
          </nav>
        </div>

        <div className="nav-actions">
          <a className="login-btn" href="#">Log in</a>
          <a className="signup-btn" href="#">Sign up</a>
          <a className="" href="#"><img src="France.svg" alt="france flag" /></a>
        </div>
      </div>
    </header>
  );
}
