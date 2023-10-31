import Footer from '../Footer/Footer';
import Inicio from '../Inicio/Inicio';
import './LandingPage.css';
import ComoFunciona from '../ComoFunciona/ComoFunciona';
import CuadradosFondo from '../CuadradosFondo/CuadradosFondo';
import CalidadYBeneficios from '../CalidadYBeneficios/CalidadYBeneficios';
import Servicios from '../Servicios/Servicios';
import FormularioLanding from '../FormularioLanding/FormularioLanding';
import Renovacion from '../Renovacion/Renovacion';
import { useEffect } from 'react';


const LandingPage = (setMostrarEncabezado) => {

    useEffect(() => {
        setMostrarEncabezado(true)
    })

    return (
        <div className='landing-page'>
            <CuadradosFondo className='cuadradoFondo'/>
            <Inicio/>
            <CalidadYBeneficios />
            <Servicios/>
            <ComoFunciona/>
            <Renovacion />
            <FormularioLanding/>
            <Footer/>
        </div>
    );
}
export default LandingPage;