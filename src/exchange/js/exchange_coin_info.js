import { useEffect, useState } from 'react';
import './../css/exchange_coin_info.css';
import Exchange_coin_info_top from './exchange_coin_info_top';

const Excahnge_coin_info = (props) => {



    return(
        <>
            <div className='exchange_coin_info_content'>
                <div>
                    <Exchange_coin_info_top selectCoin={props.selectCoin}></Exchange_coin_info_top>
                </div>
            </div>
        </>
    )
}

export default Excahnge_coin_info;