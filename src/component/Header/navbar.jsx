import React from "react";
import "./navbar.css";
import { NavLink } from "react-router-dom";
const Navbar = ({}) => {
  return (
    <nav className="navbar">
      <div>
        <span className="app__link">Get Zomato App</span>
      </div>
      <ul className="navbar__links">
        <li>
          <NavLink to="/">Login</NavLink>
        </li>
        <li>
          <NavLink to="#">Sign up</NavLink>
        </li>
      </ul>
    </nav>
  );
};
export default Navbar;
