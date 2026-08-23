import React from 'react'
import styled from 'styled-components';

function Footer() {
    return (
        <FooterStyled>
            <p>Copyright &copy; {new Date().getFullYear()} <b>Amritanshu Suyal</b></p>
        </FooterStyled>
    )
}

const FooterStyled = styled.footer`
    border-top: 1px solid var(--border-color);
    padding: 1.5rem 2rem;
    text-align: center;
    p {
        font-size: var(--font-size-small);
        color: var(--font-light-color);
    }
`;

export default Footer;
