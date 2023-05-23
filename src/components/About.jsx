import '../styles/About.scss'
import { DATA_USER } from "../sources_api/personal_info"
import { FiUser } from 'react-icons/fi'
import { LanguageContext } from '../context/LanguageContext'
import { useContext } from 'react'


export const About = () => {
    // LANGUAGE
    const {language} = useContext(LanguageContext)

    return (
        <section id="about" className="about">
            <div className="container">
                <div className="section-title">
                    <h2>
                        <i><FiUser></FiUser></i> 
                        {language === 'es' ? 'Sobre mí': 'About'}
                    </h2>
                    {DATA_USER.description[language].map((item, index) => (
                        <>
                            <p key={index}>{item}</p>
                        </>
                    ))}
                </div>
                <div className="row">
                    <div className="col mt-4 pt-4 pt-lg-0 content" data-aos="fade-left">
                        <h3>{language === 'es' ? 'Información personal': 'Personal information'}</h3>
                        <div className="row mt-4">
                            <div className="col-lg-6">
                            <ul>
                                <li><i className="bi bi-chevron-right"></i> <strong>{language === 'es' ? 'Fecha de nacimiento:': 'Birthdate:'} </strong> <span>{DATA_USER.birthdate}</span></li>
                                <li><i className="bi bi-chevron-right"></i> <strong>{language === 'es' ? 'Celular:': 'Phone:'}</strong> <span>{DATA_USER.cellphone}</span></li>
                                <li><i className="bi bi-chevron-right"></i> <strong>{language === 'es' ? 'Ubicación:': 'Location:'}</strong> <span>{DATA_USER.location}</span></li>
                            </ul>
                            </div>
                            <div className="col-lg-6">
                            <ul>
                                <li><i className="bi bi-chevron-right"></i> <strong>{language === 'es' ? 'Edad:': 'Age:'}</strong> <span>{DATA_USER.age}</span></li>
                                <li><i className="bi bi-chevron-right"></i> <strong>{language === 'es' ? 'Correo electronico:': 'Email:'}</strong> <span>jeisoncastillo4165@gmail.com</span></li>
                                <li><i className="bi bi-chevron-right"></i> <strong>{language === 'es' ? 'Freelance:': 'Freelance:'}</strong> <span>{language === 'es' ? 'Disponible': 'Available'}</span></li>
                            </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
