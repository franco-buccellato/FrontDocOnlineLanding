import "./UsuarioContainerUser.css";
import { useState, useContext } from "react";
import UsuarioContext from '../Context/UsuarioContext';
import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import Row from "react-bootstrap/Row";
import axios from 'axios';
import ModalError from '../Modals/ModalError';
import ModalSucces from '../Modals/ModalSucces';

const UsuarioFormModificar = ({ usuario, show, ocultarFormUsuario }) => {

    /* MODAL ERROR*/
    const [showError, setShowError] = useState(false);
    const handleCloseError = () => setShowError(false);
    const handleShowError = () => setShowError(true);
    /* MODAL SUCCES*/    
    const [showSucces, setShowSucces] = useState(false);
    const handleCloseSucces = () => setShowSucces(false);
    const handleShowSucces = () => setShowSucces(true);

    const [validated, setValidated] = useState(false);
    const {actualizarUsuarioContext} = useContext(UsuarioContext);

    const [nombre, setNombre] = useState('');
    const [apellido, setApellido] = useState('');
    const [fechaNacimiento, setfechaNacimiento] = useState('');
    const [documento, setDocumento] = useState('');
    const [email, setEmail] = useState('');
    //const [contrasenia, setContrasenia] = useState('');
    const [celular, setCelular] = useState('');

    const actualizarForm = (event) => {
        event.preventDefault();
        const form = event.currentTarget;
        if (form.checkValidity() === false) {
            event.preventDefault();
            event.stopPropagation();
        } else {
            actualizarUsuario();
            ocultarFormUsuario();
        }
        setValidated(true);
        };

    const actualizarUsuario = () => {
        const usuarioActualizado = {
            _id: usuario._id,
            nombre: nombre !== '' ? nombre : usuario.nombre,
            apellido: apellido !== '' ? apellido : usuario.apellido,
            fechaNacimiento: fechaNacimiento !== '' ? fechaNacimiento : usuario.fechaNacimiento,
            documento: documento !== '' ? documento : usuario.documento,
            email: email !== '' ? email : usuario.email,
            celular: celular !== '' ? celular : usuario.celular,
            contrasenia: 'contrasenia'
        }
        
        console.log(usuarioActualizado);

        axios.put(
            '/api/user/actualizar',
            usuarioActualizado
        ).then(
            res => {
                console.log(res);
                console.log('Respuesta: ' + res);
                if(res.data !== '') {
                    //handleShowSucces();
                    actualizarUsuarioContext(usuarioActualizado);
                    handleShowSucces();
                    //window.location.reload(true);
                } else {
                    handleShowError();
                }
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
            <Modal show={show} onHide={ocultarFormUsuario}>
                <Modal.Header closeButton>
                <Modal.Title>Modificar Información</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                <Form noValidate validated={validated} onSubmit={actualizarForm} >
                    <Row className="mb-1">
                        <Form.Group as={Col} md="10" controlId="validationModificarNombre">
                            <Form.Label>Nombre</Form.Label>
                            <Form.Control
                                required
                                type="text"
                                placeholder={usuario.nombre}
                                defaultValue={usuario.nombre}
                                onChange={({target}) => setNombre(target.value)}
                            />
                            <Form.Control.Feedback>Válido!</Form.Control.Feedback>
                        </Form.Group>
                    </Row>
                    <Row className="mb-1">
                        <Form.Group as={Col} md="10" controlId="validationModificarApellido">
                            <Form.Label>Apellido</Form.Label>
                            <Form.Control
                                required
                                type="text"
                                placeholder={usuario.apellido}
                                defaultValue={usuario.apellido}
                                onChange={({target}) => setApellido(target.value)}
                            />
                            <Form.Control.Feedback>Válido!</Form.Control.Feedback>
                        </Form.Group>
                    </Row>
                    <Row className="mb-1">
                        <Form.Group as={Col} md="10" controlId="validationModificarFechaNacimiento">
                            <Form.Label>Fecha Nacimiento</Form.Label>
                            <Form.Control
                                required
                                type="date"
                                placeholder={usuario.fechaNacimiento}
                                defaultValue={usuario.fechaNacimiento}
                                onChange={({target}) => setfechaNacimiento(target.value)}
                            />
                            <Form.Control.Feedback>Válido!</Form.Control.Feedback>
                        </Form.Group>
                    </Row>
                    <Row className="mb-1">
                        <Form.Group as={Col} md="10" controlId="validationModificarDocumento">
                            <Form.Label>Documento</Form.Label>
                            <Form.Control
                                required
                                type="text"
                                placeholder={usuario.documento}
                                defaultValue={usuario.documento}
                                onChange={({target}) => setDocumento(target.value)}
                            />
                            <Form.Control.Feedback>Válido!</Form.Control.Feedback>
                        </Form.Group>
                    </Row>
                    <Row className="mb-1">
                        <Form.Group as={Col} md="10" controlId="validationModificarEmail">
                            <Form.Label>Email</Form.Label>
                            <Form.Control
                                required
                                type="text"
                                placeholder={usuario.email}
                                defaultValue={usuario.email}
                                onChange={({target}) => setEmail(target.value)}
                            />
                            <Form.Control.Feedback>Válido!</Form.Control.Feedback>
                        </Form.Group>
                    </Row>
                    <Row className="mb-1">
                        <Form.Group as={Col} md="10" controlId="validationModificarCelular">
                            <Form.Label>Celular</Form.Label>
                            <Form.Control
                                required
                                type="text"
                                placeholder={usuario.celular}
                                defaultValue={usuario.celular}
                                onChange={({target}) => setCelular(target.value)}
                            />
                            <Form.Control.Feedback>Válido!</Form.Control.Feedback>
                        </Form.Group>
                    </Row>
                    <Form.Group className="mb-3">
                        <Form.Check
                            required
                            label="Estoy seguro de modificar estos datos."
                            feedback="Confirme si está seguro."
                            feedbackType="invalid"
                        />
                    </Form.Group>
                    <Button type="submit" variant="primary">Guardar Cambios</Button>
                </Form>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={ocultarFormUsuario}>
                        Cerrar
                    </Button>
                </Modal.Footer>
            </Modal>
            <ModalError showError={showError} handleCloseError={handleCloseError} info={'Hubo un inconveniente al modificar el usuario.'} />
            <ModalSucces showSucces={showSucces} handleCloseSucces={handleCloseSucces} info={'Usuario modificado correctamente!'}/>
        </div>
    );
};

export default UsuarioFormModificar;
