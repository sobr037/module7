import React, { useState, useEffect } from 'react'
import { useEmoji } from './EmojiContext'

const currencies = ['USD', 'AUD', 'NZD', 'GBP', 'EUR', 'SGD'];

{/* Declaring Function to display rates + setting variables */}

    function BitcoinRates() {
    const { isHappy } = useEmoji();
    const [currency, setCurrency] = useState(currencies[0]);
    const [bitcoinPrice, setBitcoinPrice] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        
        {/* Retreives current Bitcoin Price, guide here: https://www.coingecko.com/api/documentations/v3 */}
        const apiUrl = `https://api.coingecko.com/api/v3/simple/price?ids=bitcoin&vs_currencies=${currency}`;

        {/* Func to fetch/update Bitcoin price */}
        const fetchData = async () => {
        try {
            const response = await fetch(apiUrl);
            const data = await response.json();
            const bitcoinPriceInSelectedCurrency = data.bitcoin[currency.toLowerCase()];
            
            {/* Update variabless */}
            setBitcoinPrice(bitcoinPriceInSelectedCurrency);
            setLoading(false);
            setError(null);
        } catch (error) {
            {/* Error handling */}
            setError(error.message);
            setLoading(false);
        }
        };

        {/* Fetches correct currency when use changes selection */}
        fetchData();
    }, [currency]);

    return (
        <div className="BitcoinRates componentBox">
        <h1>Current Bitcoin Exchange Rate</h1>
        <label>
            Choose currency:
            <select value={currency} onChange={(e) => setCurrency(e.target.value)}>
            {currencies.map((curr) => (
                <option value={curr} key={curr}>
                {curr}
                </option>
            ))}
            </select>
        </label>
        {loading ? (
            <p>Loading...</p> 
        ) : error ? (
            <p>Error: {error}</p>
        ) : (
            <p>
                Current Bitcoin Price in {currency}: ${bitcoinPrice.toLocaleString()}
            </p>
        )}
        <p>Current Mood: {isHappy ? '😄 Happy' : '😢 Sad'}</p>
        </div>
    );
    }

    export default BitcoinRates;
