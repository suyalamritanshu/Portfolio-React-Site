import React from "react";
import styled from "styled-components";
import { InnerLayout } from "../styles/Layouts";
import Title from "../Components/Title";
import SmallTitle from "../Components/SmallTitle";
import BusinessCenterIcon from "@material-ui/icons/BusinessCenter";
import SchoolIcon from "@material-ui/icons/School";
import ResumeItem from "../Components/ResumeItem";
function Resume() {
  const briefcase = <BusinessCenterIcon />;
  const school = <SchoolIcon />;
  return (
    <ResumeStyled>
      <Title title={"Resume"} span={"resume"} />
      <InnerLayout>
        <div className="small-title">
          <SmallTitle icon={briefcase} title={"Working Experience"} />
        </div>
        <div className="resume-content">
          <ResumeItem
            year={"Jun '24 - Present"}
            title={"Software Engineer"}
            subTitle={"Darwinbox"}
            text={
              "Optimized Angular component architecture, change detection, and lazy loading, improving UI performance by 29% and reducing production bugs by 42%. Built and scaled Angular-based user interfaces for Darwinbox Super Agent, supporting 30 lakh+ users with optimized rendering and state management, resulting in a 31% increase in user engagement. Redesigned frontend UI architecture using modular, reusable components and design patterns, driving a 40% adoption increase and $100K first-month revenue. Built shared Web Components using Stencil to unify the design system across the platform, reducing UI inconsistencies and cutting duplicate implementation effort by 40%."
            }
          />
          <ResumeItem
            year={"Jan '24 - May '24"}
            title={"SDE Intern"}
            subTitle={"Darwinbox"}
            text={
              "Worked across modern frontend stacks including Angular, React, and Next.js, focusing on UI development, reusable components, and frontend best practices. Developed a training project with emphasis on frontend UI, responsive design, API integration, and performance optimization. Built an in-house user interaction tracking solution, reducing costs by 80% by removing dependency on third-party tools."
            }
          />
          <ResumeItem
            year={"Jan '22 - Jul '23"}
            title={"Next Js Developer"}
            subTitle={"BigOHealth"}
            text={
              <>Implemented SEO best practices including semantic HTML, metadata optimization, and performance tuning. Improved Google Lighthouse scores with 85+ Performance and 97+ SEO ratings. Production website handles approximately 100,000 monthly visitors. <a href="https://www.bigohealth.com/" target="_blank" rel="noreferrer">Visit Website</a></>
            }
          />

        </div>
        <div className="small-title u-small-title-margin">
          <SmallTitle icon={school} title={"Educational Qualifications"} />
        </div>
        <div className="resume-content ">
          <ResumeItem
            year={"2020 - 2024"}
            title={"B-Tech CSE"}
            subTitle={"Jaypee University of Information Technology"}
            text={
              "Currently pursuing my btech in cse, won 2 hackathons which was based on innovating something new where i was the team lead. Worked on 3 live projects one was based on android and the other two are websites which was on bootstrap and react js respectively."
            }
          />

          <ResumeItem
            year={"2018 - 2020"}
            title={"Class 12"}
            subTitle={"LBS Convent School"}
            text={
              "Pursued my class 12 from lbs convent school, kota, participated in many inter school and intra school competitions as a team lead and won some of them. Many tasks were given to me during the school and i have completed them in due time."
            }
          />

        </div>
      </InnerLayout>
    </ResumeStyled>
  );
}
const ResumeStyled = styled.section`
  .small-title {
    padding-bottom: 3rem;
  }
  .u-small-title-margin {
    margin-top: 4rem;
  }
  .resume-content {
    border-left: 2px solid var(--border-color);
  }
`;
export default Resume;
