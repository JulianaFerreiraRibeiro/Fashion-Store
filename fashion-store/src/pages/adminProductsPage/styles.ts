import styled from "styled-components"

export const StyledDasboardCreateSection = styled.section`
    display: flex;
    flex-direction: column;
    max-width: 100%;
    gap: 40px;
    padding: 20px 90px;

    .dashboardController{
        display: flex;
        width: 100%;
        gap: 50px;

        a {
            font-weight: var(--font-weight-2);
            font-size: var(--font-size-4);
        }
    }

    h2{
        font-weight: var(--font-weight-1);
    }

    .dashboardCreateSection{
        display: flex;
        align-items: center;
        justify-content: space-between;
    }

    .dashboardCreateDescription{
        display: flex;
        flex-direction: column;
        gap: 30px;
    }

    .dashboardProductsList{
        overflow: auto;
        height: 475px;
        gap: 45px;
        width: 1420px;
        display: flex;
        flex-wrap: wrap;
        align-items: flex-start;
    }

    .productImage{
        width: 180px;
        height: 210px;
        border-radius: 20px;
    }
`