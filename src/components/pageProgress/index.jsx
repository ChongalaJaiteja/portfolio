import { useScroll, useSpring } from "framer-motion";
import * as StyledComponent from "./styledComponent";

const PageProgress = () => {
    const { scrollYProgress } = useScroll();
    const scaleX = useSpring(scrollYProgress, {
        stiffness: 100,
        damping: 30,
        restDelta: 0.001,
    });
    return (
        <StyledComponent.PageProgressLoader
            style={{ scaleX }}
        ></StyledComponent.PageProgressLoader>
    );
};

export default PageProgress;
