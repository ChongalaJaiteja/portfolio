import styled from "styled-components";

export const QualificationBgContainer = styled.div`
    background-color: ${({ theme }) => theme.backgroundColor};
    color: ${({ theme }) => theme.color};
    padding-top: clamp(1.4em, 1vw + 2.5em, 6em);
    min-height: 100vh;
`;

export const QualificationMainHeading = styled.h1`
    text-align: center;
`;
