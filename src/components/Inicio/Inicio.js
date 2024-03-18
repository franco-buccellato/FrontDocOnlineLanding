import styled from 'styled-components';
import imagenTarjetas from '../../imagenes/inicio-tarjetas.webp';
import imagenTarjetasResponsive from '../../imagenes/inicio-tarjetas-responsive.webp';
import Button from "../Button/Button";

function Inicio() {
    return (
        <Home id="inicio" className='bg-red'>
            <div className='opacidad'></div>
            <div className="content">

                <div className="container-presentacion">
                    <h1>Tramita tu permiso de REPROCANN, sin moverte de tu casa.</h1>
                    <p><span>Doc.</span> Online conecta pacientes y médicos de forma práctica a través de un click desde donde estés, siempre priorizando tu salud!</p>
                    <div className='button'>
                        <Button ruta={'/pasosFinales'} text={"Comenzar ahora"} />
                    </div>
                    
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
    height: 90vh; //se resta el Encabezado
    position: relative;
    @media only screen and (max-width: 1024px) {
        background-image: url('../../imagenes/cartaAbierta.webp');


        .opacidad{
            width: 100%;
            height: 100%;
            background-color: white;
            opacity: 0.5;
        }
    }


    // CELULAR - CELULAR - CELULAR - CELULAR - CELULAR - CELULAR 

    @media only screen and (max-width: 1024px) {
    
        .content{
            width: 90%;
            height: 100%;
            margin: auto;
            display: flex;
            align-items: center;
            position: absolute;
            top: 30%;
            bottom: 25%;
            left: 0.25rem;
            right: 0.25rem;


            .container-presentacion{
                
                h1{
                    text-align: center;
                    font-size: 1.8rem;
                    margin: 2rem 0 2rem 0;

                }
                p{
                    text-align: center;
                    font-size: 1rem;
                    font-weight: 500;
                    margin: 1rem 0 3rem 0;
                    span{
                        font-weight: bold;
                    }
                }
                .button{
                    width: 100%;
                    display: flex;
                    justify-content: center;
                }

            }
            .container-img{
                display: none;
            }
        }
    
    }


    // DESKTOP - DESKTOP - DESKTOP - DESKTOP - DESKTOP - DESKTOP - DESKTOP

    @media only screen and (min-width: 1024px) {

        .content{
            width: 60%;
            height: 100%;
            margin: auto;
            display: flex;
            align-items: center;
            top: 30%;
            bottom: 25%;
            left: 0.25rem;
            right: 0.25rem;

            .container-presentacion{
                width: 60%;

                h1{
                    font-size: 2rem;
                }
                p{
                    font-size: 1.2rem;
                    margin: 2rem 0;
                }
            }

            .container-img{
                position: absolute;
                overflow: hidden;
                top: -6vh;
                right: 0;
                img{
                    width: 100%; 
                    height: 100%;
                    object-fit: contain; 
                    position: absolute; 
                    top: 0;

                }
            }

            @media only screen and (max-width: 1540px) {
                width: 74%;
            }

        }
    }




    @media screen and (min-width: 1900px) and (max-width: 2220px) {
        .content{
            .container-img{
                width: 40vw; 
                height: 80vh;
            }   
            
        }   
    }

    @media only screen and (max-width: 1870px) {
        .content{
            .container-img{
                width: 42vw; 
                height: 80vh;
            }   
            
        }   
    }

    @media only screen and (max-width: 1770px) {
        .content{
            .container-img{
                width: 32vw; 
                height: 90vh;
            }   
            
        }   
    }

    @media only screen and (max-width: 1690px) {
        .content{
            .container-img{
                width: 34vw; 
                height: 90vh;
                top: -4vh;
            }   
            
        }   
    }

    @media only screen and (max-width: 1570px) {
        .content{
            .container-img{
                width: 32vw; 
                height: 80vh;
                top: -4vh;
            }    
            
        }   
    } 



    @media only screen and (max-width: 1500px) {
        .content{
            .container-img{
                width: 30vw; 
                height: 70vh;

            }   
            
        }   
    } 


    @media only screen and (max-width: 1400px) {
        .content{
            .container-img{
                width: 32vw; 
                height: 70vh;
            }   
            
        }   
    } 

    @media only screen and (max-width: 1300px) {
        .content{
            .container-img{
                width: 34vw; 
                height: 80vh;
            }   
        }   
    } 

    @media only screen and (max-width: 1200px) {
        .content{
            .container-img{
                width: 34vw; 
                height: 64vh;
            }   
        }   
    } 

    @media only screen and (max-width: 1140px) {
        .content{
            .container-img{
                width: 36vw; 
                height: 62vh;
                top: 12vh;
            }   
        }   
    } 











    


`
