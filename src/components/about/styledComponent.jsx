import styled, { keyframes } from "styled-components";
import { motion } from "framer-motion";

export const AboutPageBgContainer = styled.div`
    background-color: ${({ theme }) => theme.backgroundColor};
    color: ${({ theme }) => theme.color};
    padding-top: clamp(1.4em, 1vw + 2.5em, 6em);
`;

export const AboutPageHeading = styled.h1`
    text-align: center;
    position: relative;
    font-size: clamp(0.5rem, 1vw + 1.61rem, 2.32rem);

    /* &:after {
        content: "";
        position: absolute;
        left: 45%;
        bottom: -9%;
        background-color: red;
        width: 80px;
        height: 10px;
        transform: skew(-20deg) translateX(-80%);
        background: ${({ theme }) => theme.primaryAccentColor};
        opacity: 0.6;
        z-index: -1;
    } */
`;

export const AboutPageContentBgContainer = styled.div`
    margin-top: 2.56rem;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 1rem;
    padding: 0em clamp(0.5em, 1vw + 1.6em, 3em);
    @media (min-width: 620px) {
        flex-direction: row;
        align-items: center;
        justify-content: space-around;
    }
`;

export const AboutPageDescription = styled(motion.p)`
    flex: 1 1 100%;
    @media (min-width: 620px) {
        order: -1;
        flex: 1 1 calc(50% - 1rem);
    }
    @media (min-width: 900px) {
        flex: 1 1 calc(60% - 1rem);
    }
`;

export const AboutPageProfileBgContainer = styled(motion.div)`
    display: flex;
    justify-content: center;
    align-items: center;
    flex: 1 1 100%;
    cursor: pointer;
    user-select: none;
    & :hover {
        transform: scale(1.01);
        transition: transform 0.5s ease-in;
    }
    @media (min-width: 620px) {
        flex: 1 1 calc(50% - 1rem);
    }
    @media (min-width: 900px) {
        flex: 1 1 calc(40% - 1rem);
    }
`;

export const Pulse1 = keyframes`
    0% {
        transform: scale(1);
        opacity: 0.75;
    } 100% {
        transform: scale(1.31);
        opacity: 0;
    }
`;

export const Pulse2 = keyframes`
    0% {
        transform: scale(1);
        opacity: 0.75;
    } 100% {
        transform: scale(1.21);
        opacity: 0;
    }
`;

export const AboutPageProfileBorderContainer = styled.div`
    position: relative;
    border-radius: 50%;
    width: min(65%, 20rem);
    aspect-ratio: 1;
    z-index: 1;
    /* overflow: hidden; */
    &::after {
        content: "";
        position: absolute;
        inset: 0;
        z-index: -1;
        border-radius: 50%;
        background-color: ${({ theme }) => theme.primaryAccentColor};
        animation: ${Pulse1} 2s infinite linear;
    }

    &::before {
        content: "";
        position: absolute;
        inset: 0;
        z-index: -1;
        border-radius: 50%;
        background-color: ${({ theme }) => theme.primaryAccentColor};
        animation: ${Pulse2} 2s 0.5s infinite linear;
    }
`;

export const ProfileImg = styled.img`
    border-radius: 50%;
    display: block;
    width: 100%;
    height: 100%;
`;
