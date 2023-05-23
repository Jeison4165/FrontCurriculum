import '../styles/About.scss'
import { DATA_USER } from "../sources_api/personal_info"
import { FiUser } from 'react-icons/fi'


export const About = () => {
    return (
        <section id="about" className="about">
            <div className="container">
                <div className="section-title">
                    <h2>
                        <i><FiUser></FiUser></i> 
                        About
                    </h2>
                    {DATA_USER.description.map(item => (
                        <>
                            <p>{item}</p>
                        </>
                    ))}
                </div>
                <div className="row">
                    <div className="col mt-4 pt-4 pt-lg-0 content" data-aos="fade-left">
                        <h3>Personal information.</h3>
                        <div className="row mt-4">
                            <div className="col-lg-6">
                            <ul>
                                <li><i className="bi bi-chevron-right"></i> <strong>Birthday:</strong> <span>8 Nov 1997</span></li>
                                <li><i className="bi bi-chevron-right"></i> <strong>Phone:</strong> <span>+57 3125951934</span></li>
                                <li><i className="bi bi-chevron-right"></i> <strong>City:</strong> <span>Chiquinquirá / Boyacá / Colombia</span></li>
                            </ul>
                            </div>
                            <div className="col-lg-6">
                            <ul>
                                <li><i className="bi bi-chevron-right"></i> <strong>Age:</strong> <span>25</span></li>
                                <li><i className="bi bi-chevron-right"></i> <strong>Email:</strong> <span>jeisoncastillo4165@gmail.com</span></li>
                                <li><i className="bi bi-chevron-right"></i> <strong>Freelance:</strong> <span>Available</span></li>
                            </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
