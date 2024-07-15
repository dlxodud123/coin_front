import './../css/main_form.css';
import Header from "../../common/js/header";
import Main_img from "./main_img";
import Footer from '../../common/js/footer';
import Main_news_info from './main_news_info';
import Main_coin_info from './main_coin_info';

const Main_form = () => {
    return(
        <>
            <Header></Header>
            <div className="main_img_container">
                <Main_img></Main_img>
            </div>
            <div className="main_info_container">
                <div className="main_info_content">
                    <Main_news_info></Main_news_info>
                    <Main_coin_info></Main_coin_info>
                </div>
            </div>
            <Footer></Footer>
        </>
    )
}
export default Main_form;