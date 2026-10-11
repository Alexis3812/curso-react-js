import { Link } from "react-router-dom";
import { useCart } from "../../context/CartContext"; 
import './Item.css';

const Item = ({ producto }) => {
  
  const { addToCart } = useCart();

  const handleAdd = (e) => {
    e.stopPropagation(); 
    addToCart(producto, 1); 
    alert(`¡Agregaste "${producto.nombre}" al carrito!`);
  };

  return (
    <div className="item-card">
      <img src={producto.img} alt={producto.nombre} className="item-img" />
      <h3>{producto.nombre}</h3>
      <p className="item-category">{producto.categoria}</p>
      <p className="item-price">${producto.precio}</p>
      
      <div className="item-buttons" style={{ display: 'flex', gap: '10px', flexDirection: 'column' }}>
        <Link to={`/item/${producto.id}`} className="item-btn-link">
          <button className="item-btn">Ver Detalles</button>
        </Link>
        
        {/*  */}
        <button onClick={handleAdd} className="item-add-btn" style={{
          backgroundColor: '#4ade80',
          color: '#121212',
          border: 'none',
          padding: '0.5rem',
          borderRadius: '4px',
          fontWeight: 'bold',
          cursor: 'pointer'
        }}>
          Comprar
        </button>
      </div>
    </div>
  );
};

export default Item;