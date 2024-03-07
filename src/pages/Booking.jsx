import BookMovieList from "../components/component/BookMovieList";
import BookMovieTimeList from "../components/component/BookMovieTimeList";
import BreadCrumb from "../components/component/BreadCrumb";
import Footer from "../components/layout/Footer";
import Header from "../components/layout/Header";
import { Navigation, Pagination } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

import Slider from "react-slick";
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'
import { useState } from "react";
import { IconAdmin } from "../components/icon/Icons";
import IconButton from "../components/button/IconButton";

const Booking = () => {

  let [today,setToday] = useState(new Date().getDate())
  const slidePerView = 14
  const slickSettings = {
    // dots : true,
    autoplay : false,
    infinite : false,
    speed : 200,
    slidesToShow : 5,
    slidesToScroll : 1,
    nextArrow :  <NextArrow />,
  }

  function NextArrow(props) {
    const { className, style, onClick} = props
    return (
      <div 
      className={className}
      style={{...style,display:'block'}}
      onClick={onClick}
      />
    )
  }
  return (
    <>
      <Header />
      <BreadCrumb depth1={"예매"} depth2={"빠른예매"}/>
      <div className="component -movie-reservation">
        <div className="wrap">
          <h2 className="title" onClick=''>빠른예매</h2>
          <div className="content">
            <div className="content-top">
            {/* <Swiper
              modules={[Navigation, Pagination]}
              spaceBetween={20} // gap
              slidesPerView={slidePerView} // 몇개보일지
              navigation // 화살표
              // pagination={{ clickable: true }} // 페이지네이션 도트
              // scrollbar={{ draggable: true }} // 스크롤바
              // onSwiper={(swiper) => console.log(swiper)} // 스와이퍼 켜질때 이벤트
              // onSlideChange={() => console.log('slide change')} // 스와이퍼 움직일때 이벤트
            >
              <SwiperSlide>1</SwiperSlide>
              <SwiperSlide>2</SwiperSlide>
              <SwiperSlide>3</SwiperSlide>
              <SwiperSlide>4</SwiperSlide>
              <SwiperSlide>5</SwiperSlide>
              <SwiperSlide>6</SwiperSlide>
              <SwiperSlide>7</SwiperSlide>
              <SwiperSlide>8</SwiperSlide>
              <SwiperSlide>9</SwiperSlide>
              <SwiperSlide>10</SwiperSlide>
              <SwiperSlide>11</SwiperSlide>
              <SwiperSlide>12</SwiperSlide>
              <SwiperSlide>13</SwiperSlide>
              <SwiperSlide>14</SwiperSlide>
              <SwiperSlide>15</SwiperSlide>
              <SwiperSlide>16</SwiperSlide>
              <SwiperSlide>17</SwiperSlide>
              <SwiperSlide>18</SwiperSlide>
            </Swiper> */}
            <Slider {...slickSettings}>
              <div>1·일</div>
              <div>2·일</div>
              <div>3·일</div>
              <div>4·일</div>
              <div>5·일</div>
              <div>6·일</div>
              <div>7·일</div>
              <div>8·일</div>
              <div>9·일</div>
              <div>10·일</div>
            </Slider>
            </div>
          </div>
        </div>
      </div>
      {/* <BookMovieList disabled={false} age={18} movieName={"영화제목"}/>
      <BookMovieTimeList /> */}
      {/* <Footer /> */}
    </>
  )
}

export default Booking;