import styled from "styled-components"

export const StyledRegisterSection = styled.section`
    display: flex;
    max-width: 100%;
    gap: 70px;
    padding: 20px;

    .banner{
        max-width: 51.25rem;
        height: 43.1875rem;
    }

    .arrow{
        width: 24px;
        height: 24px;
    }

    .backToLoginSection{
        display: flex;
        align-items: center;
        gap: 10px;
    }

    a{
        letter-spacing: .125rem;
    }

    .registerContainer{
        display: flex;
        flex-direction: column;
        gap: 20px;
    }
`