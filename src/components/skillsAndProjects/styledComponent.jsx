import styled, { keyframes } from "styled-components";
import { motion } from "framer-motion";
import { AboutPageHeading } from "../about/styledComponent";
import { Link } from "react-router-dom";

export const SkillsAndProjectsPageBgContainer = styled.div`
    background-color: ${({ theme }) => theme.backgroundColor};
    color: ${({ theme }) => theme.color};
    padding-block: var(--page-section-pt) var(--page-section-pb);
`;
export const SkillsAndProjectsPageHeading = styled(AboutPageHeading)``;

export const SkillsAndProjectsSectionBodyContainer = styled.div`
    padding: 0em var(--total-page-pd-sm);
    @media (min-width: 620px) {
        padding-inline: var(--total-page-pd-md);
    }
    @media (min-width: 1050px) {
        padding-inline: var(--total-page-pd-lg);
    }
`;

export const SkillsAndProjectsPageContentBgContainer = styled.div`
    display: flex;
    flex-direction: column;
    gap: 1em;
    /* outline: auto; */
    @media (min-width: 620px) {
        flex-direction: row;
        justify-content: space-around;
        align-items: center;
    }
`;

export const SkillsAndProjectsPageImgBgContainer = styled(motion.div)`
    /* outline: auto; */
    @media (min-width: 620px) {
        flex: 1 1 calc(60% - 1em);
        order: 1;
        max-width: 35rem;
    }
`;

export const AnimateSkillsAndProjectImg = keyframes`
from {
    transform: translateY(0);
} to {
    transform: translateY(-10px);
}
`;

export const SkillsAndProjectsPageImg = styled.img`
    width: 100%;
    animation: ${AnimateSkillsAndProjectImg} 2.3s linear infinite
        alternate-reverse;
`;

export const SkillsAndProjectsPageCardsBgContainer = styled.ul`
    padding: 0;
    /* outline: auto; */
    list-style-type: none;
    display: flex;
    flex-direction: column;
    gap: 1em;

    @media (min-width: 620px) {
        flex: 1 1 calc(40% - 1em);
        max-width: 32rem;
    }
`;

export const SkillsAndProjectsPageCard = styled(motion.li)`
    border: 3px solid
        ${({ theme }) => (theme.isLightTheme ? "#FBF9F1" : "white")};
    cursor: pointer;
    background-color: ${({ bgColor }) => bgColor};
    border-radius: 10px;
`;

export const StyledLink = styled(Link)`
    padding: 1em;
    color: white;
    display: flex;
    align-items: center;
    gap: 1em;
`;

export const SkillsAndProjectsPageCardMainHeading = styled.h2`
    font-size: clamp(0.4rem, 1vw + 0.89rem, 1.5rem);
`;
