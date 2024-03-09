import * as StyledComponent from "./styledComponent";

const SkillsAndProjectionSectionTabItem = ({
    tabLabel,
    onSelectTab,
    isActive,
}) => {
    const handleTabClick = () => {
        onSelectTab(tabLabel);
    };
    return (
        <StyledComponent.SkillsAndProjectsTabItemBgContainer
            isActive={isActive}
        >
            <StyledComponent.tabBtn onClick={handleTabClick}>
                {tabLabel}
            </StyledComponent.tabBtn>
        </StyledComponent.SkillsAndProjectsTabItemBgContainer>
    );
};
export default SkillsAndProjectionSectionTabItem;
