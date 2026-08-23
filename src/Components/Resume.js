import React from "react";
import styled from "styled-components";
import { InnerLayout } from "../styles/Layouts";
import Title from "../Components/Title";
import SmallTitle from "../Components/SmallTitle";
import BusinessCenterIcon from "@mui/icons-material/BusinessCenter";
import SchoolIcon from "@mui/icons-material/School";
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
            title={"SDE-II"}
            subTitle={"Darwinbox (SDE-I, Jun '24 – Mar '26)"}
            text={
              "I build the infrastructure that lets AI agents actually work inside enterprise software. At Darwinbox, an HRMS serving 4M+ enterprise users, I work on the agent platform — the layer between LLMs and real business systems."
            }
            bullets={[
              "Built an Agent Builder framework in Python that lets engineers define, version, and deploy agents through declarative config instead of custom code, backed by a SQL tool registry — consolidating 20+ isolated agent implementations into one platform used across product teams.",
              "Shipped Darwinbox's MCP server, integrated with HRMS microservices over REST APIs, exposing 100+ governed HR operations that external agent clients (Claude, Copilot, Teams, Slack) can invoke while inheriting existing RBAC, approval chains, and audit trails.",
              "Implemented native A2UI (Agent-to-UI) support so the assistant returns interactive Darwinbox UI components as declarative JSON instead of plain text, letting users complete full HR workflows inside third-party agent surfaces.",
              "Cut per-request token consumption via a multi-tier caching layer in the agent runtime spanning prompt, tool definition, and skill tiers, reducing inference cost and response latency at 4M+ user scale.",
              "Engineered the RAG retrieval layer grounding all agents — chunking, hybrid search, and reranking — plus an evaluation harness with golden-set regression suites wired into CI/CD to gate every agent deployment against silent quality drops.",
              "Owned the Angular frontend for Darwinbox Super Agent, an AI assistant serving 4M+ enterprise users, and shipped a shared Stencil Web Components design system adopted by other product teams across Angular and React codebases, eliminating duplicate component work.",
            ]}
          />
          <ResumeItem
            year={"Jan '24 - May '24"}
            title={"SDE Intern"}
            subTitle={"Darwinbox"}
            text={
              "Replaced a paid third-party user-interaction tracking tool with an in-house Angular solution, cutting infrastructure costs by 80% at full feature parity."
            }
          />
          <ResumeItem
            year={"Jan '22 - Aug '23"}
            title={"Frontend Developer Intern"}
            subTitle={"BigOHealth"}
            text={
              <>Rebuilt bigohealth.com from scratch with semantic HTML and a performance-first architecture, scaling to 500K+ monthly visitors; Lighthouse 85+ Performance, 97+ SEO. <a href="https://www.bigohealth.com/" target="_blank" rel="noreferrer">Visit Website</a></>
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
              "Bachelor of Technology in Computer Science."
            }
          />

          <ResumeItem
            year={"2018 - 2020"}
            title={"Class 12"}
            subTitle={"LBS Convent School"}
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
