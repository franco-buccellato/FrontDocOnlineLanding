import SectionNosotros from '../SectionNosotros/SectionNosotros';
import Footer from '../Footer/Footer';
import Inicio from '../Inicio/Inicio';
import Background from '../Background/Background';
import './LandingPage.css';
import ComoFunciona from '../ComoFunciona/ComoFunciona';

const LandingPage = () => {
    return (
        <div className='landing-page'>
            <Inicio/>
            <SectionNosotros/>
            <ComoFunciona/>
            <Footer/>
        </div>
    );
}
export default LandingPage;