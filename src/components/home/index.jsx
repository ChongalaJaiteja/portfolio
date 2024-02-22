import { Typewriter } from "react-simple-typewriter";
import * as LottiePlayer from "@lottiefiles/lottie-player";
import developerImg from "../../assets/webdev.svg";
import { contactLinks } from "../../constants";
import * as StyledComponent from "./styledComponent";

const Home = () => {
    const roles = ["Web Developer", "Competitive Coder", "AI Enthusiast"];

    const openResume = () => {
        window.open("/resume.pdf", "_blank");
    };
    return (
        <StyledComponent.HomeBgContainer id="/">
            <StyledComponent.AnimatedDevContainer>
                <lottie-player
                    src="https://lottie.host/a5408547-31b3-4c65-9ae0-3b369cc6e275/UxKJmuE8jW.json"
                    background="transparent"
                    speed={0.7}
                    loop
                    autoplay
                    direction={1}
                    mode="normal"
                ></lottie-player>
            </StyledComponent.AnimatedDevContainer>

            <StyledComponent.HomeContentContainer>
                <StyledComponent.GreetingHeading>
                    Hi <StyledComponent.HiEmoji>👋</StyledComponent.HiEmoji>, My
                    name is{" "}
                    <StyledComponent.MyNameSpan>
                        Jai Teja
                    </StyledComponent.MyNameSpan>
                    <br />I am a{" "}
                    <StyledComponent.MyNameSpan>
                        <Typewriter
                            words={roles}
                            loop={true}
                            cursor
                            typeSpeed={80}
                            deleteSpeed={50}
                            delaySpeed={1000}
                        />
                    </StyledComponent.MyNameSpan>
                </StyledComponent.GreetingHeading>
                <StyledComponent.HomeContentPara>
                    I am a Full-Stack Developer. I am currently studying
                    computer science.
                </StyledComponent.HomeContentPara>

                <StyledComponent.ContactLinksListContainer>
                    {contactLinks.map(({ id, link, url, name }) => (
                        <StyledComponent.ContactListItem key={id}>
                            <StyledComponent.ContactListItemLink href={link}>
                                <StyledComponent.ContactListItemImg
                                    src={url}
                                    alt={name}
                                />
                            </StyledComponent.ContactListItemLink>
                        </StyledComponent.ContactListItem>
                    ))}
                </StyledComponent.ContactLinksListContainer>

                <StyledComponent.ResumeBtn onClick={openResume}>
                    <StyledComponent.ResumeBtnText>
                        Resume
                    </StyledComponent.ResumeBtnText>
                    {/* <StyledComponent.DownloadBtnIcon /> */}
                </StyledComponent.ResumeBtn>
            </StyledComponent.HomeContentContainer>
            {/* <img src={developerImg} /> */}
        </StyledComponent.HomeBgContainer>
    );
};

export default Home;
