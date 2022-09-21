import React from 'react'
import Roomdetails from './Roomdetails'

const Roomtable = ({data}) => {
  return (
    <div>
        <div className='table'>
            <div className='tabletitle'>
            <div className='rmheading' >Room Number</div>
            <div className='rmheading'>Adult Capacity</div>
            <div className='rmheading'>Children Capacity</div>
            <div className='rmheading'>Price</div>
            </div>
            <div  >
                {data.map((data,index)=>{
                    return(
                        <Roomdetails data={data} key={index}/>
                    )
                })} 
            </div>

        </div>
    </div>
  )
}

export default Roomtable