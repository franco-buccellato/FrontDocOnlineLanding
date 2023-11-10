import { useEffect } from 'react';
import {createContext, useState} from 'react';

const UsuarioContext = createContext();

export const UsuarioContextProvider = ({children, onAdd}) => {

    useEffect(() => {
        const loggedUserJSON = window.localStorage.getItem('usuarioLogueado');
        if(loggedUserJSON) {
            const user = JSON.parse(loggedUserJSON);
            setUsuario(user);
        }
    },
    []
    )

    const [usuario, setUsuario] = useState();

    const loguearUsuario = (nuevoUsuario) => {
        const usuario = {
            _id: nuevoUsuario._id,
            dni: nuevoUsuario.dni,
            email: nuevoUsuario.email,
            nombre: nuevoUsuario.nombre,
            apellido: nuevoUsuario.apellido,
            celular: nuevoUsuario.celular,
            fechaNacimiento: nuevoUsuario.fechaNacimiento,
            documento: nuevoUsuario.documento,
            contrasenia: nuevoUsuario.contrasenia
            /* esAdministrador: nuevoUsuario.esAdministrador */
        }
        //TODO: Guardar el local Storag o Sesion Storage
        //Guardo el usuario en el local storage
        window.localStorage.setItem(
            'usuarioLogueado',
            JSON.stringify(usuario)
        );
        setUsuario(usuario);
    }

    const actualizarUsuarioContext = (usuarioActualizado) => {
        //Guardo el usuario en el local storage
        window.localStorage.setItem(
            'usuarioLogueado',
            JSON.stringify(usuarioActualizado)
        );
        setUsuario(usuarioActualizado);
    }

    const estaLogueado = () => {
        return usuario !== undefined;
    }

    const desloguearUsuario = () => {
        window.location = '/login';
        setUsuario(usuario => {});
        window.localStorage.removeItem('usuarioLogueado');

    }

    const esAdministrador = () => {
        return estaLogueado() ? usuario.esAdministrador : false;
    }

    return(
        <UsuarioContext.Provider value={{usuario, loguearUsuario, estaLogueado, desloguearUsuario, esAdministrador, actualizarUsuarioContext}}>
            {children}
        </UsuarioContext.Provider>
    )
}

export default UsuarioContext;