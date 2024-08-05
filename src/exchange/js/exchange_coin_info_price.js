import axios from 'axios';
import './../css/exchange_coin_info_price.css';
import { useEffect, useState } from 'react';
import { IoTriangle } from "react-icons/io5";

const Exchange_coin_info_price = (props) => {
    
    const [data, setData] = useState([]);
    const [error, setError] = useState(null);
    const [isLoading, setIsLoading] = useState(true);

    const [coinName, setCoinName] = useState('KRW-BTC');

    const RISE = 'RISE';
    const EVEN = 'EVEN';
    const FALL = 'FALL';

    useEffect(() => {
        setCoinName(props.selectCoin);
    }, [props.selectCoin])
    
    const fetchTickerData = async () => {
        const options = {
          method: 'GET',
          url: 'https://api.upbit.com/v1/ticker',
          params: { markets: coinName },
          headers: { accept: 'application/json' }
        };
      
        const response = await axios.request(options);
        return response.data;
    };

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
    }, [coinName]);

    if (error) return <div>An error occurred: {error.message}</div>;

    const formatPrice = (price) => {
        return new Intl.NumberFormat('en-US').format(price);
    };
    const formatSignedChangeRate = (number) => {
        return Math.round(number * 100) / 100;
    };
    const formatSignedChangePrice = (number) => {
        // console.log(number);
        if (Math.abs(number) >= 1000) {
            return new Intl.NumberFormat('en-US').format(number);
        }
        return number;
    }
    const formatEngName = (name) => {
        const parts = name.split('-');
        return parts[1];
    }
    const formatTradePrice = (price) => {
        const roundedNumber = Math.round(price);
        return new Intl.NumberFormat('en-US').format(roundedNumber);
    }

    return(
        <>
            <div className='coin_info_price_container'>
                {(data && data.length > 0) && data[0].change === RISE ? (
                    <div style={{display:"flex"}}>
                        <div style={{ width:"360px", marginLeft:"20px", marginTop:"10px"}}>
                            <div>
                                <label style={{fontSize:"35px", fontWeight:"600", color:"#C84A31"}}>{formatPrice(data[0].trade_price)}</label><label style={{color:"#C84A31"}}>&nbsp;KRW</label>
                            </div>
                            <div style={{display:"flex"}}>
                                <div style={{fontWeight:"600", color:"#C84A31"}}>+{formatSignedChangeRate(data[0].signed_change_rate * 100)}%</div>&nbsp;
                                <div style={{width:"20px", textAlign:"center"}}><IoTriangle style={{ color:"#C84A31", marginTop:"5px"}} size={14}/></div>
                                <div style={{fontWeight:"600", color:"#C84A31"}}>{formatSignedChangePrice(data[0].signed_change_price)}</div>
                            </div>
                        </div>
                    </div>
                ) : (data && data.length > 0) && data[0].change === FALL ? (
                    <div style={{display:"flex"}}>
                        <div style={{ width:"360px", marginLeft:"20px", marginTop:"10px"}}>
                            <div>
                                <label style={{fontSize:"35px", fontWeight:"600", color:"#1261C4"}}>{formatPrice(data[0].trade_price)}</label><label style={{color:"#1261C4"}}>&nbsp;KRW</label>
                            </div>
                            <div style={{display:"flex"}}>
                                <div style={{fontWeight:"600", color:"#1261C4"}}>{formatSignedChangeRate(data[0].signed_change_rate * 100)}%</div>&nbsp;
                                <div style={{width:"20px", textAlign:"center"}}><IoTriangle style={{ transform: 'rotate(180deg)', color:"#1261C4", marginTop:"5px"}} size={14}/></div>
                                <div style={{fontWeight:"600", color:"#1261C4"}}>{formatSignedChangePrice(data[0].signed_change_price)}</div>
                            </div>
                        </div>
                    </div>
                ) : (data && data.length > 0) && data[0].change === EVEN ? (
                    <div style={{display:"flex"}}>
                        <div style={{ width:"360px", marginLeft:"20px", marginTop:"10px"}}>
                            <div>
                                <label style={{fontSize:"35px", fontWeight:"600", color:"black"}}>{formatPrice(data[0].trade_price)}</label><label>&nbsp;KRW</label>
                            </div>
                            <div style={{display:"flex"}}>
                                <div style={{fontWeight:"600"}}>{formatSignedChangeRate(data[0].signed_change_rate * 100)}%</div>&nbsp;
                                <div style={{width:"20px", textAlign:"center"}}><IoTriangle style={{ transform: 'rotate(180deg)', color:"black", marginTop:"5px"}} size={14}/></div>
                                <div style={{fontWeight:"600"}}>{formatSignedChangePrice(data[0].signed_change_price)}</div>
                            </div>
                        </div>
                    </div>
                ) : (
                    <></>
                )}
                <div></div>
                {data && data.length > 0 ? (
                    <div>
                        <div style={{display:"flex", width:"200px", borderBottom:"1px solid rgba(0,0,0,0.1)", height:"40px", alignItems:"center", fontSize:"13px", marginTop:"8px"}}>
                            <div style={{width:"30px"}}>
                                고가
                            </div>
                            <div style={{width:"170px", textAlign:"right", fontWeight:"600", color:"#C84A31"}}>
                                {formatPrice(data[0].high_price)}
                            </div>
                        </div>
                        <div style={{display:"flex", width:"200px", height:"40px", alignItems:"center", fontSize:"13px"}}>
                            <div style={{width:"30px"}}>
                                저가
                            </div>
                            <div style={{width:"170px", textAlign:"right", fontWeight:"600", color:"#1261C4"}}>
                                {formatPrice(data[0].low_price)}
                            </div>
                        </div>
                    </div>
                ) : (
                    <div>
                    </div>
                )}
                <div style={{width:"25px"}}></div>
                {data && data.length > 0 ? (
                    <div>
                        <div style={{display:"flex", width:"240px", borderBottom:"1px solid rgba(0,0,0,0.1)", height:"40px", alignItems:"center", fontSize:"13px", marginTop:"8px"}}>
                            <div style={{width:"90px"}}>
                                거래량(24h)
                            </div>
                            <div style={{width:"150px", textAlign:"right", fontSize:"14px"}}>
                                {formatPrice(data[0].acc_trade_volume_24h)}<label style={{color:"rgba(0,0,0,0.5)", fontSize:"13px"}}>&nbsp;{formatEngName(data[0].market)}</label>
                            </div>
                        </div>
                        <div style={{display:"flex", width:"240px", height:"40px", alignItems:"center", fontSize:"13px"}}>
                            <div style={{width:"90px"}}>
                                거래대금(24H)
                            </div>
                            <div style={{width:"150px", textAlign:"right"}}>
                                {formatTradePrice(data[0].acc_trade_price_24h)}<label style={{color:"rgba(0,0,0,0.5)"}}>&nbsp;KRW</label>
                            </div>
                        </div>
                    </div>
                ) : (
                    <div>
                    </div>
                )}
            </div>
        </>
    )
}

export default Exchange_coin_info_price;