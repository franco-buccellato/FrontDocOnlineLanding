import './GestorLogin.css';
import { useContext } from 'react';
import UsuarioContext from '../Context/UsuarioContext';
import Button from 'react-bootstrap/Button';
import { Link } from 'react-router-dom';

const GestorLogin = () => {

    const {usuario, estaLogueado} = useContext(UsuarioContext);

    return (
        <div className='container-usuario'>
            {
                !estaLogueado() ?
                <Button variant="success">Iniciar Sesión</Button>
                :
                <Link to = {'/sesion'} className='boton-usuario'>
                    <Button variant="info"><ion-icon name="person-circle-outline" size='large'></ion-icon> {usuario.nombre}</Button>{' '}
                </Link>
                
            }
        </div>
    );
}

export default GestorLogin;