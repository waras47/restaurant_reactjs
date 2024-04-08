import React, { useState } from 'react';
import Logo from '../assets/images/logo.svg';
const Header = () => {


  return (
    <div className="header">
      <div className="container">

        <a href="#" className="logo">
          <img src={Logo} width="160" height="50" alt="Grilli - Home" />
        </a>

        <nav className="navbar">

          <button className="close-btn" aria-label="close menu">
            <ion-icon name="close-outline" aria-hidden="true"></ion-icon>
          </button>

          <a href="#" className="logo">
            <img src={Logo} width="160" height="50" alt="Grilli - Home" />
          </a>

          <ul className="navbar-list">

            <li className="navbar-item">
              <a href="#home" className="navbar-link hover-underline active">
                <div className="separator"></div>
                <span className="span">Home</span>
              </a>
            </li>

            <li className="navbar-item">
              <a href="#home" className="navbar-link hover-underline active">
                <div className="separator"></div>
                <span className="span">Menus</span>
              </a>
            </li>

            <li className="navbar-item">
              <a href="#home" className="navbar-link hover-underline active">
                <div className="separator"></div>
                <span className="span">About Us</span>
              </a>
            </li>

            <li className="navbar-item">
              <a href="#home" className="navbar-link hover-underline active">
                <div className="separator"></div>
                <span className="span">Contact</span>
              </a>
            </li>


          </ul>

          <div className="text-center">
            <p className="headline-1 navbar-title">Visit Us</p>
            <address className="body-4">
              Restaurant St, Delicious City, <br />
              London 9578, UK
            </address>
            {/* Add more contact information */}
          </div>

        </nav>

        <a href="#" className="btn btn-secondary">
          <span className="text text-1">Find A Table</span>
          <span className="text text-2" aria-hidden="true">Find A Table</span>
        </a>

        <button className="nav-open-btn" aria-label="open menu" >
          <span className="line line-1"></span>
          <span className="line line-2"></span>
          <span className="line line-3"></span>
        </button>

        <div className="overlay"></div>

      </div>
    </div>
  );
};

export default Header;
