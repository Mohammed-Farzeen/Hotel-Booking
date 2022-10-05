import React, { useState } from 'react'
import { useNavigate } from 'react-router';
import { updateStatus } from '../../Services/api';
import Button from "../Button/Button"



const Booking_table_box = ({data}) => {

  const [status, setStatus] = useState(data.status)

  const navigate = useNavigate();

  const changeStatus = async(newStatus)=>{
    const res = await updateStatus(data.id,newStatus);
    if(res.status){
      setStatus(newStatus);
    }
  }

  const formatDate = (date)=>{
    return (new Date(date)).toDateString();
  }


  return (
    <div className='data' >
      {/* <div className='table-details'  > */}
        <div onClick={()=>{
              navigate(`/booking/${data.id}`)
            }} >{data.guestFirstName}</div>
        <div >{data.guestLastName}</div>
        <div  >{data.room.roomNumber}</div>
        <div className='check-in-date'>{formatDate(data.checkInDate)}</div>
        <div className='check-out-date'>{formatDate(data.checkOutDate)}</div>
      {/* </div> */}
      {/* <div className='status-div'> */}
        
        {status ==="Booked" && 
          <div className='status'>
            <div >{data.status}</div>
              <div className='status-btn-div'>
                <Button className='status-btn' Functionality={()=>changeStatus("Check In")} text="Check In" btnclr="orange" border="" color="white"  />
                <Button className='status-btn' Functionality={()=>changeStatus("Cancelled")} text="Cancel" btnclr="white" border="1px solid orange" color="orange" />
              </div>
          </div>
        }
        {status === "Check In" &&
          <div className='status'>
            {status}
              <Button className='status-btn' Functionality={()=>changeStatus("Check Out")} text="Check Out" btnclr="orange" border="" color="white"/>
          </div>
        }
        {
          (status === "Check Out" || status === "Cancelled") &&
            <div className='status'>
             {status}
            </div>
         }
      {/* </div> */}

    </div>
  )
}

export default Booking_table_box