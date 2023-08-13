import Logo from "../../assets/logo.svg"
import { StyledHeader } from "./style"

export const Header = () => {
    return (
        <StyledHeader>
            <nav>
                <img src={Logo} alt="logo da loja FashionStore em letras maiúsculas e na coloração preta" />
            </nav>
        </StyledHeader>
    )
}