import { useContext, useState } from 'react';
import '../styles/SideMenu.scss'
import { FiBook, FiBookmark, FiHome, FiMessageSquare, FiServer, FiUser } from "react-icons/fi";
import { ButtonSideContext } from '../context/ButtonSideContext';
import { LanguageContext } from '../context/LanguageContext';

export const SideMenu = () => {
    // LANGUAGE
    const {language} = useContext(LanguageContext)
    // ACTIVE BUTTON
    const [buttonActive, setButtonActive] = useState('start');
    // TOGGLE BUTTON
    const {setVisible} = useContext(ButtonSideContext)
    // LIST BUTTONS
    const [listButtons, setListButtons] = useState({
        'es':{
            'home': 'Inicio',
            'about': 'Sobre mí',
            'resume': 'Resumen',
            'portfolio': 'Portafolio',
            'services': 'Servicios',
            'contact': 'Contacto',
        },
        'en':{
            'home': 'Home',
            'about': 'About',
            'resume': 'Resume',
            'portfolio': 'Portfolio',
            'services': 'Services',
            'contact': 'Contact',
        },
    })

    const clickItem = (value) => {
        document.body.classList.remove('mobile-nav-active')
        setButtonActive(value)
        setVisible((prev) => (!prev))
    }

    return (
        <nav id="navbar" className="nav-menu navbar mt-3">
            <ul>
                <li>
                    <a href="#start" className={buttonActive === 'start' ? 'nav-link scrollto active': 'nav-link scrollto'}
                    onClick={() => clickItem('start')}>
                        <i>
                            <FiHome></FiHome>
                        </i>
                        <span>{listButtons[language]['home']}</span>
                    </a>
                </li>
                <li>
                    <a href="#about" className={buttonActive === 'about' ? 'nav-link scrollto active': 'nav-link scrollto'}
                    onClick={() => clickItem('about')}>
                        <i><FiUser></FiUser></i> 
                        <span>{listButtons[language]['about']}</span>
                    </a>
                </li>
                <li>
                    <a href="#resume" className={buttonActive === 'resume' ? 'nav-link scrollto active': 'nav-link scrollto'}
                        onClick={() => clickItem('resume')}>
                        <i><FiBookmark></FiBookmark></i> 
                        <span>{listButtons[language]['resume']}</span>
                    </a>
                </li>
                <li>
                    <a href="#portfolio" className={buttonActive === 'portfolio' ? 'nav-link scrollto active': 'nav-link scrollto'}
                        onClick={() => clickItem('portfolio')}>
                        <i><FiBook></FiBook></i> 
                        <span>{listButtons[language]['portfolio']}</span>
                    </a>
                </li>
                <li>
                    <a href="#services" className={buttonActive === 'services' ? 'nav-link scrollto active': 'nav-link scrollto'}
                        onClick={() => clickItem('services')}>
                        <i><FiServer></FiServer></i> 
                        <span>{listButtons[language]['services']}</span>
                    </a>
                </li>
                <li>
                    <a href="#contact" className={buttonActive === 'contact' ? 'nav-link scrollto active': 'nav-link scrollto'}
                        onClick={() => clickItem('contact')}>
                        <i><FiMessageSquare></FiMessageSquare></i>
                        <span>{listButtons[language]['contact']}</span>
                    </a>
                </li>
            </ul>
        </nav>
    )
}
