import React from "react";
import styled from "styled-components";
import InstagramIcon from "@material-ui/icons/Instagram";
import GithubIcon from "@material-ui/icons/GitHub";
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import TypeWriter from "typewriter-effect";

function Home() {
  return (
    <HomePageStyled>
      <div className="typography">
        <h1>
          Hi, I'm{" "}
          <span>
            <TypeWriter
              onInit={(typeWriter) => {
                typeWriter
                  .typeString("Full Stack Developer💻")

                  .pauseFor(1000)
                  .deleteAll()
                  .typeString("Android Developer📱")
                  .pauseFor(1000)
                  .deleteAll()
                  .typeString("Mern Stack Developer💻")
                  .pauseFor(1000)
                  .deleteAll()
                  .typeString("Amritanshu Suyal📙")
                  .start();
              }}
            />
          </span>
        </h1>
        <p>
          I design and develop various apps and websites for target users, also
          know some stuff about backend and made pretty good web apps with
          frontend as well as backend.
        </p>
        <div className="icons">
          <a
            href="https://www.instagram.com/amritanshusuyal04/"
            target="_blank"
            className="icon i-instagram"
          >
            <InstagramIcon />
          </a>
          <a
            href="https://github.com/suyalamritanshu"
            target="_blank"
            className="icon i-github"
          >
            <GithubIcon />
          </a>
          <a
            href="https://www.linkedin.com/in/amritanshu-suyal-04/"
            target="_blank"
            className="icon i-linkedIn"
          >
            <LinkedInIcon />
          </a>
        </div>
      </div>
    </HomePageStyled>
  );
}

const HomePageStyled = styled.header`
  width: 100%;
  height: 100vh;
  position: relative;

  .typography {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    text-align: center;
    width: 80%;
    .icons {
      display: flex;
      justify-content: center;
      margin-top: 1rem;
      .icon {
        border: 2px solid var(--border-color);
        display: flex;
        align-items: center;
        justify-content: center;
        border-radius: 50%;
        transition: all 0.4s ease-in-out;
        cursor: pointer;
        &:hover {
          border: 2px solid lightpink;
          color: lightpink;
        }
        &:not(:last-child) {
          margin-right: 1rem;
        }
        svg {
          margin: 0.5rem;
        }
      }
      .i-linkedIn {
        &:hover {
          border: 2px solid lightblue;
          color: lightblue;
        }
      }
      .i-github {
        &:hover {
          border: 2px solid #5f4687;
          color: #5f4687;
        }
      }
    }
  }
`;

export default Home;
