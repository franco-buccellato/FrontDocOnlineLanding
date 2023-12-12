import styled from 'styled-components';
import imgCard01 from '../../imagenes/beneficios-card-1.png';
import imgCard02 from '../../imagenes/beneficios-card-2.png';
import imgCard03 from '../../imagenes/beneficios-card-3.png';
import { motion } from "framer-motion"

function CalidadYBeneficios() {
    return (
        <Calidad id='nosotros'>
            <div className='fondoBlanco'></div>
            <div className='content'>
                <motion.div
                        initial={{ opacity: 0, x: -120 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: .8 }}
                        exit={{ opacity: 0 }}
                        className='title-content'
                >
                    <span>consultas de calidad</span>
                    <p>Doc.Online simplificará tu vida!</p>
                </motion.div>
                <motion.div
                        initial={{ opacity: 0, x: 120 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: .8 }}
                        exit={{ opacity: 0 }}
                        className='cards-content'
                >
                    <div className='card-info'>
                        <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" fill="currentColor" className="bi bi-calendar3" viewBox="0 0 16 16"><path d="M14 0H2a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2zM1 3.857C1 3.384 1.448 3 2 3h12c.552 0 1 .384 1 .857v10.286c0 .473-.448.857-1 .857H2c-.552 0-1-.384-1-.857V3.857z"/><path d="M6.5 7a1 1 0 1 0 0-2 1 1 0 0 0 0 2zm3 0a1 1 0 1 0 0-2 1 1 0 0 0 0 2zm3 0a1 1 0 1 0 0-2 1 1 0 0 0 0 2zm-9 3a1 1 0 1 0 0-2 1 1 0 0 0 0 2zm3 0a1 1 0 1 0 0-2 1 1 0 0 0 0 2zm3 0a1 1 0 1 0 0-2 1 1 0 0 0 0 2zm3 0a1 1 0 1 0 0-2 1 1 0 0 0 0 2zm-9 3a1 1 0 1 0 0-2 1 1 0 0 0 0 2zm3 0a1 1 0 1 0 0-2 1 1 0 0 0 0 2zm3 0a1 1 0 1 0 0-2 1 1 0 0 0 0 2z"/></svg>
                        <p>Servicio disponible las 24 horas, los 7 días de la semana</p>
                    </div>
                    <div className='card-info'>
                        <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" fill="currentColor" className="bi bi-card-checklist" viewBox="0 0 16 16"><path d="M14.5 3a.5.5 0 0 1 .5.5v9a.5.5 0 0 1-.5.5h-13a.5.5 0 0 1-.5-.5v-9a.5.5 0 0 1 .5-.5h13zm-13-1A1.5 1.5 0 0 0 0 3.5v9A1.5 1.5 0 0 0 1.5 14h13a1.5 1.5 0 0 0 1.5-1.5v-9A1.5 1.5 0 0 0 14.5 2h-13z"/><path d="M7 5.5a.5.5 0 0 1 .5-.5h5a.5.5 0 0 1 0 1h-5a.5.5 0 0 1-.5-.5zm-1.496-.854a.5.5 0 0 1 0 .708l-1.5 1.5a.5.5 0 0 1-.708 0l-.5-.5a.5.5 0 1 1 .708-.708l.146.147 1.146-1.147a.5.5 0 0 1 .708 0zM7 9.5a.5.5 0 0 1 .5-.5h5a.5.5 0 0 1 0 1h-5a.5.5 0 0 1-.5-.5zm-1.496-.854a.5.5 0 0 1 0 .708l-1.5 1.5a.5.5 0 0 1-.708 0l-.5-.5a.5.5 0 0 1 .708-.708l.146.147 1.146-1.147a.5.5 0 0 1 .708 0z"/></svg>
                        <p>Agilidad en la atención y tratamiento del paciente</p>
                    </div>
                    <div className='card-info'>
                    <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" fill="currentColor" className="bi bi-chat-dots" viewBox="0 0 16 16"><path d="M5 8a1 1 0 1 1-2 0 1 1 0 0 1 2 0zm4 0a1 1 0 1 1-2 0 1 1 0 0 1 2 0zm3 1a1 1 0 1 0 0-2 1 1 0 0 0 0 2z"/><path d="m2.165 15.803.02-.004c1.83-.363 2.948-.842 3.468-1.105A9.06 9.06 0 0 0 8 15c4.418 0 8-3.134 8-7s-3.582-7-8-7-8 3.134-8 7c0 1.76.743 3.37 1.97 4.6a10.437 10.437 0 0 1-.524 2.318l-.003.011a10.722 10.722 0 0 1-.244.637c-.079.186.074.394.273.362a21.673 21.673 0 0 0 .693-.125zm.8-3.108a1 1 0 0 0-.287-.801C1.618 10.83 1 9.468 1 8c0-3.192 3.004-6 7-6s7 2.808 7 6c0 3.193-3.004 6-7 6a8.06 8.06 0 0 1-2.088-.272 1 1 0 0 0-.711.074c-.387.196-1.24.57-2.634.893a10.97 10.97 0 0 0 .398-2z"/></svg>
                        <p>Facilidad de acceso y mayor seguridad</p>
                    </div>
                </motion.div>
                <motion.div
                        initial={{ opacity: 0, x: -120 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: .8 }}
                        exit={{ opacity: 0 }}
                        className='secondTitle-content'
                >
                    <span>asequible y funcional</span>
                    <p className='second-title'>Conozca los Beneficios</p>
                    <p className='second-subtitle'>Entérate cuáles son las razones para unirte a nuestra plataforma online,dejando tu salud al día y ahorrando mucho de una forma ágil y práctica.</p>
                </motion.div>
                <motion.div
                        initial={{ opacity: 0, x: 120 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: .8 }}
                        exit={{ opacity: 0 }}
                        className='secondCards-content'
                >
                    <div className='second-card-info'>
                        <img
                            alt="img-medico"
                            src={imgCard01}
                        />
                        <span className='second-card-title'>Accesibilidad</span>
                        <p>El servicio online garantizada que las consultas se realicen estés donde estés. <br /> <span>Doc.</span>Online permite el acceso desde la comodidad de su hogar</p>
                    </div>
                    <div className='second-card-info'>
                        <img
                            alt="img-tiempo"
                            src={imgCard02}
                        />
                        <span className='second-card-title'>Economía y calidad</span>
                        <p>Las citas con programación en línea ayudan a evitar el estrés innecesario. Evita desplazamientos, ahorra papel y otros gastos.</p>
                    </div>
                    <div className='second-card-info'>
                        <img
                            alt="img-calendario"
                            src={imgCard03}
                        />
                        <span className='second-card-title'>Recordatorio de citas</span>
                        <p>El control de la gestión de horarios se flexibiliza, facilitando así el seguimiento de cada cita. El sistema enviará recordatorios de fecha y hora a cada paciente.</p>
                    </div>
                </motion.div>
            </div>
        </Calidad>

    );
}

export default CalidadYBeneficios;

const Calidad = styled.div`
    width: 100%;
    padding-top: 18rem;
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
        .title-content{

            span{
                color: #00b1ff;
                text-transform: uppercase;
                font-size: 1.2rem;
                font-weight: 600;

            }
            p{
                font-weight: 600;
                font-size: 1.5rem;
                margin-top: 3rem;
            }
            @media only screen and (max-width: 1024px) {
                display: flex;
                justify-content: center;
                align-items: center;
                flex-direction: column;
                span,p{
                    text-align: center;
                }
            }
        }
        .cards-content{
            margin: 8rem 0;
            display: flex;
            flex-direction: row;
            align-items: center;
            justify-content: space-between;
            padding: 0 1rem;
            gap: 1rem;
            @media only screen and (max-width: 1024px) {
                flex-direction: column;
                margin: 4rem 0 0 0;
            }
            
            .card-info{
                height: 10rem;
                width: 18rem;
                border-radius: 20px;
                display: flex;
                justify-content: center;
                flex-direction: column;
                align-items: center;
                svg{
                    color: #00b1ff;
                    margin-bottom: 2rem;
                }
                p{
                    text-align: center;
                    font-size: 1.2rem;
                    font-weight: 600;
                }
            }
        }
        .secondTitle-content{
            display: flex;
            justify-content: center;
            align-items: center;
            flex-direction: column;
            span{
                color: #00b1ff;
                text-transform: uppercase;
                font-size: 1.2rem;
                font-weight: 600;
                margin: auto;
            }
            .second-title{
                font-size: 1.6rem;
                font-weight: bold;
                margin: 4rem 0;
            }
            .second-subtitle{
                font-size: 1.2rem;
                font-weight: 600;
                width: 60%;
                text-align: center;
                @media only screen and (max-width: 1540px) {
                    width: 96%;
                }
            }
        }
        .secondCards-content{
            display: flex;
            justify-content: space-between;
            align-items: center;
            flex-direction: row;
            margin: 8rem 0;
            gap: 2% ;
            @media only screen and (max-width: 1024px) {
                flex-direction: column;
                row-gap: 2rem;
                margin: 4rem 0;
            }
            .second-card-info{
                min-height: 26rem;
                max-height: 26rem;
                width: 32%;
                padding: 0 1rem;
                box-shadow: 0 0 8px rgba(0,0,0,.2);
                border-radius: 10px;
                background-color: white;
                display: flex;
                justify-content: center;
                align-items: center;
                flex-direction: column;
                @media only screen and (max-width: 1540px) {
                    padding: 1rem;
                    min-height: 22rem;
                    max-height: 22rem;
                }
                @media only screen and (max-width: 1024px) {
                    width: 100%;
                }
                img{
                    min-height: 10rem;
                    max-height: 10rem;
                    max-width: 10rem;
                    min-width: 10rem;
                    @media only screen and (max-width: 1540px) {
                        min-height: 6rem;
                        max-height: 6rem;
                        max-width: 6rem;
                        min-width: 6rem;
                    }
                }
                .second-card-title{
                    font-weight: 600;
                    font-size: 1.2rem;
                    margin: 1.6rem 0;
                    text-align: center;
                }
                p{
                    font-size: 1rem;
                    text-align: center;
                    font-weight: 500;
                }
            }
        }
    }

    .fondoBlanco{
        height: 152vh;
        width: 80vw;
        background-color: white;
        position: absolute;
        z-index: 2;
        top: 100vh;
        right: auto;
        margin: auto;
        border-radius: 10%;
        transform: rotate(174deg);
        @media only screen and (max-width: 1540px) {
            height: 146vh;
            width: 88vw;
        }
        @media only screen and (max-width: 1300px) {
            height: 148vh;
            width: 86vw;
        }  
        @media only screen and (max-width: 1100px) {
            transform: rotate(180deg);
            height: 142vh;
            width: 90vw;
        }    
        @media only screen and (max-width: 1024px) {
            display: none;
        }
    }
`