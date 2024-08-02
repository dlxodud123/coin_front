import './../css/exchange_form.css';
import Header from '../../common/js/header';
import Footer from '../../common/js/footer';
import Exchange_coin_search from './exchange_coin_search';
import Exchange_coin_info from './exchange_coin_info';
import { useEffect, useState } from 'react';

const Exchange_form = () => {
  const [selectCoin, setSelectCoin] = useState('KRW-BTC');

  return(
      <>
          <Header></Header>
          <div className='exchange_container'>
              <div className='exchange_content'>
                  <Exchange_coin_info selectCoin={selectCoin}></Exchange_coin_info>
                  <div style={{width:"10px", height:"500px", backgroundColor:"#f4f4f4"}}></div>
                  <Exchange_coin_search setSelectCoin={setSelectCoin}></Exchange_coin_search>
              </div>
          </div>
          <Footer></Footer>
      </>
  )
}

export default Exchange_form;