import React from 'react';
    import { Link } from 'react-router-dom';

    function Header() {
      return (
        <header>
          <div className="container">
            <h1>Food Ordering</h1>
            <nav>
              <ul>
                <li>
                  <Link to="/">Menu</Link>
                </li>
                <li>
                  <Link to="/cart">Cart</Link>
                </li>
                <li>
                  <Link to="/orders">Orders</Link>
                </li>
              </ul>
            </nav>
          </div>
        </header>
      );
    }

    export default Header;
