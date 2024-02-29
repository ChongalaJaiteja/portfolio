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
                        I am a full stack developer, I build full stack
                        websites,I will solve all your business problems.
                        <br />
                        <br />
                        I am a specialized MERN stack developer. your go-to
                        solution for crafting full-stack websites. With a
                        passion for problem-solving and innovation. I excel in
                        creating seamless digital experiences tailored to your
                        business needs.
                        <br />
                        <br />
                        Specializing in MongoDB. Express.js. React.js. and
                        Node.js,I leverage the power of the MERN stack to
                        deliver robust and dynamic solutions that exceed
                        expectations. Whether you need a sleek website. I have
                        the skills to bring your vision to life.
                        <br /> My commitment to clean, efficient code ensures
                        easy maintenance and scalability. while my understanding
                        of business challenges enables me to develop custom
                        solutions that address your specific needs.
                    </StyledComponent.AboutPageDescription>
                </StyledComponent.AboutPageContentBgContainer>
            </StyledComponent.AboutPageSectionBodyContainer>
        </StyledComponent.AboutPageBgContainer>
    );
};

export default About;
