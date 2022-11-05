import React from "react";
import Cartlist from "./Cartlist";
import Quantity from "./Quantity";
function CartItem({qty,title,price,id,handleChangeqty}) {
  return (
    <div style={{display:"flex",justifyContent:"center"}}>
      {/* Cartlist */}
      <Cartlist title={title} price={price} />



      {/* Quantity */}
      <Quantity qty={qty} increment={()=>{handleChangeqty(id,1)}}  decrement={()=>{handleChangeqty(id,-1)      }} />
    </div>
  );
}
export default CartItem;
