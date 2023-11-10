import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import Button from 'react-bootstrap/Button';
import SignatureCanvas from 'react-signature-canvas';

const PacienteInformacionFirmaAclaracion = (
    {
        setSignFirma, handleClearFirma,
        setSignAclaracion, handleClearAclaracion
    }
    ) => {

    return(
        <div>
            <Row className="mb-3 w-100">
                <Form.Group as={Col} controlId="firma" className='colum-firma'>
                    <Form.Label>Inserte su firma</Form.Label>
                    <SignatureCanvas
                        ref={data => setSignFirma(data)}
                        canvasProps={{ /* width: 270, height: 150, */ className: 'sigCanvas' }}
                        /* minWidth={0.7}
                        maxWidth={1.2} */
                    />
                    <Button variant="light w-50 canva-botones" onClick={handleClearFirma}>Limpiar</Button>
                </Form.Group>
                <Form.Group as={Col} controlId="aclaracion" className='colum-aclaracion'>
                    <Form.Label>Inserte su Aclaración</Form.Label>
                    <SignatureCanvas
                        ref={data => setSignAclaracion(data)}
                        canvasProps={{/*  width: 270, height: 150,  */className: 'sigCanvas' }}
                        /* minWidth={0.7}
                        maxWidth={2} */
                    />
                    <Button variant="light w-50 canva-botones" onClick={handleClearAclaracion}>Limpiar</Button>
                </Form.Group>
            </Row>
        </div>
    )
}

export default PacienteInformacionFirmaAclaracion;