import styled from "styled-components";
import { motion } from "framer-motion";

export const SkillSetBgContainer = styled(motion.ul)`
    list-style-type: none;
    /* outline: auto; */
    padding: 0;
    display: flex;
    flex-direction: column;
    gap: 3em;
    flex-grow: 1;
`;
