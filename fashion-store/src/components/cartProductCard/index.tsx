import { IProductCardProps } from "../productAdminCard"
import { Paragraph, TitleFour } from "../typography"
import RemoveFromCart from "../../assets/remove_from_cart.svg"
import { StyledProductCartList } from "./style"
import { useContext } from "react"
import { UserContext } from "../../providers/UserContext"

export const CartProductCard = ({product}: IProductCardProps) => {
    const {removeProductFromCart} = useContext(UserContext)
    const price = Number(product.price)
    const formattedPrice = price.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' });
    return(
        <StyledProductCartList>
            <img src = {product.image} className="productImage"/>
            <div>
                <TitleFour>{product.name}</TitleFour>
                <Paragraph>{formattedPrice}</Paragraph>
            </div>
            <img src = {RemoveFromCart} className="productRemove" onClick = {() => removeProductFromCart(product.id)}/>
        </StyledProductCartList>
    )
}