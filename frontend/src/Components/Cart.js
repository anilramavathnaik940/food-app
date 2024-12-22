import React from 'react';
import './Styles/Cart.css';
import { useSelector, useDispatch } from 'react-redux';

import { increaseQnty, decreaseQnty } from "../store/cartSlice";
import { useNavigate } from 'react-router-dom';

const Cart = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  
  const cartItems = useSelector((state) => state.cart.cart); 
  const calculateTotal = () => {
    return cartItems.reduce((total, item) => total + item.price * item.quantity, 0);
  };

  return (
    <div className="cart-container">
      <h1 className="cart-title">Shopping Cart</h1>
      <div className="cart-items">
        {cartItems.length > 0 ? (
          cartItems.map((item) => (
            <div key={item.id} className="cart-item">
              <h2 className="item-name">{item.title}</h2>

              <div style={{borderRadius:"50%", backgroundColor:"grey"}}>
                <img src={item.image} alt={item.title} style={{width:"50px", height:"50px", backgroundSize:"cover", borderRadius:"50%"}}/>
              </div>

              <p className="item-price mt-2 pt-2">Price: <span style={{color:"brown", fontSize:"18px"}}>${item.price}</span></p>
              <div className="item-quantity">
                <button
                  className="quantity-btn"
                  onClick={() => dispatch(decreaseQnty(item.id))}
                  disabled={item.quantity <= 1} // Prevent going below 1
                >
                  -
                </button>
                {/* Display the current quantity */}
                <span className="quantity" style={{color:"black"}}>{item.quantity}</span>
                <button
                  className="quantity-btn"
                  onClick={() => dispatch(increaseQnty(item.id))}
                >
                  +
                </button>
              </div>
              <p className="item-total ">Subtotal: <span style={{color:"red", fontSize:"18px"}}>${item.price * item.quantity}</span></p>
            </div>
          ))
        ) : (
          <p className="empty-cart">Your cart is empty.</p>
        )}
      </div>
      <div className="cart-summary">
        <h2>Grand Total: ${calculateTotal()}</h2>
        {cartItems.length > 0 && (
          <button className="checkout-btn" onClick={() => navigate("/checkout")}>Proceed to Checkout</button>
        )}
      </div>
    </div>
  );
};

export default Cart;
