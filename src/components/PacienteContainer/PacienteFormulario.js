import './PacienteContainer.css';
import { useState } from 'react';
import { useContext } from 'react';
import UsuarioContext from '../Context/UsuarioContext';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import Button from 'react-bootstrap/Button';
import { Link } from 'react-router-dom';
import axios from 'axios';
import ModalError from '../Modals/ModalError';
import ModalSucces from '../Modals/ModalSucces';
import PacienteInformacionBasica from './PacienteInformacionBasica';
import PacienteInformacionEnfermedades from './PacienteInformacionEnfermedades';
import PacienteInformacionPatologias from './PacienteInformacionPatologias';
import PacienteInformacionTutor from './PacienteInformacionTutor';
import PacienteInformacionFechas from './PacienteInformacionFechas';
import PacienteInformacionFirmaAclaracion from './PacienteInformacionFirmaAclaracion';

const PacienteFormulario = ({paciente}) => {

    const {usuario} = useContext(UsuarioContext);
    /* MODAL ERROR*/
    const [showError, setShowError] = useState(false);
    const handleCloseError = () => setShowError(false);
    const handleShowError = () => setShowError(true);
    /* MODAL SUCCES*/    
    const [showSucces, setShowSucces] = useState(false);
    const handleCloseSucces = () => setShowSucces(false);
    const handleShowSucces = () => setShowSucces(true);
    //FORMULARIO CHECK
    const [formularioValido, setFormularioValido] = useState(false);
    //PACIENTE INFORMACION BASICA
    const [obraSocial, setObraSocial] = useState(paciente.obraSocial);
    const [ocupacion, setOcupacion] = useState(paciente.ocupacion);
    const [comentario, setComentario] = useState(paciente.comentario);
    const [contacto, setContacto] = useState(paciente.contacto);
    const [contactoComentario, setcContactoComentario] = useState(paciente.contactoComentario);
    //PACIENTE INFORMACION ENFERMEDADES
    const [arritmias, setArritmias] = useState(paciente.arritmias);
    const [alergias, setAlergias] = useState(paciente.alergias);
    const [mental, setMental] = useState(paciente.mental);
    const [maquinaria, setMaquianria] = useState(paciente.maquinariaPrecision);
    const [mentalComentario, setMentalComentario] = useState(paciente.mentalComentario);
    //PACIENTE INFORMACION PATOLOGIAS
    const [patologias, setPatologias] = useState(paciente.patologias);
    const actualizarPatologia = (indice, patologiaActualizada) => {
        patologias[indice] = patologiaActualizada;
        setPatologias(patologias);
    }
    const agregarPatologiaNueva = () => {
        let nuevaListaPatologias = patologias.concat(patologias[0]);
        setPatologias(nuevaListaPatologias);
    }
    const eliminarPatologia = (indice) => {
        //patologias.splice(indice, 1);
        let patologiasVigentes = patologias.filter((unaPatologia, indicePatologia) => indicePatologia === indice);
        setPatologias(patologiasVigentes);
    }

    //PACIENTE INFORMACION TUTOR
    const [tieneTutor, setTieneTutor] = useState(paciente.otraPersonaDeCultivo);
    const [nombreTutor, setNombreTutor] = useState(paciente.tutor.nombre !== '' ? paciente.tutor.nombre : '');
    const [apellidoTutor, setApellidoTutor] = useState(paciente.tutor.apellido !== '' ? paciente.tutor.apellido : '');
    const [emailTutor, setEmailTutor] = useState(paciente.tutor.email !== '' ? paciente.tutor.email : '');
    const [celularTutor, setCelularTutor] = useState(paciente.tutor.celular !== '' ? paciente.tutor.celular : '');
    const [fechaNacimientoTutor, setFechaNacimientoTutor] = useState(paciente.tutor.fechaNacimiento !== '' ? paciente.tutor.fechaNacimiento : '');
    //PACIENTE INFORMACION FECHAS
    const [fechaAlta, setFechaAlta] = useState(paciente.fechaAlta);
    const [fechaAprobacion, setFechaAprobacion] = useState(paciente.fechaAprobacion);
    //PAD DE FIRMA Y ACLARACION
    const [ firma, setFirma] = useState()
    const [ aclaracion, setAclaracion ] = useState()
    const [signFirma, setSignFirma] = useState()
    const [signAclaracion, setSignAclaracion] = useState()
    async function finalizar() {
        let urlFirma = null;
        let urlAcl = null;
        if(firma == null){
            urlFirma = await signFirma.getTrimmedCanvas().toDataURL('image/png');
            setFirma(urlFirma);
            console.log(firma);
        } 
        if(aclaracion == null){
            urlAcl = await signAclaracion.getTrimmedCanvas().toDataURL('image/png');
            setAclaracion(urlAcl);
            console.log(aclaracion);
        }
    }
    function handleClearFirma() {
        if(signFirma){
            signFirma.clear();
        }
        setFirma(null);
    }
    function handleClearAclaracion() {
        if(signAclaracion){
            signAclaracion.clear();
        }
        setAclaracion(null);
    }

    //CHEQUEO DEL FORM
    const actualizarInfoMedica = (event) => {
        event.preventDefault();
        const form = event.currentTarget;
        if (form.checkValidity() === false) {
            event.preventDefault();
            event.stopPropagation();
        } else {
            setFormularioValido(true);
            actualizarInformacionMedica();
        }
    };

    console.log('El paciente es:');
    console.log(paciente);

    //ACTUALZIACION EN BD
    const actualizarInformacionMedica = () => {
        finalizar();
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
            otraPersonaDeCultivo: tieneTutor,
            tutor: {
                nombre: nombreTutor,
                apellido: apellidoTutor,
                celular: celularTutor,
                email: emailTutor,
                fechaNacimiento: fechaNacimientoTutor
            },
            //patologias: patologias,
            patologias: [
/*                 {
                    tipoPatologia: '',
                    fechaAparicion: '',
                    medicacion: '',
                    vinculadoAlTrabajo: false,
                    medicacionEficiente: false,
                    indiceDolor: '',
                    partesDelCuerpo: ''
                } */
            ],
            firma: firma,
            aclaracion: aclaracion,
            fechaAlta: fechaAlta,
            fechaAprobacion: fechaAprobacion
        };
        const usuarioActualizado = { 
            _id: usuario._id,
            paciente: informacionPacienteNueva
        }

        console.log(usuarioActualizado);
        axios.put(
            '/api/user/actualizar',
            usuarioActualizado,
            {headers: {'content-type': 'application/json'}}
        ).then(
            res => {
                console.log(res);
                console.log('Respuesta: ' + res);
                if(res.data !== '') {
                    handleShowSucces();
                } else {
                    handleShowError();
                }
            }
        )
        .catch(
            err => {
                console.log(err);
            }
        )
    }

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
                <hr className='linea-separadora-patologia'/>
                <PacienteInformacionBasica
                    obraSocial={obraSocial}
                    setObraSocial={setObraSocial}
                    ocupacion={ocupacion}
                    setOcupacion={setOcupacion}
                    comentario={comentario}
                    setComentario={setComentario}
                    contacto={contacto}
                    setContacto={setContacto}
                    contactoComentario={contactoComentario}
                    setcContactoComentario={setcContactoComentario}
                />
                <hr className='linea-separadora-patologia'/>
                <PacienteInformacionEnfermedades
                    arritmias={arritmias}
                    setArritmias={setArritmias}
                    alergias={alergias}
                    setAlergias={setAlergias}
                    mental={mental}
                    setMental={setMental}
                    mentalComentario={mentalComentario}
                    setMentalComentario={setMentalComentario}
                    maquinaria={maquinaria}
                    setMaquianria={setMaquianria}
                />
                <hr className='linea-separadora-patologia'/>
                <PacienteInformacionPatologias
                    patologias={patologias}
                    agregarPatologiaNueva={agregarPatologiaNueva}
                    actualizarPatologia={actualizarPatologia}
                    eliminarPatologia={eliminarPatologia}
                />
                <hr className='linea-separadora-patologia'/>
                <PacienteInformacionTutor
                    tieneTutor={tieneTutor}
                    setTieneTutor={setTieneTutor}
                    nombreTutor={nombreTutor}
                    setNombreTutor={setNombreTutor}
                    apellidoTutor={apellidoTutor}
                    setApellidoTutor={setApellidoTutor}
                    emailTutor={emailTutor}
                    setEmailTutor={setEmailTutor}
                    celularTutor={celularTutor}
                    setCelularTutor={setCelularTutor}
                    fechaNacimientoTutor={fechaNacimientoTutor}
                    setFechaNacimientoTutor={setFechaNacimientoTutor}
                />
                <hr className='linea-separadora-patologia'/>
                <PacienteInformacionFechas
                    fechaAlta={fechaAlta}
                    setFechaAlta={setFechaAlta}
                    fechaAprobacion={fechaAprobacion}
                    setFechaAprobacion={setFechaAprobacion}
                />
                <hr className='linea-separadora-patologia'/>
                <PacienteInformacionFirmaAclaracion
                    setSignFirma={setSignFirma}
                    handleClearFirma={handleClearFirma}
                    setSignAclaracion={setSignAclaracion}
                    handleClearAclaracion={handleClearAclaracion}
                />
                <hr className='linea-separadora-patologia'/>
                <Button variant="outline-success" type="submit" className='link-actualizar'>
                    Actualizar Información Médica
                </Button>
            </Form>
            <Link to = {'/sesion'} className='link-cancelar'>
                <Button className="boton-paciente" variant="outline-danger">
                    Cancelar
                </Button>
            </Link>
            <ModalError showError={showError} handleCloseError={handleCloseError} info={'Hubo un inconveniente al modificar los datos médicos.'} />
            <ModalSucces showSucces={showSucces} handleCloseSucces={handleCloseSucces} info={'Datos médicos modificados correctamente!'}/>
        </div>
    )
}

export default PacienteFormulario;