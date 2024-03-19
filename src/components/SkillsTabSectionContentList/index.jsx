import { v4 as uuidv4 } from "uuid";
import SkillsTabSectionContentItem from "../skillsTabSectionContentItem";
import * as StyledComponent from "./styledComponent";

const SkillsTabSectionContentList = ({ data, index, id }) => {
    const { category = "", ...rest } = data;
    const categoryItemsList = Object.values(rest)[0];
    const animateSkillsAndProjectsItemCategory = {
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
        <StyledComponent.SkillsAndProjectsItemBgContainer
            initial="initial"
            variants={animateSkillsAndProjectsItemCategory}
            whileInView="animate"
            custom={index}
            viewport={{ once: true }}
        >
            <StyledComponent.SkillsAndProjectsCategoryBgContainer>
                {category && (
                    <StyledComponent.SkillsAndProjectsCategoryMainHeading>
                        {category}
                    </StyledComponent.SkillsAndProjectsCategoryMainHeading>
                )}

                <StyledComponent.SkillsAndProjectsCategoryItemsBgContainer>
                    {categoryItemsList.map((categoryItems, index) => (
                        <SkillsTabSectionContentItem
                            key={uuidv4()}
                            itemDetails={categoryItems}
                            index={index}
                            id={id}
                        />
                    ))}
                    
                </StyledComponent.SkillsAndProjectsCategoryItemsBgContainer>
            </StyledComponent.SkillsAndProjectsCategoryBgContainer>
        </StyledComponent.SkillsAndProjectsItemBgContainer>
    );
};

export default SkillsTabSectionContentList;
