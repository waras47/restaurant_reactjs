import React, { useEffect, useState } from "react";
import { connect } from 'react-redux';
import i18n from 'i18next';
import Navbar from "../Components/Navbar";
import { setIsNavbarActive } from '../Store/Actions/index';
import '../assets/css/style.css';

import { FormPattern } from '../assets/js/images';
import useTranslations from "../assets/js/useTranslations";

import {
  Badge1,
  Shape4,
  Shape9,
  SpecialDish
} from '../assets/js/images';
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
        hour = `${hourValue}:${minuteValue < 10 ? "0" + minuteValue : minuteValue} ${amPm}`;
        }
          // Get the WhatsApp message format based on the selected language
    let whatsLang = i18n.language === 'en' ? whatsEN : whatsNL;
    let  whatsappMessageText = "";
    if(i18n.language === whatsLang){
        whatsappMessageText = `${whatsTitle} \n${whatsName}: ${name}\n${whatsNumber}: ${number}\n${whatsPerson}: ${person}\n${whatsDate}: ${date}\n${whatsHour}: ${hour}\n${whatsMessage}: ${message}`;
    }
    // Construct the WhatsApp message
    const whatsappLink = `https://wa.me/+31631034439/?text=${encodeURIComponent(whatsappMessageText)}`;
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

                                <div className="icon-wrapper">
                                    <ion-icon name="calendar-clear-outline" aria-hidden="true"></ion-icon>

                                    <input type="date" name="date" className="input-field" onChange={handleChange}/>

                                    <ion-icon name="chevron-down" aria-hidden="true"></ion-icon>
                                </div>

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
                            12:00 PM - 8:00 PM
                            </p>

                            <p className="contact-label">{sunday}</p>

                            <p className="body-4">
                            2:00 PM - 8:00 PM
                            </p>

                        </div>

                    </div>
                </div>
            </section>

            {/* -====#GOOGLE MAP==== */}
            <div id="map">
                <iframe 
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1984.8875057851587!2d4.491708275958345!3d51.95767357191919!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47c5cd108878c253%3A0xc7f02057d8ef1b5e!2sWarung%20Taste%20of%20Niang!5e1!3m2!1sid!2sid!4v1715123655144!5m2!1sid!2sid&language=nl" 
                    width="100%"
                    height="550" 
                    style={{border:"2px"}}
                    allowfullscreen="" 
                    loading="lazy" 
                    referrerpolicy="no-referrer-when-downgrade"
                >
                </iframe> 
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
    )
}

const mapStateToProps = (state) => ({
    isNavbarActive: state.isNavbarActive,
});

const mapDispatchToProps = {
    setIsNavbarActive,
};

export default connect(mapStateToProps, mapDispatchToProps)(Contact);
