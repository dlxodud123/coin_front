import './../css/register_form.css';
import Header from '../../common/js/header';
import Footer from '../../common/js/footer';
import { useEffect, useState } from 'react';

const Register_form = () => {
    
    const type = 'type';
    
    const [pwd, setPwd] = useState('');
    const [pwdChk, setPwdChk] = useState('');
    const [name, setName] = useState('');
    const [email, setEmail] = useState({
        userEmail_id: '',
        userEmail_domain_write: '',
        userEmail_domain_auto: 'type',
    });
    const [nick, setNick] = useState('');

    const [nickDplBtn, setNickDplBtn] = useState(false);
    
    const [emailDplBtn, setEmailDplBtn] = useState(false)
    const [emailDpl, setEmailDpl] = useState(false);
    const [emailCertView, setEmailCertView] = useState(false);

    const [finalEmail, setFinalEmail] = useState(false);
    const [finalPwd, setFinalPwd] = useState(false);
    const [finalPwdChk, setFinalPwdChk] = useState(false);
    const [finalName, setFinalName] = useState(false);
    const [finalNick, setFinalNick] = useState(false);

    const [finalBtn, setFinalBtn] = useState(false)


    const handlePwdChange = (e) => {
        setPwd(e.target.value);
    }
    const handlePwdChkChange = (e) => {
        setPwdChk(e.target.value);
    }
    const handleNameChange = (e) => {
        setName(e.target.value);
    }
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

    const isValidDomain = (domain) => {
        const lengthRegex = /^.{1,}\.com$/; // 한글자 이상 .com으로 끝나는 도메인 형식
        return lengthRegex.test(domain);
    };

    const emailDuplication = () => {
        // 이메일 중복 인증 코드
        setEmailDpl(true);
        alert("사용 가능한 이메일 입니다.");
    }

    const nickDuplication = () => {
        // 닉네임 중복 인증 코드
        alert("사용 가능한 닉네임 입니다.");
        setFinalNick(true);
    }

    const emailCertification = () => {
        alert("인증번호가 발송되었습니다.");

        setEmailCertView(true);
    }

    // useEffect(() => {
    //     console.log("이메일1 : ", email.userEmail_id);
    //     console.log("이메일2 : ", email.userEmail_domain_write);
    //     console.log("이메일3 : ", email.userEmail_domain_auto);
    //     console.log("최종 이메일 : ", email.userEmail_id + '@' + email.userEmail_domain_write);
    // }, [email])

    useEffect(() => {
        console.log("이메일 중복 버튼 활성화 : ", finalEmail); 
        console.log("닉네임 중복 버튼 활성화 : ", finalNick);
        console.log("이메일 중복 확인 : ", emailDpl);
        console.log("닉네임 중복 확인 : ", finalNick);
        console.log("이메일 인증버튼 활성화 : ", );

        console.log("비밀번호 최종 : ", finalPwd);
        console.log("비밀번호 재확인 최종 : ", finalPwdChk);
        console.log("이름 최종 : ", finalName);
        console.log("닉네임 최종 : ", finalNick);
        console.log()
    }, [finalEmail, finalNick, emailDpl, finalNick, finalPwd, finalPwdChk, finalName])

    // 이메일 중복 확인 버튼 활성화
    useEffect(() => {
        if (email.userEmail_domain_auto === type) {
            if (isValidDomain(email.userEmail_domain_write)) {
                setEmailDplBtn(true);
            } else {
                setEmailDplBtn(false);
            }
        } else {
            setEmailDplBtn(true);
        }
    }, [email.userEmail_domain_auto, email.userEmail_domain_write, type, setEmailDplBtn]);

    // 비밀번호 최종 확인
    useEffect(() => {
        if (pwd.length >= 5) {
            setFinalPwd(true);
        } else {
            setFinalPwd(false);
        }
    }, [pwd, setFinalPwd])

    // 비밀번호 재확인 최종 확인
    useEffect(() => {
        if (pwd === pwdChk) {
            if (pwd.length === 0) {
                setFinalPwdChk(false);
            }else {
                setFinalPwdChk(true);
            }
        } else {
            setFinalPwdChk(false);
        }
    }, [pwd, pwdChk, finalPwdChk])

    // 이름 최종 확인
    useEffect(() => {
        if (name.length >= 1) {
            setFinalName(true);
        } else{
            setFinalName(false);
        }
    }, [name, setFinalName])

    // 닉네임 중복 확인 버튼 활성화
    useEffect(() => {
        if (nick.length >= 2) {
            setNickDplBtn(true);
        } else{
            setNickDplBtn(false);
        }
    }, [nick, setNickDplBtn])



    // 회원가입 최종 확인 (이메일 중복확인 및 이메일 인증 + 닉네임 중복확인 남음)
    useEffect(() => {
        if (finalEmail && finalPwd && finalPwdChk && finalName && finalNick) {
            setFinalBtn(true);
        } else {
            setFinalBtn(false);
        }
    }, [setFinalBtn, finalEmail, finalPwd, finalPwdChk, finalName, finalNick])

    return(
        <>
            <Header></Header>
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
                                가&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                                입
                            </div>
                        </div>
                        <div className='register_border_content'>
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
                                        style={{ width: '84px', height: '30px' }}
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
                                        style={{ width: '70px', height: '30px' }}
                                    />
                                    <select
                                        className="box"
                                        id="domain-list"
                                        name="userEmail_domain_auto"
                                        value={email.userEmail_domain_auto}
                                        onChange={handleDomainChange}
                                        style={{ width: '85px', height: '35px' }}
                                    >
                                        <option value="type">직접 입력</option>
                                        <option value="naver.com">naver.com</option>
                                        <option value="google.com">google.com</option>
                                        <option value="hanmail.net">hanmail.net</option>
                                        <option value="nate.com">nate.com</option>
                                        <option value="daum.net">daum.net</option>
                                    </select>
                                    {emailDplBtn ? (
                                        emailDpl ? (
                                            <>
                                                <button onClick={() => emailCertification()} style={{width:"64px", fontSize:"12px", height:"20px", marginTop:"8px", marginLeft:"5px", backgroundColor:"white", border:"2px solid #14776A", color:"#14776A", fontWeight:"bold", borderRadius:"5px", cursor:"pointer"}}>
                                                    인증받기 
                                                </button>
                                            </>
                                        ) : (
                                            <>
                                                <button onClick={() => emailDuplication()} style={{width:"64px", fontSize:"12px", height:"20px", marginTop:"8px", marginLeft:"5px", backgroundColor:"white", border:"2px solid #14776A", color:"#14776A", fontWeight:"bold", borderRadius:"5px", cursor:"pointer"}}>
                                                    중복확인
                                                </button>
                                            </>
                                        )
                                    ) : (
                                        <>  
                                            <button disabled style={{width:"64px", fontSize:"12px", height:"20px", marginTop:"8px", marginLeft:"5px", backgroundColor:"white", border:"2px solid rgba(20, 119, 106, 0.3)", color:"rgba(20, 119, 106, 0.3)", fontWeight:"bold", borderRadius:"5px"}}>
                                                중복확인
                                            </button>
                                        </>
                                    )}
                                </div>
                            </div>
                            {email.userEmail_domain_auto === type ? (
                                isValidDomain(email.userEmail_domain_write) ? (
                                    <>
                                        <div style={{height:"10px"}}></div>
                                    </>
                                ) : (
                                    email.userEmail_domain_write.length >= 1 ? (
                                        <>
                                            <div style={{height:"10px", fontSize:"12px", color:"red"}}>이메일 형식에 맞춰주세요</div>
                                        </>
                                    ) : (
                                        <>
                                            <div style={{height:"10px"}}></div>
                                        </>
                                    )
                                )
                            ) : (
                                <>
                                    <div style={{height:"10px"}}></div>
                                </>
                            )
                            }

                            <div style={{marginTop:"20px"}}>
                                <div style={{fontWeight:"bold"}}>
                                    비밀번호
                                </div>
                                <div style={{display:"flex"}}>
                                    <input onChange={handlePwdChange} maxLength={20} id='pwd' style={{height:"28px", width:"350px"}} placeholder='비밀번호 (5 ~ 20)'></input>
                                </div>
                            </div>
                            {pwd.length >= 5 ? (
                                <>
                                    <div style={{height:"10px"}}></div>
                                </>
                            ) : (
                                pwd.length === 0 ? (
                                    <div style={{height:"10px"}}></div>
                                ) : (
                                    <div style={{height:"10px", fontSize:"12px", color:"red"}}>5글자 이상 입력해주세요</div>
                                )
                            )}

                            <div style={{marginTop:"20px"}}>
                                <div style={{fontWeight:"bold"}}>
                                    비밀번호 재확인
                                </div>
                                <div style={{display:"flex"}}>
                                    {finalPwd ? (
                                        <>
                                            <input onChange={handlePwdChkChange} id='pwdChk' style={{height:"28px", width:"350px"}} placeholder='비밀번호'></input>
                                        </>
                                    ) : (
                                        <>
                                            <input disabled onChange={handlePwdChkChange} id='pwdChk' style={{height:"28px", width:"350px", backgroundColor:"white", border:"1px solid black"}} placeholder='비밀번호'></input>
                                        </>
                                    )}
                                </div>
                            </div>

                            {pwdChk.length > 0 && pwd.length > 0 ? (
                                 pwd === pwdChk ? (
                                    <>
                                        <div style={{height:"10px", fontSize:"12px", color:"blue"}}>비밀번호가 일치합니다</div>
                                    </>
                                ): (
                                    <>
                                        <div style={{height:"10px", fontSize:"12px", color:"red"}}>비밀번호가 일치하지 않습니다</div>
                                    </>
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
                                    닉네임
                                </div>
                                <div style={{display:"flex"}}>
                                    <input onChange={handleNickChange} type='text' maxLength="8" style={{height:"28px", width:"268px"}} placeholder='닉네임 (2~8)'></input>
                                    {nickDplBtn ? (
                                        <>
                                            <button onClick={() => nickDuplication()} style={{width:"64px", fontSize:"12px", height:"20px", marginTop:"6px", marginLeft:"10px", backgroundColor:"white", border:"2px solid rgba(20, 119, 106, 1)", color:"#14776A", fontWeight:"bold", borderRadius:"5px", cursor:"pointer", alignItems:"center"}}>
                                                중복확인
                                            </button>
                                        </>
                                    ) : (
                                        <>
                                            <button disabled style={{width:"64px", fontSize:"12px", height:"20px", marginTop:"6px", marginLeft:"10px", backgroundColor:"white", border:"2px solid rgba(20, 119, 106, 0.3)", color:"rgba(20, 119, 106, 0.3)", fontWeight:"bold", borderRadius:"5px"}}>
                                                중복확인
                                            </button>
                                        </>
                                    )}
                                </div>
                            </div>
                            {nick.length >= 2 ? (
                                <div style={{height:"10px"}}></div>
                            ) : (
                                nick.length === 0 ? (
                                    <div style={{height:"10px"}}></div>
                                ) : (
                                    <div style={{height:"10px", fontSize:"12px", color:"red"}}>2글자 이상 입력해주세요</div>
                                )
                            )}
                            {finalBtn ? (
                                <div style={{marginTop:"30px"}}>
                                    <button style={{width:"350px", height:"40px", backgroundColor:"#14776A", color:"white", borderRadius:"8px", border:"none"}}>가입하기</button>
                                </div>
                            ) : (
                                <div style={{marginTop:"30px"}}>
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