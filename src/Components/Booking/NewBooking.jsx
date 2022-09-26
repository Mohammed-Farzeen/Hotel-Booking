import React, { useState } from 'react'
import Button from '../Button/Button'
import InputComponent from '../Popup/InputComponent'
// import { NavLink } from 'react-router-dom'
import '../Booking/Booking.css'
import { useNavigate } from 'react-router'



const   NewBooking = () => {

    const [Fname, setFname] = useState('')
    const [Lname, setLname] = useState('')
    const [Checkin, setCheckin] = useState('')
    const [Checkout, setCheckout] = useState('')
    const [Adults, setAdults] = useState('')
    const [Children, setChildren] = useState('')

    const [GetAvailable, setGetAvailable] = useState(false)
    const [Booknow, setBooknow] = useState(false)
    // const [Price, setPrice] = useState(second)
    const navigate=useNavigate()
    


    const BookingData = (e)=>{
      e.preventDefault();
      console.log(Fname,Lname,Checkin,Checkout,Adults,Children);
    }

    function Availablebtn() {
        setGetAvailable(!GetAvailable);
        setBooknow(false)

        console.log(GetAvailable);
         
      
    }

  return (
    <div className='13'>
      <div className='new-booking-main'>
        <div className='new-booking-text'> 
        <h1>New Booking {Fname}</h1>
        {/* <NavLink to ='/booking'  className='cancle'> */}
        {/* <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" height='25px' width='25px'><path d="M175 175C184.4 165.7 199.6 165.7 208.1 175L255.1 222.1L303 175C312.4 165.7 327.6 165.7 336.1 175C346.3 184.4 346.3 199.6 336.1 208.1L289.9 255.1L336.1 303C346.3 312.4 346.3 327.6 336.1 336.1C327.6 346.3 312.4 346.3 303 336.1L255.1 289.9L208.1 336.1C199.6 346.3 184.4 346.3 175 336.1C165.7 327.6 165.7 312.4 175 303L222.1 255.1L175 208.1C165.7 199.6 165.7 184.4 175 175V175zM512 256C512 397.4 397.4 512 256 512C114.6 512 0 397.4 0 256C0 114.6 114.6 0 256 0C397.4 0 512 114.6 512 256zM256 48C141.1 48 48 141.1 48 256C48 370.9 141.1 464 256 464C370.9 464 464 370.9 464 256C464 141.1 370.9 48 256 48z"/></svg></NavLink> */}

        </div>
        <form action='' onSubmit={BookingData}>
        <div className='booking-inputs'>
          <InputComponent text='Guest First Name' type='text' setState={setFname}/>
          <InputComponent text='Guest Last Name' type='text' setState={setLname}/>
          <InputComponent text='Check In Date'type='date'setState={setCheckin} />
          <InputComponent text='Check Out Date'type='date'setState={setCheckout} />
          <InputComponent text='Number of Adults'type='number' setState={setAdults}/>
          <InputComponent text='Number of Children'type='Number' setState={setChildren} />
          <div className="buttons">
          <div className='btn1'>
      
            <Button className='booking-button' text='Get Available Rooms' btnclr='orange' color='white' Functionality={Availablebtn}/>

            {GetAvailable ? 
            <div className='available-btn-fn'>
            
            <div className='btn'>
              <Button  text='Book Room' btnclr='white' color='orange' border='1px solid orange' Functionality={()=>{setBooknow(!Booknow);console.log(Booknow);}}/>
            </div>
            <div className='btn'>
              <Button text='Back' btnclr='white' color='orange' Functionality={()=>{navigate(-1)}} />
            </div> 
            </div> : ""}
          </div>
          {Booknow ? 
          <div className='btn2'>
          <div><Button text='Check In' btnclr='white' color='orange' border='1px solid orange'/></div>
          <div><Button text='Check Out' btnclr='white' color='orange' border='1px solid orange'/></div>
          <div><Button text='Cancel' btnclr='white' color='orange' border='1px solid orange'/></div>
          </div> : ""
          }

          
          
        </div>
        </div>
        </form>


      </div>
    </div>
  )
}

export default NewBooking