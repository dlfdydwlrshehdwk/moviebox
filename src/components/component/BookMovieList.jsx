import classNames from "classnames"
import { IconAgeLimit12, IconAgeLimit15, IconAgeLimit18, IconAgeLimitAll, IconAgeLimitNone } from "../icon/Icons"

const BookMovieList = ({
  age,
  movieName,
  disabled,
  active,
  className,
  onClick = () => {},
}) => {
  return (
    <li className={classNames("component -book-movie-list",{className,'-active' : active})}>
      <button disabled={disabled} onClick={onClick}>
        <span>
        {
          age == 12 ?
          <IconAgeLimit12 style={{width : '20px'}}/> :
          age == 15 ? 
          <IconAgeLimit15 style={{width : '20px'}}/> :
          age == 18 ? 
          <IconAgeLimit18 style={{width : '20px'}}/> :
          age == 'none' ? 
          <IconAgeLimitNone style={{width : '20px'}}/> :
          age == 'all' ? 
          <IconAgeLimitAll style={{width : '20px'}}/> :
          null
        }
        </span>
        <span>{movieName}</span>
      </button>
    </li>
  )
}

export default BookMovieList