import Hero from "./components/hero/Hero";
import Expertise from "./components/expertise/Expertise";
import Portfolio from "./components/portfolio/Portfolio";
import Contact from "./components/contact/Contact";

const App = () => {
  return (
    <div className='container'>
      <section id="#home">
        <Hero />
      </section>
      <section id="#expertise">
        <Expertise />
      </section>
      <section id="#portfolio">
        <Portfolio />
      </section>
      <section id="#contact" >
        <Contact />
      </section>
    </div>
  )
}

export default App