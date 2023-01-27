import "./headerMenuStyles.css";

export default function Menu() {
  return (
    <div className="header-menu">
      <a className="header-menu-login header-menu-btn" href="#">
        Log in
      </a>

      <div className="header-menu-items">
        <div className="header-menu-list-item-container">
          <div className="header-menu-list-item header-menu-btn">
            <span className="header-menu-icon-wrap">
              <img src="user-icon.svg" alt="user icon" />
            </span>
            <a className="header-menu-list-item-text" href="#">Brands</a>
          </div>
        </div>

        <div className="header-menu-list-item-container">
          <div className="header-menu-list-item header-menu-btn">
            <span className="header-menu-icon-wrap">
              <img src="settings-icon.svg" alt="cogwheel" />
            </span>
            <a className="header-menu-list-item-text" href="#">Manufacturer</a>
          </div>
        </div>
      </div>
    </div>
  );
}
