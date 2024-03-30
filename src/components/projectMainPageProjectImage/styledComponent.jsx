import styled from "styled-components";

export const ProjectImageBgContainer = styled.div`
    border: 2px solid var(--theme-divide-line-color);
    border-radius: 1.3rem;
    overflow: hidden;
    height: 33vh;
    background-color: ${({ theme }) =>
        theme.isLightTheme ? "rgb(245, 245, 245,0.5)" : "rgb(30, 30, 30,0.5)"};

    @media (min-width: 500px) {
        height: 40vh;
    }

    @media (min-width: 1000px) {
        height: 50vh;
    }
`;

export const ProjectImage = styled.img`
    display: block;
    object-fit: contain;
    width: min(100%, 50rem);
    transition: transform 0.13s linear;
    &:hover {
        transform: scale(1.1);
    }
`;
