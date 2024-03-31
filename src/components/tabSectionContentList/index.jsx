import { v4 as uuidv4 } from "uuid";
import { Suspense, lazy } from "react";
import Loader from "../loader";
const SkillsTabSectionContentItem = lazy(() =>
    import("../skillsTabSectionContentItem")
);
const ProjectsTabSectionContentItem = lazy(() =>
    import("../projectsTabSectionContentItem")
);

const CertificationsTabSectionContentItem = lazy(() =>
    import("../certificationsTabSectionContentItem")
);
import * as StyledComponent from "./styledComponent";

const TabSectionContentList = ({ data, index, id }) => {
    const { category = "", ...rest } = data;
    const categoryItemsList = Object.values(rest)[0];

    const animateItemCategory = {
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

    const renderCategoryItems = (categoryItems, index) => {
        switch (id) {
            case "skills":
                return (
                    <SkillsTabSectionContentItem
                        key={uuidv4()}
                        itemDetails={categoryItems}
                        index={index}
                        // id={id}
                    />
                );
            case "projects":
                return (
                    <ProjectsTabSectionContentItem
                        key={uuidv4()}
                        itemDetails={{
                            ...categoryItems,
                            category,
                            id: index + 1,
                        }}
                        index={index}
                    />
                );
            case "certifications":
                return (
                    <CertificationsTabSectionContentItem
                        key={categoryItems.id}
                        itemDetails={categoryItems}
                        index={index}
                    />
                );
        }
    };
    return (
        <StyledComponent.CategoryItemBgContainer
            initial="initial"
            variants={animateItemCategory}
            whileInView="animate"
            custom={index}
            viewport={{ once: true }}
        >
            <StyledComponent.CategoryItemContainer>
                {category && (
                    <StyledComponent.CategoryItemMainHeading>
                        {category}
                    </StyledComponent.CategoryItemMainHeading>
                )}

                <StyledComponent.CategoryItemsBgContainer>
                    <Suspense fallback={<Loader />}>
                        {categoryItemsList.map((categoryItems, index) => (
                            <>{renderCategoryItems(categoryItems, index)}</>
                        ))}
                    </Suspense>
                </StyledComponent.CategoryItemsBgContainer>
            </StyledComponent.CategoryItemContainer>
        </StyledComponent.CategoryItemBgContainer>
    );
};

export default TabSectionContentList;
