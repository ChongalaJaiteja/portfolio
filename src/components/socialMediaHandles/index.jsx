import * as StyledComponent from "./styledComponent";
import { v4 as uuidv4 } from "uuid";
import { contactLinks } from "../../utils/constants";
import SocialMediaHandleItem from "../socialMediaHandleItem";

const SocialMediaHandles = () => {
    return (
        <StyledComponent.ContactLinksListContainer>
            {contactLinks.map((socialMedia) => (
                <SocialMediaHandleItem
                    key={uuidv4()}
                    socialMediaDetails={socialMedia}
                />
            ))}
        </StyledComponent.ContactLinksListContainer>
    );
};

export default SocialMediaHandles;
