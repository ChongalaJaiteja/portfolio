import * as StyledComponent from "./styledComponent";

const ToolsTabSectionContentItem = ({ itemDetails, index }) => {
    const { icon, name } = itemDetails;
    const animateToolsItem = {
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
        <StyledComponent.ToolItem
            initial="initial"
            variants={animateToolsItem}
            whileInView="animate"
            custom={index}
            viewport={{ once: true }}
            whileHover={{ scale: 1.04 }}
        >
            <StyledComponent.ToolItemIconBgContainer>
                {icon}
            </StyledComponent.ToolItemIconBgContainer>
            <StyledComponent.ToolItemName>{name}</StyledComponent.ToolItemName>
        </StyledComponent.ToolItem>
    );
};

export default ToolsTabSectionContentItem;
