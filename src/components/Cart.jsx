import React from 'react';
    import { useCart } from '../context/CartContext';

    function Cart() {
      const { cart, clearCart, checkout } = useCart();

      if (cart.length === 0) {
        return (
          <div className="container">
            <h2>Your Cart</h2>
            <p>Your cart is empty.</p>
          </div>
        );
      }

      return (
        <div className="container">
          <h2>Your Cart</h2>
          <ul id="cart-items">
            {cart.map((item) => (
              <li key={item.id}>
                {item.name} - ${item.price.toFixed(2)}
              </li>
            ))}
          </ul>
          <p>
            <strong>Total: $
              {cart
                .reduce((total, item) => total + item.price, 0)
                .toFixed(2)}
            </strong>
          </p>
          <button id="checkout-button" onClick={checkout}>
            Checkout
          </button>
          <button onClick={clearCart}>Clear Cart</button>
        </div>
      );
    }

    export default Cart;
