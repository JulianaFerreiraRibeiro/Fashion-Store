import Logo from "../../assets/logo.svg"
import { StyledHeader } from "./style"
import HeaderCart from "../../assets/cart_header_button.svg"
import { useContext } from "react"
import { UserContext } from "../../providers/UserContext"
import { ModalCart } from "../modalCart"
import { StyledButton } from "../../styles/button"
import { Link } from "react-router-dom"
import { AdminContext } from "../../providers/AdminContext"

export const Header = ({cart, button, logout}: any) => {
    const {setIsCartModalOpen, isCartModalOpen} = useContext(UserContext)
    const {userLogout}= useContext(AdminContext)

    return (
        <StyledHeader>
            <nav>
                <Link to = "/">
                    <img src={Logo} alt="logo da loja FashionStore em letras maiúsculas e na coloração preta" />
                </Link>
                {button ? 
                <div className="buttonsSection">
                    <Link to = "/login">
                        <StyledButton buttoncolor = "black" buttonsize = "small">LOGIN</StyledButton>  
                    </Link>
                    <Link to = "/register">

                        <StyledButton buttoncolor = "white" buttonsize = "medium">CADASTRE-SE</StyledButton> 
                    </Link>
                </div>
                 : null
            }    
                {cart ? <img className="cart" src = {HeaderCart} onClick = {() => setIsCartModalOpen(true)}/> : null}

                {logout ? <StyledButton buttoncolor = "black" buttonsize = "small" onClick = {() => userLogout()}>Sair</StyledButton>: null}

                {isCartModalOpen ? <ModalCart/> : null}
            </nav>
        </StyledHeader>
    )
}