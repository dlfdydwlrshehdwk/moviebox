import { IconAgeLimit12, IconAgeLimit15, IconAgeLimit18, IconAgeLimitAll, IconAgeLimitNone } from "../icon/Icons"

const BookMovieList = ({
  age,
  movieName,
  disabled
}) => {
  return (
    <li className="component -book-movie-list">
      <button disabled={disabled}>
        {
          age == 12 ?
          <IconAgeLimit12 style={{width : '20px'}}/> :
          age == 15 ? 
          <IconAgeLimit15 style={{width : '20px'}}/> :
          age == 18 ? 
          <IconAgeLimit18 style={{width : '20px'}}/> :
          age == 'none' ? 
          <IconAgeLimitNone style={{width : '20px'}}/> :
          age == 'All' ? 
          <IconAgeLimitAll style={{width : '20px'}}/> :
          null
        }
        {movieName}
      </button>
    </li>
  )
}

export default BookMovieList