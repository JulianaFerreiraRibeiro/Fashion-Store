import { useContext } from "react"
import UserBanner from "../../assets/banner_login.svg"
import { TitleOne, TitleTwo } from "../../components/typography"
import { StyledButton } from "../../styles/button"
import { StyledDasboardUserSection } from "./style"
import { AdminContext } from "../../providers/AdminContext"
import { Header } from "../../components/header"
import { ProductUserCard } from "../../components/productUserCard"


export const UserDashboardPage = () => {
    const {productsList} = useContext(AdminContext)

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