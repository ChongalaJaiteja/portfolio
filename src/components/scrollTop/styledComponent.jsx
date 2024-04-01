import { FaArrowCircleUp } from "react-icons/fa";
import styled from "styled-components";
import { motion } from "framer-motion";
import {
    RotateThemeIcon,
    DarkModeIcon,
    LightModeIcon,
} from "../navbar/styledComponent";

export const FloatingBgContainer = styled.div`
    position: fixed;
    bottom: 5%;
    right: 25px;
    z-index: 1;
    /* outline: auto; */
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 1.2em;
`;

export const MoveToTopIconBgContainer = styled(motion.div)`
    cursor: pointer;
    color: ${({ theme }) => theme.primaryAccentColor};
`;

export const MoveTopIcon = styled(FaArrowCircleUp)`
    font-size: clamp(0.5rem, 1vw + 1.5rem, 2rem);
`;

export const ChangeThemeBgContainer = styled(motion.div)`
    --fs-theme-mode-logo: clamp(1rem, 1vw + 1.3rem, 1.8rem);
    display: none;
    @media (min-width: 1060px) {
        display: block;
    }
`;

export const FloatingDarkModeIcon = styled(DarkModeIcon)`
    font-size: var(--fs-theme-mode-logo);
    cursor: pointer;
    color: #272826;
    animation: ${RotateThemeIcon} 0.3s linear forwards;
`;

export const FloatingLightModeIcon = styled(LightModeIcon)`
    font-size: var(--fs-theme-mode-logo);
    cursor: pointer;
    color: yellow;
    animation: none;
    animation: ${RotateThemeIcon} 0.3s linear forwards reverse 1;
`;
