import React, { useState } from 'react';
import '../../css/Products/Products.css';
import ProductModal from '../Products/ProductModal'
import Bounce from 'react-reveal/Bounce';

function Products(props) {
  const [product, setProduct] = useState("");

  const openModal = (product) => {
    setProduct(product)
  }

  const closeModal = () => {
    setProduct(false)
  }

  return (
    <Bounce left cascade>
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
    </Bounce>
  )
}

export default Products;