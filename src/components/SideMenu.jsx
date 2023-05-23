import { useContext, useState } from 'react';
import '../styles/SideMenu.scss'
import { FiBook, FiBookmark, FiClipboard, FiHome, FiMessageSquare, FiServer, FiUser } from "react-icons/fi";
import { ButtonSideContext } from '../context/ButtonSideContext';

export const SideMenu = () => {

    const [buttonActive, setButtonActive] = useState('start');
    const {visible, setVisible} = useContext(ButtonSideContext)

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
                        <span>Home</span>
                    </a>
                </li>
                <li>
                    <a href="#about" className={buttonActive === 'about' ? 'nav-link scrollto active': 'nav-link scrollto'}
                    onClick={() => clickItem('about')}>
                        <i><FiUser></FiUser></i> 
                        <span>About</span>
                    </a>
                </li>
                <li>
                    <a href="#resume" className={buttonActive === 'resume' ? 'nav-link scrollto active': 'nav-link scrollto'}
                        onClick={() => clickItem('resume')}>
                        <i><FiBookmark></FiBookmark></i> 
                        <span>Resume</span> 
                    </a>
                </li>
                <li>
                    <a href="#portfolio" className={buttonActive === 'portfolio' ? 'nav-link scrollto active': 'nav-link scrollto'}
                        onClick={() => clickItem('portfolio')}>
                        <i><FiBook></FiBook></i> 
                        <span>Portfolio</span>
                    </a>
                </li>
                <li>
                    <a href="#services" className={buttonActive === 'services' ? 'nav-link scrollto active': 'nav-link scrollto'}
                        onClick={() => clickItem('services')}>
                        <i><FiServer></FiServer></i> 
                        <span>Services</span>
                    </a>
                </li>
                <li>
                    <a href="#contact" className={buttonActive === 'contact' ? 'nav-link scrollto active': 'nav-link scrollto'}
                        onClick={() => clickItem('contact')}>
                        <i><FiMessageSquare></FiMessageSquare></i>
                        <span>Contact</span>
                    </a>
                </li>
            </ul>
        </nav>
    )
}
