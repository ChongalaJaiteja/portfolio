import styled from "styled-components";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

export const DomainItemBgContainer = styled(motion.li)`
    background-color: var(--theme-container-bg-color);
    border: 2px solid var(--theme-divide-line-color);
    border-radius: 20px;
    overflow: hidden;
    cursor: pointer;
    max-width: 20.5rem;
    box-shadow: none;
    transition: box-shadow 0.26s linear;
    &:hover {
        box-shadow: 5px 5px 5px 5px #1e1e1e;
    }
`;

export const StyledLink = styled(Link)`
    color: var(--theme-primary-text-color);
`;

export const DomainItemImageBgContainer = styled.div`
    overflow: hidden;
`;

export const DomainItemImage = styled.img`
    width: 100%;
    /* transition: transform 0.7s ease-out;
    &:hover {
        transform: scale(1.1);
    } */
`;

export const DomainItemContentBgContainer = styled.div`
    padding-top: 0.5em;
    padding-bottom: 1.3em;
    padding-inline: 1em;
`;

export const DomainHeading = styled.h3`
    font-size: clamp(0.2rem, 1vw + 0.9rem, 1.2rem);
`;

export const DomainDescription = styled.p`
    color: var(--theme-second-text-color);
    word-wrap: break-word;
    outline: auto;
    /* font-size: ; */
`;

export const DomainDetailsBgContainer = styled.ul`
    margin-top: 1.2em;
    padding: 0;
    list-style-type: none;
    display: flex;
    align-items: center;
    gap: 1em;
    flex-flow: row wrap;
`;

export const DomainDetailsItem = styled(motion.li)`
    background-color: ${({ theme }) =>
        theme.isLightTheme
            ? "rgba(46, 175, 255, 0.7)"
            : "rgba(19, 78, 74, 0.4)"};
    color: ${({ theme }) =>
        theme.isLightTheme ? "white" : "rgba(45, 212, 191, 1)"};
    font-weight: 700;
    border-radius: 1.5rem;
    padding: 0.5em 1em;
    font-size: clamp(0.1em, 1vw + 0.6em, 1em);
    display: flex;
    align-items: center;
    gap: 0.3em;
`;

export const DomainDetailsItemCount = styled.span`
    background-color: ${({ theme }) =>
        theme.isLightTheme ? "rgba(46, 175, 255, 1)" : "rgba(19, 78, 74, 0.5)"};
    padding: 0.2em 0.6em;
    border-radius: 20px;
`;
