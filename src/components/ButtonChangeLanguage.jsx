import '../styles/ButtonChangeLanguage.scss'
import { FaLanguage } from "react-icons/fa"
import { useContext } from 'react'
import { LanguageContext } from '../context/LanguageContext'

export const ButtonChangeLanguage = () => {
    // LANGUAGE
    const {language, setLanguage} = useContext(LanguageContext)


    const onClickLanguage = () => {
        if(language === 'es'){
            setLanguage('en')
        }else if(language === 'en'){
            setLanguage('es')
        }
    }

    return (
        <i className="button-language" onClick={onClickLanguage}>
            <FaLanguage/>
        </i>
    )
}
