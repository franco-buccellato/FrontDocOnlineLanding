import styled from 'styled-components';
import Estrellas from '../../imagenes/Opiniones-estrellas.webp';
import { motion } from "framer-motion"
import Accordion from 'react-bootstrap/Accordion';

function QuienesPueden() {
    return (
        <QuienesPuedenContainer>

            <motion.div
                initial={{ opacity: 0, x: -10 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: .8 }}
                exit={{ opacity: 0 }}
                className='content'
            >

                <div className='container-text'>
                    <span>¿Quiénes pueden acceder a REPROCANN?</span>
                    <p>El acceso es para pacientes que deseen mejorar su salud con cannabis. Hay una enorme cantidad de propiedades medicinales que posee la planta y que la hacen una herramienta invaluable para la salud.</p>
                </div>

                <div className='container-cards'>

                    <div className='card'>
                        <div className='card-img'>
                            <svg  fill="currentColor" class="bi bi-check-circle-fill" viewBox="0 0 16 16"><path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0m-3.97-3.03a.75.75 0 0 0-1.08.022L7.477 9.417 5.384 7.323a.75.75 0 0 0-1.06 1.06L6.97 11.03a.75.75 0 0 0 1.079-.02l3.992-4.99a.75.75 0 0 0-.01-1.05z"/></svg>
                        </div>
                        <div className='card-text'>
                            <span>El dolor</span>
                            <p>El uso de cannabinoides en personas que sufren dolor frecuentemente permite disminuir las dosis de opiáceos que se administran estos pacientes. Lo que conlleva no solo un mejor manejo del dolor, sino también una disminución de los efectos secundarios que experimentan y con ello una mejora en su calidad de vida.</p>
                        </div>
                    </div>

                    <div className='card'>
                        <div className='card-img'>
                            <svg  fill="currentColor" class="bi bi-check-circle-fill" viewBox="0 0 16 16"><path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0m-3.97-3.03a.75.75 0 0 0-1.08.022L7.477 9.417 5.384 7.323a.75.75 0 0 0-1.06 1.06L6.97 11.03a.75.75 0 0 0 1.079-.02l3.992-4.99a.75.75 0 0 0-.01-1.05z"/></svg>
                        </div>
                        <div className='card-text'>
                            <span>El insomnio</span>
                            <p>El CBD, cuando se consume antes de dormir, activa el receptor CB1, lo que tiene un impacto significativo en la calidad del sueño. Al activar este receptor, se controla la liberación de neurotransmisores, lo que reduce la inflamación, el dolor y mejora la calidad del sueño.</p>
                        </div>
                    </div>

                    <div className='card'>
                        <div className='card-img'>
                            <svg  fill="currentColor" class="bi bi-check-circle-fill" viewBox="0 0 16 16"><path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0m-3.97-3.03a.75.75 0 0 0-1.08.022L7.477 9.417 5.384 7.323a.75.75 0 0 0-1.06 1.06L6.97 11.03a.75.75 0 0 0 1.079-.02l3.992-4.99a.75.75 0 0 0-.01-1.05z"/></svg>
                        </div>
                        <div className='card-text'>
                            <span>La ansiedad</span>
                            <p>El CBD, un componente del cannabis, tiene efectos preventivos, neuroprotectores y modulador a nivel bioquímico que puede reducir el estrés y la ansiedad, tanto puntuales como crónicos.</p>
                        </div>
                    </div>

                    <div className='card'>
                        <div className='card-img'>
                            <svg  fill="currentColor" class="bi bi-check-circle-fill" viewBox="0 0 16 16"><path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0m-3.97-3.03a.75.75 0 0 0-1.08.022L7.477 9.417 5.384 7.323a.75.75 0 0 0-1.06 1.06L6.97 11.03a.75.75 0 0 0 1.079-.02l3.992-4.99a.75.75 0 0 0-.01-1.05z"/></svg>
                        </div>
                        <div className='card-text'>
                            <span>El estado de ánimo</span>
                            <p>La acción del sistema endocannabinoide parece ser fundamental para regular el estado de ánimo. El CBD posee efectos antidepresivos. Es ampliamente conocida la experiencia de los usuarios de cannabis que lo utilizan para mejorar su estado de ánimo.</p>
                        </div>
                    </div>

                    <div className='card'>
                        <div className='card-img'>
                            <svg  fill="currentColor" class="bi bi-check-circle-fill" viewBox="0 0 16 16"><path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0m-3.97-3.03a.75.75 0 0 0-1.08.022L7.477 9.417 5.384 7.323a.75.75 0 0 0-1.06 1.06L6.97 11.03a.75.75 0 0 0 1.079-.02l3.992-4.99a.75.75 0 0 0-.01-1.05z"/></svg>
                        </div>
                        <div className='card-text'>
                            <span>El apetito</span>
                            <p>La investigación ha revelado que el THC estimula el sistema endocannabinoide, un área compleja del cerebro que regula el comportamiento de alimentación y el equilibrio energético. En este sentido los derivados del cannabis podrían ser útiles en el tratamiento de la anorexia y para aumentar el apetito en pacientes.</p>
                        </div>
                    </div>
                </div>


            </motion.div>

        </QuienesPuedenContainer>
    );
}

export default QuienesPueden;



const QuienesPuedenContainer = styled.div`
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
            p{
                font-size: 1.2rem;
                font-weight: 600;
                margin-top: 2rem;
            }

        }

        .container-cards{
            display: flex;
            justify-content: space-between;
            align-items: center;
            gap: 1rem;
            flex-direction: column;
            @media only screen and (max-width: 920px){
                flex-direction: column;
            }


            .card{
                max-height: 14rem;
                height: 10rem;
                display: flex;
                width: 100%;
                padding: 0rem 2rem;
                gap: 2rem;
                align-items: center;
                flex-direction: row;
                box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;
                @media only screen and (max-width: 920px){
                    max-height: 20rem;
                    height: auto;
                    width: auto;
                    flex-direction: column;
                    padding: 2rem 1rem;
                }

                .card-img{
                    display: flex;
                    justify-content: center;
                    align-items: center;
                    width: 8%;
                    svg{
                        width: 3rem;
                        color: green;
                    }

                    @media only screen and (max-width: 920px){
                        display: none;
                    }
                }

                .card-text{
                    display: flex;
                    justify-content: start;
                    align-items: start;
                    width: 92%;
                    flex-direction: column;

                    @media only screen and (max-width: 920px){
                        justify-content: center;
                        align-items: center;

                        p{
                            text-align: center;
                        }
                    }
                    
                    span{
                        margin: .4rem 0;
                        font-size: 1.4rem;
                        font-weight: 600;
                    }

                    p{
                        margin: 0;
                    }
                }

            }
        }


    }
`