const Dim = ({
  children,
  onclick = () => {}
}) => {
  return (
    <>
      <div 
      className="ui-dim" 
      onClick={onclick}>{children}</div>
    </>
  )
}

export default Dim