import './App.css';
import ProductCard from './Card.jsx';
import List from './ProductList.jsx';
import { useState } from 'react';

function App() {
  const [productList, setProductList] = useState([
    {
      image: "/Image/Product1-img1.png",
      title: "Sneaker Red",
      price: "70",
    },
    {
      image: "/Image/Product1-img2.png",
      title: "Casual",
      price: "60",
    },
    {
      image: "/Image/Product1-img3.png",
      title: "Part wear",
      price: "80",
    },
    {
      image: "/Image/Product1-img4.png",
      title: "Sneaker Black",
      price: "70",
    },
    {
      image: "/Image/Product1-img5.png",
      title: "Sports",
      price: "100",
    },
    {
      image: "/Image/Product1-img6.png",
      title: "Leather Shoes",
      price: "90",
    }
  ]);

  const [listItems,setListItems] = useState([]);

  const [totalPrice,setTotalPrice] = useState(0);

  function addItem(index,price){
    const newItem = { ...productList[index], qty: 1 };
    setListItems(prevListItems => [...prevListItems, newItem]);
    setTotalPrice(prevTotalPrice => prevTotalPrice + parseInt(price));
  }

  function increaseQty(item, price) {
    const updatedItems = listItems.map(i => {
      if (i === item) {
        return { ...i, qty: i.qty + 1 };
      }
      return i;
    });
    setListItems(updatedItems);
    setTotalPrice(prevTotalPrice => prevTotalPrice + parseInt(price));
  }

  function decreaseQty(item,price) {
    const updatedItems = [...listItems];
    const index = updatedItems.findIndex(i => i === item);
    if (updatedItems[index].qty > 1) {
      updatedItems[index].qty--;
    } else {
      updatedItems.splice(index, 1);
    }

    setListItems(updatedItems);
    setTotalPrice(prevTotalPrice => prevTotalPrice - parseInt(price));
}
  

  return(
    <>
      <header>
        <h1>LOGO</h1>
        <nav>
          <ul>
            <li><a href="#">Home</a></li>
            <li><a href="#">Categories</a></li>
            <li><a href="#">About Us</a></li>
          </ul>
        </nav>
      </header>

      <section>
        <div className="left">
          <div className="card">
            <ProductCard
            productList = {productList}
            addItem = {addItem}/>
          </div>
        </div>
        <div className="right">
          <List 
          listItems = {listItems}
          increaseQty = {increaseQty}
          decreaseQty = {decreaseQty}
          totalPrice = {totalPrice}
          />
        </div>
      </section>
    </>
  );
}

export default App;
