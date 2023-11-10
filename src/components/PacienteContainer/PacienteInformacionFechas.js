import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';

const PacienteInformacionFechas = (
    {
        fechaAlta, setFechaAlta,
        fechaAprobacion, setFechaAprobacion
    }
    ) => {

    return(
        <div>
            <Row className="mb-3 w-50">
                <Form.Group as={Col} controlId="fechaAlta">
                    <Form.Label>Fecha Alta</Form.Label>
                    <Form.Control type="date" placeholder="Fecha Alta" defaultValue={fechaAlta} onChange={({target}) => setFechaAlta(target.value)}/>
                </Form.Group>
                <Form.Group as={Col} controlId="fechaAprobacion">
                    <Form.Label>Fecha Aprobación</Form.Label>
                    <Form.Control type="date" placeholder="Fecha Aprobación" defaultValue={fechaAprobacion} onChange={({target}) => setFechaAprobacion(target.value)}/>
                </Form.Group>
            </Row>
        </div>
    )
}

export default PacienteInformacionFechas;