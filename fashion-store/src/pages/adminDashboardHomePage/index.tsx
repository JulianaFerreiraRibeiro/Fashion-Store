import { Link } from "react-router-dom"
import { Paragraph, TitleTwo } from "../../components/typography"
import { StyledDashboardSection } from "./styles"
import { Header } from "../../components/header"

export const AdminDashboardPage = () => {
    return(
        <>
            <Header/>
            <StyledDashboardSection>
                <div>
                    <Link to = "/dashboard">INÍCIO</Link>
                    <Link to = "/dashboard/products">PRODUTOS</Link>
                </div>
                <TitleTwo>PAINEL DO ADMINISTRADOR</TitleTwo>
                <Paragraph>Seja bem vindo, administrador!</Paragraph>
            </StyledDashboardSection>
        </>
    )
}