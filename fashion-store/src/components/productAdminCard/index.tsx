import { IListProducts } from "../../providers/AdminContext"
import { Paragraph } from "../typography"
import DeleteButton from "../../assets/delete_button.svg"
import EditButton from "../../assets/edit_button.svg"
import { StyledAdminProductsCards } from './style';

interface IProductCardProps{
    product: IListProducts
}

export const ProductCard = ({product}: IProductCardProps) => {
    const price = Number(product.price)
    return (
        <StyledAdminProductsCards>
            <div className = "productInformation">
                <img className = "productImage" src= {product.image} alt = {product.name}/>
                <div className="productDescription">
                    <Paragraph className = "productName">{product.name}</Paragraph>
                    <Paragraph className = "productPrice">R$ {price.toFixed(2)}</Paragraph>
                </div>
            </div>
            <div className="productController">
                <img src = {EditButton} alt = "lápis na coloração preta, para editar produtos"/>
                <img src = {DeleteButton} alt = "lixeira na coloração preta, para excluir produtos"/>
            </div>
        </StyledAdminProductsCards>
    )
}