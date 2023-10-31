import styled from 'styled-components';
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';

export default function MetodosDePago({ setMostrarEncabezado }) {


    //COPIAR ALIAS

    useEffect(() => {
        setMostrarEncabezado(false)
    })

    const [textoAlias, setTexto] = useState('repro.online.');
    const [copiadoAlias, setcopiadoAlias] = useState(false);

    const copiarTextoAlias = () => {
        const textAreaAlias = document.createElement('textarea');
        textAreaAlias.value = textoAlias;
        document.body.appendChild(textAreaAlias);
        textAreaAlias.select();

        try {
            document.execCommand('copy');
            setcopiadoAlias(true);
        } catch (err) {
            console.error('No se pudo copiar el texto: ', err);
        }

        document.body.removeChild(textAreaAlias);
    };

    //COPIAR CBU


    const [textoCbu, setTextoCbu] = useState('1430001713027492800019');
    const [copiadoCbu, setcopiadoCbu] = useState(false);

    const copiarTextoCbu = () => {
        const textAreaCbu = document.createElement('textarea');
        textAreaCbu.value = textoCbu;
        document.body.appendChild(textAreaCbu);
        textAreaCbu.select();

        try {
            document.execCommand('copy');
            setcopiadoCbu(true);
        } catch (err) {
            console.error('No se pudo copiar el texto: ', err);
        }

        document.body.removeChild(textAreaCbu);
    };

    return (
        <ContainerMetodosDePago>
            <div className='content'>
                <div className='container-text'>
                    <h2>Métodos de pago</h2>
                    <p>Transferí al siguiente Alias/CBU y envíanos el comprobante de pago. Se aceptan transferencias bancarias, Mercadopago, Brubank o cualquier otro medio. También por Rapipago o Pago fácil, pedinos por WhatsApp el numero de pago.</p>
                    <div className='container-img'>
                        <img src="https://www.generatorlanding.com/landing/library/4942/01cbde2.png" style={{ width: "55%", margin: "auto", borderRadius: "null", border: "nullpx solid null" }} alt="" />
                    </div>
                </div>
                <div className='container-datos'>
                    <div className='container-alias'>
                        <div className='dato'>
                            <div className='dato-texto'>
                                <p className='text'>Alias: </p>
                                <span>{textoAlias}</span>
                            </div>
                            <div className='dato-button'>
                                <button onClick={copiarTextoAlias} disabled={copiadoAlias}>
                                    {copiadoAlias ?
                                        (<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="#09c6cf" class="bi bi-clipboard-check" viewBox="0 0 16 16"><path fill-rule="evenodd" d="M10.854 7.146a.5.5 0 0 1 0 .708l-3 3a.5.5 0 0 1-.708 0l-1.5-1.5a.5.5 0 1 1 .708-.708L7.5 9.793l2.646-2.647a.5.5 0 0 1 .708 0z" /><path d="M4 1.5H3a2 2 0 0 0-2 2V14a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V3.5a2 2 0 0 0-2-2h-1v1h1a1 1 0 0 1 1 1V14a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V3.5a1 1 0 0 1 1-1h1v-1z" /><path d="M9.5 1a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-3a.5.5 0 0 1-.5-.5v-1a.5.5 0 0 1 .5-.5h3zm-3-1A1.5 1.5 0 0 0 5 1.5v1A1.5 1.5 0 0 0 6.5 4h3A1.5 1.5 0 0 0 11 2.5v-1A1.5 1.5 0 0 0 9.5 0h-3z" /></svg>)
                                        :
                                        (<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="#09c6cf" class="bi bi-clipboard" viewBox="0 0 16 16"><path d="M4 1.5H3a2 2 0 0 0-2 2V14a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V3.5a2 2 0 0 0-2-2h-1v1h1a1 1 0 0 1 1 1V14a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V3.5a1 1 0 0 1 1-1h1v-1z" /><path d="M9.5 1a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-3a.5.5 0 0 1-.5-.5v-1a.5.5 0 0 1 .5-.5h3zm-3-1A1.5 1.5 0 0 0 5 1.5v1A1.5 1.5 0 0 0 6.5 4h3A1.5 1.5 0 0 0 11 2.5v-1A1.5 1.5 0 0 0 9.5 0h-3z" /></svg>)}
                                </button>
                            </div>
                        </div>
                        <div className='dato'>
                            <div className='dato-texto'>
                                <p className='text'>CBU: </p>
                                <span>{textoCbu}</span>
                            </div>
                            <div className='dato-button'>
                                <button onClick={copiarTextoCbu} disabled={copiadoCbu}>
                                    {copiadoCbu ?
                                        (<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="#09c6cf" class="bi bi-clipboard-check" viewBox="0 0 16 16"><path fill-rule="evenodd" d="M10.854 7.146a.5.5 0 0 1 0 .708l-3 3a.5.5 0 0 1-.708 0l-1.5-1.5a.5.5 0 1 1 .708-.708L7.5 9.793l2.646-2.647a.5.5 0 0 1 .708 0z" /><path d="M4 1.5H3a2 2 0 0 0-2 2V14a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V3.5a2 2 0 0 0-2-2h-1v1h1a1 1 0 0 1 1 1V14a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V3.5a1 1 0 0 1 1-1h1v-1z" /><path d="M9.5 1a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-3a.5.5 0 0 1-.5-.5v-1a.5.5 0 0 1 .5-.5h3zm-3-1A1.5 1.5 0 0 0 5 1.5v1A1.5 1.5 0 0 0 6.5 4h3A1.5 1.5 0 0 0 11 2.5v-1A1.5 1.5 0 0 0 9.5 0h-3z" /></svg>)
                                        :
                                        (<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="#09c6cf" class="bi bi-clipboard" viewBox="0 0 16 16"><path d="M4 1.5H3a2 2 0 0 0-2 2V14a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V3.5a2 2 0 0 0-2-2h-1v1h1a1 1 0 0 1 1 1V14a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V3.5a1 1 0 0 1 1-1h1v-1z" /><path d="M9.5 1a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-3a.5.5 0 0 1-.5-.5v-1a.5.5 0 0 1 .5-.5h3zm-3-1A1.5 1.5 0 0 0 5 1.5v1A1.5 1.5 0 0 0 6.5 4h3A1.5 1.5 0 0 0 11 2.5v-1A1.5 1.5 0 0 0 9.5 0h-3z" /></svg>)}
                                </button>
                            </div>
                        </div>
                    </div>
                    <div className='container-frase'>
                        <p>Fácil, seguro y</p>
                        <p>sin moverte de tu casa.</p>
                    </div>
                    <div className='container-buttons'>
                        <ButtonContinuar>
                            <a href='https://api.whatsapp.com/send?phone=543425319488&text=Hola+vi+la+pagina+del+servicio%2C+mi+nombre+es%3A' target='__blank'>
                                <span>Enviar comprobante de pago</span>
                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-arrow-right-short" viewBox="0 0 16 16"><path fill-rule="evenodd" d="M4 8a.5.5 0 0 1 .5-.5h5.793L8.146 5.354a.5.5 0 1 1 .708-.708l3 3a.5.5 0 0 1 0 .708l-3 3a.5.5 0 0 1-.708-.708L10.293 8.5H4.5A.5.5 0 0 1 4 8z" /></svg>
                            </a>
                        </ButtonContinuar>
                        <ButtonContinuar>
                            <Link to = '/pasosFinales'>
                                <span>Continuar tramite</span>
                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-arrow-right-short" viewBox="0 0 16 16"><path fill-rule="evenodd" d="M4 8a.5.5 0 0 1 .5-.5h5.793L8.146 5.354a.5.5 0 1 1 .708-.708l3 3a.5.5 0 0 1 0 .708l-3 3a.5.5 0 0 1-.708-.708L10.293 8.5H4.5A.5.5 0 0 1 4 8z" /></svg>
                            </Link>
                        </ButtonContinuar>
                    </div>
                </div>
            </div>
        </ContainerMetodosDePago>
    )
}


const ContainerMetodosDePago = styled.div`
    width: 100%;
    height: 100%;
    .content{
        width: 55%;
        height: 100%;
        display: flex;
        flex-direction: row;
        margin: 3rem auto 2rem auto;
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
            width: 50%;
            h2{
                font-size: 2rem;
                margin-bottom: 2rem;
            }
            p{
                font-size: 1.2rem;
                line-height: 1.7;
                
            }
            .container-img{
                display: flex;
                align-items: center;
                justify-content: center;
            }
        }

        .container-datos{
            width: 50%;
            display: flex;
            flex-direction: column;
            justify-content: space-between; 

            .container-alias{
                width: 100%;
                background: white;
                display: flex;
                flex-direction: column; 
                padding: 2rem 1rem;
                gap: 1rem;
                border-radius: 12px;
                box-shadow: rgba(0, 0, 0, 0.15) 1.95px 1.95px 2.6px;
                
                .dato{
                    display: flex;
                    align-items: center;
                    width: 90%;
                    margin: auto;
                    justify-content: space-between;
                    .dato-texto{
                        display: flex;
                        align-items: center;
                        gap: .6rem;
                        .text{
                            font-weight: 600;
                            font-size: 1.2rem;
                            margin: 0;
                        }
                        span{
                            font-size: 1.2rem;
                        }

                    }
                    .dato-button{
                        button{
                            border: none;
                            background: none;
                        }
                    }
                }
            }

            .container-frase{
                display: flex;
                flex-direction: column;
                align-items: end;
                p{
                    font-style: italic;
                }
            }
            .container-buttons{
                display: flex;
                flex-direction: column;
                gap: 1rem;
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