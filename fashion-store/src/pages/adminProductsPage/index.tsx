import { Link } from "react-router-dom"
import { Paragraph, TitleTwo } from "../../components/typography"
import { StyledButton } from "../../styles/button"
import AddButton from "../../assets/add_button.svg"
import { StyledDasboardCreateSection } from "./styles"
import { useContext } from "react"
import { AdminContext } from "../../providers/AdminContext"
import { ModalDashboardCreate } from "../../components/modalDashboardCreate"
import { ProductAdminCard } from "../../components/productAdminCard"
import { ModalDashboardEdit } from "../../components/modalDashboardEdit"
import { Header } from "../../components/header"



export const AdminDashboardCreateProductsPage = () => {
    const {isModalCreateOpen, setIsModalCreateOpen, productsList, isModalEditOpen} = useContext(AdminContext)

    return(
        <>
            <Header/>
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
                    <ul className = "dashboardProductsList">
                        {productsList.map(product => (
                            <ProductAdminCard product={product} key = {product.id}/>
                        ))}

                    {isModalEditOpen?
                    <ModalDashboardEdit/> : null
                }
                    </ul>
            </StyledDasboardCreateSection>
        </>
    )
}