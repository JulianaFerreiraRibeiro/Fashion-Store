import styled from "styled-components"

export const StyledFooter = styled.footer`
    max-width: 100vw;
    height: 9.75rem;
    background-color: var(--color-black);
    display: flex;
    justify-content: center;
    align-items: center;
    margin-top: 80px;
    flex-wrap: wrap;

    div{
        padding: 20px;
    }

    p{
        color: var(--color-white);
        font-weight: var(--font-weight-1);
        font-size: 18px;
    }
`