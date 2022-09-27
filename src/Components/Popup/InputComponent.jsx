import React from 'react'
import './Input.css'


const InputComponent = ({value,text,type,setState}) => {
  return (
    <div className='input_container'>
    

    
     <div className='input-group'>
     <input type={type} className='input' placeholder=" " value={value} onChange={(e)=>{setState(e.target.value)}} required/>
     <label className='placeholder'>{text}</label></div>
     
     
     
     
    </div>
  )
} 

export default InputComponent