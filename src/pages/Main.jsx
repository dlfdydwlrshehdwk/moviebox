import { useEffect, useState } from "react";
import Footer from "../components/layout/Footer";
import MainPoster from "../components/component/MainPoster";
import { IconBoxOffice, IconMoreGray, IconSchedule, IconSearch, IconTicket } from "../components/icon/Icons";
import IconButton from "../components/button/IconButton";

const Main = () => {

  useEffect(()=>{
    console.log('hi')
  },[]) // 한번만 실행하기위해 []처리

  return (
    <>
    {/* <Header whiteMode={false}/> */}
    <div className="container">
      <div className="section1">
        <div className="content">
          <div className="ui-content -boxoffice pdt60">
            <div className="content-top">
              <div className="title">박스오피스</div>
              <button className="more">더 많은 영화보기 <IconMoreGray style={{width:'16px'}}/></button>
            </div>
            <div className="top4">
              <MainPoster />
              <MainPoster />
              <MainPoster />
              <MainPoster />
            </div>
            <ul className="info-list">
              <li>
                <div className="input-set">
                  <input type="text" placeholder="영화명을 입력해주세요" />
                  <IconButton>
                    <IconSearch />
                  </IconButton>
                </div>
              </li>
              <li>
                <a href="">
                  <IconSchedule style={{width:'36px'}} />상영시간표
                </a>
              </li>
              <li>
              <a href="">
                  <IconBoxOffice style={{width:'26px'}} />박스오피스
                </a>
              </li>
              <li>
              <a href="">
                  <IconTicket style={{width:'29px'}} />빠른예매
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
    </>
  )
}

export default Main;