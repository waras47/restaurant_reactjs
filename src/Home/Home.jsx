import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import Navbar from '../Components/Navbar';
import '../assets/css/style.css';
import {
  AyamZoetzuur,
  Badge1,
  BaladoKip,
  DummyImage,
  Feature1,
  Feature2,
  Feature3,
  Feature4,
  FooterBg,
  HeroIcon,
  KipCharSieuw,
  Logo,
  SambelBoontjes,
  SambelGarnalen,
  SambelTelor,
  SemurDaging,
  Service1,
  Service2,
  Service3,
  Shape1,
  Shape2,
  Shape4,
  Shape5,
  Shape6,
  Shape7,
  Shape8,
  Shape9,
  Slider1,
  Slider2,
  Slider3,
  SpecialDish,
  TempeKering,
  TestAvatar,
  TestimonialBg
} from '../assets/js/images';
import useTranslations from "../assets/js/useTranslations";

const Home = () => {
  const [isLoaded, setIsLoaded] = useState(false);
  const [isNavbarOpen, setIsNavbarOpen] = useState(false);
  const [isNavbarActive, setIsNavbarActive] = useState(false);
  const [currentSlidePos, setCurrentSlidePos] = useState(0);
  const [lastScrollPos, setLastScrollPos] = useState(0);
  const [xOffset, setXOffset] = useState(0);
  const [yOffset, setYOffset] = useState(0);
  const [visibleItems, setVisibleItems] = useState(8);
  const [showAllItems, setShowAllItems] = useState(false);

  const translations = useTranslations();
  const {
    traditionalHygines,
    loveFood,
    comeFamily,
    delightExp,
    inspiredSeasons,
    AmazingDelicious,
    tellStory,
    bookTable,
    flavorRoyalty,
    topQuality,
    descTopQuality,
    descNasiTumpeng,
    appetizers,
    breakfeast,
    drink,
    specialDish,
    specialSelection,
    deliciousMenu,
    homeThanks,
    ourStrength,
    chooseUs,
    freshEnvironment,
    descFreshEnvironment,
    hygienicFood,
    descHygienicFood,
    skillChefs,
    descSkillChefs,
    eventParty,
    descdescEventParty,
    bookingRequest,
    newsOffers,
    yourEmail,
    subscribe
  } = translations.home;

  const menuItems = [
    { id: 1, name: "Sambel Garnalen", image: SambelGarnalen },
    { id: 2, name: "Sambel Boontjes", image: SambelBoontjes },
    { id: 3, name: "Sambel Telor", image: SambelTelor },
    { id: 4, name: "Kip Char Sieuw", image: KipCharSieuw },
    { id: 5, name: "Semur Daging", image: SemurDaging },
    { id: 6, name: "Balado Kip", image: BaladoKip },
    { id: 7, name: "Tempe Kering", image: TempeKering },
    { id: 8, name: "Ayam Zoetzuur", image: AyamZoetzuur },
    { id: 9, name: "Opu Fish", image: DummyImage },
    { id: 10, name: "Opu Fish", image: DummyImage },
  ];

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      if (scrollY > 50) {
        setIsNavbarActive(true);
      } else {
        setIsNavbarActive(false);
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
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
      subtitle: `${traditionalHygines}`,
      title: `${loveFood}`,
      text: `${comeFamily}`,
    },
    {
      image: Slider2,
      subtitle: `${delightExp}`,
      title: `${inspiredSeasons}`,
      text: `${comeFamily}`,
    },
    {
      image: Slider3,
      subtitle:`${AmazingDelicious}`,
      title: `${tellStory}`,
      text: `${comeFamily}`,
    },
  ];

  const toggleViewMore = () => {
    setShowAllItems(!showAllItems);
    setVisibleItems(showAllItems ? 8 : menuItems.length);
  };

  return (
    <div>
      <>
      <Navbar isNavbarActive={isNavbarActive} />
        <main>
            {/* ====#HERO===== */}
            
            <section className="hero text-center" aria-label="home" id="home">
              <ul className="hero-slider" data-hero-slider>
              {slides.map((slide, index) => (
                <li key={index}  className={`slider-item ${index === currentSlidePos ? 'active' : ''}`} data-hero-slider-item>

                  <div className="slider-bg">
                    <img src={slide.image} width="1880" height="950" alt="" className="img-cover" />
                  </div>

                  <p className="label-2 section-subtitle slider-reveal">{slide.subtitle}</p>

                  <h1 className="headline-1 hero-title slider-reveal">{slide.title}</h1>

                  <p className="body-2 hero-text slider-reveal">{slide.text}</p>

                </li>
                ))}

              </ul>

              
              <button className="slider-btn prev" aria-label="slide to previous" data-prev-btn onClick={slidePrev}>
                <ion-icon name="chevron-back"></ion-icon>
              </button>


              <button className="slider-btn next" aria-label="slide to next" data-next-btn onClick={slideNext}>
                <ion-icon name="chevron-forward"></ion-icon>
              </button>

              <a href="#" className="hero-btn has-after" style={{position: 'absolute'}}>
                <img src={HeroIcon} width="48" height="48" alt="booking icon" />

                <span className="label-2 text-center span">{bookTable}</span>
              </a>                
            </section>

            {/* ===#SERVICE===== */}
            <section className="section service bg-black-10 text-center" aria-label="service">
              <div className="container">

                <p className="section-subtitle label-2">{flavorRoyalty}</p>

                <h2 className="headline-1 section-title">{topQuality}</h2>

                <p className="section-text">
                {descTopQuality}
                </p>

                <ul className="grid-list">

                  <li>
                    <div className="service-card">

                      <a href="#" className="has-before hover:shine">
                        <figure className="card-banner img-holder" style={{  width: '285px', height: '336px' }}>
                          <img src={Service1} width="285" height="336" loading="lazy" alt="Breakfast"
                            className="img-cover" />
                        </figure>
                      </a>

                      <div className="card-content">

                        <h3 className="title-4 card-title">
                          <a href="#">{breakfeast}</a>
                        </h3>

                        <a href="/snacks" className="btn-text hover-underline label-2">View Menu</a>

                      </div>

                    </div>
                  </li>

                  <li>
                    <div className="service-card">

                      <a href="#" className="has-before hover:shine">
                        <figure className="card-banner img-holder" style={{  width: '285px', height: '336px' }}>
                          <img src={Service2} width="285" height="336" loading="lazy" alt="Appetizers"
                            className="img-cover" />
                        </figure>
                      </a>

                      <div className="card-content">

                        <h3 className="title-4 card-title">
                          <a href="#">Nasi Rames</a>
                        </h3>

                        <a href="/meals" className="btn-text hover-underline label-2">View Menu</a>

                      </div>

                    </div>
                  </li>

                  <li>
                    <div className="service-card">

                      <a href="#" className="has-before hover:shine">
                        <figure className="card-banner img-holder" style={{  width: '285px', height: '336px' }}>
                          <img src={Service3} width="285" height="336" loading="lazy" alt="Drinks"
                            className="img-cover" />
                        </figure>
                      </a>

                      <div className="card-content">

                        <h3 className="title-4 card-title">
                          <a href="#">{drink}</a>
                        </h3>

                        <a href="/drinks" className="btn-text hover-underline label-2">View Menu</a>

                      </div>

                    </div>
                  </li>

                </ul>
                

                <img src={Shape1} width="246" height="412" loading="lazy" alt="shape"
                  className="shape shape-1 move-anim" />
                <img src={Shape2} width="343" height="345" loading="lazy" alt="shape"
                  className="shape shape-2 move-anim" />

              </div>
            </section>
          
          {/* -====#SPECIAL DISH==== */}

            <section className="special-dish text-center" aria-labelledby="dish-label">

              <div className="special-dish-banner">
                <img src={SpecialDish} width="940" height="900" loading="lazy" alt="special dish"
                  className="img-cover" />
              </div>

              <div className="special-dish-content bg-black-10">
                <div className="container">

                  <img src={Badge1} width="28" height="41" loading="lazy" alt="badge" className="abs-img" />

                  <p className="section-subtitle label-2">{specialDish}</p>

                  <h2 className="headline-1 section-title">Nasi Tumpeng</h2>

                  <p className="section-text">
                  {descNasiTumpeng}
                  </p>

                </div>
              </div>

              <img src={Shape4} width="179" height="359" loading="lazy" alt="" className="shape shape-1" />

              <img src={Shape9} width="351" height="462" loading="lazy" alt="" className="shape shape-2" />

            </section>      

          {/* -====#MENU==== */}

          <section className="section menu-home" aria-label="menu-label" id="menu-home">
            <div className="container">

              <p className="section-subtitle text-center label-2">{specialSelection}</p>

              <h2 className="headline-1 section-title text-center">{deliciousMenu}</h2>

              <ul className="grid-list">

               {menuItems.slice(0, visibleItems).map(item => (
                  <li key={item.id}>
                    <div className="menu-card hover:card">
                      <figure className="card-banner img-holder">
                        <img src={item.image} width="100" height="100" loading="lazy" alt={item.name} className="img-cover" />
                        <div className="title-wrapper">
                          <h3 className="title-3">
                            <a href="#" className="card-title">{item.name}</a>
                          </h3>
                        </div>
                      </figure>
                    </div>
                  </li>
                ))}
              </ul>
    
              {/* tombol unmtuk hide dan show delicious foode */}
              {/* <div className="text-center">
                {menuItems.length > 8 && (
                    <button onClick={toggleViewMore}>
                      {showAllItems ? "Hide" : "View More"}
                    </button>
                  )}                
              </div> */}

              <img src={Shape5} width="921" height="1036" loading="lazy" alt="shape"
                className="shape shape-2 move-anim" />
              <img src={Shape6} width="343" height="345" loading="lazy" alt="shape"
                className="shape shape-3 move-anim" />

            </div>
          </section>

          {/* -====#TESTIMONIALS==== */}

          <section className="section testi text-center has-bg-image"
            style={{backgroundImage: `url(${TestimonialBg})`}} aria-label="testimonials">
            <div className="container">

              <div className="quote">”</div>

              <p className="headline-2 testi-text">{homeThanks}</p>

              <div className="wrapper">
                <div className="separator"></div>
                <div className="separator"></div>
                <div className="separator"></div>
              </div>

              <div className="profile">
                <img src={TestAvatar} width="100" height="100" loading="lazy" alt="Sam Jhonson"
                  className="img" />

                <p className="label-2 profile-name">Sam Jhonson</p>
              </div>

            </div>
          </section>
      
          {/* -====#FEATURES==== */}

          <section className="section features text-center" aria-label="features">
            <div className="container">

              <p className="section-subtitle label-2">{ourStrength}</p>

              <h2 className="headline-1 section-title">{chooseUs}</h2>

              <ul className="grid-list">

                <li className="feature-item">
                  <div className="feature-card">

                    <div className="card-icon">
                      <img src={Feature1} width="100" height="80" loading="lazy" alt="icon" />
                    </div>

                    <h3 className="title-2 card-title">{hygienicFood}</h3>

                    <p className="label-1 card-text">{descHygienicFood}</p>

                  </div>
                </li>

                <li className="feature-item">
                  <div className="feature-card">

                    <div className="card-icon">
                      <img src={Feature2} width="100" height="80" loading="lazy" alt="icon" />
                    </div>

                    <h3 className="title-2 card-title">{freshEnvironment}</h3>

                    <p className="label-1 card-text">{descFreshEnvironment}</p>

                  </div>
                </li>

                <li className="feature-item">
                  <div className="feature-card">

                    <div className="card-icon">
                      <img src={Feature3} width="100" height="80" loading="lazy" alt="icon" />
                    </div>

                    <h3 className="title-2 card-title">{skillChefs}</h3>

                    <p className="label-1 card-text">{descSkillChefs}</p>

                  </div>
                </li>

                <li className="feature-item">
                  <div className="feature-card">

                    <div className="card-icon">
                      <img src={Feature4}  width="100" height="80" loading="lazy" alt="icon" />
                    </div>

                    <h3 className="title-2 card-title">{eventParty}</h3>

                    <p className="label-1 card-text">{descdescEventParty}</p>

                  </div>
                </li>

              </ul>

              <img src={Shape7} width="208" height="178" loading="lazy" alt="shape"
                className="shape shape-1" />

              <img src={Shape8} width="120" height="115" loading="lazy" alt="shape"
                className="shape shape-2" />

            </div>
          </section>

          </main>


        {/* -====#FOOTER==== */}

        <footer className="footer section has-bg-image text-center"
          style={{ backgroundImage: `url(${FooterBg})` }} >
          <div className="container">

            <div className="footer-top grid-list">

              <div className="footer-brand has-before has-after">

                <a href="#" className="logo">
                  <img src= {Logo} width="160" height="50" loading="lazy" alt="grilli home" />
                </a>

                <address className="body-4">
                Bergse Dorpstraat 102 3054 GG Rotterdam 010 750 9509
                </address>

                <a href="mailto:booking@grilli.com" className="body-4 contact-link">info@tasteofniang.nl</a>

                <a href="tel:+31631034439" className="body-4 contact-link">{bookingRequest} : +31 6 31034439</a>

                <p className="body-4">
                Dinsdag T/M Zaterdag 12.00 - 20.00 | Zondag 14.00 - 20.00 Maandag Gesloten
                </p>

                <div className="wrapper">
                  <div className="separator"></div>
                  <div className="separator"></div>
                  <div className="separator"></div>
                </div>

                <p className="title-1">{newsOffers}</p>

                <p className="label-1">
                  Subscribe us & Get <span className="span">20% Off.</span>
                </p>

                <form action="mailto:saudinwahyudin@gmail.com" className="input-wrapper" >
                  <div className="icon-wrapper">
                    <ion-icon name="mail-outline" aria-hidden="true"></ion-icon>

                    <input type="email" name="email_from" id="emailFrom"  placeholder={yourEmail} autoComplete="off" className="input-field" />
                  </div>

                  <button type="submit" className="btn btn-secondary">
                    <span className="text text-1">{subscribe}</span>

                    <span className="text text-2" aria-hidden="true">{subscribe}</span>
                  </button>
                </form>

              </div>

              <ul className="footer-list">

                <li>
                  <a href="#" className="label-2 footer-link hover-underline">Home</a>
                </li>

                <li>
                  <a href="#" className="label-2 footer-link hover-underline">Menus</a>
                </li>

                <li>
                  <a href="#" className="label-2 footer-link hover-underline">About Us</a>
                </li>

                {/* <li>
                  <a href="#" className="label-2 footer-link hover-underline">Our Chefs</a>
                </li> */}

                <li>
                  <a href="#" className="label-2 footer-link hover-underline">Contact</a>
                </li>

              </ul>

              <ul className="footer-list">

                <li>
                  <a href="#" className="label-2 footer-link hover-underline">Facebook</a>
                </li>

                <li>
                  <a href="#" className="label-2 footer-link hover-underline">Instagram</a>
                </li>
                <li>
                  <a href="" className="label-2 footer-link hover-underline">
                  <Link to="/contact#map" ><span className="span">Google Map</span></Link>
                  </a>
                </li>

              </ul>

            </div>

            <div className="footer-bottom">

              <p className="copyright">
                &copy; 2024 Taste of Niang. All Rights Reserved 
              </p>

            </div>

          </div>
        </footer>

        {/* -====#BACK TO TOP==== */}
        <a href="#top" className="back-top-btn active" aria-label="back to top" data-back-top-btn>
          <ion-icon name="chevron-up" aria-hidden="true"></ion-icon>
        </a>

      </>

    </div>
  );
};

export default Home;
