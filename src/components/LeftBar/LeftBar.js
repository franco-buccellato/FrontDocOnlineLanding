import './LeftBar.css'
import iconoLinkedin from '../../imagenes/linkeding.png';
import iconoInstagram from '../../imagenes/instagram.png';
import iconoFacebook from '../../imagenes/facebook.png';
import iconoWsp from '../../imagenes/whatsapp.png';


function LeftBar() {

    return (
        <div className="leftbar">
            <div className="container-navigation-left">
                <ul className='leftbar-style'>
                    <li className="column">
                        {/* <Link to = {'/'}> */}
                        <a href="https://www.linkedin.com/company/" target="_blank" rel="noreferrer">
                            <img className='icono-leftbar' alt='Icono Linkedin' src={iconoLinkedin}></img>
                        </a>
                        {/* </Link> */}
                    </li>
                    <li className="column">
                        {/* <Link to = {'/'}> */}
                        <a href="https://www.instagram.com/doconlineargentina/" target="_blank" rel="noreferrer">
                            <img className='icono-leftbar' alt='Icono Instagram' src={iconoInstagram}></img>
                        </a>
                        {/* </Link> */}
                    </li>
                    <li className="column">
                        {/* <Link to = {'/'}> */}
                        <a href="https://www.youtube.com/watch?v=2EpdYYa5oC8" target="_blank" rel="noreferrer">
                            <img className='icono-leftbar' alt='Icono Facebook' src={iconoFacebook}></img>
                        </a>
                        {/* </Link> */}
                    </li>
                    <li className="column">
                        {/* <Link to = {'/'}> */}
                        <a href="https://wa.me/+543425319488" target="_blank" rel="noreferrer">
                            <img className='icono-leftbar' alt='Icono WhatsApp' src={iconoWsp}></img>
                        </a>
                        {/* </Link> */}
                    </li>
                </ul>
            </div>
        </div>
    );
}

export default LeftBar;