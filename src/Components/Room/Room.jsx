import React, { useState } from 'react'
import './Room.css'
import Roomtable from './Roomtable'; 
import Button from '../Button/Button'; 
import RoomPopup from '../Popup/RoomPopup';




const Room = ({data}) => {

  const [addroom, setAddroom] = useState(false);

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
      <Roomtable data={data}/>
      
      <div className={addroom ? "popupwindow" : ""}>
      
      {addroom && <RoomPopup setAddroom={setAddroom} />}

      </div>
      
      </div>

        

    </div>
  )
}

export default Room