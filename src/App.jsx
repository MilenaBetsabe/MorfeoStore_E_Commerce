import './App.css';
import NavBar from './components/NavBar';
import ItemListContainer from './components/ItemListContainer'
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {

  return (
    <>
      <BrowserRouter>
        <NavBar />
        <Routes>
          <Route path="/" element={<div><h1>Homepage</h1></div>} />
          <Route path="/contacto" element={<div><h1>Contacto</h1></div>} />
          <Route path="/adulto" element={<div><h1>Adulto</h1></div>} />
        </Routes>
      </BrowserRouter>
      <ItemListContainer greeting='Hola Mundo' />
    </>
  )
}

export default App;
