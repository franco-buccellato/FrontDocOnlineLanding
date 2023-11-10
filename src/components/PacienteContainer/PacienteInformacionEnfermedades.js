import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import ToggleButton from 'react-bootstrap/ToggleButton'

const PacienteInformacionEnfermedades = (
    {
        arritmias, setArritmias,
        alergias, setAlergias,
        mental, setMental,
        mentalComentario, setMentalComentario,
        maquinaria, setMaquianria
    }
    ) => {

    return(
        <div>
            <Row className="mb-3 w-100">
                <Form.Label className="mb-3 w-100">Información de contexto:</Form.Label>
                <Form.Group as={Col} controlId="arritmia">
                    <Form.Label>¿Posee arritmias?</Form.Label>
                    <Col as={Col}>
                        <ToggleButton
                            id="arritmia-check"
                            type="checkbox"
                            variant={arritmias ? 'outline-success' : 'outline-danger'}
                            checked={arritmias}
                            value="1"
                            onChange={(e) => setArritmias(e.currentTarget.checked)}
                            >
                            {arritmias ? 'Si' : 'No'}
                        </ToggleButton>
                    </Col>
                </Form.Group>
                <Form.Group as={Col} controlId="alergia">
                    <Form.Label>¿Posee alergias?</Form.Label>
                    <Col as={Col}>
                        <ToggleButton
                            id="alergia-check"
                            type="checkbox"
                            variant={alergias ? 'outline-success' : 'outline-danger'}
                            checked={alergias}
                            value="1"
                            onChange={(e) => setAlergias(e.currentTarget.checked)}
                            >
                            {alergias ? 'Si' : 'No'}
                        </ToggleButton>
                    </Col>
                </Form.Group>
                <Form.Group as={Col} controlId="maquinaria">
                    <Form.Label>¿Maneja maquinaria de precisión?</Form.Label>
                    <Col as={Col}>
                        <ToggleButton
                            id="maquinaria-check"
                            type="checkbox"
                            variant={maquinaria ? 'outline-success' : 'outline-danger'}
                            checked={maquinaria}
                            value="1"
                            onChange={(e) => setMaquianria(e.currentTarget.checked)}
                            >
                            {maquinaria ? 'Si' : 'No'}
                        </ToggleButton>
                    </Col>
                </Form.Group>
            </Row>
            <Row className="mb-3 w-100">
                <Form.Group as={Col} controlId="mental">
                    <Form.Label>¿Posee enfermedades mentales?</Form.Label>
                    <Col as={Col}>
                        <ToggleButton
                            id="mental-check"
                            type="checkbox"
                            variant={mental ? 'outline-success' : 'outline-danger'}
                            checked={mental}
                            value="1"
                            onChange={(e) => setMental(e.currentTarget.checked)}
                            >
                            {mental ? 'Si' : 'No'}
                        </ToggleButton>
                    </Col>
                </Form.Group>
                <Form.Group as={Col} controlId="mentalComentario">
                    <Form.Label></Form.Label>
                    <Form.Control
                        placeholder="Comentario enfermedad mental"
                        defaultValue={mentalComentario}
                        onChange={({target}) => setMentalComentario(target.value)}
                    />
                </Form.Group>
            </Row>
        </div>
    )
}

export default PacienteInformacionEnfermedades;