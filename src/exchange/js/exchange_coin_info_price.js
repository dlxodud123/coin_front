import axios from 'axios';
import './../css/exchange_coin_info_price.css';
import { useEffect, useState } from 'react';

const fetchTickerData = async () => {
    const options = {
      method: 'GET',
      url: 'https://api.upbit.com/v1/ticker',
      params: { markets: 'KRW-BTC, KRW-ETH, KRW-ADA, KRW-SOL, KRW-XRP, KRW-DOT, KRW-LINK, KRW-AVAX, KRW-ATOM, KRW-XLM, KRW-THETA, KRW-TRX, KRW-AAVE, KRW-EOS, KRW-STMX, KRW-EGLD, KRW-NEO, KRW-HBAR, KRW-SHIB, KRW-DOGE' },
      headers: { accept: 'application/json' }
    };
  
    const response = await axios.request(options);
    return response.data;
};

const Excahnge_coin_info_price = () => {

    const [data, setData] = useState([]);
    const [error, setError] = useState(null);
    const [isLoading, setIsLoading] = useState(true);

    const fetchData = async () => {
        try {
            const result = await fetchTickerData();
            console.log("안녕 : ", result);
            setData(result);
        } catch (error) {
            setError(error);
        } finally {
            setIsLoading(false);
        }
    };

    useEffect(() => {
        fetchData(); // Initial fetch

        const intervalId = setInterval(fetchData, 1000); // Fetch data every 1 second

        return () => clearInterval(intervalId); // Cleanup interval on component unmount

    }, []);

    if (error) return <div>An error occurred: {error.message}</div>;

    return(
        <>
            <div className='coin_info_price_container'>

            </div>
        </>
    )
}

export default Excahnge_coin_info_price;