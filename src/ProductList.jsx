import React, { useState } from "react";
import "./list.css";
import SmallList from "./SmallList";

function List({ listItems,increaseQty,decreaseQty,totalPrice }){

  return (

    <>
      <div className="right-block">
        <h2>Cart</h2>
        <ul>
          {listItems.map((item, index) => (
            <SmallList 
            key={index}
            item={item} 
            index={index}
            increaseQty = {increaseQty}
            decreaseQty = {decreaseQty}
            />
          ))}
        </ul>
        <p>
          Total: $<span>{totalPrice}</span>
        </p>
      </div>
    </>
  );
}

export default List;
