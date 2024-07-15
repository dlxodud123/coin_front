import './../css/register_form.css';
import Header from '../../common/js/header';
import { useEffect, useState } from 'react';

const Register_form = () => {

    const [phoneNumber, setPhoneNumber] = useState({
        userPhone_1: '',
        userPhone_2: '',
        userPhone_3: ''
    });

    
    const handleChangPhone = (event) => {
        const { name, value } = event.target;
        // 숫자만 입력되도록 필터링
        if (/^\d*$/.test(value)) {
            setPhoneNumber({
                ...phoneNumber,
                [name]: value
            });
        }
    };

    const [email, setEmail] = useState({
        userEmail_id: '',
        userEmail_domain_write: '',
        userEmail_domain_auto: 'type',
    });

    const handleChangeEmail = (event) => {
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
    
    useEffect(() => {
        console.log(phoneNumber.userPhone_1);
        console.log(phoneNumber.userPhone_2);
        console.log(phoneNumber.userPhone_3);
        console.log(email.userEmail_id);
        console.log(email.userEmail_domain_write);
        console.log(email.userEmail_domain_auto);
    }, [phoneNumber, email])

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
                                가&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;입
                            </div>
                        </div>
                        <div className='register_border_content'>
                            <div>
                                <div style={{fontWeight:"bold"}}>
                                    아이디
                                </div>
                                <div style={{display:"flex"}}>
                                    <input id='id' style={{height:"28px", width:"268px"}} placeholder='5~20자 입력'></input>
                                    <button style={{width:"64px", fontSize:"12px", height:"20px", marginTop:"7px", marginLeft:"10px", backgroundColor:"white", border:"2px solid #14776A", color:"#14776A", fontWeight:"bold", borderRadius:"5px"}}>중복확인</button>
                                </div>
                            </div>

                            <div style={{height:"10px", fontSize:"12px", color:"red"}}>adsf</div>

                            <div style={{marginTop:"20px"}}>
                                <div style={{fontWeight:"bold"}}>
                                    비밀번호
                                </div>
                                <div style={{display:"flex"}}>
                                    <input id='pwd' style={{height:"28px", width:"350px"}} placeholder='비밀번호'></input>
                                </div>
                            </div>
                            <div style={{marginTop:"30px"}}>
                                <div style={{fontWeight:"bold"}}>
                                    비밀번호 재확인
                                </div>
                                <div style={{display:"flex"}}>
                                    <input id='pwdChk' style={{height:"28px", width:"350px"}} placeholder='비밀번호'></input>
                                </div>
                            </div>

                            <div style={{height:"10px", fontSize:"12px", color:"red"}}>adsf</div>

                            <div style={{marginTop:"20px"}}>
                                <div style={{fontWeight:"bold"}}>
                                    이름
                                </div>
                                <div style={{display:"flex"}}>
                                    <input id='name' style={{height:"28px", width:"350px"}} placeholder='이름'></input>
                                </div>
                            </div>
                            <div style={{marginTop:"30px"}}>
                                <div style={{fontWeight:"bold"}}>
                                    휴대전화
                                </div>
                                <div style={{display:"flex"}}>
                                    <input name="userPhone_1" type="text" value={phoneNumber.userPhone_1} onChange={handleChangPhone} maxlength="3" style={{width: "100px", height: "28px"}} />
                                    <div style={{width:"15px", textAlign:"center", marginTop:"3px"}}>-</div>
                                    <input name="userPhone_2" type="text" value={phoneNumber.userPhone_2} onChange={handleChangPhone} maxlength="4" style={{width: "100px", height: "28px"}} />
                                    <div style={{width:"15px", textAlign:"center", marginTop:"3px"}}>-</div>
                                    <input name="userPhone_3" type="text" value={phoneNumber.userPhone_3} onChange={handleChangPhone} maxlength="4" style={{width: "100px", height: "28px"}} />
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
                                        onChange={handleChangeEmail}
                                        style={{ width: '85px', height: '35px' }}
                                    />
                                    <div style={{marginTop:"7px", marginLeft:"5px", marginRight:"5px"}}>@</div>
                                    <input
                                        className="box"
                                        id="domain-txt"
                                        name="userEmail_domain_write"
                                        type="text"
                                        value={email.userEmail_domain_write}
                                        onChange={handleChangeEmail}
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
                                    <input id='id' style={{height:"28px", width:"268px"}} placeholder='2~8자 입력'></input>
                                    <button style={{width:"64px", fontSize:"12px", height:"20px", marginTop:"6px", marginLeft:"10px", backgroundColor:"white", border:"2px solid #14776A", color:"#14776A", fontWeight:"bold", borderRadius:"5px"}}>중복확인</button>
                                </div>
                            </div>
                            <div style={{marginTop:"40px"}}>
                                <button style={{width:"350px", height:"40px", backgroundColor:"#14776A", color:"white", borderRadius:"8px", border:"1px solid black"}}>가입하기</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Register_form;