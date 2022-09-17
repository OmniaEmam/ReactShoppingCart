import React from 'react'
import Modal from 'react-modal'

 function ProductModal(props) {
    const {product , closeModal} = props;
  return (
    <Modal isOpen={product} onRequestClose={closeModal}>
      
      <div className="product-info">
      <span onClick={closeModal}>&times;</span>
        <img src={product.imageURL} alt={product.title} />
        <p>{product.title}</p>
        <p>{product.descreption}</p>
      </div>
    </Modal>
  )
}

export default ProductModal;