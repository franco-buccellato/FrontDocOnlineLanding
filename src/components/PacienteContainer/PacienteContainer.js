import { useEffect, useState, useContext } from 'react';
import PacienteFormulario from './PacienteFormulario';
import Loader from '../Loader/Loader';
import UsuarioContext from '../Context/UsuarioContext';
import { useParams } from 'react-router-dom';
import axios from 'axios';

const PacienteContainer = () => {

    const {usuario} = useContext(UsuarioContext);

    const [paciente, setPaciente] = useState();

    const {usuarioId} = useParams();

    console.log(usuario.nombre);

    useEffect(
        () => {
            axios.post(
                '/api/user/',
                {email: usuario.email, contrasenia: usuario.contrasenia},
                {headers: {'content-type': 'application/json'}}
            )
            .then(
                res => {
                    setPaciente(res.data.paciente);
                    //paciente === undefined && setPaciente(pacienteVacio);
                }
            )
            .catch(
                err => {
                    console.log(err);
                }
            )
        }, [usuarioId, usuario.email, usuario.contrasenia]
    )

    return (
        <div>
            {
                paciente ? <PacienteFormulario /* key={paciente.createdAt} */ paciente={paciente}/> : <Loader />
            }
        </div>
    );
}

export default PacienteContainer;


