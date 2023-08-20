import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { CartContext } from '../../context/CartContext';
import CartItem from '../CartItem/CartItem';
import '../Cart/Cart.css';

const Cart = () => {
  const { cart, clearCart, totalQuantity, total } = useContext(CartContext);

  if (totalQuantity === 0) {
    return (
      <div>
        <h1>No hay items en el carrito</h1>
        <Link to="/" className="Option">
          Productos
        </Link>
      </div>
    );
  }

  return (
    <div className="cart-container">
      <div className="cart-items">
        {cart.map(cartItem => (
          <CartItem key={cartItem.id} product={cartItem} />
        ))}
      </div>
      <div className="cart-summary">
        <h3>Total: ${total}</h3>
        <button onClick={() => clearCart()} className="Button clear-button">
          Limpiar carrito
        </button>
        <Link to="/checkout" className="Option checkout-button">
          Checkout
        </Link>
      </div>
    </div>
  );
};

export default Cart;