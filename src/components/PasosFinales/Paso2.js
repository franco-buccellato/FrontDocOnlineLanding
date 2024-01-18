import React from 'react'
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { motion } from "framer-motion";


export default function Paso2() {
    return (
        <Paso2Container>

            <div>
                
            </div>
            <h1>Validá tu identidad en la App de Mi Argentina</h1>
            

            <div className='cards-container'>


                <div className='card-item'>
                    <div className='card-icon'>
                        <svg xmlns="http://www.w3.org/2000/svg"  fill="currentColor" class="bi bi-geo-alt-fill" viewBox="0 0 16 16"><path d="M8 16s6-5.686 6-10A6 6 0 0 0 2 6c0 4.314 6 10 6 10m0-7a3 3 0 1 1 0-6 3 3 0 0 1 0 6"/></svg>
                    </div>
                    <div className='card-text'>
                        <span>En la sección "Lugar de cultivo"</span>
                        <p className='card-text-info'>Ingresar el DOMICILIO REAL dónde van a estar tus plantas, ya que el permiso te habilita a cultivar en ESE domicilio.</p>
                    </div> 
                </div>

                <div className='card-item'>
                    <div className='card-icon'>
                        <svg xmlns="http://www.w3.org/2000/svg"  fill="currentColor" class="bi bi-geo-alt-fill" viewBox="0 0 16 16"><path d="M8 16s6-5.686 6-10A6 6 0 0 0 2 6c0 4.314 6 10 6 10m0-7a3 3 0 1 1 0-6 3 3 0 0 1 0 6"/></svg>
                    </div>
                    <div className='card-text'>
                        <span>En la sección "Capacidad de cultivo"</span>
                        <p className='card-text-info'>Siempre poner 9 plantas ya que es el numero máximo de plantas permitidas por porsona.</p>
                    </div> 
                </div>

                <div className='card-item'>
                    <div className='card-icon'>
                        <svg xmlns="http://www.w3.org/2000/svg"  fill="currentColor" class="bi bi-geo-alt-fill" viewBox="0 0 16 16"><path d="M8 16s6-5.686 6-10A6 6 0 0 0 2 6c0 4.314 6 10 6 10m0-7a3 3 0 1 1 0-6 3 3 0 0 1 0 6"/></svg>
                    </div>
                    <div className='card-text'>
                        <span>Actualizaciones en la ley 27.350</span>
                        <p className='card-text-info'>Cabe destacar que la ley NO es retroactiva. <br />Por lo tanto, los permisos / renovaciones que se realizaron a partir del 20/04/23 van a tener validez de 3 años.</p>
                    </div> 
                </div>

                <div className='card-item'>
                    <div className='card-icon'>
                        <svg xmlns="http://www.w3.org/2000/svg"  fill="currentColor" class="bi bi-geo-alt-fill" viewBox="0 0 16 16"><path d="M8 16s6-5.686 6-10A6 6 0 0 0 2 6c0 4.314 6 10 6 10m0-7a3 3 0 1 1 0-6 3 3 0 0 1 0 6"/></svg>
                    </div>
                    <div className='card-text'>
                        <span>¿Qué pasa con los permisos emitidos antes del 20/04/23?</span>
                        <p className='card-text-info'>Los permisos que ya están aprobados y tienen una validez de 1 año, en el momento que renueven, van a empezar a tener validez de 3 años.</p>
                    </div> 
                </div>
            </div>


        </Paso2Container>
    )
}

const Paso2Container = styled.div`
    padding: 4rem;
    h1{
        text-align: center;
    }

    .cards-container{
        display: grid;
        grid-template-columns: 1fr 1fr;
        justify-content : center;
        align-items: center;
        row-gap: 2rem;
        column-gap: 8rem;
        margin-top: 6rem;
        .card-item{
            display: flex;
            justify-content: center;
            align-items: center;
            flex-direction: row;
            gap: 2rem;
            width: 100%;

            .card-icon{
                svg{
                    width: 60px;
                    height: 60px;
                    color: #00b1ff;
                }
            }

            .card-text{
                margin: auto 0;
                span{
                    font-weight: bold;
                    font-size: 1.2rem;
                    margin-bottom: 2rem;
                }
                .card-text-info{
                    font-size: 1rem;
                }
                
            }
        }
    }
`