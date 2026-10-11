import './Item.css';

const Item = ({ producto }) => {
  return (
    <div className="item-card">
      <img src={producto.img} alt={producto.nombre} className="item-img" />
      <h3>{producto.nombre}</h3>
      <p className="item-category">{producto.categoria}</p>
      <p className="item-price">${producto.precio}</p>
      <button className="item-btn">Ver Detalles</button>
    </div>
  );
};

export default Item;