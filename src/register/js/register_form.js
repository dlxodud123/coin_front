import './../css/register_form.css';
import Header from '../../common/js/header';
import Footer from '../../common/js/footer';
import { useEffect, useState } from 'react';

const Register_form = () => {
    
    const [id, setId] = useState('');
    const [pwd, setPwd] = useState('');
    const [pwdChk, setPwdChk] = useState('');
    const [name, setName] = useState('');
    const [phoneNumber, setPhoneNumber] = useState({
        userPhone_1: '',
        userPhone_2: '',
        userPhone_3: ''
    });
    const [email, setEmail] = useState({
        userEmail_id: '',
        userEmail_domain_write: '',
        userEmail_domain_auto: 'type',
    });
    const [nick, setNick] = useState('');


    const [finalIdChk, setFinalIdChk] = useState(false);
    const [finalPwdChk, setFinalPwdChk] = useState(false);
    const [finalNameChk, setFinalNameChk] = useState(false);
    const [finalPhoneChk, setFinalPhoneChk] = useState(false);
    const [finalEmailChk, setFinalEmailChk] = useState(false);
    const [finalNickChk, setFinalNickChk] = useState(false);

    const [finalBtn, setFinalBtn] = useState(false)


    const handleIdChange = (e) => {
        setId(e.target.value);
    }
    const handlePwdChange = (e) => {
        setPwd(e.target.value);
    }
    const handlePwdChkChange = (e) => {
        setPwdChk(e.target.value);
    }
    const handleNameChange = (e) => {
        setName(e.target.value);
    }
    const handlePhoneChange = (event) => {
        const { name, value } = event.target;
        // 숫자만 입력되도록 필터링
        if (/^\d*$/.test(value)) {
            setPhoneNumber({
                ...phoneNumber,
                [name]: value
            });
        }
    };
    const handleEmailChange = (event) => {
        const { name, value } = event.target;
        setEmail({
            ...email,
            [name]: value
        });
    };
    const handleDomainChange = (event) => {
        const { value } = event.target;
        setEmail((prevEmail) => ({
            ...prevEmail,
            userEmail_domain_auto: value,
            userEmail_domain_write: value === 'type' ? '' : value
        }));
    };
    const handleNickChange = (e) => {
        setNick(e.target.value);
    };


    useEffect(() => {
        console.log("아이디 : ", id)
        console.log("비밀번호 : ", pwd);
        console.log("비밀번호 확인 : ", pwdChk)
        console.log("이름 : ", name)
        console.log("전번1 : ", phoneNumber.userPhone_1);
        console.log("전번2 : ", phoneNumber.userPhone_2);
        console.log("전번3 : ", phoneNumber.userPhone_3);
        console.log("이메일1 : ", email.userEmail_id);
        console.log("이메일2 : ", email.userEmail_domain_write);
        console.log("이메일3 : ", email.userEmail_domain_auto);
        console.log("닉네임 : ", nick);
        if (pwd === pwdChk && pwd.length > 0) {
            setFinalPwdChk(true);
        } else{
            setFinalPwdChk(false);
        }
    }, [phoneNumber, email, nick, pwd, pwdChk, name, id])

    return(
        <>
            <Header></Header>
            {/* {finalPwdChk ? (
                <div>true</div>
            ) : (
                <div>false</div>
            )} */}
            <div className='register_container'>
                <div className='register_content'>
                    <div style={{textAlign:"center", paddingTop:"20px"}}>
                        <img style={{width:"200px"}} src={`${process.env.PUBLIC_URL}/images/logo/logo.png`}></img>
                    </div>
                    <div className='register_border'>
                        <div style={{width:"400px", height:"50px", backgroundColor:"#14776A", borderTopLeftRadius:"19px", borderTopRightRadius:"19px"}}>
                            <div style={{width:"200px", height:"50px", margin:"auto", color:"white", fontWeight:"bold", textAlign:"center", fontSize:"20px", paddingTop:"10px"}}>
                                회&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                                원&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                                가&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;입
                            </div>
                        </div>
                        <div className='register_border_content'>
                            <div>
                                <div style={{fontWeight:"bold"}}>
                                    아이디
                                </div>
                                <div style={{display:"flex"}}>
                                    <input onChange={handleIdChange} maxLength="20" id='id' style={{height:"28px", width:"268px"}} placeholder='5~20자 입력'></input>
                                    <button style={{width:"64px", fontSize:"12px", height:"20px", marginTop:"7px", marginLeft:"10px", backgroundColor:"white", border:"2px solid #14776A", color:"#14776A", fontWeight:"bold", borderRadius:"5px"}}>중복확인</button>
                                </div>
                            </div>

                            {id.length < 5 ? (
                                id.length > 0 ?(
                                    <div style={{height:"10px", fontSize:"12px", color:"red"}}>5글자 이상 입력해주세요</div>
                                ) : (
                                    <div style={{height:"10px", fontSize:"12px", color:"red"}}></div>
                                )
                            ) : (
                                <div style={{height:"10px", fontSize:"12px", color:"red"}}></div>
                            )}

                            <div style={{marginTop:"20px"}}>
                                <div style={{fontWeight:"bold"}}>
                                    비밀번호
                                </div>
                                <div style={{display:"flex"}}>
                                    <input onChange={handlePwdChange} id='pwd' style={{height:"28px", width:"350px"}} placeholder='비밀번호'></input>
                                </div>
                            </div>
                            <div style={{marginTop:"30px"}}>
                                <div style={{fontWeight:"bold"}}>
                                    비밀번호 재확인
                                </div>
                                <div style={{display:"flex"}}>
                                    <input onChange={handlePwdChkChange} id='pwdChk' style={{height:"28px", width:"350px"}} placeholder='비밀번호'></input>
                                </div>
                            </div>

                            {pwdChk.length > 0 ? (
                                 pwd === pwdChk ? (
                                    <div style={{height:"10px", fontSize:"12px", color:"blue"}}>비밀번호가 일치합니다</div>
                                ): (
                                    <div style={{height:"10px", fontSize:"12px", color:"red"}}>비밀번호가 일치하지 않습니다</div>
                                )
                            ) : (
                                <div style={{height:"10px"}}></div>
                            )}

                            <div style={{marginTop:"20px"}}>
                                <div style={{fontWeight:"bold"}}>
                                    이름
                                </div>
                                <div style={{display:"flex"}}>
                                    <input onChange={handleNameChange} id='name' style={{height:"28px", width:"350px"}} placeholder='이름'></input>
                                </div>
                            </div>
                            <div style={{marginTop:"30px"}}>
                                <div style={{fontWeight:"bold"}}>
                                    휴대전화
                                </div>
                                <div style={{display:"flex"}}>
                                    <input name="userPhone_1" type="text" value={phoneNumber.userPhone_1} onChange={handlePhoneChange} maxlength="3" style={{width: "100px", height: "28px"}} />
                                    <div style={{width:"15px", textAlign:"center", marginTop:"3px"}}>-</div>
                                    <input name="userPhone_2" type="text" value={phoneNumber.userPhone_2} onChange={handlePhoneChange} maxlength="4" style={{width: "100px", height: "28px"}} />
                                    <div style={{width:"15px", textAlign:"center", marginTop:"3px"}}>-</div>
                                    <input name="userPhone_3" type="text" value={phoneNumber.userPhone_3} onChange={handlePhoneChange} maxlength="4" style={{width: "100px", height: "28px"}} />
                                </div>
                            </div>


                            <div style={{marginTop:"30px"}}>
                                <div style={{fontWeight:"bold"}}>
                                    이메일
                                </div>
                                <div style={{display:"flex"}}>
                                    <input
                                        id="userEmail"
                                        name="userEmail_id"
                                        value={email.userEmail_id}
                                        onChange={handleEmailChange}
                                        style={{ width: '84px', height: '35px' }}
                                    />
                                    <div style={{marginTop:"7px", marginLeft:"5px", marginRight:"5px"}}>@</div>
                                    <input
                                        className="box"
                                        id="domain-txt"
                                        name="userEmail_domain_write"
                                        type="text"
                                        value={email.userEmail_domain_write}
                                        onChange={handleEmailChange}
                                        disabled={email.userEmail_domain_auto !== 'type'}
                                        style={{ width: '70px', height: '35px' }}
                                    />
                                    <select
                                        className="box"
                                        id="domain-list"
                                        name="userEmail_domain_auto"
                                        value={email.userEmail_domain_auto}
                                        onChange={handleDomainChange}
                                        style={{ width: '85px', height: '40px' }}
                                    >
                                        <option value="type">직접 입력</option>
                                        <option value="naver.com">naver.com</option>
                                        <option value="google.com">google.com</option>
                                        <option value="hanmail.net">hanmail.net</option>
                                        <option value="nate.com">nate.com</option>
                                        <option value="daum.net">daum.net</option>
                                    </select>
                                    <button style={{width:"64px", fontSize:"12px", height:"20px", marginTop:"9px", marginLeft:"5px", backgroundColor:"white", border:"2px solid #14776A", color:"#14776A", fontWeight:"bold", borderRadius:"5px"}}>중복확인</button>
                                </div>
                            </div>
                            <div style={{marginTop:"30px"}}>
                                <div style={{fontWeight:"bold"}}>
                                    닉네임
                                </div>
                                <div style={{display:"flex"}}>
                                    <input onChange={handleNickChange} type='text' maxLength="8" style={{height:"28px", width:"268px"}} placeholder='2~8자 입력'></input>
                                    <button style={{width:"64px", fontSize:"12px", height:"20px", marginTop:"6px", marginLeft:"10px", backgroundColor:"white", border:"2px solid #14776A", color:"#14776A", fontWeight:"bold", borderRadius:"5px"}}>중복확인</button>
                                </div>
                            </div>
                            {finalBtn ? (
                                <div style={{marginTop:"40px"}}>
                                    <button style={{width:"350px", height:"40px", backgroundColor:"#14776A", color:"white", borderRadius:"8px", border:"none"}}>가입하기</button>
                                </div>
                            ) : (
                                <div style={{marginTop:"40px"}}>
                                    <button style={{width:"350px", height:"40px", backgroundColor:"rgba(127,127,127,0.4)", color:"white", borderRadius:"8px", border:"none"}}>가입하기</button>
                                </div>
                            )}
                        </div>
                    </div>
                </div>
            </div>
            <Footer></Footer>
        </>
    )
}

export default Register_form;