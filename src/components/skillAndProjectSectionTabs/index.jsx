import { v4 as uuidv4 } from "uuid";
import { useState, useRef } from "react";
import TabSection from "../TabSection";
// import ProjectsTabSection from "../projectsTabSection";
// import CertificationsTabSection from "../certificationsTabSection";
import SkillsAndProjectionSectionTabItem from "../skillsAndProjectSectionTabItem";
import * as StyledComponent from "./styledComponent";

const SkillsAndProjectionSectionTabs = ({ domainDetails }) => {
    const tabLabels = Object.keys(domainDetails);
    const [activeTab, setActiveTab] = useState(tabLabels[0]);
    const tabData = domainDetails[activeTab];
    const touchStartX = useRef(null);

    const handleTouchStart = (event) => {
        touchStartX.current = event.touches[0].clientX;
    };

    const handleTouchEnd = (event) => {
        if (!touchStartX.current) return;

        const touchEndX = event.changedTouches[0].clientX;
        const deltaX = touchEndX - touchStartX.current;
        const minSwipeDistance = 50;
        if (
            deltaX < -minSwipeDistance &&
            activeTab !== tabLabels[tabLabels.length - 1]
        ) {
            const nextTabIndex = tabLabels.indexOf(activeTab) + 1;
            setActiveTab(tabLabels[nextTabIndex]);
        } else if (deltaX > minSwipeDistance && activeTab !== tabLabels[0]) {
            const previousTabIndex = tabLabels.indexOf(activeTab) - 1;
            setActiveTab(tabLabels[previousTabIndex]);
        }
        touchStartX.current = null;
    };

    const handleTabClick = (tab) => {
        setActiveTab(tab);
    };

    // const renderTabContent = () => {
    //     switch (activeTab) {
    //         case tabLabels[0]:
    //             return <TabSection tabSectionData={tabData} id={activeTab} />;
    //         case tabLabels[1]:
    //             return <TabSection tabSectionData={tabData} id={activeTab} />;
    //         case tabLabels[2]:
    //             return (
    //                 <CertificationsTabSection certificationsData={tabData} />
    //             );
    //     }
    // };

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

            <StyledComponent.SkillAndProjectsTabContentBgContainer
                onTouchStart={handleTouchStart}
                onTouchEnd={handleTouchEnd}
            >
                <TabSection tabSectionData={tabData} id={activeTab} />
            </StyledComponent.SkillAndProjectsTabContentBgContainer>
        </StyledComponent.SkillAndProjectsCardBgContainer>
    );
};

export default SkillsAndProjectionSectionTabs;
