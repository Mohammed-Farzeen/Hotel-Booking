import React, { useState } from 'react'
// import AmenitiesContent from '../Amenities/AmenitiesContent'
import Button from '../Button/Button'
import InputComponent from './InputComponent'
import './Popup.css'
// import { NavLink } from 'react-router-dom'
// import AmenitiesData from '../Amenities/AmenitiesData'


// To collect data from input components
const RoomPopup = ({setAddroom}) => {

    // const [Amenities, setAmenities] = useState(false)
    const [Roomnumber, setRoomnumber] = useState('')
    const [AdultCapacity, setAdultCapacity] = useState('')
    const [ChildCapacity, setChildCapacity] = useState('')
    const [Price, setPrice] = useState('')
    // console.log(Amenities);

    const sendData = (e)=>{
      e.preventDefault();
      console.log(Roomnumber,AdultCapacity,ChildCapacity,Price);

    }

  return (
    <div className='popup-box'>
    <div className='popup'>
      <div className='popup-title'>
      <div className='h1pop'><h1>Rooms {Roomnumber}</h1></div> 
      <div className='cancle' onClick={()=>{setAddroom(false)}}><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" height='25px' width='25px'><path d="M175 175C184.4 165.7 199.6 165.7 208.1 175L255.1 222.1L303 175C312.4 165.7 327.6 165.7 336.1 175C346.3 184.4 346.3 199.6 336.1 208.1L289.9 255.1L336.1 303C346.3 312.4 346.3 327.6 336.1 336.1C327.6 346.3 312.4 346.3 303 336.1L255.1 289.9L208.1 336.1C199.6 346.3 184.4 346.3 175 336.1C165.7 327.6 165.7 312.4 175 303L222.1 255.1L175 208.1C165.7 199.6 165.7 184.4 175 175V175zM512 256C512 397.4 397.4 512 256 512C114.6 512 0 397.4 0 256C0 114.6 114.6 0 256 0C397.4 0 512 114.6 512 256zM256 48C141.1 48 48 141.1 48 256C48 370.9 141.1 464 256 464C370.9 464 464 370.9 464 256C464 141.1 370.9 48 256 48z"/></svg></div>
      </div>
      <div className='form'>
      <form  action="" onSubmit={sendData} method='POST'> 
      
      <InputComponent text='Room Number' type ="number" setState={setRoomnumber} />
      <InputComponent text='Adult Capacity' type ="number" setState={setAdultCapacity} />
      <InputComponent text='Children Capacity' type ="number" setState={setChildCapacity} />
      <InputComponent text='Price' type ="number" setState={setPrice} />
      <div className='form-bottom'>
      <Button text='Save' btnclr='#0da2ff' color='white' />
      {/* <div> Or </div> */}
      </div>
      </form> 
      <div>
      <div>
        <h2>Amenities</h2>
      </div>
      {/* <div className='amenities-map'>
      {Amenities.map((Amenities,index)=>{
        return(
        <AmenitiesContent Amenities={Amenities} key={index}/>
      )})}


      </div> */}
      {/* <div className='amenities-add' onClick={()=>{setAmenities(true)}}>Add Amenities</div>  */}
      <div className='amenities-bottom'>
        {/* <InputComponent text='Add Amenities'/><Button text='Add' btnclr='rgb(13, 162, 255)' color='white'  /> */}
      </div>
      </div>
      
      </div>
      
     
    </div>

    </div>
  )
}

export default RoomPopup