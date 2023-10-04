import styled from 'styled-components';
import imgCard01 from '../../imagenes/beneficios-card-1.png';
import imgCard02 from '../../imagenes/beneficios-card-2.png';
import imgCard03 from '../../imagenes/beneficios-card-3.png';




function CalidadYBeneficios() {
    return (

        <Calidad>
            <div className='fondoBlanco'></div>
            <div className='content'>
                <div className='title-content'>
                    <span>consultas de calidad</span>
                    <p>Doc.Online simplificará tu vida!</p>
                </div>

                <div className='cards-content'>
                    <div className='card-info'>
                        <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" fill="currentColor" class="bi bi-calendar3" viewBox="0 0 16 16"><path d="M14 0H2a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2zM1 3.857C1 3.384 1.448 3 2 3h12c.552 0 1 .384 1 .857v10.286c0 .473-.448.857-1 .857H2c-.552 0-1-.384-1-.857V3.857z"/><path d="M6.5 7a1 1 0 1 0 0-2 1 1 0 0 0 0 2zm3 0a1 1 0 1 0 0-2 1 1 0 0 0 0 2zm3 0a1 1 0 1 0 0-2 1 1 0 0 0 0 2zm-9 3a1 1 0 1 0 0-2 1 1 0 0 0 0 2zm3 0a1 1 0 1 0 0-2 1 1 0 0 0 0 2zm3 0a1 1 0 1 0 0-2 1 1 0 0 0 0 2zm3 0a1 1 0 1 0 0-2 1 1 0 0 0 0 2zm-9 3a1 1 0 1 0 0-2 1 1 0 0 0 0 2zm3 0a1 1 0 1 0 0-2 1 1 0 0 0 0 2zm3 0a1 1 0 1 0 0-2 1 1 0 0 0 0 2z"/></svg>
                        <p>Servicio disponible las 24 horas, los 7 días de la semana</p>
                    </div>
                    <div className='card-info'>
                        <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" fill="currentColor" class="bi bi-card-checklist" viewBox="0 0 16 16"><path d="M14.5 3a.5.5 0 0 1 .5.5v9a.5.5 0 0 1-.5.5h-13a.5.5 0 0 1-.5-.5v-9a.5.5 0 0 1 .5-.5h13zm-13-1A1.5 1.5 0 0 0 0 3.5v9A1.5 1.5 0 0 0 1.5 14h13a1.5 1.5 0 0 0 1.5-1.5v-9A1.5 1.5 0 0 0 14.5 2h-13z"/><path d="M7 5.5a.5.5 0 0 1 .5-.5h5a.5.5 0 0 1 0 1h-5a.5.5 0 0 1-.5-.5zm-1.496-.854a.5.5 0 0 1 0 .708l-1.5 1.5a.5.5 0 0 1-.708 0l-.5-.5a.5.5 0 1 1 .708-.708l.146.147 1.146-1.147a.5.5 0 0 1 .708 0zM7 9.5a.5.5 0 0 1 .5-.5h5a.5.5 0 0 1 0 1h-5a.5.5 0 0 1-.5-.5zm-1.496-.854a.5.5 0 0 1 0 .708l-1.5 1.5a.5.5 0 0 1-.708 0l-.5-.5a.5.5 0 0 1 .708-.708l.146.147 1.146-1.147a.5.5 0 0 1 .708 0z"/></svg>
                        <p>Agilidad en la atención y tratamiento del paciente</p>
                    </div>
                    <div className='card-info'>
                        <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" fill="currentColor" class="bi bi-chat-left" viewBox="0 0 16 16"><path d="M14 1a1 1 0 0 1 1 1v8a1 1 0 0 1-1 1H4.414A2 2 0 0 0 3 11.586l-2 2V2a1 1 0 0 1 1-1h12zM2 0a2 2 0 0 0-2 2v12.793a.5.5 0 0 0 .854.353l2.853-2.853A1 1 0 0 1 4.414 12H14a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2H2z"/></svg>
                        <p>Facilidad de acceso y mayor seguridad</p>
                    </div>
                </div>

                <div className='secondTitle-content'>
                    <span>asequible y funcional</span>
                    <p className='second-title'>Conozca los Beneficios</p>
                    <p className='second-subtitle'>Entérate cuáles son las razones para unirte a nuestra plataforma online, <br />dejando tu salud al día y ahorrando mucho de una forma ágil y práctica.</p>
                </div>

                <div className='secondCards-content'>
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
                </div>

            </div>

        </Calidad>

    );
}

export default CalidadYBeneficios;

const Calidad = styled.div`
    width: 100%;
    padding: 18rem 0 ;
    display: flex;
    justify-content: center;
    align-items: center;
    .content{
        width: 55%;
        margin: auto;
        z-index: 2;
        position: relative;
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
        }
        .cards-content{
            margin: 8rem 0;
            display: flex;
            flex-direction: row;
            align-items: center;
            justify-content: space-between;
            padding: 0 1rem;
            gap: 1rem;
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
                font-size: 1.8rem;
                font-weight: bold;
                margin: 4rem 0;
            }
            .second-subtitle{
                font-size: 1.2rem;
                font-weight: 600;
                width: 60%;
                text-align: center;
            }
        }
        .secondCards-content{
            display: flex;
            justify-content: space-between;
            align-items: center;
            flex-direction: row;
            margin: 8rem 0;
            gap: 2% ;
            .second-card-info{
                min-height: 28rem;
                max-height: 28rem;
                width: 32%;
                padding: 2rem;
                box-shadow: 0 0 8px rgba(0,0,0,.2);
                border-radius: 10px;
                background-color: white;
                display: flex;
                justify-content: center;
                align-items: center;
                flex-direction: column;
                img{

                    min-height: 10rem;
                    max-height: 10rem;
                    max-width: 10rem;
                    min-width: 10rem;
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
        z-index: 1;
        top: 100vh;
        right: auto;
        margin: auto;
        border-radius: 10%;
        transform: rotate(174deg);
    }

    @media only screen and (max-width: 1540px) {
        .second-subtitle{
                width: 96%;
        }
        .second-card-info{
            img{
                min-height: 6rem;
                max-height: 6rem;
                max-width: 6rem;
                min-width: 6rem;
            }
        }
        .fondoBlanco{
        height: 225vh;
    }
    }
`