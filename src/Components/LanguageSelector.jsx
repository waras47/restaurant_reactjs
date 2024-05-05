import React, { useEffect } from "react";
import { useTranslation } from "react-i18next";
import { useLocation, useNavigate } from "react-router-dom";

const languages = [
  { code: "en", lang: "EN" },
  { code: "nl", lang: "NL" },
];

const LanguageSelector = ({
  isNavbarOpen,
  setIsNavbarOpen,
  setLastScrollPos,
  setActiveDropdown,
  lastScrollPos,

}) => {
  const { i18n } = useTranslation();
  const navigate = useNavigate();
  const location = useLocation();

 

  useEffect(() => {
  }, [location.pathname]);


  useEffect(() => {
    const handleLoad = () => {
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

    window.addEventListener("load", handleLoad);
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("load", handleLoad);
      window.removeEventListener("scroll", handleScroll);
    };
  }, [lastScrollPos, setLastScrollPos]);



  const toggleNavbar = () => {
    setIsNavbarOpen(!isNavbarOpen);
    document.body.classList.toggle("nav-active");
    setActiveDropdown(null);
  };

  const handleNavigation = (route) => {
    toggleNavbar();
    navigate(route);
  };

  const changeLanguage = (event) => {
    i18n.changeLanguage(event.target.value);
    setIsNavbarOpen(!isNavbarOpen);
  };

  return (
    <li className={isNavbarOpen ? "navbar-item active" : "navbar-item"}>
      <select
        value={i18n.language}
        className="navbar-link "
        onChange={changeLanguage}
        style={{
          borderBottom: isNavbarOpen ? "2px solid red" : "none",
          border: !isNavbarOpen ? "2px solid red" : "none",
          marginTop: "5px",
          color: "white",
        }}      
      >
        {languages.map((lng) => (
          <option key={lng.code} value={lng.code} >
            {lng.lang}
          </option>
        ))}
      </select>
    </li>
  );
};

export default LanguageSelector;
