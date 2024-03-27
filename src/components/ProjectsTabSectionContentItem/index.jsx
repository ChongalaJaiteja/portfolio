import * as StyledComponent from "./styledComponent";
import LazyImageLoader from "../lazyImageLoader";

const ProjectsTabSectionContentItem = ({ itemDetails, index }) => {
    const { projectCard, id, category } = itemDetails;
    const { name, image } = projectCard;

    const animateProjectsItem = {
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
        <StyledComponent.ProjectItem
            initial="initial"
            variants={animateProjectsItem}
            whileInView="animate"
            custom={index}
            viewport={{ once: true }}
            whileHover={{ scale: 1.04 }}
        >
            <StyledComponent.StyledLink
                to={
                    category !== ""
                        ? `projects/${category}/${id}`
                        : `projects/${id}`
                }
            >
                <LazyImageLoader
                    altName={name}
                    imageSrc={image}
                    styledComponent={StyledComponent.ProjectItemImage}
                />
                <StyledComponent.ProjectItemContentBgContainer>
                    <StyledComponent.ProjectItemName>
                        {name}
                    </StyledComponent.ProjectItemName>
                </StyledComponent.ProjectItemContentBgContainer>
            </StyledComponent.StyledLink>
        </StyledComponent.ProjectItem>
    );
};
export default ProjectsTabSectionContentItem;
