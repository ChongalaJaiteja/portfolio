import ProjectsTabSectionContentList from "../projectsTabSectionContentList";
import { v4 as uuidv4 } from "uuid";
import * as StyledComponent from "./styledComponent";

const ProjectsTabSection = ({ projectsData, id }) => {
    console.log(projectsData);
    return (
        <StyledComponent.ProjectsBgContainer>
            {projectsData.map((projects, index) => (
                <ProjectsTabSectionContentList
                    key={uuidv4()}
                    data={projects}
                    index={index}
                    id={id}
                />
            ))}
        </StyledComponent.ProjectsBgContainer>
    );
};

export default ProjectsTabSection;
