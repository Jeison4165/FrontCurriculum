import { DATA_USER } from "../sources_api/personal_info"
import { FaFacebookF, FaGithub, FaLinkedin } from "react-icons/fa";


export const Header = () => {
    return (
        <header id='header'>
            <div class="d-flex flex-column">
                <div class="profile">
                    <img src={DATA_USER.image} alt="" class="img-fluid rounded-circle"/>
                    <h1 class="text-light">
                        <a href="index.html">{DATA_USER.name.split(' ')[0] + ' ' + DATA_USER.last_name.split(' ')[0] }</a>
                    </h1>
                    {/* SOCIAL LINKS */}
                    <div class="social-links mt-3 text-center">
                        <a href={DATA_USER.social_networks.facebook} class="facebook" target="_blank">
                            <FaFacebookF></FaFacebookF>
                        </a>
                        <a href={DATA_USER.social_networks.github} class="github" target="_blank">
                            <FaGithub></FaGithub>
                        </a>
                        <a href={DATA_USER.social_networks.linkedin} class="linkedin" target="_blank">
                            <FaLinkedin></FaLinkedin>
                        </a>
                    </div>
                </div>

                {/* MENU */}
                <nav id="navbar" class="nav-menu navbar">
                    <ul>
                        <li><a href="#hero" class="nav-link scrollto active"><i class="bx bx-home"></i> <span>Home</span></a></li>
                        <li><a href="#about" class="nav-link scrollto"><i class="bx bx-user"></i> <span>About</span></a></li>
                        <li><a href="#resume" class="nav-link scrollto"><i class="bx bx-file-blank"></i> <span>Resume</span></a></li>
                        <li><a href="#portfolio" class="nav-link scrollto"><i class="bx bx-book-content"></i> <span>Portfolio</span></a></li>
                        <li><a href="#services" class="nav-link scrollto"><i class="bx bx-server"></i> <span>Services</span></a></li>
                        <li><a href="#contact" class="nav-link scrollto"><i class="bx bx-envelope"></i> <span>Contact</span></a></li>
                    </ul>
                </nav>

            </div>
        </header>
    )
}
