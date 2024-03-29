import * as StyledComponent from "./styledComponent";

const ProjectMainPageProjectPosts = ({ postUrl }) => {
    return (
        <StyledComponent.ProjectPostsBgContainer>
            <StyledComponent.ProjectPostBgContainer>
                <StyledComponent.IframeProjectPost
                    src={postUrl}
                    height="300"
                    width="100%"
                    frameborder="0"
                    allowfullscreen=""
                    title="Embedded post"
                ></StyledComponent.IframeProjectPost>
            </StyledComponent.ProjectPostBgContainer>
        </StyledComponent.ProjectPostsBgContainer>
    );
};

export default ProjectMainPageProjectPosts;
