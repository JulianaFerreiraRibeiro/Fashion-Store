import { useContext } from "react"
import UserBanner from "../../assets/banner_login.svg"
import { TitleOne, TitleTwo } from "../../components/typography"
import { StyledButton } from "../../styles/button"
import { StyledDasboardUserSection } from "./style"
import { Header } from "../../components/header"
import { ProductUserCard } from "../../components/productUserCard"
import { UserContext } from "../../providers/UserContext"


export const UserDashboardPage = () => {
    const {productsList} = useContext(UserContext)
    return (
        <>
            <Header cart = {true} button = {true}/>
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