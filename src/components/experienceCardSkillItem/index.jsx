import * as StyledComponent from "./styledComponent";
import { animateSkillsAndProjectsCard } from "../skillsAndProjectsPageCard";
const ExperienceCardSkillItem = ({ skillDetails }) => {
    const { skillName, index } = skillDetails;
    return (
        <StyledComponent.ExperienceCardSkillItem
            variants={animateSkillsAndProjectsCard}
            initial="initial"
            whileInView="animate"
            custom={index}
            viewport={{ once: true }}
        >
            {skillName}
        </StyledComponent.ExperienceCardSkillItem>
    );
};

export default ExperienceCardSkillItem;
