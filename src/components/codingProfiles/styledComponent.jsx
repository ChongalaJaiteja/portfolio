import styled from "styled-components";
import { motion } from "framer-motion";

import {
    AboutPageHeading,
    AboutPageBgContainer,
    AboutPageSectionBodyContainer,
} from "../about/styledComponent";

export const CodingProfilesPageBgContainer = styled(AboutPageBgContainer)``;

export const CodingProfilesPageHeading = styled(AboutPageHeading)``;

export const CodingProfilesSectionBodyContainer = styled(
    AboutPageSectionBodyContainer
)``;

export const CodingProfilesPageContentBgContainer = styled.div`
    display: flex;
    flex-direction: column;
    --gap: 1em;
    gap: var(--gap);
    @media (min-width: 790px) {
        flex-direction: row;
        align-items: center;
        justify-content: space-between;
    }
`;

export const CodingProfilesAnimationBgContainer = styled.div`
    flex: 1 1 100%;
    max-width: 34rem;
    align-self: center;
    @media (min-width: 790px) {
        flex: 1 1 calc(40% - 1em);
    }
`;

export const CodingProfilesBgContainer = styled.ul`
    list-style-type: none;
    padding: 0;
    display: flex;
    flex-flow: row wrap;
    flex: 1 1 100%;
    --gap: 1em;
    gap: 1.8em var(--gap);
    @media (min-width: 790px) {
        flex: 1 1 calc(60% - 1em);
    }
    @media (min-width: 950px) {
        align-self: flex-end;
    }
`;

export const CodingProfilesItemContainer = styled(motion.li)`
    border: 3px solid
        ${({ theme }) => (theme.isLightTheme ? "#FBF9F1" : "white")};
    cursor: pointer;
    background-color: ${({ themeColor }) => themeColor};
    border-radius: 10px;
    box-shadow: var(--theme-box-shadow);
    transition: box-shadow 0.4s ease-in;
    &:hover {
        box-shadow: none;
    }
    flex: 1 1 100%;
    @media (min-width: 560px) {
        flex: 0 1 calc(50% - var(--gap));
    }

    @media (min-width: 790px) {
        flex: 0 1 calc(100% - var(--gap));
    }

    @media (min-width: 950px) {
        flex: 0 1 calc(50% - var(--gap));
    }

    @media (min-width: 1590px) {
        flex: 0 1 calc(33.33% - var(--gap));
    }
`;

export const StyledLink = styled.a`
    padding: 1em;
    color: white;
    display: flex;
    align-items: center;
    gap: 1em;
    text-decoration: none;
`;

export const CodingProfilePlatformName = styled.h2`
    font-size: clamp(0.4rem, 1vw + 0.89rem, 1.5rem);
    text-transform: capitalize;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
`;
