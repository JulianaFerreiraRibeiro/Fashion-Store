import styled, { css } from "styled-components";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    buttoncolor: "black" | "white";
    buttonsize: "small" | "medium";
  }

export const StyledButton = styled.button<ButtonProps>`
    height: 60px;

    
${({buttoncolor}) => {
        switch(buttoncolor){
            case "black":
                return css`
                    background-color: var(--color-black);
                    color: var(--color-white);
                    border: none;
          
                `
            case "white":
                return css`
                    background-color: var(--color-white);
                    color: var(--color-black)
                    border: .0625rem solid var(--color-black);
                `
        }
    }}

    ${({buttonsize}) => {
            switch(buttonsize){
                case "small":
                    return css`
                        width: 146px;
            
                    `
                case "medium":
                    return css`
                        width: 209px;
                    `
            }
        }}


        // width: 209px;
        // height: 60px;
        // background-color: var(--color-black);
        // color: var(--color-white);
        // border: none;
        // letter-spacing: 2px;
        // font-weight: var(--font-weight-2);
        // font-size: var(--font-size-5);
`