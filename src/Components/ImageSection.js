import React from 'react'
import styled from 'styled-components';
import resume from '../img/avatar.jpeg';
import PrimaryButton from './PrimaryButton';

function ImageSection() {
    return (
        <ImageSectionStyled>
            <div className="left-content">
                <img src={resume} alt="" />
            </div>
            <div className="right-content">
                <h4>I am <span>Amritanshu</span></h4>
                <p className="paragraph">
                    Frontend Engineer specializing in Angular, React, and Next.js. Currently at Darwinbox, building enterprise products for 30+ lakh users with a focus on performance, scalability, and design systems.
                    <br /><br />
                    Passionate about creating high-quality user experiences and solving complex UI challenges.
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
                        <p>: 23</p>
                        <p>: English, Hindi </p>
                        <p>: Hyderabad, Telangana   </p>
                    </div>
                </div>
                <a href="https://drive.google.com/file/d/1CA1LWdEvKtaFscXnZELJhBtAHpHuNxD_/view?usp=drive_link" target="_blank">  <PrimaryButton title={'View Resume'} /> </a>

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