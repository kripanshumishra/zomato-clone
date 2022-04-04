import React from "react";
import "./navbar.css";
import {  NavLink, useNavigate } from "react-router-dom";
import { useState } from "react";
const Navbar = () => {
  const navigate = useNavigate()
  const logout=()=>{
    setIsLogin(false)
    sessionStorage.removeItem("user")
    sessionStorage.removeItem("ltk")
    sessionStorage.removeItem("isLogin")
    navigate('/')
  }
  const [isLogin,setIsLogin]=useState(sessionStorage.getItem("isLogin")? sessionStorage.getItem("isLogin"):false) // session storage or local storage by default returns string
  return (
    <nav className="navbar">
      <div>
        <span className="app__link">Get Zomato App</span>
      </div>
      <ul className="navbar__links">
        {(isLogin)?(<><li>
          {/* <NavLink to="/register">Signup</NavLink> */}
          <button >{`🙋‍♂️ Hi ${JSON.parse(sessionStorage.getItem('user'))?.name}`}</button>
        </li>
        <li>
          {/* <NavLink to="/login">Login</NavLink> */}
          <button onClick={logout}>{"👋 Logout"}</button>
        </li></>):(<><li>
          <NavLink to="/register">Signup</NavLink>
        </li>
        <li>
          <NavLink to="/login">Login</NavLink>
        </li></>)}
        
      </ul>
    </nav>
  );
};
export default Navbar;