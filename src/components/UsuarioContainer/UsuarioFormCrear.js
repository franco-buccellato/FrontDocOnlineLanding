import "./UsuarioContainerUser.css";
import { useState } from "react";
import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import Row from "react-bootstrap/Row";
import axios from 'axios';
import ModalError from '../Modals/ModalError';
import ModalSucces from '../Modals/ModalSucces';

const UsuarioFormCrear = ({ showForm, ocultarFormCrearUsuario }) => {

    const [validated, setValidated] = useState(false);

        /* MODAL ERROR*/
        const [showError, setShowError] = useState(false);
        const handleCloseError = () => setShowError(false);
        const handleShowError = () => setShowError(true);
        const [motivoErrorCrear, setMotivoErrorCrear] = useState('');
        /* MODAL SUCCES*/    
        const [showSucces, setShowSucces] = useState(false);
        const handleCloseSucces = () => setShowSucces(false);
        const handleShowSucces = () => setShowSucces(true);
        /* MODAL ERROR contrasenias*/
        const [showErrorContrasenias, setShowErrorContrasenias] = useState(false);
        const handleCloseErrorContrasenias = () => setShowErrorContrasenias(false);
        const handleShowErrorContrasenias = () => setShowErrorContrasenias(true);

    const actualizarForm = (event) => {
        event.preventDefault();
        const form = event.currentTarget;
        if (form.checkValidity() === false) {
            event.preventDefault();
            event.stopPropagation();
        } else if(contraseniasValidadIguales()){
            crearUsuario();
            ocultarFormCrearUsuario();
        }
        //setValidated(true);
    };

    const [nombre, setNombre] = useState('');
    const [apellido, setApellido] = useState('');
    const [fechaNacimiento, setfechaNacimiento] = useState('');
    const [documento, setDocumento] = useState('');
    const [email, setEmail] = useState('');
    const [contrasenia, setContrasenia] = useState('');
    const [contrasenia2, setContrasenia2] = useState('');
    const [celular, setCelular] = useState('');

    const crearUsuario = () => {
        //Prevenimos por defecto el refresh del submit
            axios.put(
                '/api/user/',
                {   
                    documento: documento,
                    email: email,
                    nombre: nombre,
                    apellido: apellido,
                    celular: celular,
                    fechaNacimiento: fechaNacimiento,
                    contrasenia: contrasenia
                },
                {headers: {'content-type': 'application/json'}}
            ).then(
                res => {
                    console.log(res.response.data.motivo);
                    console.log(res.response.data);
                    console.log('Respuesta: ' + res);
                    if(res.data !== '') {
                        handleShowSucces();
                    } else {
                        handleShowError();
                    }
                }
            )
            .catch(
                err => {
                    console.log(err);
                    setMotivoErrorCrear(err.response.data.motivo);
                    handleShowError();
                }
            )
    }

    const contraseniasValidadIguales = () => {
        console.log(contrasenia);
        console.log(contrasenia2);
        return contrasenia === contrasenia2;
    }

    return (
        <div className="container-form-user">
            <Modal show={showForm} onHide={ocultarFormCrearUsuario}>
                <Modal.Header closeButton>
                <Modal.Title>Complete sus datos:</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                <Form noValidate validated={validated} onSubmit={actualizarForm} >
                <Row className="mb-1">
                        <Form.Group as={Col} md="10" controlId="validationEmail">
                            <Form.Label>Email</Form.Label>
                            <Form.Control
                                required
                                type="email"
                                placeholder='ejemplo@gmail.com'
                                value={email}
                                /* id='email' */
                                onChange={({target}) => setEmail(target.value)}
                            />
                            <Form.Control.Feedback>Válido!</Form.Control.Feedback>
                        </Form.Group>
                    </Row>
                    <Row className="mb-1">
                        <Form.Group as={Col} md="10" controlId="validationContrasenia">
                            <Form.Label>Contraseña</Form.Label>
                            <Form.Control
                                required
                                type="password"
                                placeholder=''
                                value={contrasenia}
                                /* id='contrasenia' */
                                onChange={({target}) => setContrasenia(target.value)}
                            />
                            <Form.Control.Feedback>Válido!</Form.Control.Feedback>
                        </Form.Group>
                    </Row>
                    <Row className="mb-1">
                        <Form.Group as={Col} md="10" controlId="validationContrasenia2">
                            <Form.Label>Repita la contraseña</Form.Label>
                            <Form.Control
                                required
                                type="password"
                                placeholder=''
                                value={contrasenia2}
                                /* id='contrasenia2' */
                                onChange={({target}) => setContrasenia2(target.value)}
                            />
                            <Form.Control.Feedback>Válido!</Form.Control.Feedback>
                        </Form.Group>
                    </Row>
                    <Row className="mb-1">
                        <Form.Group as={Col} md="10" controlId="validationNombre">
                            <Form.Label>Nombre</Form.Label>
                            <Form.Control
                                required
                                type="text"
                                placeholder='Nombre'
                                /* id='nombre' */
                                value={nombre}
                                onChange={({target}) => setNombre(target.value)}
                            />
                            <Form.Control.Feedback>Válido!</Form.Control.Feedback>
                        </Form.Group>
                    </Row>
                    <Row className="mb-1">
                        <Form.Group as={Col} md="10" controlId="validationApellido">
                            <Form.Label>Apellido</Form.Label>
                            <Form.Control
                                required
                                type="text"
                                placeholder='Apellido'
                                /* id="apellido" */
                                value={apellido}
                                onChange={({target}) => setApellido(target.value)}
                            />
                            <Form.Control.Feedback>Válido!</Form.Control.Feedback>
                        </Form.Group>
                    </Row>
                    <Row className="mb-1">
                        <Form.Group as={Col} md="10" controlId="validationFechaNacimiento">
                            <Form.Label>Fecha Nacimiento</Form.Label>
                            <Form.Control
                                required
                                type="date"
                                placeholder='MM/DD/AAAA'
                                value={fechaNacimiento}
                                /* id="fechaNacimiento" */
                                onChange={({target}) => setfechaNacimiento(target.value)}
                            />
                            <Form.Control.Feedback>Válido!</Form.Control.Feedback>
                        </Form.Group>
                    </Row>
                    <Row className="mb-1">
                        <Form.Group as={Col} md="10" controlId="validationDocumento">
                            <Form.Label>Documento</Form.Label>
                            <Form.Control
                                required
                                type="text"
                                placeholder=''
                                value={documento}
                                /* id='documento' */
                                onChange={({target}) => setDocumento(target.value)}
                            />
                            <Form.Control.Feedback>Válido!</Form.Control.Feedback>
                        </Form.Group>
                    </Row>
                    <Row className="mb-1">
                        <Form.Group as={Col} md="10" controlId="validationCelular">
                            <Form.Label>Celular</Form.Label>
                            <Form.Control
                                required
                                type="text"
                                placeholder=''
                                value={celular}
                                /* id="celular" */
                                onChange={({target}) => setCelular(target.value)}
                            />
                            <Form.Control.Feedback>Válido!</Form.Control.Feedback>
                        </Form.Group>
                    </Row>
                    <Button type="submit" variant="primary">Crear Usuario</Button>
                </Form>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={ocultarFormCrearUsuario}>
                        Cerrar
                    </Button>
                </Modal.Footer>
            </Modal>
            <ModalError showError={showError} handleCloseError={handleCloseError} info={motivoErrorCrear === '' ? 'Hubo un inconveniente en crear el usuario.' : motivoErrorCrear + '.'} />
            <ModalError showError={showErrorContrasenias} handleCloseError={handleCloseErrorContrasenias} info={'Las contraseñas no coinciden.'} />
            <ModalSucces showSucces={showSucces} handleCloseSucces={handleCloseSucces} info={'Usuario creado correctamente!'}/>
        </div>
    );
};

export default UsuarioFormCrear;
