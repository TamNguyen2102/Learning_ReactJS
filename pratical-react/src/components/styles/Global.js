import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`
    @import url('https://fonts.googleapis.com/css2?family=Lato:wght@300;400;700&display=swap');

    *,
    *::after,
    *::before{
        box-sizing: border-box;
    }

    body{
        color: black;
        transition: all 300ms ease;
        overflow-x: hidden;
    }

    img{
        max-width: 100%;
    }
`;

export default GlobalStyles;
