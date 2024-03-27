import styled from "styled-components";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
export const ProjectItem = styled(motion.li)`
    --gap: 1em;
    cursor: pointer;
    position: relative;
    border-radius: 4rem;
    border: 3px solid transparent;
    overflow: hidden;
    flex: 1 1 calc(100% - var(--gap));
    height: clamp(15rem, 1vw + 1rem, 19rem);
    @media (min-width: 510px) {
        flex: 0 1 calc(50% - var(--gap));
    }

    @media (min-width: 1010px) {
        flex: 0 1 calc(33.3% - var(--gap));
    }

    &:hover {
        border-color: var(--theme-primary-color);
    }

    &:hover div {
        background-color: rgb(46, 175, 255, 0.4);
        color: white;
        border-color: transparent;
    }
`;
export const StyledLink = styled(Link)`
    color: var(--theme-page-text-color);
`;

export const ProjectItemImage = styled.img`
    width: min(100%, 30rem);
    object-fit: cover;
    opacity: ${({ theme }) => (theme.isLightTheme ? "none" : "0.56")};
`;

export const ProjectItemContentBgContainer = styled.div`
    --bg-color: ${({ theme }) =>
        theme.isLightTheme ? "rgb(245, 245, 245,0.4)" : "rgb(30, 30, 30, 0.4)"};
    position: absolute;
    left: 10%;
    bottom: 5%;
    z-index: 1;
    border-radius: 2rem;
    background-color: var(--bg-color);
    border: 1px solid var(--theme-border-color);
    padding-inline: 0.72em;
    transition: background-color 0.34s linear;
    width: 33%;
`;

export const ProjectItemName = styled.p`
    font-size: clamp(0.2rem, 1vw + 0.6rem, 1.12rem);
    text-transform: capitalize;
    text-overflow: ellipsis;
    white-space: nowrap;
    overflow: hidden;
    text-align: center;
`;

export const ProjectItemIconBgContainer = styled.div`
    font-size: clamp(0.2rem, 1vw + 1.8rem, 2.5rem);
    display: flex;
    flex-direction: column;
    justify-content: center;
    /* outline: auto; */
`;
