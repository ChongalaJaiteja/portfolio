import ProjectsTabSectionContentItem from "../projectsTabSectionContentItem";
import * as StyledComponent from "./styledComponent";
import { v4 as uuidv4 } from "uuid";
import LazyImageLoader from "../lazyImageLoader";

const ProjectsTabSectionContentList = ({ data, index }) => {
    const { category = "", ...rest } = data;
    const categoryItemsList = Object.values(rest)[0];
    const animateProjectsItemCategory = {
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
        <StyledComponent.ProjectItemBgContainer
            initial="initial"
            variants={animateProjectsItemCategory}
            whileInView="animate"
            custom={index}
            viewport={{ once: true }}
        >
            <StyledComponent.ProjectCategoryBgContainer>
                {category && (
                    <StyledComponent.ProjectCategoryMainHeading>
                        {category}
                    </StyledComponent.ProjectCategoryMainHeading>
                )}

                <StyledComponent.ProjectsCategoryItemsBgContainer>
                    {categoryItemsList.map((categoryItems, index) => (
                        <ProjectsTabSectionContentItem
                            key={uuidv4()}
                            itemDetails={{
                                ...categoryItems,
                                category,
                                id: index + 1,
                            }}
                            index={index}
                        />
                    ))}
                </StyledComponent.ProjectsCategoryItemsBgContainer>
            </StyledComponent.ProjectCategoryBgContainer>
        </StyledComponent.ProjectItemBgContainer>
    );
};

export default ProjectsTabSectionContentList;
