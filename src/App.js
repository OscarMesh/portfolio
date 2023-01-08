import "./App.css";
import About from "./components/About";
import ContactMe from "./components/ContactMe";
import Experience from "./components/Experience";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Projects from "./components/Projects";
import Skills from "./components/Skills";
function App() {
  return (
    <div
      className="App bg-[rgb(41,41,41)] text-white h-screen snap-y snap-mandatory overflow-hidden md:overflow-scroll z-0
    scrollbar-thin scrollbar-track-gray-400/20 scrollbar-thumb-[#898989]/80 body-font font-Urbanist
    "
    >
      <head>
        <title>Oscar's Portfolio</title>
      </head>
      <Header />
      <section id="hero" className="snap-start">
        <Hero />
      </section>

      <section id="about" className="snap-center">
        <About />
      </section>

      <section id="experience" className="snap-center">
        <Experience />
      </section>

      <section id="skills" className="snap-center">
        <Skills />
      </section>

      <section id="projects" className="snap-center">
        <Projects />
      </section>
      {/* Contact */}

      <section id="contact" className="snap-start">
        <ContactMe />
      </section>

      <a href="#hero">
        <footer className="sticky bottom-5 w-full cursor-pointer">
          <div className="flex items-center justify-center">
            <img
              className="w-5 h-5 md:w-10 md:h-10 rounded-full filter grayscale hover:grayscale-0"
              src="https://avatars.githubusercontent.com/u/93758969?v=4"
              alt=""
            />
          </div>
        </footer>
      </a>
    </div>
  );
}

export default App;
