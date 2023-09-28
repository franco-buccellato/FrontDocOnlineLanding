import './App.css';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import { UsuarioContextProvider } from './components/Context/UsuarioContext';
import LandingPage from './components/LandingPage/LandingPage';
/* import LeftBar from './components/LeftBar/LeftBar'; */
import Login from './components/Login/Login';
import Encabezado from './components/Encabezado/Encabezado';
import SectionSesion from './components/SectionSesion/SectionSesion';
import PacienteContainer from './components/PacienteContainer/PacienteContainer';

function App() {

  return (
    <UsuarioContextProvider>
        <BrowserRouter>
          <Encabezado/>
          {/* <LeftBar/> */}
{          <Routes>
            <Route exact path = '/' element = {<LandingPage/>}/>
            <Route exact path = '/login' element = {<Login/>}/>
            <Route exact path = '/sesion' element = {<SectionSesion/>}/>
            <Route exact path = '/paciente/' element = {<PacienteContainer/>}/>
          </Routes>}
        </BrowserRouter>
    </UsuarioContextProvider>
  );
}

export default App;
