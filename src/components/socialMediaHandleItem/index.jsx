import * as StyledComponent from "./styledComponent";

const SocialMediaHandleItem = ({ socialMediaDetails }) => {
    const { link, url, name } = socialMediaDetails;

    return (
        <StyledComponent.ContactListItem>
            <StyledComponent.ContactListItemLink href={link}>
                <StyledComponent.ContactListItemImg src={url} alt={name} />
            </StyledComponent.ContactListItemLink>
        </StyledComponent.ContactListItem>
    );
};
export default SocialMediaHandleItem;
