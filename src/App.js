import React from "react";
import styled from "styled-components";
import About from "./Pages/About";
import ResumePage from "./Pages/ResumePage";
import Projects from "./Pages/Projects";
import Contact from "./Pages/Contact";
import Navigation from "./Components/Navigation";
import Footer from "./Components/Footer";
import Home from "./Pages/Home";
import { Routes, Route } from "react-router-dom";

const App = () => {
  return (
    <div className="App">
      <Navigation />
      <MainContentStyled>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/resume" element={<ResumePage />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
        <Footer />
      </MainContentStyled>
    </div>
  );
};

const MainContentStyled = styled.main`
  padding-top: 4.5rem;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
`;

export default App;
