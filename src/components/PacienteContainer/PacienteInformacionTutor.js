import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import ToggleButton from 'react-bootstrap/ToggleButton';


const PacienteInformacionTutor = (
    {
        tieneTutor, setTieneTutor,
        nombreTutor, setNombreTutor,
        apellidoTutor, setApellidoTutor,
        emailTutor, setEmailTutor,
        celularTutor, setCelularTutor,
        fechaNacimientoTutor, setFechaNacimientoTutor
    }
    ) => {

    return(
        <div>
            <Row className="mb-3 w-100">
                <Form.Group as={Col} controlId="tieneTutor">
                    <Form.Label>¿Otra persona cultiva por vos?</Form.Label>
                    <Col as={Col}>
                        <ToggleButton
                            id="tutor-check"
                            type="checkbox"
                            variant={tieneTutor ? 'outline-success' : 'outline-danger'}
                            checked={tieneTutor}
                            value="1"
                            onChange={(e) => setTieneTutor(e.currentTarget.checked)}
                            >
                            {tieneTutor ? 'Si' : 'No'}
                        </ToggleButton>
                    </Col>
                </Form.Group>
                {tieneTutor && 
                    <div>
                        <Row className="mb-3 w-100">
                            <Form.Group as={Col} controlId="nombreTutor">
                                <Form.Label>Nombre Tutor</Form.Label>
                                <Form.Control
                                    type="text"
                                    placeholder="Nombre Tutor"
                                    defaultValue={nombreTutor}
                                    onChange={({target}) => setNombreTutor(target.value)}
                                    required
                                />
                            </Form.Group>
                            <Form.Group as={Col} controlId="apellidoTutor">
                                <Form.Label>Apellido Tutor</Form.Label>
                                <Form.Control
                                    type="text"
                                    placeholder="Apellido Tutor"
                                    defaultValue={apellidoTutor}
                                    onChange={({target}) => setApellidoTutor(target.value)}
                                    required
                                />
                            </Form.Group>
                        </Row>
                        <Row className="mb-3 w-100">
                        <Form.Group as={Col} controlId="emialTutor">
                                <Form.Label>Email Tutor</Form.Label>
                                <Form.Control
                                    type="text"
                                    placeholder="Email Tutor"
                                    defaultValue={emailTutor}
                                    onChange={({target}) => setEmailTutor(target.value)}
                                    required
                                />
                            </Form.Group>
                            <Form.Group as={Col} controlId="celularTutor">
                                <Form.Label>Celular Tutor</Form.Label>
                                <Form.Control
                                    type="text"
                                    placeholder="Celular Tutor"
                                    defaultValue={celularTutor}
                                    onChange={({target}) => setCelularTutor(target.value)}
                                    required
                                />
                            </Form.Group>
                            <Form.Group as={Col} controlId="fechaNacimientoTutor">
                                <Form.Label>Fecha Nacimiento Tutor</Form.Label>
                                <Form.Control
                                    type="date"
                                    placeholder="Fecha Nacimiento Tutor"
                                    defaultValue={fechaNacimientoTutor}
                                    onChange={({target}) => setFechaNacimientoTutor(target.value)}
                                    required
                                />
                            </Form.Group>
                        </Row>
                    </div>
                }
            </Row>
        </div>
    )
}

export default PacienteInformacionTutor;