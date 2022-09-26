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
  const [isEditing, setisEditing] = useState(false)

  useEffect(() => {
   apiCall("/rooms")
   
   .then(response=>{
    setroomData(response);
   })
  }, [addroom])
  
  

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
      <Roomtable roomData={roomData} setAddroom={setAddroom} setisEditing={setisEditing}/>
      
      <div className={addroom ? "popupwindow" : ""}>
      
      {addroom && <RoomPopup setAddroom={setAddroom} setEditingId={setEditingId} setisEditing={setisEditing} isEditing={isEditing} />}

      </div>
      
      </div>

        

    </div>
  )
}

export default Room