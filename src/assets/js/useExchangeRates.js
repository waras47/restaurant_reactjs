import { useEffect, useState } from "react";
import axios from "axios";
import { useTranslation } from "react-i18next";

const useExchangeRates = () => {
    const { i18n } = useTranslation();
    const [exchangeRates, setExchangeRates] = useState(0);
    const [baseCurrency, setBaseCurrency] = useState("");
    const [convertCurrency, setConvertCurrency] = useState("");

    useEffect(() => {
        const fetchExchangeRates = async () => {
            try {
                let base = "EUR";
                let convert = "USD";             

                if (i18n.language === "en") {
                    base = "USD";
                    convert = "EUR";
                }
                
                const response = await axios.get(`https://v6.exchangerate-api.com/v6/95954953d77f35226659c5b6/pair/EUR/USD`);
                const conversionResult = response.data.conversion_rate;
                
                setExchangeRates(conversionResult);
                setBaseCurrency(base);
                setConvertCurrency(convert);
             
            } catch (error) {
                console.error("Error fetching exchange rates:", error);
            }
        };

        fetchExchangeRates();

    }, [i18n.language]);

    const calculateConvertedPrice = (price) => {
        let rate = exchangeRates;
        let convertedPrice = parseFloat(price * rate).toFixed(2);
        const priceDefault = parseFloat(price).toFixed(2) ;
        
        if (baseCurrency === "EUR") {
            return `€${priceDefault} `;
        } 

        if(baseCurrency === "USD"){
        return `$${convertedPrice}`
    }
   
    };

    return { calculateConvertedPrice };
};

export default useExchangeRates;