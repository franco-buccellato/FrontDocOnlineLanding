import styled from 'styled-components';

function CuadradosFondo() {

    return (

        //En total hay 11 cuadrados

        <>
            <Cuadrado1></Cuadrado1>
            <Cuadrado2></Cuadrado2>

            <Cuadrado3></Cuadrado3>
            <Cuadrado4></Cuadrado4>
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


    @media only screen and (max-width: 850px){
        display: none;
    }

`

