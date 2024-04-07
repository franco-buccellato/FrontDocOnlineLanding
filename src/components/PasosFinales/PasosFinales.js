
import './PasosFinales.css';
import React, { useEffect } from 'react'
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import logo from '../../imagenes/Logotipo.webp';
import fotoFondo1 from '../../imagenes/doctorTarjeta.webp';
import fotoFondo2 from '../../imagenes/cartaAbierta.webp';
import Button from "../Button/Button";


export default function MetodosDePago({ setMostrarEncabezado }) {

    useEffect(() => {
        setMostrarEncabezado(false)
    })


    return (
        <>

            <div className='container-logo'>
                <Link to='/'>
                    <img
                        alt="logo-doconline"
                        src={logo}
                        width="100"
                        className="d-inline-block align-center"
                    />
                </Link>
            </div>


            <div className='container--pasos fondoPaso1'>

                <img
                    alt="logo-doconline"
                    src={fotoFondo1}
                    width="300"
                    className="fotoFondo1"
                />
                <div className='numeracion-container'>
                    <div className='lineaSuperior invisible'></div>
                    <div className='circulo'><span>1</span></div>
                    <div className='lineaInferior'></div>
                </div>



                <motion.div
                    initial={{ opacity: 0, x: -10 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: .8 }}
                    exit={{ opacity: 0 }}
                    className='info-container'
                >
                    <h1 className='titulo'>Registrate en la App Doc Online</h1>
                    <p className='texto'>Ingresa a la app y completa tus datos, allí te guiaremos para sacar turno, pagar y completar tus datos para los formularios de Declaración Jurada y Consentimiento Informado.</p>
                    <Button type="submit" target={"__blank"} text={"Registrarse"} ruta={"https://doconlineargentina.com/turnero/"} className="butonRegistro"></Button >
                </motion.div>

                <div className='img-fondoPaso1'>
                </div>
            </div>

            <div className='container--pasos fondoPaso2'>
                <div className='numeracion-container'>
                    <div className='lineaSuperior'></div>
                    <div className='circulo'><span>2</span></div>
                    <div className='lineaInferior'></div>
                </div>

                <motion.div
                    initial={{ opacity: 0, x: -10 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: .8 }}
                    exit={{ opacity: 0 }}
                    className='info-container'
                >
                    <img
                        alt="logo-doconline"
                        src={fotoFondo2}
                        className="fotoFondo2"
                    />
                    <h1 className='titulo'>Valida tú identidad en Mi Argentina</h1>
                    <ul className='texto'>
                        <li>Ingresar el <strong>domicilio real</strong> dónde van a estar tus plantas.</li>
                        <li>Siempre poner <strong>9 plantas</strong>, ya que es el maximo de numeros de plantas por personas</li>
                        <li>Actualizaciones en la <strong>Ley 27.350</strong>. Cabe destacar que la ley NO es retroactiva.Por lo tanto, los permisos/renovaciones que se realizaron a partir del 20/04/23 van a tener validez de 3 años.</li>
                    </ul>
                    <Button type="submit" target={"__blank"} text={"Valida tu identidad"} ruta={"https://reprocann.msal.gob.ar/auth"} className="butonRegistro"></Button >
                </motion.div>
            </div>




            <div className='container--pasos fondoPaso4'>
                <div className='numeracion-container'>
                    <div className='lineaSuperior'></div>
                    <div className='circulo'><span>3</span></div>
                    <div className='lineaInferior invisible'></div>
                </div>

                <motion.div
                    initial={{ opacity: 0, x: -10 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: .8 }}
                    exit={{ opacity: 0 }}
                    className='info-container'
                >
                    <h1 className='titulo'>¡Listo!</h1>
                    <p className='texto'>Atención médica, en el día y horario del turno asignado realizaremos la consulta vía WhatsApp.</p>
                    <p className='texto'>En las próximas 24hs hábiles después del turno, te notificaremos que tu vinculación ha sido realizada con éxito y te guiaremos paso a paso para que la puedas ver desde tu cuenta en Reprocann.</p>
                    <Button type="submit" text={"Volver al inicio"} ruta={"/"} className="butonRegistro"></Button >
                </motion.div>
            </div>

        </>
    )
}

