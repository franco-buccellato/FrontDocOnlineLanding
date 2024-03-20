import styled from 'styled-components';
import { motion } from "framer-motion";


function VideoIntroduccion() {

    return (
        <>

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
    margin: 2rem ;
    @media only screen and (max-width: 920px){
        margin: 2rem 0 ;
    }
    .container-video{
        width: 60%;
        display: flex;
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
