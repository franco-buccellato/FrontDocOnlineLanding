import styled from 'styled-components';
import Estrellas from '../../imagenes/Opiniones-estrellas.webp';
import { motion } from "framer-motion"
import Accordion from 'react-bootstrap/Accordion';

function Faq() {
    return (
        <Opiniones>

            <motion.div
                initial={{ opacity: 0, x: -10 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: .8 }}
                exit={{ opacity: 0 }}
                className='content'
            >

                <div className='container-text'>
                    <span>Nuestros pacientes</span>
                </div>

                <div className='container-cards'>

                    <div className='card'>
                        <img 
                            src={Estrellas}
                            alt='Estrellas'
                        />
                        <span>Lucia</span>
                        <p>Me sentí súper cómoda, el trato es muy cálido. Gracias por el acompañamiento, hoy en día es difícil hallar gente tan proactiva, así que también les recomendaré.</p>
                    </div>

                    <div className='card'>
                        <img 
                            src={Estrellas}
                            alt='Estrellas'
                        />
                        <span>Matías</span>
                        <p>Espectacular el proceso, la verdad estoy agradecido por toda la gestión. Siempre atentos y explicando. Los voy a súper recomendar. Mil gracias a todo el quipo, nos vemos en la renovación!</p>
                    </div>

                    <div className='card'>
                        <img 
                            src={Estrellas}
                            alt='Estrellas'
                        />
                        <span>Andrés</span>
                        <p>Gracias por la paciencia y darme confianza, unos genios! Excelente servicio. Muy recomendables.</p>
                    </div>
                </div>


            </motion.div>

        </Opiniones>
    );
}

export default Faq;



const Opiniones = styled.div`
    width: 100%;
    padding-top: 8rem;
    display: flex;
    justify-content: center;
    align-items: center;
    @media only screen and (max-width: 1024px) {
        padding: 8rem 0 0rem 0 ;
    }
    .content{
        width: 60%;
        margin: auto;
        z-index: 2;
        position: relative;
        @media only screen and (max-width: 1540px) {
            width: 74%;
        }
        @media only screen and (max-width: 1024px) {
            width: 90%;
        }

        .container-text{
            width: 100%;
            margin-bottom: 2rem;
            @media only screen and (max-width: 920px){
                width: 100%;
                text-align: center;
            }
            span{
                color: #00b1ff;
                text-transform: uppercase;
                font-size: 1.2rem;
                font-weight: 600;
                text-align: end;
            }

        }

        .container-cards{
            display: flex;
            justify-content: space-between;
            align-items: center;
            gap: 1rem;
            @media only screen and (max-width: 920px){
                flex-direction: column;
            }


            .card{
                max-height: 24rem;
                height: 24rem;
                display: flex;
                width: 30rem;
                justify-content: center;
                align-items: center;
                box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;
                @media only screen and (max-width: 920px){
                    max-height: 18rem;
                    height: 18rem;
                    width: auto;
                }

                img{
                    width: 12rem;
                    padding: 1rem;
                }

                span{
                    margin: 1rem 0;
                    font-size: 1.4rem;
                    font-weight: 600;
                }

                p{
                    text-align: center;
                    padding: 0 1rem;
                }
            }
        }


    }
`