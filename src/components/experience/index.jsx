import "react-vertical-timeline-component/style.min.css";
import * as StyledComponent from "./styledComponent";
import { experienceList } from "../../utils/constants";

const Experience = ({ route }) => {
    return (
        <StyledComponent.ExperienceBgContainer id={route}>
            <StyledComponent.ExperienceMainHeading>
                Experience
            </StyledComponent.ExperienceMainHeading>
            <StyledComponent.ExperienceSectionBodyContainer>
                <StyledComponent.ExperienceListContainer>
                    <StyledComponent.ExperienceVerticalTimelineContainer>
                        {experienceList.map(
                            ({
                                id,
                                imageUrl,
                                icon,
                                infoIcon,
                                websiteUrl,
                                title,
                                subtitle,
                                date,
                                content,
                            }) => (
                                <StyledComponent.ExperienceVerticalTimelineElementContainer
                                    key={id}
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
                                            <StyledComponent.ExperienceCardSubTitle className="vertical-timeline-element-subtitle">
                                                <StyledComponent.ExperienceLocationIcon />
                                                {subtitle}
                                            </StyledComponent.ExperienceCardSubTitle>
                                            <StyledComponent.ExperienceCardDescription>
                                                {content}
                                                <StyledComponent.ExperienceCardLink
                                                    href={websiteUrl}
                                                    alt={title}
                                                    target="_blank"
                                                >
                                                    More Info.
                                                </StyledComponent.ExperienceCardLink>
                                            </StyledComponent.ExperienceCardDescription>
                                        </StyledComponent.ExperienceCardContentContainer>
                                    </StyledComponent.ExperienceCardContainer>
                                </StyledComponent.ExperienceVerticalTimelineElementContainer>
                            )
                        )}
                    </StyledComponent.ExperienceVerticalTimelineContainer>
                </StyledComponent.ExperienceListContainer>
            </StyledComponent.ExperienceSectionBodyContainer>
        </StyledComponent.ExperienceBgContainer>
    );
};
export default Experience;
