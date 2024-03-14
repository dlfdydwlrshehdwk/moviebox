import classNames from "classnames"
import PropTypes from "prop-types"
import React from "react"

const SeatButton = ({
  status,
  text,
  choice,
  seat,
  onClick = () => {}
}) => {

  const event = (e) => { //test
    // console.log(e.target.getAttribute('data-seat'));
    onClick && onClick()
  }

  return (
    <>
    <button 
    className={
      classNames(
        'component -seat-button',
        {'-space' : !status},
        {'-common' : status === 1},
        {'-disable' : status === 2},
        {'-impossible' : status === 3},
        {'-finish' : status === 4},
        {'-choice' : choice == true},
        )}
        onClick={e=>event(e)}
        data-seat={seat}
        disabled={status === 4 | status === 3 ? true : false}
        >{status == 1 | status == 2  ? text : ''}</button>
    </>
  )
}

SeatButton.propTypes = {
  status : PropTypes.oneOf([0,1,2,3,4]),
  number : PropTypes.oneOfType([PropTypes.string,PropTypes.number]),
  disabled : PropTypes.bool,
  choice : PropTypes.bool,
}

export default SeatButton