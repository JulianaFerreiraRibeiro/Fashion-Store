import { RegisterForm } from "../../components/registerForm"
import { Paragraph, TitleTwo } from "../../components/typography"
import BannerRegister from "../../assets/banner_register.svg"
import { StyledRegisterSection } from "./style"
import { Link } from "react-router-dom"
import Arrow from "../../assets/arrow.svg"
import { Header } from "../../components/header"


export const RegisterPage = () => {
    return(
        <>
            <Header/>
            <StyledRegisterSection>
                <img src={BannerRegister} className="banner" alt = "banner da página de registro, duas garotas posando para a foto com roupas claras"/>
                <div className = "registerContainer">
                    <div className = "backToLoginSection">
                        <Link to = "/login">
                            <img src = {Arrow} className="arrow" alt = "seta preta voltada para a esquerda, retorna para a página de login"/>
                            VOLTAR
                        </Link>
                    </div>
                    <TitleTwo>CADASTRAR-SE</TitleTwo>
                    <Paragraph>Seja bem vindo, administrador!</Paragraph>
                    <RegisterForm/>
                </div>
            </StyledRegisterSection>
        </>
    )
}