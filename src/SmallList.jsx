import React from "react";
function SmallList({item,increaseQty,decreaseQty}) {
  const handleIncrease = () => {
    increaseQty(item,item.price);
  };

  const handleDecrease = () => {
    decreaseQty(item, item.price);
  };
  
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
          <button className="remove-btn" onClick={handleDecrease}>
            <ion-icon name="remove-outline"></ion-icon>
          </button>
          <span>{item.qty}</span>
          <button className="add-btn" onClick={handleIncrease}>
            <ion-icon name="add-outline"></ion-icon>
          </button>
        </div>
      </li>
    );
  }

  export default SmallList;
