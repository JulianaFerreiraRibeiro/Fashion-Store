import { LoginForm } from "../../components/loginForm"
import BannerLogin from "../../assets/banner_login.svg"
import { TitleTwo } from "../../components/typography"
import { StyledLoginSection } from "./styles"
import { Header } from "../../components/header"

export const LoginPage = () => {
   return(
        <>
            <Header/>
            <StyledLoginSection>
                <img src = {BannerLogin} alt = "banner da página de login, três garotas se divertindo e rindo"/>
                <div className="formSection">
                    <TitleTwo>ENTRAR</TitleTwo>
                    <LoginForm/>
                </div>
            </StyledLoginSection>
        </>
   )
}