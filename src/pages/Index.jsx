import '../styles/General.scss'
import { Header } from "../components/Header"
import { Hero } from "../components/Hero"
import { About } from '../components/About'
import { Skills } from '../components/Skills'
import { Resume } from '../components/Resume'
import { Portfolio } from '../components/Portfolio'
import { Services } from '../components/Services'
import { Testimonials } from '../components/Testimonials'
import { Contact } from '../components/Contact'
import { BackTop } from '../components/BackTop'
import { MobileNavToggle } from '../components/MobileNavToggle'
import { ButtonSideProvider } from '../context/ButtonSideContext'
import { ButtonChangeLanguage } from '../components/ButtonChangeLanguage'
import { LanguageProvider } from '../context/LanguageContext'

export const Index = () => {
    return (
        <LanguageProvider>
            <ButtonChangeLanguage/>
            <ButtonSideProvider>
                <MobileNavToggle></MobileNavToggle>
                <Header></Header>
            </ButtonSideProvider>
            <Hero></Hero>
            <main id="main">
                <About></About>
                {/* <Facts></Facts> */}
                <Skills></Skills>
                <Resume></Resume>
                <Portfolio></Portfolio>
                <Services></Services>
                <Testimonials></Testimonials>
                <Contact></Contact>
            </main>
            {/* <Footer></Footer> */}
            <BackTop></BackTop>
        </LanguageProvider>
    )
}
