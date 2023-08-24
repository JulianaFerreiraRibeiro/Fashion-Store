import { IProductCardProps } from "../productAdminCard";
import { Paragraph } from "../typography";
import AddToCart from "../../assets/add_to_cart.svg"
import { StyledUserProductCard } from "./style";

export const ProductUserCard = ({product}: IProductCardProps) => {

    const price = Number(product.price)
    const formattedPrice = price.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' });

    return (
        <StyledUserProductCard>
            <img className="productImage" src = {product.image}/>
            <Paragraph className="productName">{product.name}</Paragraph>
            <Paragraph className = "productPrice">{formattedPrice}</Paragraph>
            <div className = "addToCartController">
                <img src = {AddToCart}/>
                <Paragraph className="productPageButton">SAIBA MAIS</Paragraph>
            </div>

        </StyledUserProductCard>
    )
}