import * as StyledComponent from "./styledComponent";
import { programming } from "../../utils/constants";
import SkillsAndProjectionSectionTabs from "../skillAndProjectSectionTabs";

const Programming = () => {
    return (
        <>
            <StyledComponent.ProgrammingPageBgContainer>
                <StyledComponent.ProgrammingSectionBodyContainer>
                    <StyledComponent.ProgrammingPageContentBgContainer>
                        <SkillsAndProjectionSectionTabs
                            sectionDetails={programming}
                        />
                    </StyledComponent.ProgrammingPageContentBgContainer>
                </StyledComponent.ProgrammingSectionBodyContainer>
            </StyledComponent.ProgrammingPageBgContainer>
        </>
    );
};

export default Programming;
