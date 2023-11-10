import './SectionSesion.css';
import { useContext } from 'react';
import UsuarioContext from '../Context/UsuarioContext';
import UsuarioContainerUser from '../UsuarioContainer/UsuarioContainerUser';

const SectionSesion = () => {

    const {usuario, desloguearUsuario} = useContext(UsuarioContext);

    return <UsuarioContainerUser usuario={usuario} desloguearUsuario={desloguearUsuario}/>

}

export default SectionSesion;