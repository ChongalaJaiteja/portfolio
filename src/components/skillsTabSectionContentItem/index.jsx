import * as StyledComponent from "./styledComponent";

const SkillsTabSectionContentItem = ({ itemDetails, index, id }) => {
    const { icon, name } = itemDetails;
    const animateSkillsItem = {
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
        <StyledComponent.SkillItem
            initial="initial"
            variants={animateSkillsItem}
            whileInView="animate"
            custom={index}
            viewport={{ once: true }}
            whileHover={{ scale: 1.04 }}
        >
            <StyledComponent.SkillItemIconBgContainer>
                {icon}
            </StyledComponent.SkillItemIconBgContainer>
            <StyledComponent.SkillItemName>
                {name}
            </StyledComponent.SkillItemName>
        </StyledComponent.SkillItem>
    );
};

export default SkillsTabSectionContentItem;
