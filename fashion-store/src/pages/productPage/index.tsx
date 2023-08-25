import { useContext } from "react"
import { UserContext } from "../../providers/UserContext"
import { Header } from "../../components/header"
import { Paragraph, TitleFour, TitleThree } from "../../components/typography"
import { StyledButton } from "../../styles/button"
import { Link } from "react-router-dom"
import { StyledProductPageSection } from "./style"

export const ProductPage = () => {
    const {product, addProductToCart} = useContext(UserContext)
    const price = Number(product?.price)
    const formattedPrice = price.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' });
    return (
        <>
            <Header cart={true}/>
            <StyledProductPageSection>
                <TitleFour> <Link to = "/">HOME</Link> {'>'} {product?.name.toUpperCase()}</TitleFour>
                <section className="productSection">
                    <img src={product?.image} alt={product?.name} />
                    <div className = "productDetails">
                        <Paragraph className="productName">{product?.name}</Paragraph>
                        <TitleThree className = "productPrice">{formattedPrice}</TitleThree>
                        <Paragraph className="productDescription">{product?.description}</Paragraph>
                        <StyledButton buttoncolor = "black" buttonsize="big" onClick = {() => addProductToCart(product!)}>ADICIONAR AO CARRINHO</StyledButton>
                    </div>
                </section>
            </StyledProductPageSection>
        </>
    )
}