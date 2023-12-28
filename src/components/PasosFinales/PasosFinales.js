import styled from 'styled-components';
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import Paso1 from './Paso1';
import Paso2 from './Paso2';



export default function MetodosDePago({ setMostrarEncabezado }) {

    useEffect(() => {
        setMostrarEncabezado(false)
    })


    const [indicePaso, setIndicePaso] = useState(0)

    const todosLosPasos = [Paso1, Paso2];

    const cambiarDePaso = () => {
        setIndicePaso((indicePaso + 1) % todosLosPasos.length);
    };

    const PasoActual = todosLosPasos[indicePaso];


    return (
        <>
            <ContainerPasosFinales>
                <motion.div
                    key={indicePaso}
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.8 }}
                    transition={{ duration: 0.5 }}
                    className='card'
                >
                    <PasoActual />
                    <div className='button-siguiente--container'>
                        <button onClick={cambiarDePaso}>Siguiente</button>
                    </div>
                </motion.div>

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