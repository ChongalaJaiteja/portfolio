/* eslint-disable react/prop-types */
import * as StyledComponent from "./styledComponent";

const animateSkillsAndProjectsCard = {
    initial: { opacity: 0, y: 20 },
    animate: (index) => ({
        opacity: 1,
        y: 0,
        transition: {
            delay: 0.4 * index,
            type: "spring",
        },
    }),
};

const SkillsAndProjectPageCard = ({ categoryDetails }) => {
    const { bgColor, index, route, icon, title } = categoryDetails;
    return (
        <StyledComponent.SkillsAndProjectsPageCard
            bgColor={bgColor}
            variants={animateSkillsAndProjectsCard}
            initial="initial"
            whileInView="animate"
            custom={index}
            viewport={{ once: true, amount: 0.8 }}
        >
            <StyledComponent.StyledLink to={route}>
                {icon}
                <StyledComponent.SkillsAndProjectsPageCardMainHeading>
                    {title}
                </StyledComponent.SkillsAndProjectsPageCardMainHeading>
            </StyledComponent.StyledLink>
        </StyledComponent.SkillsAndProjectsPageCard>
    );
};

export default SkillsAndProjectPageCard;
