import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { useHistory } from "react-router-dom";

function Navbar({ onLogout }) {
  const path = process.env.REACT_APP_FOR_PATH;

  const [menuOpen, setMenuOpen] = useState(false);

  const history = useHistory();

  const handleNavLinkClick = (path) => {
    // Close the menu (optional)
    setMenuOpen(false);

    // Navigate to the destination
    history.push(path);

    // Reload the page
    window.location.reload();
  };
  return (
    <nav className="navbar">
      <h1 className="navbar__title">Your Spotify</h1>
      <div className="navbar__menu" onClick={() => setMenuOpen(!menuOpen)}>
        <span className="navbar__menu-span"></span>
        <span className="navbar__menu-span"></span>
        <span className="navbar__menu-span"></span>
      </div>
      <ul className={`navbar__items ${menuOpen ? "open" : ""}`}>
        <li className="navbar__item">
          <NavLink
            className="navbar__item-link"
            to={path + "/home"}
            onClick={() => handleNavLinkClick(path + "/home")}
          >
            Home
          </NavLink>
        </li>
        <li className="navbar__item">
          <NavLink
            className="navbar__item-link"
            to={path + "/search"}
            onClick={() => handleNavLinkClick(path + "/search")}
          >
            Search
          </NavLink>
        </li>
        <li className="navbar__item">
          <NavLink
            className="navbar__item-link"
            to={path + "/top-artists"}
            onClick={() => handleNavLinkClick(path + "/top-artists")}
          >
            Top Artists
          </NavLink>
        </li>
        <li className="navbar__item">
          <NavLink
            className="navbar__item-link"
            to={path + "/top-songs"}
            onClick={() => handleNavLinkClick(path + "/top-songs")}
          >
            Top Songs
          </NavLink>
        </li>
        <li className="navbar__item">
          <NavLink
            className="navbar__item-link"
            to={path + "/your-playlists"}
            onClick={() => handleNavLinkClick(path + "/your-playlists")}
          >
            Your Playlists
          </NavLink>
        </li>
        <li className="navbar__item">
          <NavLink
            className="navbar__item-link"
            to={path + "/about-creator"}
            onClick={() => handleNavLinkClick(path + "/about-creator")}
          >
            About the Creator
          </NavLink>
        </li>
        <li className="navbar__item" onClick={onLogout}>
          <NavLink
            className="navbar__item-link navbar__item-logout"
            to={path + "/"}
          >
            Log Out
          </NavLink>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
