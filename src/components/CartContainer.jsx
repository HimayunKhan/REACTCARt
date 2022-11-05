import React, { useEffect, useState } from "react";
import CartItem from "./CartItem";
import Total from "./Total";

const initData = [
  {
    id: 1,
    title: "noodles",
    price: "40",
    qty: 0
  },
  {
    id: 2,
    title: "biryani",
    price: "100",
    qty: 0
  },
  {
    id: 3,
    title: "maggie",
    price: "50",
    qty: 0
  }
];

function CartContainer() {
  function calculateTotal(products) {
    return products.reduce((acc, c) => acc + c.qty * c.price, 0);
  }

  const [data, setData] = useState(initData);

  function handleChangeqty(id, count) {
    let updatedQty = data.map((item) => {
      if (item.id === id) {
        return { ...item, qty: item.qty + count };
      } else {
        return item;
      }
    });

    setData(updatedQty);
  }

  return (
    <div>
      {/* Heading */}
      <h1>Cart Problem</h1>

      {/* body */}

      {data.map((item) => {
        return (
          <CartItem
            key={item.id}
            id={item.id}
            title={item.title}
            price={item.price}
            qty={item.qty}
            handleChangeqty={handleChangeqty}
          />
        );
      })}

      {/* Total */}
      <Total total={calculateTotal(data)} />
    </div>
  );
}
export default CartContainer;
