import '../styles/Hero.scss'
import Typed from 'react-typed';
import profile_4 from '../assets/images/profile_4.jpg'
import { DATA_USER } from "../sources_api/personal_info"
import { useContext, useState } from 'react';
import { LanguageContext } from '../context/LanguageContext';

export const Hero = () => {
    // LANGUAGE
    const {language} = useContext(LanguageContext)

    // LIST WORDS
    const [listWords, setListWords] = useState(
        {'es':['Desarrollador...', 'Desarrollador Backend', 'Desarrollador Frontend', 'Design/Admin de Base de Datos'],
        'en':['Developer...', 'Developer Backend', 'Developer Frontend', 'Design/Admin DB Administrator']}
    )

    return (
        <section id="start" 
            className="d-flex justify-content-center align-items-center">
            <div className="hero-container">
                <div className='section-mobile'>
                    <h2 className='text-center'>
                        {DATA_USER.name.split(' ')[0] + ' ' + DATA_USER.last_name.split(' ')[0] }
                    </h2>
                    <img src={profile_4} alt="" className="img-fluid rounded"/>
                </div>
                <h1>{language === 'es' ?  "Soy ":"I'm "}</h1>
                <h1 className='rotate-description'>
                        <span className="typed">
                                {language === 'es' ?
                                    <Typed
                                        key={'es'}
                                        strings={listWords['es']}
                                        typeSpeed={100}
                                        loop
                                        backSpeed={50}
                                        backDelay={2000}
                                    />
                                    :<Typed
                                        key={'en'}
                                        strings={listWords['en']}
                                        typeSpeed={100}
                                        loop
                                        backSpeed={50}
                                        backDelay={2000}
                                    />
                                }
                        </span>
                </h1>
            </div>
        </section>
    )
}
