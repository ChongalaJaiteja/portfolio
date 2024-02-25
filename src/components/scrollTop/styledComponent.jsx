import { FaArrowCircleUp } from "react-icons/fa";
import styled from "styled-components";
import { motion } from "framer-motion";

export const MoveToTopIconBgContainer = styled(motion.div)`
    position: fixed;
    cursor: pointer;
    bottom: 5%;
    color: ${({ theme }) => theme.primaryAccentColor};
    z-index: 1;
    right: 25px;
`;

export const MoveTopIcon = styled(FaArrowCircleUp)`
    font-size: clamp(0.5rem, 1vw + 1.5rem, 2rem);
`;
