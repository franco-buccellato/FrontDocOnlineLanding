import styled from 'styled-components';
import { motion } from "framer-motion";


function VideoIntroduccion() {

    return (
        <>
            <Separador />
            <VideoIntroduccionContainer id='como-funciona'>
                <div className='container-video'>
                    <iframe id='video-1' src="https://www.youtube.com/embed/2EpdYYa5oC8" allow="fullscreen" allowFullScreen="" style={{ minHeight: 'auto', height: '100%', transform: 'none', width: '100%', borderRadius: '10px' }}></iframe>
                </div>
            </VideoIntroduccionContainer>
        </>
    );
}

export default VideoIntroduccion;

const VideoIntroduccionContainer = styled.div`
    width: 100%;
    background: white;
    padding: 6rem 0;
    margin: 16rem 0 0 0;
    @media only screen and (max-width: 920px){
        margin: 9rem 0 0 0;
        padding: 5rem 0 2rem 0;
    }
    .container-video{
        width: 60%;
        display: flex;
        margin: 6rem auto 0rem auto;
        height: 30rem;
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
    }
`

const Separador = styled.div`

    width: 100%;
    height: 14rem;
    background: white;
    margin-top: 0;
    z-index: 1;
    -webkit-transform: skewY(5deg) translateY(100px);
    -moz-transform: skewY(5deg) translateY(100px);
    -ms-transform: skewY(5deg) translateY(100px);
    transform: skewY(5deg) translateY(100px);
    position: absolute;

    @media only screen and (max-width: 920px){
        height: 6rem;
    }
`