import "./UsuarioContainerUser.css";
import { useState } from "react";
import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import Row from "react-bootstrap/Row";
import axios from 'axios';

const UsuarioFormCrear = ({ showForm, ocultarFormCrearUsuario }) => {

    const [validated, setValidated] = useState(false);

    const actualizarForm = (event) => {
        event.preventDefault();
        const form = event.currentTarget;
        if (form.checkValidity() === false) {
            event.preventDefault();
            event.stopPropagation();
        } else {
            crearUsuario();
            ocultarFormCrearUsuario();
        }
        setValidated(true);
    };

    const [nombre, setNombre] = useState('');
    const [apellido, setApellido] = useState('');
    const [fechaNacimiento, setfechaNacimiento] = useState('');
    const [dni, setDni] = useState('');
    const [email, setEmail] = useState('');
    const [celular, setCelular] = useState('');

    const crearUsuario = (event) => {
        //Prevenimos por defecto el refresh del submit
        axios.put(
            '/api/user/',
            {   
                nombre: nombre,
                apellido: apellido,
                fechaNacimiento: fechaNacimiento,
                documento: dni,
                email: email,
                celular: celular
            },
            {headers: {'content-type': 'application/json'}}
        ).then(
            res => {
                console.log(res);
                console.log('Respuesta: ' + res);
/*                 if(res.data !== '') {
                    loguearUsuario(res.data);
                    navigate("/sesion");
                    setNombreUsuario('');
                    setPassUsuario('');
                } else {
                    handleShow();
                } */
            }
        )
        .catch(
            err => {
                console.log(err);
            }
        )
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
                        <Form.Group as={Col} md="10" controlId="validationCustom01">
                            <Form.Label>Nombre</Form.Label>
                            <Form.Control
                                required
                                type="text"
                                placeholder='Nombre'
                                id='nombre'
                                value={nombre}
                                onChange={({target}) => setNombre(target.value)}
                            />
                            <Form.Control.Feedback>Válido!</Form.Control.Feedback>
                        </Form.Group>
                    </Row>
                    <Row className="mb-1">
                        <Form.Group as={Col} md="10" controlId="validationCustom01">
                            <Form.Label>Apellido</Form.Label>
                            <Form.Control
                                required
                                type="text"
                                placeholder='Apellido'
                                id="apellido"
                                value={apellido}
                                onChange={({target}) => setApellido(target.value)}
                            />
                            <Form.Control.Feedback>Válido!</Form.Control.Feedback>
                        </Form.Group>
                    </Row>
                    <Row className="mb-1">
                        <Form.Group as={Col} md="10" controlId="validationCustom01">
                            <Form.Label>Fecha Nacimiento</Form.Label>
                            <Form.Control
                                required
                                type="date"
                                placeholder='MM/DD/AAAA'
                                value={fechaNacimiento}
                                id="fechaNacimiento"
                                onChange={({target}) => setfechaNacimiento(target.value)}
                            />
                            <Form.Control.Feedback>Válido!</Form.Control.Feedback>
                        </Form.Group>
                    </Row>
                    <Row className="mb-1">
                        <Form.Group as={Col} md="10" controlId="validationCustom01">
                            <Form.Label>Documento</Form.Label>
                            <Form.Control
                                required
                                type="text"
                                placeholder=''
                                value={dni}
                                id='documento'
                                onChange={({target}) => setDni(target.value)}
                            />
                            <Form.Control.Feedback>Válido!</Form.Control.Feedback>
                        </Form.Group>
                    </Row>
                    <Row className="mb-1">
                        <Form.Group as={Col} md="10" controlId="validationCustom01">
                            <Form.Label>Email</Form.Label>
                            <Form.Control
                                required
                                type="email"
                                placeholder='ejemplo@gmail.com'
                                value={email}
                                id='email'
                                onChange={({target}) => setEmail(target.value)}
                            />
                            <Form.Control.Feedback>Válido!</Form.Control.Feedback>
                        </Form.Group>
                    </Row>
                    <Row className="mb-1">
                        <Form.Group as={Col} md="10" controlId="validationCustom01">
                            <Form.Label>Celular</Form.Label>
                            <Form.Control
                                required
                                type="text"
                                placeholder=''
                                value={celular}
                                id="celular"
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
        </div>
    );
};

export default UsuarioFormCrear;
