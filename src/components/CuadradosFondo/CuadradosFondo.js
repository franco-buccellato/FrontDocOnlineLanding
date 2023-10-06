import styled from 'styled-components';

function CuadradosFondo() {

    return (

        //En total hay 11 cuadrados

        <>
            <Cuadrado1></Cuadrado1>
            <Cuadrado2></Cuadrado2>

            <Cuadrado3></Cuadrado3>
            <Cuadrado4></Cuadrado4>

            <Cuadrado5></Cuadrado5>
            <Cuadrado6></Cuadrado6>
        </>

    );
}

export default CuadradosFondo;



const Cuadrado1 = styled.span`

    position: absolute;
    top: -4rem;
    left: -5rem;
    width: 12vw;
    height: 24vh;
    border-radius: 26%;
    background: -moz-linear-gradient(90deg, rgba(0,206,206,1) 0%, rgba(0,177,255,1) 96%); background: -webkit-linear-gradient(90deg, rgba(0,206,206,1) 0%, rgba(0,177,255,1) 96%); background: linear-gradient(90deg, rgba(0,206,206,1) 0%, rgba(0,177,255,1) 96%); filter: progid:DXImageTransform.Microsoft.gradient(startColorstr="#00cece",endColorstr="#00b1ff",GradientType=1);   
    transform: rotate(70deg);
    z-index: 10;
    @media only screen and (max-width: 1024px) {
        display: none;
    }
`

const Cuadrado2 = styled.span`

    position: absolute;
    top: 2rem;
    left: -8rem;
    width: 12vw;
    height: 24vh;

    border-radius: 26%;
    background: -moz-linear-gradient(90deg, rgba(0,206,206,1) 0%, rgba(0,177,255,1) 96%); background: -webkit-linear-gradient(90deg, rgba(0,206,206,1) 0%, rgba(0,177,255,1) 96%); background: linear-gradient(90deg, rgba(0,206,206,1) 0%, rgba(0,177,255,1) 96%); filter: progid:DXImageTransform.Microsoft.gradient(startColorstr="#00cece",endColorstr="#00b1ff",GradientType=1);   
    transform: rotate(70deg);
    z-index: 9;
    filter: blur(20px);
    @media only screen and (max-width: 1024px) {
        display: none;
    }
`

const Cuadrado3 = styled.span`

    position: absolute;
    top: 4rem;
    right: 2rem;
    width: 5vw;
    height: 10vh;
    border-radius: 26%;
    background: -moz-linear-gradient(90deg, rgba(0,206,206,1) 0%, rgba(0,177,255,1) 96%); background: -webkit-linear-gradient(90deg, rgba(0,206,206,1) 0%, rgba(0,177,255,1) 96%); background: linear-gradient(90deg, rgba(0,206,206,1) 0%, rgba(0,177,255,1) 96%); filter: progid:DXImageTransform.Microsoft.gradient(startColorstr="#00cece",endColorstr="#00b1ff",GradientType=1);   
    transform: rotate(70deg);
    z-index: 10;
    @media only screen and (max-width: 1024px) {
        display: none;
    }
`

const Cuadrado4 = styled.span`
    position: absolute;
    top: 6rem;
    right: 0.9rem;
    width: 5vw;
    height: 10vh;
    border-radius: 26%;
    background: -moz-linear-gradient(90deg, rgba(0,206,206,1) 0%, rgba(0,177,255,1) 96%); background: -webkit-linear-gradient(90deg, rgba(0,206,206,1) 0%, rgba(0,177,255,1) 96%); background: linear-gradient(90deg, rgba(0,206,206,1) 0%, rgba(0,177,255,1) 96%); filter: progid:DXImageTransform.Microsoft.gradient(startColorstr="#00cece",endColorstr="#00b1ff",GradientType=1);   
    transform: rotate(70deg);
    z-index: 9;
    filter: blur(16px);
    @media only screen and (max-width: 1024px) {
        display: none;
    }
`

const Cuadrado5 = styled.span`
    position: absolute;
    top: 100rem;
    left: -4rem;
    width: 8vw;
    height: 16vh;
    border-radius: 26%;
    background: -moz-linear-gradient(90deg, rgba(0,206,206,1) 0%, rgba(0,177,255,1) 96%); background: -webkit-linear-gradient(90deg, rgba(0,206,206,1) 0%, rgba(0,177,255,1) 96%); background: linear-gradient(90deg, rgba(0,206,206,1) 0%, rgba(0,177,255,1) 96%); filter: progid:DXImageTransform.Microsoft.gradient(startColorstr="#00cece",endColorstr="#00b1ff",GradientType=1);   
    transform: rotate(70deg);
    z-index: 9;
    filter: blur(16px);
    @media only screen and (max-width: 1024px) {
        display: none;
    }
`

const Cuadrado6 = styled.span`

    position: absolute;
    top: 110rem;
    right: 22rem;
    width: 2vw;
    height: 4vh;
    border-radius: 26%;
    background: -moz-linear-gradient(90deg, rgba(0,206,206,1) 0%, rgba(0,177,255,1) 96%); background: -webkit-linear-gradient(90deg, rgba(0,206,206,1) 0%, rgba(0,177,255,1) 96%); background: linear-gradient(90deg, rgba(0,206,206,1) 0%, rgba(0,177,255,1) 96%); filter: progid:DXImageTransform.Microsoft.gradient(startColorstr="#00cece",endColorstr="#00b1ff",GradientType=1);   
    transform: rotate(70deg);
    z-index: 10;
    @media only screen and (max-width: 1024px) {
        display: none;
    }
`