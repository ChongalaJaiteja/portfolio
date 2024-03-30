import * as StyledComponent from "./styledComponent";

const ProjectDemoVideo = ({ videoLink }) => {
    return (
        <StyledComponent.ProjectDemoVideoBgContainer>
            <StyledComponent.IframeVideo
                src={`https://www.youtube.com/embed/${videoLink
                    .split("/")
                    .pop()}`}
                title="YouTube video player"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
            ></StyledComponent.IframeVideo>
        </StyledComponent.ProjectDemoVideoBgContainer>
    );
};

export default ProjectDemoVideo;
