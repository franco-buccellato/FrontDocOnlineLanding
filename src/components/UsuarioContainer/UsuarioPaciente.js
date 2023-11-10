import "./UsuarioContainerUser.css";
import { Button } from "react-bootstrap";
import { Link } from 'react-router-dom';

const UsuarioPaciente = () => {
    return (
        <Link to = {'/paciente'} className="link-paciente">
            <Button className="boton-paciente" variant="outline-success">
                Completar información Médica
                <ion-icon name="bandage-outline" size='large'></ion-icon>
            </Button>
        </Link>
    )
}

export default UsuarioPaciente;
