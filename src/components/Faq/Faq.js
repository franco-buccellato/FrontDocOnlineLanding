import styled from 'styled-components';
import { motion } from "framer-motion"
import Accordion from 'react-bootstrap/Accordion';

function Faq() {
    return (
        <Calidad id='preguntas'>

            <motion.div
                initial={{ opacity: 0, x: -10 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: .8 }}
                exit={{ opacity: 0 }}
                className='content'
            >

                <div className='container-text'>
                    <span>Preguntas frecuentes</span>
                </div>

                <Accordion >
                    <Accordion.Item eventKey="0">
                        <Accordion.Header>¿Qué es la medicina cannábica?</Accordion.Header>
                        <Accordion.Body>
                            Es por definición, una fitomedicina. Es decir, una forma de tratamiento basado en el uso de la planta de cannabis para aliviar los síntomas de una variedad de afecciones médicas.
                        </Accordion.Body>
                    </Accordion.Item>

                    <Accordion.Item eventKey="1">
                        <Accordion.Header>¿Cómo puedo obtener cannabis medicinal?</Accordion.Header>
                        <Accordion.Body>
                            Puedes obtener cannabis medicinal a través de un profesional de la salud autorizado que ofrezca la medicina de cannabis como parte de su práctica médica.
                        </Accordion.Body>
                    </Accordion.Item>

                    <Accordion.Item eventKey="2">
                        <Accordion.Header>¿Cuánto tarda Reprocann en aprobar mi permiso?</Accordion.Header>
                        <Accordion.Body>
                            No hay un tiempo de demora exacto, en general tardan entre 3 a 4 meses. Como hay aprobaciones todos los dias, tambien pueden aprobartelo mucho antes.
                        </Accordion.Body>
                    </Accordion.Item>

                    <Accordion.Item eventKey="3">
                        <Accordion.Header>¿Dónde puedo ver vinculación, el seguimiento y la aprobación?</Accordion.Header>
                        <Accordion.Body>
                            Lo podes ver en tu cuenta de Reprocann ingresando con CUIT y contraseña, click en "Paciente/cultivador" y por último, click en "Mis Tramites".
                        </Accordion.Body>
                    </Accordion.Item>

                    <Accordion.Item eventKey="4">
                        <Accordion.Header>¿Puedo cultivar mientras espero la vinculación?</Accordion.Header>
                        <Accordion.Body>
                            Al día de hoy, no hay ninguna constancia de trámite en proceso. La ley NO permite plantar hasta tener el permiso aprobado.
                        </Accordion.Body>
                    </Accordion.Item>

                    <Accordion.Item eventKey="5">
                        <Accordion.Header>¿Cuántas plantas puedo tener?</Accordion.Header>
                        <Accordion.Body>
                            <ul>
                                <li>Hasta 9 plantas florecidas.</li>
                                <li>Hasta 6 m2 cultivo interior.</li>
                                <li>Hasta 15 m2 cultivo exterior.</li>
                                <li>Transporte: hasta 6 frascos de 30ml o hasta 40 gramos de flores secas.</li>
                            </ul>
                        </Accordion.Body>
                    </Accordion.Item>

                    <Accordion.Item eventKey="6">
                        <Accordion.Header>¿Pueden tener 2 personas el mismo domicilio registrado?</Accordion.Header>
                        <Accordion.Body>
                            La ley no especifica nada con respecto a este detalle. Por lo tanto, sí se pueden registrar más de una persona por domicilio.
                        </Accordion.Body>
                    </Accordion.Item>

                    <Accordion.Item eventKey="7">
                        <Accordion.Header>Una vez aprobado ¿Cómo descargo mi permiso?</Accordion.Header>
                        <Accordion.Body>
                            <ul>
                                <li>Ingresa a Reprocann con MiArgentina</li>
                                <li>Click en "Mis trámites"</li>
                                <li>Click en "el ojo"</li>
                                <li>Click en "Descargar Certificado"</li>
                            </ul>
                        </Accordion.Body>
                    </Accordion.Item>

                    <Accordion.Item eventKey="8">
                        <Accordion.Header>¿Qué pongo en "Lugar de cultivo"?</Accordion.Header>
                        <Accordion.Body>
                            Poner el domicilio REAL donde van a estar tus plantas, ya que el permiso te habilita a cultivar en ese domicilio.
                        </Accordion.Body>
                    </Accordion.Item>

                    <Accordion.Item eventKey="9">
                        <Accordion.Header>¿Qué pongo en "Capacidad de cultivo"?</Accordion.Header>
                        <Accordion.Body>
                            Hay que poner la cantidad de plantas que vas a cultivar, es decir, SIEMPRE poner 9 o menos. NO poner un número mayor porque (9) es el máximo de plantas permitidas por persona.
                        </Accordion.Body>
                    </Accordion.Item>

                    <Accordion.Item eventKey="10">
                        <Accordion.Header>¿Por cuánto tiempo tiene validez el permiso?</Accordion.Header>
                        <Accordion.Body>
                            A partir del 20/04/2023 el permiso tiene validez por 3 años. Cumplido ese plazo, habrá que realizar la Renovación.
                        </Accordion.Body>
                    </Accordion.Item>

                </Accordion>
            </motion.div>

        </Calidad>
    );
}

export default Faq;



const Calidad = styled.div`
    width: 100%;
    padding-top: 8rem;
    display: flex;
    justify-content: center;
    align-items: center;
    @media only screen and (max-width: 1024px) {
        padding: 8rem 0 0rem 0 ;
    }
    .content{
        width: 60%;
        margin: auto;
        z-index: 2;
        position: relative;
        @media only screen and (max-width: 1540px) {
            width: 74%;
        }
        @media only screen and (max-width: 1024px) {
            width: 90%;
        }

        .container-text{
            width: 100%;
            margin-bottom: 2rem;
            @media only screen and (max-width: 920px){
                width: 100%;
                text-align: center;
            }
            span{
                color: #00b1ff;
                text-transform: uppercase;
                font-size: 1.2rem;
                font-weight: 600;
                text-align: end;
            }

        }
    }
`