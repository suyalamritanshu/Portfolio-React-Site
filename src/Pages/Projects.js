import React, { useState } from "react";
import styled from "styled-components";
import { MainLayout, InnerLayout } from "../styles/Layouts";
import Title from "../Components/Title";
import { featuredProjects, earlierProjects } from "../Data/portfolios";
import Button from "../Components/Button";
import FeaturedProjectCard from "../Components/FeaturedProjectCard";
import SEO from "../Components/SEO";
import breakpoints from "../styles/breakpoints";

const allButtons = ["All", ...new Set(earlierProjects.map((item) => item.category))];

function Projects() {
  const [visibleProjects, setVisibleProjects] = useState(earlierProjects);

  const filter = (button) => {
    if (button === "All") {
      setVisibleProjects(earlierProjects);
      return;
    }

    setVisibleProjects(earlierProjects.filter((item) => item.category === button));
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
              imageWebp={project.imageWebp}
              imageWidth={project.imageWidth}
              imageHeight={project.imageHeight}
              title={project.title}
              text={project.text}
              link={project.link}
              stack={project.stack}
            />
          ))}
        </FeaturedGridStyled>

        <EarlierWorkStyled>
          <summary>Earlier work</summary>
          <Button filter={filter} button={allButtons} />
          <ul className="earlier-list">
            {visibleProjects.map((project) => (
              <li key={project.id}>
                <a href={project.link} target="_blank" rel="noreferrer">
                  <span className="title">{project.title}</span>
                  <span className="text">{project.text}</span>
                  <span className="arrow">→</span>
                </a>
              </li>
            ))}
          </ul>
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
    display: inline-flex;
    align-items: center;
    gap: 0.5rem;
    color: var(--font-light-color);
    font-size: var(--font-size-h6);
    text-transform: uppercase;
    letter-spacing: 1px;
    padding-bottom: 1.5rem;
    list-style: none;
    &::-webkit-details-marker {
      display: none;
    }
    &::after {
      content: "";
      width: 0.5rem;
      height: 0.5rem;
      border-right: 2px solid var(--font-light-color);
      border-bottom: 2px solid var(--font-light-color);
      transform: rotate(45deg);
      transition: transform 0.3s ease;
      @media (prefers-reduced-motion: reduce) {
        transition: none;
      }
    }
    &:hover {
      color: var(--white-color);
      &::after {
        border-color: var(--white-color);
      }
    }
  }
  &[open] summary::after {
    transform: rotate(-135deg);
  }

  .earlier-list {
    margin-top: 1rem;
    li {
      border-top: 1px solid var(--border-color);
      &:last-child {
        border-bottom: 1px solid var(--border-color);
      }
    }
    a {
      display: flex;
      align-items: baseline;
      gap: 1.25rem;
      padding: 1rem 0.25rem;
      transition: background-color 0.2s ease;
      &:hover {
        background-color: var(--background-dark-grey);
        .arrow {
          opacity: 1;
          transform: translateX(0);
        }
      }
    }
    .title {
      color: var(--white-color);
      font-weight: 600;
      flex-shrink: 0;
      width: 11rem;
    }
    .text {
      color: var(--font-light-color);
      font-size: var(--font-size-small);
      flex: 1;
    }
    .arrow {
      color: var(--primary-color-light);
      opacity: 0;
      transform: translateX(-0.5rem);
      transition: opacity 0.2s ease, transform 0.2s ease;
      flex-shrink: 0;
      @media (prefers-reduced-motion: reduce) {
        transform: none;
        transition: opacity 0.2s ease;
      }
    }
    @media screen and (max-width: ${breakpoints.px670}) {
      a {
        flex-direction: column;
        gap: 0.25rem;
      }
      .title {
        width: auto;
      }
      .arrow {
        display: none;
      }
    }
  }
`;

export default Projects;
