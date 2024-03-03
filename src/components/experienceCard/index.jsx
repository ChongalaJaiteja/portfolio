/* eslint-disable react/prop-types */
import "react-vertical-timeline-component/style.min.css";
import { useState } from "react";
import { v4 as uuidv4 } from "uuid";
import ExperienceCardSkillItem from "../experienceCardSkillItem";
import * as StyledComponent from "./styledComponent";

const ExperienceSectionCard = ({ experience }) => {
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
    } = experience;

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
                    {Object.keys(showSkillsMap).length !== 0 &&
                        showSkillsMap[id] && (
                            <StyledComponent.ExperienceCardSkillsContainer
                                initial={{ scaleY: 0 }}
                                animate={{ scaleY: 1 }}
                                transition={{ duration: 0.3 }}
                            >
                                {skills.map((skillName, index) => (
                                    <ExperienceCardSkillItem
                                        key={uuidv4()}
                                        skillDetails={{ skillName, index }}
                                    />
                                ))}
                            </StyledComponent.ExperienceCardSkillsContainer>
                        )}
                </StyledComponent.ExperienceCardContentContainer>
            </StyledComponent.ExperienceCardContainer>
        </StyledComponent.ExperienceVerticalTimelineElementContainer>
    );
};

export default ExperienceSectionCard;
