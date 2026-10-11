import React from 'react';
import { useCart } from '../../context/CartContext';
import { Link } from 'react-router-dom';
import './Cart.css';

const Cart = () => {
  const { cart, clearCart, getCartTotal } = useCart();

  if (cart.length === 0) {
    return (
      <div className="cart-empty-container">
        <h2>El carrito está vacío</h2>
        <p>¡Explora nuestro catálogo y agrega tus juegos o periféricos favoritos!</p>
        <Link to="/" className="cart-back-btn">Volver al catálogo</Link>
      </div>
    );
  }

  return (
    <div className="cart-container">
      <h2>Carrito de Compras</h2>
      <div className="cart-list">
        {cart.map(item => (
          <div key={item.id} className="cart-item">
            <img src={item.img} alt={item.nombre} className="cart-item-img" />
            <div className="cart-item-info">
              <h4>{item.nombre}</h4>
              <p>Cantidad: {item.quantity}</p>
              <p>Precio unitario: ${item.precio}</p>
            </div>
            <div className="cart-item-subtotal">
              <p>Subtotal: <strong>${item.precio * item.quantity}</strong></p>
            </div>
          </div>
        ))}
      </div>

      <div className="cart-summary">
        <h3>Total a pagar: ${getCartTotal()}</h3>
        <div className="cart-actions">
          <button onClick={clearCart} className="cart-clear-btn">Vaciar Carrito</button>
        </div>
      </div>
    </div>
  );
};

export default Cart;