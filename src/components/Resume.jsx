import { FiBookmark } from 'react-icons/fi'
import '../styles/Resume.scss'
import { useContext } from 'react'
import { LanguageContext } from '../context/LanguageContext'
import { DATA_USER } from "../sources_api/personal_info"


export const Resume = () => {
	// LANGUAGE
	const {language} = useContext(LanguageContext)

	return (
		<section id="resume" className="resume">
		<div className="container">

		<div className="section-title">
			<h2>
				<i><FiBookmark/></i> 
				{language === 'es' ? 'Resumen': 'Sumary'}
			</h2>
		</div>

			<div className="row">
				<div className="col-lg-6" data-aos="fade-up">
					<h3 className="resume-title">
						{language === 'es' ? 'Educación': 'Education'}
					</h3>
					{DATA_USER.education.map( (data_education, index_education) => (
						<div key={data_education.date + index_education } className="resume-item">
							<h4>{data_education.title[language]}</h4>
							<h5>{data_education.date}</h5>
							<p><em>{data_education.school}</em></p>
							<p><em>{data_education.place}</em></p>
							{/* <p>Qui deserunt veniam. Et sed aliquam labore tempore sed quisquam iusto autem sit. Ea vero voluptatum qui ut dignissimos deleniti nerada porti sand markend</p> */}
						</div>
					))}
				</div>
				<div className="col-lg-6" data-aos="fade-up" data-aos-delay="100">
					<h3 className="resume-title"></h3>
					<h3 className="resume-title">
						{language === 'es' ? 'Experiencia Profesional': 'Professional Experience'}
					</h3>
					{DATA_USER.experience.map( (data_experience, index_experience) => (
						<div key={index_experience} className="resume-item">
							<h4>{data_experience.title[language]}</h4>
							<h5>{data_experience.date}</h5>
							<p><em>{data_experience.company}</em></p>
							<ul>
								{data_experience.task.map( (data_task, index_task) => (
									<li key={index_task}>{data_task.name[language]}</li>
								))}
							</ul>
						</div>
					))}
					
				</div>
			</div>
		</div>
		</section>
	)
}
