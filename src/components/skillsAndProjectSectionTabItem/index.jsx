import * as StyledComponent from "./styledComponent";

const SkillsAndProjectionSectionTabItem = ({ tabLabel, onSelectTab }) => {
    const handleTabClick = () => {
        onSelectTab(tabLabel);
    };
    return <li onClick={handleTabClick}>{tabLabel}</li>;
};
export default SkillsAndProjectionSectionTabItem;
