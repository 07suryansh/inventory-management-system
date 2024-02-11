import React from 'react'


const userCardStyle ={
    display:'flex',
    flexDirection:'column',
    justifyContent:'center',
    alignItems:'flex-start',
    width:'100%',
    height:'100%',
    padding:'10px',
    borderRadius:'10px',
    border:'2px solid #D4E7C5',
}

export default function Usercard(props) {
  return (
    <div className='user-card' style={userCardStyle}>
        <img src={props.imgurl} alt="" style={{width:"300px"}}/>
        <span className="item-name">{props.name}</span>
        <span className="item detail">{props.detail}</span>
        <span className="item-quantity">{props.quantity} Piece left</span>
        <span className="item-price">Price: ₹ {props.price}</span>
        <button style={{backgroundColor:"#872341",color:"white",padding:"6px 10px",border:"none",borderRadius:"50px",width:"100px",cursor:"pointer"}}>Buy</button>
    </div>
  )
}
