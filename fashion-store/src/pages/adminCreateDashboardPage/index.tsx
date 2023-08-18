import { Link } from "react-router-dom"
import { Paragraph, TitleTwo } from "../../components/typography"
import { StyledButton } from "../../styles/button"
import AddButton from "../../assets/add_button.svg"
import { StyledDasboardCreateSection } from "./styles"
import { useContext } from "react"
import { AdminContext } from "../../providers/AdminContext"
import { ModalDashboardCreate } from "../../components/modalDashboardCreate"

export const AdminDashboardCreateProductsPage = () => {
    const {isModalCreateOpen, setIsModalCreateOpen} = useContext(AdminContext)

    return(
        <StyledDasboardCreateSection>
            <div className="dashboardController">
                <Link to = "/dashboard">INÍCIO</Link>
                <Link to = "/dashboard/products">PRODUTOS</Link>
            </div>
            <div className = "dashboardCreateSection">
                <div className = "dashboardCreateDescription">
                    <TitleTwo>PRODUTOS</TitleTwo>
                    <Paragraph>Gerencie os produtos do catálogo</Paragraph>
                </div>
                <StyledButton buttoncolor = "black" buttonsize = "big" onClick={() => setIsModalCreateOpen(true)}><img src = {AddButton} alt = "círculo branco com um sinal de + branco para adicionar produtos"/>NOVO PRODUTO</StyledButton>  
            </div>

                {isModalCreateOpen?
                    <ModalDashboardCreate/> : null
                }
                <ul>

                </ul>
        </StyledDasboardCreateSection>
    )
}