import '../styles/Header.scss'
import { DATA_USER } from "../sources_api/personal_info"
import { FaFacebookF, FaGithub, FaLinkedin, FaWhatsapp } from "react-icons/fa"
import { SideMenu } from "./SideMenu"
import profile_3 from '../assets/images/profile_3.jpg'


export const Header = () => {
    return (
        <header id='header'>
            <div className="d-flex flex-column">

                {/* PROFILE */}
                <div className="profile">
                    <img src={profile_3} alt="" className="img-fluid rounded-circle"/>
                    <h1 className="text-light">
                        <a href="">{DATA_USER.name.split(' ')[0] + ' ' + DATA_USER.last_name.split(' ')[0] }</a>
                    </h1>
                    <div className="social-links mt-3 text-center">
                        <a className='facebook' href={DATA_USER.social_networks.facebook} rel="noreferrer" target="_blank" >
                            <FaFacebookF></FaFacebookF>
                        </a>
                        <a className='whatsapp' href={DATA_USER.social_networks.whatsapp} rel="noreferrer" target="_blank">
                            <FaWhatsapp></FaWhatsapp    >
                        </a>
                        <a className='github' href={DATA_USER.social_networks.github} rel="noreferrer" target="_blank">
                            <FaGithub></FaGithub>
                        </a>
                        <a className='linkedin' href={DATA_USER.social_networks.linkedin} rel="noreferrer" target="_blank">
                            <FaLinkedin></FaLinkedin>
                        </a>
                        
                    </div>
                </div>

                {/* MENU */}
                <SideMenu></SideMenu>
            </div>
        </header>
    )
}
