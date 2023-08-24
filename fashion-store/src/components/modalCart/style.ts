import styled from "styled-components"

export const StyledModal = styled.div`
    position: absolute;
    display: flex;
    align-items: center;
    justify-content: flex-end;
    background-color: var(--white-tone);
    width: 99vw;
    height: 250vh;
    z-index: 10;
    top: 0rem;
    left: 0;
    background: rgba(0, 0, 0, 0.25);
`

export const StyledDivModal = styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;
    max-width: 32rem;
    background-color: var(--color-white);
    border-radius: 4px;
    padding: 1.5rem 2rem;
    margin-bottom: 720px ;
    margin-right: 20px;
    height: 987px;
    gap: 30px;
`

export const StyledHeaderModal = styled.header`
    display: flex;
    align-items: center;
    justify-content: space-between;
    position: relative;

    h3{
        font-weight: var(--font-weight-1);
    }

    img{
        position: absolute;
        left: 425px;
        bottom: 5px;
    }
`

export const StyledProductList = styled.ul`
    display: flex;
    flex-direction: column;
`
