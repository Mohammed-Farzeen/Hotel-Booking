import React, { useState } from 'react'
import { useEffect } from 'react'
import apiCall from '../../Services/apiCall'
import Amenities from '../Amenities/Amenities'
import Button from '../Button/Button'
import InputComponent from './InputComponent'
import './Popup.css'



  
// To collect data from input components
const RoomPopup = ({setEditingId,setAddroom,setisEditing,isEditing,data=null}) => {

  

    const [formData, setFormData] = useState({
      roomNumber:"",
      adultCapacity:"",
      childCapacity:"",
      price:"",
    });
    
    useEffect(() => {
      if(data)setFormData({roomNumber: data.roomNumber,
      adultCapacity:data.adultCapacity,
      childCapacity: data.childCapacity,
      price: data.price
    })
    }, [data])

    const{roomNumber,adultCapacity,childCapacity,price}=formData;

    const onChange=(value,key)=>{
      setFormData({
        ...formData,
        [key]:value
      })
    }
    
    const [select, setSelect] = useState([])

    const sendData = (e)=>{
      e.preventDefault();
      console.log(formData);
      
      apiCall("/rooms","POST",formData)
      .then((res)=>console.log(res))
        closeWindow();
      };

      const closeWindow=()=>{
        setAddroom(false)
        setEditingId(null)
      }

    

  return (
    <div className='popup-box'>
    <div className='popup'>
      <div className='popup-title'>
      <div className='h1pop'><h1>Rooms {roomNumber}</h1></div> 
      <div className='cancle' onClick={()=>{
        setAddroom(false);
        setisEditing(false)
        
      }}><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" height='25px' width='25px'><path d="M175 175C184.4 165.7 199.6 165.7 208.1 175L255.1 222.1L303 175C312.4 165.7 327.6 165.7 336.1 175C346.3 184.4 346.3 199.6 336.1 208.1L289.9 255.1L336.1 303C346.3 312.4 346.3 327.6 336.1 336.1C327.6 346.3 312.4 346.3 303 336.1L255.1 289.9L208.1 336.1C199.6 346.3 184.4 346.3 175 336.1C165.7 327.6 165.7 312.4 175 303L222.1 255.1L175 208.1C165.7 199.6 165.7 184.4 175 175V175zM512 256C512 397.4 397.4 512 256 512C114.6 512 0 397.4 0 256C0 114.6 114.6 0 256 0C397.4 0 512 114.6 512 256zM256 48C141.1 48 48 141.1 48 256C48 370.9 141.1 464 256 464C370.9 464 464 370.9 464 256C464 141.1 370.9 48 256 48z"/></svg></div>
      </div>
      <div className='form'>
      <form  action="" onSubmit={sendData} method='POST'> 
      
      <InputComponent text='Room Number' type ="number" value={roomNumber}  setState={(value)=>onChange(value,"roomNumber")} />
      <InputComponent text='Adult Capacity' type ="number" value={adultCapacity}  setState={(value)=>onChange(value,"adultCapacity")} />
      <InputComponent text='Children Capacity' type ="number" value={childCapacity}  setState={(value)=>onChange(value,"childCapacity")} />
      <InputComponent text='Price' type ="number" value={price}  setState={(value)=>onChange(value,"price")} />
      <div className='form-bottom'>
        <Button text='Save' btnclr='#0da2ff' color='white' />
       
      </div>
      </form> 

      {isEditing ? <div>
      
      <div><h2>Amenities</h2></div>

      
      <div>
            <select className='select-option' onChange={(e)=>{
              setSelect([...select,e.target.value])}}>
              <option value="Select">Select</option>
              <option value="TV">TV</option>
              <option value="AC">AC</option>
              <option value="Cofee Maker">Cofee Maker</option>
              <option value="Extra Bed">Extra Bed</option>
              
              <option value="Internet">Internet</option>
            </select>

            <div>
            <div className='select-data'>
              {select.map((data, index) => {
                return (
                  <Amenities select={select} data={data} key={index} index={index} setSelect={setSelect} />
              )})}
            </div>
        
            </div> 
        </div>
        </div> : ""}

      
      </div>
     </div>
    </div>
  )
}

export default RoomPopup