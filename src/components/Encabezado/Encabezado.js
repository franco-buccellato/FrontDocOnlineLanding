import { useState, useEffect, useRef, useContext} from 'react';
import logo from '../../imagenes/Logotipo.png';
import styled from 'styled-components';
import UsuarioContext from '../Context/UsuarioContext';
import { Link } from 'react-router-dom';

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

    //Usuario Logueado
    const {estaLogueado, usuario} = useContext(UsuarioContext);

    return (
        <Header scroll={scroll}>
            <div className='content'>
                {/* <a href="#inicio"> */}
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
                {/* </a> */}
                <nav ref={navRef}>
                    <ul>
                        <li onClick={showNavbar}><a href="#nosotros">Nosotros</a></li>
                        <li onClick={showNavbar}><a href="#atencion-distancia">Atención a Distancia</a></li>
                        <li onClick={showNavbar}><a href="#como-funciona">Como Funciona</a></li>
                        <li onClick={showNavbar}><a href="#renovacion">Renovación</a></li>
                        <li onClick={showNavbar}><a href="#uso-practico">Uso Práctico</a></li>
                        {
                            estaLogueado() ? <Link to={'/sesion'}><li onClick={showNavbar}>{usuario.nombre}</li></Link> : <Link to={'/login'}><li onClick={showNavbar}>Ingresar</li></Link>
                        }
                    </ul>
                    <button
                        className="nav-btn nav-close-btn"
                        onClick={showNavbar}>
                        <svg width="16" height="16" fill="currentColor" class="bi bi-x-circle" viewBox="0 0 16 16"><path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z" /><path d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708z" /></svg>
                    </button>
                </nav>
                <button
                    className="nav-btn"
                    onClick={showNavbar}>
                    <svg  width="20" height="16" fill="currentColor" class="bi bi-list" viewBox="0 0 16 16"><path fill-rule="evenodd" d="M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5z" /></svg>
                </button>
            </div>
        </Header>
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
    backdrop-filter: ${props => props.scroll ? 'blur(4px)' : 'none'};
    z-index: 1000;

    .content{
        width: 60%;
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
        &:hover {
	        color: #00b1ff;
            transition: all .2s;
        }
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
                border: 2px solid transparent;
                padding: 4px 20px;
                border-radius: 20px;
                background-color: white;
                &:hover{
                    transition: all .4s;
                    border: 2px solid #00b1ff;
                    color: #00b1ff;
                }
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
        height: 12vh;
        .content{
            width: 74%;
        }
    }

    @media only screen and (max-width: 1240px) {
        nav a {
		    font-size: .9rem;
        }

        .logo{
            gap: 12px;

            .logo--container-img{
                img{
                    width: 2rem;
                    height: 2rem;
                }
            }

            .logo--container-text{
                p{
                    font-size: 1.2rem;
                }
            }
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
            top: 0;
            left: -100%!important;
            left: 0;
            height: 100vh;
            width: 100%;
            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: center;
            gap: 1.5rem;
            background-color: white;
            position: fixed;
            transition: .6s;
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
            transform: translateX(100%);
        }

        .nav-close-btn {
            position: absolute;
            top: 1.6rem;
            right: 1.4rem;
        }
        .nav-close-btn{
            margin-top: 0;
        }

        nav a {
            font-size: 1.5rem;
        }
}

`
