import styled from 'styled-components';



function ComoFunciona() {

    return (
        <>
            <Separador />
            <ContenedorComoFunciona id='como-funciona'>
                <div className='content'>
                    <div className='container-text'>
                        <span>agilidad utilizando la plataforma</span>
                        <h3>Como funciona</h3>
                        <p>Conozca cómo funciona para acceder a las pautas de salud remotas y todos los beneficios que brinda el servicio online.</p>
                        <br />
                        <p>¡Sigue las etapas paso a paso y podrás usarlo de una manera práctica y sensilla!</p>
                    </div>
                    <div className='container-pasos'>
                        <div className='pasos paso1'>
                            <span>1.</span>
                            <p>Registrarse e iniciar sesión.<br />¡Es rápido y fácil!</p>
                            <div className='cuadradoFondo'></div>
                        </div>
                        <div className='pasos paso2'>
                            <span>2.</span>
                            <p>Buscar un <br />médico específico</p>
                            <div className='cuadradoFondo'></div>
                        </div>
                        <div className='pasos paso3'>
                            <span>3.</span>
                            <p>Seleccione fecha y <br /> hora para programar</p>
                            <div className='cuadradoFondo'></div>
                        </div>
                        <div className='pasos paso4'>
                            <span>4.</span>
                            <p>Elige la forma <br /> de pago</p>
                            <div className='cuadradoFondo'></div>
                        </div>
                        <div className='pasos paso5'>
                            <span>5.</span>
                            <p>¡Haz tu cita online <br /> sin salir de casa!</p>
                            <div className='cuadradoFondo'></div>
                        </div>
                    </div>
                </div>
                <div className='container-video'>
                    <iframe src="https://www.youtube.com/embed/2EpdYYa5oC8" allow="fullscreen" allowFullScreen="" style={{ minHeight: 'auto', height: '100%', transform: 'none', width: '100%', borderRadius: '10px' }}></iframe>
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
        width: 55%;
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
            width: 40%;
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
            h3{
                font-weight: 600;
                font-size: 1.8rem;
                margin-top: 3rem;
                margin-bottom: 4rem;
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
        width: 55%;
        display: flex;
        margin: 6rem auto 0rem auto;
        height: 28rem;
        width: 55%;
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

const Separador = styled.div`

    width: 100%;
    height: 14rem;
    background: white;
    margin-top: 0;
    z-index: 1;
    -webkit-transform: skewY(5deg) translateY(100px);
    -moz-transform: skewY(5deg) translateY(100px);
    -ms-transform: skewY(5deg) translateY(100px);
    transform: skewY(5deg) translateY(100px);
    position: absolute;

    @media only screen and (max-width: 920px){
        height: 6rem;
    }
`