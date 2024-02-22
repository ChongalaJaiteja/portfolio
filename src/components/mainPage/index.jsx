import { animateScroll } from "react-scroll";
import { useState, useEffect } from "react";
import Home from "../home";
import About from "../about";
import Qualification from "../qualification";
import * as StyledComponent from "./styledComponent";

const MainPage = () => {
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
            <Home />
            <About />
            <Qualification />
            {isScrollingDown && (
                <StyledComponent.MoveTopIcon onClick={scrollToTop} />
            )}
        </>
    );
};

export default MainPage;
