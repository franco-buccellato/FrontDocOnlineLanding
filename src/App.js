import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { UsuarioContextProvider } from './components/Context/UsuarioContext';
import LandingPage from './components/LandingPage/LandingPage';
/* import LeftBar from './components/LeftBar/LeftBar'; */
/* import Login from './components/Login/Login'; */
import Encabezado from './components/Encabezado/Encabezado';
import CostosServicios from './components/CostosServicios/CostosServicios';
import { useState } from 'react';
import MetodosDePago from './components/MetodosDePago/MetodosDePago';
import BotonWhatsApp from './components/BotonWhatsApp/BotonWhatsApp';
/* import SectionSesion from './components/SectionSesion/SectionSesion';
import PacienteContainer from './components/PacienteContainer/PacienteContainer'; */


function App() {

  const [mostrarEncabezado, setMostrarEncabezado] = useState(true)

  return (
    <UsuarioContextProvider>
      <BrowserRouter>
        <BotonWhatsApp />
        {mostrarEncabezado && <Encabezado />}
        {<Routes>
          <Route exact path='/' element={<LandingPage setMostrarEncabezado={setMostrarEncabezado} />} />
          <Route exact path='/costosServicios' element={<CostosServicios setMostrarEncabezado={setMostrarEncabezado}/>} />
          <Route exact path='/metodosDePago' element={<MetodosDePago setMostrarEncabezado={setMostrarEncabezado}/>} />
        </Routes>}
      </BrowserRouter>
    </UsuarioContextProvider>
  );
}

export default App;