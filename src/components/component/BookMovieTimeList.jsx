const BookMovieTimeList = ({
  startTime,
  endTime,
  movieName,
  movieInfo,
  theater,
  screen,
  theaterNum,
  remainSeat,
  allSeat,
  discount,
}) => {

  return (
    <>
      <li className="component -book-movie-time-list">
        <button>
          <div className="discount">ㅇ</div>
          <div className="screen-time">
            <div>09:40</div>
            <div>~12:04</div>
          </div>
          <div className="movie">
            <div className="movie-name">파묘</div>
            <div className="screen">2D</div>
          </div>
          <div className="theater-info">
            <div className="theater">더 부티크 목동현대백화점</div>
            <div className="theater-num">컴포트 101호[Laser]</div>
            <div className="seat"><span>232</span>/<span>232</span></div>
          </div>
        </button>
      </li>
    </>
  )
}

export default BookMovieTimeList