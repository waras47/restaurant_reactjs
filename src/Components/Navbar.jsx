import React, { useEffect, useRef } from 'react';
import { Helmet } from 'react-helmet';
import { connect } from 'react-redux';
import { Link, useLocation, useNavigate } from 'react-router-dom';

import '../assets/css/dropdown.css';
import '../assets/css/style.css';
import useTranslations from "../assets/js/useTranslations";

import {
  setActiveDropdown,
  setCurrentSlidePos,
  setIsLoaded,
  setIsNavbarOpen,
  setLastScrollPos,
  setShowPreloader,
  setXOffset,
  setYOffset
} from '../Store/Actions/index';

import {
  Logo,
  Slider1,
  Slider2,
  Slider3,
} from '../assets/js/images';
import LanguageSelector from './LanguageSelector';

const Navbar = ({
  isNavbarActive,
  isLoaded,
  isNavbarOpen,
  showPreloader,
  setCurrentSlidePos,
  setLastScrollPos,
  setXOffset,
  setYOffset,
  setActiveDropdown,
  lastScrollPos,
  activeDropdown,
  setIsNavbarOpen
}) => {

  
  const navigate = useNavigate();
  const location = useLocation();
  const dropdownRef = useRef(null);

  const translations = useTranslations();
  const {
      meal
    } = translations.menu; 
  useEffect(() => {
    const handleLoad = () => {
      setIsLoaded(true);
      setShowPreloader(false);
    };

    window.addEventListener('load', handleLoad);

    return () => {
      window.removeEventListener('load', handleLoad);
    };
  }, []);

  useEffect(() => {
    setShowPreloader(true);
  }, [location.pathname]);

  useEffect(() => {
    const handleMouseMove = (event) => {
      const { clientX, clientY } = event;
      const x = (clientX / window.innerWidth - 0.5) * 40;
      const y = (clientY / window.innerHeight - 0.5) * 40;
      setXOffset(x);
      setYOffset(y);
    };

    window.addEventListener('mousemove', handleMouseMove);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  useEffect(() => {
    const handleLoad = () => {
      setIsLoaded(true);
      document.body.classList.add('loaded');
      const preloader = document.querySelector("[data-preload]");
      if (preloader) {
        preloader.classList.add('loaded');
      }
    };

    const handleScroll = () => {
      const header = document.querySelector("[data-header]");
      const backTopBtn = document.querySelector("[data-back-top-btn]");
      if (header && backTopBtn) {
        if (window.scrollY >= 50) {
          header.classList.add('active');
          backTopBtn.classList.add('active');
          hideHeader();
        } else {
          header.classList.remove('active');
          backTopBtn.classList.remove('active');
        }
        setLastScrollPos(window.scrollY);
      }
    };

    const hideHeader = () => {
      const header = document.querySelector("[data-header]");
      if (header && lastScrollPos !== undefined) {
        const isScrollBottom = lastScrollPos < window.scrollY;
        if (isScrollBottom) {
          header.classList.add('hide');
        } else {
          header.classList.remove('hide');
        }
      }
    };

    window.addEventListener('load', handleLoad);
    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('load', handleLoad);
      window.removeEventListener('scroll', handleScroll);
    };
  }, [lastScrollPos]);


  const toggleNavbar = () => {
    setIsNavbarOpen(!isNavbarOpen);
    document.body.classList.toggle('nav-active');
    setActiveDropdown(null);
  };

  const handleNavigation = (route) => {
    toggleNavbar();
    navigate(route);
    // setIsNavbarOpen(!isNavbarOpen);
  };

  const isActiveLink = (route) => {
    return location.pathname === route ? 'active hover-underline' : '';
  };

  const handleDropdownToggle = (dropdownName) => {
    setActiveDropdown(activeDropdown === dropdownName ? null : dropdownName);
    // setIsNavbarOpen(true); 
  };
  
  // const handleDropdownHover = (dropdownName) => {
  //   setActiveDropdown(dropdownName);
  // };

  const handleMenuClick = async (route) => {
    handleNavigation(route);
    toggleNavbar();
  };
  

  return (
    <div>


      {/* Preloader component */}
      <div className={`preload ${isLoaded ? 'loaded' : ''}`} data-preaload>
        <div className="circle"></div>
        <p className="text">Taste of Niang</p>
      </div>

      {/* ===TOP BAR=== */}
      <div>
      {isLoaded && (
        <div className="topbar">
          <div className="container">

            <address className="topbar-item">
              <div className="icon">
                <ion-icon name="location-outline" aria-hidden="true"></ion-icon>
              </div>

              <span className="span">
              Bergse Dorpstraat 102 3054 GG Rotterdam 010 750 9509
              </span>
            </address>

            <div className="separator"></div>

            <div className="topbar-item item-2">
                <div className="icon">
                  <ion-icon name="time-outline" aria-hidden="true"></ion-icon>
                </div>

              <span className="span">Dinsdag T/M Zaterdag 12.00 - 20.00 | Zondag 14.00 - 20.00 Maandag Gesloten</span>
            </div>

            <a href="tel:+31631034439" className="topbar-item link">
              <div className="icon">
                <ion-icon name="call-outline" aria-hidden="true"></ion-icon>
              </div>

              <span className="span">+31 6 31034439</span>
            </a>

            <div className="separator"></div>

            <a href="mailto:niang@restaurant.com" className="topbar-item link">
              <div className="icon">
                <ion-icon name="mail-outline" aria-hidden="true"></ion-icon>
              </div>

              <span className="span">niang@gmail.com</span>
            </a>

          </div>
        </div>
      )}

        {/* // ==== #HEADER====// */}
        <header className={`header ${isNavbarActive ? 'active' : ''}`}>
          <div className="container">

            <a href="#" className="logo">
              <img src={Logo} width="250" height="100" alt="niang - Home" />
            </a>

            <nav className={`navbar ${isNavbarOpen ? 'active' : ''}`} data-navbar>

              <button className="close-btn" aria-label="close menu" data-nav-toggler onClick={toggleNavbar}>
                <ion-icon name="close-outline" aria-hidden="true"></ion-icon>
              </button>

              <a href="" className="logo">
                <img src={Logo} width="160" height="50" alt="niang - Home" />
              </a>

              <ul className="navbar-list">

                <li className="navbar-item">
                  <a href="" className={`navbar-link hover-underline  ${isActiveLink('/')}`} onClick={toggleNavbar}>
                    <div className="separator"></div>

                    <Link to="/" ><span className="span">Home</span></Link>
                  </a>
                </li>
                
                <li
                  className="navbar-item"
                  onMouseEnter={() => handleDropdownToggle('menus')}
                  onMouseLeave={() => handleDropdownToggle('menus')}
                >
                  <a
                    href="#"
                    className={`navbar-link hover-underline ${activeDropdown === 'menus' ? 'active' : ''}`}
                  >
                  <span className="span">Menus</span>
                  {activeDropdown === 'menus' && (
                    <div className="dropdown" ref={dropdownRef}>
                      <ul>
                        <li>
                          <a href="" className={`navbar-link hover-underline ${isActiveLink('/meals')}`} onClick={() => handleMenuClick('/meals')}>
                            <Link to="/meals" ><span className="span">{meal}</span></Link>
                          </a>
                        </li>
                        <li>
                          <a href="" className={`navbar-link hover-underline ${isActiveLink('/meat-vegetables')}`} onClick={() => handleMenuClick('/meat-vegetables')}>
                            <Link to="/meat-vegetables" ><span className="span">Vlees & Groenten</span></Link>
                          </a>
                        </li>
                        <li>
                          <a href="" className={`navbar-link hover-underline ${isActiveLink('/side-dishes')}`} onClick={() => handleMenuClick('/side-dishes')}>
                            <Link to="/side-dishes" ><span className="span">Bijgerchten</span></Link>
                          </a>
                        </li>
                        <li>
                          <a href="" className={`navbar-link hover-underline ${isActiveLink('/sandwich')}`} onClick={() => handleMenuClick('/sandwich')}>
                            <Link to="/sandwich" ><span className="span">Broodjes</span></Link>
                          </a>
                        </li>
                        <li>
                          <a href="" className={`navbar-link hover-underline ${isActiveLink('/snacks')}`} onClick={() => handleMenuClick('/snacks')}>
                            <Link to="/snacks" ><span className="span">Snacks</span></Link>
                          </a>
                        </li>
                        <li>
                          <a href="" className={`navbar-link hover-underline ${isActiveLink('/drinks')}`} onClick={() => handleMenuClick('/drinks')}>
                            <Link to="/drinks" ><span className="span">Dranken</span></Link>
                          </a>
                        </li>
                      </ul>
                    </div>
                  )}
                </a>
              </li>

              <li className="navbar-item">
                <a href="" className={`navbar-link hover-underline  ${isActiveLink('/about_us')}`} onClick={toggleNavbar}>
                  <div className="separator"></div>

                  <Link to="/about_us" ><span className="span">About Us</span></Link>
                </a>
              </li>


              <li className="navbar-item">
                <a 
                  href="" 
                  className={`navbar-link hover-underline ${isActiveLink('/contact')}`}
                  onClick={toggleNavbar}
                >
                  <div className="separator"></div>
                  <Link to="/contact" ><span className="span">Contact</span></Link>
                </a>
                
              </li>

              <LanguageSelector         
                isNavbarOpen={isNavbarOpen}
                setIsNavbarOpen={setIsNavbarOpen} 
              />

            </ul>

              <div className="text-center">
                <p className="headline-1 navbar-title">Visit Us</p>

                <address className="body-4">
                  Restaurant St, Delicious City, <br />
                  London 9578, UK
                </address>

                <p className="body-4 navbar-text">Open: 9.30 am - 2.30pm</p>

                <a href="mailto:niang@gmail.com" className="body-4 sidebar-link">niang@gmail.com</a>

                <div className="separator"></div>

                <p className="contact-label">Booking Request</p>

                <a href="tel:+31631034439" className="body-1 contact-number hover-underline">
                +31 6 31034439
                </a>
              </div>

            </nav>
          


            <button className="nav-open-btn" aria-label="open menu" data-nav-toggler  onClick={toggleNavbar}>
              <span className="line line-1"></span>
              <span className="line line-2"></span>
              <span className="line line-3"></span>
            </button>

            <div className={`overlay ${isNavbarOpen ? 'active' : ''}`} onClick={() => setIsNavbarOpen(false)}></div>

          </div>
        </header>
      </div>
    </div>
  );
};

const mapStateToProps = (state) => ({
  isLoaded: state.isLoaded,
  isNavbarOpen: state.isNavbarOpen,
  lastScrollPos: state.lastScrollPos, 
  activeDropdown: state.activeDropdown
});

const mapDispatchToProps = {
  setIsLoaded,
  setIsNavbarOpen,
  setShowPreloader,
  setCurrentSlidePos,
  setLastScrollPos,
  setXOffset,
  setYOffset,
  setActiveDropdown,
};

export default connect(mapStateToProps, mapDispatchToProps)(Navbar);