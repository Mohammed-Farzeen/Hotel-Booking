import React from 'react'

const Roomdetails = ({data,setAddroom}) => {
  return (
    <div className='details-full'>
        
        <div className='details-top'>

          <div className='rno'>{data.rno}</div>
          <div>{data.ac}</div>
          <div>{data.cc}</div>
          <div className='price'>{data.price}</div>

        </div>
        <div className='details-edit'>

          <div onClick={()=>{setAddroom(true)}}><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 128 512" height='15px' width='15px'><path d="M64 360c30.9 0 56 25.1 56 56s-25.1 56-56 56s-56-25.1-56-56s25.1-56 56-56zm0-160c30.9 0 56 25.1 56 56s-25.1 56-56 56s-56-25.1-56-56s25.1-56 56-56zM120 96c0 30.9-25.1 56-56 56S8 126.9 8 96S33.1 40 64 40s56 25.1 56 56z"/></svg></div>
        
        </div>
    </div>
  )
}

export default Roomdetails