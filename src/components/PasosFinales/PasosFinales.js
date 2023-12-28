import styled from 'styled-components';
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';
import logo from '../../imagenes/Logotipo.webp';
import Paso1 from './Paso1';



export default function MetodosDePago({ setMostrarEncabezado }) {
    
    useEffect(() => {
        setMostrarEncabezado(false)
    })


    

    return (
        <>
            <ContainerPasosFinales>
                <div className='card'>
                    <Paso1 /> 
                    <div className='button-siguiente--container'>
                        <button>Siguiente</button>
                    </div>
                </div>

            </ContainerPasosFinales>
        </>

    )
}


const ContainerPasosFinales = styled.div`
    height: 100vh;
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    .card{
        width: 80%;
        height: 80%;
        border-radius: 2rem;
        border: none;

        @media only screen and (max-width: 1024px){
            width: 90%;
        }
        .button-siguiente--container{
            position: absolute;
            bottom: 1.4rem;
            right: 4rem;
        }
    }
`