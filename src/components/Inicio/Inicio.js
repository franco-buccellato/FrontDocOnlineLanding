import "./Inicio.css";
import Carousel from "react-bootstrap/Carousel";
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import imagenTarjetas from '../../imagenes/inicio-tarjetas.png';


function Inicio() {
    return (

        <Home>

            <div className="content">
                <div className="container-presentacion">
                    <h2>Tramita tu permiso <br/> de REPROCANN, <br/> sin moverte de tu casa.</h2>
                    <p><span>Doc.</span> Online conecta pacientes y médicos <br/> de forma práctica a través de un click <br/> desde donde estés, siempre priorizando tu salud!</p>
                    <button>Comenzar ahora </button>
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
        width: 60%;
        height: 100%;
        margin: auto;
        display: flex;
        align-items: center;
        .container-presentacion{
            max-width: 40%;
            h2{
                font-size: 2.5rem;
                margin: 2rem 0 2rem 0;
            }
            p{
                font-size: 1.2rem;
                font-weight: 500;
                color: #777676;
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
            height: auto;
            top: 20px;
            right: -100px;
            position: absolute;
            transform: rotate(-18deg);   
            img{
                width: 900px;
                height: 700px;
                object-fit: cover;
                border-radius: 22%;
            }
        }
    }
`
