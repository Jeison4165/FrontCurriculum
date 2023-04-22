import '../styles/SideMenu.scss'
import { FaBook, FaBookmark, FaEnvelope, FaHome, FaServer, FaUserAlt } from 'react-icons/fa'


export const SideMenu = () => {
    return (
        <nav id="navbar" className="nav-menu navbar">
            <ul>
                <li>
                    <a href="#hero" className="nav-link scrollto active">
                        <i className="bx bx-user"><FaHome></FaHome></i>
                        <span>Home</span>
                    </a>
                </li>
                <li>
                    <a href="#about" className="nav-link scrollto">
                        <i><FaUserAlt></FaUserAlt></i> 
                        <span>About</span>
                    </a>
                </li>
                <li>
                    <a href="#resume" className="nav-link scrollto">
                        <i><FaBookmark></FaBookmark></i> 
                        <span>Resume</span> 
                    </a>
                </li>
                <li>
                    <a href="#portfolio" className="nav-link scrollto">
                        <i><FaBook></FaBook></i> 
                        <span>Portfolio</span>
                    </a>
                </li>
                <li>
                    <a href="#services" className="nav-link scrollto">
                        <i><FaServer></FaServer></i> 
                        <span>Services</span>
                    </a>
                </li>
                <li>
                    <a href="#contact" className="nav-link scrollto">
                        <i><FaEnvelope></FaEnvelope></i>
                        <span>Contact</span>
                    </a>
                </li>
            </ul>
        </nav>
    )
}
