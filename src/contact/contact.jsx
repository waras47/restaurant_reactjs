import React, { useEffect, useState } from "react";
import '../assets/css/style.css';
import { imageData } from "../assets/images-data/ImageData";
import Navbar from "../components/Navbar";

const Contact = () => {

    const {
        Logo,
        FormPattern,
        footerBg
    } = imageData;
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

            <section className="reservation" style={{ marginTop: '450px' }}>
                <div className="container">

                    <div className="form reservation-form bg-black-0">

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

                        <div className="form-right text-center" style={{ backgroundImage: `url(${FormPattern})` }} >

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
            {/* -====#FOOTER==== */}

            <footer className="footer section has-bg-image text-center" >
                <div className="container">
                    {/* <div className="footer-top grid-list">

                        <div className="footer-brand has-before has-after">

                            <a href="#" className="logo">
                                <img src={Logo} width="160" height="50" loading="lazy" alt="grilli home" />
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

                    </div> */}

                    <div className="footer-bottom">

                        <p className="copyright">
                            &copy; 2024 Taste of Niang. All Rights Reserved
                            {/* Crafted by <a href="https://github.com/codewithsadee"
                  target="_blank" className="link">codewithsadee</a> */}
                        </p>
                    </div>
                </div>
            </footer>
        </div>
    )
}

export default Contact;