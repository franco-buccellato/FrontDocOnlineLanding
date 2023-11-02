import React from 'react'
import { Link } from 'react-router-dom';
import styled from 'styled-components';

export default function TarjetaServicio({ precio, listadoBeneficios }) {
    return (
        <TarjetaServicioContainer>
            
            <header>
                <span className='tipo'>Renovación</span>
                <div className='container-precio'>
                    <span className='signo'>$</span>
                    <span className='precio'>{precio}</span>
                    <span className='periodo'>/por 3 años</span>
                </div>
            </header>
            <div className='items'>

                {listadoBeneficios.map((beneficio, index) => (
                    <li key={index}><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-check-circle-fill" viewBox="0 0 16 16"><path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zm-3.97-3.03a.75.75 0 0 0-1.08.022L7.477 9.417 5.384 7.323a.75.75 0 0 0-1.06 1.06L6.97 11.03a.75.75 0 0 0 1.079-.02l3.992-4.99a.75.75 0 0 0-.01-1.05z" /></svg>{beneficio}</li>
                ))}

            </div>
            <footer>
                <Link to='/metodosDePago'>
                    <button>comprar</button>
                </Link>
            </footer>
        </TarjetaServicioContainer>
    )
}


const TarjetaServicioContainer = styled.div`
    width: 34%;
    height: 90%;
    margin: 0 auto;
    background: white;
    border-radius: 12px;
    padding: 0 10px;
    box-shadow: rgba(0, 0, 0, 0.1) 0px 4px 6px -1px, rgba(0, 0, 0, 0.06) 0px 2px 4px -1px;
    @media only screen and (max-width: 1800px){
        width: 38%;
    }
    @media only screen and (max-width: 1500px){
        width: 44%;
    }
    @media only screen and (max-width: 1350px){
        width: 48%;
    }
    @media only screen and (max-width: 1120px){
        width: 96%;
        height: auto;
    }

    header{
        display: flex;
        justify-content: center;
        align-items: center;
        flex-direction: column;
        height: 20%;
        @media only screen and (max-width: 1120px){
            height: auto;
            padding: 1rem 0;
        }
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
        height: 68%;
        @media only screen and (max-width: 1120px){
            height: auto;
            padding: .6rem 0;
        }

            li{
                list-style: none;
                font-size: 1.2rem;
                padding: .1rem .6rem;
                display: flex;
                align-items: center;
                margin: .4rem 0;
                @media only screen and (max-width: 1120px){
                    font-size: 1rem;
                }
                svg{
                    color: green;
                    margin-right: 10px;
                    margin-bottom: 3px;
                    width: 20px;
                    min-width:20px;
                }
            }
         
    }

    footer{
        width: 90%;
        height: 12%;
        display: flex;
        margin: auto;
        justify-content: center;
        align-items: center;
        @media only screen and (max-width: 1120px){
            height: auto;
            padding: .6rem 0;
        }
        a{
            width: 90%;
        }
        button{
            background:#09c6cf ;
            width: 100%;
            padding: 10px 0;
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
`