import Logo from "../../assets/logo.svg"
import { StyledHeader } from "./style"
import HeaderCart from "../../assets/cart_header_button.svg"

export const Header = ({cart}: any) => {
    return (
        <StyledHeader>
            <nav>
                <img src={Logo} alt="logo da loja FashionStore em letras maiúsculas e na coloração preta" />
                {cart ? <img className="cart" src = {HeaderCart}/> : null}    
            </nav>
        </StyledHeader>
    )
}