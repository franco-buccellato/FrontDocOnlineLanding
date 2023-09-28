import SectionNosotros from '../SectionNosotros/SectionNosotros';
import Footer from '../Footer/Footer';
import Inicio from '../Inicio/Inicio';
import Background from '../Background/Background';
import './LandingPage.css';
import ComoFunciona from '../ComoFunciona/ComoFunciona';
/* import LeftBar from '../LeftBar/LeftBar'; */

const LandingPage = () => {
    return (
        <div className='landing-page'>
            <Inicio/>
            {/* <LeftBar/> */}
            <SectionNosotros/>
            <ComoFunciona/>
            <Footer/>
            <Background/>
        </div>
    );
}
export default LandingPage;