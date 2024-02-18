import styled from "styled-components";
import { keyframes } from "styled-components";
import { BsMoonFill, BsFillSunFill } from "react-icons/bs";

export const NavBar = styled.nav`
    color: ${({ theme }) => theme.color};
    background-color: ${(theme) => theme.containerBackground};
    display: flex;
    align-items: center;
    justify-content: space-between;
    --fs-theme-mode-logo: clamp(1rem, 1vw + 1.3rem, 1.8rem);
`;

export const RotateThemeIcon = keyframes`
from {
    rotate: 54deg;
}
to {
    rotate: -5deg;
}
`;
export const DarkModeIcon = styled(BsMoonFill)`
    font-size: var(--fs-theme-mode-logo);
    cursor: pointer;
    color: #272826;
    animation: ${RotateThemeIcon} 0.3s linear forwards;
`;
export const LightModeIcon = styled(BsFillSunFill)`
    font-size: var(--fs-theme-mode-logo);
    cursor: pointer;
    color: yellow;
    animation: none;
    animation: ${RotateThemeIcon} 0.3s linear forwards reverse 1;
`;
