import './UsuarioContainerUser.css';
import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import UsuarioFormModificar from './UsuarioFormModificar';
import UsuarioDesloguear from './UsuarioDesloguear';
import UsuarioPaciente from './UsuarioPaciente';
import imagenUsuario from '../../imagenes/usuario.png';


const UsuarioContainerUser = ({usuario, desloguearUsuario}) => {

    const [show, setShow] = useState(false);

    const ocultarFormUsuario = () => setShow(false);
    const mostrarFormUsuario = () => setShow(true);

    return(
        <div className='container-user'>
            <Form className='w-100 user-informacion'>
                <div className='user-informacion-container'>
                    <div className='user-informacion-datos-1'>
                        <img
                            alt="usuario"
                            src={imagenUsuario}
                        />
                    </div>
                    <div className='user-informacion-datos-2'>
                        <Row className="mb-3">
                            <Form.Group as={Col} controlId="nombre">
                                <Form.Label>Nombre</Form.Label>
                                <Form.Control type="text" placeholder="Nombre" defaultValue={usuario.nombre} disabled/>
                            </Form.Group>
                            <Form.Group as={Col} controlId="apellido">
                                <Form.Label>Apellido</Form.Label>
                                <Form.Control type="text" placeholder="Apellido" defaultValue={usuario.apellido} disabled/>
                            </Form.Group>
                            <Form.Group as={Col} controlId="fechaNacimiento">
                                <Form.Label>Fecha de Nacimiento</Form.Label>
                                <Form.Control type="text" placeholder="Apellido" defaultValue={usuario.fechaNacimiento} disabled/>
                            </Form.Group>
                        </Row>
                        <Row className="mb-3">
                            <Form.Group as={Col} controlId="documento">
                                <Form.Label>Documento</Form.Label>
                                <Form.Control type="text" placeholder="Documento" defaultValue={usuario.documento} disabled/>
                            </Form.Group>
                            <Form.Group as={Col} controlId="email">
                                <Form.Label>Email</Form.Label>
                                <Form.Control type="text" placeholder="Email" defaultValue={usuario.email} disabled/>
                            </Form.Group>
                            <Form.Group as={Col} controlId="celular">
                                <Form.Label>Celular</Form.Label>
                                <Form.Control type="text" placeholder="Celular" defaultValue={usuario.celular} disabled/>
                            </Form.Group>
                        </Row>
                    </div>
                </div>
                <Button variant="info" className='boton-modificar-info' onClick={mostrarFormUsuario}>Modificar Información<ion-icon name="create-outline"></ion-icon></Button>
            </Form>
            <UsuarioFormModificar usuario={usuario} show={show} ocultarFormUsuario={ocultarFormUsuario}/>
            <UsuarioPaciente/>
            <UsuarioDesloguear desloguearUsuario={desloguearUsuario}/>
        </div>
    )
}

export default UsuarioContainerUser;