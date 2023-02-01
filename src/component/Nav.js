import React from 'react';
import { NavLink } from 'react-router-dom';
// import { FaBars } from 'react-icons';
import logo from '../logo.png';
import '../index.css';

const Nav = () => (
  <>
    <nav className="navbar hidden">
      <div className="logo">
        <img src={logo} alt="logo" />
        <h1>Space Travelers Hub</h1>
      </div>
      <ul className="nav-links">
        <li><NavLink to="/" className={({ isActive }) => (isActive ? 'active' : 'inactive')}>Rockets</NavLink></li>
        <li><NavLink to="/missions" className={({ isActive }) => (isActive ? 'active' : 'inactive')}>Missions</NavLink></li>
        <li className="myprofile"><NavLink to="/myprofile" className={({ isActive }) => (isActive ? 'active' : 'inactive')}>My Profile</NavLink></li>
      </ul>
    </nav>

    {/* <div className="mobile-popup">
      <FaBars />
    </div> */}
  </>

);

export default Nav;
