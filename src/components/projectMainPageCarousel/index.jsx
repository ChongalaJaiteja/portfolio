import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { v4 as uuidv4 } from "uuid";
import LazyImageLoader from "../lazyImageLoader";
import * as StyledComponent from "./styledComponent";
import Slider from "react-slick";
const ProjectMainPageCarousel = ({ data }) => {
    // const settings = {
    //     dots: true,
    //     autoplay: true,
    //     adaptiveHeight: true,
    //     infinite: true,
    //     speed: 240,
    //     slidesToShow: 1,
    //     slidesToScroll: 1,
    //     arrows: false,
    //     centerMode: true,
    //     fade: true,
    //     waitForAnimate: false,
    //     pauseOnHover: true,
    //     appendDots: (dots) => (
    //         <div
    //             style={{
    //                 paddingTop: "550px",
    //             }}
    //         >
    //             <ul style={{ margin: "0px" }}> {dots} </ul>
    //         </div>
    //     ),
    //     customPaging: (i) => (
    //         <div
    //             style={{
    //                 width: "30px",
    //                 color: "blue",
    //                 border: "1px blue solid",
    //             }}
    //         >
    //             {i + 1}
    //         </div>
    //     ),
    // };
    // return (
    //     <div className="slider-container">
    //         <StyledComponent.SliderBgContainer {...settings}>
    //             {data.map((eachItem, index) => (
    //                 <StyledComponent.SliderItemContainer key={uuidv4()}>
    //                     <LazyImageLoader
    //                         altName={`image ${index}`}
    //                         imageSrc={eachItem}
    //                         styledComponent={StyledComponent.CarouselImage}
    //                     />
    //                 </StyledComponent.SliderItemContainer>
    //             ))}
    //         </StyledComponent.SliderBgContainer>
    //     </div>
    // );

    const settings = {
        dots: true,
        autoplay: true,
        arrows: false,
        infinite: true,
        speed: 240,
        slidesToShow: 1,
        slidesToScroll: 1,
        fade: true,
        pauseOnHover: true,
    };

    return (
        <div className="slider-container">
            <StyledComponent.SliderBgContainer {...settings}>
                {data.map((eachItem, index) => (
                    <div key={uuidv4()}>
                        <LazyImageLoader
                            altName={`image ${index}`}
                            imageSrc={eachItem}
                            styledComponent={StyledComponent.CarouselImage}
                        />
                    </div>
                ))}
            </StyledComponent.SliderBgContainer>
        </div>
    );
};

export default ProjectMainPageCarousel;
