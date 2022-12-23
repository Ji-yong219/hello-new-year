import React, {useEffect, useState} from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

function CreateAccount() {
  const [appTitle, setAppTitle] = useState('')

  useEffect(() => {
      axios.get('/api/getAppTitle')
      .then(response => setAppTitle(response.data))
      .catch(error => console.log(error))
  }, []);

  const navigate = useNavigate();

  const goToMain = () => {
    navigate('/');
  };
  const goToMailBox = () => {
    // if (idValue.includes('@') && pwValue.length >= 5) {
    //     navigate('/MailBox');
    // } else {
    //   alert('가입된 회원이 아닙니다. 회원가입을 먼저 해주세요.');
    // }
    navigate('/MailBox');
  };

  // 버튼 구현
  let [active, setActive] = useState(false);

  let [idValue, setIdInput] = useState('');
  let [pwValue, setPwInput] = useState('');

  const ActiveIsPassedLogin = () => {
    return idValue.includes('@') && pwValue.length >= 5
      ? setActive(true)
      : setActive(false);
  };

  const handleId = e => {
    setIdInput(e.target.value);
  };
  const handlePw = e => {
    setPwInput(e.target.value);
  };

  return (
    <>
      <section className="login">
        <form action="" method="post" className="loginForm">
          <h1
            className="appTitle"
            onClick={goToMain}>{appTitle}
          </h1>

          <h3>계정 생성</h3>
          
          <div className="idForm">
            <input
              type="text"
              id="id"
              name="id"
              className="input-1"
              placeholder="닉네임"
              onKeyUp={ActiveIsPassedLogin}
              onChange={handleId}
            />
          </div>
          <div className="passForm">
            <input
              type="password"
              id="pw"
              name="pw"
              className="input-1"
              placeholder="비밀번호"
              onKeyUp={ActiveIsPassedLogin}
              onChange={handlePw}
            />
          </div>
          <div className="passChkForm">
            <input
              type="password"
              id="pwchk"
              name="pwchk"
              className="input-1"
              placeholder="비밀번호 확인"
              onKeyUp={ActiveIsPassedLogin}
              onChange={handlePw}
            />
          </div>
          <button
            type="button"
            onClick={goToMailBox}
            name=""
            className={active ? 'activeLoginBtn btn-1' : 'loginBtn btn-1'}
            disabled={idValue === '' || pwValue === '' ? true : false}
          >
            생성
          </button>
        </form>
      </section>
    </>
  );
}

export default CreateAccount;