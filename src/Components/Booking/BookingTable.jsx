import React from 'react'
import BookingTableBox from './BookingTableBox'

const Booking_table = ({bookingData}) => {
  return (
    <div className='booking-table-main'>
        <div className='booking-table-top'>
        <div>Guest Last Name</div>
        <div>Guest First Name</div>
        <div>Room Number</div>
        <div>Check In Data</div>
        <div>Check Out Data</div>
        <div>Status</div>
        </div>

        <div className='booking-table-data'>

          {bookingData.map((data,index)=>{
             return(
              <BookingTableBox data={data} key={index}/>
              

          )

        })}





        </div>



    </div>
  )
}

export default Booking_table