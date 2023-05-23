import { useContext, useState } from 'react';
import '../styles/SideMenu.scss'
import { FiBookmark, FiHome, FiServer, FiTag, FiUser } from "react-icons/fi";
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
            'skills': 'Habilidades',
            'resume': 'Resumen',
            'portfolio': 'Portafolio',
            'services': 'Servicios',
            'contact': 'Contacto',
        },
        'en':{
            'home': 'Home',
            'about': 'About',
            'skills': 'Skills',
            'resume': 'Sumary',
            'portfolio': 'Portfolio',
            'services': 'Services',
            'contact': 'Contact',
        },
    })

    const clickItem = (event, value) => {
        event.preventDefault();
        document.body.classList.remove('mobile-nav-active')
        setButtonActive(value)
        setVisible(true)
        document.getElementById(value).scrollIntoView({
            behavior: 'smooth'
        });
    }

    return (
        <nav id="navbar" className="nav-menu navbar mt-3">
            <ul>
                <li>
                    <a href="" className={buttonActive === 'start' ? 'nav-link scrollto active': 'nav-link scrollto'}
                    onClick={(event) => clickItem(event, 'start')}>
                        <i>
                            <FiHome/>
                        </i>
                        <span>{listButtons[language]['home']}</span>
                    </a>
                </li>
                <li>
                    <a href="#about" className={buttonActive === 'about' ? 'nav-link scrollto active': 'nav-link scrollto'}
                        onClick={(event) => clickItem(event, 'about')}>
                        <i><FiUser/></i> 
                        <span>{listButtons[language]['about']}</span>
                    </a>
                </li>
                <li>
                    <a href="#skills" className={buttonActive === 'skills' ? 'nav-link scrollto active': 'nav-link scrollto'}
                        onClick={(event) => clickItem(event, 'skills')}>
                        <i><FiTag/></i> 
                        <span>{listButtons[language]['skills']}</span>
                    </a>
                </li>
                <li>
                    <a href="#resume" className={buttonActive === 'resume' ? 'nav-link scrollto active': 'nav-link scrollto'}
                        onClick={(event) => clickItem(event, 'resume')}>
                        <i><FiBookmark></FiBookmark></i> 
                        <span>{listButtons[language]['resume']}</span>
                    </a>
                </li>
                <li>
                    <a href="#services" className={buttonActive === 'services' ? 'nav-link scrollto active': 'nav-link scrollto'}
                        onClick={(event) => clickItem(event, 'services')}>
                        <i><FiServer></FiServer></i> 
                        <span>{listButtons[language]['services']}</span>
                    </a>
                </li>
            </ul>
        </nav>
    )
}
