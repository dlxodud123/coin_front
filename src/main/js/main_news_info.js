import './../css/main_news_info.css'

const Main_news_info = () => {
    return(
        <>
            <div className="main_coin_news_content">
                <div style={{fontSize:"35px", marginTop:"20px", marginLeft:"20px", height:"65px"}}>
                    코인 뉴스
                </div>
                <div style={{display:"flex", marginLeft:"20px", alignItems:"center"}}>
                  <a style={{textDecoration:"none"}} href='https://www.dt.co.kr/contents.html?article_no=2024071402109963046004&ref=naver' className="main_coin_news">
                    트럼프 피격에…<label style={{fontWeight:"bold"}}>비트코인</label> 6만달러 넘어섰다
                  </a>
                </div>
                <div style={{height:"1px", width:"590px", backgroundColor:"rgba(0,0,0,0.1)", marginLeft:"20px"}}></div>
                <div style={{display:"flex", marginLeft:"20px", alignItems:"center"}}>
                  <a style={{textDecoration:"none"}} href='https://weekly.chosun.com/news/articleView.html?idxno=35918' className="main_coin_news">
                    "2억 간다더니 여름 약세장 코앞?".... <label style={{fontWeight:"bold"}}>비트코인</label> 이렇게 끝나나
                </a>
                </div>
                <div style={{height:"1px", width:"590px", backgroundColor:"rgba(0,0,0,0.1)", marginLeft:"20px"}}></div>
                <div style={{display:"flex", marginLeft:"20px", alignItems:"center"}}>
                  <a style={{textDecoration:"none"}} href='https://zdnet.co.kr/view/?no=20240714093223' className="main_coin_news">
                    美 <label style={{fontWeight:"bold"}}>비트코인</label> ETF, 6일간 10억 달러 유입
                  </a>
                </div>
                <div style={{height:"1px", width:"590px", backgroundColor:"rgba(0,0,0,0.1)", marginLeft:"20px"}}></div>
                <div style={{display:"flex", marginLeft:"20px", alignItems:"center"}}>
                  <a style={{textDecoration:"none"}} href='https://coinreaders.com/117215' className="main_coin_news">
                    안정 되찾은 <label style={{fontWeight:"bold"}}>비트코인</label>...6만달러 저항 돌파 언제쯤
                  </a>
                </div>
                <div style={{height:"1px", width:"590px", backgroundColor:"rgba(0,0,0,0.1)", marginLeft:"20px"}}></div>
                <div style={{display:"flex", marginLeft:"20px", alignItems:"center"}}>
                  <a style={{textDecoration:"none"}} href='https://weekly.chosun.com/news/articleView.html?idxno=35929' className="main_coin_news">
                    “<label style={{fontWeight:"bold"}}>비트코인</label>, 8월에 오른다” 8100만원 후퇴에도 실망 이르다?
                  </a>
                </div>
                <div style={{height:"1px", width:"590px", backgroundColor:"rgba(0,0,0,0.1)", marginLeft:"20px"}}></div>
            </div>
        </>
    )
}

export default Main_news_info;