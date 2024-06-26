import './Card.css'

function ProductCard({productList, addItem}) {


  return (
    <>
      {
        productList.map((value, indexCard)=> (
            <div className="card-item" key={indexCard}>
              <div className="img">
                <img src={value.image} alt={value.title} />
              </div>
              <div className="prop">
                <h3>{value.title}</h3>
                <p>Price: $<span>{value.price}</span></p>
                <button type="button" value={indexCard} onClick={()=>{addItem(indexCard,value.price)}}>Add to cart</button>
              </div>
            </div>
        ))
      }
    </>
  );
}

export default ProductCard;
