import React from 'react'

const Roomdetails = ({data,setAddroom,setEditingId,setisEditing}) => {
  return (
    <div className='details-full'>
        
        <div className='details-top'>

          <div className='rno'>{data.roomNumber}</div>
          <div>{data.adultCapacity}</div>
          <div>{data.childCapacity}</div>
          <div className='price'>{data.price}</div>

        </div>
        <div className='details-edit'>

          <div onClick={()=>{
            // setEditingId(data.id);
            setisEditing(true);
            setAddroom(true);
            }} ><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 128 512" height='15px' width='15px'><path d="M64 360c30.9 0 56 25.1 56 56s-25.1 56-56 56s-56-25.1-56-56s25.1-56 56-56zm0-160c30.9 0 56 25.1 56 56s-25.1 56-56 56s-56-25.1-56-56s25.1-56 56-56zM120 96c0 30.9-25.1 56-56 56S8 126.9 8 96S33.1 40 64 40s56 25.1 56 56z"/></svg>
          </div>
          <div>
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" fill="red" height='15px' width='15px' ><path d="M135.2 17.7L128 32H32C14.3 32 0 46.3 0 64S14.3 96 32 96H416c17.7 0 32-14.3 32-32s-14.3-32-32-32H320l-7.2-14.3C307.4 6.8 296.3 0 284.2 0H163.8c-12.1 0-23.2 6.8-28.6 17.7zM416 128H32L53.2 467c1.6 25.3 22.6 45 47.9 45H346.9c25.3 0 46.3-19.7 47.9-45L416 128z"/></svg>
          </div>
        
        </div>
    </div>
  )
}

export default Roomdetails