import * as LottiePlayer from "@lottiefiles/lottie-player";
import SocialMediaHandles from "../socialMediaHandles";
import * as StyledComponent from "./styledComponent";

const Contact = ({ route }) => {
    return (
        <StyledComponent.ContactPageBgContainer id={route}>
            <StyledComponent.ContactPageHeading>
                Contact
            </StyledComponent.ContactPageHeading>

            <StyledComponent.ContactPageSectionBodyContainer>
                <StyledComponent.ContactPageContentBgContainer>
                    <StyledComponent.ContactSectionAnimationImgBgContainer>
                        <lottie-player
                            src="https://lottie.host/a34e96a6-1509-4753-b093-3bd5cbf1abf6/fHhZLyaUAj.json"
                            background="transparent"
                            speed={0.7}
                            style={{width:"85%"}}
                            loop
                            autoplay
                            direction={1}
                            mode="normal"
                        ></lottie-player>
                        <StyledComponent.SocialMediaHandlesBgContainerLg>
                            <h1>Social Media</h1>
                            <SocialMediaHandles />
                        </StyledComponent.SocialMediaHandlesBgContainerLg>
                    </StyledComponent.ContactSectionAnimationImgBgContainer>

                    <StyledComponent.ContactFormBgContainer
                        action="https://formspree.io/f/xvoerndy"
                        method="POST"
                    >
                        <StyledComponent.ContactFormContentBgContainer>
                            <StyledComponent.ContactFormHeading>
                                Connect with me
                            </StyledComponent.ContactFormHeading>
                            <StyledComponent.ContactFormDescription>
                                If you want to know more about me or my work, or
                                if you would just like to say hello, send me a
                                message. I'd love to hear from you.
                            </StyledComponent.ContactFormDescription>
                        </StyledComponent.ContactFormContentBgContainer>

                        <StyledComponent.ContactFormInputFieldsBgContainer>
                            <StyledComponent.ContactFormInputField
                                type="text"
                                name="name"
                                id="full-name"
                                placeholder="Your Name*"
                                required
                                autoComplete="off"
                            />
                            <StyledComponent.ContactFormInputField
                                id="email"
                                type="email"
                                name="email"
                                placeholder="Your Email*"
                                required
                                autoComplete="off"
                            />

                            <StyledComponent.ContactFormMessageInputField
                                rows={4}
                                id="message"
                                name="message"
                                placeholder="Your Message*"
                                required
                                autoComplete="off"
                            />

                            <StyledComponent.ContactFormSubmitBtn type="submit">
                                Send
                            </StyledComponent.ContactFormSubmitBtn>
                        </StyledComponent.ContactFormInputFieldsBgContainer>
                    </StyledComponent.ContactFormBgContainer>

                    <StyledComponent.SocialMediaHandlesBgContainerSm>
                        <h1>Social Media</h1>
                        <SocialMediaHandles />
                    </StyledComponent.SocialMediaHandlesBgContainerSm>
                </StyledComponent.ContactPageContentBgContainer>
            </StyledComponent.ContactPageSectionBodyContainer>
        </StyledComponent.ContactPageBgContainer>
    );
};

export default Contact;
