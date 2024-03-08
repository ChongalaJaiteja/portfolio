import { v4 as uuidv4 } from "uuid";
import * as StyledComponent from "./styledComponent";
const Footer = () => {
    const madeWithTechnologiesIcons = [
        <StyledComponent.ReactJsIcon />,
        <StyledComponent.FrameMotionIcon />,
        <StyledComponent.StyledComponentIcon />,
        <StyledComponent.MuiIcon />,
    ];
    return (
        <StyledComponent.FooterBgContainer>
            <StyledComponent.FooterPageSectionBodyContainer>
                <StyledComponent.FooterContentBgContainer>
                    <StyledComponent.ThankYouNoteBgContainer
                        initial={{ opacity: 0 }}
                        whileInView={{
                            opacity: 1,
                            transition: { duration: 0.6, type: "spring" },
                        }}
                        viewport={{ amount: 0.83, once: true }}
                    >
                        <StyledComponent.ThankYouHeading>
                            that's all, folks!
                        </StyledComponent.ThankYouHeading>
                        <StyledComponent.MySignature>
                            Jai teja
                        </StyledComponent.MySignature>
                    </StyledComponent.ThankYouNoteBgContainer>

                    <StyledComponent.MadeWithBgContainer
                        initial={{ opacity: 0 }}
                        whileInView={{
                            opacity: 1,
                            transition: { duration: 0.6, type: "spring" },
                        }}
                        viewport={{ amount: 0.5, once: true }}
                    >
                        <StyledComponent.MadeWithHeading>
                            made with
                        </StyledComponent.MadeWithHeading>
                        <StyledComponent.MadeWithItemsBgContainer>
                            {madeWithTechnologiesIcons.map((icon) => (
                                <StyledComponent.MadeWithItem key={uuidv4()}>
                                    {icon}
                                </StyledComponent.MadeWithItem>
                            ))}
                        </StyledComponent.MadeWithItemsBgContainer>
                        <StyledComponent.PageInstructionsBgContainer>
                            <StyledComponent.InstructionDescription>
                                Hand-coded with 100% human efforts, zero AI.
                                <br />
                                Copyright &copy; {new Date().getFullYear()} Jai
                                teja. All rights reserved.
                                <br />
                                <br />
                                Made with{" "}
                                <StyledComponent.HeartSymbol>
                                    ❤
                                </StyledComponent.HeartSymbol>{" "}
                                by Jai teja
                            </StyledComponent.InstructionDescription>
                        </StyledComponent.PageInstructionsBgContainer>
                    </StyledComponent.MadeWithBgContainer>
                </StyledComponent.FooterContentBgContainer>
            </StyledComponent.FooterPageSectionBodyContainer>
        </StyledComponent.FooterBgContainer>
    );
};
export default Footer;
