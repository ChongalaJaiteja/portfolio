import styled from "styled-components";

export const ProjectContentBgContainer = styled.div`
    display: flex;
    flex-direction: column;
    gap: 1em;
    @media (min-width: 700px) {
        flex: 1 1 calc(55% - var(--gap));
    }
`;

export const ProjectMainHeading = styled.h1`
    font-size: clamp(0.3rem, 1vw + 0.94rem, 1.55rem);
    text-transform: capitalize;
`;

export const ProjectImageContainer = styled.div`
    width: 100%;
    @media (min-width: 700px) {
        display: none;
    }
`;

export const ProjectDescription = styled.p``;
