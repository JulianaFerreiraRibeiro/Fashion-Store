import styled from "styled-components"

export const StyledUserProductCard = styled.li`
    display: flex;
    flex-direction: column;
    gap: 20px;

    .productImage{
        width: 332px;
        height: 383px;
        border-radius: 20px;
    }

    .addToCartController{
        display: flex;
        align-items: center;
        gap: 20px;
    }

    .productName{
        font-weight: var(--font-weight-1);
    }

    .productPrice{
        font-family: 'Oswald', sans-serif;
    }

    .productPageButton{
        font-size: 14px;
        letter-spacing: .125rem;
        font-weight: var(--font-weight-2);
    }
`