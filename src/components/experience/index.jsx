import "react-vertical-timeline-component/style.min.css";
import { v4 as uuidv4 } from "uuid";
import * as StyledComponent from "./styledComponent";
import { experienceList } from "../../utils/constants";
import ExperienceCard from "../experienceCard";
const Experience = ({ route }) => {
    return (
        <StyledComponent.ExperienceBgContainer id={route}>
            <StyledComponent.ExperienceMainHeading>
                Experience
            </StyledComponent.ExperienceMainHeading>
            <StyledComponent.ExperienceSectionBodyContainer>
                <StyledComponent.ExperienceListContainer>
                    <StyledComponent.ExperienceVerticalTimelineContainer>
                        {experienceList.map((experience) => (
                            <ExperienceCard
                                key={experience.id}
                                experienceCardDetails={experience}
                            />
                        ))}
                    </StyledComponent.ExperienceVerticalTimelineContainer>
                </StyledComponent.ExperienceListContainer>
            </StyledComponent.ExperienceSectionBodyContainer>
        </StyledComponent.ExperienceBgContainer>
    );
};
export default Experience;
