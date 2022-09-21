import React from 'react'
import './Booking.css'
import InputComponent from '../Popup/InputComponent'
import Button from '../Button/Button'
import BookingTable from './BookingTable'
import { NavLink } from 'react-router-dom'






const Booking = ({data}) => {
  return (
    <div>
    <div className='roommain'>
        <div className='booking-bar'>
            <div><h1>Bookings</h1></div>
            {/* <div className='new-booking'>New Booking</div> */}
            <div><NavLink to ='/newBooking' className="new-booking">New Booking</NavLink></div> 


        </div>
        <div className='booking-searchbar'>
        <InputComponent text='Type Guess Name'/>
        <InputComponent text='Any Status'/>
        <Button  text='Search' btnclr="#ffa500" color="#ffffff"/>

        </div>
        <div className='booking-table'>
        <BookingTable data={data}/>

        </div>
         
    </div>
    
    </div>
    
  )
}

export default Booking