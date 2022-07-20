import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
    * {
        margin: 0;
        padding: 0;
    }

    :root {
        --color-light: #edf3fb;
        --color-dark-blue: #1b406a;
        --color-blue: #0693e3;
        --color-secondary: #1EB9BA;
        --color-light-green: #4BE6E7;
    }

    html, body, #root {
        min-height: 100vh;
    }

    body {
        background-color: white;
        font-family: arial, sans-serif;
        -webkit-font-smoothing: antialiased;
    }

    a {
        color: inherit;
    }

    // Bootstrap overrides
    .fs-7 { font-size: 4rem; }

    .fs-8 { font-size: 0.8rem; }

    .title-section {
        font-size: 4rem; 
        font-weight: bold; 
        text-align: center;
    }

    .subtitle-section {
        font-size: 1.2rem; 
        font-weight: bold; 
        text-align: center;
    }

    .text-primary {color: var(--color-dark-blue) !important;}

    .text-secondary {color: var(--color-secondary) !important;}

    .bg-primary {color: var(--color-dark-blue) !important;}

    .slick-next {
        right: 10px !important;
    }

    .slick-prev {
        left: 10px !important;
        z-index: 3;
    }
    
`;
