import styled from "styled-components";
import { motion } from "framer-motion";

export const ExperienceCardSkillItem = styled(motion.li)`
    font-size: clamp(0.1rem, 1vw + 0.38rem, 0.8rem);
    background-color: var(--theme-container-bg-color);
    border: 1px solid var(--theme-divide-line-color);
    border-radius: 20px;
    padding: 0.3em 0.5em;
    &:hover {
        background-color: ${({ theme }) => theme.primaryAccentColor};
    }
`;
