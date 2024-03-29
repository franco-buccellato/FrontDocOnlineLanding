import React from 'react'
import { useEffect } from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import TarjetaServicio from './TarjetaServicio';
import infoSimulada from './infoSimulada';
import logo from '../../imagenes/Logotipo.webp';

export default function CostosServicios({ setMostrarEncabezado }) {

    useEffect(() => {
        setMostrarEncabezado(false)
    })

    return (
        <>
            <FondoBlaco>
                <svg  viewBox="0 0 1440 320">
                    <path fill="#00b1ff" fill-opacity="1" d="M0,64L60,90.7C120,117,240,171,360,165.3C480,160,600,96,720,101.3C840,107,960,181,1080,197.3C1200,213,1320,171,1380,149.3L1440,128L1440,0L1380,0C1320,0,1200,0,1080,0C960,0,840,0,720,0C600,0,480,0,360,0C240,0,120,0,60,0L0,0Z"></path>
                </svg>
            </FondoBlaco>
            <Encabezado>
                <Link to='/'>
                    <button className='button-volver'>
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-arrow-left-circle-fill" viewBox="0 0 16 16"><path d="M8 0a8 8 0 1 0 0 16A8 8 0 0 0 8 0zm3.5 7.5a.5.5 0 0 1 0 1H5.707l2.147 2.146a.5.5 0 0 1-.708.708l-3-3a.5.5 0 0 1 0-.708l3-3a.5.5 0 1 1 .708.708L5.707 7.5H11.5z" /></svg>
                        Volver
                    </button>
                </Link>
                <div>
                    <img
                        alt="logo-doconline"
                        src={logo}
                        width="100"
                        className="d-inline-block align-center"
                    />
                </div>
            </Encabezado>
            <ContainerCostos>


                <div className='content'>
                    <div className='title'>
                        <div>
                            <h1>Nuestros planes para vos</h1>
                            <p>Tramitá tu permiso tu cultivo y transporte REPROCANN con nosotros</p>
                        </div>
                    </div>

                    <div className='container-cards'>
                        {infoSimulada.map((info, index) => (
                            <TarjetaServicio
                                key={index}
                                index={index}
                                precio={info.precio}
                                listadoBeneficios={info.listadoBeneficios}
                                nombreCard={info.nombreCard}
                            />
                        ))}
                    </div>
                </div>
            </ContainerCostos>
        </>

    )
}

const ContainerCostos = styled.div`
    width: 100%;
    height: auto;
    @media only screen and (max-width: 1120px){
        height: auto;
        max-height: auto;
    }

    .content{
        height: calc(100vh);
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
            margin-top: 4rem;
        }

        .title{
            z-index: 2;
            width: 60%;
            margin: auto;
            display: flex;
            flex-direction: column;
            justify-content: center;

            align-items: center;
            height: 20vh;
            margin-top: 2vh;
            margin-bottom: 4rem;
            @media only screen and (max-width:1020px){
                margin-top: 3rem;
                   
            }
            @media only screen and (max-width: 920px){
                    width: 90%;
            }
            h1{
                font-size: 1.6rem;
                font-weight: 600; 
                text-align: center;
                color: white;
                @media only screen and (max-width:1020px){
                   color: #595959;
                   
                }
            }
            p{
                color: white;
                font-weight: 600;   
                font-size: 1.2rem;
                width: 90%;
                text-align: center;
                margin: 1rem auto 0 auto;
                @media only screen and (max-width: 920px){
                    width: 100%;
                }
                @media only screen and (max-width:1020px){
                   color: #595959;
                }
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
            padding: 2rem 0;
            display: flex;
            align-items: start;
            justify-content: space-around;
            z-index: 10;
            @media only screen and (max-width: 1120px){
                flex-direction: column;
                justify-content: center;
                row-gap: 2rem;
                height: auto;
                padding-bottom: 4rem;
            }

        }
    }    

`

const FondoBlaco = styled.div`
    z-index: 1;
    background-color: #00b1ff;
    opacity: 0.8;
    transition: background 0.3s, border-radius 0.3s, opacity 0.3s;
    width: 100%;
    height: 30vh;
    position: absolute;
    top: 0;
    svg{
        position: absolute;
        top: 30vh;
    }
    @media only screen and (max-width: 1120px){
        display: none;
    }
`

const Encabezado = styled.div`
    position: absolute;
    z-index: 2;
    width: 99%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin: auto;
    top: 10px; 
    padding: 1rem 2rem ;
    @media only screen and (max-width: 1120px){
        padding: 0rem 1rem ;
    }

    .button-volver{
        svg{
            margin-right: 6px;
            margin-bottom: 3px;
        }
        left: 20px;
        top: 20px;
        border: 1px solid white;
        border-radius: 10px;
        padding: 6px 10px;
        background: white ;
        text-transform: uppercase;
        font-weight: 600;
        font-size: .8rem;
        color: #00b1ff;
    }
    div{
        background-color: white;
        padding: 0.8rem;
        border-radius: 50%;
        img{
            width: 3rem;
            height: 3rem;
        }
    }
`