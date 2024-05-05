import React, { useEffect, useState } from "react";
import '../../assets/css/style.css';
import axios from "axios";

import Navbar from "../../Components/Navbar";
import useExchangeRates from "../../assets/js/useExchangeRates";
import {
    DummyImage,
    Gadogado,
    NasiRames,
    SateMaaltijden,
    Shape5,
    Shape6
} from '../../assets/js/images';
import { useTranslation } from "react-i18next";
const Meals = () => {
    const [isNavbarActive, setIsNavbarActive] = useState(false);
    const { calculateConvertedPrice } = useExchangeRates();

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
                    <h2 className="headline-1 section-title text-center">Maaltijden</h2>
                    {/* <p className="headline-3 section-title text-center">Keuze uit witte rust, Nasi kuning, Bami of Nasi</p> */}

                    <ul className="grid-list">
                        <li>
                            <div className="menu-card hover:card">

                                <figure className="card-banner img-holder" style={{ width: '100px', height: '100px' }}>
                                    <img src={NasiRames} width="100" height="100" loading="lazy" alt="Opu Fish"
                                        className="img-cover" />
                                </figure>

                                <div>

                                    <div className="title-wrapper">
                                        <h3 className="title-3">
                                            <a href="#" className="card-title">Rames Regular</a>
                                        </h3>

                                        <span className="span title-2">{calculateConvertedPrice(12.00)}</span>
                                    </div>

                                    <p className="card-text label-1">
                                        1 Soorten vlees of kip naar keuze, 1 groenten.
                                    </p>

                                </div>

                            </div>
                        </li>
                        {/* <li>
                            <div className="menu-card hover:card">

                                <figure className="card-banner img-holder" style={{ width: '100px', height: '100px' }}>
                                    <img src={Menu1} width="100" height="100" loading="lazy" alt="Greek Salad"
                                        className="img-cover" />
                                </figure>

                                <div>

                                    <div className="title-wrapper">
                                        <h3 className="title-3">
                                            <a href="#" className="card-title">Rames Regular</a>
                                        </h3>

                                        <span className="badge label-1">Seasonal</span>

                                        <span className="span title-2">€12.95</span>
                                    </div>

                                    <p className="card-text label-1">
                                        1 Soort vlees of kip naar keuze, 1 groenten.
                                    </p>

                                </div>

                            </div>
                        </li> */}

                        <li>
                            <div className="menu-card hover:card">

                                <figure className="card-banner img-holder" style={{ width: '100px', height: '100px' }}>
                                    <img src={Gadogado} width="100" height="100" loading="lazy" alt="Opu Fish"
                                        className="img-cover" />
                                </figure>

                                <div>

                                    <div className="title-wrapper">
                                        <h3 className="title-3">
                                            <a href="#" className="card-title">Gado - gado</a>
                                        </h3>

                                        <span className="span title-2">€9.00</span>
                                    </div>

                                    <p className="card-text label-1">
                                        Gestoomde groenten met pindasaus.
                                    </p>

                                </div>

                            </div>
                        </li>
                        <li>
                            <div className="menu-card hover:card">

                                <figure className="card-banner img-holder" style={{ width: '100px', height: '100px' }}>
                                    <img src={NasiRames} width="100" height="100" loading="lazy" alt="Opu Fish"
                                        className="img-cover" />
                                </figure>

                                <div>

                                    <div className="title-wrapper">
                                        <h3 className="title-3">
                                            <a href="#" className="card-title">Rames Ikan</a>
                                        </h3>

                                        <span className="span title-2">€13.95</span>
                                    </div>

                                    <p className="card-text label-1">
                                        Garnalen of makreel, 1 groenten.
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
                                            <a href="#" className="card-title">Soto Ayam</a>
                                        </h3>

                                        <span className="span title-2">€9.00</span>
                                    </div>

                                    <p className="card-text label-1">
                                        Witte rijst/mihoen met kip, tauge en ejeren, gebokken, uitjen chipsfrietjes.
                                    </p>

                                </div>

                            </div>
                        </li>
                        <li>
                            <div className="menu-card hover:card">

                                <figure className="card-banner img-holder" style={{ width: '100px', height: '100px' }}>
                                    <img src={NasiRames} width="100" height="100" loading="lazy" alt="Opu Fish"
                                        className="img-cover" />
                                </figure>

                                <div>

                                    <div className="title-wrapper">
                                        <h3 className="title-3">
                                            <a href="#" className="card-title">Rames Speciaal</a>
                                        </h3>

                                        <span className="span title-2">€15.95</span>
                                    </div>

                                    <p className="card-text label-1">
                                        2 Soorten vlees of kip, 2 groenten,
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
                                            <a href="#" className="card-title">Sate Ayam Los</a>
                                        </h3>

                                        <span className="span title-2">€9.00</span>
                                    </div>

                                    <p className="card-text label-1">
                                        3 Stokjes kipsate.
                                    </p>

                                </div>

                            </div>
                        </li>
                        <li>
                            <div className="menu-card hover:card">

                                <figure className="card-banner img-holder" style={{ width: '100px', height: '100px' }}>
                                    <img src={NasiRames} width="100" height="100" loading="lazy" alt="Opu Fish"
                                        className="img-cover" />
                                </figure>

                                <div>

                                    <div className="title-wrapper">
                                        <h3 className="title-3">
                                            <a href="#" className="card-title">Rames Ikan Speciaal</a>
                                        </h3>

                                        <span className="span title-2">€17.50</span>
                                    </div>

                                    <p className="card-text label-1">
                                        1 Soort vlees of kip & garnalen of makreel, 2 groenten.
                                    </p>

                                </div>

                            </div>
                        </li>
                        <li>
                            <div className="menu-card hover:card">

                                <figure className="card-banner img-holder" style={{ width: '100px', height: '100px' }}>
                                    <img src={NasiRames} width="100" height="100" loading="lazy" alt="Opu Fish"
                                        className="img-cover" />
                                </figure>

                                <div>

                                    <div className="title-wrapper">
                                        <h3 className="title-3">
                                            <a href="#" className="card-title">Nasi Rames Vegetarisch</a>
                                        </h3>

                                        <span className="span title-2">€11.00</span>
                                    </div>

                                    <p className="card-text label-1">
                                        2 Groenten + Tempe Gerecht
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
                                            <a href="#" className="card-title">Niang Speciaal</a>
                                        </h3>

                                        <span className="span title-2">€18.50</span>
                                    </div>

                                    <p className="card-text label-1">
                                        2 Soorten vlees of kip, 1 stokje sate en ei + mini lumpia.
                                    </p>

                                </div>

                            </div>
                        </li>
                        <li>
                            <div className="menu-card hover:card">

                                <figure className="card-banner img-holder" style={{ width: '100px', height: '100px' }}>
                                    <img src={SateMaaltijden} width="100" height="100" loading="lazy" alt="Opu Fish"
                                        className="img-cover" />
                                </figure>

                                <div>

                                    <div className="title-wrapper">
                                        <h3 className="title-3">
                                            <a href="#" className="card-title">Sate Ayam Maaltijd</a>
                                        </h3>

                                        <span className="span title-2">€12.00</span>
                                    </div>

                                    <p className="card-text label-1">
                                        3 Shakjes kipsate met witte rijst of nasi bami en groenten.
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
                                            <a href="#" className="card-title">Niang Ikan Speciaal</a>
                                        </h3>

                                        <span className="span title-2">€20.95</span>
                                    </div>

                                    <p className="card-text label-1">
                                        2 Soorten vlees of kip, garnalen of makreel, 2 groenten,
                                        ei & stokje sate + mini lumpia.
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

export default Meals;