import { v4 as uuidv4 } from "uuid";
import LazyImageLoader from "../lazyImageLoader";
import * as StyledComponent from "./styledComponent";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";

const ProjectMainPageCarousel = ({ data }) => {
    return (
        <StyledComponent.CarouselBgContainer>
            <Carousel
                autoPlay={true}
                infiniteLoop={true}
                interval={2000}
                showArrows={false}
                transitionTime={500}
                dynamicHeight={true}
                showStatus={false}
            >
                {data.map((eachItem, index) => (
                    <div key={uuidv4()}>
                        <LazyImageLoader
                            altName={`image ${index}`}
                            imageSrc={eachItem}
                            styledComponent={StyledComponent.CarouselImage}
                        />
                    </div>
                ))}
            </Carousel>
        </StyledComponent.CarouselBgContainer>
    );
};

export default ProjectMainPageCarousel;
