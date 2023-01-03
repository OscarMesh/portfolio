import "./App.css";
import About from "./components/About";
import Experience from "./components/Experience";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Projects from "./components/Projects";
import Skills from "./components/Skills";
function App() {
  return (
    <div className="App bg-[rgb(41,41,41)] text-white h-screen snap-y snap-mandatory overflow-scroll z-0">
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

      {/* Gitub projects */}

      {/* Contact */}
    </div>
  );
}

export default App;
