import React from 'react';
    import { useCart } from '../context/CartContext';

    function Menu() {
      const { addToCart } = useCart();

      const menuItems = [
        {
          id: 1,
          name: 'Burger',
          price: 10.99,
          description: 'Delicious beef burger with all the fixings.',
          image: 'https://placehold.co/300x200/e91e63/fff?text=Burger',
        },
        {
          id: 2,
          name: 'Pizza',
          price: 12.99,
          description: 'Classic pepperoni pizza.',
          image: 'https://placehold.co/300x200/9c27b0/fff?text=Pizza',
        },
        {
          id: 3,
          name: 'Salad',
          price: 8.99,
          description: 'Fresh garden salad with vinaigrette.',
          image: 'https://placehold.co/300x200/4caf50/fff?text=Salad',
        },
      ];

      return (
        <main>
          <section id="hero">
            <div className="container">
              <h2>Welcome to Our Restaurant</h2>
              <p>Enjoy delicious food delivered right to your door.</p>
            </div>
          </section>
          <section id="menu" className="menu">
            <div className="container">
              <h2>Our Menu</h2>
              <div className="menu-grid">
                {menuItems.map((item) => (
                  <div key={item.id} className="menu-item">
                    <img src={item.image} alt={item.name} />
                    <h3>{item.name}</h3>
                    <p>{item.description}</p>
                    <span className="price">${item.price.toFixed(2)}</span>
                    <button onClick={() => addToCart(item)}>Add to Cart</button>
                  </div>
                ))}
              </div>
            </div>
          </section>
        </main>
      );
    }

    export default Menu;
