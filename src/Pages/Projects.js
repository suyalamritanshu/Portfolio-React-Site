import React, { useState } from "react";
import styled from "styled-components";
import { MainLayout, InnerLayout } from "../styles/Layouts";
import Title from "../Components/Title";
import { featuredProjects, earlierProjects } from "../Data/portfolios";
import Menu from "../Components/Menu";
import Button from "../Components/Button";
import FeaturedProjectCard from "../Components/FeaturedProjectCard";
import SEO from "../Components/SEO";
import breakpoints from "../styles/breakpoints";

const allButtons = ["All", ...new Set(earlierProjects.map((item) => item.category))];

function Projects() {
  const [menuItem, setMenuItems] = useState(earlierProjects);

  const filter = (button) => {
    if (button === "All") {
      setMenuItems(earlierProjects);
      return;
    }

    const filteredData = earlierProjects.filter((item) => item.category === button);
    setMenuItems(filteredData);
  };

  return (
    <MainLayout>
      <SEO
        title="Projects | Amritanshu Suyal"
        description="Projects by Amritanshu Suyal, including DeskDoc (AI voice receptionist) and FinovaAI (personal finance app)."
        path="/projects"
      />
      <Title title={"Projects"} span={"projects"} />
      <InnerLayout>
        <FeaturedGridStyled>
          {featuredProjects.map((project) => (
            <FeaturedProjectCard
              key={project.id}
              image={project.image}
              title={project.title}
              text={project.text}
              link={project.link}
            />
          ))}
        </FeaturedGridStyled>

        <EarlierWorkStyled>
          <summary>Earlier work</summary>
          <Button filter={filter} button={allButtons} />
          <Menu menuItem={menuItem} />
        </EarlierWorkStyled>
      </InnerLayout>
    </MainLayout>
  );
}

const FeaturedGridStyled = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-gap: 2rem;
  @media screen and (max-width: ${breakpoints.px700}) {
    grid-template-columns: repeat(1, 1fr);
  }
`;

const EarlierWorkStyled = styled.details`
  margin-top: 4rem;
  summary {
    cursor: pointer;
    color: var(--font-light-color);
    font-size: var(--font-size-h6);
    text-transform: uppercase;
    letter-spacing: 1px;
    padding-bottom: 1.5rem;
  }
`;

export default Projects;
