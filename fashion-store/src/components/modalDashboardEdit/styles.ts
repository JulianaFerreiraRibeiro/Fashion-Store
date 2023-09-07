import styled from "styled-components"

export const StyledModal = styled.div`
    position: absolute;
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: var(--white-tone);
    width: 99vw;
    height: 140vh;
    z-index: 10;
    top: 0rem;
    left: 0;
    background: rgba(0, 0, 0, 0.25);
`

export const StyledDivModal = styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;
    max-width: 44rem;
    background-color: var(--color-white);
    border-radius: 4px;
    padding: 1.5rem 2rem;
`

export const StyledHeaderModal = styled.header`
    display: flex;
    justify-content: space-between;
    align-items: center;
    position: relative;
    margin-bottom: 30px;

    h3{
        font-weight: var(--font-weight-1);
        font-size: 38px;
    }

    img{
        width: 38px;
        height: 38px;
        position: absolute;
        left: 620px;
        bottom: 15px;
    }
`

export const StyledCreateModalForm = styled.form`
    width: 100%;
    display: flex;
    flex-direction: column;
    gap: 10px;

    button{
        align-self: flex-end;
        margin-right: 10px;
    }

    textarea{
        width: 631px;
        height: 150px;
        border: none;
        padding: .9375rem;
        background-color: var(--color-gray);
    }

    p{
        color: red;
        font-size: 15px;
    }

    img{
        filter: invert(100%)
    }
`