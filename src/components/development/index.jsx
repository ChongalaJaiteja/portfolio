import { development } from "../../utils/constants";
import NavBar from "../navbar";
import * as StyledComponent from "./styledComponent";
import DevelopmentDomainCard from "../developmentDomainCard";

const Development = () => {
    return (
        <>
            <NavBar hideNavLinks={true} />
            <StyledComponent.DevelopmentPageBgContainer>
                <StyledComponent.DevelopmentSectionBodyContainer>
                    <StyledComponent.DevelopmentPageContentBgContainer>
                        <StyledComponent.DomainsListBgContainer>
                            {development.map((domain) => (
                                <DevelopmentDomainCard
                                    key={domain.id}
                                    domain={domain}
                                />
                            ))}
                        </StyledComponent.DomainsListBgContainer>
                    </StyledComponent.DevelopmentPageContentBgContainer>
                </StyledComponent.DevelopmentSectionBodyContainer>
            </StyledComponent.DevelopmentPageBgContainer>
        </>
    );
};

export default Development;
