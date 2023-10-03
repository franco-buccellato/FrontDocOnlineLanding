import SectionNosotros from '../SectionNosotros/SectionNosotros';
import Footer from '../Footer/Footer';
import Inicio from '../Inicio/Inicio';
import Background from '../Background/Background';
import './LandingPage.css';
import ComoFunciona from '../ComoFunciona/ComoFunciona';
import CuadradosFondo from '../CuadradosFondo/CuadradosFondo';

const LandingPage = () => {
    return (
        <div className='landing-page'>
            <CuadradosFondo className='cuadradoFondo'/>
            <Inicio/>
            <SectionNosotros/>
            <ComoFunciona/>
            <Footer/>
        </div>
    );
}
export default LandingPage;