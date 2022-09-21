import React from 'react';
import Navbar from '../Components/Navbar/Navbar';
import Booking from '../Components/Booking/Booking';
// import NewBooking from '../Components/Booking/NewBooking';
import {BookingData} from '../Components/Booking/BookingData'

const Bookingpage = () => {
  return (
    <div>
        <Navbar/>
        <Booking data={BookingData}/>
        {/* <NewBooking/> */}
    </div>
  )
}

export default Bookingpage