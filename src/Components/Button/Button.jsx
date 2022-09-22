
import React from 'react'

const Button = ({btnclr,color,text,Functionality,btntype,border}) => {
  return (
    <div>
        <button style={{backgroundColor:btnclr, color:color, border:border}} onClick={Functionality} type={btntype} >{text}</button>
    </div>
  )
} 

export default Button