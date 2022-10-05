import React from 'react'

import './Check.css'

const CheckComponent = ({data,text,color,bgclr}) => {


  // const formatDate = (date)=>{
  //   return (new Date(date)).toDateString();
  // }

  // const abcd=()=>{
  //   if (data.status=== "Check In") {
  //       navigate(`/booking/${data.id}`)
  //   }
  // }

  return (
    <div>
        
        <div className='box'>
            <div >
                <div className='name'>{data.guestFirstName+" "+data.guestLastName}</div>
               
                {/* {(data.status === "Check In" || data.status==="Booked" || data.status === "Cancelled" ) &&
                <div>{formatDate(data.checkInDate)}</div>
                }
                {(data.status === "Check Out") &&
                <div>{formatDate(data.checkOutDate)}</div>
                } */}

            </div>
            <div>{data.room.roomNumber}</div>
            {/* <Button text={data.status} color={color} btnclr={bgclr} className='checkinbtn'/> */}
            <div style={color={color}}>{data.status}</div>
        </div>

    </div>
  )
}

export default CheckComponent