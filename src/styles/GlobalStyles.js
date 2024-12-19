import { createGlobalStyle } from 'styled-components';

const GlobalStyles = createGlobalStyle`
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }

    body {
        font-family: 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
        background-color: #000000;
        color: #ffffff;
        line-height: 1.5;
        overflow-x: hidden; /* Prevent horizontal scrolling */
    }

    h1, h2, h3, h4, h5, h6 {
        line-height: 1.2;
    }

    a {
        text-decoration: none;
        color: inherit;
    }

    img {
        max-width: 100%;
        height: auto;
        display: block;
    }

    /* Responsiveness */
    @media (max-width: 1200px) {
        body {
            font-size: 1rem;
        }
    }

    @media (max-width: 992px) {
        body {
            font-size: 0.95rem;
        }
    }

    @media (max-width: 768px) {
        body {
            font-size: 0.9rem;
            padding: 0 10px; /* Add padding for smaller screens */
        }
    }

    @media (max-width: 576px) {
        body {
            font-size: 0.85rem;
            padding: 0 5px; /* Further adjust padding for extra small screens */
        }
    }

    /* Scrollbar Styling */
    ::-webkit-scrollbar {
        width: 8px;
    }

    ::-webkit-scrollbar-thumb {
        background: #f7a31c; /* Golden color for scrollbar */
        border-radius: 4px;
    }

    ::-webkit-scrollbar-track {
        background: #1a1a1a; /* Darker background for scrollbar track */
    }
`;

export default GlobalStyles;
