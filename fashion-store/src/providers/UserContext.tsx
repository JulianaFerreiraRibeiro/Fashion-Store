import { ReactNode, createContext, useState } from "react";
import { IListProducts } from "./AdminContext";
import { toast } from "react-toastify";

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
}

export const UserContext = createContext({} as IUserContextProps)

export const UserProvider = ({children}: IUserProviderProps) => {
    const [cartList, setCartList] = useState<IListProducts[]>([])
    const [isCartModalOpen, setIsCartModalOpen] = useState(false)

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


    return(
        <UserContext.Provider value={{cartList, setCartList, isCartModalOpen, setIsCartModalOpen, addProductToCart, removeProductFromCart}}>
            {children}
        </UserContext.Provider>
    )
}