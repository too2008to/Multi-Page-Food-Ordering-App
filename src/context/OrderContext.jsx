import React, { createContext, useState, useContext } from 'react';

    const OrderContext = createContext();

    export function OrderProvider({ children }) {
      const [orders, setOrders] = useState([]);
      const [confirmedOrders, setConfirmedOrders] = useState([]);

      const addOrder = (order) => {
        setOrders([...orders, order]);
      };

      const confirmOrder = (index) => {
        const confirmedOrder = orders.splice(index, 1)[0];
        setConfirmedOrders([...confirmedOrders, confirmedOrder]);
        setOrders([...orders]);
      };

      return (
        <OrderContext.Provider
          value={{ orders, confirmedOrders, addOrder, confirmOrder }}
        >
          {children}
        </OrderContext.Provider>
      );
    }

    export function useOrder() {
      return useContext(OrderContext);
    }
