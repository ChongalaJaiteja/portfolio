import * as StyledComponent from "./styledComponent";
import { v4 as uuidv4 } from "uuid";

import SkillsTabSectionItem from "../skillsTabSectionItem";

const SkillsTabSection = ({ skillsData }) => {
    return (
        <StyledComponent.SkillSetBgContainer>
            {skillsData.map((skills) => (
                <SkillsTabSectionItem key={uuidv4()} skillsItemData={skills} />
            ))}
        </StyledComponent.SkillSetBgContainer>
    );
};

export default SkillsTabSection;
