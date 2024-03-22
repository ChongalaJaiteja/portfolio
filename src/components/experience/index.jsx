import { v4 as uuidv4 } from "uuid";
import "react-vertical-timeline-component/style.min.css";
import * as StyledComponent from "./styledComponent";
import { experienceList } from "../../utils/constants";
import ExperienceSectionCard from "../experienceCard";

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
                            <ExperienceSectionCard
                                key={experience.id}
                                experience={experience}
                            />
                        ))}
                    </StyledComponent.ExperienceVerticalTimelineContainer>
                </StyledComponent.ExperienceListContainer>
            </StyledComponent.ExperienceSectionBodyContainer>
        </StyledComponent.ExperienceBgContainer>
    );
};
export default Experience;
