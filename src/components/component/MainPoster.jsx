import { IconHeartToggle } from "../icon/Icons"
import poster1 from '../../assets/images/poster/1mWswToaptfGBNRRAiSSleat3ajWwnd4_420.jpg'

const MainPoster = ({
  imgSrc = poster1,
  like="2.9k",
  rank = "숫자",
  rating="점수",
  story = "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
  onClick = () => {}
}) => {

  return (
    <>
      <div className="component -main-poster">
        <div className="poster-set">
          <div className="rank">{rank}</div>
          <img src={imgSrc} alt="포스터이미지" />
          <div className="dim">
            <div className="summary">{story}</div>
            <div className="rating">관람평<span>{rating}</span></div>
          </div>
        </div>
        <div className="btn-set">
          <button className="btn -like"><IconHeartToggle like=""/>{like}</button>
          <button className="btn -reservation">예매</button>
        </div>
      </div>
    </>
  )
}

export default MainPoster