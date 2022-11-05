import React from "react";

function Quantity({qty,increment,decrement}) {
  return (
    <div style={{display:"flex",gap:"10px"}}>
      <button style={{backgroundColor:"tomato",borderWidth:"0",fontSize:"48px"}}
      
      onClick={decrement}
      
    disabled={qty===0}>-</button>
      <h2>{qty}</h2>
      <button style={{backgroundColor:"tomato",borderWidth:"0",fontSize:"48px"}}
      
      onClick={increment}>+</button>
    </div>
  );
}
export default Quantity;
