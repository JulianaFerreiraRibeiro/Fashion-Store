import { ReactNode, createContext, useEffect, useState } from "react";
import {IListProducts } from "./AdminContext";
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
    product: IListProducts | undefined;
    renderProducts: (productId: number) => Promise<void>;
    userProductsList: IListProducts[];
    productsList: IListProducts[];
    productCounter: number;
    setProductCounter: React.Dispatch<React.SetStateAction<number>>;
}

export const UserContext = createContext({} as IUserContextProps)

export const UserProvider = ({children}: IUserProviderProps) => {

    const cartListStorage: IListProducts[] = JSON.parse(localStorage.getItem("@FashionStore:cartlist") || '[]');

    const [cartList, setCartList] = useState<IListProducts[]>(cartListStorage.length > 0 ? cartListStorage : [])
    const [isCartModalOpen, setIsCartModalOpen] = useState(false)
    const [product, setProduct] = useState<IListProducts | undefined>(undefined)
    const [userProductsList, setUserProductsList] = useState<IListProducts[]>([])
    const [productsList, setProductsList] = useState<IListProducts[]>([])
    const [productCounter, setProductCounter] = useState(0)

    
    useEffect(() => {
        const selectedProductStorage = localStorage.getItem("@FashionStore:product");
        if (selectedProductStorage) {
            const parsedProduct = JSON.parse(selectedProductStorage);
            setProduct(parsedProduct);
        }
    }, []);

    useEffect(() => {
        const handleReadProducts = async () => {
            try{
                const {data} = await api.get("/products")
                setUserProductsList(data)
                setProductsList(data)
            } catch (error) {
                console.log(error)
            }
        }
        handleReadProducts()
    }, [])


    const navigate = useNavigate()

    const addProductToCart = (product: IListProducts | undefined) => {
        if(product){
            const isProductInCart = cartList.find((cartProduct) => cartProduct.id === product.id);
            if(isProductInCart){
                toast.warning("Produto já foi adicionado ao carrinho!")
            } else {
                setCartList([...cartList, product])
                toast.success("Produto adicionado com sucesso!")
                localStorage.setItem("@FashionStore:cartlist", JSON.stringify(cartList))
            }
        }
    }

    const removeProductFromCart = (productId: number) => {
        const removedProduct = cartList.filter((product) => product.id !== productId)
        setCartList(removedProduct)
        toast.success("Produto removido com sucesso")
        localStorage.setItem("@FashionStore:cartlist", JSON.stringify(removedProduct));
    }

    const getProductById = async (productId: number) => {
        try {
            const {data} = await api.get(`/products/${productId}`)
            setProduct(data)
            localStorage.setItem("@FashionStore:product", JSON.stringify(data));
            navigate("/product")
            console.log(data)
        } catch (error) {
            console.log(error)
        }
    }

    useEffect(() => {
        const handleReadProducts = async () => {
            try{
                const {data} = await api.get("/products")
                setUserProductsList(data)
            } catch (error) {
                console.log(error)
            }
        }
        handleReadProducts()
    }, [])

    const renderProducts = async (productId: number) => {
        const filteredProducts = userProductsList.filter((product) => product.id !== productId)
        setUserProductsList(filteredProducts)
    }



    return(
        <UserContext.Provider value={{cartList, setCartList, isCartModalOpen, setIsCartModalOpen, addProductToCart, removeProductFromCart, getProductById, product, renderProducts, userProductsList, productsList, productCounter, setProductCounter}}>
            {children}
        </UserContext.Provider>
    )
}
