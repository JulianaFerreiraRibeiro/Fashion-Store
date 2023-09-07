import styled from "styled-components"

export const StyledDashboardSection = styled.section`
    display: flex;
    flex-direction: column;
    max-width: 100%;
    gap: 40px;
    padding: 20px 90px;
    height: 53vh;

    div{
        display: flex;
        width: 100%;
        gap: 50px;

        a {
            font-weight: var(--font-weight-2);
            font-size: var(--font-size-4);
        }
    }
`