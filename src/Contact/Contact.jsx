import React, { useEffect, useState } from "react";
import { connect } from 'react-redux';
import Navbar from "../Components/Navbar";
import { setIsNavbarActive } from '../Store/Actions/index';
import '../assets/css/style.css';

import { FormPattern } from '../assets/js/images';

const Contact = ({ isNavbarActive, setIsNavbarActive }) => {

    const [formData, setFormData] = useState({
        name: "",
        number: "",
        person: "",
        date: "",
        hour: "",
        message: ""
    });

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
    }, [setIsNavbarActive]);


    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prevState => ({
            ...prevState,
            [name]: value
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        let { name, number, person, date, hour, message } = formData;

        // Format the time to display AM/PM
        let hourValue = parseInt(hour.split(":")[0]);
        const minuteValue = parseInt(hour.split(":")[1]);
        let amPm = "AM";
        if (hourValue >= 12) {
            amPm = "PM";
            if (hourValue > 12) {
                hourValue -= 12;
            }
        }
        hour = `${hourValue}:${minuteValue < 10 ? "0" + minuteValue : minuteValue} ${amPm}`;
        const whatsappMessage = `Hallo ik wil reserveren%0AName: ${name}%0ANumber: ${number}%0APerson: ${person}%0ADate: ${date}%0AHour: ${hour}%0AMessage: ${message}`;
        const whatsappLink = `https://wa.me/+31631034439/?text=${whatsappMessage}`;
        window.open(whatsappLink, '_blank');
    };


    return (
        <div>
            <Navbar isNavbarActive={isNavbarActive} />
            <section className="reservation" >
                <div className="container">

                    <div className="form reservation-form bg-black-0">

                        <form action="" onSubmit={handleSubmit} className="form-left">

                            <h2 className="headline-1 text-center">Online Reserveren</h2>

                            <p className="form-text text-center">
                            Reserveringsaanvraag <a href="tel:+31631034439" className="link"> +31 6 31034439 </a>
                            of vul het bestelformulier in
                            </p>

                            <div className="input-wrapper">
                                <input type="text" name="name" placeholder="Your Name" autoComplete="off" className="input-field" onChange={handleChange} />
                                <input type="tel" name="number" placeholder="Phone Number" autoComplete="off" className="input-field" onChange={handleChange} pattern="[0-9]*" inputMode="numeric" />
                            </div>

                            <div className="input-wrapper">
                                <input type="text" name="person" placeholder="Number Of Persons" autoComplete="off" className="input-field" onChange={handleChange} />
                                {/* <div className="icon-wrapper">
                                    <ion-icon name="person-outline" aria-hidden="true"></ion-icon>

                                    <select name="person" className="input-field">
                                        <option value="1-person">1 Person</option>
                                        <option value="2-person">2 Person</option>
                                        <option value="3-person">3 Person</option>
                                        <option value="4-person">4 Person</option>
                                        <option value="5-person">5 Person</option>
                                        <option value="6-person">6 Person</option>
                                        <option value="7-person">7 Person</option>
                                        <option value="8-person">8 Person</option>
                                        <option value="9-person">9 Person</option>
                                        <option value="10-person">10 Person</option>
                                    </select>

                                    <ion-icon name="chevron-down" aria-hidden="true"></ion-icon>
                                </div> */}

                                <div className="icon-wrapper">
                                    <ion-icon name="calendar-clear-outline" aria-hidden="true"></ion-icon>

                                    <input type="date" name="date" className="input-field" onChange={handleChange}/>

                                    <ion-icon name="chevron-down" aria-hidden="true"></ion-icon>
                                </div>

                                {/* <div className="icon-wrapper">
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
                                </div> */}

                                <div className="icon-wrapper">
                                    <ion-icon name="time-outline" aria-hidden="true"></ion-icon>
                                    <input type="time" name="hour" className="input-field" onChange={handleChange} />
                                    <ion-icon name="chevron-down" aria-hidden="true"className="time-picker-icon"></ion-icon>
                                </div>

                            </div>

                            <textarea name="message" placeholder="Message" autoComplete="off" className="input-field" onChange={handleChange}   ></textarea>

                            <button type="submit" className="btn btn-secondary">
                                <span className="text text-1">Reserveer een tafel</span>

                                <span className="text text-2" aria-hidden="true">Reserveer een tafel</span>
                            </button>

                        </form>

                        <div className="form-right text-center" style={{ backgroundImage: `url(${FormPattern})` }} >

                            <h2 className="headline-1 text-center">Contact Us</h2>

                            <p className="contact-label"> Reserveringsaanvraag</p>

                            <a href="tel:+31631034439" className="body-1 contact-number hover-underline">+31 6 31034439</a>

                            <div className="separator"></div>

                            <p className="contact-label">Location</p>

                            <address className="body-4">
                            Bergse Dorpstraat 102 3054 GG Rotterdam 010 750 9509
                            </address>

                            <p className="contact-label">Dinsdag T/M Zaterdag</p>

                            <p className="body-4">
                            12.00 - 20.00
                            </p>

                            <p className="contact-label">Zondag</p>

                            <p className="body-4">
                            14.00 - 20.00
                            </p>

                        </div>

                    </div>
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
            </section>
        </div>
    )
}

const mapStateToProps = (state) => ({
    isNavbarActive: state.isNavbarActive,
});

const mapDispatchToProps = {
    setIsNavbarActive,
};

export default connect(mapStateToProps, mapDispatchToProps)(Contact);
