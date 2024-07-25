 import './../css/login_form.css';
 import Header from '../../common/js/header';
 import Footer from '../../common/js/footer';

const Login_form = () => {
    return(
        <>  
            <Header></Header>
            <div>
                <div className='login_container'>
                    <div className='login_content'>
                        <div style={{width:"600px", height:"125px", margin:"auto"}}>
                            <div style={{margin:"auto", width:"200px"}}>
                                <img style={{width:"200px", marginTop:"30px"}} src={`${process.env.PUBLIC_URL}/images/logo/logo.png`}></img>
                            </div>
                        </div>
                        <div style={{width:"400px", height:"250px", margin:"auto", border:"1px solid black", borderRadius:"20px"}}>
                            <div style={{height:"50px", backgroundColor:"#14776A", borderTopLeftRadius:"19px", borderTopRightRadius:"19px"}}>
                                <div style={{color:"white", fontWeight:"bold", width:"200px", margin:"auto", textAlign:"center", fontSize:"20px", paddingTop:"10px"}}>
                                    로&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;그&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;인
                                </div>
                            </div>
                            <div style={{width:"400px", height:"90px", textAlign:"center", marginTop:"30px"}}>
                                <input style={{width:"320px", height:"30px", margin:"auto"}} placeholder='아이디'></input>
                                <input type='password' style={{width:"320px", height:"30px", margin:"auto"}} placeholder='비밀번호'></input>
                            </div>
                            <div style={{width:"400px", height:"50px", textAlign:"center"}}>
                                <button style={{width:"327px", height:"35px", margin:"auto"}}>
                                    로그인
                                </button>
                            </div>
                        </div>
                        <div style={{width:"400px", margin:"1px auto", display:"flex"}}>
                            <div style={{width:"90px", textAlign:"center", marginLeft:"50px"}}>
                                <a href='/findId' className='tag_a'>아이디 찾기</a>
                            </div>
                            <label>/</label>
                            <div style={{width:"100px", textAlign:"center"}}>
                                <a href='/findPwd' className='tag_a'>비밀번호 찾기</a>
                            </div>
                            <label>/</label>
                            <div style={{width:"80px", textAlign:"center"}}>
                                <a href='/register' className='tag_a'>회원가입</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <Footer></Footer>
        </>
    )
}

export default Login_form;