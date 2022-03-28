import React from 'react'
import styled from 'styled-components';
import resume from '../img/avatar.jpeg';
import PrimaryButton from './PrimaryButton';

function ImageSection() {
    return (
        <ImageSectionStyled>
            <div className="left-content">
                <img src={resume} alt=""/>
            </div>
            <div className="right-content">
                <h4>I am <span>Amritanshu</span></h4>
                <p className="paragraph">
                I am currently a 2nd year student pursuing my B.Tech from Jaypee University of Technology, Solan. 
                
                I like reading tech articles particularly related to new technology coming to the market and playing badminton.

                Coming to my tech world, i have explored a lot on web (frontend + backend) and android development and made some cool projects..


                    
                </p>
                <div className="about-info">
                    <div className="info-title">
                        <p>Full Name</p>
                        <p>Age</p>
                        <p>Languages </p>
                        <p>Location</p>
                    </div>
                    <div className="info">
                        <p>: Amritanshu Suyal</p>
                        <p>: 19</p>
                        <p>: English, Hindi </p>
                        <p>: Lucknow, Uttar Pradesh</p>
                    </div>
                </div>
                <a href="https://drive.google.com/file/d/1mfwH_s2Je7_jMj-4l5JS2AplhkTaTla-/view?usp=sharing" target="_blank">  <PrimaryButton title={'View Resume'} /> </a>
               
            </div>
        </ImageSectionStyled>
    )
}


const ImageSectionStyled = styled.div`
    margin-top: 5rem;
    display: flex;
    
    @media screen and (max-width:1000px){
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
            object-fit: cover;
        }
    }
    .right-content{
        width: 100%;
        h4{
            font-size: 2rem;
            color: var(--white-color);
            span{
                font-size: 2rem;
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