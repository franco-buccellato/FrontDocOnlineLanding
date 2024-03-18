import styled from 'styled-components';
import imagenUsuPractio01 from '../../imagenes/usoPractioAceite.webp';
import imagenUsuPractio02 from '../../imagenes/usoPractioAceite2.webp';
import imgLeyes from '../../imagenes/img-leyes.webp';
import imgCarta from '../../imagenes/doctorTarjeta.webp';
import { motion } from "framer-motion";

export default function UsoPractico() {
    return (
        <ContainerUsoPractico id='uso-practico'>
            <div className='container-imgFondo'>
                <img
                    src={imgCarta}
                    alt='carta'
                />
            </div>
            <motion.div
                initial={{ opacity: 0, x: -10 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: .8 }}
                exit={{ opacity: 0 }}
                className='content'
            >
                <div className='container-text'>
                    <span>Usos practicos</span>
                    <p>Te contamos como utilizar el aceite de cannabis.</p>
                </div>

                <div className='card' style={{ flexDirection: 'row' }}>
                    <img
                        alt="logo-doconline"
                        src={imagenUsuPractio01}
                        style={{ borderRadius: '12px 0 0 12px' }}
                    />
                    <div className='card-container-text'>
                        <div>
                            <h4>Guía para hacer tu propio aceite de cannabis</h4>
                            <p>Dados los innumerables beneficios que tiene el aceite de cannabis, es importante que los pacientes sepan como realizar su propia medicina.</p>
                            <div className='container-button'>
                                <a href="https://drive.google.com/file/d/1OYs8sBzpi8uln-1kGxpTrOOcEPXWdkWG/view" target="_blank" rel="noreferrer">
                                    <button class="button" type="button" style={{ right: '2rem' }}>
                                        <span class="button__text">Descargar</span>
                                        <span class="button__icon"><svg fill="currentColor" class="bi bi-cloud-arrow-down-fill" viewBox="0 0 16 16"><path d="M8 2a5.53 5.53 0 0 0-3.594 1.342c-.766.66-1.321 1.52-1.464 2.383C1.266 6.095 0 7.555 0 9.318 0 11.366 1.708 13 3.781 13h8.906C14.502 13 16 11.57 16 9.773c0-1.636-1.242-2.969-2.834-3.194C12.923 3.999 10.69 2 8 2m2.354 6.854-2 2a.5.5 0 0 1-.708 0l-2-2a.5.5 0 1 1 .708-.708L7.5 9.293V5.5a.5.5 0 0 1 1 0v3.793l1.146-1.147a.5.5 0 0 1 .708.708" /></svg></span>
                                    </button>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>

                <div className='card' style={{ flexDirection: 'row-reverse' }}>
                    <img
                        alt="logo-doconline"
                        src={imagenUsuPractio02}
                        style={{ borderRadius: '0 12px 12px 0' }}
                    />
                    <div className='card-container-text'>

                        <h4>¿Cómo tomar el aceite de cannabis?</h4>
                        <p>Es muy importante hacer la planificación de uso y dosificación de las gotas, ya que la efectividad de la terapia esta dada por la continuidad de la administración.</p>
                        <div className='container-button'>
                            <a href="https://drive.google.com/file/d/1QTIPfboOJytPdNvqGpu4GfXalUr5RYhr/view" target="_blank" rel="noreferrer">
                                <button class="button" type="button">
                                    <span class="button__text">Descargar</span>
                                    <span class="button__icon"><svg fill="currentColor" class="bi bi-cloud-arrow-down-fill" viewBox="0 0 16 16"><path d="M8 2a5.53 5.53 0 0 0-3.594 1.342c-.766.66-1.321 1.52-1.464 2.383C1.266 6.095 0 7.555 0 9.318 0 11.366 1.708 13 3.781 13h8.906C14.502 13 16 11.57 16 9.773c0-1.636-1.242-2.969-2.834-3.194C12.923 3.999 10.69 2 8 2m2.354 6.854-2 2a.5.5 0 0 1-.708 0l-2-2a.5.5 0 1 1 .708-.708L7.5 9.293V5.5a.5.5 0 0 1 1 0v3.793l1.146-1.147a.5.5 0 0 1 .708.708" /></svg></span>
                                </button>
                            </a>
                        </div>

                    </div>
                </div>

                <div className='card' style={{ flexDirection: 'row' }}>
                    <img
                        alt="logo-doconline"
                        src={imgLeyes}
                        style={{ borderRadius: '12px 0 0 12px' }}
                    />
                    <div className='card-container-text'>
                        <div>
                            <h4>Leyes Reprocann</h4>
                            <p>Te facilitamos las leyes para que puedas ver tus derechos por vos mismo/a.</p>
                            <div className='container-button'>
                                <a href="https://drive.google.com/drive/u/0/folders/1KfXcT4-kHizJD78wzm6EcnzkGlkO7b_H" target="_blank" rel="noreferrer">
                                    <button class="button" type="button" style={{ right: '2rem' }}>
                                        <span class="button__text">Descargar</span>
                                        <span class="button__icon"><svg fill="currentColor" class="bi bi-cloud-arrow-down-fill" viewBox="0 0 16 16"><path d="M8 2a5.53 5.53 0 0 0-3.594 1.342c-.766.66-1.321 1.52-1.464 2.383C1.266 6.095 0 7.555 0 9.318 0 11.366 1.708 13 3.781 13h8.906C14.502 13 16 11.57 16 9.773c0-1.636-1.242-2.969-2.834-3.194C12.923 3.999 10.69 2 8 2m2.354 6.854-2 2a.5.5 0 0 1-.708 0l-2-2a.5.5 0 1 1 .708-.708L7.5 9.293V5.5a.5.5 0 0 1 1 0v3.793l1.146-1.147a.5.5 0 0 1 .708.708" /></svg></span>
                                    </button>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>



            </motion.div>
        </ContainerUsoPractico>
    )
}

const ContainerUsoPractico = styled.div`
    width: 100%;
    /* padding: 0rem 0 0rem 0 ; */

    .container-imgFondo{
        position: absolute;
        right: 4rem;
        margin-top: -16rem;
        transform: rotate(40deg);
        img{ 
            width: 36rem;
        }
        @media only screen and (max-width:1540px){
            img{ 
                width: 28rem;
            }  
        }
        @media only screen and (max-width:1390px){
            margin-top: -10rem;
            img{ 
                width: 22rem;
            }  
        }
        @media only screen and (max-width:920px){
            margin-top: -8rem;
            img{ 
                width: 16rem;
            }  
        }
        @media only screen and (max-width:720px){
            margin-top: -6rem;
            img{ 
                width: 10rem;
            }  
        }
        @media only screen and (max-width:500px){
            margin-top: -4rem;
            img{ 
                width: 8rem;
            }  
        }
    }
    .content{
        width: 60%;
        margin: auto;
        display: flex;
        justify-content: center;
        flex-direction: column;
        gap: 2rem;
        @media only screen and (max-width: 1540px) {
            width: 74%;
        }
        @media only screen and (max-width: 1024px) {
            width: 90%;
        }
        @media only screen and (max-width: 920px){

        }

        .container-text{
            width: 100%;
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
            
            p{

                font-size: 1.2rem;
                font-weight: 600;
                margin-top: 2rem;
            }

        }

        .card{
            display: flex;
            border-radius: 12px;
            border: none;
            @media only screen and (max-width: 1024px){
                flex-direction: column !important;
            }
            
            img{
                width: 60%;
                max-width: 24rem;
                height: 20rem;
                object-fit: cover;
                border: none;
                @media only screen and (max-width: 1024px){
                    width: 100%;
                    height: 20rem;
                    border-radius: 10px 10px 0 0 !important;
                }
                
            }
            .card-container-text{
                padding: 2rem;
                @media only screen and (max-width: 1024px){
                    min-height: 16rem;
                }

                @media only screen and (max-width: 760px){
                    min-height: 18rem;
                }
                h4{
                    margin-bottom: 2rem;
                    @media only screen and (max-width: 1300px){
                        font-size: 1.2rem;
                        margin-bottom: 1rem;
                    }

                }
                p{
                    font-size: 1.2rem;
                    line-height: 32px;
                    @media only screen and (max-width: 1300px){
                        font-size: 1rem;
                        line-height: 26px;
                    }
                }
                .container-button{
                    width: 100%;
                    display: flex;
                    @media only screen and (max-width: 1024px){
                        justify-content: end;
                    }
                    
                    .button {
                        padding: 6px 12px;
                        border: 2px solid #00b1ff;
                        border-radius: 12px;
                        display: flex;
                        justify-content: center;
                        align-items: center;
                        background-color: white;
                        gap: .8rem;

                        &:hover{
                            transition: .4s;
                            background: #00b1ff;
                            .button__text{
                                color: #ffff;
                            }
                            .button__icon{
                                svg{
                                    color: #fff;  
                                }
                            }
                        }
                        .button__text{
                            color: #00b1ff;
                            font-weight: 600;
                        }
                        .button__icon{
                            svg{
                                width: 1.4rem;
                                color: #00b1ff;
                                
                            }
                            
                        }
                    }
                }

            }
        }
    }
`
