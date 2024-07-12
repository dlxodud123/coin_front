import './../css/main_coin_info.css';
import React, { useState, useEffect } from 'react';
import axios from 'axios';

const fetchTickerData = async () => {
  const options = {
    method: 'GET',
    url: 'https://api.upbit.com/v1/ticker',
    params: { markets: 'KRW-BTC, KRW-ETH, KRW-BCH, KRW-SOL, KRW-AAVE' },
    headers: { accept: 'application/json' }
  };

  const response = await axios.request(options);
  return response.data;
};

const Main_coin_info = () => {
  const [data, setData] = useState([]);
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  // const [formatPrice, setFormatPrice] = useState();
  
  const format_price = (price) => {
    let formatPrice = price.toLacaleString('en-US');
    return formatPrice;
  }

  useEffect(() => {
    const fetchData = async () => {
      try {
        const result = await fetchTickerData();
        setData(result);
      } catch (error) {
        setError(error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchData(); // Initial fetch

    const intervalId = setInterval(fetchData, 1000); // Fetch data every 1 second

    return () => clearInterval(intervalId); // Cleanup interval on component unmount

  }, []);

  if (error) return <div>An error occurred: {error.message}</div>;

  // console.log(data[0].signed_change_rate);

  return (
    data.length > 0 ?(
    <div className="main_coin_info_content">
      <div style={{fontSize:"35px", marginTop:"20px", marginLeft:"20px", height:"65px"}}>
        코인 시세
      </div>
      <div style={{display:"flex", marginLeft:"20px", alignItems:"center"}}>
        <div className="main_coin_name">비트코인</div>
        <div className='main_coin_price'>{data[0].trade_price.toLocaleString('en-US')}&nbsp;KRW</div>
        <div className='main_coin_rate'>{(data[0].signed_change_rate*100).toFixed(2)}%</div>
      </div>
      <div style={{height:"1px", width:"590px", backgroundColor:"rgba(0,0,0,0.1)", marginLeft:"20px"}}></div>
      <div style={{display:"flex", marginLeft:"20px"}}>
        <div className="main_coin_name">이더리움</div>
        <div className='main_coin_price'>{data[1].trade_price.toLocaleString('en-US')}&nbsp;KRW</div>
        <div className='main_coin_rate'>{(data[1].signed_change_rate*100).toFixed(2)}%</div>
      </div>
      <div style={{height:"1px", width:"590px", backgroundColor:"rgba(0,0,0,0.1)", marginLeft:"20px"}}></div>
      <div style={{display:"flex", marginLeft:"20px"}}>
        <div className="main_coin_name">비트코인캐시</div>
        <div className='main_coin_price'>{data[2].trade_price.toLocaleString('en-US')}&nbsp;KRW</div>
        <div className='main_coin_rate'>{(data[2].signed_change_rate*100).toFixed(2)}%</div>
      </div>
      <div style={{height:"1px", width:"590px", backgroundColor:"rgba(0,0,0,0.1)", marginLeft:"20px"}}></div>
      <div style={{display:"flex", marginLeft:"20px"}}>
        <div className="main_coin_name">솔라나</div>
        <div className='main_coin_price'>{data[3].trade_price.toLocaleString('en-US')}&nbsp;KRW</div>
        <div className='main_coin_rate'>{(data[3].signed_change_rate*100).toFixed(2)}%</div>
      </div>
      <div style={{height:"1px", width:"590px", backgroundColor:"rgba(0,0,0,0.1)", marginLeft:"20px"}}></div>
      <div style={{display:"flex", marginLeft:"20px"}}>
        <div className="main_coin_name">에이브</div>
        <div className='main_coin_price'>{data[4].trade_price.toLocaleString('en-US')}&nbsp;KRW</div>
        <div className='main_coin_rate'>{(data[4].signed_change_rate*100).toFixed(2)}%</div>
      </div>
      {/* {data[0].opening_price}<br></br>
      {data[1].opening_price}<br></br>
      {data[2].opening_price}<br></br>
      {data[3].opening_price}<br></br>
      {data[4].opening_price} */}
    </div>
  ) : (
    <div>asdf</div>
  )
  );
};

export default Main_coin_info;
