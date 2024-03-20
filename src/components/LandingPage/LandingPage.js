import Footer from '../Footer/Footer';
import Inicio from '../Inicio/Inicio';
import ComoFunciona from '../ComoFunciona/ComoFunciona';
import CuadradosFondo from '../CuadradosFondo/CuadradosFondo';
import CalidadYBeneficios from '../CalidadYBeneficios/CalidadYBeneficios';
import Servicios from '../Servicios/Servicios';
import FormularioLanding from '../FormularioLanding/FormularioLanding';
import Renovacion from '../Renovacion/Renovacion';
import QuienesSomos from '../QuienesSomos/QuienesSomos';
import Opiniones from '../Opiniones/Opiniones';
import VideoIntroduccion from '../VideoIntroduccion/VideoIntroduccion';
import QuienesPueden from '../QuienesPueden/QuienesPueden';
import Faq from '../Faq/Faq';
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
            <VideoIntroduccion />
            <CalidadYBeneficios />
            <QuienesSomos />
            <Servicios/>
            <Renovacion />
            <QuienesPueden />
            <ComoFunciona/>
            <Opiniones />
            <UsoPractico />
            <Faq />
            <FormularioLanding/>
            <Footer/>
        </div>
    );
}
export default LandingPage;