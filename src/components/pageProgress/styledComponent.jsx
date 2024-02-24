import styled from "styled-components";
import { motion } from "framer-motion";

export const PageProgressLoader = styled(motion.div)`
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    height: clamp(0.3rem, 1vw + 0.13rem, 0.53rem);
    background: ${({ theme }) => theme.primaryAccentColor};
    transform-origin: 0%;
    z-index: 12;
`;
