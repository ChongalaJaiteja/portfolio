import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`
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
