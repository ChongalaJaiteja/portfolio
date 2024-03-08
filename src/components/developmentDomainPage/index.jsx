import { useParams } from "react-router-dom";
import { getDevelopmentPageData } from "../../utils/constants";
// import NavBar from "../navbar";
import * as StyledComponent from "./styledComponent";
const DevelopmentDomainPage = () => {
    const { id } = useParams();
    const { domainDetails } = getDevelopmentPageData(id);
    console.log(domainDetails);
    return (
        <>
            {/* <NavBar hideNavLinks={true} /> */}
            <StyledComponent.DevelopmentDomainPageBgContainer>
                <StyledComponent.DevelopmentDomainSectionBodyContainer>
                    <StyledComponent.DevelopmentDomainPageContentBgContainer>
                        <h1>hi</h1>
                    </StyledComponent.DevelopmentDomainPageContentBgContainer>
                </StyledComponent.DevelopmentDomainSectionBodyContainer>
            </StyledComponent.DevelopmentDomainPageBgContainer>
        </>
    );
};

export default DevelopmentDomainPage;
