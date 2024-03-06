import React from 'react'

const IconButton = ({
  children,
  onClick = () => {}
}) => {
  return (
    <button onClick={onClick}>
      {children}
    </button>
  )
}

export default IconButton