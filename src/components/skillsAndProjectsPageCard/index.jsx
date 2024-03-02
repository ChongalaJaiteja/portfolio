import * as StyledComponent from "./styledComponent";

const SkillsAndProjectPageCard = ({ categoryDetails }) => {
    const animateSkillsAndProjectsCard = {
        initial: { opacity: 0, y: 100 },
        animate: {
            opacity: 1,
            y: 0,
            transition: (index) => ({
                delay: 0.5 * index,
            }),
        },
    };
    const { bgColor, index, route, icon, title } = categoryDetails;
    return (
        <StyledComponent.SkillsAndProjectsPageCard
            bgColor={bgColor}
            variants={animateSkillsAndProjectsCard}
            initial="initial"
            whileInView="animate"
            custom={index}
            viewport={{ once: true }}
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
