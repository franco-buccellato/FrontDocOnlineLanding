import styled from 'styled-components';
import doctor from '../../imagenes/doctor.webp';
import { motion } from "framer-motion"

function QuinesSomos() {
    return (
        <QuienesSomosContainer id='nosotros'>
            <motion.div
                        initial={{ opacity: 0, x: -10 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: .8 }}
                        exit={{ opacity: 0 }}
                        className='content'
                >
                <div className='img-container'>
                    <img
                        alt="img-doctor"
                        src={doctor}
                    />
                </div>
                <div className='text-container'>
                    <h4>¿Quiénes somos?</h4>
                    <p className='text-1'>Somos una clinica online de cannabis medicinal.</p>
                    <p>Educamos a nuestros pacientes sobre las diferentes opciones de tratamientos para mejorar su calidad de vida.</p>
                    <p>Nuestro equipo de profesionales está capacitado para brindarte el asesoramiento personalizado que necesitas para registrarte en el Programa de cannabis medicinal (Reprocann).</p>
                </div>
            </motion.div>
        </QuienesSomosContainer>

    );
}

export default QuinesSomos;

const QuienesSomosContainer = styled.div`
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    @media only screen and (max-width: 1324px) {
        padding: 8rem 0 0rem 0 ;
    }
    @media only screen and (max-width: 1024px) {
        padding: 0rem 0 0rem 0 ;
    }
    .content{
        width: 60%;
        margin: auto;
        z-index: 2;
        display: flex;
        justify-content: center;
        align-items: center;
        @media only screen and (max-width: 1324px) {
            flex-direction: column;

            .img-container{
                display: none;
            }

            .text-container{
                
                h4{
                    text-align: center;
                }

                p{
                    text-align: center;
                }
            }

        }
        @media only screen and (max-width: 1540px) {
            width: 74%;
        }
        @media only screen and (max-width: 1024px) {
            width: 90%;
        }

        .img-container{
            background-color: white;
            padding: 3rem 1rem;
            box-shadow: 0 0 8px rgba(0,0,0,.2);
            border-radius: 22px 0 0 22px;
            img{
                width: 26rem;
            }
        }

        .text-container{
            background-color: white;
            padding: 4rem 2rem ;
            border-radius: 12px;
            box-shadow: rgba(0, 0, 0, 0.15) 1.95px 1.95px 2.6px;

            h4{
                font-size: 1.6rem;
                font-weight: bold;
            }
            .text-1{
                margin-top: 2rem;
            }
            p{
                font-size: 1.2rem;
                font-weight: 600;
            }
        }
        
    }

`