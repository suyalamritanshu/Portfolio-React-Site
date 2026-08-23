import React from 'react'
import styled from 'styled-components';
import resume from '../img/avatar.jpeg';
import PrimaryButton from './PrimaryButton';
import breakpoints from '../styles/breakpoints';

function ImageSection() {
    return (
        <ImageSectionStyled>
            <div className="left-content">
                <img src={resume} alt="Amritanshu Suyal" width="1600" height="1600" />
            </div>
            <div className="right-content">
                <h4>I am <span>Amritanshu</span></h4>
                <p className="paragraph">
                    I build the infrastructure that lets AI agents actually work inside enterprise software. At Darwinbox, an HRMS serving 4M+ enterprise users, I work on the agent platform — the layer between LLMs and real business systems.
                    <br /><br />
                    Most of the hard problems here aren't prompting. They're cost, correctness, and trust.
                </p>
                <div className="about-info">
                    <div className="info-title">
                        <p>Role</p>
                        <p>Location</p>
                    </div>
                    <div className="info">
                        <p>: SDE-II, Darwinbox</p>
                        <p>: Hyderabad, India</p>
                    </div>
                </div>
                <a href="/Amritanshu_Suyal_Resume.pdf" download>  <PrimaryButton title={'View Resume'} /> </a>

            </div>
        </ImageSectionStyled>
    )
}


const ImageSectionStyled = styled.div`
    margin-top: 5rem;
    display: flex;
    
    @media screen and (max-width: ${breakpoints.px1000}){
        flex-direction: column;
        .left-content{
            margin-bottom: 2rem;
        }
        .img{
        border-radius: 50%;
    }
    }
    .left-content{
        width: 100%;
        
        img{
            width: 95%;
            height: auto;
            object-fit: cover;
        }
    }
    .right-content{
        width: 100%;
        h4{
            font-size: var(--font-size-h3);
            color: var(--white-color);
            span{
                font-size: var(--font-size-h3);
            }
        }
        .paragraph{
            padding: 1rem 0;
        }
        .about-info{
            display: flex;
            padding-bottom: 1.4rem;
            .info-title{
                padding-right: 3rem;
                p{
                    font-weight: 600;
                }
            }
            .info-title, .info{
                p{
                    padding: .3rem 0;
                }
            }
        }
    }
`;
export default ImageSection;