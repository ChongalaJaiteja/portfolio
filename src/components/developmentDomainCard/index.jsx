import { getImageUrl } from "../../utils/imageUtil";
import * as StyledComponent from "./styledComponent";
import { v4 as uuidv4 } from "uuid";

const DevelopmentDomainCard = ({ domain }) => {
    const { id, name, image, description, domainDetails, index } = domain;
    const animateDomainCard = {
        initial: { opacity: 0, y: 22 },
        animate: {
            opacity: 1,
            y: 0,
            transition: (index) => ({
                delay: 0.2 * index,
                type: "spring",
            }),
        },
    };

    const animateDomainDetailsItem = {
        initial: { opacity: 0 },
        animate: {
            opacity: 1,
            transition: (index) => ({
                delay: 2 * index,
                type: "spring",
            }),
        },
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
                    <StyledComponent.DomainItemImage
                        src={getImageUrl(image)}
                        alt={name}
                        initial={{ opacity: 0.6 }}
                        animate={{
                            opacity: 1,
                            transition: { delay: 0.4, type: "spring" },
                        }}
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
