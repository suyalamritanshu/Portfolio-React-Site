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
            year={"01-22 - Present"}
            title={"Next Js Developer"}
            subTitle={"BigOHealth"}
            text={
              "In this internship i have changed the whole site from react js to next js, i have implemented some of the issues to gain seo and performance like alt tags in images and next js itself is a seo gainer resulting in increased performance from 18 to 85."
            }
          />
          <ResumeItem
            year={"12-21 - 01-22"}
            title={"React Js Developer"}
            subTitle={"Shell Code Solutions"}
            text={
              "Completed my internship at shell code solutions as a react js developer where i have completed 1 project which was given me by my mentor at the internship and working on  the other. Both the projects are based on react(frontend)."
            }
          />
          <ResumeItem
            year={"11-21 - 12-21"}
            title={"Android Developer"}
            subTitle={"TwoWaits"}
            text={
              "Completed my internship at twowaits as an android developer where i have learned kotlin with 2 projects, qr code scanner and jokes app both are in my projects section. All tasks given are completed in due time during the internship."
            }
          />
        </div>
        <div className="small-title u-small-title-margin">
          <SmallTitle icon={school} title={"Educational Qualifications"} />
        </div>
        <div className="resume-content ">
          <ResumeItem
            year={"2020 - Present"}
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
              "Pursued my class 12 from lbs convent school, kota with percentage of 85%, participated in many inter school and intra school competitions as a team lead and won some of them. Many tasks were given to me during the school and i have completed them in due time."
            }
          />
          <ResumeItem
            year={"2017 - 2018"}
            title={"Class 10"}
            subTitle={"St John's Sr. Sec. School"}
            text={
              "Pursued my class 10 from St John's Sr. Sec. School, lakhimpur with percentage of 85%, participated in many olympiads and won some of them with a good rank. All the tasks that are assigned to me are done with full responsiblity and punctuality in the due time."
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
