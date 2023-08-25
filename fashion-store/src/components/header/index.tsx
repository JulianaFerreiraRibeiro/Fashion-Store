import Logo from "../../assets/logo.svg"
import { StyledHeader } from "./style"
import HeaderCart from "../../assets/cart_header_button.svg"
import { useContext } from "react"
import { UserContext } from "../../providers/UserContext"
import { ModalCart } from "../modalCart"

export const Header = ({cart}: any) => {
    const {setIsCartModalOpen, isCartModalOpen} = useContext(UserContext)
    return (
        <StyledHeader>
            <nav>
                <img src={Logo} alt="logo da loja FashionStore em letras maiúsculas e na coloração preta" />
                {cart ? <img className="cart" src = {HeaderCart} onClick = {() => setIsCartModalOpen(true)}/> : null}    

                {isCartModalOpen ? <ModalCart/> : null}
            </nav>
        </StyledHeader>
    )
}