import styled from "styled-components";
import { AboutPageHeading } from "../about/styledComponent";
import {
    VerticalTimeline,
    VerticalTimelineElement,
} from "react-vertical-timeline-component";
import { MdLocationPin } from "react-icons/md";
import { FaAward } from "react-icons/fa6";

export const QualificationBgContainer = styled.div`
    background-color: ${({ theme }) => theme.backgroundColor};
    color: ${({ theme }) => theme.color};
    padding-block: var(--page-section-pt) var(--page-section-pb);
`;

export const QualificationMainHeading = styled(AboutPageHeading)``;

export const QualificationSectionBodyContainer = styled.div`
    padding: clamp(0.4em, 1vw + 1rem, 1.2em) var(--total-page-pd-sm);
`;

export const QualificationListContainer = styled.div``;
export const VerticalTimelineContainer = styled(VerticalTimeline).attrs(
    ({ theme }) => ({
        lineColor: theme.isLightTheme ? theme.primaryAccentColor : "white",
    })
)``;

export const VerticalTimelineElementContainer = styled(
    VerticalTimelineElement
).attrs(({ theme }) => ({
    contentStyle: {
        background: `${theme.containerBackground}`,
        color: `${theme.color}`,
        borderRadius: "12px",
        boxShadow: "3px 3px 10px 5px rgba(0, 0, 0, 0.1)",
    },
    contentArrowStyle: {
        borderRight: `9px solid ${theme.containerBackground}`,
    },
    iconStyle: {
        background: theme.primaryAccentColor,
    },
}))`
    cursor: pointer;
`;

export const QualificationCardContainer = styled.div`
    display: flex;
    flex-direction: column;
    gap: 1em;
    @media (min-width: 530px) {
        flex-direction: row;
        align-items: center;
    }
`;

export const QualificationImgContainer = styled.div`
    border-radius: 10px;
    overflow: hidden;
    @media (min-width: 530px) {
        flex: 1 1 calc(40% - 1em);
    }
`;

export const QualificationCardImg = styled.img`
    width: min(100%, 34rem);
    border-radius: 10px;
    transition: transform 0.19s ease-in;
    &:hover {
        transform: scale(1.1);
    }
`;

export const QualificationCardContentContainer = styled.div`
    @media (min-width: 530px) {
        flex: 1 1 calc(60% - 1em);
    }
`;

export const QualificationCardTitle = styled.h3`
    font-size: clamp(0.5rem, 1vw + 0.75rem, 1.2rem);
`;

export const LocationIcon = styled(MdLocationPin)`
    color: red;
    font-size: clamp(0.3rem, 1vw + 0.62rem, 1.33rem);
`;

export const QualificationCardSubTitle = styled.h4`
    padding-top: 0.3em;
    font-size: clamp(0.3rem, 1vw + 0.52rem, 0.9rem);
    display: flex;
    color: grey;
    align-items: center;
    gap: 0.27em;
`;
export const ScoreIcon = styled(FaAward)`
    color: #ffd95a;
    font-size: clamp(0.3rem, 1vw + 0.62rem, 1.33rem);
`;

export const QualificationCardDescription = styled.p`
    /* color: red; */
`;

export const QualificationCardLink = styled.a`
    padding-left: 0.3em;
    display: inline;
    &:hover {
        text-decoration: underline;
    }
`;
