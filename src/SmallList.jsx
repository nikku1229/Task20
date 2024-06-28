import { useState } from "react";
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

  export default SmallList