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
              "I have implemented some of the issues to gain seo and performance like alt tags in images and next js itself is a seo gainer resulting in increased performance from 18 to 85. The website is live handling a traffic of around 10000/month."
            }
          />

          <ResumeItem
            year={"01-23 - Present"}
            title={"Full Stack Developer"}
            subTitle={"Fanstox"}
            text={
              "Developed an app that conducts contests related to stock markets and successfully integrated Razorpay payment gateway and managed in-app wallet. Also made the Built the entire backend and APIs for contests, login and OTP verification."
            }
          />


          <ResumeItem
            year={"11-21 - 01-22"}
            title={"React Js Developer"}
            subTitle={"Shell Code Solutions"}
            text={
              "Completed my internship at shell code solutions as a react js developer where i have completed 1 project which was given me by my mentor at the internship and working on  the other. Both the projects are based on react(frontend)."
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
              "Pursued my class 12 from lbs convent school, kota with percentage of 85%, participated in many inter school and intra school competitions as a tea lead and won some of them. Many tasks were given to me during the school and i have completed them in due time."
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
