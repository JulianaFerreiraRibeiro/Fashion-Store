import styled from "styled-components"

export const StyledLoginSection = styled.section`
    display: flex;
    max-width: 100%;
    gap: 70px;
    padding: 20px;
    align-items: center;

    .formSection{
        display: flex;
        flex-direction: column;
        gap: 20px;
        position: relative;

        .backToHomeSection{
            position: absolute;
            bottom: 470px;

            a{
                letter-spacing: .125rem;
                display: flex;
                align-items: center;
                gap: 10px;
            }
        }
    }

    
`