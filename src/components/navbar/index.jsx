import Hamburger from "hamburger-react";
import { useState, useEffect } from "react";
import { AnimatePresence } from "framer-motion";
import { Link } from "react-scroll";
import { navLinkOptions } from "../../utils/constants";
import { useThemeContext } from "../../context/themeContext";
import * as StyledComponent from "./styledComponent";

const NavBar = () => {
    const { toggleTheme, isLightTheme } = useThemeContext();
    const [isHamburgerOpen, setIsHamburgerOpen] = useState(false);
    const [isScrollingDown, setIsScrollingDown] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            const currentScrollY = window.scrollY;
            const threshHold = 40;
            if (currentScrollY > threshHold) {
                setIsScrollingDown(true);
            } else {
                setIsScrollingDown(false);
            }
        };

        window.addEventListener("scroll", handleScroll);
        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);

    return (
        <>
            <StyledComponent.NavBar isScrollingDown={isScrollingDown}>
                <StyledComponent.NavBarHeading
                    isScrollingDown={isScrollingDown}
                >
                    Jai teja
                </StyledComponent.NavBarHeading>

                <StyledComponent.NavListItemBgContainerLg
                    isScrollingDown={isScrollingDown}
                >
                    {navLinkOptions.map((option) => (
                        <StyledComponent.StyledActiveLink
                            key={option.id}
                            to={option.route}
                            spy={true}
                            smooth={true}
                            activeStyle={{
                                background: "#2eafff",
                                color: "white",
                            }}
                        >
                            <StyledComponent.NavListItemLg>
                                {option.name}
                            </StyledComponent.NavListItemLg>
                        </StyledComponent.StyledActiveLink>
                    ))}
                </StyledComponent.NavListItemBgContainerLg>

                <StyledComponent.HamburgIconAndThemeChangeBgContainer>
                    <StyledComponent.HamburgerBgContainer>
                        <Hamburger
                            size={22}
                            duration={0.5}
                            distance={"lg"}
                            toggled={isHamburgerOpen}
                            toggle={setIsHamburgerOpen}
                        />
                    </StyledComponent.HamburgerBgContainer>
                    <StyledComponent.ChangeThemeBgContainer
                        onClick={toggleTheme}
                        isScrollingDown={isScrollingDown}
                    >
                        {/* TODO: add motion component */}
                        {isLightTheme ? (
                            <StyledComponent.DarkModeIcon />
                        ) : (
                            <StyledComponent.LightModeIcon />
                        )}
                    </StyledComponent.ChangeThemeBgContainer>
                </StyledComponent.HamburgIconAndThemeChangeBgContainer>
            </StyledComponent.NavBar>

            <AnimatePresence>
                {isHamburgerOpen && (
                    <StyledComponent.StyledMenuContainer
                        initial={{ x: 100 }}
                        animate={{ x: 0, transition: { type: "spring" } }}
                        exit={{ x: 200, transition: { type: "spring" } }}
                    >
                        <StyledComponent.NavListItemBgContainer>
                            {navLinkOptions.map((option) => (
                                <Link
                                    key={option.id}
                                    to={option.route}
                                    spy={true}
                                    smooth={true}
                                    onClick={() => setIsHamburgerOpen(false)}
                                >
                                    <StyledComponent.NavListItem>
                                        {option.name}
                                    </StyledComponent.NavListItem>
                                </Link>
                            ))}
                        </StyledComponent.NavListItemBgContainer>
                    </StyledComponent.StyledMenuContainer>
                )}
            </AnimatePresence>
        </>
    );
};

export default NavBar;
