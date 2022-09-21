
import React from 'react'

const Button = ({btnclr,color,text,Functionality,btntype}) => {
  return (
    <div>
        <button   style={{backgroundColor:btnclr, color:color}} onClick={Functionality} type={btntype} >{text}</button>
    </div>
  )
} 

export default Button