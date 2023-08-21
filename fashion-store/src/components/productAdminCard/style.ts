import styled from "styled-components"

export const StyledAdminProductsCards = styled.li`
    display: flex;
    width: 670px;
    height: 13.125rem;
    gap: 198px;

    .productInformation{
        display: flex;
        justify-content: center;
        gap: 30px;
    }

    .productDescription{
        display: flex;
        flex-direction: column;
        gap: 30px;
        align-self: center;
    }

    .productController{
        display: flex;
        align-items: center;
        gap: 20px;
    }
`