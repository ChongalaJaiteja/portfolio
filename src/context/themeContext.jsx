import { ThemeProvider } from "styled-components";
import { createContext, useContext, useState } from "react";
import GlobalStyles from "../globalStyles";
// Define theme configurations for light and dark themes
const theme = {
    light: {
        color: "rgb(0, 0, 0)",
        backgroundColor: "rgb(255, 247, 252)",
        containerBackground: "rgb(249,249,251)",
        headerBackground: "rgb(255,255,255)",
        primaryText: "rgb(51, 51, 51)",
        secondText: "rgb(102, 102, 102)",
        headerText: "rgb(34, 34, 34)",
        borderColor: "hsl(0, 1%, 56%)",
        boxShadow: "1px 2px 5px 1px rgb(0, 0, 0, 0.2)",
        divideLineColor: "rgb(221, 221, 221)",
        inputBackgroundColor: "rgb(255,255,255)",
        inputText: "rgb(0, 0, 0)",
        placeholderText: "rgb(136, 136, 136)",
        inputBorderColor: "rgb(191, 191, 191)",
        linkColor: "rgb(0, 123, 255)",
    },
    dark: {
        color: "rgb(255,255,255)",
        backgroundColor: "rgb(39, 40, 41)",
        containerBackground: "rgb(30, 30, 30)",
        headerBackground: "rgb(39, 40, 41)",
        primaryText: "rgb(255, 255, 255)",
        secondText: "rgb(204, 204, 204)",
        headerText: "rgb(255, 255, 255)",
        borderColor: "rgb(128, 128, 128)",
        boxShadow: "1px 2px 6px 1px rgb(0, 0, 0, 0.8)",
        divideLineColor: "rgb(68, 68, 68)",
        inputBackgroundColor: "rgb(51, 51, 51)",
        inputText: "rgb(255, 255, 255)",
        placeholderText: "rgb(136, 136, 136)",
        inputBorderColor: "rgb(85, 85, 85)",
        linkColor: "rgb(57, 153, 255)",
    },
};

// Define common colors that can be used across themes
const commonColors = {
    primaryAccentColor: "rgb(46, 175, 255)",
    secondaryAccentColor: "rgb(255, 69, 0)",
    successAccentColor: "rgb(40, 167, 69)",
    warningAccentColor: "rgb(255, 193, 7)",
    infoAccentColor: "rgb(23, 162, 184)",
};

const ThemeContext = createContext();

export const useThemeContext = () => useContext(ThemeContext);

export const ThemeContextProvider = ({ children }) => {
    const [isLightTheme, setIsLightTheme] = useState(() => {
        const storedTheme = localStorage.getItem("isLightTheme");
        if (storedTheme !== null) {
            return JSON.parse(storedTheme);
        }
        const currentHour = new Date().getHours();
        // Assuming 6pm as the threshold
        return currentHour >= 6 && currentHour < 18; // Night time
    });
    const toggleTheme = () => {
        setIsLightTheme((prev) => {
            const newTheme = !prev;
            localStorage.setItem("isLightTheme", JSON.stringify(newTheme));
            return newTheme;
        });
    };

    const currentTheme = {
        ...theme[isLightTheme ? "light" : "dark"],
        ...commonColors,
        isLightTheme,
    };

    return (
        <ThemeContext.Provider value={{ isLightTheme, toggleTheme }}>
            <ThemeProvider theme={currentTheme}>
                <GlobalStyles />
                {children}
            </ThemeProvider>
        </ThemeContext.Provider>
    );
};
