import * as StyledComponent from "./styledComponent";

const SocialMediaHandleItem = ({ socialMediaDetails }) => {
    const { link, name, icon } = socialMediaDetails;

    return (
        <StyledComponent.ContactListItem>
            <StyledComponent.ContactListItemLink href={link}>
                {icon}
            </StyledComponent.ContactListItemLink>
        </StyledComponent.ContactListItem>
    );
};
export default SocialMediaHandleItem;
