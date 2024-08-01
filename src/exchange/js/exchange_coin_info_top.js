import { useEffect, useState } from "react";
import "./../css/exchange_coin_info_top.css"
import { BsGearFill } from "react-icons/bs";

const Exchange_coin_info_top = (props) => {

    const [img, setImg] = useState('BTC');
    const [clickOn, setClickOn] = useState(1);

    const formatEngName = (name) => {
        const [currency1, currency2] = name.split('-');
        return `${currency2}/${currency1}`;
    }

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

    useEffect(() => {
        console.log("선택 코인 : ", props.selectCoin);
        let logoURL = `https://static.upbit.com/logos/${props.selectCoin.replace("KRW-", "")}.png`;
        setImg(logoURL);
    }, [props.selectCoin])

    return(
        <>
            <div style={{borderBottom:"1px solid rgba(0,0,0,0.2)", display:"flex", height:"50px"}}>
                <div style={{display:"flex", width:"520px"}}>
                    <img src={img} style={{width:"30px", height:"30px", marginTop:"10px", marginLeft:"15px"}}></img>
                    <div style={{fontWeight:"bold", fontSize:"21px", marginTop:"10px", marginLeft:"10px"}}>
                        {marketCodeToName[props.selectCoin]}
                    </div>
                    <div style={{fontSize:"13px", marginTop:"16px", marginLeft:"5px"}}>
                        {formatEngName(props.selectCoin)}
                    </div>
                </div>
                {clickOn === 1 ? (
                    <div onClick={() => setClickOn(1)} className="click_on">시세</div>
                ) : (
                    <div onClick={() => setClickOn(1)} className="click_off">시세</div>
                )}
                {clickOn === 2 ? (
                    <div onClick={() => setClickOn(2)} className="click_on">정보</div>
                ) : (
                    <div onClick={() => setClickOn(2)} className="click_off">정보</div>
                )}

                <div style={{borderLeft:"1px solid rgba(0,0,0,0.2)"}}>
                    <BsGearFill style={{color:"rgba(128,128,128,0.8)", cursor:"pointer", width:"50px", marginTop:"14px"}} size={20} />
                </div>
            </div>
        </>
    )
}

export default Exchange_coin_info_top;