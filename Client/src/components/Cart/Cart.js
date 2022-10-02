import React, { useState } from 'react'
import '../../css/Cart/Cart.css'
import CheckoutForm from '../CheckoutForm/CheckoutForm';
import Bounce from 'react-reveal/Bounce';

function Cart(props) {

  const [showForm, setShowForm] = useState(false);
  const [value, setValue] = useState(false);

  const submitOrder = (e) => {
    e.preventDefault();
    //console.log(value);

    const order = {
      name: value.name,
      email: value.email
    }

    console.log(order);
  }



  const handleChange = (e) => {
    console.log(e.target.name);
    setValue((prevState) => ({ ...prevState, [e.target.name]: e.target.value }))
  }



  return (
    <div className='cart-wrapper'>
      <div className='cart-title'> {props.cartItems.length === 0 ? " Empty Cart" : <p>
        There is {props.cartItems.length} products in cart
      </p>} </div>
      <Bounce left cascade>
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
      </Bounce>

      {
        props.cartItems.length !== 0 &&
        (
          <div className='cart-footer'>
            <div className='total'> Total : {props.cartItems.reduce((acc, p) => {
              return acc + p.price
            }, 0)} $</div>
            <button className='total-button' onClick={() => setShowForm(true)}> Select Products</button>
          </div>
        )
      }

      {/* Checkout Form */}
      <CheckoutForm showForm={showForm}
        setShowForm={setShowForm}
        handleChange={handleChange}
        submitOrder={submitOrder} />

    </div>

  )
}

export default Cart;