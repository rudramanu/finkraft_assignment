import { useState } from "react";
import "./Navbar.css";
import { Link } from "react-router-dom";

function Navbar() {
  const handleClick = () => {};
  return (
    <>
      <nav className="navbar">
        <div className="nav-container">
          <div exact to="/" className="nav-logo">
            <span>Finkraft</span>
          </div>

          <ul className="nav-menu">
            <li className="nav-item">
              <Link to="/">
                <div className="nav-links" onClick={handleClick}>
                  Home
                </div>
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/login">
                <div className="nav-links" onClick={handleClick}>
                  Login/signup
                </div>
              </Link>
            </li>
            <li className="nav-item">
              <div className="nav-links" onClick={handleClick}>
                Files
              </div>
            </li>
          </ul>
        </div>
      </nav>
    </>
  );
}

export default Navbar;
