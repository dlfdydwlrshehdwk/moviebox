import IconButton from "../button/IconButton";
import { IconKaKao, IconNaver, IconPayco, IconWhtClose } from "../icon/Icons";
import InputText from "../input/InputText";

const Login = ({
  handler,
}) => {
  return (
    <>
      <div className="popup -login">
        <div className="popup-header">
          <div>로그인</div>
          {/* 로그아웃 */}
          <IconButton onClick={handler.hideLoginPopup}> 
            <IconWhtClose />
          </IconButton>
        </div>
        <div className="popup-content">
          <div className="content-left w-50">
            <div className="form-set">
              <InputText placeholder={"아이디"}/>
              <InputText type="password" placeholder={"비밀번호"}/>
              <div className="chk-set">
                <input type="checkbox" />
                <label htmlFor="">아이디 저장</label>
              </div>
              <button className="btn -login">로그인</button>
            </div>
            <ul className="link">
              <li>
                <a href="">ID/PW 찾기</a>
              </li>
              <li>
                <a href="">회원가입</a>
              </li>
              <li>
                <a href="">비회원 예매확인</a>
              </li>
            </ul>
            <ul className="social-login">
              <li>
                <IconButton>
                  <IconNaver />
                </IconButton>
              </li>
              <li>
                <IconButton>
                  <IconKaKao />
                </IconButton>
              </li>
              <li>
                <IconButton>
                  <IconPayco />
                </IconButton>
              </li>
            </ul>

          </div>
          <div className="content-right w-50">
            <div className="ad">AD
              <div className="img-set">
                <img src="" alt="" />
              </div>
            </div>
          </div>
        </div>
        <div className="popup-footer"></div>
      </div>
    </>
  )
}

export default Login;