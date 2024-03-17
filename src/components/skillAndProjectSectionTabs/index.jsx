import { v4 as uuidv4 } from "uuid";
import { useState } from "react";
import SkillsTabSection from "../skillsTabSection";
import ProjectsTabSection from "../projectsTabSection";
import CertificationsTabSection from "../certificationsTabSection";
import SkillsAndProjectionSectionTabItem from "../skillsAndProjectSectionTabItem";
import * as StyledComponent from "./styledComponent";
const SkillsAndProjectionSectionTabs = ({ data }) => {
    const tabLabels = Object.keys(data);
    const [activeTab, setActiveTab] = useState(tabLabels[0]);
    const tabData = data[activeTab];
    const handleTabClick = (tab) => {
        setActiveTab(tab);
    };
    const renderTabContent = () => {
        switch (activeTab) {
            case tabLabels[0]:
                return <SkillsTabSection skillsData={tabData} />;
            case tabLabels[1]:
                return <ProjectsTabSection projectsData={tabData} />;
            case tabLabels[2]:
                return (
                    <CertificationsTabSection certificationsData={tabData} />
                );
        }
    };

    return (
        <StyledComponent.SkillAndProjectsCardBgContainer>
            <StyledComponent.SkillAndProjectsTabsBgContainer>
                {tabLabels.map((tabLabel) => (
                    <SkillsAndProjectionSectionTabItem
                        key={tabLabel}
                        tabLabel={tabLabel}
                        onSelectTab={handleTabClick}
                        isActive={activeTab === tabLabel}
                    />
                ))}
            </StyledComponent.SkillAndProjectsTabsBgContainer>

            <StyledComponent.SkillAndProjectsTabContentBgContainer>
                {renderTabContent()}
            </StyledComponent.SkillAndProjectsTabContentBgContainer>
        </StyledComponent.SkillAndProjectsCardBgContainer>
    );
};

export default SkillsAndProjectionSectionTabs;
