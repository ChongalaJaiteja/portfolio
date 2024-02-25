import { SkillsAndProjectPageCategory } from "../../utils/constants";
import * as StyledComponent from "./styledComponent";

const SkillsAndProjects = ({ route }) => {
    return (
        <StyledComponent.SkillsAndProjectsPageBgContainer id={route}>
            <StyledComponent.SkillsAndProjectsPageHeading>
                Skills & Projects
            </StyledComponent.SkillsAndProjectsPageHeading>
            <StyledComponent.SkillsAndProjectsSectionBodyContainer>
                <StyledComponent.SkillsAndProjectsPageContentBgContainer>
                    <StyledComponent.SkillsAndProjectsPageImgBgContainer>
                        <StyledComponent.SkillsAndProjectsPageImg src="/webdev.svg" />
                    </StyledComponent.SkillsAndProjectsPageImgBgContainer>
                    <StyledComponent.SkillsAndProjectsPageCardsBgContainer>
                        {SkillsAndProjectPageCategory.map((category) => (
                            <StyledComponent.SkillsAndProjectsPageCard
                                key={category.id}
                                bgColor={category.bgColor}
                            >
                                {category.icon}
                                <StyledComponent.SkillsAndProjectsPageCardMainHeading>
                                    {category.title}
                                </StyledComponent.SkillsAndProjectsPageCardMainHeading>
                            </StyledComponent.SkillsAndProjectsPageCard>
                        ))}
                    </StyledComponent.SkillsAndProjectsPageCardsBgContainer>
                </StyledComponent.SkillsAndProjectsPageContentBgContainer>
            </StyledComponent.SkillsAndProjectsSectionBodyContainer>
        </StyledComponent.SkillsAndProjectsPageBgContainer>
    );
};

export default SkillsAndProjects;
