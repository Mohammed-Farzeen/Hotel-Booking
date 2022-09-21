import React from 'react';
import Navbar from '../Components/Navbar/Navbar';
import Room from '../Components/Room/Room';
import { Roomdata } from '../Components/Room/Roomdata';
// import RoomPopup from '../Components/Popup/RoomPopup';


const Roompage = () => {
  return (
    <div>
        
        <Navbar/>
        <Room data={Roomdata}/>
        {/* <RoomPopup/> */}



    </div>
  )
}

export default Roompage