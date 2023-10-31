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

            <Cuadrado7></Cuadrado7>

            <Cuadrado8></Cuadrado8>
            <Cuadrado9></Cuadrado9>

            <Cuadrado10></Cuadrado10>
            <Cuadrado11></Cuadrado11>
        </>

    );
}

export default CuadradosFondo;

const Cuadrado1 = styled.span`

    position: absolute;
    top: -4rem;
    left: -5rem;
    height:12rem;
    width: 12rem;
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
    height:12rem;
    width: 12rem;

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
    height:5rem;
    width: 5rem;
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
    height:4rem;
    width: 4rem;
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
    height:8rem;
    width: 8rem;
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
    height: 2rem;
    width: 2rem;
    border-radius: 26%;
    background: -moz-linear-gradient(90deg, rgba(0,206,206,1) 0%, rgba(0,177,255,1) 96%); background: -webkit-linear-gradient(90deg, rgba(0,206,206,1) 0%, rgba(0,177,255,1) 96%); background: linear-gradient(90deg, rgba(0,206,206,1) 0%, rgba(0,177,255,1) 96%); filter: progid:DXImageTransform.Microsoft.gradient(startColorstr="#00cece",endColorstr="#00b1ff",GradientType=1);   
    transform: rotate(70deg);
    z-index: 10;
    @media only screen and (max-width: 1540px) {
        top: 92rem;
        right: 12rem;
    }
    @media only screen and (max-width: 1024px) {
        display: none;
    }
`

const Cuadrado7 = styled.span`

    position: absolute;
    top: 166rem;
    right: 4rem;
    width: 2rem;
    height: 2rem;
    border-radius: 26%;
    background: -moz-linear-gradient(90deg, rgba(0,206,206,1) 0%, rgba(0,177,255,1) 96%); background: -webkit-linear-gradient(90deg, rgba(0,206,206,1) 0%, rgba(0,177,255,1) 96%); background: linear-gradient(90deg, rgba(0,206,206,1) 0%, rgba(0,177,255,1) 96%); filter: progid:DXImageTransform.Microsoft.gradient(startColorstr="#00cece",endColorstr="#00b1ff",GradientType=1);   
    transform: rotate(70deg);
    z-index: 10;
    @media only screen and (max-width: 1540px) {
        top: 140rem;
        right: 2rem;
    }
    @media only screen and (max-width: 1024px) {
        display: none;
    }
`

const Cuadrado8 = styled.span`

    position: absolute;
    top: 250rem;
    left: -5rem;
    width: 7rem;
    height: 7rem;
    border-radius: 26%;
    background: -moz-linear-gradient(90deg, rgba(0,206,206,1) 0%, rgba(0,177,255,1) 96%); background: -webkit-linear-gradient(90deg, rgba(0,206,206,1) 0%, rgba(0,177,255,1) 96%); background: linear-gradient(90deg, rgba(0,206,206,1) 0%, rgba(0,177,255,1) 96%); filter: progid:DXImageTransform.Microsoft.gradient(startColorstr="#00cece",endColorstr="#00b1ff",GradientType=1);   
    transform: rotate(70deg);
    z-index: 10;
    @media only screen and (max-width: 1024px) {
        display: none;
    }
`

const Cuadrado9 = styled.span`

    position: absolute;
    top: 252rem;
    left: -7rem;
    width: 7rem;
    height: 7rem;

    border-radius: 26%;
    background: -moz-linear-gradient(90deg, rgba(0,206,206,1) 0%, rgba(0,177,255,1) 96%); background: -webkit-linear-gradient(90deg, rgba(0,206,206,1) 0%, rgba(0,177,255,1) 96%); background: linear-gradient(90deg, rgba(0,206,206,1) 0%, rgba(0,177,255,1) 96%); filter: progid:DXImageTransform.Microsoft.gradient(startColorstr="#00cece",endColorstr="#00b1ff",GradientType=1);   
    transform: rotate(70deg);
    z-index: 9;
    filter: blur(20px);
    @media only screen and (max-width: 1024px) {
        display: none;
    }
`

const Cuadrado10 = styled.span`

    position: absolute;
    top: 206rem;
    right: 4rem;
    width: 7rem;
    height: 7rem;
    border-radius: 26%;
    background: -moz-linear-gradient(90deg, rgba(0,206,206,1) 0%, rgba(0,177,255,1) 96%); background: -webkit-linear-gradient(90deg, rgba(0,206,206,1) 0%, rgba(0,177,255,1) 96%); background: linear-gradient(90deg, rgba(0,206,206,1) 0%, rgba(0,177,255,1) 96%); filter: progid:DXImageTransform.Microsoft.gradient(startColorstr="#00cece",endColorstr="#00b1ff",GradientType=1);   
    transform: rotate(70deg);
    z-index: 10;
    @media only screen and (max-width: 1024px) {
        display: none;
    }
`

const Cuadrado11 = styled.span`

    position: absolute;
    top: 208rem;
    right: 3rem;
    width: 6rem;
    height: 6rem;
    border-radius: 26%;
    background: -moz-linear-gradient(90deg, rgba(0,206,206,1) 0%, rgba(0,177,255,1) 96%); background: -webkit-linear-gradient(90deg, rgba(0,206,206,1) 0%, rgba(0,177,255,1) 96%); background: linear-gradient(90deg, rgba(0,206,206,1) 0%, rgba(0,177,255,1) 96%); filter: progid:DXImageTransform.Microsoft.gradient(startColorstr="#00cece",endColorstr="#00b1ff",GradientType=1);   
    transform: rotate(70deg);
    z-index: 9;
    filter: blur(20px);
    @media only screen and (max-width: 1024px) {
        display: none;
    }
`