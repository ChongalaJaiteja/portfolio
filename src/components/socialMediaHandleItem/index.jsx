import * as StyledComponent from "./styledComponent";

const SocialMediaHandleItem = ({ socialMediaDetails }) => {
    const animateSocialMediaHandles = {
        initial: { opacity: 0, x: 100 },
        animate: {
            opacity: 1,
            x: 0,
            transition: (index) => ({
                delay: 1 * index,
                type: "spring",
            }),
        },
    };
    const { link, name, icon, index } = socialMediaDetails;

    return (
        <StyledComponent.ContactListItem
            variants={animateSocialMediaHandles}
            initial="initial"
            whileInView="animate"
            custom={index}
            viewport={{ once: true, amount: 0.7 }}
        >
            <StyledComponent.ContactListItemLink href={link}>
                {icon}
            </StyledComponent.ContactListItemLink>
        </StyledComponent.ContactListItem>
    );
};
export default SocialMediaHandleItem;
