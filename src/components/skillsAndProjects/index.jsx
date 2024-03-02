import { Link } from "react-router-dom";
import { v4 as uuidv4 } from "uuid";
import { skillsAndProjectPageCategory } from "../../utils/constants";
import SkillsAndProjectPageCard from "../skillsAndProjectsPageCard";
import * as StyledComponent from "./styledComponent";

const SkillsAndProjects = ({ route }) => {
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
                        {skillsAndProjectPageCategory.map((category, index) => (
                            <SkillsAndProjectPageCard
                                key={uuidv4()}
                                categoryDetails={{ ...category, index }}
                            />
                        ))}
                    </StyledComponent.SkillsAndProjectsPageCardsBgContainer>
                </StyledComponent.SkillsAndProjectsPageContentBgContainer>
            </StyledComponent.SkillsAndProjectsSectionBodyContainer>
        </StyledComponent.SkillsAndProjectsPageBgContainer>
    );
};

export default SkillsAndProjects;
