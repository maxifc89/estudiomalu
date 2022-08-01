import './App.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Header from './components/layout/Header';
import Nav from './components/layout/Nav';
import Footer from './components/layout/Footer';

import HomePage from './pages/HomePage';
import NosotrosPage from './pages/NosotrosPage';
import ContactoPage from './pages/ContactoPage';
import GaleriaPage from './pages/GaleriaPage';
import NovedadesPage from './pages/NovedadesPage';
import ServiciosPage from './pages/ServiciosPage';


import './App.css';


function App() {
  return (
    <div className="App">
      <Header></Header>

      <BrowserRouter>
      <Nav/>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path= "nosotros" element={<NosotrosPage />} />
        <Route path= "galeria" element={<GaleriaPage />} />
        <Route path= "servicios" element={<ServiciosPage />} />
        <Route path= "novedades" element={<NovedadesPage />} />
        <Route path= "contacto" element={<ContactoPage />} />
      </Routes>

      </BrowserRouter>
      <Footer/>
      
      
    </div>
  );
}

export default App;
