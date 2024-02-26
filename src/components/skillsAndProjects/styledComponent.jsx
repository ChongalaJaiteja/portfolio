import styled from "styled-components";
import { motion } from "framer-motion";

export const SkillsAndProjectsPageBgContainer = styled.div`
    background-color: ${({ theme }) => theme.backgroundColor};
    color: ${({ theme }) => theme.color};
    padding-top: var(--page-section-pt);
`;
export const SkillsAndProjectsPageHeading = styled.h1`
    text-align: center;
    position: relative;
    font-size: var(--page-section-heading-fs);
    margin-bottom: var(--page-section-heading-mb);
`;

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
    outline: auto;
    @media (min-width: 620px) {
        flex-direction: row;
        justify-content: space-evenly;
        align-items: center;
    }
`;

export const SkillsAndProjectsPageImgBgContainer = styled.div`
    outline: auto;
    @media (min-width: 620px) {
        flex: 1 1 calc(60% - 1em);
        order: 1;
        max-width: 30rem;
    }
`;

export const SkillsAndProjectsPageImg = styled.img`
    width: 100%;
`;

export const SkillsAndProjectsPageCardsBgContainer = styled.ul`
    padding: 0;
    outline: auto;
    list-style-type: none;
    display: flex;
    flex-direction: column;
    gap: 1em;

    @media (min-width: 620px) {
        flex: 1 1 calc(40% - 1em);
    }
`;

export const SkillsAndProjectsPageCard = styled(motion.li)`
    outline: auto;
    cursor: pointer;
    color: white;
    background-color: ${({ bgColor }) => bgColor};
    padding: 1em;
    border-radius: 10px;
    display: flex;
    align-items: center;
    gap: 1em;
`;

export const SkillsAndProjectsPageCardMainHeading = styled.h2`
    font-size: clamp(0.4rem, 1vw + 0.89rem, 1.5rem);
`;
