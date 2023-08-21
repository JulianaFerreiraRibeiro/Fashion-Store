import { IListProducts } from "../../providers/AdminContext"
import { Paragraph } from "../typography"
import DeleteButton from "../../assets/delete_button.svg"
import EditButton from "../../assets/edit_button.svg"
import { StyledAdminProductsCards } from './style';

interface IProductCardProps{
    product: IListProducts
}

export const ProductCard = ({product}: IProductCardProps) => {
    return (
        <StyledAdminProductsCards>
            <div className = "productInformation">
                <img src= {product.image} alt = {product.name}/>
                <div className="productDescription">
                    <Paragraph>{product.name}</Paragraph>
                    <Paragraph>R$ {product.price.toFixed(2)}</Paragraph>
                </div>
            </div>
            <div className="productController">
                <img src = {EditButton} alt = "lápis na coloração preta, para editar produtos"/>
                <img src = {DeleteButton} alt = "lixeira na coloração preta, para excluir produtos"/>
            </div>
        </StyledAdminProductsCards>
    )
}