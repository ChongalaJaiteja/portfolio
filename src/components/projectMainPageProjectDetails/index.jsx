import LazyImageLoader from "../lazyImageLoader";
import AccordionComponent from "../accordionComponent";
import ProjectMainPageProjectLinks from "../projectMainPageProjectLinks";
import ProjectMainPageCarousel from "../projectMainPageCarousel";
import * as StyledComponent from "./styledComponent";

const ProjectMainPagProjectDetails = ({ projectDetails }) => {
    const { name, image, description, technologies, externalLinks } =
        projectDetails;
    return (
        <StyledComponent.ProjectContentBgContainer>
            <StyledComponent.ProjectMainHeading>
                {name}
            </StyledComponent.ProjectMainHeading>

            {image.length > 1 ? (
                <ProjectMainPageCarousel data={image} />
            ) : (
                <StyledComponent.ProjectImageBgContainer>
                    <LazyImageLoader
                        altName={name}
                        imageSrc={image[0]}
                        styledComponent={StyledComponent.ProjectImage}
                    />
                </StyledComponent.ProjectImageBgContainer>
            )}

            <StyledComponent.ProjectDescription>
                {description}
            </StyledComponent.ProjectDescription>
            <AccordionComponent data={technologies} />
            <ProjectMainPageProjectLinks projectLinks={externalLinks} />
        </StyledComponent.ProjectContentBgContainer>
    );
};

export default ProjectMainPagProjectDetails;
