import React from "react";
import styled from "styled-components";
import ImageSection from "../Components/ImageSection";
import Title from "../Components/Title";
import { MainLayout } from "../styles/Layouts";
import SEO from "../Components/SEO";
import skillGroups from "../Data/skills";
import breakpoints from "../styles/breakpoints";

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
        <div className="about-grid">
          <div className="bio-column">
            <ImageSection />
          </div>
          <div className="facts-column">
            <div className="about-info">
              <div className="info-title">
                <p>Role</p>
                <p>Location</p>
              </div>
              <div className="info">
                <p>: SDE-II, Darwinbox</p>
                <p>: Hyderabad, India</p>
              </div>
            </div>

            <h4 className="skills-heading">
              <span className="tick" aria-hidden="true"></span>
              Skills
            </h4>
            <div className="skill-groups">
              {skillGroups.map((group) => (
                <div className="skill-group" key={group.label}>
                  <h5>{group.label}</h5>
                  <div className="pills">
                    {group.items.map((item) => (
                      <span className="pill" key={item}>
                        {item}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </AboutStyled>
    </MainLayout>
  );
}

const AboutStyled = styled.section`
  .about-grid {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 4rem;
    margin-top: 4rem;
    @media screen and (max-width: ${breakpoints.px1000}) {
      grid-template-columns: 1fr;
      gap: 3rem;
    }
  }

  .about-info {
    display: flex;
    padding-bottom: 2rem;
    .info-title {
      padding-right: 3rem;
      p {
        font-weight: 600;
      }
    }
    .info-title,
    .info {
      p {
        padding: 0.3rem 0;
      }
    }
  }

  .skills-heading {
    position: relative;
    padding-left: 1.1rem;
    font-size: 1.4rem;
    text-transform: uppercase;
    letter-spacing: 1px;
    color: var(--white-color);
    margin-bottom: 1.5rem;
    .tick {
      position: absolute;
      left: 0;
      top: 0.15em;
      width: 3px;
      height: 0.9em;
      background-color: var(--primary-color-light);
      border-radius: 2px;
    }
  }

  .skill-groups {
    display: flex;
    flex-direction: column;
    gap: 1.6rem;
  }
  .skill-group {
    h5 {
      color: var(--primary-color-light);
      font-size: var(--font-size-small);
      text-transform: uppercase;
      letter-spacing: 1px;
      margin-bottom: 0.7rem;
    }
  }
  .pills {
    display: flex;
    flex-wrap: wrap;
    gap: 0.5rem;
  }
  .pill {
    background-color: var(--background-dark-grey);
    border: 1px solid var(--border-color);
    border-radius: 999px;
    padding: 0.3rem 0.85rem;
    font-size: var(--font-size-small);
    color: var(--font-light-color);
  }
`;

export default About;
