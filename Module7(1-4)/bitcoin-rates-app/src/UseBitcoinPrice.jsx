import { useState, useEffect, useReducer } from 'react';

const currencies = ['USD', 'AUD', 'NZD', 'GBP', 'EUR', 'SGD'];

{/* Func to manage Bitcoin price state */}

    function bitcoinPriceReducer(state, action) {
    switch (action.type) {
        case 'FETCH_SUCCESS':
        return {
            ...state,
            loading: false,
            bitcoinPrice: action.payload,
        };
        case 'FETCH_ERROR':
        return {
            ...state,
            loading: false,
            error: action.payload,
        };
        default:
        return state;
    }
    }

{/* Hook to fetch price data */}
    function useBitcoinPrice(initialCurrency) {
    const [currency, setCurrency] = useState(initialCurrency);

    const [state, dispatch] = useReducer(bitcoinPriceReducer, {
        bitcoinPrice: null,
        loading: true,
        error: null,
    });

{/* Fetch Bitcoin price using API */}

    const apiUrl = `https://api.coingecko.com/api/v3/simple/price?ids=bitcoin&vs_currencies=${currency}`;

{/* Fetch Bitcoin price again when user changes currency selection */}

    useEffect(() => {
        const fetchData = async () => {
        try {
            const response = await fetch(apiUrl);
            if (!response.ok) {
            throw new Error('Network response was not ok');
            }
            const data = await response.json();
            const bitcoinPriceInSelectedCurrency = data.bitcoin[currency];

            {/* Fetch status indicators for error handling */}
            dispatch({ type: 'FETCH_SUCCESS', payload: bitcoinPriceInSelectedCurrency });
        } catch (error) {
            dispatch({ type: 'FETCH_ERROR', payload: error.message });
        }
        };

    fetchData();
    }, [currency, apiUrl]);

    const setCurrencyAndUpdatePrice = newCurrency => {
        setCurrency(newCurrency);
    };

    return { currency, bitcoinPrice: state.bitcoinPrice, loading: state.loading, error: state.error, setCurrencyAndUpdatePrice };
    }

    export default useBitcoinPrice;
