import styled from "styled-components"

export const StyledHeader = styled.header`
    max-width: 100vw;
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100px;

    nav{
        display: flex;
        justify-content: space-around;
        gap: 350px;
        align-items: center;
        width: 86%;
    }

    .cart{
        width: 48px;
        height: 48px;
    }

    .buttonsSection{
        display: flex;
        gap: 30px;
    }
`