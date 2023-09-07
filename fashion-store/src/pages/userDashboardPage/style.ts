import styled from "styled-components"

export const StyledDasboardUserSection = styled.section`
    width: 100%;
    display: flex;
    flex-direction: column;
    padding-left: 90px;
    padding-top: 20px;
    gap: 90px;

    .storeLogo{
        display: flex;
        justify-content: space-between;
        width: 100%;
        gap: 30px;

        img{
            width: 945px;
            height: 691px;
        }

        div{
            display: flex;
            flex-direction: column;
            gap: 100px;
            margin-top: 80px;

            button{
                width: 272px;
            }
        }
    }

    ul{
        display: flex;
        gap: 30px;
        overflow: auto;
    }

    h2{
        margin-bottom: 50px;
    }

`