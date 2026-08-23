import React from "react";
import styled from "styled-components";
import { InnerLayout } from "../styles/Layouts";
import Title from "../Components/Title";
import skillGroups from "../Data/skills";

function Skills() {
  return (
    <SkillsStyled>
      <Title title={"My Skills"} span={"my skills"} />
      <InnerLayout>
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
      </InnerLayout>
    </SkillsStyled>
  );
}

const SkillsStyled = styled.section`
  .skill-groups {
    display: flex;
    flex-direction: column;
    gap: 2.2rem;
  }
  .skill-group {
    h5 {
      color: var(--primary-color-light);
      font-size: var(--font-size-h6);
      text-transform: uppercase;
      letter-spacing: 1px;
      margin-bottom: 0.9rem;
    }
  }
  .pills {
    display: flex;
    flex-wrap: wrap;
    gap: 0.6rem;
  }
  .pill {
    background-color: var(--background-dark-grey);
    border: 1px solid var(--border-color);
    border-radius: 999px;
    padding: 0.4rem 1rem;
    font-size: var(--font-size-small);
    color: var(--font-light-color);
  }
`;

export default Skills;
