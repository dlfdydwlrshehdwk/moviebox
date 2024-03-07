import { IconBrunch, IconMoon, IconSun } from "../icon/Icons"

const BookMovieTimeList = ({
  startTime="09:40",
  endTime="12:04",
  movieName="파묘",
  // movieInfo,
  theater="더 부티크 목동현대백화점",
  screen="2D",
  theaterNum="컴포트 101호[Laser]",
  remainSeat="232",
  allSeat="232",
  discount="",
}) => {

  return (
    <>
      <li className="component -book-movie-time-list">
        <button>
          <div className="discount">
            {discount === "sun" && <IconSun style={{width : '14px'}}/>}
            {discount === "moon" && <IconMoon style={{width : '14px'}}/>}
            {discount === "brunch" && <IconBrunch style={{width : '14px'}}/>}
          </div>
          <div className="screen-time">
            <div className="start-time">{startTime}</div>
            <div className="end-time">~{endTime}</div>
          </div>
          <div className="movie">
            <div className="movie-name">{movieName}</div>
            <div className="screen">{screen}</div>
          </div>
          <div className="theater-info">
            <div className="theater">{theater}</div>
            <div className="theater-num">{theaterNum}</div>
            <div className="seat"><span className="remain-seat">{remainSeat}</span> / <span className="all-seat">{allSeat}</span></div>
          </div>
        </button>
      </li>
    </>
  )
}

export default BookMovieTimeList