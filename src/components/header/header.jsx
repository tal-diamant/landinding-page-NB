import { useEffect, useState } from "react";

import Menu from "../header-menu/headerMenu";
import "./headerStyle.css";

export default function Header({ page, goToPage }) {
  const [menuOpen, setMenuOpen] = useState(false);
  
  useEffect(() => {
    window.addEventListener('click', (e) => closeMenu(e));

    return () => {
      window.removeEventListener('click', (e) => closeMenu(e));
    };
  },[]);

  const openMenu = () => {
    setMenuOpen(true);
    console.log("click!")
  }

  const closeMenu = (e) => {
    console.log("window click!")
    if(e.target.id !== "header-menu")
      setMenuOpen(false);
  }

  return (
    <header className="header-container">
      <div className="header">
        <div className="logo-Nav-container">
          <div className="logo">
            <img src="logo.svg" alt=" N/B logo" />
          </div>
          <nav className="nav">
            <button className="active" href="#" onClick={() => goToPage('home')}>Home</button>
            <button className="" href="#" onClick={() => goToPage('desktop')}>About</button>
            <a className="" href="#">Pricing</a>
            <a className="" href="#">Contact</a>
          </nav>
        </div>

        <div className="nav-actions">
          <a className="login-btn" id="header-menu" href="#" onClick={openMenu}>Log in</a>
          {menuOpen && <Menu />}
          <a className="signup-btn btn" href="#">Sign up</a>
          <a className="" href="#"><img src="France.svg" alt="france flag" /></a>
        </div>
      </div>
    </header>
  );
}
