import styled from 'styled-components';
import logo from '../../imagenes/Logotipo.webp';
import { Link } from 'react-router-dom';

function Footer() {
    return (
        <FooterContainer>
            <div className='content'>
                <div className='container-columnas'>
                    <div className='primeraYSegundaColumna'>
                        <div className='container-primera'>
                            <div className='logo'>
                                <img
                                    alt="logo-doconline"
                                    src={logo}
                                    width="100"
                                    className="d-inline-block align-center"
                                />
                                <p><span>DOC.</span>Online</p>
                            </div>
                            <p>Cuidando tu salud <br /> estés donde estés.</p>
                        </div>
                        <div className='container-segunda'>
                            <ul>
                                <li><a href="#como-funciona">Como Funciona</a></li>
                                <li><a href="#nosotros">Nosotros</a></li>
                                <li><a href="#atencion-distancia">Servicio a Distancia</a></li>
                                <li><a href="#renovacion">Renovación</a></li>
                                <li><a href="#acceso">Acceso</a></li>
                                <li><a href="#uso-practico">Uso Práctico</a></li>
                                <li><a href="#preguntas">Preguntas frencuentes</a></li>
                                <li><Link to={'/costosServicios'}>Precios</Link></li>
                            </ul>
                        </div>
                    </div>
                    {/* <div className='terceraYCuertaColumna'>
                        <div className='container-tercera'>
                            <ul>
                                <li className='titulo'>Cliente</li>
                                <li>Acceso</li>
                                <li>Centro de ayuda</li>
                            </ul>
                        </div>
                        <div className='container-tercera'>
                            <ul>
                                <li className='titulo'>Trabajá con nosotros</li>
                                <li>Registro de Ayuda Médica</li>
                            </ul>
                        </div>
                    </div> */}
                </div>
            </div>
            <div className='copy-mineris'>
                <p>© 2023</p>
                <a href='https://mineris.com.ar/' target='__blank' className='mineris'><strong>Mineris</strong></a>
                <p>Todos los derechos reservados.</p>
            </div>
        </FooterContainer>
    );
}

export default Footer;

const FooterContainer = styled.div`
    width: 100%;
    background: white;
    background-color: #f9f9f9;
    @media only screen and (max-width: 920px){
        padding: 5rem 0 2rem 0;
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
            width: 85%;
        }

        .container-columnas{
            display: flex;
            flex-direction: row;
            width: 100%;
            @media only screen and (max-width: 920px){
                flex-direction: column; 
                align-self: flex-start;

                gap: 2rem;
            }
            .primeraYSegundaColumna{
                display: flex;
                width: 50%;
                justify-content: space-evenly;
                @media only screen and (max-width: 920px){
                    width: 90%;
                    margin: auto;
                    justify-content: space-between;
                }
                @media only screen and (max-width: 540px){
                    flex-direction: column;
                }

                .container-primera{
                    @media only screen and (max-width: 540px){
                        margin: 0 0 0 2rem;
                    }
                    .logo{
                        display: flex;
                        align-items: center;
                        gap: 1rem;
                        margin-bottom: 1rem;
                        img{
                            width: 4rem;
                            height: auto;
                        }
                        p{
                            margin: auto;
                            font-size: 1.6rem;
                            @media only screen and (max-width: 540px){
                                margin: auto 0;
                            }
                            span{
                                font-weight: bold;
                            }
                        }
                    }
                    p{
                        font-size: 1.1rem;
                        font-weight: 400;
                    }
                }

                .container-segunda{
                    ul{
                        .titulo{
                            font-weight: bold;
                            margin-bottom: 2rem;
                            font-size: 1.2rem;
                            &:hover{
                                color: #595959;
                            }
                        }
                        li{
                            font-size: 1.2rem;
                            list-style: none;
                            margin: .6rem 0;
                            font-weight: 400;
                            transition: all .4s;
                            cursor: pointer;
                            a{
                                color: #595959;
                                transition: all .4s;
                                &:hover{
                                    color: #00b1ff;;
                                }
                            }
                        }
                    }
                }
            }

            .terceraYCuertaColumna{
                display: flex;
                width: 50%;
                justify-content: space-evenly;
                @media only screen and (max-width: 920px){
                    width: 90%;
                    margin: auto;
                    justify-content: space-between;
                }
                @media only screen and (max-width: 540px){
                    flex-direction: column;
                }

                .container-segunda, .container-tercera ul .titulo{
                    font-weight: bold;
                    margin-bottom: 2rem;
                    font-size: 1.2rem;
                    &:hover{
                        color: #595959;
                    }
                }

                .container-segunda, .container-tercera ul li{
                    font-size: 1.2rem;
                    list-style: none;
                    margin: .6rem 0;
                    font-weight: 400;
                    transition: all .4s;
                    cursor: pointer;
                    &:hover{
                        color: #00b1ff;
                    }
                }
            }

        }
    }

    .copy-mineris{
        width: 100%;
        display: flex;
        justify-content: center;
        gap: .4rem;
        margin-top: 2rem;

        .mineris{
            color: #00b1ff;
        }
    }
    
    
`