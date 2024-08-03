 import './../css/login_form.css';
 import Header from '../../common/js/header';
 import Footer from '../../common/js/footer';
import { useEffect, useState } from 'react';

const Login_form = () => {

    const [loginBtn, setLoginBtn] = useState(false);
    const [email, setEmail] = useState('');
    const [pwd, setPwd] = useState('');

    const handleSubmit = async (event) => {
        event.preventDefault(); // 기본 폼 제출 동작 방지
    
        // FormData 객체 생성
        const formData = new FormData();
        formData.append('email', `${email}`);
        formData.append('password', `${pwd}`);
    
        // fetch API를 사용해 POST 요청 보내기
        try {
            const response = await fetch('http://localhost:8080/your-endpoint', {
                method: 'POST',
                body: formData, // FormData 객체를 그대로 전송
            });
    
            const result = await response.json();
            console.log('Success : ', result); // 성공 시 결과 출력
        } catch (error) {
            console.error('Error : ', error); // 에러 발생 시 에러 메시지 출력
        }
    };
    
    useEffect(() => {
        if(loginBtn) {
            handleSubmit();
        }
    }, [loginBtn])


    useEffect(() => {
        console.log(email);
        console.log(pwd);

        if (email.length > 0 && pwd.length >= 5) {
            setLoginBtn(true);
        } else {
            setLoginBtn(false);
        }
    }, [email, pwd])

    const handleEmail = (e) => {
        setEmail(e.target.value);
    }
    const handlePwd = (e) => {
        setPwd(e.target.value);
    }

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
                                <input onChange={handleEmail} style={{width:"320px", height:"30px", margin:"auto"}} placeholder='이메일'></input>
                                <input onChange={handlePwd} type='password' style={{width:"320px", height:"30px", margin:"auto"}} placeholder='비밀번호'></input>
                            </div>
                            <div style={{width:"400px", height:"50px", textAlign:"center"}}>
                                {loginBtn ? (
                                    <button onClick={() => setLoginBtn(true)} style={{width:"327px", height:"35px", margin:"auto", color:"white", backgroundColor:"black", fontWeight:"bold"}}>
                                        로그인
                                    </button>
                                ) : (
                                    <button disabled style={{width:"327px", height:"35px", margin:"auto", color:"white"}}>
                                        로그인
                                    </button>
                                )}
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