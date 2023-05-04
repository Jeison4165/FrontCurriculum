import '../styles/Hero.scss'

export const Hero = () => {
    return (
        <section id="hero" 
            className="d-flex flex-column justify-content-center align-items-center">
            <div className="hero-container" data-aos="fade-in">
                <h1>Jeison Castillo</h1>
                <p>I'm 
                    <span className="typed" data-typed-items="Designer, Developer, Freelancer, Photographer"></span>
                </p>
            </div>
        </section>
    )
}
