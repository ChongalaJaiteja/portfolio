import { getImageUrl } from "../../utils/imageUtil";
import * as StyledComponent from "./styledComponent";
import { v4 as uuidv4 } from "uuid";

const DevelopmentDomainCard = ({ domain }) => {
    const { id, name, image, description, domainDetails } = domain;

    return (
        <StyledComponent.DomainItemBgContainer>
            <StyledComponent.StyledLink to={`/portfolio/development/${id}`}>
                <StyledComponent.DomainItemImageBgContainer>
                    <StyledComponent.DomainItemImage
                        src={getImageUrl(image)}
                        alt={name}
                    />
                </StyledComponent.DomainItemImageBgContainer>
                <StyledComponent.DomainItemContentBgContainer>
                    <StyledComponent.DomainHeading>
                        {name}
                    </StyledComponent.DomainHeading>
                    {/* <StyledComponent.DomainDescription>
                    {description}
                </StyledComponent.DomainDescription> */}
                    <StyledComponent.DomainDetailsBgContainer>
                        {Object.keys(domainDetails).map((keyname) => (
                            <StyledComponent.DomainDetailsItem key={uuidv4()}>
                                {keyname}
                                <StyledComponent.DomainDetailsItemCount>
                                    {domainDetails[keyname].length}
                                </StyledComponent.DomainDetailsItemCount>
                            </StyledComponent.DomainDetailsItem>
                        ))}
                    </StyledComponent.DomainDetailsBgContainer>
                </StyledComponent.DomainItemContentBgContainer>
            </StyledComponent.StyledLink>
        </StyledComponent.DomainItemBgContainer>
    );
};

export default DevelopmentDomainCard;
