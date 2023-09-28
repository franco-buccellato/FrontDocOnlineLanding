import { useEffect, useState, useContext } from 'react';
import PacienteDetail from './PacienteDetail';
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
                {nombre: usuario.nombre, email: usuario.email},
                {headers: {'content-type': 'application/json'}}
            )
            .then(
                res => {
                    setPaciente(res.data.paciente);
                }
            )
            .catch(
                err => {
                    console.log(err);
                }
            )
        }, [usuarioId, usuario.nombre, usuario.email]
    )

    return (
        <div>
            {
                paciente ? <PacienteDetail key={paciente.id} paciente={paciente}/> : <Loader />
            }
        </div>
    );
}

export default PacienteContainer;
