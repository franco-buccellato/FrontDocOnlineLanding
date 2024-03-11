
import './PasosFinales.css';
import React, { useEffect } from 'react'
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import logo from '../../imagenes/Logotipo.webp';
import Button from "../Button/Button";


export default function MetodosDePago({ setMostrarEncabezado }) {

    useEffect(() => {
        setMostrarEncabezado(false)
    })


    return (
        <>
            <div className='container-logo'>
                <img
                    alt="logo-doconline"
                    src={logo}
                    width="100"
                    className="d-inline-block align-center"
                />
            </div>
            <div className='containerhola'>

                <div className='container-paso fondoPaso1'>
                    <div className='numeracion-container'>
                        <div className='lineaSuperior invisible'></div>
                        <div className='circulo'><span>1</span></div>
                        <div className='lineaInferior'></div>
                    </div>

                    <div className='info-container '>
                        <h1 className='titulo'>Registrate en la App Doc Online</h1>
                        <p className='texto'>Ingresa a la app y completa tus datos, allí te guiaremos para sacar turno, pagar y completar tus datos para los formularios de Declaración Jurada y Consentimiento Informado.</p>
                        <Button type="submit" text={"Registrarse"} ruta={"https://doconlineargentina.com/turnero/"} className="butonRegistro"></Button >
                    </div>

                    <div className='img-fondoPaso1'>
                    </div>
                </div>

                <div className='container-paso fondoPaso2'>
                    <div className='numeracion-container'>
                        <div className='lineaSuperior'></div>
                        <div className='circulo'><span>2</span></div>
                        <div className='lineaInferior'></div>
                    </div>

                    <div className='info-container'>
                        <h1 className='titulo'>Valida tú identidad en Mi Argentina</h1>
                        <ul className='texto'>
                            <li>Ingresar el <strong>domicilio real</strong> dónde van a estar tus plantas.</li>
                            <li>Siempre poner <strong>9 plantas</strong>, ya que es el maximo de numeros de plantas por personas</li>
                            <li>Actualizaciones en la <strong>Ley 27.350</strong>. Cabe destacar que la ley NO es retroactiva.Por lo tanto, los permisos/renovaciones que se realizaron a partir del 20/04/23 van a tener validez de 3 años.</li>
                        </ul>
                        <Button type="submit" text={"Registrarse"} ruta={"https://reprocann.msal.gob.ar/auth"} className="butonRegistro"></Button >
                    </div>
                </div>

                <div className='container-paso fondoPaso3'>
                    <div className='numeracion-container'>
                        <div className='lineaSuperior'></div>
                        <div className='circulo'><span>3</span></div>
                        <div className='lineaInferior'></div>
                    </div>

                    <div className='info-container'>
                        <h1 className='titulo'>¡Ya casi finalizamos!</h1>
                        <p className='texto'>Completa el formulario en nuestra plataforma para que el Dr. pueda registrar tus datos en la historia clínica.</p>
                        <Button type="submit" text={"Formulario Doc.Online"} ruta={"https://doconlineargentina.com/turnero/login/pagweb"} className="butonRegistro"></Button >
                    </div>
                </div>

                <div className='container-paso fondoPaso4'>
                    <div className='numeracion-container'>
                        <div className='lineaSuperior'></div>
                        <div className='circulo'><span>4</span></div>
                        <div className='lineaInferior invisible'></div>
                    </div>

                    <div className='info-container'>
                        <h1 className='titulo'>¡Listo!</h1>
                        <p className='texto'>Atención médica, en el día y horario del turno asignado realizaremos la consulta vía WhatsApp.</p>
                        <p className='texto'>En las próximas 24hs hábiles después del turno, te notificaremos que tu vinculación ha sido realizada con éxito y te guiaremos paso a paso para que la puedas ver desde tu cuenta en Reprocann.</p>
                    </div>
                </div>

            </div>

        </>
    )
}

