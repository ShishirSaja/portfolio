import React from "react";
import styled from "styled-components";
import { motion } from "framer-motion";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Projects from "./components/Projects";
import Skills from "./components/Skills";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

const AppContainer = styled.div`
  background-color: #f8f9fa;
  min-height: 100vh;
`;

function App() {
  return (
    <AppContainer>
      <Navbar />
      <Hero />
      <About />
      <Projects />
      <Skills />
      <Contact />
      <Footer />
    </AppContainer>
  );
}

export default App;
