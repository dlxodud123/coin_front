import './../css/exchange_coin_search.css';
import { CiSearch } from "react-icons/ci";
import { BsGearFill } from "react-icons/bs";
import { FaArrowRightArrowLeft } from "react-icons/fa6";
import { MdStarRate } from "react-icons/md";
import { useState } from 'react';

const Exchange_coin_search = () => {

    let [placeholder, setPlaceholder] = useState('코인명/심볼검색');
    let [clickOn, setClickOn] = useState(1);
    let [개수, set개수] = useState([1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20]);

    const formatPrice = (price) => {
        return new Intl.NumberFormat('en-US').format(price);
    };

    return(
        <>
            <div className='exchange_coin_search_content'>
                <div style={{display:"flex"}}>
                    <div style={{borderBottom:"1px solid rgba(0,0,0,0.2)", width:"400px", height:"45px", display:"flex"}}>
                        <input placeholder={placeholder} onFocus={() => setPlaceholder('')} onBlur={() => setPlaceholder('코인명/심볼검색')} type='text' style={{width:"300px", height:"30px", border:"none", marginTop:"7px", marginLeft:"10px"}}>
                        </input>
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
                    <div style={{width:"145px", textAlign:"center", marginTop:"6px"}}>
                        한글명 <FaArrowRightArrowLeft size={10} />
                    </div>
                    <div style={{width:"100px", textAlign:"center", marginTop:"6px"}}>
                        현재가 <FaArrowRightArrowLeft size={10} />
                    </div>
                    <div style={{width:"70px", textAlign:"center", marginTop:"6px"}}>
                        전일대비 
                    </div>
                    <div style={{width:"80px", textAlign:"center", marginTop:"6px"}}>
                        거래대금
                    </div>
                </div>
                <div className='scrollable-container'>
                    {
                        개수.map((coin, i) => {
                            return (
                                <div style={{width:"400px", height:"60px", borderBottom:"1px solid rgba(0,0,0,0.1)", display:"flex"}}>
                                    <div style={{width:"30px", marginTop:"18px", marginLeft:"5px"}}>
                                        <MdStarRate style={{border:"none", color:"rgba(127,127,127,0.3)"}} size={22} />
                                    </div>
                                    <div style={{marginTop:"12px", width:"110px"}}>
                                        <div style={{fontSize:"13px"}}>스페이스아이디</div>
                                        <div style={{fontSize:"13px", color:"rgba(0,0,0,0.8)"}}>BTC/KRW</div>
                                    </div>
                                    <div style={{width:"90px", height:"40px", textAlign:"right", border:"1px solid white", marginTop:"8px", fontWeight:"600", fontSize:"14px"}}>
                                        {formatPrice(100000000)}
                                    </div>
                                    <div style={{width:"70px", marginTop:"10px"}}>
                                        <div style={{fontSize:"13px", textAlign:"right"}}>+12.8%</div>
                                        <div style={{fontSize:"13px", color:"rgba(0,0,0,0.8)", textAlign:"right"}}>+{formatPrice(1000000)}</div>
                                    </div>
                                    <div style={{fontSize:"13px", marginTop:"10px", textAlign:"right", width:"80px"}}>
                                        {formatPrice(100000)}<label style={{color:"rgba(0,0,0,0.5)"}}>백만</label>
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