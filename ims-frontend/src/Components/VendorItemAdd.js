import React from 'react'
import './VendorItemAdd.css'

export default function VendorItemAdd() {
  return (
    <div className='VendorItemAdd-page'>
    <span>Add Item</span>
        <form action="" method="post" className='add-item'>
            <input type="file" name="" id=""/>
            <input type="text" name="name" id="" placeholder='Enter product name'/>
            <input type="text" name="detail" id="" placeholder='Enter product detail'/>
            <input type="text" name="price" id="" placeholder='Enter product price'/>
            <input type="text" name="quantity" id="" placeholder='Enter product quantity'/>
            <button type="submit">Add Item</button>
        </form>
    </div>
  )
}
