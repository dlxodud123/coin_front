
const Main_img = () => {
    return(
        <>
            <div style={{width:"1280px", margin:"auto", position:"relative"}}>
                <img style={{width:"1280px", borderBottom:"1px solid rgba(0,0,0,0.2)"}} src={`${process.env.PUBLIC_URL}/images/main/main2.png`}></img>
                <a href="/#" style={{position:"absolute", zIndex:"1", top:"400px", left:"475px", width:"150px", height:"50px", backgroundColor:"#14776a", textDecoration:"none"}}>
                    <div style={{ color:"white", fontSize:"18px", fontWeight:"600", marginTop:"12px", marginLeft:"8px"}}>거래소 둘러보기</div>
                </a>
                <a href="/#" style={{position:"absolute", zIndex:"1", top:"400px", left:"655px", width:"150px", height:"50px", backgroundColor:"#14776a", textDecoration:"none"}}>
                    <div style={{ color:"white", fontSize:"18px", fontWeight:"600", marginTop:"12px", marginLeft:"45px"}}>로그인</div>
                </a>
                {/* <a>
                    <a href="/login" style="position: absolute; z-index: 1; top: 400px; left: 655px; width: 150px; height: 50px; background-color: #14776a;">
                        <div style="color: white; font-size: 18px; font-weight: 600; margin-top: 12px; margin-left: 45px;">로그인</div>
                    </a>
                </a> */}
            </div>
        </>
    )
}

export default Main_img;