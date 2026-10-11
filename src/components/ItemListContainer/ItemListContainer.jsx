import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import Item from "../Item/Item";
import './ItemListContainer.css';

const ItemListContainer = ({ greeting }) => {
  const [productos, setProductos] = useState([]);
  const [loading, setLoading] = useState(true);
  
  
  const { idCategory } = useParams();

  useEffect(() => {
    setLoading(true);
    
    fetch('/data/products.json')
      .then((response) => response.json())
      .then((data) => {
        if (idCategory) {
        
          const productosFiltrados = data.filter(
            (prod) => prod.categoria.toLowerCase() === idCategory.toLowerCase()
          );
          setProductos(productosFiltrados);
        } else {
          
          setProductos(data);
        }
      })
      .catch((error) => {
        console.error("Error al cargar los productos:", error);
      })
      .finally(() => {
        setLoading(false);
      });
  }, [idCategory]); 

  return (
    <div className="container">
      <h2 className="greeting-title">
        {greeting || `Categoría: ${idCategory}`}
      </h2>
      
      {loading ? (
        <h3 className="loading-text">Cargando catálogo...</h3>
      ) : (
        productos.length === 0 ? (
          <h3 className="loading-text">No hay productos en esta categoría.</h3>
        ) : (
          <div className="item-list">
            {productos.map((prod) => (
              <Item key={prod.id} producto={prod} />
            ))}
          </div>
        )
      )}
    </div>
  );
};

export default ItemListContainer;