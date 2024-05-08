import React, { useEffect, useState } from "react";
import '../../assets/css/style.css';
import useTranslations from "../../assets/js/useTranslations";

import Navbar from "../../Components/Navbar";
import useExchangeRates from "../../assets/js/useExchangeRates";

import {
    DummyImage,
    Shape5,
    Shape6
} from '../../assets/js/images';

const MeatAndVegetables = () => {
    const [isNavbarActive, setIsNavbarActive] = useState(false);
    const { calculateConvertedPrice } = useExchangeRates();

    const translations = useTranslations();
    const {
        meatVegetables,
        menuRondvlees,
        descRondvlees,
        menuGroenten,
        descGroenten,
        menuVis,
        descVis,
        menuVegetarisch,
        descVegetarisch,
        menuKip,
        descKip
    } = translations.menu;

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

            <section className="section menu" aria-label="menu-label" id="menu" style={{ marginTop: '150px' }}>
                <div className="container">

                    {/* <p className="section-subtitle text-center label-2">Special Selection</p> */}
                    <h2 className="headline-1 section-title text-center">{meatVegetables}</h2>
                    {/* <p className="headline-3 section-title text-center">Keuze uit witte rust, Nasi kuning, Bami of Nasi</p> */}

                    <ul className="grid-list">
                        <li>
                            <div className="menu-card hover:card">

                                <figure className="card-banner img-holder" style={{ width: '100px', height: '100px' }}>
                                    <img src={DummyImage} width="100" height="100" loading="lazy" alt="Opu Fish"
                                        className="img-cover" />
                                </figure>

                                <div>

                                    <div className="title-wrapper">
                                        <h3 className="title-3">
                                            <a href="#" className="card-title">{menuRondvlees}</a>
                                        </h3>

                                        <span className="span title-2">{calculateConvertedPrice(4.50)} per 100g</span>
                                    </div>

                                    <p className="card-text label-1">
                                        {descRondvlees}
                                    </p>

                                </div>

                            </div>
                        </li>
                        <li>
                            <div className="menu-card hover:card">

                                <figure className="card-banner img-holder" style={{ width: '100px', height: '100px' }}>
                                    <img src={DummyImage} width="100" height="100" loading="lazy" alt="Opu Fish"
                                        className="img-cover" />
                                </figure>

                                <div>

                                    <div className="title-wrapper">
                                        <h3 className="title-3">
                                            <a href="#" className="card-title">{menuVis}</a>
                                        </h3>

                                        <span className="span title-2">{calculateConvertedPrice(4.75)} per 100g</span>
                                    </div>

                                    <p className="card-text label-1">
                                        {descVis}
                                    </p>

                                </div>

                            </div>
                        </li>
                        <li>
                            <div className="menu-card hover:card">

                                <figure className="card-banner img-holder" style={{ width: '100px', height: '100px' }}>
                                    <img src={DummyImage} width="100" height="100" loading="lazy" alt="Opu Fish"
                                        className="img-cover" />
                                </figure>

                                <div>

                                    <div className="title-wrapper">
                                        <h3 className="title-3">
                                            <a href="#" className="card-title">{menuGroenten}</a>
                                        </h3>

                                        <span className="span title-2">{calculateConvertedPrice(3.25)} per 100g</span>
                                    </div>

                                    <p className="card-text label-1">
                                        {descGroenten}
                                    </p>

                                </div>

                            </div>
                        </li>
                        <li>
                            <div className="menu-card hover:card">

                                <figure className="card-banner img-holder" style={{ width: '100px', height: '100px' }}>
                                    <img src={DummyImage} width="100" height="100" loading="lazy" alt="Opu Fish"
                                        className="img-cover" />
                                </figure>

                                <div>

                                    <div className="title-wrapper">
                                        <h3 className="title-3">
                                            <a href="#" className="card-title">{menuVegetarisch}</a>
                                        </h3>

                                        <span className="span title-2">{calculateConvertedPrice(3.50)} per 100g</span>
                                    </div>

                                    <p className="card-text label-1">
                                    {descVegetarisch}

                                    </p>

                                </div>

                            </div>
                        </li>
                        <li>
                            <div className="menu-card hover:card">

                                <figure className="card-banner img-holder" style={{ width: '100px', height: '100px' }}>
                                    <img src={DummyImage} width="100" height="100" loading="lazy" alt="Opu Fish"
                                        className="img-cover" />
                                </figure>

                                <div>

                                    <div className="title-wrapper">
                                        <h3 className="title-3">
                                            <a href="#" className="card-title">{menuKip}</a>
                                        </h3>

                                        <span className="span title-2">{calculateConvertedPrice(3.95)} per 100g</span>
                                    </div>

                                    <p className="card-text label-1">
                                      {descKip}
                                    </p>

                                </div>

                            </div>
                        </li>





                    </ul>

                    <img src={Shape5} width="921" height="1036" loading="lazy" alt="shape"
                        className="shape shape-2 move-anim" style={{ marginTop: '50px' }} />
                    <img src={Shape6} width="343" height="345" loading="lazy" alt="shape"
                        className="shape shape-3 move-anim" />
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

export default MeatAndVegetables;