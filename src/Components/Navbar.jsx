import React, { useEffect, useRef, useState } from 'react';
import { Helmet } from 'react-helmet';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { connect } from 'react-redux';

import '../assets/css/style.css';
import '../assets/css/dropdown.css';

import {
  setIsLoaded,
  setIsNavbarOpen,
  setShowPreloader,
  setCurrentSlidePos,
  setLastScrollPos,
  setXOffset,
  setYOffset,
  setActiveDropdown
} from '../Store/Actions/index';

import { 
  Logo,
  Slider1,
  Slider2,
  Slider3,
 } from '../assets/js/images';

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
  activeDropdown
}) => {

  const navigate = useNavigate();
  const location = useLocation();
  const dropdownRef = useRef(null);

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

  useEffect(() => {
    const autoSlideInterval = setInterval(() => {
      setCurrentSlidePos((prevPos) => (prevPos >= slides.length - 1 ? 0 : prevPos + 1));
    }, 7000);

    return () => clearInterval(autoSlideInterval);
  }, []);

  const toggleNavbar = () => {
    setIsNavbarOpen(!isNavbarOpen);
    document.body.classList.toggle('nav-active');
    setActiveDropdown(null);
  };

  const handleNavigation = (route) => {
    navigate(route);
    toggleNavbar();
  };

  const isActiveLink = (route) => {
    return location.pathname === route ? 'active hover-underline' : '';
  };

  const handleDropdownToggle = (dropdownName) => {
    setActiveDropdown(activeDropdown === dropdownName ? null : dropdownName);
  };

  const handleDropdownHover = (dropdownName) => {
    setActiveDropdown(dropdownName);
  };

  const handleMenuClick = (route) => {
    handleNavigation(route);
  };

  const slides = [
    {
      image: Slider1,
      subtitle: 'Traditional & Hygiene',
      title: 'For the love of delicious food',
      text: 'Come with family & feel the joy of mouthwatering food',
    },
    {
      image: Slider2,
      subtitle: 'Delightful Experience',
      title: 'Flavors Inspired by the Seasons ',
      text: 'Come with family & feel the joy of mouthwatering food',
    },
    {
      image: Slider3,
      subtitle: 'Amazing & Delicious',
      title: 'Where every flavor tells a story',
      text: 'Come with family & feel the joy of mouthwatering food',
    },
  ];
  return (
    <div>
        <Helmet>
        {/* Preload slider images */}
        {slides.map((slide, index) => (
          <link key={index} rel="preload" as="image" href={slide.image} />
        ))}
      </Helmet>

      {/* Preloader component */}
      <div className={`preload ${isLoaded ? 'loaded' : ''}`} data-preaload>
        <div className="circle"></div>
        <p className="text">Grilli</p>
      </div>
      
      {/* navbar item */}
      <div>
            {/* ===TOP BAR=== */}
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

            <a href="tel:+11234567890" className="topbar-item link">
              <div className="icon">
                <ion-icon name="call-outline" aria-hidden="true"></ion-icon>
              </div>

              <span className="span">+1 123 456 7890</span>
            </a>

            <div className="separator"></div>

            <a href="mailto:booking@restaurant.com" className="topbar-item link">
              <div className="icon">
                <ion-icon name="mail-outline" aria-hidden="true"></ion-icon>
              </div>

              <span className="span">booking@restaurant.com</span>
            </a>

          </div>
        </div>
      )}

        {/* // ==== #HEADER====// */}
        <header className={`header ${isNavbarActive ? 'active' : ''}`}>
          <div className="container">

            <a href="#" className="logo">
              <img src={Logo} width="250" height="100" alt="Grilli - Home" />
            </a>

            <nav className={`navbar ${isNavbarOpen ? 'active' : ''}`} data-navbar>

              <button className="close-btn" aria-label="close menu" data-nav-toggler onClick={toggleNavbar}>
                <ion-icon name="close-outline" aria-hidden="true"></ion-icon>
              </button>

              <a href="#" className="logo">
                <img src={Logo} width="160" height="50" alt="Grilli - Home" />
              </a>

              <ul className="navbar-list">

                <li className="navbar-item">
                  <a href="" 
                    className={`navbar-link ${isActiveLink('/')}`}  
                    onClick={() => handleNavigation('/')}
                  >
                    <div className="separator"></div>
                    <span className="span">Home</span>
                  </a>
                </li>
                
                <li
                  className="navbar-item"
                  onMouseEnter={() => handleDropdownHover('menus')}
                  onMouseLeave={() => setActiveDropdown(null)}
                >
                  <a
                    href=""
                    className={`navbar-link hover-underline ${activeDropdown === 'menus' ? 'active' : ''}`}
                    onClick={(e) => e.preventDefault()}
                  >
                  <span className="span">Menus</span>
                  {activeDropdown === 'menus' && (
                    <div className="dropdown" ref={dropdownRef}>
                      <ul>
                        <li>
                          <a href="/meals" className={`navbar-link hover-underline ${isActiveLink('/meals')}`} onClick={() => handleMenuClick('/meals')}>
                            Meals
                          </a>
                        </li>
                        <li>
                          <a href="/sandwich" className={`navbar-link hover-underline ${isActiveLink('/sandwich')}`} onClick={() => handleMenuClick('/sandwich')}>
                            Sandwiches
                          </a>
                        </li>
                        <li>
                          <a href="/meals-vegetables" className={`navbar-link hover-underline ${isActiveLink('/meals-vegetables')}`} onClick={() => handleMenuClick('/meals-vegetables')}>
                            Meat & Vegetables
                          </a>
                        </li>
                      </ul>
                    </div>
                  )}
                </a>
              </li>

                <li className="navbar-item">
                  <a href="" className={`navbar-link hover-underline  ${isActiveLink('/about_us')}`}>
                    <div className="separator"></div>

                    <Link to="/about_us" ><span className="span">About Us</span></Link>
                  </a>
                </li>

                <li className="navbar-item">
                  <a href="#" className="navbar-link hover-underline">
                    <div className="separator"></div>

                    <span className="span">Our Chefs</span>
                  </a>
                </li>

                <li className="navbar-item">
                  <a 
                    href="" 
                    className={`navbar-link hover-underline ${isActiveLink('/contact')}`}
                  >
                    <div className="separator"></div>
                    <Link to="/contact" ><span className="span">Contact</span></Link>
                  </a>
                </li>

            </ul>

              <div className="text-center">
                <p className="headline-1 navbar-title">Visit Us</p>

                <address className="body-4">
                  Restaurant St, Delicious City, <br />
                  London 9578, UK
                </address>

                <p className="body-4 navbar-text">Open: 9.30 am - 2.30pm</p>

                <a href="mailto:booking@grilli.com" className="body-4 sidebar-link">booking@grilli.com</a>

                <div className="separator"></div>

                <p className="contact-label">Booking Request</p>

                <a href="tel:+88123123456" className="body-1 contact-number hover-underline">
                  +88-123-123456
                </a>
              </div>

            </nav>

            <a href="#" className="btn btn-secondary">
              <span className="text text-1">Find A Table</span>

              <span className="text text-2" aria-hidden="true">Find A Table</span>
            </a>

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