
import React from 'react'

const Button = ({className,btnclr,color,text,Functionality,btntype,border,disabled=false}) => {
  return (
    <div>
        <button className={`${className} ${disabled && "disabled"}`} style={{backgroundColor:btnclr, color:color, border:border}} onClick={(e)=>!disabled && Functionality(e)} type={btntype} >{text}</button>
    </div>
  )
} 

export default Button