import React from 'react'
import '../../css/Cart/Cart.css'

 function Cart(props) {
  return (
    <div className='cart-wrapper'>
      <div className='cart-title'> {props.cartItems.length === 0 ? " Empty Cart" : <p>
        There is {props.cartItems.length} products in cart
        </p>} </div>
      <div className='cart-items'>
        {props.cartItems.map(item => (

              <div className='cart-item' key={item.id}>
              <img src={item.imageURL} alt="" />
              <div className='cart-info'>
                  <div>
                      <p>{item.title}</p>
                      <p>Quntity : {item.qty}</p>
                      <p>{item.price} $</p>
                  </div>
                  <button className='cart-button' onClick={() => props.removeFromCart(item)}>Remove</button>
              </div>
          </div>
        ))}
        
        
      </div>
    </div>
  )
}

export default Cart;