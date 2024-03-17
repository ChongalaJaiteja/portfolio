import styled from "styled-components";
import { motion } from "framer-motion";

export const SkillsAndProjectsTabItemBgContainer = styled.li`
    background-color: ${({ theme, isActive }) =>
        isActive
            ? theme.isLightTheme
                ? "rgb(46, 175, 255, 0.8)"
                : "rgb(30 41 59 / 1)"
            : "var(--theme-container-bg-color)"};
    text-align: center;
    width: clamp(8rem, 1vw + 30%, 10rem);
    flex: 1 0 auto;
    display: flex;
    justify-content: center;
    align-items: center;
    max-height: 10rem;
    position: relative;
    &:hover {
        background-color: ${({ theme, isActive }) =>
            !isActive &&
            (theme.isLightTheme
                ? "rgb(46, 175, 255, 0.5)"
                : "rgb(30 41 59 / 0.6)")};
    }
    @media (min-width: 800px) {
        width: 100%;
        max-width: none;
        /* min-height: 3rem; */
        max-height: 8.4rem;
    }
`;
export const tabBtn = styled.button`
    cursor: pointer;
    padding: clamp(0.1em, 1vw + 0.9em, 1.2em) clamp(0.1em, 1vw + 1em, 1.4em);
    border: none;
    width: 100%;
    height: 100%;
    background-color: transparent;
    color: ${({ isActive, theme }) =>
        theme.isLightTheme && isActive
            ? "white"
            : "var(--theme-primary-text-color)"};

    font-size: clamp(0.2rem, 1vw + 0.57rem, 1.17rem);
`;

export const TabUnderline = styled(motion.div)`
    position: absolute;
    bottom: -1px;
    left: 0;
    right: 0;
    height: 3px;
    background: var(--theme-primary-color);
    box-shadow: 0px 3px 10px 2px var(--theme-primary-color);
    @media (min-width: 800px) {
        /* left: 20%; */
        /* right: 0; */
        height: 100%;
        left: auto;
        width: 3px;
    }
`;
