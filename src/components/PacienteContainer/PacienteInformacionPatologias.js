import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import Button from 'react-bootstrap/Button';
import Patologia from './Patologia';

const PacienteInformacionPatologias = (
        {
            patologias,
            agregarPatologiaNueva,
            actualizarPatologia,
            eliminarPatologia
        }
    ) => {

    return(
        <div className='container-patologias'>
            <Row className="mb-3 w-100">
                <Form.Group as={Col} controlId="patologias">
                    <Form.Label>Patologías</Form.Label>
                </Form.Group>
            </Row>
            {
                patologias.map(
                    (unPatologia, indice) =>{
                        return(
                            <Row className="mb-3 w-100">
                                <Form.Group as={Col} controlId="patologias">
                                    <Patologia key={indice} indice={indice} patologia={unPatologia} actualizarPatologia={actualizarPatologia} eliminarPatologia={eliminarPatologia}/>
                                </Form.Group>
                            </Row>
                        )
                    }
                )
            }
            <Button className="boton-nueva-patologia" variant="outline-dark" onClick={agregarPatologiaNueva}>
                Nueva Patologia
            </Button>
        </div>
    )
}

export default PacienteInformacionPatologias;