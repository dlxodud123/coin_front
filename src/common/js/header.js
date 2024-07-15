import './../css/header.css';

const Header = () => {

    const img_click = () => {
        window.location.href = "./";
    }

    return(
        <>
            <div className='header_container'>
                <div className='header_content'>
                    <div style={{width:"200px"}}>
                        <img onClick={() => img_click()} style={{width:"130px", marginTop:"12px", cursor:"pointer"}} src={`${process.env.PUBLIC_URL}/images/logo/banner_logo.png`}></img>
                    </div>
                    <div style={{width:"130px", marginTop:"22px"}}>
                        <a href='#' className='link'>거래소</a>
                    </div>
                    <div style={{width:"130px", marginTop:"22px"}}>
                        <a href='#' className='link'>게시판</a>
                    </div>
                    <div style={{width:"130px", marginTop:"22px"}}>
                        <a href='#' className='link'>내 코인</a>
                    </div>
                    <div style={{width:"130px", marginTop:"22px"}}>
                        <a href='#' className='link'>거래내역</a>
                    </div>
                    <div style={{width:"560px", display:"flex"}}>
                        <div style={{width:"410px", textAlign:"right", marginTop:"22px"}}>
                            <a href='/login' className='link'>로그인</a>
                        </div>
                        <div style={{width:"150px", textAlign:"right", marginTop:"22px"}}>
                            <a href='/register' className='link'>회원가입</a>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Header;