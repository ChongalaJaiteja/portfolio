import SkillsAndProjectionSectionTabs from "../skillAndProjectSectionTabs";
import { useParams } from "react-router-dom";
import { getDevelopmentPageData } from "../../utils/constants";
import * as StyledComponent from "./styledComponent";

const DevelopmentDomainPage = () => {
    const { id } = useParams();
    const { domainDetails } = getDevelopmentPageData(id);
    return (
        <>
            <StyledComponent.DevelopmentDomainPageBgContainer>
                <StyledComponent.DevelopmentDomainSectionBodyContainer>
                    <StyledComponent.DevelopmentDomainPageContentBgContainer>
                        <SkillsAndProjectionSectionTabs
                            domainDetails={domainDetails}
                        />
                    </StyledComponent.DevelopmentDomainPageContentBgContainer>
                </StyledComponent.DevelopmentDomainSectionBodyContainer>
            </StyledComponent.DevelopmentDomainPageBgContainer>
        </>
    );
};

export default DevelopmentDomainPage;
