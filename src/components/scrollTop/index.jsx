import { animateScroll } from "react-scroll";
import { useState, useEffect } from "react";
import { AnimatePresence } from "framer-motion";
import * as StyledComponent from "./styledComponent";
import { useThemeContext } from "../../context/themeContext";

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
    const { toggleTheme, isLightTheme } = useThemeContext();
    useEffect(() => {
        const handleScroll = () => {
            const scrolledPastThreshold = window.scrollY > 50;
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
                    <StyledComponent.FloatingBgContainer>
                        <StyledComponent.ChangeThemeBgContainer
                            onClick={toggleTheme}
                            whileTap={{ scale: 1.3 }}
                            initial={{ y: -30 }}
                            animate={{ y: 0 }}
                            transition={{
                                duration: 0.4,
                                ease: "easeInOut",
                                type: "spring",
                            }}
                            exit={{ y: -30 }}
                        >
                            {isLightTheme ? (
                                <StyledComponent.FloatingDarkModeIcon />
                            ) : (
                                <StyledComponent.FloatingLightModeIcon />
                            )}
                        </StyledComponent.ChangeThemeBgContainer>
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
                    </StyledComponent.FloatingBgContainer>
                </AnimatePresence>
            )}
        </>
    );
};

export default ScrollTop;
