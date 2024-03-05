import styled from "styled-components";
import { keyframes } from "styled-components";
import { motion } from "framer-motion";
import { Link } from "react-scroll";
import { BsMoonFill, BsFillSunFill } from "react-icons/bs";

export const NavBar = styled.nav`
    color: ${({ theme }) => theme.color};
    background-color: ${({ theme }) => theme.containerBackground};
    display: flex;
    align-items: center;
    position: sticky;
    top: 0;
    z-index: 10;
    justify-content: space-between;
    padding: clamp(0.2em, 1vw + 0.38em, 1em) clamp(0.3em, 1vw + 1em, 2.1em);
    @media (min-width: 827px) {
        border-radius: ${({ isScrollingDown }) =>
            isScrollingDown ? "32px" : "0px"};
        position: ${({ isScrollingDown }) =>
            isScrollingDown ? "fixed" : "sticky"};
        width: ${({ isScrollingDown }) =>
            isScrollingDown ? "min(82%,45rem)" : "auto"};
        inset: ${({ isScrollingDown }) =>
            isScrollingDown ? "2% 0 auto 0" : "auto"};
        margin: ${({ isScrollingDown }) => (isScrollingDown ? "auto" : "none")};
        opacity: ${({ isScrollingDown }) => (isScrollingDown ? 0.9 : 1)};
        justify-content: ${({ isScrollingDown }) =>
            isScrollingDown ? "space-between" : "space-evenly"};
    }
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
    @media (min-width: 827px) {
        display: flex;
        justify-content: space-between;
        list-style-type: none;
        padding: 0;
        width: ${({ isScrollingDown }) =>
            isScrollingDown ? "100%" : "min(73%, 40rem)"};
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
    &.active:after {
        content: "";
        background-color: ${({ theme }) => theme.primaryAccentColor};
        padding: 0.1em;
        position: absolute;
        top: 90%;
        left: 0;
        border-radius: 20px;
        animation: ${onHoverOption} 0.15s ease-in 0s 1 forwards;
    }
    &:hover:after {
        content: "";
        background-color: ${({ theme }) => theme.primaryAccentColor};
        padding: 0.1em;
        position: absolute;
        top: 90%;
        left: 0;
        border-radius: 20px;
        animation: ${onHoverOption} 0.15s ease-in 0s 1 forwards;
    }
`;

export const NavListItemLg = styled.li`
    color: ${({ theme }) => theme.color};
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
    @media (min-width: 827px) {
        display: none;
    }
`;

export const ChangeThemeBgContainer = styled.div`
    --fs-theme-mode-logo: clamp(1rem, 1vw + 1.3rem, 1.8rem);

    @media (min-width: 827px) {
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
    width: clamp(0.8rem, 1vw +40%, 10rem);
    right: 4%;
    @media (min-width: 827px) {
        display: none;
    }
`;

export const NavListItemBgContainer = styled.ul`
    background-color: ${({ theme }) => theme.containerBackground};
    padding: 0;
    color: ${({ theme }) => theme.color};
    list-style-type: none;
    padding: 0.4em;
    border-radius: 7px;
    text-align: left;
`;

export const NavListItem = styled.li`
    border-radius: 7px;
    font-size: clamp(0.4em, 1vw + 0.65rem, 1rem);
    padding: 0.5em 3em 0.5em 0.4em;
    color: ${({ theme }) => theme.color};
    cursor: pointer;
    &:hover {
        background-color: ${({ theme }) => theme.primaryAccentColor};
        color: white;
    }
`;
