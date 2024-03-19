import styled from "styled-components";
import { motion } from "framer-motion";

export const SkillsAndProjectsItemBgContainer = styled(motion.li)``;

export const SkillsAndProjectsCategoryBgContainer = styled.div`
    /* outline: auto; */
    display: flex;
    flex-direction: column;
    gap: 1em;
`;

export const SkillsAndProjectsCategoryMainHeading = styled.h4`
    font-size: clamp(0.1rem, 1vw + 0.73rem, 1.16rem);
    color: var(--theme-second-text-color);
`;

export const SkillsAndProjectsCategoryItemsBgContainer = styled.ul`
    list-style-type: none;
    padding: 0;
    /* outline: auto; */
    display: flex;
    flex-flow: row wrap;
    gap: 1.5em 1em;
`;
