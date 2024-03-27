import * as StyledComponent from "./styledComponent";
import { v4 as uuidv4 } from "uuid";
import LazyImageLoader from "../lazyImageLoader";

const DevelopmentDomainCard = ({ domain }) => {
    const { id, name, image, description, sectionDetails, index } = domain;
    console.log("domain", sectionDetails);
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

    const getDomainDetailsItemCount = (itemName) => {
        return sectionDetails[itemName].reduce(
            (count, item) => count + Object.values(item)[1].length,
            0
        );
    };
    return (
        <StyledComponent.DomainItemBgContainer
            variants={animateDomainCard}
            initial="initial"
            whileInView="animate"
            custom={index}
        >
            <StyledComponent.StyledLink to={`${id}`}>
                <StyledComponent.DomainItemImageBgContainer>
                    <LazyImageLoader altName={name} imageSrc={image} />
                </StyledComponent.DomainItemImageBgContainer>
                <StyledComponent.DomainItemContentBgContainer>
                    <StyledComponent.DomainHeading>
                        {name}
                    </StyledComponent.DomainHeading>
                    {/* <StyledComponent.DomainDescription>
                    {description}
                </StyledComponent.DomainDescription> */}
                    <StyledComponent.DomainDetailsBgContainer>
                        {Object.keys(sectionDetails).map((keyname, index) => (
                            <StyledComponent.DomainDetailsItem
                                key={uuidv4()}
                                variants={animateDomainDetailsItem}
                                custom={index}
                                initial="initial"
                                whileInView="animate"
                            >
                                {keyname}
                                <StyledComponent.DomainDetailsItemCount>
                                    {getDomainDetailsItemCount(keyname)}
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
