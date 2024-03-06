import NavBar from "../navbar";
import * as StyledComponent from "./styledCompoent";

const Development = () => {
    return (
        <>
            <NavBar hideNavLinks={true} />
            <StyledComponent.DevelopmentPageBgContainer>
                <StyledComponent.DevelopmentSectionBodyContainer>
                    <StyledComponent.DevelopmentPageContentBgContainer>
                        <h1>Development</h1>
                    </StyledComponent.DevelopmentPageContentBgContainer>
                </StyledComponent.DevelopmentSectionBodyContainer>
            </StyledComponent.DevelopmentPageBgContainer>
        </>
    );
};

export default Development;
