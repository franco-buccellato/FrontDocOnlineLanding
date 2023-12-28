import React from 'react'
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import carnet from '../../imagenes/carnet.png';
import { motion } from "framer-motion";


export default function Paso1() {
    return (
        <Paso1Container>
            <div className='container-img'>
                <motion.div
                    initial={{ y: 0 }}
                    animate={{ y: -5 }}
                    transition={{
                        repeat: Infinity,
                        repeatType: "mirror",
                        duration: 1.5,
                        ease: "easeInOut" // Puedes ajustar la curva de animación según lo necesites
                    }}
                >
                    <img
                        src={carnet}
                        alt='carnet'
                    />
                </motion.div>

            </div>
            <div className='container-text'>
                <div>
                    <h1>Registrate en la App Doc Online</h1>
                    <p>¿Aun no estás registrado? Ingresa a la app y completa tus datos, allí te guiaremos para sacar turno, pagar y completar tus datos para los formularios de Declaración Jurada y Consentimiento Informado.</p>
                </div>

                <div>
                    <ButtonContinuar>
                        <Link to='/pasosFinales'>
                            <span>Registrarme</span>
                        </Link>
                    </ButtonContinuar>
                </div>


            </div>



        </Paso1Container>
    )
}

const Paso1Container = styled.div`
    margin:  auto ;
    width: 100%;
    height: 100%;
    display: flex;
    @media only screen and (max-width: 1024px){
        flex-direction: column;
    }

    .container-img{
        height: 100%;
        border-radius:   2rem 0 0  2rem ;
        width: 40%;
        background: -moz-linear-gradient(90deg, rgba(0,206,206,1) 0%, rgba(0,177,255,1) 96%);
        background: -webkit-linear-gradient(90deg, rgba(0,206,206,1) 0%, rgba(0,177,255,1) 96%);
        background: linear-gradient(90deg, rgba(0,206,206,1) 0%, rgba(0,177,255,1) 96%);
        display: flex;
        justify-content: center;
        align-items: center;
        @media only screen and (max-width: 1024px){
            width: 100%;
            border-radius: 2rem 2rem 0  0 ;
        }
        img{
            width: 500px;
            height: 500px;
            @media only screen and (max-width: 1524px){
                width: 320px;
                height: 320px;
            }
            @media only screen and (max-width: 1024px){
                width: 180px;
                height: 180px;
                margin: 1rem 0;
            }
        }
    }

    .container-text{
        height: 100%;
        padding: 6rem 4rem 6rem 4rem;
        width: 60%;
        display: flex;
        @media only screen and (max-width: 1524px){
            padding: 4rem 4rem 6rem 4rem;
        }
        @media only screen and (max-width: 1024px){
            padding: 2rem 1rem 6rem 1rem;
            width: 100%;
        }
        flex-direction: column;
        h1{
            font-size: 2rem;
            margin-bottom: 2rem;
            @media only screen and (max-width: 1524px){
                font-size: 1.8rem;
            }
            @media only screen and (max-width: 1024px){
                text-align: center;
            }
        }

        p{
            font-size: 1.2rem;
            font-weight: 400;
            margin-bottom: 4rem;
            @media only screen and (max-width: 1524px){
                font-size: 1rem;
            }
            @media only screen and (max-width: 1024px){
                text-align: center;
            }
        }
    }


`

const ButtonContinuar = styled.div`
    cursor: pointer;
    font-weight: 500;
    transition: all .2s;
    background: #cfef00;
    border: 1px solid transparent;
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 10px 20px;
    border-radius: 18px;
    font-size: 1.2rem;
    background: rgb(0,206,206);
    border: none;
    background: -moz-linear-gradient(90deg, rgba(0,206,206,1) 0%, rgba(0,177,255,1) 96%);
    background: -webkit-linear-gradient(90deg, rgba(0,206,206,1) 0%, rgba(0,177,255,1) 96%);
    background: linear-gradient(90deg, rgba(0,206,206,1) 0%, rgba(0,177,255,1) 96%);
    filter: progid:DXImageTransform.Microsoft.gradient(startColorstr="#00cece",endColorstr="#00b1ff",GradientType=1);
    color: white;
    font-weight: 600;
    
    a {
        color: #fff;
        @media only screen and (max-width: 1524px){
                font-size: 1rem;
        }
    }

    svg {
        width: 24px;
        height: 24px;
        margin-left: 6px;
        transition: transform .3s ease-in-out;
    }

    &:hover svg{
        transform: translateX(5px);
    }

    &:active{
        transform: scale(0.95);
    }
`