import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
/* import NavItem from 'react-bootstrap/NavItem'; */
import Navbar from 'react-bootstrap/Navbar';
/* import CartWidget from '../CartWidget/CartWidget'; */
import GestorLogin from '../GestorLogin/GestorLogin';
import '../Encabezado/Encabezado.css';
import { useContext, useState } from 'react';
import {LinkContainer} from 'react-router-bootstrap'
import Button from 'react-bootstrap/Button';
/* import Form from 'react-bootstrap/Form'; */
import Modal from 'react-bootstrap/Modal';
import UsuarioContext from '../Context/UsuarioContext';
import logo from '../../imagenes/Logotipo.png';
/* import axios from 'axios'; */

function Encabezado() {


    const {esAdministrador} = useContext(UsuarioContext);
/* 
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const [showListaDePrecios, setShowListaDePrecios] = useState(false);
    const handleCloseListaDePrecios = () => setShowListaDePrecios(false);
    const handleShowListaDePrecios = () => setShowListaDePrecios(true); */

    /* MODAL Fallida*/
    const [showFallida, setShowFallida] = useState(false);
    const handleCloseFallida = () => setShowFallida(false);
    /* const handleShowFallida= () => setShowFallida(true); */

    return (
        <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark" className='fixed-top'>
            <Container>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <LinkContainer to = {'/'}>
                    <Navbar.Brand>
                        <img
                            alt="logo-doconline"
                            src={logo}
                            width="100"
                            className="d-inline-block align-center"
                        />{' '}
                    </Navbar.Brand>
                </LinkContainer>
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="me-auto">
                        {/* <LinkContainer to = '/'><Nav.Link>Inicio</Nav.Link></LinkContainer> */}
                        <LinkContainer to = '/'><Nav.Link>Inicio</Nav.Link></LinkContainer>
                        <Nav.Link href='#nosotros'>Nosotros</Nav.Link>
                        <Nav.Link href='#como-funciona'>¿Como Funciona?</Nav.Link>
{/*                         <LinkContainer to = '/procedimientos'><Nav.Link>Procedimientos</Nav.Link></LinkContainer>
                        <LinkContainer to = '/legal'><Nav.Link>Asesoramiento Legal</Nav.Link></LinkContainer>
                        <LinkContainer to = '/aceites'><Nav.Link>Elaboración Aceites</Nav.Link></LinkContainer>
                        <LinkContainer to = '/preguntas'><Nav.Link>Preguntas Frecuentes</Nav.Link></LinkContainer> */}
                        {
                            (esAdministrador()) &&
                            <LinkContainer to = '/configuracion'><Nav.Link>Configuracion</Nav.Link></LinkContainer>
                        }
                    </Nav>
                    <Nav>
                        <LinkContainer to = '/login'><Nav.Link><GestorLogin/></Nav.Link></LinkContainer>
                    </Nav>
                </Navbar.Collapse>
            </Container>
            <Modal show={showFallida} onHide={handleCloseFallida}>
                    <Modal.Header closeButton>
                    <Modal.Title>Operación fallida!</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>La operación falló, vuelva a intentarlo.</Modal.Body>
                    <Modal.Footer>
                    <Button variant="secondary" onClick={handleCloseFallida}>
                        Close
                    </Button>
                    </Modal.Footer>
                </Modal>
        </Navbar>
    );
}

export default Encabezado;