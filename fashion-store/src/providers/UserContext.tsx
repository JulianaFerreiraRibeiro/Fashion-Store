import { ReactNode, createContext, useState } from "react";
import { IListProducts } from "./AdminContext";
import { toast } from "react-toastify";
import { api } from "../services/api";
import { useNavigate } from "react-router-dom";

export interface IUserProviderProps {
    children: ReactNode;
}

export interface IUserContextProps{
    cartList: IListProducts[];
    setCartList: React.Dispatch<React.SetStateAction<IListProducts[]>>;
    isCartModalOpen: boolean;
    setIsCartModalOpen: React.Dispatch<React.SetStateAction<boolean>>;
    addProductToCart: (product: IListProducts) => void;
    removeProductFromCart: (productId: number) => void;
    getProductById: (productId: number) => Promise<void>;
    product: IListProducts | null;
}

export const UserContext = createContext({} as IUserContextProps)

export const UserProvider = ({children}: IUserProviderProps) => {
    const [cartList, setCartList] = useState<IListProducts[]>([])
    const [isCartModalOpen, setIsCartModalOpen] = useState(false)
    const [product, setProduct] = useState<IListProducts | null>(null)

    const navigate = useNavigate()

    const addProductToCart = (product: IListProducts) => {
        setCartList([...cartList, product])
        toast.success("Produto adicionado com sucesso")
        console.log(cartList)
    }

    const removeProductFromCart = (productId: number) => {
        const removedProduct = cartList.filter((product) => product.id !== productId)
        setCartList(removedProduct)
        toast.success("Produto removido com sucesso")
    }

    const getProductById = async (productId: number) => {
        try {
            const {data} = await api.get(`/products/${productId}`)
            setProduct(data)
            navigate("/product")
            console.log(data)
        } catch (error) {
            console.log(error)
        }
    }

    return(
        <UserContext.Provider value={{cartList, setCartList, isCartModalOpen, setIsCartModalOpen, addProductToCart, removeProductFromCart, getProductById, product}}>
            {children}
        </UserContext.Provider>
    )
}