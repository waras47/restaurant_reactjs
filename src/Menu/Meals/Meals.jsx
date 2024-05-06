import React, { useEffect, useState } from "react";
import '../../assets/css/style.css';
import useTranslations from "../../assets/js/useTranslations";


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

const Meals = () => {
    const [isNavbarActive, setIsNavbarActive] = useState(false);
    const { calculateConvertedPrice } = useExchangeRates();

    const translations = useTranslations();
    const {
        meal1,
        descRames,
        descRamesIkan,
        descRamesSpecial,
        descRamesIkanSpecial,
        descNiangSpesial,
        descNiangIkanSpesial,
        descGado,
        descSoto,
        descSate,
        descNasiRamesVeg,
        descSateMeal,
        vegetary,
        meal2,
        special
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
                    <h2 className="headline-1 section-title text-center">{meal1}</h2>

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

                                        <span className="span title-2">{calculateConvertedPrice(12.95)}</span>
                                    </div>

                                    <p className="card-text label-1">
                                       {descRames}
                                    </p>

                                </div>

                            </div>
                        </li>
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

                                        <span className="span title-2">{calculateConvertedPrice(9.00)}</span>
                                    </div>

                                    <p className="card-text label-1">
                                        {descGado}
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

                                        <span className="span title-2">{calculateConvertedPrice(13.95)}</span>
                                    </div>

                                    <p className="card-text label-1">
                                        {descRamesIkan}
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

                                        <span className="span title-2">{calculateConvertedPrice(9.00)}</span>
                                    </div>

                                    <p className="card-text label-1">
                                        {descSoto}
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
                                            <a href="#" className="card-title">Rames {special}</a>
                                        </h3>

                                        <span className="span title-2">{calculateConvertedPrice(15.95)}</span>
                                    </div>

                                    <p className="card-text label-1">
                                        {descRamesSpecial}
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

                                        <span className="span title-2"> {calculateConvertedPrice(9.00)}</span>
                                    </div>

                                    <p className="card-text label-1">
                                        {descSate}
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
                                            <a href="#" className="card-title">Rames Ikan {special}</a>
                                        </h3>

                                        <span className="span title-2"> {calculateConvertedPrice(17.50)}</span>
                                    </div>

                                    <p className="card-text label-1">
                                        {descRamesIkanSpecial}
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
                                            <a href="#" className="card-title">Nasi Rames {vegetary}</a>
                                        </h3>

                                        <span className="span title-2"> {calculateConvertedPrice(11.00)}</span>
                                    </div>

                                    <p className="card-text label-1">
                                        {descNasiRamesVeg}
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
                                            <a href="#" className="card-title">Niang {special}</a>
                                        </h3>

                                        <span className="span title-2"> {calculateConvertedPrice(18.50)}</span>
                                    </div>

                                    <p className="card-text label-1">
                                        {descNiangSpesial}
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
                                            <a href="#" className="card-title">Sate Ayam {meal2}</a>
                                        </h3>

                                        <span className="span title-2"> {calculateConvertedPrice(12.00)}</span>
                                    </div>

                                    <p className="card-text label-1">
                                        {descSateMeal}
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
                                            <a href="#" className="card-title">Niang Ikan {special}</a>
                                        </h3>

                                        <span className="span title-2"> {calculateConvertedPrice(20.95)}</span>
                                    </div>

                                    <p className="card-text label-1">
                                        {descNiangIkanSpesial}
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