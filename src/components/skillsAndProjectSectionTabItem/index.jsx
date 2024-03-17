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
            <StyledComponent.tabBtn
                onClick={handleTabClick}
                isActive={isActive}
            >
                {tabLabel}
            </StyledComponent.tabBtn>
            {isActive && <StyledComponent.TabUnderline layoutId="underline" />}
        </StyledComponent.SkillsAndProjectsTabItemBgContainer>
    );
};
export default SkillsAndProjectionSectionTabItem;
