import './../css/main_img.css';

const Main_img = () => {
    return(
        <>
            <div style={{width:"1280px", margin:"auto", position:"relative"}}>
                <img style={{width:"1280px", borderBottom:"1px solid rgba(0,0,0,0.2)"}} src={`${process.env.PUBLIC_URL}/images/main/main2.png`}></img>
                <a href="/exchange" style={{position:"absolute", zIndex:"1", top:"400px", left:"475px", width:"150px", height:"50px", backgroundColor:"#14776a", textDecoration:"none"}}>
                    <div className='main_exchange'>거래소 둘러보기</div>
                </a>
                <a href="/login" style={{position:"absolute", zIndex:"1", top:"400px", left:"655px", width:"150px", height:"50px", backgroundColor:"#14776a", textDecoration:"none"}}>
                    <div className='main_login'>로그인</div>
                </a>
            </div>
        </>
    )
}

export default Main_img;