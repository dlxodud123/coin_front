import './../css/main_coin_info.css';
import React from 'react';
import { useQuery } from '@tanstack/react-query';
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
  const { data, error, isLoading } = useQuery({
    queryKey: 'tickerData',
    queryFn: fetchTickerData,
    // refetchInterval: 1000, // 5초마다 재호출
  });

  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>An error occurred: {error.message}</div>;
  console.log("data",data)

  return (
    <div className="main_coin_info_content">
      코인 시세<br></br>
      {data[0].opening_price}<br></br>
      {data[1].opening_price}<br></br>
      {data[2].opening_price}<br></br>
      {data[3].opening_price}<br></br>
      {data[4].opening_price}
    </div>
  );
};

export default Main_coin_info;
