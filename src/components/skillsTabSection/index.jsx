import * as StyledComponent from "./styledComponent";
import { v4 as uuidv4 } from "uuid";
import SkillsTabSectionContentList from "../SkillsTabSectionContentList";

const SkillsTabSection = ({ skillsData, id }) => {
    console.log(id);
    console.log(skillsData);
    return (
        <StyledComponent.SkillSetBgContainer>
            {skillsData.map((skills, index) => (
                <SkillsTabSectionContentList
                    key={uuidv4()}
                    data={skills}
                    index={index}
                    id={id}
                />
            ))}
        </StyledComponent.SkillSetBgContainer>
    );
};

export default SkillsTabSection;
