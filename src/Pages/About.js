import React from "react";
import styled from "styled-components";
import ImageSection from "../Components/ImageSection";
import Title from "../Components/Title";
import { MainLayout } from "../styles/Layouts";
import SEO from "../Components/SEO";

function About() {
  return (
    <MainLayout>
      <SEO
        title="About | Amritanshu Suyal"
        description="About Amritanshu Suyal, SDE-II at Darwinbox building the infrastructure that lets AI agents work inside enterprise software."
        path="/about"
      />
      <AboutStyled>
        <Title title={"About Me"} span={"About Me"} />
        <ImageSection />
      </AboutStyled>
    </MainLayout>
  );
}

const AboutStyled = styled.section``;

export default About;
