import "./ComoFunciona.css";
import web1 from '../../imagenes/imagen-sacar-turno.png';
import web2 from '../../imagenes/imagen-validar.png';
import web3 from '../../imagenes/iamgen-reprocann.png';
import web4 from '../../imagenes/Logotipo.png';
import web5 from '../../imagenes/imagen-medico.png';
import web6 from '../../imagenes/iamgen-comunicacion.png';


function ComoFunciona() {
    
    return (
        <section className="section-como-funciona" id="como-funciona">
            <div className='container-como-funciona-title'>
                <h4>¿Como Funciona?</h4>
            </div>
            <div className="servicios-container-1-1">
                <div className="container-como-funciona-1">
                    <div className="servicio-1">
                        <img alt='servicio-1' src={web1}></img>
                        <div className="descripcion-1">
                            <h6 className="encabezado-como-funciona-1">Sacar Tunro</h6>
                            <span>
                                Una vez solicitado el turno y abonada la consulta el Dr. te llamará en el horario asignado.
                            </span>
                        </div>
                    </div>
                </div>
                <div className="container-como-funciona-2">
                    <div className="servicio-2">
                        <img alt='servicio-2' src={web2}></img>
                        <div className="descripcion-2">
                            <h6 className="encabezado-como-funciona-2">Validas tu identidad</h6>
                            <span>
                                Descargando la app "Mi Argentina" deberas validar tu identidad con DNI y foto selfie.
                            </span>
                        </div>
                    </div>
                </div>
                <div className="container-como-funciona-3">
                    <div className="servicio-3">
                        <img alt='servicio-3' src={web3}></img>
                        <div className="descripcion-3">
                            <h6 className="encabezado-como-funciona-3">Reprocann Web</h6>
                            <span>
                                Te registras en la web Reprocann del gobierno<br></br>
                                (https://reprocann.msal.gob.ar)
                            </span>
                        </div>
                    </div>
                </div>
            </div>
            <div className="servicios-container-1-2">
                <div className="container-como-funciona-1">
                    <div className="servicio-1">
                        <img alt='servicio-4' src={web4}></img>
                        <div className="descripcion-1">
                            <h6 className="encabezado-como-funciona-1">Doc.online Web</h6>
                            <span>
                                Te registras en nuestra web para que el medico pueda completar tus datos en la historia clinica.
                            </span>
                        </div>
                    </div>
                </div>
                <div className="container-como-funciona-2">
                    <div className="servicio-2">
                        <img alt='servicio-5' src={web5}></img>
                        <div className="descripcion-2">
                            <h6 className="encabezado-como-funciona-2">Atención Médica</h6>
                            <span>
                                En el día y horario asignado del turno realizaremos la consulta vía WhatsApp.
                            </span>
                        </div>
                    </div>
                </div>
                <div className="container-como-funciona-3">
                    <div className="servicio-3">
                        <img alt='servicio-6' src={web6}></img>
                        <div className="descripcion-3">
                            <h6 className="encabezado-como-funciona-3">Vinculación</h6>
                            <span>
                                En las próximas 24hs hábiles después del turno, te notificaremos cuando tu vinculación este realizada y te guiaremos paso a paso para que la puedas ver desde tu cuenta en https://reprocann.msal.gob.ar
                            </span>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default ComoFunciona;
