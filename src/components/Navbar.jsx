import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet';

import './style.css';
import { imageData } from '../assets/images-data/ImageData';

const Navbar = ({ isNavbarActive }) => {
  const [isLoaded, setIsLoaded] = useState(false);
  const [isNavbarOpen, setIsNavbarOpen] = useState(false);
  const [currentSlidePos, setCurrentSlidePos] = useState(0);
  const [lastScrollPos, setLastScrollPos] = useState(0);
  const [xOffset, setXOffset] = useState(0);
  const [yOffset, setYOffset] = useState(0);

  const  { 
    Logo,
    Slider1,
    Slider2,
    Slider3,
  } = imageData;

  useEffect(() => {
    const handleMouseMove = (event) => {
      const { clientX, clientY } = event;
      const x = (clientX / window.innerWidth - 0.5) * 40; // Adjust the multiplier for the parallax effect
      const y = (clientY / window.innerHeight - 0.5) * 40; // Adjust the multiplier for the parallax effect
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
      document.body.classList.add("loaded");
      const preloader = document.querySelector("[data-preload]");
      if (preloader) {
        preloader.classList.add("loaded");
      }
    };

    const handleScroll = () => {
      const header = document.querySelector("[data-header]");
      const backTopBtn = document.querySelector("[data-back-top-btn]");
      if (header && backTopBtn) {
        if (window.scrollY >= 50) {
          header.classList.add("active");
          backTopBtn.classList.add("active");
          hideHeader();
        } else {
          header.classList.remove("active");
          backTopBtn.classList.remove("active");
        }
        setLastScrollPos(window.scrollY);
      }
    };

    const hideHeader = () => {
      const header = document.querySelector("[data-header]");
      if (header && lastScrollPos !== undefined) {
        const isScrollBottom = lastScrollPos < window.scrollY;
        if (isScrollBottom) {
          header.classList.add("hide");
        } else {
          header.classList.remove("hide");
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
    document.body.classList.toggle("nav-active");
  };

  const slideNext = () => {
    setCurrentSlidePos((prevPos) => (prevPos >= slides.length - 1 ? 0 : prevPos + 1));
  };

  const slidePrev = () => {
    setCurrentSlidePos((prevPos) => (prevPos <= 0 ? slides.length - 1 : prevPos - 1));
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
      title: (<>Flavors Inspired by<br/> the Seasons</>),
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
                Restaurant St, Delicious City, London 9578, UK
              </span>
            </address>

            <div className="separator"></div>

            <div className="topbar-item item-2">
                <div className="icon">
                  <ion-icon name="time-outline" aria-hidden="true"></ion-icon>
                </div>

              <span className="span">Daily : 8.00 am to 10.00 pm</span>
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
              <img src={Logo} width="160" height="50" alt="Grilli - Home" />
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
                  <a href="#home" className="navbar-link hover-underline active">
                    <div className="separator"></div>

                    <Link to="/" ><span className="span">Home</span></Link>
                  </a>
                </li>

                <li className="navbar-item">
                  <a href="#menu" className="navbar-link hover-underline">
                    <div className="separator"></div>

                       <Link to="/menu" ><span className="span">Menus</span></Link>
                  </a>
                </li>

                <li className="navbar-item">
                  <a href="#about" className="navbar-link hover-underline">
                    <div className="separator"></div>

                    <span className="span">About Us</span>
                  </a>
                </li>

                <li className="navbar-item">
                  <a href="#" className="navbar-link hover-underline">
                    <div className="separator"></div>

                    <span className="span">Our Chefs</span>
                  </a>
                </li>

                <li className="navbar-item">
                  <a href="#" className="navbar-link hover-underline">
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

            <div className={`overlay ${isNavbarOpen ? 'active' : ''}`} onClick={toggleNavbar}></div>

          </div>
        </header>
      </div>
    </div>
  );
};

export default Navbar;
