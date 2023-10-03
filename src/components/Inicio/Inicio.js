import "./Inicio.css";
import Carousel from "react-bootstrap/Carousel";
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import imagenTarjetas from '../../imagenes/inicio-tarjetas.png';
import imagenTarjetasResponsive from '../../imagenes/inicio-tarjetas-responsive.png';
import Button from "../Button/Button";



function Inicio() {
    return (

        <Home>

            <div className="img-responsive"></div>
            <div className="content">
                <div className="container-presentacion">
                    <h2>Tramita tu permiso <br/> de REPROCANN, <br/> sin moverte de tu casa.</h2>
                    <p><span>Doc.</span> Online conecta pacientes y médicos <br/> de forma práctica a través de un click <br/> desde donde estés, siempre priorizando tu salud!</p>
                    <Button text={"Comenzar ahora"}/>
                </div>

                <div className="container-img">
                        <img
                            alt="logo-doconline"
                            src={imagenTarjetas}
                        />
                </div>
            </div>


        </Home>

    );
}

export default Inicio;

const Home = styled.div`
    width: 100%;
    height: calc(100vh - 10vh); //se resta el Encabezado
    padding: 10vh 0;
    
    .content{
        width: 55%;
        height: 100%;
        margin: auto;
        display: flex;
        align-items: center;

        .container-presentacion{
            max-width: 55%;
            h2{
                font-size: 2.5rem;
                margin: 2rem 0 2rem 0;
            }
            p{
                font-size: 1.2rem;
                font-weight: 500;
                color: #838383;
                margin: 1rem 0 3rem 0;
                span{
                    font-weight: bold;
                }
            }
            button{
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
            }
        }

        .container-img{
            position: absolute;
            width: 49vw; /* Ancho deseado para la imagen */
            height: 96vh; /* Altura deseada para la imagen */
            overflow: hidden;
            top: -6vh;
            right: 0;
            img{
                width: 100%; 
                height: 100%;
                object-fit: cover; 
                position: absolute; 
                top: 0;

            }
        }
    }
    

    @media only screen and (max-width: 1024px) {
        display: flex;
        justify-content: center;
        align-items: center;
        flex-direction: column;
        height: auto;
        padding: 0rem;
        width: 100%;

        .img-responsive{
            margin-top:8rem;
            -webkit-animation: morph 8s ease-in-out infinite;
            animation: morph 8s ease-in-out infinite;
            background-image: url(${imagenTarjetasResponsive});
            background-position: 50%;
            background-repeat: no-repeat;
            background-size: cover;
            border: none;
            border-radius: 60% 40% 30% 70%/60% 30% 70% 40%;
            height: 20rem;
            position: relative;
            transition: all 1s ease-in-out;
            width: 30rem;

            @keyframes morph {
      0% {
        border-radius: 60% 40% 30% 70%/60% 30% 70% 40%;
      }

      50% {
        border-radius: 30% 60% 70% 40%/50% 60% 30% 60%;
      }

      100% {
        border-radius: 60% 40% 30% 70%/60% 30% 70% 40%;
      }
    }
        }

        
        .content{
            width: 90%;
            display: flex;
            align-items: center;
            flex-direction: column-reverse;

            .container-presentacion{
                max-width: 100%;
                h2{
                    font-size: 2.5rem;
                    margin: 2rem 0 2rem 0;
                    text-align: center;
                }
                p{
                    font-size: 1.2rem;
                    text-align: center;
                    font-weight: 500;
                    color: #838383;
                    margin: 1rem 0 3rem 0;
                    span{
                        font-weight: bold;
                    }
                }
                button{
                    margin: auto;
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
                    svg{
                        display: none;
                    }
                }
            }
        }

        .container-img{
            display: none;
        }

    }

    @media only screen and (max-width: 1540px) {
        .content{
            width: 74%;
        }    
    }

    @media only screen and (max-width: 850px){

        .img-responsive{
            height: 16rem;

            width: 24rem;
        }
    }
`
