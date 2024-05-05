// import React from "react";
// import './About.css';

import React, { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import Navbar from "../Components/Navbar";
import '../assets/css/style.css';
import useTranslations from '../assets/js/useTranslations';

import { AboutBanner, Badge2, Shape3 } from '../assets/js/images';


const AboutUs = () => {
    const translations = useTranslations();
    const {
        ourStory,
        flavorStory,
        descStory
    } = translations.about;
    const [xOffset, setXOffset] = useState(0);
    const [yOffset, setYOffset] = useState(0);

    const [isNavbarActive, setIsNavbarActive] = useState(false);

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



    return (
        <div>
            <Navbar isNavbarActive={isNavbarActive} />
            {/* <div className="slider-bg">
        <img src={Slider2} width="700" height="450" alt="" className="" style={{ width: '100%', height: 'auto',marginTop: '-527px'}}/>
      </div> */}

            {/* -====#ABOUT==== */}

            <section className="section about text-center" aria-labelledby="about-label" id="about" style={{ marginTop: '100px' }}>
                <div className="container">

                    <div className="about-content">

                        <p className="label-2 section-subtitle" id="about-label">{ourStory}</p>

                        <h2 className="headline-1 section-title">{flavorStory}</h2>

                        <p className="section-text">{descStory}</p>

                        <div className="contact-label">Book Through Call</div>

                        <a href="tel:+31631034439" className="body-1 contact-number hover-underline">+31 6 31034439</a>

                        {/* <a href="#" className="btn btn-primary">
                            <span className="text text-1">Read More</span>

                            <span className="text text-2" aria-hidden="true">Read More</span>
                        </a> */}

                    </div>

                    <figure className="about-banner">
                        <img
                            src={AboutBanner}
                            width="570"
                            height="570"
                            loading="lazy"
                            alt="about banner"
                            className="w-100"
                            style={{
                                transform: `translate(${xOffset}px, ${yOffset}px)`
                            }}
                        />
                        {/* <div
                            className="abs-img abs-img-1 has-before"
                            style={{
                                transform: `translate(${xOffset * 1}px, ${yOffset * 1}px)`
                            }}
                        >
                            <img src={AboutAbs} width="285" height="285" loading="lazy" alt=""
                                className="w-100" />
                        </div> */}

                        <div className="abs-img abs-img-2 has-before">
                            <img src={Badge2} width="133" height="134" loading="lazy" alt="" />
                        </div>

                    </figure>
                    <img src={Shape3}   />

                </div>
            </section>
            {/* -====#FOOTER==== */}

            <footer className="footer section has-bg-image text-center" >
                <div className="container">
                    <div className="footer-bottom">
                        <p className="copyright">
                            &copy; 2024 Taste of Niang. All Rights Reserved
                        </p>
                    </div>
                </div>
            </footer>
        </div>
    )
}

export default AboutUs;