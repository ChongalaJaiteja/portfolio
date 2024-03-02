import styled, { keyframes } from "styled-components";
import { motion } from "framer-motion";
import {
    AboutPageHeading,
    AboutPageBgContainer,
    AboutPageSectionBodyContainer,
} from "../about/styledComponent";

export const SkillsAndProjectsPageBgContainer = styled(AboutPageBgContainer)``;
export const SkillsAndProjectsPageHeading = styled(AboutPageHeading)``;

export const SkillsAndProjectsSectionBodyContainer = styled(
    AboutPageSectionBodyContainer
)``;

export const SkillsAndProjectsPageContentBgContainer = styled.div`
    display: flex;
    flex-direction: column;
    gap: 1em;
    @media (min-width: 620px) {
        flex-direction: row;
        justify-content: space-around;
        align-items: center;
    }
`;

export const SkillsAndProjectsPageImgBgContainer = styled(motion.div)`
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
    list-style-type: none;
    display: flex;
    flex-direction: column;
    gap: 1em;

    @media (min-width: 620px) {
        flex: 1 1 calc(40% - 1em);
        max-width: 32rem;
    }
`;
