import { css, styled } from "styled-components";

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
    inputsize: "medium" | "big";
  }

export const StyledInput = styled.input<InputProps>`
    width: 35.5rem;
    height: 4.875rem;
    border: none;
    padding: .9375rem;
    background-color: var(--color-gray);

    ${({inputsize}) => {
            switch(inputsize){
                case "medium":
                    return css`
                        width: 35.5rem;
            
                    `
                case "big":
                    return css`
                        width: 39.4375rem;
                    `
            }
        }}

    ::placeholder{
        font-weight: var(--font-weight-3);
        font-size: var(--font-size-4);
    }
`