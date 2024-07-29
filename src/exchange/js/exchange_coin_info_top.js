import { useEffect, useState } from "react";
import "./../css/exchange_coin_info_top.css"

const Exchange_coin_info_top = (props) => {

    const [img, setImg] = useState('BTC');

    useEffect(() => {
        console.log("선택 코인 : ", props.selectCoin);
        let logoURL = `https://static.upbit.com/logos/${props.selectCoin.replace("KRW-", "")}.png`;
        setImg(logoURL);
    }, [props.selectCoin])

    return(
        <>
            <img src={img}></img>
        </>
    )
}

export default Exchange_coin_info_top;