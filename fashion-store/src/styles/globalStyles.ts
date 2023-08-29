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
        color: var(--color-black);
    }

    textarea{
        resize: none;
    }
    html{
        font-family: 'Oswald', sans-serif;
    }


    button{
        cursor: pointer;
        display: flex;
        align-items: center;
        justify-content: center;
        gap: 15px;
        font-family: 'Roboto', sans-serif;
        font-size: var(--font-size-5);
        font-weight: var(--font-weight-2);
        letter-spacing: .125rem; 
    }


    input, textarea, textarea::placeholder, input::placeholder{
        font-family: 'Oswald', sans-serif;
        cursor: pointer;
    }

    input:-webkit-autofill,
    input:-webkit-autofill:hover, 
    input:-webkit-autofill:focus,
    textarea:-webkit-autofill,
    textarea:-webkit-autofill:hover
    textarea:-webkit-autofill:focus,
    select:-webkit-autofill,
    select:-webkit-autofill:hover,
    select:-webkit-autofill:focus {
        border: 1px solid white;
        -webkit-text-fill-color: black !important;
        -webkit-box-shadow: 0 0 0px 1000px var(--color-grey) inset;
        transition: background-color 5000s ease-in-out 0s;
    }
    input[type=number]::-webkit-inner-spin-button { 
        -webkit-appearance: none;
    
    }
    input[type=number] { 
        -moz-appearance: textfield;
        appearance: textfield;

    }

    li{
        list-style: none;
    }
    
    img{
        cursor: pointer;
    }

    body::-webkit-scrollbar {
        width: 12px;             
    }

    body::-webkit-scrollbar-track {
        background: var(--color-white);       
    }

    body::-webkit-scrollbar-thumb {
        background-color: var(--color-black);   
        border-radius: 20px; 
    }

   ul::-webkit-scrollbar {
        width: 12px;             
    }

   ul::-webkit-scrollbar-track {
        background: var(--color-gray);  

    }

   ul::-webkit-scrollbar-thumb {
        background-color: var(--color-black);   
        border-radius: 20px; 

    }
`