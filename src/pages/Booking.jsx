import BookMovieList from "../components/component/BookMovieList";
import BookMovieTimeList from "../components/component/BookMovieTimeList";
import BreadCrumb from "../components/component/BreadCrumb";
import Footer from "../components/layout/Footer";
import Slider from "react-slick";
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'
import { useEffect, useState } from "react";
import classNames from "classnames";
import { IconAgeLimit12, IconBrunch, IconMoon, IconSun } from "../components/icon/Icons";
import data from '../data/data'
import theaterData from '../data/theater'
import seatData from '../data/seat'
import SeatButton from "../components/component/SeatButton";
import SeatCount from "../components/component/SeatCount";
const Booking = ({handler}) => {
  let login = false; // 로그인상태 값
  let [today,setToday] = useState(new Date()) // 오늘날짜
  let [arr,setArr] = useState([]); // 2주치 날짜 담을 배열
  let [hourArr,setHourArr] = useState([]) // 24시간 담을 배열

  let [chooseDate,setChooseDate] = useState(0)
  let [tab,setTab] = useState(0) // 탭 - 컴포넌트로 뺼거
  let [seatPage,setSeatPage] = useState(false) // 좌석고르는화면 불린
  let [ready,setReady] = useState(false) // 영화,극장,시간 다 고르면 true
  let maxMovieLength = 2; // 영화고르는거 개수제한
  let maxTheaterLength = 2; // 극장고르는거 개수제한
  let [totalMovie,setTotalMovie] = useState(0) // 고른 영화수 
  let [totalTheater,setTotalTheater] = useState(0) // 고른 극장수
  let [movieArr,setMovieArr] = useState([])  // 영화 누른거 배열
  let [cityArr,setCityArr] = useState([]) // 도시 누른거 배열
  let [movieName,setMovieName] = useState('') // 영화 누른거 데이터
  let [theaterArr,setTheaterArr] = useState([]) // 극장 누른거 배열
  let [city,setCity] = useState() // 도시 누른거 데이터
  let [theater,setTheater] = useState('') // 극장 누른거 데이터
  let [screenTime,setScreenTime] = useState([]) // 시간 영화리스트 배열
  let [chooseData, setChooseData] = useState()
  let [viewer,setViewer] = useState([0,0,0,0]) // 관람인원 4분류
  let [totalViewer,setTotalViewer] = useState(0) // 관람인원 총합
  let [nowViewer,setNowViewer] = useState(0) // 누른 관람인원 
  let [chooseSeat,setChooseSeat] = useState([]) // 좌석배치도 boolean
  
  const slidePerView = 14 // 최대 14일 전까지 예매가능
  const slickSettings = { // 슬릭 api셋팅
    // dots : true,
    autoplay : false,
    infinite : false,
    speed : 200,
    slidesToShow : 14,
    slidesToScroll : 1,
    afterChange: () => {},
    beforeChange: () => {},
    arrows : false
  }
  const slickSettings2 = { // 슬릭 api셋팅2
    autoplay : false,
    infinite : false,
    draggable : false,
    speed : 200,
    slidesToShow : 10,
    slidesToScroll : 1,
    afterChange: () => {},
    beforeChange: () => {},
    // arrows : false
  }
  
  const eventHandler = {
    ready : () => setReady(true),
    notReady : () => setReady(false)
  }
  const showMovieScreenTime = (movie,theater) => { // 극장 누르면 시간에 영화목록 보여주는 이벤트
    let arr = []
    // 여기서 시간 탭에서 보여줄 영화리스트를 조작해야함.
    // 영화를 고른게 있다면...
    if(movieName !== ''){
      data.forEach(x => {
        if(x.movieName === movie) {
          arr.push(x.screen)
        }
      })
    } else { // 없다면... 배열에 영화 스크린타임 다 넣어버림 하나로 해서
      data.forEach((x,i) => { // 스크린타임 하나로 합치는 작업
        x.screen.forEach(q => {
          arr.push({name : x.movieName,...q})
        })
      })
      // 스크린타임 하나로 합친 배열 시간순으로 정렬
      arr = arr.sort((a,b) => {
        return a.start.replace(':',"") - b.start.replace(':',"")
      })
      // 이렇게 줄여 쓰기 가능
      // arr = arr.sort((a,b) => a.start.replace(':',"") - b.start.replace(':',""))
    }
    setScreenTime(arr)
    setReady(true)
  }
  const chooseMovie = (data,i) => { // 영화선택시
    if(maxMovieLength < totalMovie) { // 고른영화수가 3가지를 넘어갈때 조건처리
      if(movieArr[i] === false){
        alert('최대 3개까지 선택가능합니다.')
        return
      } 
    }
    let copyMovieArr = [...movieArr]
    let copyMovieName = [...movieName]
    if(copyMovieArr[i]) { // 영화 - 리스트가 -active일때
      copyMovieArr[i] = !copyMovieArr[i] // -active 토글
      let newArr = copyMovieName.filter(x => { // 영화 누른애랑 이름같으면 영화배열에서 빼기
        return x != data
      })
      setMovieName(newArr)
    } else { // 영화 - 리스트가 -active상태가 아닐때
      copyMovieArr[i] = !copyMovieArr[i] // -active 토글
      copyMovieName.push(data)
      setMovieName(copyMovieName)
    }
    setMovieArr(copyMovieArr)
    setTotalMovie(copyMovieArr[i] == true ? totalMovie + 1 : totalMovie -1)
  }
  const chooseCity = (i) => { // 도시 선택시
    let arr = []
    for(let i = 0; i < theaterData.length; i++) {
      arr.push(0)
    }
    arr[i] = true
    setCity(i)
    setCityArr(arr)
  }
  const chooseTheater = (i) => { // 극장 선택시
    let copy = [...theaterArr]
    if(copy[city][i] == false) {
      if(totalTheater > maxTheaterLength){
        alert(`극장은 최대 ${maxTheaterLength + 1}개까지 선택이 가능합니다.`);
        return;
      } else {
        copy[city][i] = !copy[city][i]
        setTotalTheater(totalTheater + 1)
      }
    } else {
      copy[city][i] = !copy[city][i]
      setTotalTheater(totalTheater - 1)
    }

    setTheaterArr(copy)
    let theater = theaterData[city].theater[i] // theater 명 출력 // type:string
    let movie = movieName
    showMovieScreenTime(movie,theater)
  }
  const goSelectSeat = (data) => { // 시간 - 리스트누르면 좌석고르는곳으로 가기 이벤트
    console.log('afaf',data)
    setSeatPage(true)
  }
  const plusViewer = (index) => { // 좌석예매 + 버튼 누르면
    if(totalViewer < 8){
      let copy = [...viewer]
      copy[index] = copy[index] + 1
      setViewer(copy)
    } else {
      return;
    }
  }
  const minusViewer = (index) => { // 좌석예매 - 버튼 누르면
    // 조건. -될때 0밑으로는 내려가면안됨
    // 조건. 선택된 좌석이 있을때 선택된 좌석보다 totalViewer가 적어지면안됨
    // => 팝업으로 초기화할건지를 띄움
    if(totalViewer <= 0) {
      return 
    } else if(nowViewer >= totalViewer) {
      // 여기에 초기화 팝업등장 코드 or 안내팝업창
      alert('선택한 좌석이 예매 인원 보다 많습니다.') // 일단 팝업창 처리
    } else {
      let copy = [...viewer];
      if(copy[index] <= 0) return
      else {
        copy[index] = copy[index] - 1
        setViewer(copy)
      }
    }
  }
  const sumViewer = () => { // viewer 값을 다 합쳐서 totalviewer 값으로 변경
    let value=0;
    viewer.forEach((x,i)=>{
      value+=x
    })
    setTotalViewer(value)
  }
  const resetSeat = () => { // 관람인원 + 좌석 초기화 
    let arr1 = []
    for(let i = 0; i < seatData.data.length; i++){
      let arr2 = []
      for(let x = 0; x < seatData.data[i].length; x++) {
        arr2.push(false)
      }
      arr1.push(arr2)
    }
    setViewer([0,0,0,0])
    setChooseSeat(arr1)
  }
  const choiceSeat = (i,ii) => { // 좌석선택 이벤트
    // let chooseSeat[i][ii]) // 현재 좌석 상태 boolean
    if(chooseSeat[i][ii]) { // 좌석이 현재 true일시
      // 회색 -> 보라색 , 보라색 -> 회색 토글 기능
      let copy = [...chooseSeat]
      copy[i][ii] = !copy[i][ii]
      copy[i][ii] === true ? setNowViewer(nowViewer + 1) : setNowViewer(nowViewer -1)
      setChooseSeat(copy);
    } else { // 좌석이 현재 false일시
      if(nowViewer >= totalViewer) return; 
      else {
        // 회색 -> 보라색 , 보라색 -> 회색 토글 기능
        let copy = [...chooseSeat]
        copy[i][ii] = !copy[i][ii]
        copy[i][ii] === true ? setNowViewer(nowViewer + 1) : setNowViewer(nowViewer -1)
        setChooseSeat(copy);
      }
    }
    }
  
  useEffect(()=>{ // viewer건들때마다 totalViewer 값 변경
    sumViewer()
  },[viewer])
  useEffect(() => { // 2주치 날짜뽑아오기
    let blank = [];
    for(let i = 0; i < slidePerView; i++) {
      let today = new Date()
      let tommorow = new Date(today.setDate(today.getDate() + i))
      let data = {
        day : tommorow.getDay() == 0 ? '일' : tommorow.getDay() == 1 ? '월' : tommorow.getDay() == 2 ? '화' : tommorow.getDay() == 3 ? '수' : tommorow.getDay() == 4 ? '목' : tommorow.getDay() == 5 ? '금' : '토', 
        month : tommorow.getMonth() + 1,
        date :  tommorow.getDate(),
        year : tommorow.getFullYear()
      }
      blank.push(data)
    }
    setArr(blank)

    let blank2 = [];
    for(let i = 1; i <= 24; i++) {
      blank2.push(i)
    }
    setHourArr(blank2)
  }, []) // 시작시 한번만
  useEffect(()=>{ // 좌석배열 만들기
    let arr1 = []
    for(let i = 0; i < seatData.data.length; i++){
      let arr2 = []
      for(let x = 0; x < seatData.data[i].length; x++) {
        arr2.push(false)
      }
      arr1.push(arr2)
    }
    setChooseSeat(arr1)



  },[])
  useEffect(()=>{ // 도시 - 배열만들기
    let arr = [];
    for(let i = 0; i < theaterData.length; i++) {
      arr.push(false)
    }
    setCityArr(arr)    
  },[])
  useEffect(()=>{ // 극장 - 배열만들기
    let arr = [];
    for(let i = 0; i < theaterData.length; i++) {
      arr.push(theaterData[i].theater.map(()=>{return false}))
    }
    setTheaterArr(arr)  
  },[])
  useEffect(()=>{ // 영화 클릭 boolean값 담을 배열만들기
    let movieNameArr = []
    for(let i = 0; i < data.length; i++) {
      movieNameArr.push(false)
    }
    setMovieArr(movieNameArr)
  },[])
  useEffect(()=>{ // test
    // console.log(screenTime)
  },[screenTime])
  return (
    <>
      {/* <Header whiteMode /> */}
      <BreadCrumb depth1={"예매"} depth2={"빠른예매"}/>
        <div className="component -movie-reservation">
          <div className="wrap">
            <h2 className="title">빠른예매</h2>
            {
              seatPage ? 
              <>
              <div className="content -seat" style={{display:'flex'}}>
                <div>
                  <div className="content-top">
                    <div className="sub-title">관람인원선택</div>
                    <button className="btn -reset" onClick={resetSeat}>초기화</button>
                  </div>
                  <div className="content-main">
                    <div className="seat-count">
                      <SeatCount plusClick={()=>plusViewer(0)} minusClick={()=>minusViewer(0)} defaultNumber={viewer[0]} text={'성인'} />
                      <SeatCount plusClick={()=>plusViewer(1)} minusClick={()=>minusViewer(1)} defaultNumber={viewer[1]} text={'청소년'} />
                      <SeatCount plusClick={()=>plusViewer(2)} minusClick={()=>minusViewer(2)} defaultNumber={viewer[2]} text={'경로'} />
                      <SeatCount plusClick={()=>plusViewer(3)} minusClick={()=>minusViewer(3)} defaultNumber={viewer[3]} text={'우대'} />
                    </div>
                    <div className="component -seat-wrap">
                      <div>screen</div>
                      <div>
                        {
                          seatData.data.map((row,i)=>{
                            return (
                              <div className="row" key={i}>
                              {
                                row.map((status,ii)=>{
                                    return (
                                      <SeatButton
                                      onClick={()=>{choiceSeat(i,ii)}}
                                      choice={chooseSeat[i][ii]}
                                      // seat={`${i + 1}열${ii + 1}번`} 
                                      seat={`${i}/${ii}`} 
                                      text={ii + 1} 
                                      status={status} key={ii} 
                                      />
                                    )
                                })
                              }
                              </div>
                            )
                          })
                        }
                      </div>
                    </div>
                  </div>
                </div>

                <div className="component -booking-info">
                  <div className="wrap">
                    <div className="movie-name">
                      <IconAgeLimit12 style={{width : '20px',height:'20px'}}/>
                      <div>
                        <div className="name">듄:파트2</div>
                        <div className="type">2D(자막)</div>
                      </div>
                    </div>
                    <div className="movie-info">
                      <div className="info-left">
                        <div className="theater">
                        </div>
                        <div className="screen-time">
                        </div>
                      </div>
                      <div className="poster">
                      </div>
                    </div>
                    <div className="seat">
                      <div className="seat-left">
                        <div>
                          <div>네모박스</div>
                          <div>선택</div>
                        </div>
                        <div>
                          <div>엑스박스</div>
                          <div>예매완료</div>
                        </div>
                        <div>
                          <div>회색박스</div>
                          <div>선택불가</div>
                        </div>
                        <div>
                          <div>검정박스</div>
                          <div>일반</div>
                        </div>
                        <div>
                          <div>초록박스</div>
                          <div>장애인석</div>
                        </div>
                      </div>
                      <div className="seat-right">
                        <div className="text">선택좌석</div>
                        <div className="component -choose-seat"></div>
                        <div className="component -choose-seat"></div>
                        <div className="component -choose-seat"></div>
                        <div className="component -choose-seat"></div>
                        <div className="component -choose-seat"></div>
                        <div className="component -choose-seat"></div>
                        <div className="component -choose-seat"></div>
                        <div className="component -choose-seat"></div>
                      </div>
                    </div>
                    <div className="price-info">
                        <div className="txt">최종결제금액</div>
                        <div className="price"><span>0</span> 원</div>
                    </div>
                  </div>
                  <div className="component -btn-tab">
                    <button className="btn -prev">이전</button>
                    <button className="btn -next">다음</button>
                  </div>
                </div>
              </div>
              </>
              :
              <div className="content -movie">
                <div className="content-top">
                <Slider {...slickSettings}>
                  {
                    arr.map((x,i)=>{
                      return (
                        <div className={
                          classNames('date',{
                            '-saturday' : x.day == '토',
                            '-sunday' : x.day == '일',
                            // '-disabled' : disabled,
                            '-active' : i == chooseDate
                          })} 
                          onClick={()=>{setChooseDate(i)}}
                          key={i}>
                            <span>{x.date}</span>·<span>{i == 0 ? "오늘" : i == 1 ? '내일' : x.day}</span>
                          </div>
                      )
                    })
                  }
                </Slider>
                </div>
                <div className="content-main">
                  <div className="movie-info">
                    <div className="wrap">
                      <div className="sub-title">영화</div>
                      <div className="component -tabs mt8">
                        <div className={classNames("tab",{'-active' : tab === 0})} onClick={()=>setTab(0)}>전체</div>
                        <div className={classNames("tab",{'-active' : tab === 1})} onClick={()=>setTab(1)}>큐레이션</div>
                      </div>
                      <div className="movie-list mt16">
                        {
                          data.map((data,i)=>{
                            return (
                              <BookMovieList key={i} 
                              onClick={()=>chooseMovie(data.movieName,i)} 
                              disabled={false} 
                              age={data.age} 
                              movieName={data.movieName}
                              active={movieArr[i]}/>
                              )
                          })
                        }
                      </div>
                      <div className="choose-movie mt16">
                        <div className="no-choose">
                          모든영화<br/>
                          목록에서 영화를 선택하세요.
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="theater-info">
                    <div className="wrap">
                      <div className="sub-title">극장</div>
                      <div className="component -tabs mt8">
                        <div className={classNames("tab",{'-active' : tab === 0})} onClick={()=>setTab(0)}>전체</div>
                        <div className={classNames("tab",{'-active' : tab === 1})} onClick={()=>setTab(1)}>특별관</div>
                      </div>
                      <div className="theater-list mt16">
                        <ul className="city">
                          {
                            theaterData.map((x,i) => {
                              return (
                                <li key={i} className={classNames({'-active' : cityArr[i]})}>
                                  <button onClick={()=>{chooseCity(i)}}>{x.city}</button>
                                </li>
                              )
                            })
                          }
                        </ul>
                        <ul className="place">
                          {
                            typeof city == 'number' &&
                            theaterData[city].theater.map((x,i)=>{
                              return (
                                <li className={classNames({'-active':theaterArr[city][i]})} key={i}>
                                  <button onClick={()=>{chooseTheater(i)}}>{x}</button>
                                </li>
                              )
                            })
                          }
                        </ul>
                      </div>
                      <div className="choose-theater mt16">
                        <div className="no-choose">
                          전체극장<br/>
                          목록에서 극장을 선택하세요
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="movie-time">
                    <div className="wrap">
                      <div className="content-top">
                        <div className="sub-title">시간</div>
                        <div className="discount">
                          <div>
                            <IconSun style={{width : '12px'}}/>
                            <span>조조</span>
                          </div>
                          <div>
                            <IconBrunch style={{width : '12px'}}/>
                            <span>브런치</span>
                          </div>
                          <div>
                            <IconMoon style={{width : '12px'}}/>
                            <span>심야</span>
                          </div>
                        </div>
                      </div>
                      <div className="choose-time mt8">
                      <Slider {...slickSettings2}>
                      {
                        hourArr.map((x,i)=>{
                          return (
                            <div key={i}>{x}</div>
                          )
                        })
                      }
                      </Slider>
                      </div>
                      <ul className="movie-list mt8">
                        {
                          screenTime.map((x,i) => {
                            return (
                              <BookMovieTimeList key={i} 
                              movieName={x.name}
                              startTime={x.start}
                              endTime={x.end}
                              remainSeat={x.nowSeat}
                              allSeat={x.allSeat}
                              screen={x.option}
                              theater={x.theater}
                              theaterNum={x.hall}
                              onClick={() => goSelectSeat(x)}
                              />
                            )
                          })
                        }
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            }
          </div>
        </div>
      <Footer />
    </>
  )
}

export default Booking;