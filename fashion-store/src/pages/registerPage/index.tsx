import { RegisterForm } from "../../components/registerForm"
import { Paragraph, TitleTwo } from "../../components/typography"
import BannerRegister from "../../assets/banner_register.svg"
import { StyledRegisterSection } from "./style"
import { Link } from "react-router-dom"
import Arrow from "../../assets/arrow.svg"


export const RegisterPage = () => {
    return(
        <>
            <StyledRegisterSection>
                <img src={BannerRegister} className="banner" alt = "banner da loja, duas garotas posando para a foto com roupas claras"/>
                <div className = "registerContainer">
                    <div className = "backToLoginSection">
                        <img src = {Arrow} className="arrow" alt = "seta preta voltada para a esquerda, retorna para a página de login"/>
                        <Link to = "/">VOLTAR</Link>
                    </div>
                    <TitleTwo>CADASTRAR-SE</TitleTwo>
                    <Paragraph>Seja bem vindo, administrador!</Paragraph>
                    <RegisterForm/>
                </div>
            </StyledRegisterSection>
        </>
    )
}