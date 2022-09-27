import React, { useState } from 'react'
import './Room.css'
import Roomtable from './Roomtable'; 
import Button from '../Button/Button'; 
import RoomPopup from '../Popup/RoomPopup';
import { useEffect } from 'react';
import apiCall from '../../Services/apiCall';




const Room = ({data}) => {

  const [addroom, setAddroom] = useState(false);
  const [roomData, setroomData] = useState([])
  const [EditingId, setEditingId] = useState(null)
  const [DeleteingId, setDeleteingId] = useState(null)


  useEffect(() => {
   apiCall("/rooms")
   
   .then(response=>{
    setroomData(response);
   })
  }, [addroom,DeleteingId])
  
  const deleteRoom = async()=>{
    const res=await apiCall(`/rooms/${DeleteingId}`,"DELETE");
    setDeleteingId(null)
  }

  function popuproom() {
    console.log(setAddroom);
    setAddroom(true);
    
  }

  return (
    <div className='roommain'>
      <div className='rmtitle'>
      <div className='h1'><h1>Rooms</h1></div>
      <Button text='Add Room' btnclr='orange' color='white' Functionality={popuproom}/></div>
      
      <div className='Rmtble'>
      <Roomtable roomData={roomData} setEditingId={setEditingId} setAddroom={setAddroom} setDeleteingId={setDeleteingId}/>
      
      <div className={addroom || DeleteingId ? "popupwindow" : ""}>
      
      {addroom && <RoomPopup roomData={roomData} EditingId={EditingId} setAddroom={setAddroom} setEditingId={setEditingId} />}

      </div>
      
      </div>

      {DeleteingId &&
      
        <div className="delete-popup">

          <div>Are you sure ? Want to delete</div>
          <div className='delete-button'>
            <Button text='Delete' btnclr='orange' color="white" Functionality={deleteRoom}/>
            <Button text="Cancel" btnclr="white" color='orange' border="1px solid orange" Functionality={()=>{setDeleteingId(null)}} />
          </div>

        </div>
     }

      

        

    </div>
  )
}

export default Room