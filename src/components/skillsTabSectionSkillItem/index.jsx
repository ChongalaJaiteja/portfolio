import * as StyledComponent from "./styledComponent";

const SkillsTabSectionSkillItem = ({ skillDetails }) => {
    const { icon, name } = skillDetails;
    return (
        <StyledComponent.SkillItem>
            <StyledComponent.SkillItemIconBgContainer>
                {icon}
            </StyledComponent.SkillItemIconBgContainer>
            <StyledComponent.SkillItemName>
                {name}
            </StyledComponent.SkillItemName>
        </StyledComponent.SkillItem>
    );
};
export default SkillsTabSectionSkillItem;
