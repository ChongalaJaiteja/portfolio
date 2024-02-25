import { aboutMe } from "../../utils/constants";
import * as StyledComponent from "./styledComponent";

const About = ({ route }) => {
    return (
        <StyledComponent.AboutPageBgContainer id={route}>
            <StyledComponent.AboutPageHeading>
                About Me
            </StyledComponent.AboutPageHeading>

            <StyledComponent.AboutPageSectionBodyContainer>
                <StyledComponent.AboutPageContentBgContainer>
                    <StyledComponent.AboutPageProfileBgContainer
                        variants={{
                            initial: {
                                opacity: 0,
                                x: 13,
                            },
                            animate: {
                                opacity: 1,
                                x: 0,
                            },
                            transition: {
                                duration: 1.5,
                                type: "spring",
                            },
                        }}
                        initial="initial"
                        whileInView="animate"
                        viewport={{ amount: 0.5, once: true }}
                        transition="transition"
                    >
                        <StyledComponent.AboutPageProfileBorderContainer>
                            <StyledComponent.ProfileImg src="/profile.jpg" />
                        </StyledComponent.AboutPageProfileBorderContainer>
                    </StyledComponent.AboutPageProfileBgContainer>

                    <StyledComponent.AboutPageDescription
                        variants={{
                            initial: {
                                opacity: 0,
                                x: -13,
                            },
                            animate: {
                                opacity: 1,
                                x: 0,
                            },
                            transition: {
                                duration: 1.5,
                                type: "spring",
                            },
                        }}
                        initial="initial"
                        whileInView="animate"
                        viewport={{ amount: 0.5, once: true }}
                        transition="transition"
                    >
                        {aboutMe}
                    </StyledComponent.AboutPageDescription>
                </StyledComponent.AboutPageContentBgContainer>
            </StyledComponent.AboutPageSectionBodyContainer>
        </StyledComponent.AboutPageBgContainer>
    );
};

export default About;
