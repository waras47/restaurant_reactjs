import { useTranslation } from "react-i18next";

const useTranslations = () => {
  const { t } = useTranslation();

  const translations = {
    home: {
      traditionalHygines: t("home.traditionalHygines"),
      loveFood: t("home.loveFood"),
      comeFamily: t("home.comeFamily"),
      delightExp: t("home.inspiredSeasons"),
      inspiredSeasons: t("home.traditionalHygines"),
      AmazingDelicious: t("home.AmazingDelicious"),
      tellStory: t("home.tellStory"),
      bookTable: t("home.bookTable"),
      flavorRoyalty: t("home.flavorRoyalty"),
      topQuality: t("home.topQuality"),
      descTopQuality: t("home.descTopQuality"),
      descNasiTumpeng: t("home.descNasiTumpeng"),
      breakfeast: t("home.breakfeast"),
      appetizers: t("home.appetizers"),
      drink: t("home.drink"),
      specialDish: t("home.specialDish"),
      specialSelection: t("home.specialSelection"),
      deliciousMenu: t("home.deliciousMenu"),
      homeThanks: t("home.homeThanks"),
      chooseUs: t("home.chooseUs"),
      ourStrength: t("home.ourStrength"),
      freshEnvironment: t("home.freshEnvironment"),
      descFreshEnvironment: t("home.descFreshEnvironment"),
      hygienicFood: t("home.hygienicFood"),
      descHygienicFood: t("home.descHygienicFood"),
      skillChefs: t("home.skillChefs"),
      descSkillChefs: t("home.descSkillChefs"),
      eventParty: t("home.eventParty"),
      descdescEventParty: t("home.descEventParty"),
      bookingRequest: t("home.bookingRequest"),
      newsOffers: t("home.newsOffers"),
      yourEmail: t("home.yourEmail"),
      subscribe: t("home.subscribe"),
    },
    menu: {
      //meal
      meal1: t("menu.meals.meal1"),
      descRames: t("menu.meals.descRames"),
      descRamesIkan: t("menu.meals.descRamesIkan"),
      descRamesSpecial: t("menu.meals.descRamesSpecial"),
      descRamesIkanSpecial: t("menu.meals.descRamesIkanSpecial"),
      descNiangSpesial: t("menu.meals.descNiangSpesial"),
      descNiangIkanSpesial: t("menu.meals.descNiangIkanSpesial"),
      descGado: t("menu.meals.descGado"),
      descSoto: t("menu.meals.descSoto"),
      descSate: t("menu.meals.descSate"),
      descNasiRamesVeg: t("menu.meals.descNasiRamesVeg"),
      descSateMeal: t("menu.meals.descSateMeal"),
      vegetary: t("menu.meals.vegetary"),
      meal2: t("menu.meals.meal2"),
      special: t("menu.meals.special"),

      //meals and vegetables
      meatVegetables: t("menu.meatVegetable.meatVegetables"),
      menuRondvlees: t("menu.meatVegetable.menuRondvlees"),
      descRondvlees: t("menu.meatVegetable.descRondvlees"),
      menuGroenten: t("menu.meatVegetable.menuGroenten"),
      descGroenten: t("menu.meatVegetable.descGroenten"),
      menuVis: t("menu.meatVegetable.menuVis"),
      descVis: t("menu.meatVegetable.descVis"),
      menuVegetarisch: t("menu.meatVegetable.menuVegetarisch"),
      descVegetarisch: t("menu.meatVegetable.descVegetarisch"),
      menuKip: t("menu.meatVegetable.menuKip"),
      descKip: t("menu.meatVegetable.descKip"),
      titleSideDishes: t("menu.SideDishes.titleSideDishes"),

      //Side Dishes
      titleSideDishes: t("menu.sideDishes.titleSideDishes"),
      menuWitteRijstPortie: t("menu.sideDishes.menuWitteRijstPortie"),
      menuPindasaus: t("menu.sideDishes.menuPindasaus"),
      menuNasiGorengBakje: t("menu.sideDishes.menuNasiGorengBakje"),
      menuPindasausGroot: t("menu.sideDishes.menuPindasausGroot"),
      menuNasiKuningBakje: t("menu.sideDishes.menuNasiKuningBakje"),
      menuAtjarKomkommer: t("menu.sideDishes.menuAtjarKomkommer"),
      menuBamiGorengBakje: t("menu.sideDishes.menuBamiGorengBakje"),
      menuAtjarKomkommerGroot: t("menu.sideDishes.menuAtjarKomkommerGroot"),
      menuKroepokEmpingCassave: t("menu.sideDishes.menuKroepokEmpingCassave"),

      //sandwich
      titleSandwiches: t("menu.sandwiches.titleSandwiches"),
      menuBroodjeKerrie: t("menu.sandwiches.menuBroodjeKerrie"),
      menuBroodjeRendang: t("menu.sandwiches.menuBroodjeRendang"),
      menuBroodjeKipKerrie: t("menu.sandwiches.menuBroodjeKipKerrie"),
      menuBroodjeSemurDaging: t("menu.sandwiches.menuBroodjeSemurDaging"),
      menuBroodjeKipCharSieuw: t("menu.sandwiches.menuBroodjeKipCharSieuw"),
      menuBroodjeGarnalen: t("menu.sandwiches.menuBroodjeGarnalen"),
      menuBroodjeDynamite: t("menu.sandwiches.menuBroodjeDynamite"),
      menuBroodjeKousebandGarnalen: t("menu.sandwiches.menuBroodjeKousebandGarnalen"),
      menuBroodjeBakkeljauw: t("menu.sandwiches.menuBroodjeBakkeljauw"),

      //snack
      titleSnacks: t("menu.snack.titleSnacks"),
      menuLemper: t("menu.snack.menuLemper"),
      menuVietnameseLoempia: t("menu.snack.menuVietnameseLoempia"),
      menuRisolles: t("menu.snack.menuRisolles"),
      menuSpekkoekStuk: t("menu.snack.menuSpekkoekStuk"),
      menuPastel: t("menu.snack.menuPastel"),
      menuIndischKroket: t("menu.snack.menuIndischKroket"),
      menuMiniLoempia: t("menu.snack.menuMiniLoempia"),

      //drink
      titleDranken: t("menu.drink.titleDranken"),
      menuFrisdrankInBuk: t("menu.drink.menuFrisdrankInBuk"),
      menuEsCampur: t("menu.drink.menuEsCampur"),
      menuFrisdrankInPetflessen: t("menu.drink.menuFrisdrankInPetflessen"),
      menuEsTeller: t("menu.drink.menuEsTeller"),
      menuEsTjendol: t("menu.drink.menuEsTjendol"),

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
