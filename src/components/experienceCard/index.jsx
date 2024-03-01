/* eslint-disable react/prop-types */
import { useState } from "react";
import { v4 as uuidv4 } from "uuid";
import ExperienceCardSkillItem from "../experienceCardSkillItem";
import * as StyledComponent from "./styledComponent";

const ExperienceCard = ({ experienceCardDetails }) => {
    const {
        id,
        imageUrl,
        icon,
        infoIcon,
        navIcon,
        experienceLink,
        title,
        location,
        date,
        content,
        skills,
    } = experienceCardDetails;

    const [showSkillsMap, setShowSkillsMap] = useState({});

    const toggleSkills = (id) => {
        setShowSkillsMap((prevMap) => ({
            ...prevMap,
            [id]: !prevMap[id],
        }));
    };
    return (
        <StyledComponent.ExperienceVerticalTimelineElementContainer
            className="vertical-timeline-element--work"
            date={date}
            icon={icon}
        >
            <StyledComponent.ExperienceCardContainer>
                <StyledComponent.ExperienceImgContainer>
                    <StyledComponent.ExperienceCardImg
                        src={imageUrl}
                        alt={title}
                    />
                </StyledComponent.ExperienceImgContainer>

                <StyledComponent.ExperienceCardContentContainer>
                    <StyledComponent.ExperienceCardTitle className="vertical-timeline-element-title">
                        {title}
                    </StyledComponent.ExperienceCardTitle>

                    <StyledComponent.ExperienceCardLocationTitle className="vertical-timeline-element-subtitle">
                        <StyledComponent.ExperienceLocationIcon />
                        {location}
                    </StyledComponent.ExperienceCardLocationTitle>
                    <StyledComponent.ExperienceCardDescription>
                        {content}
                    </StyledComponent.ExperienceCardDescription>
                    <StyledComponent.ExperienceCardLink
                        href={experienceLink}
                        alt={title}
                        target="_blank"
                    >
                        Know More {navIcon}
                    </StyledComponent.ExperienceCardLink>
                    <StyledComponent.ExperienceCardSkillsTitle
                        onClick={() => toggleSkills(id)}
                    >
                        <StyledComponent.ArrowRightIcon />
                        Skills
                    </StyledComponent.ExperienceCardSkillsTitle>
                    {showSkillsMap[id] && (
                        <StyledComponent.ExperienceCardSkillsContainer>
                            {skills.map((skill) => (
                                <ExperienceCardSkillItem
                                    key={uuidv4()}
                                    skillName={skill}
                                />
                            ))}
                        </StyledComponent.ExperienceCardSkillsContainer>
                    )}
                </StyledComponent.ExperienceCardContentContainer>
            </StyledComponent.ExperienceCardContainer>
        </StyledComponent.ExperienceVerticalTimelineElementContainer>
    );
};

export default ExperienceCard;
