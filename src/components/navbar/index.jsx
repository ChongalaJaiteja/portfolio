import { Spin as Hamburger } from "hamburger-react";
import { useState } from "react";
import { useThemeContext } from "../../context/themeContext";
import * as StyledComponent from "./styledComponent";

const NavBar = () => {
    const { toggleTheme, isLightTheme } = useThemeContext();
    const [isOpen, setOpen] = useState(false);

    return (
        <StyledComponent.NavBar>
            <h1>Jai teja</h1>
            <StyledComponent.HamburgIconAndThemeChangeBgContainer>
                <StyledComponent.HamburgerBgContainer>
                    <Hamburger
                        toggled={isOpen}
                        toggle={setOpen}
                        label="Show menu"
                        size={30}
                    />
                </StyledComponent.HamburgerBgContainer>
                <StyledComponent.ChangeThemeBgContainer onClick={toggleTheme}>
                    {isLightTheme ? (
                        <StyledComponent.DarkModeIcon />
                    ) : (
                        <StyledComponent.LightModeIcon />
                    )}
                </StyledComponent.ChangeThemeBgContainer>
            </StyledComponent.HamburgIconAndThemeChangeBgContainer>
        </StyledComponent.NavBar>
    );
};

export default NavBar;
