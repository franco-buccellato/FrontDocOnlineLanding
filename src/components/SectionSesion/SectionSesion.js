import './SectionSesion.css';
import { useContext } from 'react';
import UsuarioContext from '../Context/UsuarioContext';
import UsuarioContainerUser from '../UsuarioContainer/UsuarioContainerUser';

const SectionSesion = () => {

    const {usuario, esAdministrador,desloguearUsuario} = useContext(UsuarioContext);

    if(esAdministrador) {
        return(
            <UsuarioContainerUser usuario={usuario} desloguearUsuario={desloguearUsuario}/>
        )
    } else {
        return(
            <UsuarioContainerUser usuario={usuario} desloguearUsuario={desloguearUsuario}/>
        )
    }

}

export default SectionSesion;