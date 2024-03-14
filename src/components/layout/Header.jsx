import { useEffect, useState } from 'react'
import IconButton from '../button/IconButton'
import { HeaderLogo, IconAdmin, IconAdminBlk, IconSchedule, IconScheduleBlk, IconSearch, IconSearchBlk, IconSitemap, IconSitemapBlk, MainLogo } from '../icon/Icons'
import classNames from 'classnames'
import Dim from '../dim/Dim'
import Login from '../popup/Login'
const Header = ({
  handler,
  whiteMode
}) => {

  const dimOn = (e) => {
    e.preventDefault();
    console.log(e)
    console.log(handler)
      handler.showLoginPopup()
  }

  useEffect(()=>{
    let a = document.querySelectorAll('.gnb-left .gnb > li')
    let header = document.getElementById('header')
    a.forEach((x)=>{
      x.addEventListener('mouseover',() => {
        header.classList.add('-sub-bg')
      } )
      x.addEventListener('mouseleave',() => {
        header.classList.remove('-sub-bg')
      })
    })
  },[])

  return (
    <>
    <header id="header" className={classNames({'white' : whiteMode})}>
      <div className="wrap">
      <div className="header-left">
        <div className="link-left">
          <ul>
            <li>
              <a href="">VIP LOUNGE</a>
            </li>
            <li>
              <a href="">멤버십</a>
            </li>
            <li>
              <a href="">고객센터</a>
            </li>
          </ul>
        </div>
        <div className="gnb-left">
          <ul className='gnb-icon'>
            <li>
              <IconButton>
                {
                  whiteMode ? <IconSitemapBlk /> : <IconSitemap />
                }
              </IconButton>
            </li>
            <li>
              <IconButton>
                {
                  whiteMode ? <IconSearchBlk /> : <IconSearch />
                }
              </IconButton>
            </li>
          </ul>
          <ul className='gnb'>
            <li>
              <a href="">영화</a>
              <ul className='sub-menu' style={{display:"flex",position:'absolute'}}>
                <li>
                  <a href="">전체영화</a>
                </li>
                <li>
                  <a href="">큐레이션</a>
                </li>
                <li>
                  <a href="">무비포스트</a>
                </li>
              </ul>
            </li>
            <li>
              <a href="">예매</a>
              <ul className='sub-menu' style={{display:"flex",position:'absolute'}}>
                <li>
                  <a href="">빠른예매</a>
                </li>
                <li>
                  <a href="">상영시간표</a>
                </li>
                <li>
                  <a href="">더 부티크 프라이빗 예매</a>
                </li>
              </ul>
            </li>
            <li>
              <a href="">극장</a>
              <ul className='sub-menu' style={{display:"flex",position:'absolute'}}>
                <li>
                  <a href="">전체극장</a>
                </li>
                <li>
                  <a href="">특별관</a>
                </li>
              </ul>
            </li>
          </ul>
        </div>
      </div>
      <h1 className="logo">
        <a href="">
          {
            whiteMode ? <MainLogo /> : <HeaderLogo />
          }
        </a>
      </h1>
      <div className="header-right">
        <div className="link-right">
        <ul className='gnb'>
            <li>
              <a href="" onClick={(e)=>{dimOn(e)}}>로그인</a>
            </li>
            <li>
              <a href="">회원가입</a>
            </li>
            <li>
              <a href="">빠른예매</a>
            </li>
          </ul>
        </div>
        <div className="gnb-right">
          <ul className='gnb'>
            <li>
              <a href="">이벤트</a>
            </li>
            <li>
              <a href="">스토어</a>
            </li>
            <li>
              <a href="">혜택</a>
            </li>
          </ul>
          <ul className='gnb-icon'>
            <li>
              <IconButton>
                {
                  whiteMode ? <IconScheduleBlk /> :  <IconSchedule />
                }
              </IconButton>
            </li>
            <li>
              <IconButton>
                {
                  whiteMode ? <IconAdminBlk /> : <IconAdmin />
                }
              </IconButton>
            </li>
          </ul>
        </div>
      </div>
      </div>
    </header>
    </>
  )
}

export default Header