import { useContext } from "react"
import { UserContext } from "../../providers/UserContext"
import { Header } from "../../components/header"
import { Paragraph, TitleFour, TitleThree, TitleTwo } from "../../components/typography"
import { StyledButton } from "../../styles/button"
import { Link } from "react-router-dom"
import { StyledProductPageSection } from "./style"
import { ProductUserCard } from "../../components/productUserCard"
import AddToCartButton from "../../assets/add_to_cart.svg"

export const ProductPage = () => {
    const {product, addProductToCart, userProductsList} = useContext(UserContext)
    const price = Number(product?.price)
    const formattedPrice = price.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' });
    return (
        <>
            <Header cart={true}/>
            <StyledProductPageSection>
                <TitleFour> <Link to = "/">HOME</Link> {'>'} {product?.name.toUpperCase()}</TitleFour>
                <section className="productSection">
                    <img src={product?.image} alt={product?.name} className="productImage"/>
                    <div className = "productDetails">
                        <Paragraph className="productName">{product?.name}</Paragraph>
                        <TitleThree className = "productPrice">{formattedPrice}</TitleThree>
                        <Paragraph className="productDescription">{product?.description}</Paragraph>
                        <StyledButton buttoncolor = "black" buttonsize="biggest" onClick = {() => addProductToCart(product!)}><img src = {AddToCartButton} />ADICIONAR AO CARRINHO</StyledButton>
                    </div>
                </section>
                <section className = "productsSection">
                    <TitleTwo>VEJA TAMBÉM</TitleTwo>
                    <ul>
                        {userProductsList.map(product => (
                            <ProductUserCard product={product} key = {product.id}/>
                        ))}
                    </ul>
                </section>
            </StyledProductPageSection>
        </>
    )
}