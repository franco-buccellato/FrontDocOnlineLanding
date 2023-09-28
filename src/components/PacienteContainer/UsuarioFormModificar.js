import "./UsuarioContainerUser.css";
import { useState } from "react";
import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import Row from "react-bootstrap/Row";

const UsuarioFormModificar = ({ usuario, show, ocultarFormUsuario }) => {

    const [validated, setValidated] = useState(false);

    const actualizarForm = (event) => {
        event.preventDefault();
        const form = event.currentTarget;
        if (form.checkValidity() === false) {
            event.preventDefault();
            event.stopPropagation();
        } else {
            ocultarFormUsuario();
        }
        setValidated(true);
        };

    return (
        <div className="container-form-user">
            <Modal show={show} onHide={ocultarFormUsuario}>
                <Modal.Header closeButton>
                <Modal.Title>Modificar Información</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                <Form noValidate validated={validated} onSubmit={actualizarForm} >
                    <Row className="mb-1">
                        <Form.Group as={Col} md="10" controlId="validationCustom01">
                            <Form.Label>Nombre</Form.Label>
                            <Form.Control
                            required
                            type="text"
                            placeholder={usuario.nombre}
                            defaultValue={usuario.nombre}
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
                            placeholder={usuario.apellido}
                            defaultValue={usuario.apellido}
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
                            placeholder={usuario.fechaNacimiento}
                            defaultValue={usuario.fechaNacimiento}
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
                            placeholder={usuario.documento}
                            defaultValue={usuario.documento}
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
                            placeholder={usuario.email}
                            defaultValue={usuario.email}
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
                            placeholder={usuario.celular}
                            defaultValue={usuario.celular}
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
            {/* <ModalExitoso info={'La información del Usuario fue actualizada.'} show={showExitoso} ocultar={ocultarExitoso }/> */}
        </div>
    );
};

export default UsuarioFormModificar;
