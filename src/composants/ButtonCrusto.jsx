import React from 'react'

function ButtonCrusto ({ color, size, onClick, children })
{
    const buttonStyle = {
      backgroundColor: color,
      fontSize: size,
    }; 
 
  return (
    <button style={buttonStyle} onClick={onClick}>
      {children}
    </button>   
  )
}
export default  ButtonCrusto ;