import "./Inicio.css";
import Carousel from "react-bootstrap/Carousel";
import {Link} from 'react-router-dom';
import Button from 'react-bootstrap/Button';

import imagenCarrousel1 from '../../imagenes/fondo-medico.png';


function Inicio() {
    return (
        <Carousel id="inicio">
            <Carousel.Item>
                <img
                    className="d-block w-100 slide-inicial"
                    src={imagenCarrousel1}
                    alt="First slide"
                />
                <Carousel.Caption className="carousel-caption-1">
                    <div className="card-inferior-carousel-caption">
                        <Link to = {'/login'}>
                            <Button variant="info" size="lg" className="boton-nuestros-productos">
                            <ion-icon size="large" name="caret-forward-outline"></ion-icon>
                                Comenzar Ahora
                            </Button>{' '}
                        </Link>
                    </div>
                    <div className="card-informacion">
                        <h5>Tramita tu permiso de  Reprocann sin moverte de tu casa.</h5>
                    </div>
                </Carousel.Caption>
            </Carousel.Item>
        </Carousel>
/*         <Carousel>
            <Carousel.Item>
                <img
                    className="d-block w-100"
                    src={imagenCarrousel1}
                    alt="First slide"
                />
                <Carousel.Caption className="carousel-caption-1">
                    <div className="card-inferior-carousel-caption">
                        <Link to = {'/login'}>
                            <Button variant="info" size="lg" className="boton-nuestros-productos">
                            <ion-icon size="large" name="caret-forward-outline"></ion-icon>
                                Comenzar Ahora
                            </Button>{' '}
                        </Link>
                    </div>
                    <div className="card-informacion">
                        <h5>Tramita tu permiso de  Reprocann sin moverte de tu casa.</h5>
                    </div>
                </Carousel.Caption>
            </Carousel.Item>
        </Carousel> */
    );
}

export default Inicio;
