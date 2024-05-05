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
                let base = "USD";
                let convert = "EUR";             

                if (i18n.language === "nl") {
                    base = "EUR";
                    convert = "USD";
                }
                
                const response = await axios.get(`https://v6.exchangerate-api.com/v6/95954953d77f35226659c5b6/pair/${base}/${convert}`);
                const conversionResult = parseFloat(response.data.conversion_rate).toFixed(2);
                
                setExchangeRates(conversionResult);
                setBaseCurrency(base);
                setConvertCurrency(convert);
             
            } catch (error) {
                console.error("Error fetching exchange rates:", error);
            }
        };

        fetchExchangeRates();

    }, []);

    const calculateConvertedPrice = (price) => {
        const rate = parseFloat(exchangeRates);
        const convertedPrice = parseFloat(price + rate).toFixed(2);

        const priceDefault = parseFloat(price).toFixed(2) 
        if (baseCurrency === "EUR") {
            return `€${priceDefault} `;
        } else {
            return `$${convertedPrice}`;
        }
    };

    return { exchangeRates, baseCurrency, convertCurrency, calculateConvertedPrice };
};

export default useExchangeRates;