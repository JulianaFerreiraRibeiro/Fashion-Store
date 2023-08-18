import { Link } from "react-router-dom"
import { Paragraph, TitleTwo } from "../../components/typography"
import { StyledDashboardSection } from "./styles"

export const AdminDashboardPage = () => {
    return(
        <StyledDashboardSection>
            <div>
                <Link to = "/dashboard">INÍCIO</Link>
                <Link to = "/dashboard/products">PRODUTOS</Link>
            </div>
            <TitleTwo>PAINEL DO ADMINISTRADOR</TitleTwo>
            <Paragraph>Seja bem vindo, administrador!</Paragraph>
        </StyledDashboardSection>
    )
}