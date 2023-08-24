import styled from "styled-components"

export const StyledProductCartList = styled.li`
    width: 434px;
    height: 80px;
    display: flex;
    align-items: center;
    gap: 20px;

    .productImage{
        width: 80px;
        height: 80px;
        border-radius: 10px;
    }

    .productRemove{
        width: 36px;
        height: 36px;
    }

    div{
        display: flex;
        flex-direction: column;
        gap: 20px;
        width: 420px;
        margin-right: 50px;
    }
`