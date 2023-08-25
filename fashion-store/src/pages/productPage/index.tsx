import { useContext } from "react"
import { UserContext } from "../../providers/UserContext"
import { Header } from "../../components/header"
import { Paragraph, TitleFour, TitleThree } from "../../components/typography"
import { StyledButton } from "../../styles/button"
import { Link } from "react-router-dom"

export const ProductPage = () => {
    const {product, addProductToCart} = useContext(UserContext)
    return (
        <>
            <Header cart={true}/>
            <section>
                <TitleFour> <Link to = "/">Home</Link> {'>'} {product?.name}</TitleFour>
                <section>
                    <img src={product?.image} alt={product?.name} />
                    <div>
                        <Paragraph>{product?.name}</Paragraph>
                        <TitleThree>{product?.price}</TitleThree>
                        <Paragraph>{product?.description}</Paragraph>
                        <StyledButton buttoncolor = "black" buttonsize="big" onClick = {() => addProductToCart(product!)}>ADICIONAR AO CARRINHO</StyledButton>
                    </div>
                </section>
            </section>
        </>
    )
}