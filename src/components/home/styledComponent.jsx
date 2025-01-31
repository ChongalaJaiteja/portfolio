import { MdOutlineFileDownload } from "react-icons/md";
import { motion } from "framer-motion";
import styled, { keyframes } from "styled-components";
import darkCloud from "../../assets/cloudDark.png";
import lightCloud from "../../assets/cloudBg.png";

export const HomeBgContainer = styled.div`
    background-image: ${({ theme }) =>
        theme.isLightTheme ? `url(${lightCloud})` : `url(${darkCloud})`};
    display: flex;

    flex-direction: column;
    align-items: center;
    padding: 1.4em var(--total-page-pd-sm);
    gap: 1em;
    min-height: 83vh;
    @media (min-width: 620px) {
        flex-direction: row;
        align-items: center;
        justify-content: space-between;
        padding-inline: var(--total-page-pd-md);
    }
    @media (min-width: 1050px) {
        padding-inline: var(--total-page-pd-lg);
    }
`;

export const AnimatedDevContainer = styled(motion.div)`
    width: 97%;
    /* outline: auto; */
    max-width: 28rem;
    @media (min-width: 620px) {
        & {
            width: 100%;
            order: 1;
            margin-bottom: 1em;
            /* align-self: flex-start; */
        }
    }
`;

export const HomeContentContainer = styled(motion.div)`
    width: min(100%, 39rem);
    margin-bottom: 3em;
`;

export const GreetingHeading = styled.h1`
    color: var(--theme-page-text-color);
    font-size: clamp(0.5rem, 1vw + 1.2rem, 2.4rem);
`;

export const HiEmoji = styled.span`
    font-size: clamp(0.2rem, 1vw + 1.66rem, 15rem);
    display: inline-block;
    transition: transform 1s;
`;

export const MyNameSpan = styled.span`
    color: ${({ theme }) => theme.primaryAccentColor};
    background: linear-gradient(90deg, #f72798, #525ceb);
    text-transform: uppercase;
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
`;

export const HomeContentPara = styled.p`
    color: var(--theme-page-text-color);
    font-size: clamp(0.5rem, 1vw + 0.64rem, 1.23rem);
`;

export const ResumeBtn = styled.button`
    background-color: var(--theme-primary-color);
    color: white;
    border: none;
    border-radius: 10px;
    padding: 0.7em 0;
    width: min(42%, 28rem);
    margin-top: 1.8em;
    cursor: pointer;
    font-size: clamp(0.5rem, 1vw + 0.76rem, 1.3rem);
    transition: transform 0.23s linear;
    border: 2px solid transparent;
    &:hover {
        transform: translateY(-4px);
        border-color: var(--theme-primary-color);
    }
`;

export const DownloadBtnIcon = styled(MdOutlineFileDownload)`
    font-size: clamp(0.4rem, 1vw + 1rem, 5rem);
`;
