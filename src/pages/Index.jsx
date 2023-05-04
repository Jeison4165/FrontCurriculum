import '../styles/General.scss'
import { Header } from "../components/Header"
import { Hero } from "../components/Hero"
import { About } from '../components/About'
import { Facts } from '../components/Facts'
import { Skills } from '../components/Skills'
import { Resume } from '../components/Resume'
import { Portfolio } from '../components/Portfolio'
import { Services } from '../components/Services'
import { Testimonials } from '../components/Testimonials'
import { Contact } from '../components/Contact'
import { Footer } from '../components/Footer'
import { BackTop } from '../components/BackTop'

export const Index = () => {
    return (
        <>
            <Header></Header>
            <Hero></Hero>
            <main>
                <About></About>
                <Facts></Facts>
                <Skills></Skills>
                <Resume></Resume>
                <Portfolio></Portfolio>
                <Services></Services>
                <Testimonials></Testimonials>
                <Contact></Contact>
            </main>
            <Footer></Footer>
            <BackTop></BackTop>

        </>
    )
}
