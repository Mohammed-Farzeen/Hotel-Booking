import React from 'react'

const Roomdetails = ({data}) => {
  return (
    <div className='details'>
        <div className='rno'>{data.rno}</div>
        <div>{data.ac}</div>
        <div>{data.cc}</div>
        <div className='price'>{data.price}</div>

    </div>
  )
}

export default Roomdetails