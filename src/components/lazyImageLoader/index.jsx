import { LazyLoadImage } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/blur.css";
import { getImageUrl } from "../../utils/imageUtil";
const LazyImageLoader = ({
    imageSrc,
    altName,
    width = "100%",
    height = "100%",
    threshold = 120,
    styledComponent: StyledComponent,
}) => {
    const ImageComponent = StyledComponent || LazyLoadImage;
    return (
        <ImageComponent
            alt={altName}
            height={height}
            width={width}
            effect="blur"
            src={getImageUrl(imageSrc)}
            threshold={threshold}
            draggable="false"
        />
    );
};

export default LazyImageLoader;
