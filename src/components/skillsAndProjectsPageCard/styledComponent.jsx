import styled from "styled-components";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

export const SkillsAndProjectsPageCard = styled(motion.li)`
    border: 3px solid
        ${({ theme }) => (theme.isLightTheme ? "#FBF9F1" : "white")};
    cursor: pointer;
    background-color: ${({ bgColor }) => bgColor};
    border-radius: 10px;
    box-shadow: var(--theme-box-shadow);
`;

export const StyledLink = styled(Link)`
    padding: 1em;
    color: white;
    display: flex;
    align-items: center;
    gap: 1em;
    text-decoration: none;
`;

export const SkillsAndProjectsPageCardMainHeading = styled.h2`
    font-size: clamp(0.4rem, 1vw + 0.89rem, 1.5rem);
`;
