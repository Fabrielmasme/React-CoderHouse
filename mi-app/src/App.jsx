import proteina from "./assets/img/Whey_protein_frutilla_doypack.png"
import NavBar from "./components/NavBar/NavBar";
import './App.css'
import ItemListContainer from "./components/ItemsListContainer/ItemListContainer";
import EjemploContador from "./components/EjemploContador/EjemploContador";

function App() {
  return (
    <div className="App">
      <NavBar />
      <main> 
        <ItemListContainer greeting={ "Bienvenidos a mi primer E-commerce"} />
        <p>Mi primer app con Vite y React</p>
        <img src={proteina} alt="Proteina" className="imagen-principal" />
        <EjemploContador />
      </main>  
    </div>
  )
}

export default App
