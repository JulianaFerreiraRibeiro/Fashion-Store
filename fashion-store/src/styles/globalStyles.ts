import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
    :root{
        --color-black: rgba(0, 0, 0, 1);
        --color-white: rgba(255, 255, 255, 1);
        --color-gray: rgba(238, 238, 238, 1);

        --font-size-1: 6.25rem;
        --font-size-2: 3.75rem;
        --font-size-3: 2rem;
        --font-size-4: 1.25rem;
        --font-size-5: 1.125rem;

        --font-weight-1: 700;
        --font-weight-2: 500;
        --font-weight-3: 400;
    }

    *{
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }

    a{
        text-decoration: none;
        color: var(--color-black)
    }
    
    html{
        font-family: 'Oswald', sans-serif;
    }

    button{
        cursor: pointer;
        font-family: 'Roboto', sans-serif;
        font-size: var(--font-size-5);
        font-weight: var(--font-weight-2);
        letter-spacing: .125rem;
    }

    input, input::placeholder{
        font-family: 'Oswald', sans-serif;
        cursor: pointer;
    }
`