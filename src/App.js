import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { UsuarioContextProvider } from './components/Context/UsuarioContext';
import LandingPage from './components/LandingPage/LandingPage';
import Encabezado from './components/Encabezado/Encabezado';
import CostosServicios from './components/CostosServicios/CostosServicios';
import PasosFinales from './components/PasosFinales/PasosFinales';
import { useState } from 'react';
import MetodosDePago from './components/MetodosDePago/MetodosDePago';
import BotonWhatsApp from './components/BotonWhatsApp/BotonWhatsApp';
import Login from './components/Login/Login';
import SectionSesion from './components/SectionSesion/SectionSesion';
import PacienteContainer from './components/PacienteContainer/PacienteContainer';
//TEST LOGUEO CON GOOGLE
//import { AuthProvider } from './context/AuthProvider'
//import { FormProvider } from './context/FormProvider'
import { GoogleOAuthProvider } from '@react-oauth/google';
//import GoogleRegister from './pages/GoogleRegister'

function App() {

  const [mostrarEncabezado, setMostrarEncabezado] = useState(true)

  return (
    <GoogleOAuthProvider clientId="715992003862-grqt5eheumcqua563a8ja387h1hlmadp.apps.googleusercontent.com">
      <UsuarioContextProvider>
        <BrowserRouter>
          <BotonWhatsApp />
          {mostrarEncabezado && <Encabezado />}
          {<Routes>
            <Route exact path='/' element={<LandingPage setMostrarEncabezado={setMostrarEncabezado} />} />
            <Route exact path='/costosServicios' element={<CostosServicios setMostrarEncabezado={setMostrarEncabezado}/>} />
            <Route exact path='/metodosDePago' element={<MetodosDePago setMostrarEncabezado={setMostrarEncabezado}/>} />
            <Route exact path='/pasosFinales' element={<PasosFinales setMostrarEncabezado={setMostrarEncabezado}/>} />
            <Route exact path = '/' element = {<LandingPage/>}/>
            <Route exact path = '/login' element = {<Login/>}/>
            <Route exact path = '/sesion' element = {<SectionSesion/>}/>
            <Route exact path = '/paciente/' element = {<PacienteContainer/>}/>
          </Routes>}
        </BrowserRouter>
      </UsuarioContextProvider>
    </GoogleOAuthProvider>
  );
}

export default App;