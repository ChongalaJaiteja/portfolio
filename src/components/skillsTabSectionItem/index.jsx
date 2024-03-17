import { v4 as uuidv4 } from "uuid";
import SkillsTabSectionSkillItem from "../skillsTabSectionSkillItem";

import * as StyledComponent from "./styledComponent";

const SkillsTabSectionItem = ({ skillsItemData, index }) => {
    const { category = "", skillSet } = skillsItemData;
    const animateSkillsItemCategory = {
        initial: { opacity: 0, y: 22 },
        animate: (index) => ({
            opacity: 1,
            y: 0,
            transition: {
                delay: 0.16 * index,
                type: "spring",
            },
        }),
    };
    return (
        <StyledComponent.SkillItemBgContainer
            initial="initial"
            variants={animateSkillsItemCategory}
            whileInView="animate"
            custom={index}
            viewport={{ once: true }}
        >
            <StyledComponent.SkillCategoryBgContainer>
                {category && (
                    <StyledComponent.SkillCategoryMainHeading>
                        {category}
                    </StyledComponent.SkillCategoryMainHeading>
                )}

                <StyledComponent.SkillsCategoryItemsBgContainer>
                    {skillSet.map((skillDetails, index) => (
                        <SkillsTabSectionSkillItem
                            key={uuidv4()}
                            skillDetails={skillDetails}
                            index={index}
                        />
                    ))}
                </StyledComponent.SkillsCategoryItemsBgContainer>
            </StyledComponent.SkillCategoryBgContainer>
        </StyledComponent.SkillItemBgContainer>
    );
};

export default SkillsTabSectionItem;
