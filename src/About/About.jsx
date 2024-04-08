import React from 'react';
import { Helmet } from 'react-helmet';

import './About.css';

const About = () => {
return (
<html lang="en">
      <head>
        <meta charSet="UTF-8" />
        <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />

        {/* Favicon */}
        <link rel="shortcut icon" href="./favicon.svg" type="image/svg+xml" />

        {/* Google Fonts */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="true" />
        <link href="https://fonts.googleapis.com/css2?family=DM+Sans:wght@400;700&family=Forum&display=swap" rel="stylesheet" />

        {/* Custom CSS */}
        <link rel="stylesheet" href="../assets/css/style.css" />

        {/* Preload images */}
        <link rel="preload" as="image" href="./assets/images/hero-slider-1.jpg" />
        <link rel="preload" as="image" href="./assets/images/hero-slider-2.jpg" />
        <link rel="preload" as="image" href="./assets/images/hero-slider-3.jpg" />
      </head>

      <body id="top">

  {/* <!-- 
    - #PRELOADER
  --> */}

  <div className="preload" data-preaload>
    <div className="circle"></div>
    <p className="text">Grilli</p>
  </div>




{/* 
  <!-- 
    - #TOP BAR
  --> */}

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





  {/* <!-- 
    - #HEADER
  --> */}

  <header className="header" data-header>
    <div className="container">

      <a href="#" className="logo">
        <img src="./assets/images/logo.svg" width="160" height="50" alt="Grilli - Home" />
      </a>

      <nav className="navbar" data-navbar>

        <button className="close-btn" aria-label="close menu" data-nav-toggler>
          <ion-icon name="close-outline" aria-hidden="true"></ion-icon>
        </button>

        <a href="#" className="logo">
          <img src="./assets/images/logo.svg" width="160" height="50" alt="Grilli - Home" />
        </a>

        <ul className="navbar-list">

          <li className="navbar-item">
            <a href="#home" className="navbar-link hover-underline active">
              <div className="separator"></div>

              <span className="span">Home</span>
            </a>
          </li>

          <li className="navbar-item">
            <a href="#menu" className="navbar-link hover-underline">
              <div className="separator"></div>

              <span className="span">Menus</span>
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

      <button className="nav-open-btn" aria-label="open menu" data-nav-toggler>
        <span className="line line-1"></span>
        <span className="line line-2"></span>
        <span className="line line-3"></span>
      </button>

      <div className="overlay" data-nav-toggler data-overlay></div>

    </div>
  </header>





  <main>
    <article>

      {/* <!-- 
        - #HERO
      --> */}

      <section className="hero text-center" aria-label="home" id="home">

        <ul className="hero-slider" data-hero-slider>

          <li className="slider-item active" data-hero-slider-item>

            <div className="slider-bg">
              <img src="./assets/images/hero-slider-1.jpg" width="1880" height="950" alt="" className="img-cover" />
            </div>

            <p className="label-2 section-subtitle slider-reveal">Tradational & Hygine</p>

            <h1 className="display-1 hero-title slider-reveal">
              For the love of <br />
              delicious food
            </h1>

            <p className="body-2 hero-text slider-reveal">
              Come with family & feel the joy of mouthwatering food
            </p>

            <a href="#" className="btn btn-primary slider-reveal">
              <span className="text text-1">View Our Menu</span>

              <span className="text text-2" aria-hidden="true">View Our Menu</span>
            </a>

          </li>

          <li className="slider-item" data-hero-slider-item>

            <div className="slider-bg">
              <img src="./assets/images/hero-slider-2.jpg" width="1880" height="950" alt="" className="img-cover" />
            </div>

            <p className="label-2 section-subtitle slider-reveal">delightful experience</p>

            <h1 className="display-1 hero-title slider-reveal">
              Flavors Inspired by <br />
              the Seasons
            </h1>

            <p className="body-2 hero-text slider-reveal">
              Come with family & feel the joy of mouthwatering food
            </p>

            <a href="#" className="btn btn-primary slider-reveal">
              <span className="text text-1">View Our Menu</span>

              <span className="text text-2" aria-hidden="true">View Our Menu</span>
            </a>

          </li>

          <li className="slider-item" data-hero-slider-item>

            <div className="slider-bg">
              <img src="./assets/images/hero-slider-3.jpg" width="1880" height="950" alt="" className="img-cover" />
            </div>

            <p className="label-2 section-subtitle slider-reveal">amazing & delicious</p>

            <h1 className="display-1 hero-title slider-reveal">
              Where every flavor <br />
              tells a story
            </h1>

            <p className="body-2 hero-text slider-reveal">
              Come with family & feel the joy of mouthwatering food
            </p>

            <a href="#" className="btn btn-primary slider-reveal">
              <span className="text text-1">View Our Menu</span>

              <span className="text text-2" aria-hidden="true">View Our Menu</span>
            </a>

          </li>

        </ul>

        <button className="slider-btn prev" aria-label="slide to previous" data-prev-btn>
          <ion-icon name="chevron-back"></ion-icon>
        </button>

        <button className="slider-btn next" aria-label="slide to next" data-next-btn>
          <ion-icon name="chevron-forward"></ion-icon>
        </button>

        <a href="#" className="hero-btn has-after">
          <img src="./assets/images/hero-icon.png" width="48" height="48" alt="booking icon" />

          <span className="label-2 text-center span">Book A Table</span>
        </a>

      </section>





      {/* <!-- 
        - #SERVICE
      --> */}

      <section className="section service bg-black-10 text-center" aria-label="service" >
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
                  <figure className="card-banner img-holder" style="--width: 285; --height: 336;">
                    <img src="./assets/images/service-1.jpg" width="285" height="336" loading="lazy" alt="Breakfast"
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
                  <figure className="card-banner img-holder" style="--width: 285; --height: 336;">
                    <img src="./assets/images/service-2.jpg" width="285" height="336" loading="lazy" alt="Appetizers"
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
                  <figure className="card-banner img-holder" style="--width: 285; --height: 336;">
                    <img src="./assets/images/service-3.jpg" width="285" height="336" loading="lazy" alt="Drinks"
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

          <img src="./assets/images/shape-1.png" width="246" height="412" loading="lazy" alt="shape"
            className="shape shape-1 move-anim" />
          <img src="./assets/images/shape-2.png" width="343" height="345" loading="lazy" alt="shape"
            className="shape shape-2 move-anim" />

        </div>
      </section>




{/* 
      <!-- 
        - #ABOUT
      --> */}

      <section className="section about text-center" aria-labelledby="about-label" id="about">
        <div className="container">

          <div className="about-content">

            <p className="label-2 section-subtitle" id="about-label">Our Story</p>

            <h2 className="headline-1 section-title">Every Fla vor Tells a Story</h2>

            <p className="section-text">
              Lorem Ipsum is simply dummy text of the printingand typesetting industry lorem Ipsum has been the
              industrys standard dummy text ever since the when an unknown printer took a galley of type and scrambled
              it to make a type specimen book It has survived not only five centuries, but also the leap into.
            </p>

            <div className="contact-label">Book Through Call</div>

            <a href="tel:+804001234567" className="body-1 contact-number hover-underline">+80 (400) 123 4567</a>

            <a href="#" className="btn btn-primary">
              <span className="text text-1">Read More</span>

              <span className="text text-2" aria-hidden="true">Read More</span>
            </a>

          </div>

          <figure className="about-banner">

            <img src="./assets/images/about-banner.jpg" width="570" height="570" loading="lazy" alt="about banner"
              className="w-100" data-parallax-item data-parallax-speed="1" />

            <div className="abs-img abs-img-1 has-before" data-parallax-item data-parallax-speed="1.75">
              <img src="./assets/images/about-abs-image.jpg" width="285" height="285" loading="lazy" alt=""
                className="w-100" />
            </div>

            <div className="abs-img abs-img-2 has-before">
              <img src="./assets/images/badge-2.png" width="133" height="134" loading="lazy" alt="" />
            </div>

          </figure>

          <img src="./assets/images/shape-3.png" width="197" height="194" loading="lazy" alt="" className="shape" />

        </div>
      </section>





      {/* <!-- 
        - #SPECIAL DISH
      --> */}

      <section className="special-dish text-center" aria-labelledby="dish-label">

        <div className="special-dish-banner">
          <img src="./assets/images/special-dish-banner.jpg" width="940" height="900" loading="lazy" alt="special dish"
            className="img-cover" />
        </div>

        <div className="special-dish-content bg-black-10">
          <div className="container">

            <img src="./assets/images/badge-1.png" width="28" height="41" loading="lazy" alt="badge" className="abs-img" />

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

        <img src="./assets/images/shape-4.png" width="179" height="359" loading="lazy" alt="" className="shape shape-1" />

        <img src="./assets/images/shape-9.png" width="351" height="462" loading="lazy" alt="" className="shape shape-2" />

      </section>




{/* 
      <!-- 
        - #MENU
      --> */}

      <section className="section menu" aria-label="menu-label" id="menu">
        <div className="container">

          <p className="section-subtitle text-center label-2">Special Selection</p>

          <h2 className="headline-1 section-title text-center">Delicious Menu</h2>

          <ul className="grid-list">

            <li>
              <div className="menu-card hover:card">

                <figure className="card-banner img-holder" style="--width: 100; --height: 100;">
                  <img src="./assets/images/menu-1.png" width="100" height="100" loading="lazy" alt="Greek Salad"
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

                <figure className="card-banner img-holder" style="--width: 100; --height: 100;">
                  <img src="./assets/images/menu-2.png" width="100" height="100" loading="lazy" alt="Lasagne"
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

                <figure className="card-banner img-holder" style="--width: 100; --height: 100;">
                  <img src="./assets/images/menu-3.png" width="100" height="100" loading="lazy" alt="Butternut Pumpkin"
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

                <figure className="card-banner img-holder" style="--width: 100; --height: 100;">
                  <img src="./assets/images/menu-4.png" width="100" height="100" loading="lazy" alt="Tokusen Wagyu"
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

                <figure className="card-banner img-holder" style="--width: 100; --height: 100;">
                  <img src="./assets/images/menu-5.png" width="100" height="100" loading="lazy" alt="Olivas Rellenas"
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

                <figure className="card-banner img-holder" style="--width: 100; --height: 100;">
                  <img src="./assets/images/menu-6.png" width="100" height="100" loading="lazy" alt="Opu Fish"
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

          <img src="./assets/images/shape-5.png" width="921" height="1036" loading="lazy" alt="shape"
            className="shape shape-2 move-anim" />
          <img src="./assets/images/shape-6.png" width="343" height="345" loading="lazy" alt="shape"
            className="shape shape-3 move-anim" />

        </div>
      </section>





      {/* <!-- 
        - #TESTIMONIALS
      --> */}

      <section className="section testi text-center has-bg-image"
        style="background-image: url('./assets/images/testimonial-bg.jpg')" aria-label="testimonials">
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
            <img src="./assets/images/testi-avatar.jpg" width="100" height="100" loading="lazy" alt="Sam Jhonson"
              className="img" />

            <p className="label-2 profile-name">Sam Jhonson</p>
          </div>

        </div>
      </section>





      {/* <!-- 
        - #RESERVATION
      --> */}

      <section className="reservation">
        <div className="container">

          <div className="form reservation-form bg-black-10">

            <form action="" className="form-left">

              <h2 className="headline-1 text-center">Online Reservation</h2>

              <p className="form-text text-center">
                Booking request <a href="tel:+88123123456" className="link">+88-123-123456</a>
                or fill out the order form
              </p>

              <div className="input-wrapper">
                <input type="text" name="name" placeholder="Your Name" autocomplete="off" className="input-field" />

                <input type="tel" name="phone" placeholder="Phone Number" autocomplete="off" className="input-field" />
              </div>

              <div className="input-wrapper">

                <div className="icon-wrapper">
                  <ion-icon name="person-outline" aria-hidden="true"></ion-icon>

                  <select name="person" className="input-field">
                    <option value="1-person">1 Person</option>
                    <option value="2-person">2 Person</option>
                    <option value="3-person">3 Person</option>
                    <option value="4-person">4 Person</option>
                    <option value="5-person">5 Person</option>
                    <option value="6-person">6 Person</option>
                    <option value="7-person">7 Person</option>
                  </select>

                  <ion-icon name="chevron-down" aria-hidden="true"></ion-icon>
                </div>

                <div className="icon-wrapper">
                  <ion-icon name="calendar-clear-outline" aria-hidden="true"></ion-icon>

                  <input type="date" name="reservation-date" className="input-field" />

                  <ion-icon name="chevron-down" aria-hidden="true"></ion-icon>
                </div>

                <div className="icon-wrapper">
                  <ion-icon name="time-outline" aria-hidden="true"></ion-icon>

                  <select name="person" className="input-field">
                    <option value="08:00am">08 : 00 am</option>
                    <option value="09:00am">09 : 00 am</option>
                    <option value="010:00am">10 : 00 am</option>
                    <option value="011:00am">11 : 00 am</option>
                    <option value="012:00am">12 : 00 am</option>
                    <option value="01:00pm">01 : 00 pm</option>
                    <option value="02:00pm">02 : 00 pm</option>
                    <option value="03:00pm">03 : 00 pm</option>
                    <option value="04:00pm">04 : 00 pm</option>
                    <option value="05:00pm">05 : 00 pm</option>
                    <option value="06:00pm">06 : 00 pm</option>
                    <option value="07:00pm">07 : 00 pm</option>
                    <option value="08:00pm">08 : 00 pm</option>
                    <option value="09:00pm">09 : 00 pm</option>
                    <option value="10:00pm">10 : 00 pm</option>
                  </select>

                  <ion-icon name="chevron-down" aria-hidden="true"></ion-icon>
                </div>

              </div>

              <textarea name="message" placeholder="Message" autocomplete="off" className="input-field"></textarea>

              <button type="submit" className="btn btn-secondary">
                <span className="text text-1">Book A Table</span>

                <span className="text text-2" aria-hidden="true">Book A Table</span>
              </button>

            </form>

            <div className="form-right text-center" style="background-image: url('./assets/images/form-pattern.png')">

              <h2 className="headline-1 text-center">Contact Us</h2>

              <p className="contact-label">Booking Request</p>

              <a href="tel:+88123123456" className="body-1 contact-number hover-underline">+88-123-123456</a>

              <div className="separator"></div>

              <p className="contact-label">Location</p>

              <address className="body-4">
                Restaurant St, Delicious City, <br />
                London 9578, UK
              </address>

              <p className="contact-label">Lunch Time</p>

              <p className="body-4">
                Monday to Sunday <br />
                11.00 am - 2.30pm
              </p>

              <p className="contact-label">Dinner Time</p>

              <p className="body-4">
                Monday to Sunday <br />
                05.00 pm - 10.00pm
              </p>

            </div>

          </div>

        </div>
      </section>





      {/* <!-- 
        - #FEATURES
      --> */}

      <section className="section features text-center" aria-label="features">
        <div className="container">

          <p className="section-subtitle label-2">Why Choose Us</p>

          <h2 className="headline-1 section-title">Our Strength</h2>

          <ul className="grid-list">

            <li className="feature-item">
              <div className="feature-card">

                <div className="card-icon">
                  <img src="./assets/images/features-icon-1.png" width="100" height="80" loading="lazy" alt="icon" />
                </div>

                <h3 className="title-2 card-title">Hygienic Food</h3>

                <p className="label-1 card-text">Lorem Ipsum is simply dummy printing and typesetting.</p>

              </div>
            </li>

            <li className="feature-item">
              <div className="feature-card">

                <div className="card-icon">
                  <img src="./assets/images/features-icon-2.png" width="100" height="80" loading="lazy" alt="icon" />
                </div>

                <h3 className="title-2 card-title">Fresh Environment</h3>

                <p className="label-1 card-text">Lorem Ipsum is simply dummy printing and typesetting.</p>

              </div>
            </li>

            <li className="feature-item">
              <div className="feature-card">

                <div className="card-icon">
                  <img src="./assets/images/features-icon-3.png" width="100" height="80" loading="lazy" alt="icon" />
                </div>

                <h3 className="title-2 card-title">Skilled Chefs</h3>

                <p className="label-1 card-text">Lorem Ipsum is simply dummy printing and typesetting.</p>

              </div>
            </li>

            <li className="feature-item">
              <div className="feature-card">

                <div className="card-icon">
                  <img src="./assets/images/features-icon-4.png" width="100" height="80" loading="lazy" alt="icon" />
                </div>

                <h3 className="title-2 card-title">Event & Party</h3>

                <p className="label-1 card-text">Lorem Ipsum is simply dummy printing and typesetting.</p>

              </div>
            </li>

          </ul>

          <img src="./assets/images/shape-7.png" width="208" height="178" loading="lazy" alt="shape"
            className="shape shape-1" />

          <img src="./assets/images/shape-8.png" width="120" height="115" loading="lazy" alt="shape"
            className="shape shape-2" />

        </div>
      </section>



{/* 

      <!-- 
        - #EVENT
      --> */}

      <section className="section event bg-black-10" aria-label="event">
        <div className="container">

          <p className="section-subtitle label-2 text-center">Recent Updates</p>

          <h2 className="section-title headline-1 text-center">Upcoming Event</h2>

          <ul className="grid-list">

            <li>
              <div className="event-card has-before hover:shine">

                <div className="card-banner img-holder" style="--width: 350; --height: 450;">
                  <img src="./assets/images/event-1.jpg" width="350" height="450" loading="lazy"
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

                <div className="card-banner img-holder" style="--width: 350; --height: 450;">
                  <img src="./assets/images/event-2.jpg" width="350" height="450" loading="lazy"
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

                <div className="card-banner img-holder" style="--width: 350; --height: 450;">
                  <img src="./assets/images/event-3.jpg" width="350" height="450" loading="lazy"
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

    </article>
  </main>




{/* 
  <!-- 
    - #FOOTER
  --> */}

  <footer className="footer section has-bg-image text-center"
    style="background-image: url('./assets/images/footer-bg.jpg')">
    <div className="container">

      <div className="footer-top grid-list">

        <div className="footer-brand has-before has-after">

          <a href="#" className="logo">
            <img src="./assets/images/logo.svg" width="160" height="50" loading="lazy" alt="grilli home" />
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



        {/* Custom JS */}
        <script src="./assets/js/script.js"></script>

        {/* Ionicon */}
        <script type="module" src="https://unpkg.com/ionicons@5.5.2/dist/ionicons/ionicons.esm.js"></script>
        <script nomodule src="https://unpkg.com/ionicons@5.5.2/dist/ionicons/ionicons.js"></script>
      </body>
    </html>
  );
};

export default About;
