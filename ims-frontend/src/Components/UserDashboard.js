import React from 'react'
import './userdashboard.css'
import Usercard from './Usercard'

export default function UserDashboard() {
  return (
    <div className='user-dashboard'>
    <div className="items">
        <Usercard
        imgurl="https://iplanet.one/cdn/shop/files/iPhone_15_Pro_Max_Black_Titanium_PDP_Image_Position-1__en-IN_bb56bd9e-a41e-47f0-b1bb-88963f573ac5.jpg?v=1695436352"
        name="iPhone15"
        detail="Next generation mobile phone"
        quantity="50"
        price="120000"
        />
    </div>
    </div>
  )
}
