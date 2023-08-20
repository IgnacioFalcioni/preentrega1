
import React from 'react';

const CartItem = ({ product }) => {
  const subtotal = product.price * product.quantity;

  return (
    <div className="cart-item">
      
      <div className="item-details">
        <h3 className="item-name">{product.name}</h3>
        
        
      </div>
      <div className="item-price">precio unitario ${product.price}</div>
      <div className="item-quantity">cantidad: {product.quantity}</div>
      <div className="item-subtotal">Subtotal: ${subtotal}</div>
    </div>
  );
};

export default CartItem;