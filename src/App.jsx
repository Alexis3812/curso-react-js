import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./components/Header/Header";
import ItemListContainer from "./components/ItemListContainer/ItemListContainer";
import Cart from "./components/Cart/Cart";
import Footer from "./components/Footer/Footer";
import './App.css';

function App() {
  return (
    <BrowserRouter>
      <div className="app-container">
        <Header brandName="GameStore" />
        
        <main className="app-main">
          <Routes>
            <Route path="/" element={<ItemListContainer greeting="¡Bienvenido a GameStore - Catálogo General!" />} />
            <Route path="/categoria/:idCategory" element={<ItemListContainer />} />
            
            {/*  */}
            <Route path="/carrito" element={<Cart />} />
            
            <Route path="*" element={<h2 style={{ textAlign: "center", padding: "3rem" }}>404 - Página no encontrada</h2>} />
          </Routes>
        </main>

        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;