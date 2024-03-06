import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`
:root {
    --total-page-pd-sm : clamp(0.5em, 1vw + 1.44em, 2.5em);
    --total-page-pd-md : clamp(0.6em, 1vw + 1.8em, 3em);
    --total-page-pd-lg : clamp(0.7em, 1vw + 3.9em, 6em);
    --page-section-pt : clamp(1.4em, 1vw + 2.5em, 6em);
    --page-section-pb : clamp(1.4em, 1vw + 2.5em, 6em);
    --page-section-heading-mb : clamp(1em , 1vw + 1em, 6em);
    --page-section-heading-fs : clamp(0.5rem, 1vw + 1.61rem, 2.32rem);
    --toggle-theme-transition : background-color 0.4s ease-out;
}
    body {
        font-family: "Poppins", sans-serif;
        font-style: normal;
        padding: 0;
        margin: 0;
        box-sizing: border-box;
        user-select: none;
        overflow-x: hidden;
    }

   *:focus {
    outline: none;
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
