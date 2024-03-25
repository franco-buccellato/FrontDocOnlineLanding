import styled from 'styled-components';
import imagenServicios from '../../imagenes/servicios-mujer.webp';
import { motion } from "framer-motion";

function Servicios() {

    return (
        <ContenedorServicios id='atencion-distancia'>
            <div className='content'>
                <div className="container-img">
                    <div>
                        <img
                            alt="logo-doconline"
                            src={imagenServicios}
                        />
                    </div>
                </div>
                <motion.div
                        initial={{ opacity: 0, x: 10 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: .8 }}
                        exit={{ opacity: 0 }}
                        className='container-text'
                >
                    <div className='title-content'>
                        <span>personal a tu disposición</span>
                        <h3>Servicio a Distancia</h3>
                        <div>
                            <p>¡La telemedicina se está utilizando más que nunca! Solicita y programa citas con un click y chatea con profesionales de la salud directamente desde tu computadora o celular, en la comodidad de tu hogar.</p>
                            <br/>
                            <p>Doc. Online fue diseñado para conectar pacientes y médicos de una manera práctica.</p>
                        </div>
                    </div>
                </motion.div>
            </div>
            <div className='fondo-horizontal'></div>
        </ContenedorServicios>
    )
}

export default Servicios;

const ContenedorServicios = styled.div`
    width: 100%;
    padding-top: 4rem;
    .content{
        width: 60%;
        margin: auto;
        display: flex;
        @media only screen and (max-width: 1540px) {
            width: 74%;
        }
        @media only screen and (max-width: 1024px) {
            width: 90%;
        }

        .container-img{
            margin-top: 10rem;
            width: 50rem; 
            height: 36rem; 
            left: -10rem;
            background-color: #ccc;
            transform: rotate(341.2deg); 
            transform-origin: center; 
            overflow: hidden; 
            position: absolute; 
            border-radius: 10%;
            z-index: 2;
            @media only screen and (max-width: 1024px) {
                display: none;
            }
            @media only screen and (max-width: 1670px) {
                width: 42rem; 
                height: 34rem; 
            }
            @media only screen and (max-width: 1540px) {
                width: 40rem; 
                height: 34rem; 
            }
            @media only screen and (max-width: 1270px) {
                width: 34rem; 
                height: 26rem; 
            }
            @media only screen and (max-width: 1120px) {
                width: 38rem; 
                height: 28rem; 
            }
            div{
                img{
                    
                    transform-origin: center; 
                    width: 100%;
                    height: 100%;
                    object-fit: cover;
                    position: absolute;
                    top: 0;
                    left: 0;
                }
            }
        }

        .container-text{
            display: flex;
            flex-direction: column;
            text-align: end;
            @media only screen and (max-width: 1024px) {
                text-align: center;
            }

            span{
                color: #00b1ff;
                text-transform: uppercase;
                font-size: 1.2rem;
                font-weight: 600;
                text-align: end;
                @media only screen and (max-width: 1024px) {
                text-align: center;
                }
            }
            h3{
                font-weight: 600;
                font-size: 1.8rem;
                margin-top: 3rem;
            }
            div{
                display: flex;
                flex-direction: column;
                align-items: end;
                margin-top: 4rem;
                @media only screen and (max-width: 1024px) {
                    align-items: center;
                }
                p{
                font-size: 1.2rem;
                font-weight: 600;
                width: 50%;
                @media only screen and (max-width: 1024px) {
                    width: 100%;
                }

            }
            }

        }

    }


`