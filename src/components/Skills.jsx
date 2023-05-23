import { useContext } from 'react'
import '../styles/Skills.scss'
import { LanguageContext } from '../context/LanguageContext'
import { FiTag } from 'react-icons/fi'
import { DATA_USER } from "../sources_api/personal_info"

export const Skills = () => {
	// LANGUAGE
	const {language} = useContext(LanguageContext)

	return (
		<section id="skills" className="skills section-bg">
			<div className="container">
				<div className="section-title">
					<h2>
						<i><FiTag/></i> 
						{language === 'es' ? 'Habilidades': 'Skills'}
					</h2>
				</div>

				<div className="row skills-content">
					{DATA_USER.skills.map( (data_category, index) => (
						<>
							<h3 key={data_category.id}>{data_category.name[language]}</h3>
							{data_category.items.map( (data_item, index_item) => (
								<div key = {data_category.id + index + index_item} className="col-lg-3" data-aos="fade-up">
									<div className="progress">
										<span className="skill">{data_item.name}<i className="val">{data_item.value}%</i></span>
										<div className="progress-bar-wrap">
											<div className="progress-bar" role="progressbar" style={{'width' : data_item.value + '%'}} aria-valuenow={data_item.value} aria-valuemin="0" aria-valuemax="100"></div>
										</div>
									</div>
								</div>
							))}
						</>
					))}
				</div>
			</div>
		</section>
	)
}
