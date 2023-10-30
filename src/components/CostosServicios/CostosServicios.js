import React from 'react'
import { useEffect } from 'react';
import styled from 'styled-components';
import Encabezado from '../Encabezado/Encabezado';



export default function CostosServicios({ setMostrarEncabezado }) {

    useEffect(() => {
        setMostrarEncabezado(false)
    })

    return (


        <ContainerCostos>
            <div className='fondo'></div>

            <button className='button-volver'>
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-arrow-left-circle-fill" viewBox="0 0 16 16"><path d="M8 0a8 8 0 1 0 0 16A8 8 0 0 0 8 0zm3.5 7.5a.5.5 0 0 1 0 1H5.707l2.147 2.146a.5.5 0 0 1-.708.708l-3-3a.5.5 0 0 1 0-.708l3-3a.5.5 0 1 1 .708.708L5.707 7.5H11.5z" /></svg>
                Volver al inicio
            </button>

            <div className='content'>
                <div className='title'>
                    <div>
                        <h1>Tramitá tu permiso tu cultivo y transporte REPROCANN con nosotros</h1>
                    </div>
                </div>
                {/* 
                <div className='tiempo-oferta'>
                        <span>Oferta válida hasta el 02/11/23</span>
                </div> */}

                <div className='container-cards'>

                    <div className='card '>
                        <header>
                            <span className='tipo'>Por primera vez</span>
                            <div className='container-precio'>
                                <span className='signo'>$</span>
                                <span className='precio'>14.400</span>
                                <span className='periodo'>/por 3 años</span>
                            </div>
                        </header>
                        <div className='items'>
                            <ul>
                                <li>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-check-circle-fill" viewBox="0 0 16 16"><path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zm-3.97-3.03a.75.75 0 0 0-1.08.022L7.477 9.417 5.384 7.323a.75.75 0 0 0-1.06 1.06L6.97 11.03a.75.75 0 0 0 1.079-.02l3.992-4.99a.75.75 0 0 0-.01-1.05z" /></svg>
                                    Gestión del trámite de Reprocann.
                                </li>
                                <li>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-check-circle-fill" viewBox="0 0 16 16"><path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zm-3.97-3.03a.75.75 0 0 0-1.08.022L7.477 9.417 5.384 7.323a.75.75 0 0 0-1.06 1.06L6.97 11.03a.75.75 0 0 0 1.079-.02l3.992-4.99a.75.75 0 0 0-.01-1.05z" /></svg>
                                    Consulta médica.
                                </li>
                                <li>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-check-circle-fill" viewBox="0 0 16 16"><path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zm-3.97-3.03a.75.75 0 0 0-1.08.022L7.477 9.417 5.384 7.323a.75.75 0 0 0-1.06 1.06L6.97 11.03a.75.75 0 0 0 1.079-.02l3.992-4.99a.75.75 0 0 0-.01-1.05z" /></svg>
                                    Acompañamiento en el trámite hasta obtener el permiso.
                                </li>
                                <li>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-check-circle-fill" viewBox="0 0 16 16"><path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zm-3.97-3.03a.75.75 0 0 0-1.08.022L7.477 9.417 5.384 7.323a.75.75 0 0 0-1.06 1.06L6.97 11.03a.75.75 0 0 0 1.079-.02l3.992-4.99a.75.75 0 0 0-.01-1.05z" /></svg>
                                    Posibilidad de cultivo de hasta 9 plantas. (Ver ley completa)
                                </li>
                                <li>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-check-circle-fill" viewBox="0 0 16 16"><path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zm-3.97-3.03a.75.75 0 0 0-1.08.022L7.477 9.417 5.384 7.323a.75.75 0 0 0-1.06 1.06L6.97 11.03a.75.75 0 0 0 1.079-.02l3.992-4.99a.75.75 0 0 0-.01-1.05z" /></svg>
                                    Transportá hasta 40 gramos. (Ver ley completa)
                                </li>
                                <li>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-check-circle-fill" viewBox="0 0 16 16"><path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zm-3.97-3.03a.75.75 0 0 0-1.08.022L7.477 9.417 5.384 7.323a.75.75 0 0 0-1.06 1.06L6.97 11.03a.75.75 0 0 0 1.079-.02l3.992-4.99a.75.75 0 0 0-.01-1.05z" /></svg>
                                    Transportá hasta 6 goteros. (Ver ley completa)
                                </li>
                            </ul>
                        </div>
                        <footer>
                            <button>comprar</button>
                        </footer>
                    </div>

                    <div className='card '>
                        <header>
                            <span className='tipo'>Renovación</span>
                            <div className='container-precio'>
                                <span className='signo'>$</span>
                                <span className='precio'>13.400</span>
                                <span className='periodo'>/por 3 años</span>
                            </div>
                        </header>
                        <div className='items'>
                            <ul>
                                <li>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-check-circle-fill" viewBox="0 0 16 16"><path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zm-3.97-3.03a.75.75 0 0 0-1.08.022L7.477 9.417 5.384 7.323a.75.75 0 0 0-1.06 1.06L6.97 11.03a.75.75 0 0 0 1.079-.02l3.992-4.99a.75.75 0 0 0-.01-1.05z" /></svg>
                                    Configuramos tu cuenta de Reprocann por vos.
                                </li>
                                <li>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-check-circle-fill" viewBox="0 0 16 16"><path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zm-3.97-3.03a.75.75 0 0 0-1.08.022L7.477 9.417 5.384 7.323a.75.75 0 0 0-1.06 1.06L6.97 11.03a.75.75 0 0 0 1.079-.02l3.992-4.99a.75.75 0 0 0-.01-1.05z" /></svg>
                                    Gestión del tramite Reprocann.
                                </li>
                                <li>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-check-circle-fill" viewBox="0 0 16 16"><path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zm-3.97-3.03a.75.75 0 0 0-1.08.022L7.477 9.417 5.384 7.323a.75.75 0 0 0-1.06 1.06L6.97 11.03a.75.75 0 0 0 1.079-.02l3.992-4.99a.75.75 0 0 0-.01-1.05z" /></svg>
                                    Consulta médica.
                                </li>
                                <li>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-check-circle-fill" viewBox="0 0 16 16"><path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zm-3.97-3.03a.75.75 0 0 0-1.08.022L7.477 9.417 5.384 7.323a.75.75 0 0 0-1.06 1.06L6.97 11.03a.75.75 0 0 0 1.079-.02l3.992-4.99a.75.75 0 0 0-.01-1.05z" /></svg>
                                    Asesoramiento continúo con nuestro equipo de asistentes por WhatsApp.
                                </li>
                                <li>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-check-circle-fill" viewBox="0 0 16 16"><path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zm-3.97-3.03a.75.75 0 0 0-1.08.022L7.477 9.417 5.384 7.323a.75.75 0 0 0-1.06 1.06L6.97 11.03a.75.75 0 0 0 1.079-.02l3.992-4.99a.75.75 0 0 0-.01-1.05z" /></svg>
                                    Posibilidad de cultivo de hasta 9 plantas. (Ver ley completa)
                                </li>
                                <li>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-check-circle-fill" viewBox="0 0 16 16"><path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zm-3.97-3.03a.75.75 0 0 0-1.08.022L7.477 9.417 5.384 7.323a.75.75 0 0 0-1.06 1.06L6.97 11.03a.75.75 0 0 0 1.079-.02l3.992-4.99a.75.75 0 0 0-.01-1.05z" /></svg>
                                    Transportá hasta 40 gramos. (Ver ley completa)
                                </li>

                                <li>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-check-circle-fill" viewBox="0 0 16 16"><path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zm-3.97-3.03a.75.75 0 0 0-1.08.022L7.477 9.417 5.384 7.323a.75.75 0 0 0-1.06 1.06L6.97 11.03a.75.75 0 0 0 1.079-.02l3.992-4.99a.75.75 0 0 0-.01-1.05z" /></svg>
                                    Transportá hasta 6 goteros. (Ver ley completa)
                                </li>

                                <li>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-check-circle-fill" viewBox="0 0 16 16"><path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zm-3.97-3.03a.75.75 0 0 0-1.08.022L7.477 9.417 5.384 7.323a.75.75 0 0 0-1.06 1.06L6.97 11.03a.75.75 0 0 0 1.079-.02l3.992-4.99a.75.75 0 0 0-.01-1.05z" /></svg>
                                    Te guiamos por llamada telefónica personalizada.
                                </li>
                            </ul>
                        </div>
                        <footer>
                            <button>comprar</button>
                        </footer>
                    </div>





                </div>


            </div>
        </ContainerCostos>
    )
}



const ContainerCostos = styled.div`
    width: 100%;

    .button-volver{
        svg{
            margin-right: 6px;
            margin-bottom: 3px;
        }
        position: absolute;
        left: 20px;
        top: 20px;
        border: 1px solid white;
        border-radius: 10px;
        padding: 6px 10px;
        background:#09c6cf ;
        text-transform: uppercase;
        font-weight: 600;
        font-size: .8rem;
        color: white;
    }
    .fondo{
        height: 40%;
        width: 100%;
        position: absolute;
        z-index: 1;
        bottom: 0px;
        background: #09c6cf;
    }
    .content{
        height: calc(100vh); //se resta el Encabezado
        padding: 1vh 0 1vh 0;
        z-index: 2;
        width: 90%;
        display: flex;
        flex-direction: column;
        margin: 0 auto;
        @media only screen and (max-width: 1540px) {
            width: 90%;
        }
        @media only screen and (max-width: 1024px) {
            width: 90%;
        }
        @media only screen and (max-width: 920px){
            flex-direction: column;
            justify-content: center;
        }

        .title{
            width: 60%;
            margin: auto;
            display: flex;
            flex-direction: column;
            justify-content: space-between;
            align-items: center;
            margin-top: 1rem;
            margin-bottom: .6rem;
            height: auto;
            h1{
                font-size: 1.6rem;
                font-weight: 600; 
                text-align: center;
                margin-bottom: 0;
            }

        }

        .tiempo-oferta{
            width: 100%;
            display: flex;
            justify-content: end;
            span{
                font-size: .9rem;
                font-weight: bold;
                color: white;
                background: #039487;
                padding: 8px 10px;
                border-radius: 20px; 
            }
        }

        .container-cards{
            width: 100%;
            height: auto;
            display: flex;
            align-items: start;
            justify-content: space-between;
            z-index: 10;
            margin-top: 2rem;

            @media only screen and (max-width: 920px){
                flex-direction: column;
                justify-content: center;
                row-gap: 2rem;
            }

            .card{
                width: 46%;
                height: auto;
                background: white;
                border-radius: 12px;
                padding: 0 10px;

                @media only screen and (max-width: 920px){
                    width: 90%;
                    margin: auto;

                }

                header{
                    display: flex;
                    justify-content: center;
                    align-items: center;
                    flex-direction: column;
                    margin: 1.2rem 0 0rem 0   ;
                    .tipo{
                        text-transform: uppercase;
                        font-weight: 500;
                        color:  #09c6cf;
                    }
                    .container-precio{
                        .signo, .precio{
                            font-size: 2.5rem;
                            font-weight: 400;
                        }
                        .periodo{
                            font-size: 1.4rem;
                            font-weight: 300;
                            
                        }
                    }

                }
                .items{
                    ul{
                        li{
                            list-style: none;
                            font-size: 1rem;
                            display: flex;
                            align-items: center;
                            margin: .4rem 0;
                            svg{
                                color: green;
                                margin-right: 10px;
                                margin-bottom: 3px;
                                width: 20px;
                                min-width:20px;
                            }
                        }
                    }
                }
            }
            footer{
                width: 90%;
                margin: auto;
                button{
                    background:#09c6cf ;
                    width: 100%;
                    padding: 6px 0;
                    border: none;
                    margin-bottom: 1rem;
                    outline: none;
                    border-radius: 12px;
                    color: white;
                    font-weight: bold;
                    font-size: 1rem;
                    text-transform: uppercase;
                    transition: .4s;
                    &:hover{
                        background: #07aeb6;
                    }
                }
            }
        }
    }    

`