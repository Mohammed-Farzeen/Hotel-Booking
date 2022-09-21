import React from 'react'

const Booking_table_box = ({data}) => {
  return (
    <div className='data' >
        <div >{data.GuestLastName}</div>
        <div >{data.GuestFirstName}</div>
        <div  >{data.RoomNumber}</div>
        <div className='check-in-date'>{data.CheckInData}</div>
        <div className='check-out-date'>{data.CheckOutData}</div>
        <div >{data.Status}</div>
    </div>
  )
}

export default Booking_table_box