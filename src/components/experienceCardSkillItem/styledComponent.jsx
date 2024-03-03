import styled from "styled-components";
import { motion } from "framer-motion";

export const ExperienceCardSkillItem = styled(motion.li)`
    font-size: clamp(0.1rem, 1vw + 0.38rem, 0.8rem);
    background-color: ${({ theme }) => theme.containerBackground};
    border: 1px solid ${({ theme }) => theme.divideLineColor};
    border-radius: 20px;
    padding: 0.3em 0.5em;
    &:hover {
        background-color: ${({ theme }) => theme.primaryAccentColor};
    }
`;
