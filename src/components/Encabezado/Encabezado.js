import GestorLogin from '../GestorLogin/GestorLogin';
import { useContext, useState, useEffect, useRef } from 'react';
import Modal from 'react-bootstrap/Modal';
import UsuarioContext from '../Context/UsuarioContext';
import logo from '../../imagenes/Logotipo.png';
import styled from 'styled-components';

function Encabezado() {


    // SE AGREGA EL FONDO DIFUMINADO
    const [scroll, setScroll] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 50) {
                setScroll(true);
            } else {
                setScroll(false);
            }
        };

        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);


    // MENU RESPONSIVE
    const navRef = useRef();
    const showNavbar = () => {
        navRef.current.classList.toggle(
            "responsive_nav"
        );
    };







    /* 
    const { esAdministrador } = useContext(UsuarioContext);

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
        <Header scroll={scroll}>
            <div className='content'>

                <div className='logo'>
                    <div className='logo--container-img'>
                        <img
                            alt="logo-doconline"
                            src={logo}
                            width="100"
                            className="d-inline-block align-center"
                        />
                    </div>
                    <div className='logo--container-text'>
                        <p>Doc.</p>
                        <p>Online</p>
                    </div>
                </div>

                <nav ref={navRef}>
                    <ul>
                        <li><a href="/#">Nosotros</a></li>
                        <li><a href="/#">Atención a Distancia</a></li>
                        <li><a href="/#">Como Funciona</a></li>
                        <li><a href="/#">Ingresar</a></li>
                    </ul>




                    <button
                        className="nav-btn nav-close-btn"
                        onClick={showNavbar}>
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-x-circle" viewBox="0 0 16 16"><path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z" /><path d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708z" /></svg>
                    </button>
                </nav>
                <button
                    className="nav-btn"
                    onClick={showNavbar}>
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-list" viewBox="0 0 16 16"><path fill-rule="evenodd" d="M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5z" /></svg>
                </button>

            </div>

        </Header>

        /* <Container>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <LinkContainer to={'/'}>
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
                        {/* <LinkContainer to = '/'><Nav.Link>Inicio</Nav.Link></LinkContainer> */
        /* <LinkContainer to='/'><Nav.Link>Inicio</Nav.Link></LinkContainer>
                        <Nav.Link href='#nosotros'>Nosotros</Nav.Link>
                        <Nav.Link href='#como-funciona'>¿Como Funciona?</Nav.Link> */
        /*                         <LinkContainer to = '/procedimientos'><Nav.Link>Procedimientos</Nav.Link></LinkContainer>
            <LinkContainer to = '/legal'><Nav.Link>Asesoramiento Legal</Nav.Link></LinkContainer>
            <LinkContainer to = '/aceites'><Nav.Link>Elaboración Aceites</Nav.Link></LinkContainer>
            <LinkContainer to = '/preguntas'><Nav.Link>Preguntas Frecuentes</Nav.Link></LinkContainer> */
        /* {
                            (esAdministrador()) &&
                            <LinkContainer to='/configuracion'><Nav.Link>Configuracion</Nav.Link></LinkContainer>
                        }
                    </Nav> */
        /* <Nav>
                            <LinkContainer to='/login'><Nav.Link><GestorLogin /></Nav.Link></LinkContainer>
                        </Nav>
                    </Navbar.Collapse>
                </Container> */

        /* <Modal show={showFallida} onHide={handleCloseFallida}>
                <Modal.Header closeButton>
                    <Modal.Title>Operación fallida!</Modal.Title>
                </Modal.Header>
                <Modal.Body>La operación falló, vuelva a intentarlo.</Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleCloseFallida}>
                        Close
                    </Button>
                </Modal.Footer>
            </Modal> */


    );
}

export default Encabezado;


const Header = styled.header`
	z-index: 100;
    display: flex;
	position: fixed;
    align-items: center;
	justify-content: center;
    width: 100%;
	height: 10vh;
    background: rgba(255, 255, 255, ${props => props.scroll ? 0.5 : 0});
    backdrop-filter: ${props => props.scroll ? 'blur(6px)' : 'none'};
    z-index: 1000;

    .content{
        width: 55%;
        margin: auto;
        display: flex;
    }

    .logo{
        display: flex;
        justify-content: center;
        align-items: center;
        gap: 20px;
        cursor: pointer;
        .logo--container-img{
            img{
                width: 3rem;
                height: 3rem;
            }
        }
        .logo--container-text{
            display: flex;
            p{
                margin: auto;
                font-size: 1.6rem;
            }
            p:first-child{
                font-weight: bold;
            }
        }
    }

    nav a {
        color: var(--var-color-text-primary);
        text-decoration: none;
        font-weight: 600;
		font-size: 1.1rem;
    }:hover {
	color: var(--var-color-text-hover);
    transition: all .2s;
    }
    .nav-btn {
	padding: 20px;
	cursor: pointer;
	background: transparent;
	border: none;
	outline: none;
	color: var(--var-color-text-primary);
	display: none;
	opacity: 0;
    svg{
        width: 30px;
        height: 30px;
    }
    }

    header div,nav {
	display: flex;
	align-items: center;
    width: auto;

    }nav{
        width: 100%;
		ul{
			display: flex;
            justify-content: space-around;
            width: 100%;
			list-style: none;
            margin: auto;
            padding: inherit;
            li:last-child{
                border: 2px solid;
                padding: 4px 20px;
                border-radius: 20px;
                background-color: white;
            }
            li{
                margin: auto;
                &:hover{
                    color: #312c2c;
                }
            }
		}
	}

    @media only screen and (max-width: 1540px) {
        .content{
            width: 74%;
        }
    }

    @media only screen and (max-width: 1024px) {
        background-color: white;
    .content{
        display: flex;
        justify-content: space-between;
        width: 90%;
    }
	.nav-btn {
		display: block;
		opacity: 1;
		margin-top: 6px;
	}

	nav {
		position: fixed;
		top: -140vh;
		left: 0;
		height: 100%;
		width: 100%;
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
		gap: 1.5rem;
		background-color: white;
        position: fixed;
		transition: 1s;
		ul{
			flex-direction: column;
			justify-content: center;
			align-items: center;
			li{
				margin: 10px 0;
				padding: 4px;
			}
		}
	}

	.responsive_nav {
		transform: translateY(140vh);
	}

	.nav-close-btn {
		position: absolute;
		top: 1rem;
		right: 4.5rem;
	}
	.nav-close-btn{
		margin-top: 0;
	}

	nav a {
		font-size: 1.5rem;
	}
}

`
