import styled from "styled-components"

export const StyledProductPageSection = styled.section`
    padding-left: 90px;
    padding-top: 20px;
    gap: 90px;
    display: flex;
    flex-direction: column;
    align-items: center;

    .productSection{
        display: flex;
        gap: 50px;
        align-items: center;
        justify-content: space-around;

        .productImage{
            width: 580px;
            height: 669px;
            border-radius: 20px;
        }
    }

    .productDetails{
        display: flex;
        flex-direction: column;
        gap: 30px;

        .productName{
            font-weight: var(--font-weight-1);
            font-size: 24px;
        }

        .productPrice{
            font-weight: var(--font-weight-2);
            color: red;
        }

        .productDescription{
            width: 568px;
            line-height: 32px;
        }
    }
    
    .productsSection{
        align-self: flex-start;
        
        h2{
            margin-bottom: 50px;
        }

        ul{
            display: flex;
            gap: 40px;
        }
    }
`