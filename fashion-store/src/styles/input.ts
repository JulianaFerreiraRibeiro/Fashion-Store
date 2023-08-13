import { styled } from "styled-components";

export const StyledInput = styled.input`
    width: 35.5rem;
    height: 4.875rem;
    border: none;
    padding: .9375rem;
    background-color: var(--color-gray);

    ::placeholder{
        font-weight: var(--font-weight-3);
        font-size: var(--font-size-4);
    }
`