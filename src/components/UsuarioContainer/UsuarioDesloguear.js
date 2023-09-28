import "./UsuarioContainerUser.css";
import { Button } from "react-bootstrap";

const UsuarioDesloguear = ({ desloguearUsuario }) => {
    return (
        <Button className="boton-desloguear" variant="danger" onClick={desloguearUsuario}>
            Cerrar Sesión
            <ion-icon name="exit-outline" size='large'></ion-icon>
        </Button>
    )
}

export default UsuarioDesloguear;
