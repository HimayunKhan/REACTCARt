import React from "react";

function Cartlist({title,price}){
  return(
  <div style={{display:"flex",gap:"20px",fontSize:"24px",padding:"1rem"}}>
<span>{title}</span>
<span>{price}</span>

  </div>
  )
}
export default Cartlist;
