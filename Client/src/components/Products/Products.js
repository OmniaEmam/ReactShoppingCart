import React from 'react';
import '../../css/Products/Products.css'

function Products(props) {
  console.log(props);
  return (
    <div className="Products-Wrapper"> {props.products.map(product => (
      <div className='product-item' key={product.id}>
        <img src={product.imageURL} alt={product.title} />
        <div className='product-description'>
          <p>{product.title}</p>
          <span>{product.price}</span>
        </div>
        <button>Add to cart</button>
      </div>

    ))}
    </div>
  )
}

export default Products;