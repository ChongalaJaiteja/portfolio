import { codingProfiles } from "../../utils/constants";
import { v4 as uuidv4 } from "uuid";
import * as LottiePlayer from "@lottiefiles/lottie-player";
import * as StyledComponent from "./styledComponent";

const CodingProfiles = ({ route }) => {
    const animateCodingProfileCard = {
        initial: { opacity: 0, y: 20 },
        animate: (index) => ({
            opacity: 1,
            y: 0,
            transition: {
                delay: 0.4 * index,
                type: "spring",
            },
        }),
    };
    return (
        <StyledComponent.CodingProfilesPageBgContainer id={route}>
            <StyledComponent.CodingProfilesPageHeading>
                Coding Profiles
            </StyledComponent.CodingProfilesPageHeading>

            <StyledComponent.CodingProfilesSectionBodyContainer>
                <StyledComponent.CodingProfilesPageContentBgContainer>
                <StyledComponent.CodingProfilesAnimationBgContainer>
                        <lottie-player
                            src="https://lottie.host/80de392f-2c19-42e4-9460-f04aa34a53a6/F0EqgFkyF7.json"
                            background="transparent"
                            speed={0.7}
                            loop
                            autoplay
                            direction={1}
                            mode="normal"
                        ></lottie-player>
                    </StyledComponent.CodingProfilesAnimationBgContainer>
                    <StyledComponent.CodingProfilesBgContainer>
                        {codingProfiles.map(
                            ({ name, themeColor, link, icon }, index) => (
                                <StyledComponent.CodingProfilesItemContainer
                                    themeColor={themeColor}
                                    key={uuidv4()}
                                    variants={animateCodingProfileCard}
                                    initial="initial"
                                    whileInView="animate"
                                    custom={index}
                                    viewport={{ once: true, amount: 0.8 }}
                                >
                                    <StyledComponent.StyledLink
                                        href={link}
                                        target="_blank"
                                    >
                                        {icon}
                                        <StyledComponent.CodingProfilePlatformName>
                                            {name}
                                        </StyledComponent.CodingProfilePlatformName>
                                    </StyledComponent.StyledLink>
                                </StyledComponent.CodingProfilesItemContainer>
                            )
                        )}
                    </StyledComponent.CodingProfilesBgContainer>
                    
                </StyledComponent.CodingProfilesPageContentBgContainer>
            </StyledComponent.CodingProfilesSectionBodyContainer>
        </StyledComponent.CodingProfilesPageBgContainer>
    );
};

export default CodingProfiles;
