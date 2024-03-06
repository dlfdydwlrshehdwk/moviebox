import IconButton from "../button/IconButton"
import { FooterLogo, IconFacebookGray, IconInstagramGray, IconSearch, IconTwitterGray, IconYoutubeGray } from "../icon/Icons"

const Footer = () => {
  return (
    <>
      <footer id="footer">
        <div className="wrap">
          <div className="footer-top">
            <ul className="fnb">
              <li>
                <a href="">회사소개</a>
              </li>
              <li>
                <a href="">인재채용</a>
              </li>
              <li>
                <a href="">사회공헌</a>
              </li>
              <li>
                <a href="">제휴/광고/부대사업문의</a>
              </li>
              <li>
                <a href="">이용약관</a>
              </li>
              <li>
                <a href="">위치기반서비스 이용약관</a>
              </li>
              <li>
                <a href="">개인정보처리방침</a>
              </li>
              <li>
                <a href="">윤리경영</a>
              </li>
            </ul>
            <button>
              <IconSearch style={{width:'16px',height:'16px'}}/>
              극장찾기
            </button>
          </div>
          <div className="footer-bottom">
            <div className="footer-logo">
              <FooterLogo />
            </div>
            <div className="footer-info">
              <p>서울특별시 성동구 왕십리로 50, 6층 (성수동1가, 메가박스 스퀘어) ARS 1544-0070 대표이메일 m.dreamcenter@partner.megabox.co.kr</p>
              <p>대표자명 홍정인 · 개인정보보호책임자 강병철 · 사업자등록번호 211-86-59478 · 통신판매업신고번호 2023-서울성동-0177</p>
              <p>COPYRIGHT © MegaboxJoongAng, Inc. All rights reserved</p>
            </div>
            <div className="footer-sns">
              <IconButton><IconYoutubeGray /></IconButton>
              <IconButton><IconInstagramGray /></IconButton>
              <IconButton><IconFacebookGray /></IconButton>
              <IconButton><IconTwitterGray /></IconButton>
            </div>
          </div>
        </div>
      </footer>
    </>
  )
}

export default Footer