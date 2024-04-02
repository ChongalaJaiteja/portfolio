import AccordionComponent from "../accordionComponent";
import ProjectMainPageProjectImage from "../projectMainPageProjectImage";
import * as StyledComponent from "./styledComponent";

const GetIframeProjectPost = ({ postUrl }) => (
    <StyledComponent.IframeProjectPost
        src={postUrl}
        height="300"
        width="100%"
        frameborder="0"
        title="Embedded post"
    ></StyledComponent.IframeProjectPost>
);

const ProjectMainPageProjectPosts = ({
    postUrl = "",
    image = [],
    name = "",
}) => {
    return (
        <StyledComponent.ProjectPostsBgContainer>
            {image && (
                <StyledComponent.ProjectImageContainer>
                    <ProjectMainPageProjectImage image={image} altName={name} />
                </StyledComponent.ProjectImageContainer>
            )}

            {postUrl && (
                <>
                    <StyledComponent.ProjectPostBgContainerSm>
                        <StyledComponent.ProjectPostBgContainerSmMainHeading>
                            Related Post
                        </StyledComponent.ProjectPostBgContainerSmMainHeading>
                        <GetIframeProjectPost postUrl={postUrl} />
                    </StyledComponent.ProjectPostBgContainerSm>

                    <StyledComponent.ProjectPostBgContainerLg>
                        <AccordionComponent heading="related post">
                            <GetIframeProjectPost postUrl={postUrl} />
                        </AccordionComponent>
                    </StyledComponent.ProjectPostBgContainerLg>
                </>
            )}
        </StyledComponent.ProjectPostsBgContainer>
    );
};

export default ProjectMainPageProjectPosts;
