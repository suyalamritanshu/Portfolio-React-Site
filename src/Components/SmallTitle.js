import React from 'react'
import styled from 'styled-components'

function SmallTitle({icon, title}) {
    return (
        <SmallTitleStyled >
            <span className="tick" aria-hidden="true"></span>
            <p>{icon}</p>
            <h3>{title}</h3>
        </SmallTitleStyled >
    )
}

const SmallTitleStyled = styled.div`
    display: flex;
    align-items: center;
    position: relative;
    padding-left: 1.1rem;
    .tick{
        position: absolute;
        left: 0;
        top: 50%;
        transform: translateY(-50%);
        width: 3px;
        height: 1.6rem;
        background-color: var(--primary-color-light);
        border-radius: 2px;
    }
    p{
        padding-right: 1rem;
        svg{
            font-size: 3rem;
        }
    }
    h3{
        color: var(--white-color);
        font-size: 2rem;
    }
`;

export default SmallTitle
