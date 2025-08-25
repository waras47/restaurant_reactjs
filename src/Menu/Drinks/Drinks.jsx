import React, { useEffect, useState } from "react";
import '../../assets/css/style.css';
import useTranslations from "../../assets/js/useTranslations";

import Navbar from "../../Components/Navbar";
import useExchangeRates from "../../assets/js/useExchangeRates";

import {
    Cola,
    EsCendol,
    Fernandes,
    Fuze,
    Haud,
    Petflessen,
    RedBull,
    Shape5,
    Shape6
} from '../../assets/js/images';

const Drinks = () => {
    const [isNavbarActive, setIsNavbarActive] = useState(false);
    const { calculateConvertedPrice } = useExchangeRates();

    const translations = useTranslations();
    const {
        titleDranken,
        menuFrisdrankInBuk,
        menuEsCampur,
        menuFrisdrankInPetflessen,
        menuEsTeller,
        menuEsTjendol,
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
                    <h2 className="headline-1 section-title text-center">{titleDranken}</h2>
                    {/* <p className="headline-3 section-title text-center">Keuze uit witte rust, Nasi kuning, Bami of Nasi</p> */}

                    <ul className="grid-list">
                        
                       
                        <li>
                            <div className="menu-card hover:card">

                                <figure className="card-banner img-holder" style={{ width: '60px', height: '60px' }}>
                                    <img src={Petflessen} width="60" height="60" loading="lazy" alt="Opu Fish"
                                        className="img-cover" />
                                </figure>

                                <div>

                                    <div className="title-wrapper">
                                        <h3 className="title-3">
                                            <a href="#" className="card-title">Iam Super Juice</a>
                                        </h3>

                                        <span className="span title-2">{calculateConvertedPrice(2.95)}</span>
                                    </div>

                                    <p className="card-text label-1">
                                        {/* 1 Soorten vlees of kip naar keuze, 1 groenten. */}
                                        Mangosteen / Passipn Fruit / Pink Guava / Soursop / Coconut / Mango
                                    </p>

                                </div>

                            </div>
                        </li>
                        <li>
                            <div className="menu-card hover:card">

                                <figure className="card-banner img-holder" style={{ width: '60px', height: '60px' }}>
                                    <img src={Fuze} width="60" height="60" loading="lazy" alt="Opu Fish"
                                        className="img-cover" />
                                </figure>

                                <div>

                                    <div className="title-wrapper">
                                        <h3 className="title-3">
                                            <a href="#" className="card-title">Fuze Tea</a>
                                        </h3>

                                        <span className="span title-2">{calculateConvertedPrice(2.95)}</span>
                                    </div>

                                    <p className="card-text label-1">
                                        {/* 1 Soorten vlees of kip naar keuze, 1 groenten. */}
                                        Manggo / Green tea / Black Tea
                                    </p>

                                </div>

                            </div>
                        </li>
                        {/* Cola */}
                        <li>
                            <div className="menu-card hover:card">

                                <figure className="card-banner img-holder" style={{ width: '60px', height: '60px' }}>
                                    <img src={Cola} width="60" height="60" loading="lazy" alt="Opu Fish"
                                        className="img-cover" />
                                </figure>

                                <div>

                                    <div className="title-wrapper">
                                        <h3 className="title-3">
                                            <a href="#" className="card-title">Coca-Cola</a>
                                        </h3>

                                        <span className="span title-2">{calculateConvertedPrice(2.95)}</span>
                                    </div>

                                    <p className="card-text label-1">
                                        {/* 1 Soorten vlees of kip naar keuze, 1 groenten. */}
                                        Original Taste / Zero Sugar
                                    </p>

                                </div>
                                

                            </div>
                        </li>
                        <li>
                            <div className="menu-card hover:card">

                                <figure className="card-banner img-holder" style={{ width: '60px', height: '60px' }}>
                                    <img src={RedBull} width="60" height="60" loading="lazy" alt="Opu Fish"
                                        className="img-cover" />
                                </figure>

                                <div>

                                    <div className="title-wrapper">
                                        <h3 className="title-3">
                                            <a href="#" className="card-title">Red Bull Energy Drink</a>
                                        </h3>

                                        <span className="span title-2">{calculateConvertedPrice(3.00)}</span>
                                    </div>

                                    <p className="card-text label-1">
                                        {/* 1 Soorten vlees of kip naar keuze, 1 groenten. */}
                                    </p>

                                </div>
                                

                            </div>
                        </li>
                        <li>
                            <div className="menu-card hover:card">

                                <figure className="card-banner img-holder" style={{ width: '60px', height: '60px' }}>
                                    <img src={Fernandes} width="60" height="60" loading="lazy" alt="Opu Fish"
                                        className="img-cover" />
                                </figure>

                                <div>

                                    <div className="title-wrapper">
                                        <h3 className="title-3">
                                            <a href="#" className="card-title">Fernandes</a>
                                        </h3>

                                        <span className="span title-2">{calculateConvertedPrice(2.95)}</span>
                                    </div>

                                    <p className="card-text label-1">
                                        {/* 1 Soorten vlees of kip naar keuze, 1 groenten. */}
                                        Cream Ginger / Super Piniapple / Cherry Bouquet / Red Grape / Green punch
                                    </p>

                                </div>
                                

                            </div>
                        </li>
                        <li>
                            <div className="menu-card hover:card">

                                <figure className="card-banner img-holder" style={{ width: '60px', height: '60px' }}>
                                    <img src={Haud} width="60" height="60" loading="lazy" alt="Opu Fish"
                                        className="img-cover" />
                                </figure>

                                <div>

                                    <div className="title-wrapper">
                                        <h3 className="title-3">
                                            <a href="#" className="card-title">Haudfontaine</a>
                                        </h3>

                                        <span className="span title-2">{calculateConvertedPrice(3.00)}</span>
                                    </div>

                                    <p className="card-text label-1">
                                        {/* 1 Soorten vlees of kip naar keuze, 1 groenten. */}
                                        Sparkling / Still
                                    </p>

                                </div>
                                

                            </div>
                        </li>
                        <li>
                            <div className="menu-card hover:card">

                                <figure className="card-banner img-holder" style={{ width: '60px', height: '60px' }}>
                                    <img src={EsCendol} width="60" height="60" loading="lazy" alt="Opu Fish"
                                        className="img-cover" />
                                </figure>

                                <div>

                                    <div className="title-wrapper">
                                        <h3 className="title-3">
                                            <a href="#" className="card-title">{menuEsTjendol}</a>
                                        </h3>

                                        <span className="span title-2">{calculateConvertedPrice(6.00)}</span>
                                    </div>

                                    <p className="card-text label-1">
                                        {/* 1 Soorten vlees of kip naar keuze, 1 groenten. */}
                                        Containss Pandan, flavoured Green Rice flour Jelly, Coconut Milk and Palm Sugar
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

export default Drinks;