import React from 'react'
import "../../css/CheckoutForm/CheckoutForm.css"
import Input from '../Input/Input'
import Zoom from 'react-reveal/Zoom';

function CheckoutForm(props) {
    return (
        <>
            {props.showForm && <div className='checkout-form'>
                <Zoom>
                <span className='close-icon' onClick={() => props.setShowForm(false)}>
                    &times;
                </span>
                <form onSubmit={props.submitOrder}>
                    <Input 
                          label="Name"
                          type="text"
                          onChange={props.handleChange}
                          name="name"
                    />

                   <Input 
                          label="Email"
                          type="email"
                          onChange={props.handleChange}
                          name="email"
                    />
                    <div>
                        <button className='form-button' type='submit'>Submit</button>
                    </div>
                </form>
                </Zoom>
            </div>}
        </>
    )
}

export default CheckoutForm
