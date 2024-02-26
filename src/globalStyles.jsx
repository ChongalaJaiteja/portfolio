import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`
:root {
    --total-page-pd-sm : clamp(0.5em, 1vw + 1.44em, 2.5em);
    --total-page-pd-md : clamp(0.6em, 1vw + 1.8em, 3em);
    --total-page-pd-lg : clamp(0.7em, 1vw + 3.9em, 6em);
    --page-section-pt : clamp(1.4em, 1vw + 2.5em, 6em);
    --page-section-heading-mb : clamp(1em , 1vw + 1em, 6em);
    --page-section-heading-fs : clamp(0.5rem, 1vw + 1.61rem, 2.32rem);
    ${'' /* --page-section-mb : clamp(1em , 1vw + 1.2em, 6em); */}
}
    body {
        font-family: "Poppins", sans-serif;
        font-style: normal;
        padding: 0;
        margin: 0;
        box-sizing: border-box;
    }
    * :not(h1) :not(p) {
        margin: 0;
    }

`;

export default GlobalStyles;
