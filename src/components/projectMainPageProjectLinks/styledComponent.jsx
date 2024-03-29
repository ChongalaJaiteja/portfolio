import styled from "styled-components";
import { motion } from "framer-motion";

export const ProjectLinksAndResourcesBgContainer = styled.div``;

export const ProjectLinksAndResourcesMainHeading = styled.h2``;

export const ProjectLinksItemBgContainer = styled.ul`
    margin-top: 1em;
    padding: 0;
    list-style-type: none;
    display: flex;
    gap: 1em;
    flex-flow: row wrap;
`;

export const ProjectLinkItemContainer = styled(motion.li)`
    background-color: ${({ theme }) =>
        theme.isLightTheme
            ? "rgba(46, 175, 255, 0.7)"
            : "rgba(19, 78, 74, 0.4)"};
    color: ${({ theme }) =>
        theme.isLightTheme ? "white" : "rgba(45, 212, 191, 1)"};
    font-weight: 700;
    border-radius: 0.5rem;
    padding: 0.7em 1em;
    font-size: clamp(0.1em, 1vw + 0.6em, 1em);
    display: flex;
    align-items: center;
    gap: 0.3em;
`;

export const ProjectLinkItem = styled.a`
    color: var(--theme-text-color);
    display: flex;
    align-items: center;
    gap: 0.4em;
`;

export const ProjectLinkItemIcon = styled.span`
    font-size: clamp(0.2rem, 1vw + 1rem, 1.2rem);
    margin-top: 0.2em;
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
