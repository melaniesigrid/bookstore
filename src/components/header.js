import React from 'react';
import { NavLink } from 'react-router-dom';
import '../App.css';
import profileImage from '../img/user.svg';

function Header() {
  return (
    <header className="Header">
      <nav className="NavBar">
        <h1 className="Title">
          <NavLink to="/" rel="noopener noreferrer">
            Bookstore CMS
          </NavLink>
        </h1>
        <ul>
          <li><NavLink to="/">Books</NavLink></li>
          <li><NavLink to="/Categories/">Categories</NavLink></li>
        </ul>
        <img className="profile" alt="Profile" src={profileImage} />
      </nav>
    </header>
  );
}

export default Header;
