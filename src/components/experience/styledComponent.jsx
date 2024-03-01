import styled from "styled-components";
import {
    AboutPageHeading,
    AboutPageBgContainer,
    AboutPageSectionBodyContainer,
} from "../about/styledComponent";
import {
    VerticalTimelineContainer,
    VerticalTimelineElementContainer,
} from "../qualification/styledComponent";

import { MdLocationPin } from "react-icons/md";

export const ExperienceBgContainer = styled(AboutPageBgContainer)``;

export const ExperienceMainHeading = styled(AboutPageHeading)``;

export const ExperienceSectionBodyContainer = styled(AboutPageSectionBodyContainer)`
    padding: clamp(0.4em, 1vw + 1rem, 1.2em) var(--total-page-pd-sm);
`;

export const ExperienceListContainer = styled.div``;

export const ExperienceVerticalTimelineContainer = styled(
    VerticalTimelineContainer
)``;

export const ExperienceVerticalTimelineElementContainer = styled(
    VerticalTimelineElementContainer
)``;

export const ExperienceCardContainer = styled.div`
    display: flex;
    flex-direction: column;
    gap: 1em;
    @media (min-width: 530px) {
        flex-direction: row;
        align-items: center;
    }
`;

export const ExperienceImgContainer = styled.div`
    border-radius: 10px;
    overflow: hidden;
    @media (min-width: 530px) {
        flex: 1 1 calc(40% - 1em);
    }
`;

export const ExperienceCardImg = styled.img`
    width: min(100%, 34rem);
    border-radius: 10px;
    transition: transform 0.19s ease-in;
    &:hover {
        transform: scale(1.1);
    }
`;

export const ExperienceCardContentContainer = styled.div`
    @media (min-width: 530px) {
        flex: 1 1 calc(60% - 1em);
    }
`;

export const ExperienceCardTitle = styled.h3`
    font-size: clamp(0.5rem, 1vw + 0.75rem, 1.2rem);
`;

export const ExperienceLocationIcon = styled(MdLocationPin)`
    color: red;
    font-size: clamp(0.3rem, 1vw + 0.62rem, 1.33rem);
`;

export const ExperienceCardSubTitle = styled.h4`
    padding-top: 0.3em;
    font-size: clamp(0.3rem, 1vw + 0.52rem, 0.9rem);
    display: flex;
    color: grey;
    align-items: center;
    gap: 0.27em;
`;

export const ExperienceCardDescription = styled.p`
    /* color: red; */
`;

export const ExperienceCardLink = styled.a`
    padding-left: 0.3em;
    display: inline;
    &:hover {
        text-decoration: underline;
    }
`;
