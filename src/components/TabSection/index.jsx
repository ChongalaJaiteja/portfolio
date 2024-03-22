import * as StyledComponent from "./styledComponent";
import { Suspense, lazy } from "react";
import { v4 as uuidv4 } from "uuid";
import Loader from "../loader";
const SkillsTabSectionContentList = lazy(() =>
    import("../skillsTabSectionContentList")
);
const ProjectsTabSectionContentList = lazy(() =>
    import("../projectsTabSectionContentList")
);

const CertificationsTabSection = lazy(() =>
    import("../certificationsTabSection")
);

const TabSection = ({ tabSectionData, id }) => {
    // console.log(id);
    // console.log(tabSectionData);
    const renderTabSectionContentList = (tabDataList, index) => {
        switch (id) {
            case "skills":
                return (
                    <SkillsTabSectionContentList
                        key={uuidv4()}
                        data={tabDataList}
                        index={index}
                        id={id}
                    />
                );
            case "projects":
                return (
                    <ProjectsTabSectionContentList
                        key={uuidv4()}
                        data={tabDataList}
                        index={index}
                        id={id}
                    />
                );
            case "certifications":
                return (
                    <CertificationsTabSection
                        key={uuidv4()}
                        data={tabDataList}
                        index={index}
                        id={id}
                    />
                );
            default:
                return null;
        }
    };

    return (
        <StyledComponent.SkillSetBgContainer>
            <Suspense fallback={<Loader />}>
                {tabSectionData.map((tabDataList, index) => (
                    <>{renderTabSectionContentList(tabDataList, index)}</>
                ))}
            </Suspense>
        </StyledComponent.SkillSetBgContainer>
    );
};

export default TabSection;
