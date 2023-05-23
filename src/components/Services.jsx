import { useContext } from 'react'
import { LanguageContext } from '../context/LanguageContext'
import '../styles/Services.scss'
import { FiChrome, FiCodepen, FiDatabase, FiServer, FiTrendingUp } from 'react-icons/fi'
import { DATA_USER } from "../sources_api/personal_info"

export const Services = () => {
	// LANGUAGE
	const {language} = useContext(LanguageContext)

	return (
		<section id="services" className="services">
			<div className="container">
				<div className="section-title">
					<h2>
						<i><FiServer/></i> 
						{language === 'es' ? 'Servicios': 'Services'}
					</h2>
				</div>
				<div className="row mt-5">
				{DATA_USER.services.map( (data_service, index_service) => (
					<div key={index_service} className="col-lg-6 icon-box" data-aos="fade-up">
						<div className="icon">
							<i >
								{data_service.order === 1 ? <FiChrome/> : null}	
								{data_service.order === 2 ? <FiCodepen/> : null}	
								{data_service.order === 3 ? <FiDatabase/> : null}	
								{data_service.order === 4 ? <FiTrendingUp/> : null}	
							</i>
						</div>
						<h4 className="title"><a href="#services">{data_service.name[language]}</a></h4>
						<p className="description">{data_service.description[language]}</p>
					</div>
				))}
				</div>
			</div>
		</section>
	)
}
