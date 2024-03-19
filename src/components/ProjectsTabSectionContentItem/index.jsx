import * as StyledComponent from "./styledComponent";

const ProjectsTabSectionContentItem = ({ itemDetails, index, id }) => {
    const { icon, name } = itemDetails;
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
            <StyledComponent.ProjectItemIconBgContainer>
                {icon}
            </StyledComponent.ProjectItemIconBgContainer>
            <StyledComponent.ProjectItemName>
                {name}
            </StyledComponent.ProjectItemName>
        </StyledComponent.ProjectItem>
    );
};
export default ProjectsTabSectionContentItem;
