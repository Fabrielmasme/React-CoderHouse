import NavBar from "./components/NavBar/NavBar";
import ItemListContainer from "./components/ItemListContainer/ItemListContainer";
import ItemDetailContainer from "./components/ItemDetailContainer/ItemDetailContainer";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { CartProvider } from "./components/Context/CartContext";
import Cart from "./components/cart/Cart";
import Checkout from "./components/checkout/checkout";
import './App.css'


function App() {

  return (
    <div className="app">
      <BrowserRouter>
      <CartProvider>
        <NavBar />

        <Routes>
          <Route path="/" element={ <ItemListContainer greeting={"Hola acá podes comprar suplementos"} /> } />
          <Route path="/category/:category" element={ <ItemListContainer greeting={"Hola acá podes comprar suplementos"} /> } />
          <Route path="/detail/:id" element={ <ItemDetailContainer /> } />
          <Route path="*" element={ <div>Error 404</div> } />
          <Route path="/cart" element={<Cart/>} />
          <Route path="/checkout" element={<Checkout/>} />
        </Routes>
      </CartProvider>
      </BrowserRouter>
    </div>
  )
}

export default App
