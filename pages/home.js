import Navbar from '../components/navbar'
import Hero from '../components/hero'
import SectionSeparator from '../components/section-separator'
import Stats from '../components/stats'
import Features from '../components/features'
import HeroReverse from '../components/hero-reverse'
import Pricing from '../components/pricing'
import Historia from '../components/historia'
import Testimonials from '../components/testimonials'
import Contact from '../components/contact'
import Gallery from '../components/gallery'

const Home2 = (props) => {
    return (
        <>
            <div className="home-container">
                <Navbar></Navbar>
                <Hero rootClassName="hero-root-class-name"></Hero>
                <SectionSeparator rootClassName="section-separator-root-class-name"></SectionSeparator>
                <Stats rootClassName="stats-root-class-name"></Stats>
                <SectionSeparator rootClassName="section-separator-root-class-name"></SectionSeparator>
                <Testimonials></Testimonials>
                <SectionSeparator rootClassName="section-separator-root-class-name"></SectionSeparator>
                <Contact></Contact>
                <SectionSeparator rootClassName="section-separator-root-class-name"></SectionSeparator>
                <Gallery></Gallery>
                </div>
            <style jsx>
                {`
          .home-container {
            width: 100%;
            height: auto;
            display: flex;
            min-height: 100vh;
            align-items: center;
            flex-direction: column;
          }
        `}
            </style>
        </>
    )
}

export default Home2
