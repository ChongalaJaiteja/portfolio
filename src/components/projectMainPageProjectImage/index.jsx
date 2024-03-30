import ProjectMainPageCarousel from "../projectMainPageCarousel";
import LazyImageLoader from "../lazyImageLoader";

import * as StyledComponent from "./styledComponent";

const ProjectMainPageProjectImage = ({ image, altName }) => {
    return (
        <>
            {image.length > 1 ? (
                <>
                    <ProjectMainPageCarousel data={image} />
                </>
            ) : (
                <StyledComponent.ProjectImageBgContainer>
                    <LazyImageLoader
                        altName={altName}
                        imageSrc={image[0]}
                        styledComponent={StyledComponent.ProjectImage}
                    />
                </StyledComponent.ProjectImageBgContainer>
            )}
        </>
    );
};

export default ProjectMainPageProjectImage;
