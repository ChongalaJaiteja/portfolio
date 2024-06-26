import styled from "styled-components";
import { keyframes } from "styled-components";
import { motion } from "framer-motion";
import { Link } from "react-scroll";
import { Link as RouterLink } from "react-router-dom";

import { BsMoonFill, BsFillSunFill } from "react-icons/bs";

export const NavBar = styled(motion.nav)`
    color: var(--theme-page-text-color);
    background-color: var(--theme-container-bg-color);
    display: flex;
    align-items: center;
    position: sticky;
    top: 0;
    z-index: 10;
    box-shadow: var(--theme-box-shadow);
    justify-content: space-between;
    padding-inline: clamp(0.3em, 1vw + 1em, 2.1em);
    padding-block: ${({ hideNavLinks }) =>
        hideNavLinks
            ? "clamp(0.2em, 1vw + 1em, 1em)"
            : "clamp(0.2em, 1vw + 0.38em, 1em)"};
    @media (min-width: 1060px) {
        border-radius: ${({ isScrollingDown }) =>
            isScrollingDown ? "32px" : "0px"};
        position: ${({ isScrollingDown }) =>
            isScrollingDown ? "fixed" : "sticky"};
        width: ${({ isScrollingDown }) =>
            isScrollingDown ? "min(82%,50rem)" : "auto"};
        inset: ${({ isScrollingDown }) =>
            isScrollingDown ? "2% 0 auto 0" : "0 auto auto auto"};
        margin: ${({ isScrollingDown }) => (isScrollingDown ? "auto" : "none")};
        opacity: ${({ isScrollingDown }) => (isScrollingDown ? 0.9 : 1)};
        /* justify-content: ${({ isScrollingDown }) =>
            isScrollingDown ? "space-between" : "space-evenly"}; */
        justify-content: space-between;
    }
`;

export const StyledLink = styled(RouterLink)`
    color: var(--theme-page-text-color);
`;

export const NavBarHeading = styled.h1`
    font-size: clamp(0.4rem, 1vw + 1rem, 1.6rem);
    @media (min-width: 827px) {
        display: ${({ isScrollingDown }) =>
            isScrollingDown ? "none" : "auto"};
    }
`;

export const NavListItemBgContainerLg = styled.ul`
    display: none;
    @media (min-width: 1060px) {
        display: flex;
        justify-content: space-between;
        list-style-type: none;
        padding: 0;
        width: ${({ isScrollingDown }) =>
            isScrollingDown ? "100%" : "min(70%, 50rem)"};
        margin-left: ${({ isScrollingDown }) =>
            isScrollingDown ? "none" : "auto"};
        margin-right: ${({ isScrollingDown }) =>
            isScrollingDown ? "none" : "2rem"};
    }
`;

export const onHoverOption = keyframes`
from {
    right: 100%;
} to {
    right: 0;
}
`;

export const StyledActiveLink = styled(Link)`
    position: relative;
    text-decoration: none;
    @media (min-width: 1060px) {
        &.active:after {
            content: "";
            background-color: ${({ theme }) => theme.primaryAccentColor};
            padding: 0.1em;
            position: absolute;
            top: 90%;
            left: 0;
            border-radius: 20px;
            animation: ${onHoverOption} 0.25s ease-in 0s 1 forwards;
        }
        &:hover:after {
            content: "";
            background-color: ${({ theme }) => theme.primaryAccentColor};
            padding: 0.1em;
            position: absolute;
            top: 90%;
            left: 0;
            border-radius: 20px;
            animation: ${onHoverOption} 0.25s ease-in 0s 1 forwards;
        }
    }
`;

export const NavListItemLg = styled.li`
    color: var(--theme-page-text-color);
    padding: 0.4em 0.5em;
    font-size: clamp(0.2rem, 1vw + 0.5rem, 1rem);
    cursor: pointer;
`;

export const HamburgIconAndThemeChangeBgContainer = styled.div`
    display: flex;
    align-items: center;
    gap: 0.7em;
`;

export const HamburgerBgContainer = styled.div`
    @media (min-width: 1060px) {
        display: none;
    }
`;

export const ChangeThemeBgContainer = styled.div`
    --fs-theme-mode-logo: clamp(1rem, 1vw + 1.3rem, 1.8rem);

    @media (min-width: 1060px) {
        display: ${({ isScrollingDown }) =>
            isScrollingDown ? "none" : "block"};
    }
`;

export const RotateThemeIcon = keyframes`
from {
    rotate: 54deg;
}
to {
    rotate: -5deg;
}
`;
export const DarkModeIcon = styled(motion(BsMoonFill))`
    font-size: var(--fs-theme-mode-logo);
    cursor: pointer;
    color: #272826;
    animation: ${RotateThemeIcon} 0.3s linear forwards;
`;

// TODO: add motion component
export const LightModeIcon = styled(motion(BsFillSunFill))`
    font-size: var(--fs-theme-mode-logo);
    cursor: pointer;
    color: yellow;
    animation: none;
    animation: ${RotateThemeIcon} 0.3s linear forwards reverse 1;
`;

export const StyledMenuContainer = styled(motion.div)`
    position: fixed;
    z-index: 3;
    top: 14%;
    width: clamp(0.8rem, 1vw + 11rem, 19rem);
    right: 4%;
    box-shadow: var(--theme-box-shadow);
    border-radius: 10px;
    @media (min-width: 1060px) {
        display: none;
    }
`;

export const NavListItemBgContainer = styled.ul`
    background-color: ${({ theme }) => theme.containerBackground};
    padding: 0;
    color: var(--theme-page-text-color);
    list-style-type: none;
    padding: 0.4em 0.2em;
    border-radius: 7px;
    text-align: left;
`;

export const NavListItem = styled.li`
    border-radius: 7px;
    font-size: clamp(0.4em, 1vw + 0.65rem, 1rem);
    padding: 0.5em 3em 0.5em 0.4em;
    color: var(--theme-page-text-color);
    cursor: pointer;
    &:hover {
        background-color: var(--theme-primary-color);
        color: white;
    }
`;
