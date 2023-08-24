import { useContext } from "react"
import { UserContext } from "../../providers/UserContext"

export const ProductPage = () => {
    const {product} = useContext(UserContext)
    return (
        <h1>Oi</h1>
    )
}