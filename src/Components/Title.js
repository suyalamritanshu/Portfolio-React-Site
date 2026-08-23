import React from 'react'
import styled from 'styled-components';
import breakpoints from '../styles/breakpoints';

function Title({title, span}) {
    return (
        <TitleStyled>
            <h2><span className="tick" aria-hidden="true"></span>{title} <b><span className="ghost">{span}</span></b></h2>
        </TitleStyled>
    )
}

const TitleStyled = styled.div`
    position: relative;
    h2{
        color: var(--white-color);
        font-size: 3.1rem;
        font-weight: 600;
        text-transform: uppercase;
        position: relative;
        padding-bottom: .7rem;
        padding-left: 1.4rem;
        @media screen and (max-width: ${breakpoints.px496}){
            font-size: 2.8rem;
        }
        @media screen and (max-width: ${breakpoints.px370}){
            font-size: 2rem;
        }
        .tick{
            position: absolute;
            left: 0;
            top: 0.2em;
            width: 4px;
            height: 0.75em;
            background-color: var(--primary-color-light);
            border-radius: 2px;
        }
        &::before{
            content: "";
            position: absolute;
            bottom: 0;
            width: 7.4rem;
            height: .33rem;
            background-color: var(--background-light-color-2);
            border-radius: 15px;
            left: 1.4rem;
        }
        &::after{
            content: "";
            position: absolute;
            bottom: 0;
            width: 3.5rem;
            height: .33rem;
            background-color: var(--border-color);
            border-radius: 15px;
            left: 1.4rem;
        }
        .ghost{
            font-weight: 900;
            color: rgba(232,233,237,.06);
            font-size: 5rem;
            position: absolute;
            left: 1.4rem;
            top: 30%;
            z-index: -1;
            @media screen and (max-width: ${breakpoints.px620}){
                font-size: 4rem;
            }
            @media screen and (max-width: ${breakpoints.px496}){
                font-size: 3rem;
            }
            @media screen and (max-width: ${breakpoints.px370}){
                font-size: 2rem;
            }
        }
    }
`;

export default Title;
