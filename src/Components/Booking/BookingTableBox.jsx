import React from 'react'

const Booking_table_box = ({data}) => {
  return (
    <div className='data' >
        <div >{data.guestFirstName}</div>
        <div >{data.guestLastName}</div>
        <div  >{data.room.roomNumber}</div>
        <div className='check-in-date'>{data.checkInDate}</div>
        <div className='check-out-date'>{data.checkOutDate}</div>
        <div >{data.status}</div>
    </div>
  )
}

export default Booking_table_box