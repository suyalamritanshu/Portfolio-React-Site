import React from "react";
import styled from "styled-components";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import EmailIcon from "@mui/icons-material/Email";
import SEO from "../Components/SEO";

function Home() {
  return (
    <HomePageStyled>
      <SEO
        title="Amritanshu Suyal — Full Stack AI Developer"
        description="Full Stack AI Developer building agent infrastructure and RAG systems. SDE-II at Darwinbox, an HRMS serving 4M+ enterprise users."
        path="/"
      />
      <div className="hero-content">
        <p className="eyebrow">SDE-II, Darwinbox</p>
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
    </HomePageStyled>
  );
}

const HomePageStyled = styled.header`
  width: 100%;
  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 2rem;

  .hero-content {
    max-width: 720px;
    text-align: center;
  }

  .eyebrow {
    text-transform: uppercase;
    letter-spacing: 2px;
    color: var(--primary-color-light);
    font-size: var(--font-size-small);
    font-weight: 600;
    margin-bottom: 1rem;
  }

  h1 {
    margin-bottom: 0.5rem;
  }

  h2 {
    font-size: clamp(2rem, 5vw, 3.1rem);
    text-wrap: balance;
    color: var(--white-color);
    font-weight: 600;
    margin-bottom: 1.5rem;
  }

  .lede {
    font-size: var(--font-size-h6);
    line-height: 1.7;
    margin-bottom: 2.5rem;
  }

  .actions {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 1.5rem;
  }

  .resume-link {
    background-color: var(--primary-color);
    color: var(--white-color);
    padding: 0.8rem 2rem;
    text-transform: uppercase;
    font-weight: 600;
    letter-spacing: 1px;
    transition: all 0.4s ease-in-out;
    &:hover {
      box-shadow: 0 6px 16px rgba(0, 98, 204, 0.45);
      transform: translateY(-2px);
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
      transition: all 0.4s ease-in-out;
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

export default Home;
