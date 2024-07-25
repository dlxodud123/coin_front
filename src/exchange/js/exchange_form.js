import './../css/exchange_form.css';
import Header from '../../common/js/header';
import Footer from '../../common/js/footer';
import Exchange_coin_search from './exchange_coin_search';
import Excahnge_coin_info from './exchange_coin_info';
import axios from 'axios';
import { useEffect, useState } from 'react';

const Exchange_form = () => {
  const [marketData, setMarketData] = useState([]);
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchMarketData = async () => {
      const options = {
        method: 'GET',
        url: 'https://api.upbit.com/v1/market/all',
        params: { isDetails: true },
        headers: { 'Content-Type': 'application/json' }
      };

      try {
        const response = await axios.request(options);
        setMarketData(response.data);
        console.log(response.data);
      } catch (error) {
        setError(error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchMarketData();
  }, []);

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>An error occurred: {error.message}</div>;
  }

    return(
        <>
            <Header></Header>
            <div className='exchange_container'>
                <div className='exchange_content'>
                    <Excahnge_coin_info></Excahnge_coin_info>
                    <div style={{width:"10px", height:"500px", backgroundColor:"#f4f4f4"}}></div>
                    <Exchange_coin_search></Exchange_coin_search>
                </div>
            </div>
            <Footer></Footer>
        </>
    )
}

export default Exchange_form;