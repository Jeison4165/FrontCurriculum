import '../styles/Header.scss'
import { DATA_USER } from "../sources_api/personal_info"
import { FaFacebookF, FaGithub, FaLinkedin } from "react-icons/fa"
import { SideMenu } from "./SideMenu"
import profile_1 from '../assets/images/profile_1.jpg'


export const Header = () => {
    return (
        <header id='header'>
            <div className="d-flex flex-column">

                {/* PROFILE */}
                <div className="profile">
                    <img src={profile_1} alt="" className="img-fluid rounded-circle"/>
                    <h1 className="text-light">
                        <a href="">{DATA_USER.name.split(' ')[0] + ' ' + DATA_USER.last_name.split(' ')[0] }</a>
                    </h1>
                    <div className="social-links mt-3 text-center">
                        <a href={DATA_USER.social_networks.facebook} target="_blank">
                            <FaFacebookF></FaFacebookF>
                        </a>
                        <a href={DATA_USER.social_networks.github} target="_blank">
                            <FaGithub></FaGithub>
                        </a>
                        <a href={DATA_USER.social_networks.linkedin} target="_blank">
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
