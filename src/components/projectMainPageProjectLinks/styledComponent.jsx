import styled from "styled-components";
import { motion } from "framer-motion";

export const ProjectLinksAndResourcesBgContainer = styled.div``;

export const ProjectLinksAndResourcesMainHeading = styled.h2``;

export const ProjectLinksItemBgContainer = styled.ul`
    margin-block: 1.2em;
    padding: 0;
    list-style-type: none;
    display: flex;
    gap: 1em;
    flex-flow: row wrap;
`;

export const ProjectLinkItemContainer = styled(motion.li)`
    background-color: ${({ theme }) =>
        theme.isLightTheme
            ? "rgb(139, 147, 255,0.8)"
            : "rgba(19, 78, 74, 0.4)"};
    color: ${({ theme }) =>
        theme.isLightTheme ? "white" : "rgba(45, 212, 191, 1)"};
    font-weight: 600;
    border-radius: 0.6rem;
    padding: 0.7em 1em;
    font-size: clamp(0.1rem, 1vw + 0.6rem, 1rem);
    display: flex;
    align-items: center;
    gap: 0.45em;
    transition: background-color 0.18s linear;
    cursor: pointer;
    &:hover {
        background-color: ${({ theme }) =>
            theme.isLightTheme
                ? "rgb(139, 147, 255,1)"
                : "rgba(19, 78, 74, 0.65)"};
    }

    &:hover > :first-child {
        transform: scale(1.13);
    }
`;

export const ProjectLinkItemIcon = styled.span`
    font-size: clamp(0.2rem, 1vw + 0.81rem, 1.3rem);
    margin-top: 0.2em;
    transition: transform 0.11s linear;
`;

export const ProjectLinkItemText = styled.span`
    text-transform: capitalize;
`;

export const DomainDetailsItemCount = styled.span`
    background-color: ${({ theme }) =>
        theme.isLightTheme ? "rgba(46, 175, 255, 1)" : "rgba(19, 78, 74, 0.5)"};
    padding: 0.2em 0.6em;
    border-radius: 20px;
`;
