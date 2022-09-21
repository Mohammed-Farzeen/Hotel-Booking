import React from 'react';
import Checkbox from '../Components/Check/Checkbox';
import Navbar from '../Components/Navbar/Navbar';
import './Home.css';
import Checkout from '../Components/Check/checkout.svg'
import Checkin from '../Components/Check/checkin.svg'
import {checkindata} from '../Components/Check/Checkin'
import {checkoutdata} from '../Components/Check/Checkout'

const Homepage = () => {
 
  return (
    <div>

    <Navbar/>
    <div className='background'></div>
    <div className='hbox'>
    <Checkbox check={Checkin} data={checkindata} title='Check In Today' text='Checked In' bgclr='#008000' color='#008000' />
    <Checkbox check={Checkout} data={checkoutdata} title='Check Out Today' text='Checked Out' bgclr='#800000' color='#FF0000' />
    </div>
    

    </div>
  )
}

export default Homepage


