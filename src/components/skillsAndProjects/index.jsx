import { Link } from "react-router-dom";
import { SkillsAndProjectPageCategory } from "../../utils/constants";
import * as StyledComponent from "./styledComponent";

const SkillsAndProjects = ({ route }) => {
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

    const animateSkillsAndProjectImg = {
        initial: { x: 20, opacity: 0 },
        animate: {
            x: 0,
            opacity: 1,
            transition: { duration: 0.8, type: "spring" },
        },
    };

    return (
        <StyledComponent.SkillsAndProjectsPageBgContainer id={route}>
            <StyledComponent.SkillsAndProjectsPageHeading>
                Skills & Projects
            </StyledComponent.SkillsAndProjectsPageHeading>
            <StyledComponent.SkillsAndProjectsSectionBodyContainer>
                <StyledComponent.SkillsAndProjectsPageContentBgContainer>
                    <StyledComponent.SkillsAndProjectsPageImgBgContainer
                        variants={animateSkillsAndProjectImg}
                        initial="initial"
                        whileInView="animate"
                        viewport={{ amount: 0.5, once: true }}
                    >
                        <StyledComponent.SkillsAndProjectsPageImg src="/webdev.svg" />
                    </StyledComponent.SkillsAndProjectsPageImgBgContainer>
                    <StyledComponent.SkillsAndProjectsPageCardsBgContainer>
                        {SkillsAndProjectPageCategory.map((category, index) => (
                            <StyledComponent.SkillsAndProjectsPageCard
                                key={category.id}
                                bgColor={category.bgColor}
                                variants={animateSkillsAndProjectsCard}
                                initial="initial"
                                whileInView="animate"
                                custom={index}
                                viewport={{ once: true }}
                            >
                                <StyledComponent.StyledLink to={category.route}>
                                    {category.icon}
                                    <StyledComponent.SkillsAndProjectsPageCardMainHeading>
                                        {category.title}
                                    </StyledComponent.SkillsAndProjectsPageCardMainHeading>
                                </StyledComponent.StyledLink>
                            </StyledComponent.SkillsAndProjectsPageCard>
                        ))}
                    </StyledComponent.SkillsAndProjectsPageCardsBgContainer>
                </StyledComponent.SkillsAndProjectsPageContentBgContainer>
            </StyledComponent.SkillsAndProjectsSectionBodyContainer>
        </StyledComponent.SkillsAndProjectsPageBgContainer>
    );
};

export default SkillsAndProjects;
