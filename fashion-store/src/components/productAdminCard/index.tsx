import { AdminContext, IListProducts } from "../../providers/AdminContext"
import { Paragraph } from "../typography"
import DeleteButton from "../../assets/delete_button.svg"
import EditButton from "../../assets/edit_button.svg"
import { StyledAdminProductsCards } from './style';
import { useContext } from "react";

export interface IProductCardProps{
    product: IListProducts
}

export const ProductAdminCard = ({product}: IProductCardProps) => {
    const {handleDeleteProduct, setEditIdProduct, setIsModalEditOpen} = useContext(AdminContext)
    const price = Number(product.price)
    const formattedPrice = price.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' });

    return (
        <StyledAdminProductsCards>
            <div className = "productInformation">
                <img className = "productImage" src= {product.image} alt = {product.name}/>
                <div className="productDescription">
                    <Paragraph className = "productName">{product.name}</Paragraph>
                    <Paragraph className = "productPrice">{formattedPrice}</Paragraph>
                </div>
            </div>
            <div className="productController">
                <img src = {EditButton} alt = "lápis na coloração preta, para editar produtos" onClick = {() => {
                    setEditIdProduct(product)
                    setIsModalEditOpen(true)
                }}
                    
                    />
                <img src = {DeleteButton} alt = "lixeira na coloração preta, para excluir produtos" onClick = {() => handleDeleteProduct(product.id)}/>
            </div>
        </StyledAdminProductsCards>
    )
}