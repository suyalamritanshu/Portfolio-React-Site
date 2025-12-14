import React from 'react'
import styled from 'styled-components';

function ResumeItem({ year, title, subTitle, text }) {
    return (
        <ResumeItemStyled>
            <div className="left-content">
                <p>{year}</p>
            </div>
            <div className="right-content">
                <h5>{title}</h5>
                <h6>{subTitle}</h6>
                <p>{text}</p>
            </div>
        </ResumeItemStyled>
    )
}

const ResumeItemStyled = styled.div`
    display: flex;
    @media screen and (max-width: 421px){
        p, h5, h6{
            font-size: 80%;
        }
    }
    &:not(:last-child){
        padding-bottom: 3rem;
    }
    .left-content{
        min-width: 200px;
        flex-shrink: 0;
        padding-left: 20px;
        position: relative;
        &::before{
            content: "";
            position: absolute;
            left: -10px;
            top: 5px;
            height: 15px;
            width: 15px;
            border-radius: 50%;
            border: 2px solid var(--border-color);
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
        &::before{
            content: "";
            position: absolute;
            left: 0;
            top: 15px;
            height: 2px;
            width: 3rem;
            background-color: var(--border-color);
        }
        h5{
            color: var(--primary-color);
            font-size: var(--font-size-h5);
            margin-top: -0.7rem;
            padding-bottom: .4rem;
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
                color: var(--primary-color);
                text-decoration: underline;
                font-weight: 500;
                transition: all 0.3s ease;
                &:hover{
                    color: var(--primary-color-light);
                }
            }
        }
    }
`;
export default ResumeItem;