import { v4 as uuidv4 } from "uuid";
import SkillsTabSectionSkillItem from "../skillsTabSectionSkillItem";

import * as StyledComponent from "./styledComponent";

const SkillsTabSectionItem = ({ skillsItemData }) => {
    const { category = "", skillSet } = skillsItemData;
    return (
        <StyledComponent.SkillItemBgContainer>
            <StyledComponent.SkillCategoryBgContainer>
                {category && (
                    <StyledComponent.SkillCategoryMainHeading>
                        {category}
                    </StyledComponent.SkillCategoryMainHeading>
                )}

                <StyledComponent.SkillsCategoryItemsBgContainer>
                    {skillSet.map((skillDetails) => (
                        <SkillsTabSectionSkillItem
                            key={uuidv4()}
                            skillDetails={skillDetails}
                        />
                    ))}
                </StyledComponent.SkillsCategoryItemsBgContainer>
            </StyledComponent.SkillCategoryBgContainer>
        </StyledComponent.SkillItemBgContainer>
    );
};

export default SkillsTabSectionItem;
