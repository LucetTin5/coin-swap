import { createGlobalStyle } from "styled-components";
import reset from "styled-reset";

export const GlobalStyles = createGlobalStyle`
    ${reset}
    * {
        box-sizing: border-box;
        padding: 0;
        margin: 0;
    }
    a {
        text-decoration: none;
    }
    input {
        outline: none;
    }
    body {
        font-family: "Noto Sans KR", -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
        background-color: #000;
        color: #fff;
    }
`;
