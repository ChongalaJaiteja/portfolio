import * as StyledComponent from "./styledComponent";
import { myEmailId } from "../../utils/constants";

const Contact = ({ route }) => {
    return (
        <StyledComponent.ContactPageBgContainer id={route}>
            <StyledComponent.ContactPageHeading>
                Contact
            </StyledComponent.ContactPageHeading>

            <StyledComponent.ContactPageSectionBodyContainer>
                <StyledComponent.ContactPageContentBgContainer>
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
                                Submit
                            </StyledComponent.ContactFormSubmitBtn>
                        </StyledComponent.ContactFormInputFieldsBgContainer>
                    </StyledComponent.ContactFormBgContainer>

                    <StyledComponent.ContactSocialAccountsBgContainer>
                        <StyledComponent.EmailMeContainer>
                            <StyledComponent.EmailIcon />
                            <StyledComponent.SocialLinkText
                                href={`mailto:${myEmailId}`}
                            >
                                Email Me
                            </StyledComponent.SocialLinkText>
                        </StyledComponent.EmailMeContainer>
                    </StyledComponent.ContactSocialAccountsBgContainer>
                </StyledComponent.ContactPageContentBgContainer>
            </StyledComponent.ContactPageSectionBodyContainer>
        </StyledComponent.ContactPageBgContainer>
    );
};

export default Contact;
