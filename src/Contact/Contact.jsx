import React, { useEffect, useState } from "react";
import { connect } from 'react-redux';
import i18n from 'i18next';
import Navbar from "../Components/Navbar";
import { setIsNavbarActive } from '../Store/Actions/index';
import '../assets/css/style.css';

import { FormPattern } from '../assets/js/images';
import useTranslations from "../assets/js/useTranslations";

const Contact = ({ isNavbarActive, setIsNavbarActive }) => {

    const translations = useTranslations();
    const {
        onlineReservation,
        bookingRequest,
        fillForm,
        yourName,
        phoneNumber,
        numberPersons,
        message,
        bookTable,
        location,
        tuesdayToSaturday,
        sunday,
        whatsTitle,
        whatsName,
        whatsNumber,
        whatsPerson,
        whatsDate,
        whatsHour,
        whatsMessage,
        whatsNL,
        whatsEN
    } = translations.contact;

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
          // Get the WhatsApp message format based on the selected language
    let whatsLang = i18n.language === 'en' ? whatsEN : whatsNL;
    let  whatsappMessageText = "";
    if(i18n.language === whatsLang){
        whatsappMessageText = `${whatsTitle} \n${whatsName}: ${name}\n${whatsNumber}: ${number}\n${whatsPerson}: ${person}\n${whatsDate}: ${date}\n${whatsHour}: ${hour}\n${whatsMessage}: ${message}`;
    }
    // Construct the WhatsApp message
    const whatsappLink = `https://wa.me/+6285291932739/?text=${encodeURIComponent(whatsappMessageText)}`;
    window.open(whatsappLink, '_blank');
    };


    return (
        <div>
            <Navbar isNavbarActive={isNavbarActive} />
            <section className="reservation" >
                <div className="container">

                    <div className="form reservation-form bg-black-0">

                        <form action="" onSubmit={handleSubmit} className="form-left">

                            <h2 className="headline-1 text-center">{onlineReservation}</h2>

                            <p className="form-text text-center">
                            {bookingRequest}<a href="tel:+31631034439" className="link"> +31 6 31034439 </a>
                            {fillForm}
                            </p>

                            <div className="input-wrapper">
                                <input type="text" name="name" placeholder={yourName} autoComplete="off" className="input-field" onChange={handleChange} />
                                <input type="tel" name="number" placeholder={phoneNumber} autoComplete="off" className="input-field" onChange={handleChange} pattern="[0-9]*" inputMode="numeric" />
                            </div>

                            <div className="input-wrapper">
                                <input type="text" name="person" placeholder={numberPersons} autoComplete="off" className="input-field" onChange={handleChange} />
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

                            <textarea name="message" placeholder={message} autoComplete="off" className="input-field" onChange={handleChange}  ></textarea>

                            <button type="submit" className="btn btn-secondary">
                                <span className="text text-1">{bookTable}</span>

                                <span className="text text-2" aria-hidden="true">{bookTable}</span>
                            </button>

                        </form>

                        <div className="form-right text-center" style={{ backgroundImage: `url(${FormPattern})` }} >

                            <h2 className="headline-1 text-center">Contact Us</h2>

                            <p className="contact-label">{bookingRequest}</p>

                            <a href="tel:+31631034439" className="body-1 contact-number hover-underline">+31 6 31034439</a>

                            <div className="separator"></div>

                            <p className="contact-label">{location}</p>

                            <address className="body-4">
                            Bergse Dorpstraat 102 3054 GG Rotterdam 010 750 9509
                            </address>

                            <p className="contact-label">{tuesdayToSaturday}</p>

                            <p className="body-4">
                            12.00 - 20.00
                            </p>

                            <p className="contact-label">{sunday}</p>

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
