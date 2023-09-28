import './Login.css';
import { useContext, useState } from 'react';
import UsuarioContext from '../Context/UsuarioContext';
import { useNavigate } from 'react-router-dom';
import UsuarioFormCrear from '../UsuarioContainer/UsuarioFormCrear';
import ModalError from '../Modals/ModalError';
import ModalSucces from '../Modals/ModalSucces';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import axios from 'axios';

const Login = () => {

    /* MODAL */
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    /* MODAL CREAR USUAIRO*/
    const [showForm, setShowForm] = useState(false);
    const handleCloseForm = () => setShowForm(false);
    const handleShowForm = () => setShowForm(true);

    const [showSucces, setShowSucces] = useState(false);
    const handleCloseSucces = () => setShowSucces(false);
    /* const handleShowSucces = () => setShowSucces(true); */

    //States para usuario y contraseni
    const [emailUsuario, setEmail] = useState('');
    const [passUsuario, setPassUsuario] = useState('');

    const {loguearUsuario} = useContext(UsuarioContext);
    const navigate = useNavigate();
    const loguearse = (event) => {
        //Prevenimos por defecto el refresh del submit
        event.preventDefault();
        axios.post(
            '/api/user/',
            {nombre: emailUsuario, email: passUsuario},
            {headers: {'content-type': 'application/json'}}
        ).then(
            res => {
                console.log(res.data);
                if(res.data !== '') {
                    loguearUsuario(res.data);
                    setEmail('');
                    setPassUsuario('');
                    navigate("/sesion");
                } else {
                    handleShow();
                }
            }
        )
        .catch(
            err => {
                console.log(err);
                handleShow();
            }
        )
    }

    const handleKeyPress = (evento) => {
        let e = evento || window.event;
        if(e.keyCode === 13){
            loguearse();
        }
    }

    return (
        <div>
            <div className="container-login" onKeyDown={() => handleKeyPress()}>
                <Form onSubmit={loguearse} id='form-logueo'>
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>Correo de Email:</Form.Label>
                        <Form.Control
                            type="text"
                            placeholder="Ingrese su correo" 
                            id="usuario"
                            value={emailUsuario}
                            onChange={({target}) => setEmail(target.value)}
                        />
                        <Form.Text className="text-muted">
                            Ingrese su correo
                        </Form.Text>
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formBasicPassword">
                        <Form.Label>Contraseña:</Form.Label>
                        <Form.Control
                            type="password"
                            placeholder="Ingrese su contraseña"
                            id="contrasenia"
                            value={passUsuario}
                            onChange={({target}) => setPassUsuario(target.value)}
                        />
                        <Form.Text className="text-muted">
                            Ingrese su contraseña
                        </Form.Text>
                    </Form.Group>
                    <Button type='submit' variant="outline-success">Iniciar Sesión</Button>
                </Form>
                <div className='container-boton-crear-usuario'>
                    <Button variant="outline-info" onClick={handleShowForm}>Crear Usuario</Button>
                </div>
            </div>
            <UsuarioFormCrear showForm={showForm} ocultarFormCrearUsuario={handleCloseForm}/>
            <ModalError showError={show} handleCloseError={handleClose} info= {'Usuario y/o contraseña incorrecta.'} />
            <ModalSucces showSucces={showSucces} handleCloseSucces={handleCloseSucces} info={'Acceso Exitoso!'}/>
        </div>
    );
}
export default Login;