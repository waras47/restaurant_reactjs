import { useTranslation } from "react-i18next";

const useTranslations = () => {
    const { t } = useTranslation();

    const translations = {
        home: {
            traditionalHygines : t("home.traditionalHygines"),
            loveFood: t("home.loveFood"),
            comeFamily :t("home.comeFamily"),
            delightExp: t("home.inspiredSeasons"),
            inspiredSeasons:t("home.traditionalHygines"),
            AmazingDelicious: t("home.AmazingDelicious"),
            tellStory: t("home.tellStory"),
            bookTable: t("home.bookTable"),
            flavorRoyalty : t("home.flavorRoyalty"),
            topQuality : t("home.topQuality"),
            breakfeast : t("home.breakfeast"),
            appetizers : t("home.appetizers"),
            drink :t("home.drink"),
            specialDish : t("home.specialDish"),
            specialSelection : t("home.specialSelection"),
            deliciousMenu : t("home.deliciousMenu"),
            homeThanks : t("home.homeThanks"),
            chooseUs: t("home.chooseUs"),
            ourStrength: t("home.ourStrength"),
            hygienicFood : t("home.hygienicFood"),
            freshEnvironment : t("home.freshEnvironment"),
            hygienicFood :t("home.hygienicFood"),
            skillChefs :t("home.skillChefs"),
            eventParty: t("home.eventParty"),
            bookingRequest : t("home.bookingRequest"),
            newsOffers :t("home.newsOffers"),
            yourEmail : t("home.yourEmail"),
            subscribe : t("home.subscribe"),
        },
        menu:{
          //meal
          meal1: t("menu.meals.meal1"),
          descRames:  t("menu.meals.descRames"),
          descRamesIkan:  t("menu.meals.descRamesIkan"),
          descRamesSpecial:  t("menu.meals.descRamesSpecial"),
          descRamesIkanSpecial:  t("menu.meals.descRamesIkanSpecial"),
          descNiangSpesial:  t("menu.meals.descNiangSpesial"),
          descNiangIkanSpesial:  t("menu.meals.descNiangIkanSpesial"),
          descGado:  t("menu.meals.descGado"),
          descSoto:  t("menu.meals.descSoto"),
          descSate:  t("menu.meals.descSate"),
          descNasiRamesVeg:  t("menu.meals.descNasiRamesVeg"),
          descSateMeal:  t("menu.meals.descSateMeal"),
          vegetary:  t("menu.meals.vegetary"),
          meal2:  t("menu.meals.meal2"),
          special:  t("menu.meals.special"),

          //meals and vegetables

          //adverts

          //sandwich

          //snack

          //drink
        },
        about: {
          ourStory: t("about.ourStory"),
          flavorStory: t("about.flavorStory"),
          descStory: t("about.descStory"),
        },
        contact: {
            onlineReservation: t("contact.onlineReservation"),
            bookingRequest: t("contact.bookingRequest"),
            fillForm: t("contact.fillForm"),
            yourName: t("contact.yourName"),
            phoneNumber: t("contact.phoneNumber"),
            numberPersons: t("contact.numberPersons"),
            message: t("contact.message"),
            bookTable: t("contact.bookTable"),
            reservationRequest: t("contact.reservationRequest"),
            location: t("contact.location"),
            tuesdayToSaturday: t("contact.tuesdayToSaturday"),
            sunday: t("contact.sunday"),
            whatsTitle: t("contact.whatsTitle"),
            whatsName: t("contact.whatsName"),
            whatsNumber: t("contact.whatsNumber"),
            whatsPerson: t("contact.whatsPerson"),
            whatsDate: t("contact.whatsDate"),
            whatsHour: t("contact.whatsHour"),
            whatsMessage: t("contact.whatsMessage"),
            whatsEN: t("contact.whatsEN"),
            whatsNL: t("contact.whatsNL")
        } 
    };

    return translations;
};

export default useTranslations;
