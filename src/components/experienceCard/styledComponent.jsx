import styled from "styled-components";
import { MdArrowRight } from "react-icons/md";
import { MdLocationPin } from "react-icons/md";
import { QualificationVerticalTimelineElementContainer } from "../qualificationCard/styledComponent";

export const ExperienceVerticalTimelineElementContainer = styled(
    QualificationVerticalTimelineElementContainer
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

export const ExperienceCardLocationTitle = styled.h4`
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
    font-size: clamp(0.3rem, 1vw + 0.52rem, 0.9rem);
    display: flex;
    align-items: center;
    gap: 0.5em;
    &:hover {
        text-decoration: underline;
    }
`;

export const ExperienceCardSkillsTitle = styled.h5`
    font-size: clamp(0.3rem, 1vw + 0.55rem, 0.96rem);
    margin-bottom: 0.3em;
    margin-top: 0.5em;
    /* outline: auto; */
    display: flex;
    align-items: center;
    gap: 0.2em;
`;

export const ExperienceCardSkillsContainer = styled.ul`
    list-style-type: none;
    padding: 0;
    display: flex;
    flex-wrap: wrap;
    gap: 0.5em;
`;

export const ArrowRightIcon = styled(MdArrowRight)`
    font-size: clamp(0.2rem, 1vw + 0.8rem, 1.1rem);
`;
