// src/App.tsx
import React from "react";
import Navbar from "./Components/Navbar";
import Hero from "./Components/Hero";
import About from "./Components/About";
import Experience from "./Components/Experience ";
import Projects from "./Components/Projects";
import Community from "./Components/Community";
import Contact from "./Components/Contact";
import Footer from "./Components/Footer";
import './index.css'
import Education from "./Components/Education";
import Certification from "./Components/Certification";

const App: React.FC = () => {
  return (
    <div className="scroll-smooth">
      <Navbar />

      {/* Test Tailwind CSS */}
      <div className="bg-blue-500 text-white text-center py-4">
        Tailwind is working! 🎉
      </div>

      <section id="hero">
        <Hero />
      </section>
      <section id="about">
        <About />
      </section>
          <section id="education">
        <Education/>
      </section>
      <section id="experience">
        <Experience />
      </section>
      <section id="projects">
        <Projects />
      </section>
      <section id="certification">
        <Certification />
      </section>
      <section id="community">
        <Community />
      </section>
      <section id="contact">
        <Contact />
      </section>
      <Footer />
    </div>
  );
};

export default App;
