import React from 'react'
import CheckComponent from './CheckComponent';
import './Check.css'

const Checkbox = ({check,data,title,text,bgclr,color}) => {
  return (
    <div className='mainbox'>
        <div className='title'>
        <img src={check} alt='' height="25px" width='25px'></img>
        <div >{title}</div>
        </div>
        <div className='scroll'>
        {data.map((data,index)=>{
            return(
                <CheckComponent data={data} key={index} text={text} bgclr={bgclr} color={color}/>
                

            )
        })}
        </div>
    </div>
  )
}

export default Checkbox