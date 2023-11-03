import { useState } from 'react';
import styled from 'styled-components';
import Button from "../Button/Button";
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import { redirect } from 'react-router-dom';


function FormularioLanding() {
    const [validated, setValidated] = useState(false);

    const handleSubmit = (event) => {
        event.preventDefault();
        const form = event.currentTarget;
        if (form.checkValidity() === false) {
            event.preventDefault();
            event.stopPropagation();
            
        } else {
            redirect('https://doconline-frontend.azurewebsites.net/login');
        }
        setValidated(true);
    };

    return (
        <FormularioContainer id='formulario'>
            <svg viewBox="0 0 1440 320"><path fill="#e8e8ed" fill-opacity="1" d="M0,192L120,197.3C240,203,480,213,720,202.7C960,192,1200,160,1320,144L1440,128L1440,0L1320,0C1200,0,960,0,720,0C480,0,240,0,120,0L0,0Z"></path></svg>
            <div className='content'>
                <div className='title-form'>
                    <h3>¡Registrate ahora y cuida tu salud!</h3>
                    <p>Fácil, seguro y sin moverte de tu casa.</p>
                </div>
                <Form noValidate validated={validated} onSubmit={handleSubmit} className='d-flex justify-content-between formulario'>
                    <Form.Group as={Col} md="4" controlId="validationCustom01" className='containerInput'>
                        <Form.Control
                            required
                            type="text"
                            placeholder="Ingresa tu nombre completo"
                            className='p-3 inputNombre'
                        />
                        <Form.Control.Feedback type="invalid">
                            Por favor ingresa tu nombre.
                        </Form.Control.Feedback>
                        <Form.Control.Feedback>¡Correcto!</Form.Control.Feedback>
                    </Form.Group>
                    <Form.Group as={Col} md="4"   controlId="validationCustomUsername" className='containerInput'>
                        <InputGroup hasValidation   className='rounded-right'>
                            <InputGroup.Text id="inputGroupPrepend" className='p-3 '>@</InputGroup.Text>
                            <Form.Control
                                type="text"
                                placeholder="Ingresa tu e-mail"
                                aria-describedby="inputGroupPrepend"
                                required
                                className='inputMail'
                            />
                            <Form.Control.Feedback type="invalid">
                                Por favor ingresa tu e-mail.
                            </Form.Control.Feedback>
                            <Form.Control.Feedback>¡Correcto!</Form.Control.Feedback>
                        </InputGroup>
                    </Form.Group>
                    <Button type="submit" text={"Registrarse"} className="butonRegistro"></Button >
                </Form>
            </div>
            <svg viewBox="0 0 1440 320"><path fill="#f9f9f9" fill-opacity="1" d="M0,96L120,106.7C240,117,480,139,720,133.3C960,128,1200,96,1320,80L1440,64L1440,320L1320,320C1200,320,960,320,720,320C480,320,240,320,120,320L0,320Z"></path></svg>
        </FormularioContainer>
    );
}

export default FormularioLanding;


const FormularioContainer = styled.div`
    background-color: white;
    padding: 0rem 0 0rem 0;
    
    .content{
        background-color: #e8e8ed;
        border-radius: 14px;
        width:85%;
        padding: 3rem 13%;
        margin: auto;
        @media only screen and (max-width: 1540px) {
            padding: 3rem 5%;
        }
        @media only screen and (max-width: 1024px) {
            width: 90%;
        }
        .formulario{
            width: 100%;

            @media only screen and (max-width: 1024px) {
                flex-direction: column;
                justify-content: center;
                gap: 2rem;
                .containerInput{
                    width: 100% !important;
                }
                .sc-beyTiQ {
                    width: 12rem !important;

                    margin: auto 0 auto auto;
                }
            }
        }
        .title-form{
            display: flex;
            justify-content: center;
            align-items: center;
            flex-direction: column;
            margin-bottom: 2rem;
            text-align: center;
            p{
                font-size: 1.2rem;
                font-weight: 500;
                text-align: center;
            }
        }

        .inputMail{
            border-radius: 0 10px 10px 0!important;
        }

        .inputNombre{
            border-radius:  10px !important;
        }
    }
`