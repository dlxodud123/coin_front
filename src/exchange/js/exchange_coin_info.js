import { useEffect, useState } from 'react';
import './../css/exchange_coin_info.css';
import Exchange_coin_info_top from './exchange_coin_info_top';
import Exchange_coin_info_price from './exchange_coin_info_price';
import Exchange_coin_chart from './exchange_coin_chart';

const Exchange_coin_info = (props) => {

    return(
        <>
            <div className='exchange_coin_info_content'>
                <div>
                    <Exchange_coin_info_top selectCoin={props.selectCoin}></Exchange_coin_info_top>
                </div>
                <div>
                    <Exchange_coin_info_price selectCoin={props.selectCoin}></Exchange_coin_info_price>
                </div>
                <div style={{height:"10px"}}></div>
                <div>
                    <Exchange_coin_chart selectCoin={props.selectCoin}></Exchange_coin_chart>
                </div>
            </div>
        </>
    )
}

export default Exchange_coin_info;