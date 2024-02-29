import styled from "styled-components";
import {
    VerticalTimeline,
    VerticalTimelineElement,
} from "react-vertical-timeline-component";
import { MdLocationPin } from "react-icons/md";
import { FaAward } from "react-icons/fa6";

export const ExperienceBgContainer = styled.div`
    background-color: ${({ theme }) => theme.backgroundColor};
    color: ${({ theme }) => theme.color};
    padding-block: var(--page-section-pt) var(--page-section-pb);
`;

export const ExperienceMainHeading = styled.h1`
    text-align: center;
    font-size: var(--page-section-heading-fs);
    margin-bottom: var(--page-section-heading-mb);
`;

export const ExperienceSectionBodyContainer = styled.div`
    padding: clamp(0.4em, 1vw + 1rem, 1.2em) var(--total-page-pd-sm);
`;

export const ExperienceListContainer = styled.div``;
