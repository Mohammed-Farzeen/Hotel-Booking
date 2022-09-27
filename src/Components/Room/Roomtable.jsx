import React from 'react'
import Roomdetails from './Roomdetails'



const Roomtable = ({setEditingId,roomData,setAddroom,setDeleteingId}) => {
    

  return (
    <div>
        <div className='table'>
            {/* <div className='tabletitle'> */}
            <div className='table-head'>

            <div className='table-title'>

                <div className='rmheading' >Room Number</div>
                <div className='rmheading'>Adult Capacity</div>
                <div className='rmheading'>Children Capacity</div>
                <div className='rmheading'>Price</div>
            
            </div>

            <div className='table-edit'>

                <div className='rmheading'>Edit</div>
            
            </div>

            </div>
            {/* </div> */}
            <div  >
                {roomData.map((data,index
                )=>{
                    return(
                        <Roomdetails data={data} id={data.id} key={index} setAddroom={setAddroom} setEditingId={setEditingId} setDeleteingId={setDeleteingId}  />
                    )
                })} 
            </div>

        </div>
    </div>
  )
}

export default Roomtable