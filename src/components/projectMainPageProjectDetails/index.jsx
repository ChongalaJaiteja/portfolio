import AccordionComponent from "../accordionComponent";
import ProjectMainPageProjectLinks from "../projectMainPageProjectLinks";
import ProjectMainPageProjectImage from "../projectMainPageProjectImage";
import * as StyledComponent from "./styledComponent";

const ProjectMainPagProjectDetails = ({ projectDetails }) => {
    const { name, image, description, technologies, externalLinks } =
        projectDetails;
    const formattedDescription = description
        .split("\n")
        .map((str) => <p>{str}</p>);
    return (
        <StyledComponent.ProjectContentBgContainer
            variants={{
                initial: {
                    opacity: 0,
                    x: -10,
                },
                animate: {
                    opacity: 1,
                    x: 0,
                    transition: {
                        duration: 1.5,
                        type: "spring",
                    },
                },
            }}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
        >
            <StyledComponent.ProjectMainHeading>
                {name}
            </StyledComponent.ProjectMainHeading>
            <StyledComponent.ProjectImageContainer>
                <ProjectMainPageProjectImage image={image} altName={name} />
            </StyledComponent.ProjectImageContainer>

            <StyledComponent.ProjectDescription>
                {formattedDescription}
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
