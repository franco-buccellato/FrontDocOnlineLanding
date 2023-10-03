import styled from 'styled-components';

function Button({text}) {

    return (
        <>
            <ButtonPrincipal>
                    <span>{text}</span>
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-arrow-right-short" viewBox="0 0 16 16"><path fill-rule="evenodd" d="M4 8a.5.5 0 0 1 .5-.5h5.793L8.146 5.354a.5.5 0 1 1 .708-.708l3 3a.5.5 0 0 1 0 .708l-3 3a.5.5 0 0 1-.708-.708L10.293 8.5H4.5A.5.5 0 0 1 4 8z"/></svg>
            </ButtonPrincipal>
        </>

    );
}

export default Button;

const ButtonPrincipal = styled.button`

    cursor: pointer;
    font-weight: 500;
    transition: all .2s;
    padding: 10px 20px;
    border-radius: 100px;
    background: #cfef00;
    border: 1px solid transparent;
    display: flex;
    align-items: center;
    font-size: 15px;
    &:hover{
        background: #c4e201;
    }

    svg {
        width: 24px;
        height: 24px;
        margin-left: 6px;
        transition: transform .3s ease-in-out;
    }

    &:hover svg{
        transform: translateX(5px);
    }

    &:active{
        transform: scale(0.95);
    }

`