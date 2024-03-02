import styled from "styled-components";
import {
    AboutPageHeading,
    AboutPageBgContainer,
    AboutPageSectionBodyContainer,
} from "../about/styledComponent";

import { VerticalTimeline } from "react-vertical-timeline-component";

export const QualificationBgContainer = styled(AboutPageBgContainer)``;

export const QualificationMainHeading = styled(AboutPageHeading)``;

export const QualificationSectionBodyContainer = styled(
    AboutPageSectionBodyContainer
)`
    padding: clamp(0.4em, 1vw + 1rem, 1.2em) var(--total-page-pd-sm);
`;

export const QualificationListContainer = styled.div``;
export const QualificationVerticalTimelineContainer = styled(
    VerticalTimeline
).attrs(({ theme }) => ({
    lineColor: theme.isLightTheme ? theme.primaryAccentColor : "white",
}))``;
