import styled from 'styled-components';
import imagenServicios from '../../imagenes/servicios-mujer.png';

function Servicios() {

    return (
        <ContenedorServicios>
            <div className='content'>

                <div className="container-img">
                    <div>
                        <img
                            alt="logo-doconline"
                            src={imagenServicios}
                        />
                    </div>

                </div>

                <div className='container-text'>
                    <div className='title-content'>
                        <span>personal a tu disposición</span>
                        <h3>Servicio a Distancia</h3>
                        <div>
                            <p>¡La telemedicina se está utilizando más que nunca! Solicita y programa citas con un click y chatea con profesionales de la salud directamente desde tu computadora o celular, en la comodidad de tu hogar.</p>
                            <br/>
                            <p>Doc. Online fue diseñado para conectar pacientes y médicos de una manera práctica.</p>
                        </div>

                    </div>
                </div>
            </div>
            <div className='fondo-horizontal'></div>
        </ContenedorServicios>
    )
}

export default Servicios;

const ContenedorServicios = styled.div`
    width: 100%;
    .content{
        width: 55%;
        margin: auto;
        display: flex;
        @media only screen and (max-width: 1540px) {
            width: 74%;
        }
        @media only screen and (max-width: 1024px) {
            width: 90%;
        }

        .container-img{
            margin-top: 10rem;
            width: 58rem; 
            height: 36rem; 
            left: -10rem;
            background-color: #ccc;
            transform: rotate(340deg); 
            transform-origin: center; 
            overflow: hidden; 
            position: absolute; 
            border-radius: 10%;
            z-index: 2;
            @media only screen and (max-width: 1024px) {
                display: none;
            }
            @media only screen and (max-width: 1540px) {
                width: 44rem; 
                height: 34rem; 
            }
            div{
                img{
                    
                    transform-origin: center; 
                    width: 100%;
                    height: 100%;
                    object-fit: cover;
                    position: absolute;
                    top: 0;
                    left: 0;
                }
            }
        }

        .container-text{
            display: flex;
            flex-direction: column;
            text-align: end;
            @media only screen and (max-width: 1024px) {
                text-align: center;
            }

            span{
                color: #00b1ff;
                text-transform: uppercase;
                font-size: 1.2rem;
                font-weight: 600;
                text-align: end;
                @media only screen and (max-width: 1024px) {
                text-align: center;
                }
            }
            h3{
                font-weight: 600;
                font-size: 1.8rem;
                margin-top: 3rem;
            }
            div{
                display: flex;
                flex-direction: column;
                align-items: end;
                margin-top: 4rem;
                @media only screen and (max-width: 1024px) {
                    align-items: center;
                }
                p{
                font-size: 1.2rem;
                font-weight: 600;
                width: 50%;
                @media only screen and (max-width: 1024px) {
                    width: 100%;
                }

            }
            }

        }

    }


`