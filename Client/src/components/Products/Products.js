import React , { useState } from 'react';
import '../../css/Products/Products.css';
import ProductModal from '../Products/ProductModal'

function Products(props) {
  const [product, setProduct] = useState("");

  const openModal = (product) => {
    setProduct(product)
  }

  const closeModal = () => {
    setProduct(false)
  }

  return (
    <div className="Products-Wrapper"> 
    {props.products.map(product => (
      <div className='product-item' key={product.id}>
        <a href='#' onClick={() => openModal(product)}>
        <img src={product.imageURL} alt={product.title} />
        </a>
        <div className='product-description'>
          <p>{product.title}</p>
          <span>{product.price}</span>
        </div>
        <button onClick={() => props.addToCart(product)}>Add to cart</button>
      </div>

    ))}


     <ProductModal product={product} closeModal={closeModal} />
    
    </div>
  )
}

export default Products;