import styled from 'styled-components';
import imagenUsuPractio01 from '../../imagenes/usoPractioAceite.png';
import imagenUsuPractio02 from '../../imagenes/usoPractioAceite2.png';
import imgCarta from '../../imagenes/doctorTarjeta.png';

export default function UsoPractico() {
    return (
        <ContainerUsoPractico id='uso-practico'>
            <div className='container-imgFondo'>
                <img 
                    src={imgCarta}
                    alt='carta'
                />
            </div>
            <div className='content'>
                <div className='container-text'>
                    <span>Usos practicos</span>
                    <p>Te contamos como utilizar el aceite de cannabis.</p>
                </div>
                <div className='card' style={{flexDirection: 'row'}}>
                    <img
                        alt="logo-doconline"
                        src={imagenUsuPractio01}
                        style={{borderRadius: '12px 0 0 12px'}}
                    />
                    <div className='card-container-text'>
                        <div>
                            <h4>Guía para hacer tu propio aceite de cannabis.</h4>
                            <p>Dados los innumerables beneficios que tiene el aceite de cannabis, es importante que los pacientes sepan como realizar su propia medicina.</p>
                            <a href="https://drive.google.com/file/d/1OYs8sBzpi8uln-1kGxpTrOOcEPXWdkWG/view" target="_blank" rel="noreferrer">
                                <button class="button" type="button" style={{ right: '2rem' }}>
                                    <span class="button__text">Descargar</span>
                                    <span class="button__icon"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 35 35" id="bdd05811-e15d-428c-bb53-8661459f9307" data-name="Layer 2" class="svg"><path d="M17.5,22.131a1.249,1.249,0,0,1-1.25-1.25V2.187a1.25,1.25,0,0,1,2.5,0V20.881A1.25,1.25,0,0,1,17.5,22.131Z"></path><path d="M17.5,22.693a3.189,3.189,0,0,1-2.262-.936L8.487,15.006a1.249,1.249,0,0,1,1.767-1.767l6.751,6.751a.7.7,0,0,0,.99,0l6.751-6.751a1.25,1.25,0,0,1,1.768,1.767l-6.752,6.751A3.191,3.191,0,0,1,17.5,22.693Z"></path><path d="M31.436,34.063H3.564A3.318,3.318,0,0,1,.25,30.749V22.011a1.25,1.25,0,0,1,2.5,0v8.738a.815.815,0,0,0,.814.814H31.436a.815.815,0,0,0,.814-.814V22.011a1.25,1.25,0,1,1,2.5,0v8.738A3.318,3.318,0,0,1,31.436,34.063Z"></path></svg></span>
                                </button>
                            </a>
                        </div>
                    </div>
                </div>

                <div className='card' style={{flexDirection: 'row-reverse'}}>
                    <img
                        alt="logo-doconline"
                        src={imagenUsuPractio02}
                        style={{borderRadius: '0 12px 12px 0'}}
                    />
                    <div className='card-container-text'>

                        <h4>¿Cómo tomar el aceite de cannabis?</h4>
                        <p>Es muy importante hacer la planificación de uso y dosificación de las gotas, ya que la efectividad de la terapia esta dada por la continuidad de la administración.</p>
                        <a href="https://drive.google.com/file/d/1QTIPfboOJytPdNvqGpu4GfXalUr5RYhr/view" target="_blank" rel="noreferrer">
                            <button class="button" type="button" style={{ left: '2rem' }}>
                                <span class="button__text">Descargar</span>
                                <span class="button__icon"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 35 35" id="bdd05811-e15d-428c-bb53-8661459f9307" data-name="Layer 2" class="svg"><path d="M17.5,22.131a1.249,1.249,0,0,1-1.25-1.25V2.187a1.25,1.25,0,0,1,2.5,0V20.881A1.25,1.25,0,0,1,17.5,22.131Z"></path><path d="M17.5,22.693a3.189,3.189,0,0,1-2.262-.936L8.487,15.006a1.249,1.249,0,0,1,1.767-1.767l6.751,6.751a.7.7,0,0,0,.99,0l6.751-6.751a1.25,1.25,0,0,1,1.768,1.767l-6.752,6.751A3.191,3.191,0,0,1,17.5,22.693Z"></path><path d="M31.436,34.063H3.564A3.318,3.318,0,0,1,.25,30.749V22.011a1.25,1.25,0,0,1,2.5,0v8.738a.815.815,0,0,0,.814.814H31.436a.815.815,0,0,0,.814-.814V22.011a1.25,1.25,0,1,1,2.5,0v8.738A3.318,3.318,0,0,1,31.436,34.063Z"></path></svg></span>
                            </button>
                        </a>
                    </div>

                </div>

            </div>

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
                .button {
                    bottom: 2rem;
                    position: absolute;
                    width: 150px;
                    height: 40px;
                    cursor: pointer;
                    display: flex;
                    align-items: center;
                    border: none;
                    background-color: #f1f1f3;
                    border-radius: 10px;
                    overflow: hidden;
                    @media only screen and (max-width: 1024px){
                        right: 2rem !important;
                    }
                    .button__icon, .button__text {
                        transition: all 0.3s;
                    }
                    .button__text {
                        transform: translateX(22px);
                        font-weight: 600;
                    }
                    .button__icon {
                        position: absolute;
                        transform: translateX(108px);
                        height: 100%;
                        width: 39px;
                        background-color: #00b1ff;
                        display: flex;
                        align-items: center;
                        justify-content: center;
                        padding-right: 5px;
                    }
                    svg {
                        width: 20px;
                        fill: white;
                    }
                    &:hover{
                        background:#f1f1f3;
                    }
                    &:hover .button__text {
                        color: transparent;
                    }
                    &:hover .button__text {
                        color: transparent;
                    }
                    &:hover .button__icon {
                        width: 148px;
                        transform: translateX(0);
                    }

                }
            }
        }
    }
`
