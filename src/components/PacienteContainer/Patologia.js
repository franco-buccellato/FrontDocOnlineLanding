
import { useState, useEffect } from 'react';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import ToggleButton from 'react-bootstrap/ToggleButton';

const Patologia = ({indice, patologia, actualizarPatologia}) => {

    const [tipoPatologia, setTipoPatologia] = useState(patologia.tipoPatologia);
    const [fechaAparicion, setFechaAparicion] = useState(patologia.fechaAparicion);
    const [medicacion, setMedicacion] = useState(patologia.medicacion);
    const [vinculadoAlTrabajo, setVinculadoAlTrabajo] = useState(patologia.vinculadoAlTrabajo);
    const [medicacionEficiente, setMedicacionEficiente] = useState(patologia.medicacionEficiente);
    const [indiceDolor, setIndiceDolor] = useState(patologia.indiceDolor);
    const [partesDelCuerpo, setPartesDelCuerpo] = useState(patologia.partesDelCuerpo);

    useEffect( 
        () => {
            const patologiaActualizada = {
                tipoPatologia: tipoPatologia,
                fechaAparicion: fechaAparicion,
                medicacion: medicacion,
                vinculadoAlTrabajo: vinculadoAlTrabajo,
                medicacionEficiente: medicacionEficiente,
                indiceDolor: indiceDolor,
                partesDelCuerpo: partesDelCuerpo
            };
            actualizarPatologia(indice, patologiaActualizada);
        }, [tipoPatologia, fechaAparicion, medicacion, vinculadoAlTrabajo, medicacionEficiente, indiceDolor, partesDelCuerpo, actualizarPatologia, indice]
    )

    return(
        <div className='container-patologia'>
            <Row className="mb-3 w-50">
                <Form.Group as={Col} controlId="tipoPatologia">
                    <Form.Label>Tipo de Patologia</Form.Label>
                    <Form.Select defaultValue={tipoPatologia !== undefined ? tipoPatologia : ''} onChange={({target}) => setTipoPatologia(target.value)}>
                        <option>Ansiedad</option>
                        <option>Bruxismo</option>
                        <option>Depresión</option>
                        <option>Diabetes</option>
                        <option>Bournot Laboral</option>
                        <option>Dolor Crónico Articular</option>
                        <option>Dolor Muscular</option>
                        <option>Fractura 1</option>
                        <option>Fractura 2</option>
                        <option>Insomio</option>
                        <option>Hipertensión</option>
                        <option>Hiproexia</option>
                    </Form.Select>
                </Form.Group>
                <Form.Group as={Col} controlId="fechaAparicion">
                    <Form.Label>Fecha Aparición</Form.Label>
                    <Form.Control type="date" placeholder="Fecha Aparición" defaultValue={fechaAparicion} onChange={({target}) => setFechaAparicion(target.value)}/>
                </Form.Group>
                <Form.Group as={Col} controlId="medicacion">
                    <Form.Label>Medicación</Form.Label>
                    <Form.Control type="text" placeholder="Medicacion" defaultValue={medicacion} onChange={({target}) => setMedicacion(target.value)}/>
                </Form.Group>
            </Row>
            <Row className="mb-3 w-100">
                <Form.Group as={Col} controlId="vinculadoAlTrabajo">
                    <Form.Label>¿Esta vinculado al trabajo?</Form.Label>
                    <Col as={Col}>
                        <ToggleButton
                            id="vinculadoAlTrabajo-check"
                            type="checkbox"
                            variant={vinculadoAlTrabajo ? 'outline-success' : 'outline-danger'}
                            checked={vinculadoAlTrabajo}
                            value="1"
                            onChange={(e) => setVinculadoAlTrabajo(e.currentTarget.checked)}
                            >
                            {vinculadoAlTrabajo ? 'Si' : 'No'}
                        </ToggleButton>
                    </Col>
                </Form.Group>
                <Form.Group as={Col} controlId="medicacionEficiente">
                    <Form.Label>¿Medicación eficiente?</Form.Label>
                    <Col as={Col}>
                        <ToggleButton
                            id="medicacionEficiente-check"
                            type="checkbox"
                            variant={medicacionEficiente ? 'outline-success' : 'outline-danger'}
                            checked={medicacionEficiente}
                            value="1"
                            onChange={(e) => setMedicacionEficiente(e.currentTarget.checked)}
                            >
                            {medicacionEficiente ? 'Si' : 'No'}
                        </ToggleButton>
                    </Col>
                </Form.Group>
                <Form.Group as={Col} controlId="indiceDolor">
                    <Form.Label>Indice de Dolor</Form.Label>
                    <Col as={Col}>
                        <Form.Label>{indiceDolor}</Form.Label>
                        <Form.Range
                            value={indiceDolor}
                            min='0'
                            max='10'
                            onChange={({target}) => setIndiceDolor(target.value)}/>
                    </Col>
                </Form.Group>
            </Row>
            <Row className="mb-3 w-100">
                <Form.Group as={Col} controlId="partesDelCuerpo">
                    <Form.Label>Partes del cuerpo afectadas</Form.Label>
                    <Form.Control placeholder="Parte del cuerpo afectadas" defaultValue={partesDelCuerpo} onChange={({target}) => setPartesDelCuerpo(target.value)}/>
                </Form.Group>
            </Row>
        </div>
    )
}

export default Patologia;