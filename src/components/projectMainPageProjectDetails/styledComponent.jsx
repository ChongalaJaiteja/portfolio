import styled from "styled-components";

export const ProjectContentBgContainer = styled.div`
    display: flex;
    flex-direction: column;
    gap: 1em;
    @media (min-width: 650px) {
        flex: 1 1 calc(70% - var(--gap));
    }
`;

export const ProjectMainHeading = styled.h1`
    margin-bottom: 1em;
    font-size: clamp(0.3rem, 1vw + 0.94rem, 1.55rem);
`;

export const ProjectImageBgContainer = styled.div`
    border: 2px solid var(--theme-divide-line-color);
    border-radius: 1.3rem;
    overflow: hidden;
`;

export const ProjectImage = styled.img`
    display: block;
    width: 100%;
    transition: transform 0.13s linear;
    &:hover {
        transform: scale(1.1);
    }
`;

export const ProjectDescription = styled.p``;
