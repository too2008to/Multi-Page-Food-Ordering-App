import React from 'react';
    import { Routes, Route } from 'react-router-dom';
    import Menu from './components/Menu';
    import Cart from './components/Cart';
    import Orders from './components/Orders';
    import Header from './components/Header';
    import { CartProvider } from './context/CartContext';
    import { OrderProvider } from './context/OrderContext';

    function App() {
      return (
        <OrderProvider>
          <CartProvider>
            <Header />
            <Routes>
              <Route path="/" element={<Menu />} />
              <Route path="/cart" element={<Cart />} />
              <Route path="/orders" element={<Orders />} />
            </Routes>
          </CartProvider>
        </OrderProvider>
      );
    }

    export default App;
