import * as StyledComponent from "./styledComponent";
import React from "react";
import { v4 as uuidv4 } from "uuid";
import SkillsTabSectionContentList from "../SkillsTabSectionContentList";
import ProjectsTabSectionContentList from "../projectsTabSectionContentList";

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
            default:
                return null;
        }
    };

    return (
        <StyledComponent.SkillSetBgContainer>
            {tabSectionData.map((tabDataList, index) => (
                <>{renderTabSectionContentList(tabDataList, index)}</>
            ))}
        </StyledComponent.SkillSetBgContainer>
    );
};

export default TabSection;
