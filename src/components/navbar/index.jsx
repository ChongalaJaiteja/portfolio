import { useThemeContext } from "../../context/themeContext";
import * as StyledComponent from "./styledComponent";

const NavBar = () => {
    const { toggleTheme, isLightTheme } = useThemeContext();

    return (
        <StyledComponent.NavBar>
            <h1>Jai teja</h1>
            <div onClick={toggleTheme}>
                {isLightTheme ? (
                    <StyledComponent.DarkModeIcon />
                ) : (
                    <StyledComponent.LightModeIcon />
                )}
            </div>
        </StyledComponent.NavBar>
    );
};

export default NavBar;
