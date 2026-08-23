import React from 'react';
import Skills from '../Components/Skills';
import { MainLayout} from '../styles/Layouts';
import Resume from '../Components/Resume';
import SEO from '../Components/SEO';

function ResumePage() {
    return (
        <MainLayout>
            <SEO
                title="Resume | Amritanshu Suyal"
                description="Work experience and education for Amritanshu Suyal, SDE-II at Darwinbox — Agent Builder framework, MCP server, RAG retrieval, and more."
                path="/resume"
            />
             <Skills />
            <Resume />
        </MainLayout>
    )
}

export default ResumePage