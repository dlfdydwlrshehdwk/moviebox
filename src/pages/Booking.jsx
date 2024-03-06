import BookMovieList from "../components/component/BookMovieList";
import BookMovieTimeList from "../components/component/BookMovieTimeList";

const Booking = () => {
  return (
    <>
      <BookMovieList disabled={false} age={18} movieName={"영화제목"}/>
      <BookMovieTimeList />
    </>
  )
}

export default Booking;