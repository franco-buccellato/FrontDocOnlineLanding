import './Login.css';
import { useContext, useState, useEffect } from 'react';
import UsuarioContext from '../Context/UsuarioContext';
import { useNavigate } from 'react-router-dom';
import UsuarioFormCrear from '../UsuarioContainer/UsuarioFormCrear';
import ModalError from '../Modals/ModalError';
import ModalSucces from '../Modals/ModalSucces';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import axios from 'axios';
import logo from '../../imagenes/Logotipo.webp';
//GOOGLE
import { useGoogleLogin } from '@react-oauth/google';

const Login = ({ setMostrarEncabezado }) => {

    useEffect(() => {
        setMostrarEncabezado(false)
    })

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

    const { estaLogueado, loguearUsuario } = useContext(UsuarioContext);
    const navigate = useNavigate();
    const loguearse = (event) => {
        //Prevenimos por defecto el refresh del submit
        event.preventDefault();
        axios.post(
            '/api/user/',
            { email: emailUsuario, contrasenia: passUsuario },
            { headers: { 'content-type': 'application/json' } }
        ).then(
            res => {
                if (res.data !== '' && res.data._id !== undefined) {
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

    //GOOGLE
    const [googleUser, setGoogleUser] = useState();

    const gLogin = useGoogleLogin({
        onSuccess: (codeResponse) => setGoogleUser(codeResponse),
        onError: (error) => console.log('Login Failed:', error)
    });

    useEffect(
        () => {
            if (googleUser) {
                axios
                    .get(`https://www.googleapis.com/oauth2/v1/userinfo?access_token=${googleUser.access_token}`, {
                        headers: {
                            Authorization: `Bearer ${googleUser.access_token}`,
                            Accept: 'application/json'
                        }
                    })
                    .then((res) => {
                        console.log(res.data)
                        //Pedir datos del usuario en nuestra app
                        axios.post(
                            '/api/user/',
                            {
                                email: res.data.email,
                                apellido: res.data.family_name,
                                nombre: res.data.given_name,
                                verificacionGoogle: res.data.verified_email
                            },
                            { headers: { 'content-type': 'application/json' } }
                        ).then(
                            response => {
                                if (response.data !== '' && response.data._id !== undefined) {
                                    loguearUsuario(response.data);
                                    setEmail('');
                                    setPassUsuario('');
                                    navigate("/sesion");
                                } else {
                                    handleShow();
                                }
                            }
                        )
                            .catch(
                                error => {
                                    console.log(error);
                                    handleShow();
                                }
                            )
                    })
                    .catch((err) => console.log(err));
            }
        },
        [googleUser]
    );

    const handleKeyPress = (evento) => {
        let e = evento || window.event;
        if (e.keyCode === 13) {
            loguearse();
        }
    }

    if (!estaLogueado()) {
        return (
            <div className='container'>
                <div className="container-login" onKeyDown={() => handleKeyPress()}>
                    <div className='container-logo'>
                        <div className='logo--container-img'>
                            <img
                                alt="logo-doconline"
                                src={logo}
                                width="50"
                                className="d-inline-block align-center"
                            />
                        </div>
                        <div className='logo--container-text'>
                            <p>Doc.</p>
                            <p>Online</p>
                        </div>
                    </div>
                    <Form onSubmit={loguearse} id='form-logueo'>
                        <Form.Group controlId="formBasicEmail1" className='grupo-form'>
                            <Form.Label className='label'>Correo electronico</Form.Label>
                            <Form.Control
                                type="text"
                                className='input'
                                placeholder="nombre@email.com"
                                /* id="usuario" */
                                value={emailUsuario}
                                onChange={({ target }) => setEmail(target.value)}
                            />
                        </Form.Group>
                        <Form.Group controlId="formBasicPassword1" className='grupo-form'>
                            <Form.Label className='label'>Contraseña</Form.Label>
                            <Form.Control
                                className='input'
                                type="password"
                                placeholder="Ingrese su contraseña"
                                /* id="contrasenia" */
                                value={passUsuario}
                                onChange={({ target }) => setPassUsuario(target.value)}
                            />
                        </Form.Group>
                        <Button type='submit' className='button-iniciar' >Iniciar Sesión</Button>
                    </Form>
                    <div className="google-btn" onClick={() => gLogin()}>
                        <div className="google-icon-wrapper">
                            <svg preserveAspectRatio="xMidYMid" viewBox="0 0 256 262"><path fill="#4285F4" d="M255.878 133.451c0-10.734-.871-18.567-2.756-26.69H130.55v48.448h71.947c-1.45 12.04-9.283 30.172-26.69 42.356l-.244 1.622 38.755 30.023 2.685.268c24.659-22.774 38.875-56.282 38.875-96.027"></path><path fill="#34A853" d="M130.55 261.1c35.248 0 64.839-11.605 86.453-31.622l-41.196-31.913c-11.024 7.688-25.82 13.055-45.257 13.055-34.523 0-63.824-22.773-74.269-54.25l-1.531.13-40.298 31.187-.527 1.465C35.393 231.798 79.49 261.1 130.55 261.1"></path><path fill="#FBBC05" d="M56.281 156.37c-2.756-8.123-4.351-16.827-4.351-25.82 0-8.994 1.595-17.697 4.206-25.82l-.073-1.73L15.26 71.312l-1.335.635C5.077 89.644 0 109.517 0 130.55s5.077 40.905 13.925 58.602l42.356-32.782"></path><path fill="#EB4335" d="M130.55 50.479c24.514 0 41.05 10.589 50.479 19.438l36.844-35.974C195.245 12.91 165.798 0 130.55 0 79.49 0 35.393 29.301 13.925 71.947l42.211 32.783c10.59-31.477 39.891-54.251 74.414-54.251"></path></svg>
                        </div>
                        <p className="btn-text">
                            Iniciar Sesión con Google
                        </p>
                    </div>


                    <div className='separador'>
                        <div className='linea'></div>
                        <span>¿Aún no estas registrado?</span>
                        <div className='linea'></div>
                    </div>

                    <div className='container-boton-crear-usuario'>
                        <Button className='button-crear' onClick={handleShowForm}>Crear Usuario</Button>
                    </div>
                </div>
                <UsuarioFormCrear showForm={showForm} ocultarFormCrearUsuario={handleCloseForm} />
                <ModalError showError={show} handleCloseError={handleClose} info={'Usuario y/o contraseña incorrecta.'} />
                <ModalSucces showSucces={showSucces} handleCloseSucces={handleCloseSucces} info={'Acceso Exitoso!'} />
            </div>
        );
    }

}
export default Login;