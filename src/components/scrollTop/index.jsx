import { animateScroll } from "react-scroll";
import { useState, useEffect } from "react";
import { AnimatePresence } from "framer-motion";
import * as StyledComponent from "./styledComponent";

const ScrollTop = () => {
    const animateIcon = {
        initial: {
            y: 23,
        },
        animate: {
            y: 0,
        },
        transition: {
            duration: 0.4,
            ease: "easeInOut",
            type: "spring",
        },
        exit: { y: 23 },
    };
    const scrollToTop = () => {
        const options = {
            duration: 500,
            smooth: true,
        };

        animateScroll.scrollToTop(options);
    };
    const [isScrollingDown, setIsScrollingDown] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            const scrolledPastThreshold = window.scrollY > 80;
            if (isScrollingDown !== scrolledPastThreshold) {
                setIsScrollingDown(scrolledPastThreshold);
            }
        };

        window.addEventListener("scroll", handleScroll);

        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, [isScrollingDown]);

    return (
        <>
            {isScrollingDown && (
                <AnimatePresence>
                    <StyledComponent.MoveToTopIconBgContainer
                        onClick={scrollToTop}
                        variants={animateIcon}
                        whileTap={{ scale: 1.3 }}
                        initial="initial"
                        animate="animate"
                        transition="transition"
                        exit="exit"
                    >
                        <StyledComponent.MoveTopIcon />
                    </StyledComponent.MoveToTopIconBgContainer>
                </AnimatePresence>
            )}
        </>
    );
};

export default ScrollTop;
