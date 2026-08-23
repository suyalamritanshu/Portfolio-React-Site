import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import EmailIcon from "@mui/icons-material/Email";
import SEO from "../Components/SEO";
import FeaturedProjectCard from "../Components/FeaturedProjectCard";
import { InnerLayout } from "../styles/Layouts";
import { featuredProjects } from "../Data/portfolios";
import skillGroups from "../Data/skills";
import breakpoints from "../styles/breakpoints";

const [aiSkills, ...otherSkillGroups] = skillGroups;

function Home() {
  return (
    <>
      <SEO
        title="Amritanshu Suyal — Full Stack AI Developer"
        description="Full Stack AI Developer building agent infrastructure and RAG systems. SDE-II at Darwinbox, an HRMS serving 4M+ enterprise users."
        path="/"
      />
      <HeroStyled>
        <div className="hero-content">
          <p className="eyebrow">SDE-II &middot; Darwinbox</p>
          <h1>Amritanshu Suyal</h1>
          <h2>Full Stack AI Developer — Agent Infrastructure &amp; RAG</h2>
          <p className="lede">
            I build the infrastructure that lets AI agents actually work inside
            enterprise software — currently at Darwinbox, an HRMS serving 4M+
            enterprise users.
          </p>
          <div className="actions">
            <a
              href="/Amritanshu_Suyal_Resume.pdf"
              download
              className="resume-link"
            >
              Download Resume
            </a>
            <div className="icons">
              <a
                href="https://github.com/suyalamritanshu"
                target="_blank"
                rel="noreferrer"
                className="icon i-github"
                aria-label="GitHub"
              >
                <GitHubIcon />
              </a>
              <a
                href="https://www.linkedin.com/in/amritanshu-suyal-04/"
                target="_blank"
                rel="noreferrer"
                className="icon i-linkedIn"
                aria-label="LinkedIn"
              >
                <LinkedInIcon />
              </a>
              <a
                href="mailto:amritanshu.suyall2@gmail.com"
                className="icon i-email"
                aria-label="Email"
              >
                <EmailIcon />
              </a>
            </div>
          </div>
        </div>
      </HeroStyled>

      <SectionStyled>
        <InnerLayout>
          <h3 className="section-heading">
            <span className="tick" aria-hidden="true"></span>
            Featured Work
          </h3>
          <div className="featured-grid">
            {featuredProjects.map((project) => (
              <FeaturedProjectCard
                key={project.id}
                image={project.image}
                title={project.title}
                text={project.text}
                link={project.link}
                stack={project.stack}
              />
            ))}
          </div>
        </InnerLayout>
      </SectionStyled>

      <SectionStyled>
        <InnerLayout>
          <h3 className="section-heading">
            <span className="tick" aria-hidden="true"></span>
            Skills
          </h3>
          <div className="ai-skills">
            <h4>{aiSkills.label}</h4>
            <div className="pills">
              {aiSkills.items.map((item) => (
                <span className="pill" key={item}>
                  {item}
                </span>
              ))}
            </div>
          </div>
          <p className="other-skills">
            Also: {otherSkillGroups.map((g) => g.label).join(", ")}.{" "}
            <Link to="/about" className="inline-link">
              See the full breakdown →
            </Link>
          </p>
        </InnerLayout>
      </SectionStyled>

      <SectionStyled className="context-line">
        <InnerLayout>
          <p>
            Currently SDE-II at Darwinbox.{" "}
            <Link to="/resume" className="inline-link">
              Read the full resume →
            </Link>
          </p>
        </InnerLayout>
      </SectionStyled>
    </>
  );
}

const HeroStyled = styled.header`
  width: 100%;
  min-height: calc(100vh - 4.5rem);
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 2rem;
  @media screen and (max-width: ${breakpoints.mobileHeading}) {
    padding: 1.25rem;
  }

  .hero-content {
    max-width: 720px;
    text-align: center;
  }

  .eyebrow {
    font-family: var(--font-mono);
    text-transform: uppercase;
    letter-spacing: 2px;
    color: var(--primary-color-light);
    font-size: var(--font-size-small);
    font-weight: 500;
    margin-bottom: 1rem;
    @media screen and (max-width: ${breakpoints.mobileHeading}) {
      margin-bottom: 0.6rem;
    }
  }

  h1 {
    margin-bottom: 0.5rem;
    @media screen and (max-width: ${breakpoints.px370}) {
      font-size: 2.2rem;
    }
  }

  h2 {
    font-size: clamp(2rem, 5vw, 3.1rem);
    text-wrap: balance;
    color: var(--white-color);
    font-weight: 500;
    margin-bottom: 1.5rem;
    @media screen and (max-width: ${breakpoints.mobileHeading}) {
      margin-bottom: 0.75rem;
    }
    @media screen and (max-width: ${breakpoints.px370}) {
      font-size: 1.5rem;
    }
  }

  .lede {
    font-size: var(--font-size-h6);
    line-height: 1.7;
    margin-bottom: 2.5rem;
    @media screen and (max-width: ${breakpoints.mobileHeading}) {
      font-size: var(--font-size-body);
      line-height: 1.5;
      margin-bottom: 1rem;
    }
  }

  .actions {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 1.5rem;
    @media screen and (max-width: ${breakpoints.mobileHeading}) {
      gap: 0.75rem;
    }
  }

  .resume-link {
    background-color: var(--primary-color);
    color: var(--white-color);
    padding: 0.8rem 2rem;
    text-transform: uppercase;
    font-weight: 600;
    letter-spacing: 1px;
    transition: box-shadow 0.4s ease-in-out, transform 0.4s ease-in-out;
    &:hover {
      box-shadow: 0 6px 16px rgba(143, 82, 18, 0.45);
      transform: translateY(-2px);
    }
    @media (prefers-reduced-motion: reduce) {
      transition: box-shadow 0.15s ease-in-out;
      &:hover {
        transform: none;
      }
    }
  }

  .icons {
    display: flex;
    justify-content: center;
    .icon {
      border: 2px solid var(--border-color);
      display: flex;
      align-items: center;
      justify-content: center;
      border-radius: 50%;
      width: 3rem;
      height: 3rem;
      color: var(--font-light-color);
      transition: border-color 0.4s ease-in-out, color 0.4s ease-in-out;
      &:hover {
        border-color: var(--primary-color-light);
        color: var(--primary-color-light);
      }
      &:not(:last-child) {
        margin-right: 1rem;
      }
    }
  }
`;

const SectionStyled = styled.section`
  border-top: 1px solid var(--border-color);
  padding: 0 5rem;
  @media screen and (max-width: ${breakpoints.px642}) {
    padding: 0 4rem;
  }
  @media screen and (max-width: ${breakpoints.px571}) {
    padding: 0 1.25rem;
  }

  .section-heading {
    position: relative;
    padding-left: 1.1rem;
    font-size: 1.4rem;
    text-transform: uppercase;
    letter-spacing: 1px;
    color: var(--white-color);
    margin-bottom: 2rem;
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

  .featured-grid {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    grid-gap: 2rem;
    @media screen and (max-width: ${breakpoints.px700}) {
      grid-template-columns: repeat(1, 1fr);
    }
  }

  .ai-skills {
    h4 {
      color: var(--primary-color-light);
      font-size: var(--font-size-h6);
      text-transform: uppercase;
      letter-spacing: 1px;
      margin-bottom: 0.9rem;
    }
    .pills {
      display: flex;
      flex-wrap: wrap;
      gap: 0.6rem;
      margin-bottom: 1.5rem;
    }
    .pill {
      background-color: var(--background-dark-grey);
      border: 1px solid var(--border-color);
      border-radius: 999px;
      padding: 0.4rem 1rem;
      font-size: var(--font-size-small);
      color: var(--font-light-color);
    }
  }

  .other-skills {
    color: var(--font-light-color);
    max-width: 65ch;
  }

  .inline-link {
    color: var(--primary-color-light);
    font-weight: 600;
    text-decoration: underline;
    transition: color 0.3s ease;
    &:hover {
      color: var(--white-color);
    }
  }

  &.context-line {
    p {
      font-size: var(--font-size-h6);
      color: var(--font-light-color);
    }
  }
`;

export default Home;
