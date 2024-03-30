import AccordionComponent from "../accordionComponent";
import ProjectMainPageProjectLinks from "../projectMainPageProjectLinks";
import ProjectMainPageProjectImage from "../projectMainPageProjectImage";
import * as StyledComponent from "./styledComponent";

const ProjectMainPagProjectDetails = ({ projectDetails }) => {
    const { name, image, description, technologies, externalLinks } =
        projectDetails;

    return (
        <StyledComponent.ProjectContentBgContainer>
            <StyledComponent.ProjectMainHeading>
                {name}
            </StyledComponent.ProjectMainHeading>
            <StyledComponent.ProjectImageContainer>
                <ProjectMainPageProjectImage image={image} altName={name} />
            </StyledComponent.ProjectImageContainer>

            <StyledComponent.ProjectDescription>
                {description}
            </StyledComponent.ProjectDescription>
            <AccordionComponent
                data={technologies}
                heading="Technology Toolbox"
            />
            <ProjectMainPageProjectLinks projectLinks={externalLinks} />
        </StyledComponent.ProjectContentBgContainer>
    );
};

export default ProjectMainPagProjectDetails;
