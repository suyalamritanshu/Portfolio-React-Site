import styled from "styled-components";
import breakpoints from "./breakpoints";


export const MainLayout = styled.div`
    padding: 5rem;
    @media screen and (max-width: ${breakpoints.px642}){
        padding: 4rem;
    }
    /* @media screen and (max-width: 510px){
        padding: 3rem;
    } */
    @media screen and (max-width: ${breakpoints.px571}){
        padding: 2rem .4rem;
    }
`;
export const InnerLayout = styled.div`
    padding: 5rem 0;
`;