import React, { useEffect, useState } from 'react';
import Checkbox from '../Components/Check/Checkbox';
import Navbar from '../Components/Navbar/Navbar';
import './Home.css';
import Checkout from '../Components/Check/checkout.svg'
import Checkin from '../Components/Check/checkin.svg'
// import {checkindata} from '../Components/Check/Checkin'
// import {checkoutdata} from '../Components/Check/Checkout'
import apiCall from '../Services/apiCall';

const Homepage = () => {

  

  const [CheckinData, setCheckinData] = useState([])
  const [CheckOutData, setCheckOutData] = useState([])

  useEffect(() => {
    apiCall("/booking/today-check-in")
    .then(response=>{
      setCheckinData(response);
    })
  }, [])
  useEffect(() => {
    apiCall("/booking/today-check-out")
    .then(response=>{
      setCheckOutData(response);
    })
  }, [])
 
  return (
    <div>

    <Navbar/>
    <div className='background'></div>
    <div className='hbox'>
    <Checkbox check={Checkin} data={CheckinData} title='Check In Today' text='Check In' bgclr='#008000' color='#008000'  />
    <Checkbox check={Checkout} data={CheckOutData} title='Check Out Today' text='Check Out' bgclr='#FF0000' color='#FF0000' />
    </div>
    

    </div>
  )
}

export default Homepage


