import * as StyledComponent from "./styledComponent";
// import { animateSkillsAndProjectsCard } from "../skillsAndProjectsPageCard";

const ExperienceCardSkillItem = ({ skillDetails }) => {
    const { skillName, index } = skillDetails;
    const animateExperienceCardSkills = {
        initial: { opacity: 0, y: 20 },
        animate: (index) => ({
            opacity: 1,
            y: 0,
            transition: {
                delay: 0.1 * index,
                type: "spring",
            },
        }),
    };
    return (
        <StyledComponent.ExperienceCardSkillItem
            variants={animateExperienceCardSkills}
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
