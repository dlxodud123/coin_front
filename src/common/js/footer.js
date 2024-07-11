import './../css/footer.css'

const Footer = () => {
    return(
        <>
            <div className="footer_container">
                <div style={{fontSize:"17px", paddingTop:"40px"}}>
                    <div>
                        고객센터 <label style={{fontWeight:"bold"}}>1588-5682</label>&nbsp;
                        <label style={{color:"rgba(0,0,0,0.5)"}}>(평일 09:00~18:00/유료) | </label>  
                        금융사고 전담 <label style={{fontWeight:"bold"}}>1533-1111</label> 
                        <label style={{color:"rgba(0,0,0,0.5)"}}> | 서울특별시 강남구 테헤란로 4길 14, 2층 (평일 09:00~18:00)</label>
                    </div>
                    <div style={{marginTop:"7px"}}>
                        <label style={{color:"rgba(0,0,0,0.5)"}}>두나무 (주) | 서울특별시 서초구 강남대로 369, 15층 | 대표 이석우 | 사업자등록번호 119-86-54968 | 가상자산사업자 등록번호 2021-01 | 기사 배열 책임자 김태웅</label>
                    </div>
                    <div style={{marginTop:"7px"}}>
                        <label style={{color:"rgba(0,0,0,0.5)"}}>*가상자산은 고위험 상품으로써 투자금의 전부 또는 일부 손실을 초래 할 수 있습니다.</label>
                    </div>
                    <div style={{marginTop:"25px", fontSize:"18px"}}>
                        <label style={{color:"rgba(0,0,0,0.5)"}}>Copyright © 2017 - 2024 Dunamu Inc. All rights reserved.</label>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Footer;