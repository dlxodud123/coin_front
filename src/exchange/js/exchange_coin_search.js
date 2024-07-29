import './../css/exchange_coin_search.css';
import { CiSearch } from "react-icons/ci";
import { BsGearFill } from "react-icons/bs";
import { FaArrowRightArrowLeft } from "react-icons/fa6";
import { MdStarRate } from "react-icons/md";
import { useState, useEffect } from 'react';
import axios from 'axios';
import { useQuery } from 'react-query';

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

const Exchange_coin_search = (props) => {
    const [data, setData] = useState([]);
    const [error, setError] = useState(null);
    const [isLoading, setIsLoading] = useState(true);
    
    const [placeholder, setPlaceholder] = useState('코인명/심볼검색');
    const [clickOn, setClickOn] = useState(1);
    const [inputValue, setInputValue] = useState('');

    const handleChange = (event) => {
        setInputValue(event.target.value); 
    };

    useEffect(() => {
        console.log(inputValue);
    }, [inputValue]);

    const marketCodeToName = {
        "KRW-BTC": "비트코인",
        "KRW-ETH": "이더리움",
        "KRW-ADA": "에이다",
        "KRW-SOL": "솔라나",
        "KRW-XRP": "리플",
        "KRW-DOT": "폴카닷",
        "KRW-LINK": "체인링크",
        "KRW-AVAX": "아발란체",
        "KRW-ATOM": "코스모스",
        "KRW-XLM": "스텔라",
        "KRW-THETA": "쎄타토큰",
        "KRW-TRX": "트론",
        "KRW-AAVE": "에이브",
        "KRW-EOS": "이오스",
        "KRW-STMX": "스톰엑스",
        "KRW-EGLD": "멀티버스엑스",
        "KRW-NEO": "네오",
        "KRW-HBAR": "헤데라",
        "KRW-SHIB": "시바이누",
        "KRW-DOGE": "도지코인"
    };

    const RISE = 'RISE';
    const EVEN = 'EVEN';
    const FALL = 'FALL';

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

    useEffect(() => {
        fetchData(); // Initial fetch

        const intervalId = setInterval(fetchData, 1000); // Fetch data every 1 second

        return () => clearInterval(intervalId); // Cleanup interval on component unmount

    }, []);

    if (error) return <div>An error occurred: {error.message}</div>;

    const formatPrice = (price) => {
        return new Intl.NumberFormat('en-US').format(price);
    };

    const formatEngName = (name) => {
        const [currency1, currency2] = name.split('-');
        return `${currency2}/${currency1}`;
    }

    const formatKorName = (name) => {
        return marketCodeToName[name];
    }

    const formatAccTrade = (number) => {
        const inMillions = number / 1_000_000;
        const rounded = Math.round(inMillions);
        return new Intl.NumberFormat('en-US').format(rounded);
    }

    const formatSignedChangeRate = (number) => {
        return Math.round(number * 100) / 100;
    }

    const formatSignedChangePrice = (number) => {
        // console.log(number);
        if (number >= 1000) {
            return new Intl.NumberFormat('en-US').format(number);
        }
        return number;
    }

    const filteredData = data.filter((coin) =>
        formatKorName(coin.market).includes(inputValue) 
    );

    const sortedFilteredData = [...filteredData].sort((a, b) => b.acc_trade_price_24h - a.acc_trade_price_24h);

    return(
        <>
            <div className='exchange_coin_search_content'>
                <div style={{display:"flex"}}>
                    <div style={{borderBottom:"1px solid rgba(0,0,0,0.2)", width:"400px", height:"45px", display:"flex"}}>
                        <input 
                            value={inputValue} 
                            onChange={handleChange} 
                            placeholder={placeholder} 
                            onFocus={() => setPlaceholder('')} 
                            onBlur={() => setPlaceholder('코인명/심볼검색')} 
                            type='text' 
                            style={{width:"300px", height:"30px", border:"none", marginTop:"7px", marginLeft:"10px"}}
                        />
                        <div style={{marginTop:"9px", marginLeft:"7px", width:"35px"}}>
                            <CiSearch style={{color:"rgba(0,0,255,0.7)", strokeWidth:"0.5", cursor:"pointer"}} size={26} />
                        </div>
                        <div style={{width:"1px", height:"45px", backgroundColor:"rgba(0,0,0,0.2)"}}></div>
                        <div style={{marginTop:"12px", marginLeft:"11px"}}>
                            <BsGearFill style={{color:"rgba(128,128,128,0.8)", cursor:"pointer"}} size={20} />
                        </div>
                    </div>
                </div>
                <div style={{width:"400px", height:"45px", display:"flex", borderBottom:"1px solid rgba(0,0,0,0.2)"}}>
                    {clickOn === 1 ? (
                        <div onClick={() => setClickOn(1)} className='exchange_click_on'>원화</div>
                    ) : (
                        <div onClick={() => setClickOn(1)} className='exchange_click_off'>원화</div>
                    )}
                    {clickOn === 2 ? (
                        <div onClick={() => setClickOn(2)} className='exchange_click_on'>BTC</div>
                    ) : (
                        <div onClick={() => setClickOn(2)} className='exchange_click_off'>BTC</div>
                    )}
                    {clickOn === 3 ? (
                        <div onClick={() => setClickOn(3)} className='exchange_click_on'>USDT</div>
                    ) : (
                        <div onClick={() => setClickOn(3)} className='exchange_click_off'>USDT</div>
                    )}
                    {clickOn === 4 ? (
                        <div onClick={() => setClickOn(4)} className='exchange_click_on'>보유</div>
                    ) : (
                        <div onClick={() => setClickOn(4)} className='exchange_click_off'>보유</div>
                    )}
                    {clickOn === 5 ? (
                        <div onClick={() => setClickOn(5)} className='exchange_click_on'>관심</div>
                    ) : (
                        <div onClick={() => setClickOn(5)} className='exchange_click_off'>관심</div>
                    )}
                </div>
                <div style={{width:"400px", height:"30px", display:"flex", background:"#F9FAFC", fontSize:"12px", color:"rgba(0,0,0,0.5)"}}>
                    <div style={{width:"125px", textAlign:"center", marginTop:"6px"}}>
                        한글명 <FaArrowRightArrowLeft size={10} />
                    </div>
                    <div style={{width:"30px"}}></div>
                    <div style={{width:"90px", textAlign:"left", marginTop:"6px"}}>
                        현재가 <FaArrowRightArrowLeft size={10} />
                    </div>
                    <div style={{width:"70px", textAlign:"left", marginTop:"6px"}}>
                        전일대비 
                    </div>
                    <div style={{width:"80px", textAlign:"center", marginTop:"6px"}}>
                        거래대금
                    </div>
                </div>
                <div className='scrollable-container'>
                    {
                        sortedFilteredData.map((coin, i) => {
                            return (
                                <div key={i} style={{width:"400px", height:"60px", borderBottom:"1px solid rgba(0,0,0,0.1)", display:"flex"}}>
                                    <div style={{width:"30px", marginTop:"18px", marginLeft:"5px"}}>
                                        <MdStarRate style={{border:"none", color:"rgba(127,127,127,0.3)"}} size={22} />
                                    </div>
                                    <div style={{marginTop:"12px", width:"100px"}}>
                                        <a className='coin_name_select' onClick={() => props.setSelectCoin(coin.market)} style={{fontSize:"13px", cursor:"pointer"}}>{formatKorName(coin.market)}</a>
                                        <div style={{fontSize:"13px", color:"rgba(0,0,0,0.7)"}}>{formatEngName(coin.market)}</div>
                                    </div>
                                    {coin.change === RISE ? (
                                        <div style={{width:"90px", height:"40px", textAlign:"right", border:"1px solid white", marginTop:"8px", fontWeight:"600", fontSize:"14px", color:"#C84A31"}}>
                                            {formatPrice(coin.trade_price)}
                                        </div>
                                    ) : coin.change === FALL ? (
                                        <div style={{width:"90px", height:"40px", textAlign:"right", border:"1px solid white", marginTop:"8px", fontWeight:"600", fontSize:"14px", color:"#1261C4"}}>
                                            {formatPrice(coin.trade_price)}
                                        </div>
                                    ) : (
                                        <div style={{width:"90px", height:"40px", textAlign:"right", border:"1px solid white", marginTop:"8px", fontWeight:"600", fontSize:"14px"}}>
                                            {formatPrice(coin.trade_price)}
                                        </div>
                                    )}
                                    {coin.change === RISE ? (
                                        <div style={{width:"70px", marginTop:"10px"}}>
                                            <div style={{fontSize:"13px", color:"#C84A31", textAlign:"right"}}>+{formatSignedChangeRate(coin.signed_change_rate * 100)}%</div>
                                            <div style={{fontSize:"13px", color:"#C84A31", textAlign:"right"}}>{formatSignedChangePrice(coin.signed_change_price)}</div>
                                        </div>
                                    ) : coin.change === FALL ? (
                                        <div style={{width:"70px", marginTop:"10px"}}>
                                            <div style={{fontSize:"13px", color:"#1261C4", textAlign:"right"}}>{formatSignedChangeRate(coin.signed_change_rate * 100)}%</div>
                                            <div style={{fontSize:"13px", color:"#1261C4", textAlign:"right"}}>{formatSignedChangePrice(coin.signed_change_price)}</div>
                                        </div>
                                    ) : (
                                        <div style={{width:"70px", marginTop:"10px"}}>
                                            <div style={{fontSize:"13px", color:"rgba(0,0,0,0.8)", textAlign:"right"}}>{formatSignedChangeRate(coin.signed_change_rate * 100)}%</div>
                                            <div style={{fontSize:"13px", color:"rgba(0,0,0,0.8)", textAlign:"right"}}>{formatSignedChangePrice(coin.signed_change_price)}</div>
                                        </div>
                                    )}
                                    {/* {coin.signed_change_price} */}
                                    <div style={{fontSize:"13px", marginTop:"10px", textAlign:"right", width:"90px"}}>
                                        {formatAccTrade(coin.acc_trade_price_24h)}<label style={{color:"rgba(0,0,0,0.5)"}}>백만</label>
                                    </div>
                                </div>
                            )
                        })
                    }
                </div>
            </div>
        </>
    )
}

export default Exchange_coin_search;
