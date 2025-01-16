import React, { createContext, useState, useContext } from 'react';
    import { useOrder } from './OrderContext';

    const CartContext = createContext();

    export function CartProvider({ children }) {
      const [cart, setCart] = useState([]);
      const { addOrder } = useOrder();

      const addToCart = (item) => {
        setCart([...cart, { ...item, id: Date.now() }]);
      };

      const clearCart = () => {
        setCart([]);
      };

      const checkout = () => {
        if (cart.length > 0) {
          const total = cart.reduce((acc, item) => acc + item.price, 0);
          addOrder({ items: cart, total: total });
          setCart([]);
        } else {
          alert('Your cart is empty. Please add items to your cart before checking out.');
        }
      };

      return (
        <CartContext.Provider value={{ cart, addToCart, clearCart, checkout }}>
          {children}
        </CartContext.Provider>
      );
    }

    export function useCart() {
      return useContext(CartContext);
    }
