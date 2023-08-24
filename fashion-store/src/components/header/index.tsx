import Logo from "../../assets/logo.svg"
import { StyledHeader } from "./style"
import HeaderCart from "../../assets/cart_header_button.svg"
import { useContext } from "react"
import { UserContext } from "../../providers/UserContext"

export const Header = ({cart}: any) => {
    const {setIsCartModalOpen} = useContext(UserContext)
    return (
        <StyledHeader>
            <nav>
                <img src={Logo} alt="logo da loja FashionStore em letras maiúsculas e na coloração preta" />
                {cart ? <img className="cart" src = {HeaderCart} onClick = {() => setIsCartModalOpen(true)}/> : null}    
            </nav>
        </StyledHeader>
    )
}