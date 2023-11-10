import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';

const PacienteInformacionBasica = (
    {
        obraSocial, setObraSocial,
        ocupacion, setOcupacion,
        comentario, setComentario,
        contacto, setContacto,
        contactoComentario, setcContactoComentario
    }
    ) => {

    return(
        <div>
            <Row className="mb-3 w-100">
                <Form.Group as={Col} controlId="obraSocial">
                    <Form.Label>Obra Social</Form.Label>
                    <Form.Control 
                        placeholder="Obra Social" 
                        defaultValue={obraSocial} 
                        onChange={({target}) => setObraSocial(target.value)}
                        required
                    />
                </Form.Group>
                <Form.Group as={Col} controlId="ocupacion">
                    <Form.Label>Ocupación</Form.Label>
                    <Form.Control
                        placeholder="Ocupación"
                        defaultValue={ocupacion}
                        onChange={({target}) => setOcupacion(target.value)}
                        required
                    />
                </Form.Group>
                <Form.Group as={Col} controlId="ocupacion">
                    <Form.Label>Comentario</Form.Label>
                    <Form.Control placeholder="Comentario" defaultValue={comentario} onChange={({target}) => setComentario(target.value)}/>
                </Form.Group>
            </Row>
            <Row className="mb-3 w-100">
                <Form.Group as={Col} controlId="contacto">
                    <Form.Label>Contacto</Form.Label>
                    <Form.Select defaultValue={contacto !== undefined ? contacto : ''} onChange={({target}) => setContacto(target.value)}>
                        <option>DocOnline</option>
                        <option>Amigo o Conocido</option>
                        <option>Cosecha Libre</option>
                        <option>Otro</option>
                    </Form.Select>
                </Form.Group>
                <Form.Group as={Col} controlId="contactoComentario">
                    <Form.Label>Comentario</Form.Label>
                    <Form.Control placeholder="Comentario" defaultValue={contactoComentario} onChange={({target}) => setcContactoComentario(target.value)}/>
                </Form.Group>
            </Row>
        </div>
    )
}

export default PacienteInformacionBasica;