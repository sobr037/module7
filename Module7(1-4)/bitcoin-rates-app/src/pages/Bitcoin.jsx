import React, { useState, useEffect } from 'react';

const currencies = ['USD', 'AUD', 'NZD', 'GBP', 'EUR', 'SGD'];
const currencySymbols = {
  USD: '$',
  AUD: '$',
  NZD: '$',
  GBP: '£',
  EUR: '€',
  SGD: 'S$',
};

function BitcoinRates() {
  const [currency, setCurrency] = useState(currencies[0]);
  const [bitcoinPrice, setBitcoinPrice] = useState({});

  useEffect(() => {
    // API To retrieve prtice of Bitcoin :) 
    const apiUrl = `https://api.coingecko.com/api/v3/simple/price?ids=bitcoin&vs_currencies=${currency}`;

    // Func to retrieve price
    const fetchBitcoinPrice = async () => {
      try {
        const response = await fetch(apiUrl);
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        const data = await response.json();
        setBitcoinPrice(data.bitcoin);
      } catch (error) {
        console.error('Error fetching Bitcoin price:', error);
      }
    };

    // Call when currency changes. 
    fetchBitcoinPrice();

    return () => {
    };
  }, [currency]);

  const options = currencies.map(curr => (
    <option value={curr} key={curr}>
      {curr}
    </option>
  ));

  return (
    <div className="BitcoinRates componentBox">
      <h1>Bitcoin Exchange Rate</h1>
      <div></div>
      <label>
        Choose currency: 
        <select value={currency} onChange={e => setCurrency(e.target.value)}>
          {options}
        </select>
      </label>
      {bitcoinPrice[currency.toLowerCase()] !== undefined ? (
        <p>
          Current Bitcoin Price in {currency}: {currencySymbols[currency]}
          {bitcoinPrice[currency.toLowerCase()].toLocaleString()}
        </p>
      ) : (
        <p>Loading...</p>
      )}
      
    </div>
  )
  
}

export default BitcoinRates;
