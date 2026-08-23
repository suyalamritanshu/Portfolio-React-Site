import React from 'react'
import styled from 'styled-components';
import resume from '../img/avatar.jpeg';
import PrimaryButton from './PrimaryButton';

function ImageSection() {
    return (
        <ImageSectionStyled>
            <img src={resume} alt="Amritanshu Suyal" width="1600" height="1600" />
            <h4>I am <span>Amritanshu</span></h4>
            <p className="paragraph">
                I build the infrastructure that lets AI agents actually work inside enterprise software. At Darwinbox, an HRMS serving 4M+ enterprise users, I work on the agent platform — the layer between LLMs and real business systems.
                <br /><br />
                Most of the hard problems here aren't prompting. They're cost, correctness, and trust.
            </p>
            <a href="/Amritanshu_Suyal_Resume.pdf" download><PrimaryButton title={'View Resume'} /></a>
        </ImageSectionStyled>
    )
}

const ImageSectionStyled = styled.div`
    img{
        width: 60%;
        max-width: 260px;
        height: auto;
        border-radius: 50%;
        object-fit: cover;
        margin-bottom: 1.5rem;
    }
    h4{
        font-size: var(--font-size-h3);
        color: var(--white-color);
        span{
            font-size: var(--font-size-h3);
        }
    }
    .paragraph{
        padding: 1rem 0 1.5rem;
    }
`;
export default ImageSection;
