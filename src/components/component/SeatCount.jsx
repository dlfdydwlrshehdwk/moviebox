const SeatCount = ({
  className,
  style,
  text,
  defaultNumber,
  minusClick,
  plusClick,
}) => {
  return (
    <>
      <div className="component -seat-count">
        <div className="text">{text}</div>
        <div className="count">
          <div className="minus" onClick={minusClick}>-</div>
          <div className="total">{defaultNumber}</div>
          <div className="plus" onClick={plusClick}>+</div>
        </div>
      </div>
    </>
  )
}

export default SeatCount