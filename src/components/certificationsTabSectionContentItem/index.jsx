import { v4 as uuidv4 } from "uuid";
import { useState } from "react";
import * as StyledComponent from "./styledComponent";
import LazyImageLoader from "../lazyImageLoader";
import { getImageUrl } from "../../utils/imageUtil";

const CertificationsTabSectionContentItem = ({ itemDetails, index }) => {
    const { name, image, institute, skills, link, id } = itemDetails;

    const animateCertificationsItem = {
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
    const animateSkills = {
        initial: { opacity: 0, y: 20 },
        animate: (index) => ({
            opacity: 1,
            y: 0,
            transition: {
                delay: 0.1 * index,
                type: "spring",
            },
        }),
    };

    const [showSkillsMap, setShowSkillsMap] = useState({});

    const toggleSkills = (id) => {
        setShowSkillsMap((prevMap) => ({
            ...prevMap,
            [id]: !prevMap[id],
        }));
    };

    const handleViewCertificate = () => {
        if (link.split("/").pop().toLowerCase().endsWith(".pdf")) {
            window.open(getImageUrl(link), "_blank");
        } else {
            window.open(link, "_blank");
        }
    };

    return (
        <StyledComponent.CertificationsItem
            initial="initial"
            variants={animateCertificationsItem}
            whileInView="animate"
            custom={index}
            viewport={{ once: true }}
            whileHover={{ scale: 1.04 }}
            layout
            transition={{
                opacity: { ease: "linear" },
                layout: { duration: 0.3 },
            }}
        >
            <StyledComponent.ImageContainer>
                <LazyImageLoader
                    altName={name}
                    imageSrc={image}
                    styledComponent={StyledComponent.CertificationsItemImage}
                />
            </StyledComponent.ImageContainer>

            <StyledComponent.ContentContainer>
                <StyledComponent.CertificateHeading>
                    {name}
                </StyledComponent.CertificateHeading>
                <StyledComponent.CertificateProvidedInstituteContainer>
                    <StyledComponent.InstituteIcon />
                    <StyledComponent.InstituteText>
                        {institute}
                    </StyledComponent.InstituteText>
                </StyledComponent.CertificateProvidedInstituteContainer>

                <StyledComponent.CertificateCardSkillsTitle
                    onClick={() => toggleSkills(id)}
                >
                    <StyledComponent.ArrowRightIcon
                        rotateArrow={showSkillsMap[id]}
                    />
                    Skills
                </StyledComponent.CertificateCardSkillsTitle>

                {Object.keys(showSkillsMap).length !== 0 &&
                    showSkillsMap[id] && (
                        <StyledComponent.CertificateCardSkillsContainer
                            initial={{ scaleY: 0 }}
                            animate={{ scaleY: 1 }}
                            transition={{ duration: 0.3 }}
                        >
                            {skills.map((skillName, index) => (
                                <StyledComponent.CertificateCardSkillItem
                                    variants={animateSkills}
                                    initial="initial"
                                    whileInView="animate"
                                    custom={index}
                                    viewport={{ once: true }}
                                    key={uuidv4()}
                                >
                                    {skillName}
                                </StyledComponent.CertificateCardSkillItem>
                            ))}
                        </StyledComponent.CertificateCardSkillsContainer>
                    )}

                <StyledComponent.ViewCertificateBtn
                    onClick={handleViewCertificate}
                >
                    View Certificate
                </StyledComponent.ViewCertificateBtn>
            </StyledComponent.ContentContainer>
        </StyledComponent.CertificationsItem>
    );
};
export default CertificationsTabSectionContentItem;
