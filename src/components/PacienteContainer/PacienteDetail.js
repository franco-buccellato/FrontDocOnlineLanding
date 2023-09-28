import './PacienteContainer.css';
import { useState } from 'react';
import { useContext } from 'react';
import UsuarioContext from '../Context/UsuarioContext';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import Button from 'react-bootstrap/Button';
import ToggleButton from 'react-bootstrap/ToggleButton';
import SignaturePadLocal from '../SignaturePad/SignaturePadLocal';
import Patologia from './Patologia';
import { Link } from 'react-router-dom';
//import axios from 'axios';


const PacienteDetail = ({paciente}) => {

    const {usuario} = useContext(UsuarioContext);

    const [formularioValido, setFormularioValido] = useState(false);
    const [obraSocial, setObraSocial] = useState(paciente.obraSocial);
    const [ocupacion, setOcupacion] = useState(paciente.ocupacion);
    const [comentario, setComentario] = useState(paciente.comentario);
    const [contacto, setContacto] = useState(paciente.contacto);
    const [contactoComentario, setcContactoComentario] = useState(paciente.contactoComentario);
    const [arritmias, setArritmias] = useState(paciente.arritmias);
    const [alergias, setAlergias] = useState(paciente.alergias);
    const [mental, setMental] = useState(paciente.mental);
    const [maquinaria, setMaquianria] = useState(paciente.maquinariaPrecision);
    const [mentalComentario, setMentalComentario] = useState(paciente.mentalComentario);
    const [patologias, setPatologias] = useState(paciente.patologias);
    const [tieneTutor, setTieneTutor] = useState(paciente.otraPersonaDeCultivo);
    const [nombreTutor, setNombreTutor] = useState(paciente.tutor.nombre);
    const [apellidoTutor, setApellidoTutor] = useState(paciente.tutor.apellido);
    const [emailTutor, setEmailTutor] = useState(paciente.tutor.email);
    const [celularTutor, setCelularTutor] = useState(paciente.tutor.celular);
    const [fechaNacimientoTutor, setFechaNacimientoTutor] = useState(paciente.tutor.fechaNacimiento);
    const [fechaAlta, setFechaAlta] = useState(paciente.fechaAlta);
    const [fechaAprobacion, setFechaAprobacion] = useState(paciente.fechaAprobacion);

    const actualizarPatologia = (indice, patologiaActualizada) => {
        patologias[indice] = patologiaActualizada;
        setPatologias(patologias);
    }

    const actualizarInfoMedica = (event) => {
        event.preventDefault();
        const form = event.currentTarget;
        if (form.checkValidity() === false) {
            event.preventDefault();
            event.stopPropagation();
        } else {
            setFormularioValido(true);
            //actualizarInformacionMedica();
        }
        };

/*     const actualizarInformacionMedica = () => {
        const informacionPacienteNueva = {
            obraSocial: obraSocial,
            ocupacion: ocupacion,
            comentario: comentario,
            arritmias: arritmias,
            alergias: alergias,
            mental: mental,
            mentalComentario: mentalComentario,
            maquinariaPrecision: maquinaria,
            contacto: contacto,
            contactoComentario: contactoComentario,
            otraPersonaDeCultivo: otraPersonaDeCultivo,
            tutor: {
                nombre: nombreTutor,
                apellido: apellidoTutor,
                celular: celularTutor,
                email: emailTutor,
                fechaNacimiento: fechaNacimientoTutor
            },
            patologias: patologias,
            firma: 'firma',
            aclaracion: 'aclaracion',
            fechaAlta: fechaAlta,
            fechaAprobacion: fechaAprobacion
        };
        axios.update(
            '/api/user/actualizar',
            informacionPacienteNueva,
            {headers: {'content-type': 'application/json'}}
        ).then(
            res => {
                console.log(res);
                console.log('Respuesta: ' + res);
                if(res.data !== '') {
                    handleShowSucces();
                } else {
                    handleShow();
                }
            }
        )
        .catch(
            err => {
                console.log(err);
            }
        )
    } */

    return(
        <div className='container-paciente'>
            <Link to = {'/sesion'} className="link-sesion">
                <Button variant="secondary" className='ml-auto'>Atras</Button>
            </Link>
            <Form className='w-75' noValidate validated={formularioValido} onSubmit={actualizarInfoMedica} >
                <Row className="mb-3 w-50">
                    <Form.Group as={Col} controlId="nombre">
                        <Form.Label>Nombre</Form.Label>
                        <Form.Control type="text" placeholder="Nombre" defaultValue={usuario.nombre} disabled/>
                    </Form.Group>
                    <Form.Group as={Col} controlId="apellido">
                        <Form.Label>Apellido</Form.Label>
                        <Form.Control type="text" placeholder="Apellido" defaultValue={usuario.apellido} disabled/>
                    </Form.Group>
                </Row>
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
                    <Form.Group as={Col} controlId="mental">
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
                                            <Patologia indice={indice} patologia={unPatologia} actualizarPatologia={actualizarPatologia}/>
                                        </Form.Group>
                                    </Row>
                                )
                            }
                        )
                    }
                </div>
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
                <Row className="mb-3 w-50">
                    <Form.Group as={Col} controlId="firma">
                        <Form.Label>Inserte su firma</Form.Label>
                        <SignaturePadLocal/>
                    </Form.Group>
                    <Form.Group as={Col} controlId="aclaracion">
                        <Form.Label>Inserte su Aclaración</Form.Label>
                        <SignaturePadLocal/>
                    </Form.Group>
                </Row>
                <Button variant="outline-success" type="submit" className='link-actualizar'>
                    Actualizar Información Médica
                </Button>
            </Form>
            <Link to = {'/sesion'} className='link-cancelar'>
                <Button className="boton-paciente" variant="outline-danger">
                    Cancelar
                </Button>
            </Link>
        </div>
    )
}

export default PacienteDetail;