import React, { useState, useEffect, Fragment } from "react";
import ClimbingBoxLoader from "react-spinners/ClimbingBoxLoader";
import styled from "styled-components";
import About from "./Pages/About";
import ResumePage from "./Pages/ResumePage";
import Portfolio from "./Pages/Portfolio";
import Blogs from "./Pages/Blogs";
import Contact from "./Pages/Contact";
import Brightness4Icon from "@material-ui/icons/Brightness4";
import MenuIcon from "@material-ui/icons/Menu";

// import Switch from "@material-ui/core/Switch";
// import { IconButton } from "@material-ui/core";

import Sidebar from "./Components/Sidebar";
import Home from "./Pages/Home";
import Video from "../src/img/video1.mp4";
import { Routes, Route } from "react-router-dom";

const App = () => {
  // const [loading, setLoading] = useState(false);

  // useEffect(() => {
  //   setLoading(true);
  //   setTimeout(() => {
  //     setLoading(false);
  //   }, 1000);
  // }, []);
  return (
    // <div className="App1">
    //   {loading ? (
    //     <ClimbingBoxLoader color={"#F3B042"} loading={loading} size={30} />
    //   ) : (

    <div className="App">
      <video
        autoPlay
        loop
        muted
        style={{
          position: "absolute",
          width: "100%",
          left: "0%",
          top: "0%",
          height: "100%",
          objectFit: "cover",
        }}
      >
        <source src={Video} type="video/mp4" />
      </video>
      <Sidebar />

      <MainContentStyled>
          <div className="lines">
            <div className="line-1"></div>
            <div className="line-2"></div>
            <div className="line-3"></div>
            <div className="line-4"></div>
          </div>

      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/about' element={<About />} />
        <Route path='/portfolio' element={<Portfolio />} />
        <Route path='/resume' element={<ResumePage />} />
        <Route path='/blogs' element={<Blogs />} />
        <Route path='/contact' element={<Contact />} />
      </Routes>

      </MainContentStyled>
      

        
    </div>
  );
};

const MainContentStyled = styled.main`
  position: relative;
  margin-left: 16.3rem;
  min-height: 100vh;
  @media screen and (max-width: 1200px) {
    margin-left: 0;
  }
  .lines {
    position: absolute;
    min-height: 100%;
    width: 100%;
    display: flex;
    justify-content: space-evenly;
    opacity: 0.4;
    z-index: -1;
    .line-1,
    .line-2,
    .line-3,
    .line-4 {
      width: 1px;
      min-height: 100vh;
      background-color: var(--border-color);
    }
  }
`;

export default App;
