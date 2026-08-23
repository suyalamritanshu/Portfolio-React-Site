import React from 'react'
import styled from 'styled-components';
import breakpoints from '../styles/breakpoints';

function ResumeItem({ year, title, subTitle, text, bullets }) {
    return (
        <ResumeItemStyled>
            <div className="left-content">
                <p>{year}</p>
            </div>
            <div className="right-content">
                <h5>{title}</h5>
                <h6>{subTitle}</h6>
                {text && <p>{text}</p>}
                {bullets && (
                    <ul>
                        {bullets.map((bullet, i) => (
                            <li key={i}>{bullet}</li>
                        ))}
                    </ul>
                )}
            </div>
        </ResumeItemStyled>
    )
}

const ResumeItemStyled = styled.div`
    display: flex;
    @media screen and (max-width: ${breakpoints.px670}){
        flex-direction: column;
    }
    &:not(:last-child){
        padding-bottom: 3rem;
    }
    .left-content{
        min-width: 200px;
        flex-shrink: 0;
        padding-left: 20px;
        position: relative;
        @media screen and (max-width: ${breakpoints.px670}){
            min-width: 0;
            margin-bottom: 0.75rem;
        }
        &::before{
            content: "";
            position: absolute;
            left: -10px;
            top: 5px;
            height: 15px;
            width: 15px;
            border-radius: 50%;
            border: 3px solid var(--primary-color-light);
            background-color: var(--background-dark-color);
        }
        p{
            display: inline-block;
            white-space: nowrap;
        }
    }
    .right-content{
        padding-left: 5rem;
        position: relative;
        @media screen and (max-width: ${breakpoints.px670}){
            padding-left: 20px;
        }
        &::before{
            content: "";
            position: absolute;
            left: 0;
            top: 15px;
            height: 2px;
            width: 3rem;
            background-color: var(--border-color);
            @media screen and (max-width: ${breakpoints.px670}){
                display: none;
            }
        }
        h5{
            color: var(--primary-color-light);
            font-size: var(--font-size-h5);
            margin-top: -0.7rem;
            padding-bottom: .4rem;
            @media screen and (max-width: ${breakpoints.px670}){
                margin-top: 0;
            }
        }
        h6{
            padding-bottom: .6rem;
            font-size: var(--font-size-h6);
        }
        p{
            font-size: var(--font-size-body);
            line-height: 1.6;
            opacity: 0.85;
            margin-top: 0.5rem;
            a{
                color: var(--primary-color-light);
                text-decoration: underline;
                font-weight: 500;
                transition: color 0.3s ease;
                &:hover{
                    color: var(--white-color);
                }
            }
        }
        ul{
            margin-top: 0.5rem;
            li{
                position: relative;
                font-size: var(--font-size-body);
                line-height: 1.6;
                opacity: 0.85;
                padding-left: 1.1rem;
                &:not(:last-child){
                    margin-bottom: 0.6rem;
                }
                &::before{
                    content: "";
                    position: absolute;
                    left: 0;
                    top: 0.6rem;
                    width: 5px;
                    height: 5px;
                    border-radius: 50%;
                    background-color: var(--primary-color);
                }
            }
        }
    }
`;
export default ResumeItem;