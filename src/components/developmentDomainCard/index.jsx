import { getImageUrl } from "../../utils/imageUtil";
import * as StyledComponent from "./styledComponent";
import { v4 as uuidv4 } from "uuid";
import BlurImage from "../blurImage";

const DevelopmentDomainCard = ({ domain }) => {
    const { id, name, image, hashImageUrl, description, domainDetails, index } =
        domain;
    const animateDomainCard = {
        initial: { opacity: 0, y: 22 },
        animate: (index) => ({
            opacity: 1,
            y: 0,
            transition: {
                delay: 0.2 * index,
                type: "spring",
            },
        }),
    };

    const animateDomainDetailsItem = {
        initial: { opacity: 0, rotate: "6deg" },
        animate: (index) => ({
            opacity: 1,
            rotate: "0deg",
            transition: {
                delay: 0.3 * index,
                type: "spring",
            },
        }),
    };
    return (
        <StyledComponent.DomainItemBgContainer
            variants={animateDomainCard}
            initial="initial"
            whileInView="animate"
            custom={index}
        >
            <StyledComponent.StyledLink to={`/portfolio/development/${id}`}>
                <StyledComponent.DomainItemImageBgContainer>
                    <BlurImage hash={hashImageUrl} width={400} height={300}>
                        <StyledComponent.DomainItemImage
                            src={getImageUrl(image)}
                            alt={name}
                        />
                    </BlurImage>
                </StyledComponent.DomainItemImageBgContainer>
                <StyledComponent.DomainItemContentBgContainer>
                    <StyledComponent.DomainHeading>
                        {name}
                    </StyledComponent.DomainHeading>
                    {/* <StyledComponent.DomainDescription>
                    {description}
                </StyledComponent.DomainDescription> */}
                    <StyledComponent.DomainDetailsBgContainer>
                        {Object.keys(domainDetails).map((keyname, index) => (
                            <StyledComponent.DomainDetailsItem
                                key={uuidv4()}
                                variants={animateDomainDetailsItem}
                                custom={index}
                                initial="initial"
                                whileInView="animate"
                            >
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
