import { aboutMe } from "../../constants";
import * as StyledComponent from "./styledComponent";

const About = () => {
    return (
        <StyledComponent.AboutPageBgContainer id="about">
            <StyledComponent.AboutPageHeading>
                About Me
            </StyledComponent.AboutPageHeading>

            <StyledComponent.AboutPageContentBgContainer>
                <StyledComponent.AboutPageProfileBgContainer>
                    <StyledComponent.AboutPageProfileBorderContainer>
                        <StyledComponent.ProfileImg src="/profile.jpg" />
                    </StyledComponent.AboutPageProfileBorderContainer>
                </StyledComponent.AboutPageProfileBgContainer>

                <StyledComponent.AboutPageDescription>
                    {aboutMe}
                </StyledComponent.AboutPageDescription>
            </StyledComponent.AboutPageContentBgContainer>
        </StyledComponent.AboutPageBgContainer>
    );
};

export default About;
