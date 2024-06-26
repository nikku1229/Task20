import React, { useState } from "react";
import "./list.css";

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

function SmallList({item,index,increaseQty,decreaseQty}) {
  let [itemQtys, setItemQtys] = useState(1);


  return (
    <li>
      <div className="product-list-img">
        <img src={item.image} alt="" />
      </div>
      <div className="product-detail">
        <h4>{item.title}</h4>
        <p>
          $<span>{item.price}</span>
        </p>
      </div>
      <div className="btns">
        <button className="remove-btn" onClick={() => decreaseQty(index,itemQtys,setItemQtys,item.price)}>
          <ion-icon name="remove-outline"></ion-icon>
        </button>
        <span>{itemQtys}</span>
        <button className="add-btn" onClick={() => increaseQty(itemQtys,setItemQtys,item.price)}>
          <ion-icon name="add-outline"></ion-icon>
        </button>
      </div>
    </li>
  );
}
export default List;
