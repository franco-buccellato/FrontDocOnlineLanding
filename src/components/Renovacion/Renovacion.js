import styled from 'styled-components';
import { motion } from "framer-motion";


function Renovacion() {

    return (
        <>
            <ContenedorComoFunciona id='renovacion'>
                <div className='content'>
                    <motion.div
                        initial={{ opacity: 0, x: -10 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: .8 }}
                        exit={{ opacity: 0 }}
                        className='container-text'
                    >
                        <span>Renová tu permiso</span>
                        <h3>Renovación</h3>
                        <p>Te contamos como renovar tu permiso de cultivo y transporte!</p>
                    </motion.div>

                </div>


                <div className='container-video'>
                    <iframe src="https://www.youtube.com/embed/RIz5DJ9l9ek" allow="fullscreen" allowFullScreen="" style={{ minHeight: 'auto', height: '100%', transform: 'none', width: '100%', borderRadius: '10px' }}></iframe>
                </div>
                <svg  viewBox="0 0 1440 320"><path fill="#e8e8ed" fill-opacity="1" d="M0,224L120,208C240,192,480,160,720,149.3C960,139,1200,149,1320,154.7L1440,160L1440,320L1320,320C1200,320,960,320,720,320C480,320,240,320,120,320L0,320Z"></path></svg>
            </ContenedorComoFunciona>

        </>

    );
}

export default Renovacion;

const ContenedorComoFunciona = styled.div`
    width: 100%;
    background: white;
    padding: 2rem 0 0 0;
    margin: 0 0 0 0;
    @media only screen and (max-width: 920px){
        margin: 0rem 0 0 0;
        padding: 5rem 0 0rem 0;
    }
    .content{
        width: 60%;
        display: flex;
        margin: 0 auto;
        gap: 10%;
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
            @media only screen and (max-width: 1024px){
                text-align: center;
            }
            span{
                color: #00b1ff;
                text-transform: uppercase;
                font-size: 1.2rem;
                font-weight: 600;

            }
            h3{
                font-weight: 600;
                font-size: 1.8rem;
                margin-top: 3rem;
                margin-bottom: 2rem;
            }
            p{

                font-size: 1.2rem;
                font-weight: 600;
            }

        }
        .container-pasos{
            width: 50%;
            display: flex;
            flex-direction: column;
            @media only screen and (max-width: 920px){
                width: 100%;
                text-align: center;
                display: grid;
                grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
            }
            .paso2, .paso4{
                margin-left: auto;
                @media only screen and (max-width: 920px){
                    margin: auto;
                }
            }
            .paso2, .paso3, .paso4, .paso5{
                margin-top: -2rem;
                @media only screen and (max-width: 920px){
                    margin-top: 0;
                }
            }
            .pasos{
                .cuadradoFondo{
                    width: 8rem;
                    height: 8rem;
                    background-color: #f1f1f3;
                    border-radius: 16%;
                    position: absolute;
                    z-index: 1;
                    margin-top: -120px;
                    margin-left: -20px;
                    transform: rotate(340deg);
                    @media only screen and (max-width: 920px){
                        display: none;
                    }
                }
                span{
                    position: relative;
                    font-size: 2.8rem;
                    color: #00b1ff;
                    font-weight: bold;
                    z-index: 2;
                }
                p{
                    position: relative;
                    font-size: 1.2rem;
                    font-weight: 600;
                    z-index: 2;
                }
            }

        }
    }
    .container-video{
        width: 60%;
        display: flex;
        margin: 5rem auto 1rem auto;
        height: 30rem;

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
    }
`
