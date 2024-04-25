import React, { useEffect, useState } from "react";
import '../Menu.css';

import Navbar from "../../Components/Navbar";

import {
    Menu1,
    Menu2,
    Menu3,
    Menu4,
    Menu5,
    Menu6,
    Shape5,
    Shape6
} from '../../assets/js/images';

const Sandwich = () => {
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

            <section className="section menu" aria-label="menu-label" id="menu" style={{ marginTop: '150px' }}>
                <div className="container">

                    {/* <p className="section-subtitle text-center label-2">Special Selection</p> */}
                    <h2 className="headline-1 section-title text-center">Sandwiches</h2>
                    {/* <p className="headline-3 section-title text-center">Keuze uit witte rust, Nasi kuning, Bami of Nasi</p> */}

                    <ul className="grid-list">

                        <li>
                            <div className="menu-card hover:card">

                                <figure className="card-banner img-holder" style={{ width: '100px', height: '100px' }}>
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

                                <figure className="card-banner img-holder" style={{ width: '100px', height: '100px' }}>
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

                                <figure className="card-banner img-holder" style={{ width: '100px', height: '100px' }}>
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

                                <figure className="card-banner img-holder" style={{ width: '100', height: '100px' }}>
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

                                <figure className="card-banner img-holder" style={{ width: '100px', height: '100px' }}>
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

                                <figure className="card-banner img-holder" style={{ width: '100px', height: '100px' }}>
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

                    {/* <p className="menu-text text-center">
            During winter daily from <span className="span">7:00 pm</span> to <span className="span">9:00 pm</span>
          </p> */}

                    {/* <a href="#" className="btn btn-primary">
                        <span className="text text-1">View All Menu</span>

                        <span className="text text-2" aria-hidden="true">View All Menu</span>
                    </a> */}

                    <img src={Shape5} width="921" height="1036" loading="lazy" alt="shape"
                        className="shape shape-2 move-anim" style={{ marginTop: '50px' }} />
                    <img src={Shape6} width="343" height="345" loading="lazy" alt="shape"
                        className="shape shape-3 move-anim" />

                </div>
            </section>
        </div>
    )
}

export default Sandwich;