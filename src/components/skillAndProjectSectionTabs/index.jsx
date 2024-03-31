import { v4 as uuidv4 } from "uuid";
import { useState, useRef } from "react";
import TabSection from "../tabSection";
import SkillsAndProjectionSectionTabItem from "../skillsAndProjectSectionTabItem";
import * as StyledComponent from "./styledComponent";

const SkillsAndProjectionSectionTabs = ({ sectionDetails }) => {
    const tabLabels = Object.keys(sectionDetails);
    const [activeTab, setActiveTab] = useState(tabLabels[0]);
    const tabData = sectionDetails[activeTab];
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
