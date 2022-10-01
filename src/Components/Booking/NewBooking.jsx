import React, { useState } from 'react'
import Button from '../Button/Button'
import InputComponent from '../Popup/InputComponent'
import '../Booking/Booking.css'
import { useNavigate } from 'react-router'
import apiCall from '../../Services/apiCall'



const   NewBooking = () => {

  const [NewBookingData, setNewBookingData] = useState({
    guestFirstName:"",
    guestLastName:"",
    checkInDate:"",
    checkOutDate:"",
    numberOfAdults:"",
    numberOfChild:""
    
  });

  const [room, setRoom] = useState(null)
  const [Roomlist, setRoomlist] = useState(false)
  const [Booking, setBooking] = useState(null)

  const{guestFirstName,guestLastName,checkInDate,checkOutDate,numberOfAdults,numberOfChild}=NewBookingData
  
  const onChange=(value,key)=>{
    if(room)return
    setNewBookingData({
      ...NewBookingData,
      [key]:value
    })
  }

    const [GetAvailableroom, setGetAvailableroom] = useState(false)
    const [Booknow, setBooknow] = useState(false)
    const navigate=useNavigate()

    const  getAvailableRoom= async()=>{
      console.log(NewBookingData.checkInDate);
      let room = await getRooms();
      if(room.id){
        setRoom(room);
        setGetAvailableroom(true)
        setRoomlist(true);
      }
    }
    
    const book= async()=>{
      const booking= await addBooking();
      console.log(booking);
      setBooking(booking);
      setBooknow(true);
    }

    
    const formatBooking=()=>{
      return{
        ...NewBookingData,
        checkInDate: new Date(NewBookingData.checkInDate).toISOString(),
        checkOutDate: new Date(NewBookingData.checkOutDate).toISOString(),
      }
    }

    const addBooking = ()=>apiCall("/booking","POST",{...formatBooking(),roomId:room.id,status:"Booked"})
    const getRooms = ()=>apiCall("/get-rooms","POST",formatBooking())
    const updateStatus=(status)=>apiCall("/booking","PUT",{id:Booking.id,status})
    

  return (
    <div className='13'>
      <div className='new-booking-main'>
        <div className='new-booking-text'> 
        <h1>New Booking {guestFirstName+" "+guestLastName}</h1>

        </div>
        {/* <form action='' onSubmit={BookingData}> */}
        <div className='booking-inputs'>
          <InputComponent text='Guest First Name' type='text' value={guestFirstName} setState={(value)=>onChange(value,"guestFirstName")}/>
          <InputComponent text='Guest Last Name' type='text' value={guestLastName} setState={(value)=>onChange(value,"guestLastName")}/>
          <InputComponent text='Check In Date'type='date' value={checkInDate} setState={(value)=>onChange(value,"checkInDate")} />
          <InputComponent text='Check Out Date'type='date' value={checkOutDate} setState={(value)=>onChange(value,"checkOutDate")} />
          <InputComponent text='Number of Adults'type='number' value={numberOfAdults} setState={(value)=>onChange(value,"numberOfAdults")}/>
          <InputComponent text='Number of Children'type='Number' value={numberOfChild} setState={(value)=>onChange(value,"numberOfChild")} />
          
          {Roomlist &&
          <div className='room-list'>
            <div>
              <div className="room-number">Room <div className='room-no'>{room.roomNumber}</div></div>
            </div>
            <div>
              <div className='room-price-line'>at <div className="room-price">{room.price}</div> per night.</div>
            </div>
          </div>
          }


          <div className="buttons">
          <div className='btn1'>
      
            <Button className='booking-button' text='Get Available Rooms' btnclr='orange' color='white' Functionality={getAvailableRoom}/>

            {GetAvailableroom ? 
            <div className='available-btn-fn'>
            
            <div className='btn'>
              <Button  text='Book Room' btnclr='white' color='orange' border='1px solid orange' Functionality={book}/>
            </div>
            <div className='btn'>
              <Button text='Back' btnclr='white' color='orange' Functionality={()=>{navigate(-1)}} />
            </div> 
            </div> : ""}
          </div>
          {Booknow ? 
          <div className='btn2'>
          <div><Button text='Check In' btnclr='white' color='orange' border='1px solid orange' 
          Functionality={()=>{
            updateStatus("Check In")
          }}
          /></div>
          <div><Button text='Check Out' btnclr='white' color='orange' border='1px solid orange'
          Functionality={()=>{
            updateStatus("Check Out")
          }}
          /></div>
          <div><Button text='Cancel' btnclr='white' color='orange' border='1px solid orange'
          Functionality={()=>{
            updateStatus("Cancelled")
          }}
          /></div>
          </div> : ""
          }

          
          
        </div>
        </div>
        {/* </form> */}


      </div>
    </div>
  )
}

export default NewBooking