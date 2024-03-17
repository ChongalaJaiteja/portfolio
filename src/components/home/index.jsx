import { Typewriter } from "react-simple-typewriter";
import * as LottiePlayer from "@lottiefiles/lottie-player";
import SocialMediaHandles from "../socialMediaHandles";
import * as StyledComponent from "./styledComponent";
import resume from "../../assets/resume.pdf";

const Home = ({ route }) => {
    const roles = ["Web Developer", "Competitive Coder", "AI Enthusiast"];

    const openResume = () => {
        window.open(resume, "_blank");
    };
    return (
        <StyledComponent.HomeBgContainer id={route}>
            <StyledComponent.AnimatedDevContainer
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

            <StyledComponent.HomeContentContainer
                variants={{
                    initial: {
                        opacity: 0,
                        x: -13,
                    },
                    animate: {
                        opacity: 1,
                        x: 0,
                        transition: {
                            duration: 1.7,
                            type: "spring",
                        },
                    },
                }}
                initial="initial"
                whileInView="animate"
                viewport={{ amount: 0.5, once: true }}
            >
                <StyledComponent.GreetingHeading>
                    Hi all, I'm{" "}
                    <StyledComponent.MyNameSpan>
                        Jai Teja
                    </StyledComponent.MyNameSpan>
                    <StyledComponent.HiEmoji>👋</StyledComponent.HiEmoji>
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
                    A passionate Full Stack Software Developer 🚀 having an
                    experience of building Web applications.
                </StyledComponent.HomeContentPara>

                <SocialMediaHandles />
                <StyledComponent.ResumeBtn onClick={openResume}>
                    Resume
                    {/* <StyledComponent.DownloadBtnIcon /> */}
                </StyledComponent.ResumeBtn>
            </StyledComponent.HomeContentContainer>
        </StyledComponent.HomeBgContainer>
    );
};

export default Home;
