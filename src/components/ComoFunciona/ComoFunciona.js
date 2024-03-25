import styled from 'styled-components';
import { motion } from "framer-motion";


function ComoFunciona() {

    return (
        <>
            <ContenedorComoFunciona id='como-funciona'>
                <div className='content'>
                    <motion.div
                        initial={{ opacity: 0, x: -10 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: .8 }}
                        exit={{ opacity: 0 }}
                        className='container-text'
                    >
                        <span>Te contamos en que consiste el servicio</span>
                        <h3>Como funciona</h3>
                    </motion.div>
                    <motion.div
                        initial={{ opacity: 0, x: 10 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: .8 }}
                        exit={{ opacity: 0 }}
                        className='container-pasos'
                    >
                        <div className='card'>
                            <svg width="40" height="40" fill="currentColor" class="bi bi-calendar-check" viewBox="0 0 16 16"><path d="M10.854 7.146a.5.5 0 0 1 0 .708l-3 3a.5.5 0 0 1-.708 0l-1.5-1.5a.5.5 0 1 1 .708-.708L7.5 9.793l2.646-2.647a.5.5 0 0 1 .708 0" /><path d="M3.5 0a.5.5 0 0 1 .5.5V1h8V.5a.5.5 0 0 1 1 0V1h1a2 2 0 0 1 2 2v11a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V3a2 2 0 0 1 2-2h1V.5a.5.5 0 0 1 .5-.5M1 4v10a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1V4z" /></svg>
                            <span>Sacar turno</span>
                            <p>Una vez solicitado el turno y abonada la consulta el Dr. te llamará en el horario asignado.</p>
                        </div>
                        <div className='card'>
                            <svg width="40" height="40" fill="currentColor" class="bi bi-person-check" viewBox="0 0 16 16"><path d="M12.5 16a3.5 3.5 0 1 0 0-7 3.5 3.5 0 0 0 0 7m1.679-4.493-1.335 2.226a.75.75 0 0 1-1.174.144l-.774-.773a.5.5 0 0 1 .708-.708l.547.548 1.17-1.951a.5.5 0 1 1 .858.514M11 5a3 3 0 1 1-6 0 3 3 0 0 1 6 0M8 7a2 2 0 1 0 0-4 2 2 0 0 0 0 4" /><path d="M8.256 14a4.5 4.5 0 0 1-.229-1.004H3c.001-.246.154-.986.832-1.664C4.484 10.68 5.711 10 8 10q.39 0 .74.025c.226-.341.496-.65.804-.918Q8.844 9.002 8 9c-5 0-6 3-6 4s1 1 1 1z" /></svg>
                            <span>Validas tu identidad</span>
                            <p>Descargando la app "Mi Argentina" deberas validar tu identidad con DNI y foto selfie.</p>
                        </div>
                        <div className='card'>
                            <svg width="40" height="40" fill="currentColor" class="bi bi-r-circle" viewBox="0 0 16 16"><path d="M1 8a7 7 0 1 0 14 0A7 7 0 0 0 1 8m15 0A8 8 0 1 1 0 8a8 8 0 0 1 16 0M5.5 4.002h3.11c1.71 0 2.741.973 2.741 2.46 0 1.138-.667 1.94-1.495 2.24L11.5 12H9.98L8.52 8.924H6.836V12H5.5zm1.335 1.09v2.777h1.549c.995 0 1.573-.463 1.573-1.36 0-.913-.596-1.417-1.537-1.417z" /></svg>
                            <span>Reprocann web</span>
                            <p>Te registras en la <a href='https://reprocann.msal.gob.ar'>web Reprocann del gobierno.</a></p>
                        </div>
                        <div className='card'>
                            <svg width="40" height="40" fill="currentColor" class="bi bi-pencil" viewBox="0 0 16 16"><path d="M12.146.146a.5.5 0 0 1 .708 0l3 3a.5.5 0 0 1 0 .708l-10 10a.5.5 0 0 1-.168.11l-5 2a.5.5 0 0 1-.65-.65l2-5a.5.5 0 0 1 .11-.168zM11.207 2.5 13.5 4.793 14.793 3.5 12.5 1.207zm1.586 3L10.5 3.207 4 9.707V10h.5a.5.5 0 0 1 .5.5v.5h.5a.5.5 0 0 1 .5.5v.5h.293zm-9.761 5.175-.106.106-1.528 3.821 3.821-1.528.106-.106A.5.5 0 0 1 5 12.5V12h-.5a.5.5 0 0 1-.5-.5V11h-.5a.5.5 0 0 1-.468-.325" /></svg>
                            <span>Doc.Online web</span>
                            <p>Te registras en nuestra web para que el medico pueda completar tus datos en la historia clinica.</p>
                        </div>
                        <div className='card'>
                            <svg width="40" height="40" fill="currentColor" class="bi bi-hospital" viewBox="0 0 16 16"><path d="M8.5 5.034v1.1l.953-.55.5.867L9 7l.953.55-.5.866-.953-.55v1.1h-1v-1.1l-.953.55-.5-.866L7 7l-.953-.55.5-.866.953.55v-1.1zM13.25 9a.25.25 0 0 0-.25.25v.5c0 .138.112.25.25.25h.5a.25.25 0 0 0 .25-.25v-.5a.25.25 0 0 0-.25-.25zM13 11.25a.25.25 0 0 1 .25-.25h.5a.25.25 0 0 1 .25.25v.5a.25.25 0 0 1-.25.25h-.5a.25.25 0 0 1-.25-.25zm.25 1.75a.25.25 0 0 0-.25.25v.5c0 .138.112.25.25.25h.5a.25.25 0 0 0 .25-.25v-.5a.25.25 0 0 0-.25-.25zm-11-4a.25.25 0 0 0-.25.25v.5c0 .138.112.25.25.25h.5A.25.25 0 0 0 3 9.75v-.5A.25.25 0 0 0 2.75 9zm0 2a.25.25 0 0 0-.25.25v.5c0 .138.112.25.25.25h.5a.25.25 0 0 0 .25-.25v-.5a.25.25 0 0 0-.25-.25zM2 13.25a.25.25 0 0 1 .25-.25h.5a.25.25 0 0 1 .25.25v.5a.25.25 0 0 1-.25.25h-.5a.25.25 0 0 1-.25-.25z" /><path d="M5 1a1 1 0 0 1 1-1h4a1 1 0 0 1 1 1v1a1 1 0 0 1 1 1v4h3a1 1 0 0 1 1 1v7a1 1 0 0 1-1 1H1a1 1 0 0 1-1-1V8a1 1 0 0 1 1-1h3V3a1 1 0 0 1 1-1zm2 14h2v-3H7zm3 0h1V3H5v12h1v-3a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1zm0-14H6v1h4zm2 7v7h3V8zm-8 7V8H1v7z" /></svg>
                            <span>Atención médica</span>
                            <p>En el día y horario asignado del turno realizaremos la consulta vía WhatsApp.</p>
                        </div>
                        <div className='card'>
                            <svg width="40" height="40" fill="currentColor" class="bi bi-whatsapp" viewBox="0 0 16 16"><path d="M13.601 2.326A7.85 7.85 0 0 0 7.994 0C3.627 0 .068 3.558.064 7.926c0 1.399.366 2.76 1.057 3.965L0 16l4.204-1.102a7.9 7.9 0 0 0 3.79.965h.004c4.368 0 7.926-3.558 7.93-7.93A7.9 7.9 0 0 0 13.6 2.326zM7.994 14.521a6.6 6.6 0 0 1-3.356-.92l-.24-.144-2.494.654.666-2.433-.156-.251a6.56 6.56 0 0 1-1.007-3.505c0-3.626 2.957-6.584 6.591-6.584a6.56 6.56 0 0 1 4.66 1.931 6.56 6.56 0 0 1 1.928 4.66c-.004 3.639-2.961 6.592-6.592 6.592m3.615-4.934c-.197-.099-1.17-.578-1.353-.646-.182-.065-.315-.099-.445.099-.133.197-.513.646-.627.775-.114.133-.232.148-.43.05-.197-.1-.836-.308-1.592-.985-.59-.525-.985-1.175-1.103-1.372-.114-.198-.011-.304.088-.403.087-.088.197-.232.296-.346.1-.114.133-.198.198-.33.065-.134.034-.248-.015-.347-.05-.099-.445-1.076-.612-1.47-.16-.389-.323-.335-.445-.34-.114-.007-.247-.007-.38-.007a.73.73 0 0 0-.529.247c-.182.198-.691.677-.691 1.654s.71 1.916.81 2.049c.098.133 1.394 2.132 3.383 2.992.47.205.84.326 1.129.418.475.152.904.129 1.246.08.38-.058 1.171-.48 1.338-.943.164-.464.164-.86.114-.943-.049-.084-.182-.133-.38-.232" /></svg>
                            <span>Vinculación lista</span>
                            <p>En las próximas 24hs hábiles después del turno, te notificaremos cuando tu vinculación este realizada y te guiaremos paso a paso para que la puedas ver desde tu cuenta en <a href='https://reprocann.msal.gob.ar'>https://reprocann.msal.gob.ar</a></p>
                        </div>
                    </motion.div>
                </div>
            </ContenedorComoFunciona>
        </>
    );
}

export default ComoFunciona;

const ContenedorComoFunciona = styled.div`
    width: 100%;
    background: white;
    padding: 6rem 0;
    margin: 16rem 0 0 0;
    @media only screen and (max-width: 920px){
        margin: 9rem 0 0 0;
        padding: 5rem 0 2rem 0;
    }
    .content{
        width: 60%;
        display: flex;
        flex-direction: column;
        margin: 0 auto;
        @media only screen and (max-width: 1540px) {
            width: 74%;
        }
        @media only screen and (max-width: 1024px) {
            width: 90%;
        }
        @media only screen and (max-width: 920px){
            flex-direction: column;
            justify-content: center;
        }

        .container-text{
            width: 100%;
            text-align: center;

            span{
                color: #00b1ff;
                text-transform: uppercase;
                font-size: 1.2rem;
                font-weight: 600;
                text-align: end;
            }
            h3{
                font-weight: 600;
                font-size: 1.8rem;
                margin-top: 3rem;
                margin-bottom: 4rem;
            }

        }
        .container-pasos{
            width: 100%;
            display: grid;
            grid-template-columns: repeat(3, 1fr);
            grid-template-rows: repeat(2, 1fr);
            grid-column-gap: 1rem;
            grid-row-gap: 1rem;

            @media only screen and (max-width: 1540px) {
                grid-template-columns: repeat(2, 1fr);
            }
            @media only screen and (max-width: 920px) {
                grid-template-columns: repeat(1, 1fr);
            }


            .card{
                padding: 2rem;
                display: flex;
                justify-content: center;
                align-items: center;
                box-shadow: 0 0 8px rgba(0,0,0,.2);
                border: none;

                @media only screen and (max-width: 920px) {
                    padding: 1rem;
                }

                svg{
                    margin: 1rem 0;
                    color: #00b1ff;
                }
                span{
                    text-transform: uppercase;
                    font-weight: 500;
                }
                p{
                    text-align: center;
                    margin-top: 1rem;
                }
                a{
                    color: #00b1ff;
                }
            }


        }
    }
`

