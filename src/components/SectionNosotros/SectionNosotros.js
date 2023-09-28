import './SectionNosotros.css'; 
import FotoDuenios from '../../imagenes/doctor.png';
import FotoQuienesPueden from '../../imagenes/quienes-pueden.png';

function SectionNosotros() {

    return (
        <div className="container-section-nosotros" id='nosotros'>
            <div className='container-nosotros-title'>
                <h4>Nosotros</h4>
            </div>
            <div className="container-nosotros-border">
                <div className='container-nosotros-1'>
                    <div className='nosotros-1-duenios'>
                        <img alt='doctor' src={FotoDuenios}></img>
                    </div>
                    <div className='nosotros-1-detalles'>
                        <h4 className='nosotros-1-detalles-subtitulo'>¿Quiénes somos?</h4>
                        <span>
                            Somos una clinica online de cannabis medicinal.<br></br><br></br>
                            Educamos a nuestros pacientes sobre las diferentes opciones de tratamientos para mejorar su calidad de vida.<br></br><br></br>
                            Nuestro equipo de profesionales está capacitado para brindarte el asesoramiento personalizado que necesitas para registrarte en el Programa de cannabis medicinal (Reprocann).
                        </span>
                    </div>
                </div>
            </div>
            <div className="container-nosotros-border-2">
                <div className='container-nosotros-1'>
                    <div className='nosotros-1-detalles'>
                        <h4 className='nosotros-1-detalles-subtitulo'>¿Quiénes pueden acceder a REPROCANN?</h4>
                        <span>
                        El acceso es para pacientes que deseen mejorar su salud con cannabis.<br></br><br></br>
                        Hay una enorme cantidad de propiedades medicinales que posee la planta y que la hacen una herramienta invaluable para la salud.<br></br><br></br>
                        Los receptores cannabinoides están involucrados en la regulación de:
                        </span>
                        <ul className="lista-1">
                            <li className="linea-1"><ion-icon size="large" name="bandage-outline"></ion-icon>Dolores</li>
                            <li className="linea-1"><ion-icon size="large" name="bed-outline"></ion-icon>Insomio</li>
                            <li className="linea-1"><ion-icon size="large" name="heart-outline"></ion-icon>Ansiedad</li>
                            <li className="linea-1"><ion-icon size="large" name="happy-outline"></ion-icon>Estado de Animo</li>
                            <li className="linea-1"><ion-icon size="large" name="fast-food-outline"></ion-icon>Apetito</li>
                        </ul>
                    </div>
                    <div className='nosotros-1-duenios'>
                        <img alt='doctor' src={FotoQuienesPueden}></img>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default SectionNosotros;