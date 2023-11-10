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
//GOOGLE
import { useGoogleLogin } from '@react-oauth/google';

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

    const {estaLogueado, loguearUsuario} = useContext(UsuarioContext);
    const navigate = useNavigate();
    const loguearse = (event) => {
        //Prevenimos por defecto el refresh del submit
        event.preventDefault();
        axios.post(
            '/api/user/',
            {email: emailUsuario, contrasenia: passUsuario},
            {headers: {'content-type': 'application/json'}}
        ).then(
            res => {
                if(res.data !== '' && res.data._id !== undefined ) {
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
    const [ googleUser, setGoogleUser ] = useState();

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
                            {headers: {'content-type': 'application/json'}}
                        ).then(
                            response => {
                                if(response.data !== '' && response.data._id !== undefined ) {
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
        [ googleUser ]
    );

    const handleKeyPress = (evento) => {
        let e = evento || window.event;
        if(e.keyCode === 13){
            loguearse();
        }
    }

    if(!estaLogueado()) {
        return (
            <div>
                <div className="container-login" onKeyDown={() => handleKeyPress()}>
                    <Form onSubmit={loguearse} id='form-logueo'>
                        <Form.Group className="mb-3" controlId="formBasicEmail1">
                            <Form.Label>Correo de Email:</Form.Label>
                            <Form.Control
                                type="text"
                                placeholder="Ingrese su correo" 
                                /* id="usuario" */
                                value={emailUsuario}
                                onChange={({target}) => setEmail(target.value)}
                            />
                            <Form.Text className="text-muted">
                                Ingrese su correo
                            </Form.Text>
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="formBasicPassword1">
                            <Form.Label>Contraseña:</Form.Label>
                            <Form.Control
                                type="password"
                                placeholder="Ingrese su contraseña"
                                /* id="contrasenia" */
                                value={passUsuario}
                                onChange={({target}) => setPassUsuario(target.value)}
                            />
                            <Form.Text className="text-muted">
                                Ingrese su contraseña
                            </Form.Text>
                        </Form.Group>
                        <Button type='submit' variant="outline-success">Iniciar Sesión</Button>
                    </Form>
                    <div className="google-btn" onClick={() => gLogin()}>
                        <div className="google-icon-wrapper">
                            <img className="google-icon" src="https://upload.wikimedia.org/wikipedia/commons/5/53/Google_%22G%22_Logo.svg" alt="google button" />
                        </div>
                        <p className="btn-text">
                            <b>Iniciar Sesión con Google</b>
                        </p>
                    </div>
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
    
}
export default Login;