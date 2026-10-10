import "./ItemList.css";

export const Item = ( {products} ) => {
    if (!products.length) {
        return <p>No hay productos</p>;
    }

    return (
        <div className="products-container">
            {products.map((product) => (
                <Item key={product.id} {...product} />
            ))}
        </div>
    );
};