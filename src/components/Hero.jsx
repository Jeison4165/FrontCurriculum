import '../styles/Hero.scss'
import Typed from 'react-typed';
import profile_3 from '../assets/images/profile_3.jpg'
import { DATA_USER } from "../sources_api/personal_info"

export const Hero = () => {

    return (
        <section id="start" 
            className="d-flex justify-content-center align-items-center">
            <div className="hero-container">
                <div className='section-mobile'>
                    <h2 className='text-center'>
                        {DATA_USER.name.split(' ')[0] + ' ' + DATA_USER.last_name.split(' ')[0] }
                    </h2>
                    <img src={profile_3} alt="" className="img-fluid rounded"/>
                </div>
                
                <h1>I'm&nbsp;
                    <span className="typed">
                        <Typed
                            strings={['Developer...', 'Developer Backend', 'Developer Frontend', 'DB Administrator']}
                            typeSpeed={100}
                            loop
                            backSpeed={50}
                            backDelay={2000}
                        />
                    </span>
                </h1>
            </div>
        </section>
    )
}
