import { LoginForm } from "../../components/loginForm"
import BannerLogin from "../../assets/banner_login.svg"
import { TitleTwo } from "../../components/typography"
import { StyledLoginSection } from "./styles"

export const LoginPage = () => {
   return(
        <StyledLoginSection>
            <img src = {BannerLogin} alt = "banner da página de login, três garotas se divertindo e rindo"/>
            <div className="formSection">
                <TitleTwo>ENTRAR</TitleTwo>
                <LoginForm/>
            </div>
        </StyledLoginSection>
   )
}