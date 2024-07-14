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
  const [coinName, setCoinName] = useState(['비트코인', '이더리움', '비트코인캐시', '솔라나', '에이브'])

  const RISE = 'RISE';
  const EVEN = 'EVEN';
  const FALL = 'FALL';
  
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

  return (
    data.length > 0 ?(
    <div className="main_coin_info_content">
      <div style={{fontSize:"35px", marginTop:"20px", marginLeft:"20px", height:"65px"}}>
        코인 시세
      </div>
      {  data.map((coin, index) => {
          console.log(index)
          if (coin.change === RISE) {
            return (
              <>
                <div key={index} style={{display:"flex", marginLeft:"20px", alignItems:"center"}}>
                  <div className="main_coin_name">{coinName[index]}</div>
                  <div style={{color:"red"}} className='main_coin_price'>{coin.trade_price.toLocaleString('en-US')}&nbsp;KRW</div>
                  <div style={{color:"red"}} className='main_coin_rate'>+{(coin.signed_change_rate*100).toFixed(2)}%</div>
                </div>
                <div style={{height:"1px", width:"590px", backgroundColor:"rgba(0,0,0,0.1)", marginLeft:"20px"}}></div>
              </>
            );
          } else if(coin.change === EVEN) {
            return (
              <>
                <div key={index} style={{display:"flex", marginLeft:"20px", alignItems:"center"}}>
                  <div className="main_coin_name">{coinName[index]}</div>
                  <div className='main_coin_price'>{coin.trade_price.toLocaleString('en-US')}&nbsp;KRW</div>
                  <div className='main_coin_rate'>{(coin.signed_change_rate*100).toFixed(2)}%</div>
                </div>
                <div style={{height:"1px", width:"590px", backgroundColor:"rgba(0,0,0,0.1)", marginLeft:"20px"}}></div>
              </>
            );
          } else{
            return (
              <>
                <div key={index} style={{display:"flex", marginLeft:"20px", alignItems:"center"}}>
                  <div className="main_coin_name">{coinName[index]}</div>
                  <div style={{color:"blue"}} className='main_coin_price'>{coin.trade_price.toLocaleString('en-US')}&nbsp;KRW</div>
                  <div style={{color:"blue"}} className='main_coin_rate'>-{(coin.signed_change_rate*100).toFixed(2)}%</div>
                </div>
                <div style={{height:"1px", width:"590px", backgroundColor:"rgba(0,0,0,0.1)", marginLeft:"20px"}}></div>
              </>
            );
          }
      })}

      {/* <div style={{height:"1px", width:"590px", backgroundColor:"rgba(0,0,0,0.1)", marginLeft:"20px"}}></div>
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
      </div> */}
    </div>
  ) : (
    <div></div>
  )
  );
};

export default Main_coin_info;
