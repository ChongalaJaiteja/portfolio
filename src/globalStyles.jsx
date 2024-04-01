import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`
:root {
    --total-page-pd-sm : clamp(0.5em, 1vw + 1.44em, 2.5em);
    --total-page-pd-md : clamp(0.6em, 1vw + 1.8em, 3em);
    --total-page-pd-lg : clamp(0.7em, 1vw + 3.9em, 6em);
    --page-section-pt : clamp(1.4em, 1vw + 5.7em, 8em);
    --page-section-pb : clamp(1.4em, 1vw + 2.5em, 6em);
    --page-section-heading-mb : clamp(1em , 1vw + 1em, 6em);
    --page-section-heading-fs : clamp(0.5rem, 1vw + 1.61rem, 2.32rem);
    --toggle-theme-transition : background-color 0.4s ease-out;
    --theme-page-bg-color:${({ theme }) => theme.backgroundColor};
    --theme-page-text-color:${({ theme }) => theme.color};
    --theme-container-bg-color:${({ theme }) => theme.containerBackground};
    --theme-header-bg-color:${({ theme }) => theme.headerBackground};
    --theme-primary-text-color:${({ theme }) => theme.primaryText};
    --theme-second-text-color:${({ theme }) => theme.secondText};
    --theme-header-text-color:${({ theme }) => theme.headerText};
    --theme-border-color:${({ theme }) => theme.borderColor};
    --theme-box-shadow : ${({ theme }) => theme.boxShadow};
    --theme-divide-line-color:${({ theme }) => theme.divideLineColor};
    --theme-input-bg-color:${({ theme }) => theme.inputBackgroundColor};
    --theme-input-text-color:${({ theme }) => theme.inputText};
    --theme-input-border-color: ${({ theme }) => theme.inputBorderColor};
    --theme-input-placeholder-text-color: ${({ theme }) =>
        theme.placeholderText};
    --theme-primary-color:${({ theme }) => theme.primaryAccentColor};
    --theme-secondary-color:${({ theme }) => theme.secondaryAccentColor};
    --theme-success-color:${({ theme }) => theme.successAccentColor};
    --theme-warning-color:${({ theme }) => theme.warningAccentColor};
    --theme-info-color:${({ theme }) => theme.infoAccentColor};
    --theme-link-color : ${({ theme }) => theme.linkColor};
    --toggle-theme-transition : background-color 0.4s ease-out;
}
    html {
        -webkit-tap-highlight-color: transparent !important;
    }
    body {
        font-family: "Poppins", sans-serif;
        font-style: normal; 
        padding: 0;
        margin: 0;
        box-sizing: border-box;
        user-select: none;
        overflow-x: hidden;
        scroll-behavior: smooth;

    }

    a {
        color: ${({ theme }) => theme.linkColor};
        text-decoration: none;
    }
    *::-webkit-scrollbar {
        width: 8px;
    }

    *::-webkit-scrollbar-track {
        border-radius: 20px;
    }
    *::-webkit-scrollbar-thumb {
        background-color: ${({ theme }) => theme.primaryAccentColor};
        border-radius: 20px;
    }

    * :not(h1) :not(p) {
        margin: 0;
    }

`;

export default GlobalStyles;
