import styled from "styled-components";
import { motion } from "framer-motion";
import { MdArrowRight } from "react-icons/md";
import { MdAccountBalance } from "react-icons/md";

export const CertificationsItem = styled(motion.li)`
    --gap: 1em;
    position: relative;
    border: 2px solid var(--theme-divide-line-color);
    overflow: hidden;
    flex: 1 1 calc(100% - var(--gap));
    background-color: var(--theme-container-bg-color);
    border-radius: 10px;
    display: flex;
    flex-direction: column;
    gap: 1em;
    @media (min-width: 475px) {
        flex: 0 1 calc(50% - var(--gap));
    }

    @media (min-width: 1010px) {
        flex: 0 1 calc(33.3% - var(--gap));
    }

    &:hover {
        border-color: var(--theme-primary-color);
    }
`;

export const ImageContainer = styled.div`
    align-self: center;
    padding: 0.7em;
    width: 96%;
    height: 50%;
`;

export const CertificationsItemImage = styled.img`
    width: min(100%, 30rem);
    object-fit: cover;
    border-radius: 10px;
    overflow: hidden;
    opacity: ${({ theme }) => (theme.isLightTheme ? "none" : "0.56")};
`;

export const ContentContainer = styled.div`
    display: flex;
    flex-direction: column;
    gap: 0.61em;
    padding: 0.7em;
`;

export const CertificateHeading = styled.h2`
    text-transform: capitalize;
    font-size: clamp(0.2rem, 1vw + 0.7rem, 1.2rem);
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
    /* color: var( --theme-second-text-color); */
`;

export const CertificationsSkillsBgContainer = styled.ul``;

export const CertificateProvidedInstituteContainer = styled.div`
    display: flex;
    align-items: center;
    gap: 0.3em;
`;

export const InstituteIcon = styled(MdAccountBalance)`
    font-size: clamp(0.2rem, 1vw + 0.8rem, 1.1rem);
`;

export const InstituteText = styled.span`
    text-transform: capitalize;
    font-size: clamp(0.2rem, 1vw + 0.7rem, 1.1rem);
`;

export const CertificateCardSkillsTitle = styled.h5`
    font-size: clamp(0.3rem, 1vw + 0.55rem, 0.96rem);
    display: flex;
    align-items: center;
    gap: 0.2em;
    cursor: pointer;
`;

export const CertificateCardSkillsContainer = styled(motion.ul)`
    list-style-type: none;
    padding: 0;
    display: flex;
    flex-wrap: wrap;
    gap: 0.5em;
    margin-bottom: 0.7em;
`;

export const ArrowRightIcon = styled(MdArrowRight)`
    font-size: clamp(0.2rem, 1vw + 0.8rem, 1.1rem);
    rotate: ${({ rotateArrow }) => (rotateArrow ? "90deg" : "0deg")};
`;

export const CertificateCardSkillItem = styled(motion.li)`
    font-size: clamp(0.1rem, 1vw + 0.43rem, 0.8rem);
    background-color: var(--theme-container-bg-color);
    border: 1px solid var(--theme-divide-line-color);
    border-radius: 20px;
    padding: 0.5em 1em;
    text-transform: capitalize;
    &:hover {
        background-color: var(--theme-primary-color);
        color: white;
    }
`;

export const ViewCertificateBtn = styled.button`
    background-color: var(--theme-primary-color);
    color: white;
    border: none;
    align-self: center;
    border-radius: 10px;
    padding: 0.7em 0.5em;
    cursor: pointer;
    font-size: clamp(0.5rem, 1vw + 0.63rem, 1rem);
    transition: transform 0.23s linear;
    border: 2px solid transparent;
    &:hover {
        transform: translateY(-4px);
        background-color: white;
        color: var(--theme-primary-color);
        border-color: var(--theme-primary-color);
    }
`;
