import * as StyledComponent from "./styledComponent";

const SocialMediaHandleItem = ({ socialMediaDetails }) => {
    const animateSocialMediaHandles = {
        initial: { opacity: 0, x: 15 },
        animate: (index) => ({
            opacity: 1,
            x: 0,
            transition: {
                delay: 0.25 * index,
                type: "spring",
            },
        }),
    };
    const { link, name, icon, index } = socialMediaDetails;

    return (
        <StyledComponent.ContactListItem
            variants={animateSocialMediaHandles}
            initial="initial"
            whileInView="animate"
            custom={index}
            viewport={{ once: true }}
        >
            <StyledComponent.ContactListItemLink href={link} target="_blank">
                {icon}
            </StyledComponent.ContactListItemLink>
        </StyledComponent.ContactListItem>
    );
};
export default SocialMediaHandleItem;
