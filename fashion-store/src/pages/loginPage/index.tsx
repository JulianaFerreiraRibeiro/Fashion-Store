import { LoginForm } from "../../components/loginForm"
import BannerLogin from "../../assets/banner_login.svg"
import { TitleTwo } from "../../components/typography"
import { StyledLoginSection } from "./styles"
import { Header } from "../../components/header"
import { Link } from "react-router-dom"
import Arrow from "../../assets/arrow.svg"

export const LoginPage = () => {
   return(
        <>
            <Header/>
            <StyledLoginSection>
                <img src = {BannerLogin} alt = "banner da página de login, três garotas se divertindo e rindo"/>
                <div className="formSection">
                    <div className = "backToHomeSection">
                        <Link to = "/">
                            <img src = {Arrow} className="arrow" alt = "seta preta voltada para a esquerda, retorna para a página de login"/>
                            VOLTAR
                        </Link>
                    </div>
                    <TitleTwo>ENTRAR</TitleTwo>
                    <LoginForm/>
                </div>
            </StyledLoginSection>
        </>
   )
}