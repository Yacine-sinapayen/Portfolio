import Hero from "./components/hero/Hero";
import Expertise from "./components/expertise/Expertise";
import Portfolio from "./components/portfolio/Portfolio";
import Contact from "./components/contact/Contact";

const App = () => {
  return (
    <div className="container">
      <section id="home">
        <Hero />
      </section>
      <section id="expertise">
        <Expertise />
      </section>
      {/* No section for portfolio to handle the effect scrolling. Because if we add a section, the effect scrolling will not work with conatct section */}
      <Portfolio />
      <section id="contact">
        <Contact />
      </section>
    </div>
  );
};

export default App;
