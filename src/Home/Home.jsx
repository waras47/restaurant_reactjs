import React, { useEffect, useState } from 'react';
import './Home.css';
import Navbar from '../Components/Navbar';

import {
  Logo,
  Slider1,
  Slider2,
  Slider3,
  HeroIcon,
  Service1,
  Service2,
  Service3,
  Shape1,
  Shape2,
  Shape3,
  Shape4,
  Shape5,
  Shape6,
  Shape7,
  Shape8,
  Shape9,
  AboutBanner,
  AboutAbs,
  Badge1,
  Badge2,
  SpecialDish,
  Menu1,
  Menu2,
  Menu3,
  Menu4,
  Menu5,
  Menu6,
  TestimonialBg,
  TestAvatar,
  FormPattern,
  Feature1,
  Feature2,
  Feature3,
  Feature4,
  Event1,
  Event2,
  Event3,
  FooterBg
} from '../assets/js/images';

const Home = () => {
  const [isLoaded, setIsLoaded] = useState(false);
  const [isNavbarOpen, setIsNavbarOpen] = useState(false);
  const [isNavbarActive, setIsNavbarActive] = useState(false);
  const [currentSlidePos, setCurrentSlidePos] = useState(0);
  const [lastScrollPos, setLastScrollPos] = useState(0);
  const [xOffset, setXOffset] = useState(0);
  const [yOffset, setYOffset] = useState(0);

 
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
      subtitle: 'Traditional & Hygiene',
      title: 'For the love of delicious food',
      text: 'Come with family & feel the joy of mouthwatering food',
    },
    {
      image: Slider2,
      subtitle: 'Delightful Experience',
      title: 'Flavors Inspired by the Seasons',
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

                  <a href="#" className="btn btn-primary slider-reveal">
                    <span className="text text-1">View Our Menu</span>

                    <span className="text text-2" aria-hidden="true">View Our Menu</span>
                  </a>

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

                <span className="label-2 text-center span">Book A Table</span>
              </a>                
            </section>

            {/* ===#SERVICE===== */}
            <section className="section service bg-black-10 text-center" aria-label="service">
              <div className="container">

                <p className="section-subtitle label-2">Flavors For Royalty</p>

                <h2 className="headline-1 section-title">We Offer Top Notch</h2>

                <p className="section-text">
                  Lorem Ipsum is simply dummy text of the printing and typesetting industry lorem Ipsum has been the industrys
                  standard dummy text ever.
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
                          <a href="#">Breakfast</a>
                        </h3>

                        <a href="#" className="btn-text hover-underline label-2">View Menu</a>

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
                          <a href="#">Appetizers</a>
                        </h3>

                        <a href="#" className="btn-text hover-underline label-2">View Menu</a>

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
                          <a href="#">Drinks</a>
                        </h3>

                        <a href="#" className="btn-text hover-underline label-2">View Menu</a>

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

                  <p className="section-subtitle label-2">Special Dish</p>

                  <h2 className="headline-1 section-title">Lobster Tortellini</h2>

                  <p className="section-text">
                    Lorem Ipsum is simply dummy text of the printingand typesetting industry lorem Ipsum has been the
                    industrys standard dummy text ever since the when an unknown printer took a galley of type.
                  </p>

                  <div className="wrapper">
                    <del className="del body-3">$40.00</del>

                    <span className="span body-1">$20.00</span>
                  </div>

                  <a href="#" className="btn btn-primary">
                    <span className="text text-1">View All Menu</span>

                    <span className="text text-2" aria-hidden="true">View All Menu</span>
                  </a>

                </div>
              </div>

              <img src={Shape4} width="179" height="359" loading="lazy" alt="" className="shape shape-1" />

              <img src={Shape9} width="351" height="462" loading="lazy" alt="" className="shape shape-2" />

            </section>      

          {/* -====#MENU==== */}

          <section className="section menu" aria-label="menu-label" id="menu">
            <div className="container">

              <p className="section-subtitle text-center label-2">Special Selection</p>

              <h2 className="headline-1 section-title text-center">Delicious Menu</h2>

              <ul className="grid-list">

                <li>
                  <div className="menu-card hover:card">

                    <figure className="card-banner img-holder" style={{ width: '100px', height: '100px'}}>
                      <img src={Menu1} width="100" height="100" loading="lazy" alt="Greek Salad"
                        className="img-cover" />
                    </figure>

                    <div>

                      <div className="title-wrapper">
                        <h3 className="title-3">
                          <a href="#" className="card-title">Greek Salad</a>
                        </h3>

                        <span className="badge label-1">Seasonal</span>

                        <span className="span title-2">$25.50</span>
                      </div>

                      <p className="card-text label-1">
                        Tomatoes, green bell pepper, sliced cucumber onion, olives, and feta cheese.
                      </p>

                    </div>

                  </div>
                </li>

                <li>
                  <div className="menu-card hover:card">

                    <figure className="card-banner img-holder" style={{ width: '100px', height: '100px'}}>
                      <img src={Menu2} width="100" height="100" loading="lazy" alt="Lasagne"
                        className="img-cover" />
                    </figure>

                    <div>

                      <div className="title-wrapper">
                        <h3 className="title-3">
                          <a href="#" className="card-title">Lasagne</a>
                        </h3>

                        <span className="span title-2">$40.00</span>
                      </div>

                      <p className="card-text label-1">
                        Vegetables, cheeses, ground meats, tomato sauce, seasonings and spices
                      </p>

                    </div>

                  </div>
                </li>

                <li>
                  <div className="menu-card hover:card">

                    <figure className="card-banner img-holder" style={{ width: '100px', height: '100px'}}>
                      <img src={Menu3} width="100" height="100" loading="lazy" alt="Butternut Pumpkin"
                        className="img-cover" />
                    </figure>

                    <div>

                      <div className="title-wrapper">
                        <h3 className="title-3">
                          <a href="#" className="card-title">Butternut Pumpkin</a>
                        </h3>

                        <span className="span title-2">$10.00</span>
                      </div>

                      <p className="card-text label-1">
                        Typesetting industry lorem Lorem Ipsum is simply dummy text of the priand.
                      </p>

                    </div>

                  </div>
                </li>

                <li>
                  <div className="menu-card hover:card">

                    <figure className="card-banner img-holder" style={{ width: '100', height: '100px'}}>
                      <img src={Menu4} width="100" height="100" loading="lazy" alt="Tokusen Wagyu"
                        className="img-cover" />
                    </figure>

                    <div>

                      <div className="title-wrapper">
                        <h3 className="title-3">
                          <a href="#" className="card-title">Tokusen Wagyu</a>
                        </h3>

                        <span className="badge label-1">New</span>

                        <span className="span title-2">$39.00</span>
                      </div>

                      <p className="card-text label-1">
                        Vegetables, cheeses, ground meats, tomato sauce, seasonings and spices.
                      </p>

                    </div>

                  </div>
                </li>

                <li>
                  <div className="menu-card hover:card">

                    <figure className="card-banner img-holder" style={{ width: '100px', height: '100px'}}>
                      <img src={Menu5} width="100" height="100" loading="lazy" alt="Olivas Rellenas"
                        className="img-cover" />
                    </figure>

                    <div>

                      <div className="title-wrapper">
                        <h3 className="title-3">
                          <a href="#" className="card-title">Olivas Rellenas</a>
                        </h3>

                        <span className="span title-2">$25.00</span>
                      </div>

                      <p className="card-text label-1">
                        Avocados with crab meat, red onion, crab salad stuffed red bell pepper and green bell pepper.
                      </p>

                    </div>

                  </div>
                </li>

                <li>
                  <div className="menu-card hover:card">

                    <figure className="card-banner img-holder" style={{ width: '100px', height: '100px'}}>
                      <img src={Menu6} width="100" height="100" loading="lazy" alt="Opu Fish"
                        className="img-cover" />
                    </figure>

                    <div>

                      <div className="title-wrapper">
                        <h3 className="title-3">
                          <a href="#" className="card-title">Opu Fish</a>
                        </h3>

                        <span className="span title-2">$49.00</span>
                      </div>

                      <p className="card-text label-1">
                        Vegetables, cheeses, ground meats, tomato sauce, seasonings and spices
                      </p>

                    </div>

                  </div>
                </li>

              </ul>

              <p className="menu-text text-center">
                During winter daily from <span className="span">7:00 pm</span> to <span className="span">9:00 pm</span>
              </p>

              <a href="#" className="btn btn-primary">
                <span className="text text-1">View All Menu</span>

                <span className="text text-2" aria-hidden="true">View All Menu</span>
              </a>

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

              <p className="headline-2 testi-text">
                I wanted to thank you for inviting me down for that amazing dinner the other night. The food was
                extraordinary.
              </p>

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

              <p className="section-subtitle label-2">Why Choose Us</p>

              <h2 className="headline-1 section-title">Our Strength</h2>

              <ul className="grid-list">

                <li className="feature-item">
                  <div className="feature-card">

                    <div className="card-icon">
                      <img src={Feature1} width="100" height="80" loading="lazy" alt="icon" />
                    </div>

                    <h3 className="title-2 card-title">Hygienic Food</h3>

                    <p className="label-1 card-text">Lorem Ipsum is simply dummy printing and typesetting.</p>

                  </div>
                </li>

                <li className="feature-item">
                  <div className="feature-card">

                    <div className="card-icon">
                      <img src={Feature2} width="100" height="80" loading="lazy" alt="icon" />
                    </div>

                    <h3 className="title-2 card-title">Fresh Environment</h3>

                    <p className="label-1 card-text">Lorem Ipsum is simply dummy printing and typesetting.</p>

                  </div>
                </li>

                <li className="feature-item">
                  <div className="feature-card">

                    <div className="card-icon">
                      <img src={Feature3} width="100" height="80" loading="lazy" alt="icon" />
                    </div>

                    <h3 className="title-2 card-title">Skilled Chefs</h3>

                    <p className="label-1 card-text">Lorem Ipsum is simply dummy printing and typesetting.</p>

                  </div>
                </li>

                <li className="feature-item">
                  <div className="feature-card">

                    <div className="card-icon">
                      <img src={Feature4}  width="100" height="80" loading="lazy" alt="icon" />
                    </div>

                    <h3 className="title-2 card-title">Event & Party</h3>

                    <p className="label-1 card-text">Lorem Ipsum is simply dummy printing and typesetting.</p>

                  </div>
                </li>

              </ul>

              <img src={Shape7} width="208" height="178" loading="lazy" alt="shape"
                className="shape shape-1" />

              <img src={Shape8} width="120" height="115" loading="lazy" alt="shape"
                className="shape shape-2" />

            </div>
          </section>

          {/* -====#EVENT==== */}
          <section className="section event bg-black-10" aria-label="event">
            <div className="container">

              <p className="section-subtitle label-2 text-center">Recent Updates</p>

              <h2 className="section-title headline-1 text-center">Upcoming Event</h2>

              <ul className="grid-list">

                <li>
                  <div className="event-card has-before hover:shine">

                    <div className="card-banner img-holder" style={{ width: '350px', height: '450px' }}>
                      <img src={Event1} width="350" height="450" loading="lazy"
                        alt="Flavour so good you’ll try to eat with your eyes." className="img-cover" />

                      <time className="publish-date label-2" datetime="2022-09-15">15/09/2022</time>
                    </div>

                    <div className="card-content">
                      <p className="card-subtitle label-2 text-center">Food, Flavour</p>

                      <h3 className="card-title title-2 text-center">
                        Flavour so good you’ll try to eat with your eyes.
                      </h3>
                    </div>

                  </div>
                </li>

                <li>
                  <div className="event-card has-before hover:shine">

                    <div className="card-banner img-holder" style={{width: '350px', height: '450px'}}>
                      <img src={Event2} width="350" height="450" loading="lazy"
                        alt="Flavour so good you’ll try to eat with your eyes." className="img-cover" />

                      <time className="publish-date label-2" datetime="2022-09-08">08/09/2022</time>
                    </div>

                    <div className="card-content">
                      <p className="card-subtitle label-2 text-center">Healthy Food</p>

                      <h3 className="card-title title-2 text-center">
                        Flavour so good you’ll try to eat with your eyes.
                      </h3>
                    </div>

                  </div>
                </li>

                <li>
                  <div className="event-card has-before hover:shine">

                    <div className="card-banner img-holder" style={{width: '350px', height: '450px'}}>
                      <img src={Event3} width="350" height="450" loading="lazy"
                        alt="Flavour so good you’ll try to eat with your eyes." className="img-cover" />

                      <time className="publish-date label-2" datetime="2022-09-03">03/09/2022</time>
                    </div>

                    <div className="card-content">
                      <p className="card-subtitle label-2 text-center">Recipie</p>

                      <h3 className="card-title title-2 text-center">
                        Flavour so good you’ll try to eat with your eyes.
                      </h3>
                    </div>

                  </div>
                </li>

              </ul>

              <a href="#" className="btn btn-primary">
                <span className="text text-1">View Our Blog</span>

                <span className="text text-2" aria-hidden="true">View Our Blog</span>
              </a>

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
                  Restaurant St, Delicious City, London 9578, UK
                </address>

                <a href="mailto:booking@grilli.com" className="body-4 contact-link">booking@grilli.com</a>

                <a href="tel:+88123123456" className="body-4 contact-link">Booking Request : +88-123-123456</a>

                <p className="body-4">
                  Open : 09:00 am - 01:00 pm
                </p>

                <div className="wrapper">
                  <div className="separator"></div>
                  <div className="separator"></div>
                  <div className="separator"></div>
                </div>

                <p className="title-1">Get News & Offers</p>

                <p className="label-1">
                  Subscribe us & Get <span className="span">25% Off.</span>
                </p>

                <form action="" className="input-wrapper">
                  <div className="icon-wrapper">
                    <ion-icon name="mail-outline" aria-hidden="true"></ion-icon>

                    <input type="email" name="email_address" placeholder="Your email" autocomplete="off" className="input-field" />
                  </div>

                  <button type="submit" className="btn btn-secondary">
                    <span className="text text-1">Subscribe</span>

                    <span className="text text-2" aria-hidden="true">Subscribe</span>
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

                <li>
                  <a href="#" className="label-2 footer-link hover-underline">Our Chefs</a>
                </li>

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
                  <a href="#" className="label-2 footer-link hover-underline">Twitter</a>
                </li>

                <li>
                  <a href="#" className="label-2 footer-link hover-underline">Youtube</a>
                </li>

                <li>
                  <a href="#" className="label-2 footer-link hover-underline">Google Map</a>
                </li>

              </ul>

            </div>

            <div className="footer-bottom">

              <p className="copyright">
                &copy; 2022 Grilli. All Rights Reserved | Crafted by <a href="https://github.com/codewithsadee"
                  target="_blank" className="link">codewithsadee</a>
              </p>

            </div>

          </div>
        </footer>

        {/* -====#BACK TO TOP==== */}
        <a href="#top" class="back-top-btn active" aria-label="back to top" data-back-top-btn>
          <ion-icon name="chevron-up" aria-hidden="true"></ion-icon>
        </a>

      </>

    </div>
  );
};

export default Home;