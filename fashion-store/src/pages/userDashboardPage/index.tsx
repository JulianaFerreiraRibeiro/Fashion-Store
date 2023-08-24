import { useContext } from "react"
import UserBanner from "../../assets/banner_login.svg"
import { TitleOne, TitleTwo } from "../../components/typography"
import { StyledButton } from "../../styles/button"
import { StyledDasboardUserSection } from "./style"
import { AdminContext } from "../../providers/AdminContext"
import { Header } from "../../components/header"
import { ProductUserCard } from "../../components/productUserCard"
import { UserContext } from "../../providers/UserContext"
import { ModalCart } from "../../components/modalCart"

export const UserDashboardPage = () => {
    const {productsList} = useContext(AdminContext)
    const {isCartModalOpen} = useContext(UserContext)

    return (
        <>
            <Header cart = {true}/>
            <StyledDasboardUserSection>
                    <div className="storeLogo">
                    <img src = {UserBanner}/>
                        <div>
                            <TitleOne>FASHION STORE</TitleOne>
                            <StyledButton buttoncolor="black" buttonsize="big">CONFIRA AS OFERTAS</StyledButton>
                        </div>
                    </div>
                    {isCartModalOpen ? <ModalCart/> : null}
                    <section>
                        <TitleTwo>PRODUTOS EM DESTAQUE</TitleTwo>
                        <ul>
                            {productsList.map(product => (
                                <ProductUserCard product={product} key = {product.id}/>
                            ))}
                        </ul>

                    </section>
            </StyledDasboardUserSection>
        </>
    )
}