import React from "react";
import styled from "styled-components";
import { InnerLayout } from "../styles/Layouts";
import Title from "../Components/Title";
import ProgressBar from "./ProgressBar";

function Skills() {
  return (
    <SkillsStyled>
      <Title title={"My Skills"} span={"my skills"} />
      <InnerLayout>
        <div className="skills">
          <ProgressBar title={"Next Js"} width={"85%"} text={"85%"} />
          <ProgressBar title={"Angular"} width={"95%"} text={"95%"} />
          <ProgressBar title={"Node Js"} width={"90%"} text={"90%"} />
          <ProgressBar title={"Javascript"} width={"85%"} text={"85%"} />
          <ProgressBar title={"Java"} width={"90%"} text={"90%"} />
          {/* <ProgressBar title={"Python"} width={"75%"} text={"75%"} /> */}
          <ProgressBar title={"Bootstrap"} width={"85%"} text={"85%"} />
          <ProgressBar title={"Tailwind"} width={"85%"} text={"85%"} />
          {/* <ProgressBar title={"C++"} width={"85%"} text={"85%"} /> */}
          <ProgressBar title={"Mongo Db"} width={"85%"} text={"85%"} />
          <ProgressBar title={"Firebase"} width={"95%"} text={"95%"} />
          <ProgressBar title={"Kotlin"} width={"55%"} text={"55%"} />
        </div>
      </InnerLayout>
    </SkillsStyled>
  );
}

const SkillsStyled = styled.section`
  .skills {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    grid-row-gap: 2rem;
    grid-column-gap: 3rem;
    @media screen and (max-width: 700px) {
      grid-template-columns: repeat(1, 1fr);
    }
  }
`;

export default Skills;
