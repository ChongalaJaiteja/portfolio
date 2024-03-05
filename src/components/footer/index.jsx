import * as StyledComponent from "./styledComponent";

const Footer = () => {
    return (
        <StyledComponent.FooterBgContainer>
            <StyledComponent.FooterPageSectionBodyContainer>
                <StyledComponent.FooterContentBgContainer>
                    <StyledComponent.ThankYouNoteBgContainer>
                        <StyledComponent.ThankYouHeading>
                            that's all, folks!
                        </StyledComponent.ThankYouHeading>
                        <StyledComponent.MySignature>
                            Jai teja
                        </StyledComponent.MySignature>
                    </StyledComponent.ThankYouNoteBgContainer>

                    <StyledComponent.MadeWithBgContainer>
                        <StyledComponent.MadeWithHeading>
                            made with
                        </StyledComponent.MadeWithHeading>
                        <StyledComponent.TechnologiesUsedBgContainer>
                            <StyledComponent.ReactJsIcon />
                            <StyledComponent.FrameMotionIcon />
                            <StyledComponent.StyledComponentIcon />
                        </StyledComponent.TechnologiesUsedBgContainer>
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
