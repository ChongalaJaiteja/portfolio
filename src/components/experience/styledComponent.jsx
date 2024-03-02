import styled from "styled-components";
import {
    AboutPageHeading,
    AboutPageBgContainer,
    AboutPageSectionBodyContainer,
} from "../about/styledComponent";
import { VerticalTimeline } from "react-vertical-timeline-component";

export const ExperienceBgContainer = styled(AboutPageBgContainer)``;

export const ExperienceMainHeading = styled(AboutPageHeading)``;

export const ExperienceSectionBodyContainer = styled(
    AboutPageSectionBodyContainer
)`
    padding: clamp(0.4em, 1vw + 1rem, 1.2em) var(--total-page-pd-sm);
`;

export const ExperienceListContainer = styled.div``;

export const ExperienceVerticalTimelineContainer = styled(
    VerticalTimeline
).attrs(({ theme }) => ({
    lineColor: theme.isLightTheme ? theme.primaryAccentColor : "white",
}))``;
