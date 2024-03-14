import Footer from '../Footer/Footer';
import Inicio from '../Inicio/Inicio';
import ComoFunciona from '../ComoFunciona/ComoFunciona';
import CuadradosFondo from '../CuadradosFondo/CuadradosFondo';
import CalidadYBeneficios from '../CalidadYBeneficios/CalidadYBeneficios';
import Servicios from '../Servicios/Servicios';
import FormularioLanding from '../FormularioLanding/FormularioLanding';
import Renovacion from '../Renovacion/Renovacion';
import QuienesSomos from '../QuienesSomos/QuienesSomos';
import { useEffect } from 'react';
import UsoPractico from '../UsoPractico/UsoPractico';


const LandingPage = ({setMostrarEncabezado}) => {

    useEffect(() => {
        setMostrarEncabezado(true)
    })

    return (
        <div className='landing-page'>
            <CuadradosFondo className='cuadradoFondo'/>
            <Inicio/>
            <CalidadYBeneficios />
            <QuienesSomos />
            <Servicios/>
            <ComoFunciona/>
            <Renovacion />
            <UsoPractico />
            <FormularioLanding/>
            <Footer/>
        </div>
    );
}
export default LandingPage;