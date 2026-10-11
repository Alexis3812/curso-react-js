import { Link } from 'react-router-dom';
import { useCart } from '../../context/CartContext';
import './CartWidget.css'; // O los estilos que uses

const CartWidget = () => {
  const { getCartQuantity } = useCart();
  const totalItems = getCartQuantity();

  return (
    <Link to="/carrito" className="cart-widget-link">
      <div className="cart-widget">
        🛒 
        {totalItems > 0 && <span className="cart-badge">{totalItems}</span>}
      </div>
    </Link>
  );
};

export default CartWidget;