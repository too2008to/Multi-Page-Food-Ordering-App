import React from 'react';
    import { useOrder } from '../context/OrderContext';

    function Orders() {
      const { orders, confirmedOrders, confirmOrder } = useOrder();

      return (
        <div className="container">
          <h2>Your Orders</h2>
          <ul id="order-list">
            {orders.length === 0 && confirmedOrders.length === 0 ? (
              <li>No orders placed yet.</li>
            ) : (
              <>
                {orders.map((order, index) => (
                  <li key={index}>
                    <div className="order-item">
                      <p>
                        Items:
                        {order.items.map((item) => (
                          <div key={item.id}>
                            {item.name} - ${item.price.toFixed(2)}
                          </div>
                        ))}
                        Total: ${order.total.toFixed(2)}
                      </p>
                      <button onClick={() => confirmOrder(index)}>
                        Confirm Order
                      </button>
                    </div>
                  </li>
                ))}
                {confirmedOrders.map((order, index) => (
                  <li key={`confirmed-${index}`}>
                    <div className="order-item confirmed">
                      <p>
                        Items:
                        {order.items.map((item) => (
                          <div key={item.id}>
                            {item.name} - ${item.price.toFixed(2)}
                          </div>
                        ))}
                        Total: ${order.total.toFixed(2)}
                      </p>
                      <span className="confirmed-text">Confirmed</span>
                    </div>
                  </li>
                ))}
              </>
            )}
          </ul>
        </div>
      );
    }

    export default Orders;
